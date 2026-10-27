import mongoose from 'mongoose';
import { PlaySaveReceiptModel } from '../models/playSaveReceiptSchema.js';
import { dedicatedRuntime } from './dedicatedRuntime.js';
import { createHash, randomBytes } from 'node:crypto';
import { PlayTicketModel } from '../models/playTicketSchema.js';
import { CharDataModel } from '../models/characterSchema.js';
import { UserDataModel } from '../models/userSchema.js';
import { sessionService } from '../security/sessions.js';
import { dedicatedConfiguration } from '../security/dedicated.js';
import { characterError } from './characterPolicy.js';
import { loadCharacterStatProfile } from './characterStats.js';
import { loadCharacterSkills, normalizeLearnedSkills } from './characterSkills.js';
import { defaultHudProfile, normalizeHudProfile } from './hudProfile.js';
import { normalizeToolbarSkills } from './toolbarSkills.js';
import { emptyInventoryState, normalizeInventoryState } from './inventoryState.js';
import { trackService } from './pendingWork.js';
import { publicBanReason } from '../security/accountBan.js';

const id = value => typeof value === 'string' && /^[a-f\d]{24}$/i.test(value);
const secret = value => typeof value === 'string' && /^[A-Za-z\d_-]{43}$/.test(value);
export const digest = value => createHash('sha256').update(value).digest('hex');
// Only a final save or an explicitly fenced server restart releases ownership.
export const inactivePlay = () => ({ 'activePlay.closed': { $ne: false } });

// Scalar gameplay fields and the bounded HUD profile. Inventories/skills stay in their own systems.
export function normalizePlayState(state) {
  if (!state || typeof state !== 'object' || Array.isArray(state)
    || !['experience,level,moral,position,skillpoints', 'currentHealth,currentMana,experience,level,moral,position,skillpoints'].includes(Object.keys(state).filter(key => !['hudProfile', 'inventoryState', 'learnedSkills', 'toolbarSkills'].includes(key)).sort().join(','))) throw characterError('INVALID_SAVE_STATE', 400);
  const hud = 'hudProfile' in state ? { hudProfile: normalizeHudProfile(state.hudProfile) } : {};
  const inventory = 'inventoryState' in state ? { inventoryState: normalizeInventoryState(state.inventoryState) } : {};
  const ranks = 'learnedSkills' in state ? { learnedSkills: normalizeLearnedSkills(state.learnedSkills) } : {};
  const toolbar = 'toolbarSkills' in state ? { toolbarSkills: normalizeToolbarSkills(state.toolbarSkills, ranks.learnedSkills, inventory.inventoryState) } : {};
  const vitals = {};
  if ('currentHealth' in state) {
    for (const key of ['currentHealth', 'currentMana']) {
      if (typeof state[key] !== 'number' || !Number.isFinite(state[key]) || state[key] < 0 || state[key] > 1e12) throw characterError('INVALID_SAVE_STATE', 400);
      vitals[key] = state[key];
    }
  }
  const fields = ['level', 'experience', 'skillpoints', 'moral'];
  if (fields.some(key => !Number.isSafeInteger(state[key])) || state.level < 1 || state.level > 2147483647
    || state.experience < 0 || state.skillpoints < 0 || state.skillpoints > 2147483647
    || state.moral < -2147483648 || state.moral > 2147483647) throw characterError('INVALID_SAVE_STATE', 400);
  if (!Array.isArray(state.position) || state.position.length !== 3
    || state.position.some(n => typeof n !== 'number' || !Number.isFinite(n) || Math.abs(n) > 1e8)) throw characterError('INVALID_SAVE_STATE', 400);
  return { level: state.level, experience: state.experience, skillpoints: state.skillpoints,
    moral: state.moral, position: state.position.join(','), ...vitals, ...hud, ...inventory, ...ranks, ...toolbar };
}

export function createPlayService({ tickets = PlayTicketModel, characters = CharDataModel, users = UserDataModel,
  receipts = PlaySaveReceiptModel, runtime = dedicatedRuntime,
  transaction = work => mongoose.connection.transaction(work, { readConcern: { level: 'snapshot' }, writeConcern: { w: 'majority', j: true, wtimeout: 5000 } }),
  sessions = sessionService, configuration = () => dedicatedConfiguration(), now = () => new Date(),
  newSecret = () => randomBytes(32).toString('base64url'), loadStats = loadCharacterStatProfile, loadSkills = loadCharacterSkills } = {}) {
  return trackService({
    issue: async ({ accountID, sessionID, characterID }) => {
      const config = configuration();
      if (!config) throw characterError('DEDICATED_NOT_CONFIGURED', 503);
      if (!id(characterID)) throw characterError('INVALID_CHARACTER_ID', 400);
      if (!await characters.exists({ _id: characterID, accountID })) throw characterError('CHARACTER_NOT_FOUND', 404);
      const ticket = newSecret(), expiresAt = new Date(now().getTime() + 60000);
      await tickets.findOneAndUpdate({ _id: `${accountID}:${characterID}` }, { $set: {
        ticketHash: digest(ticket), accountID, sessionID, characterID, serverID: config.serverID, expiresAt,
      } }, { upsert: true });
      return { ticket, expiresAt: expiresAt.toISOString(), serverAddress: config.address, characterID };
    },
    admit: async ({ serverID, instanceID, ticket }) => {
      if (!secret(ticket)) throw characterError('INVALID_PLAY_TICKET', 401);
      const consumed = await tickets.findOneAndDelete({ ticketHash: digest(ticket), serverID, expiresAt: { $gt: now() } });
      if (!consumed) throw characterError('INVALID_PLAY_TICKET', 401);
      const { accountID, sessionID, characterID } = consumed;
      const account = await users.findById(accountID).select('_id isBanned banReason');
      if (account?.isBanned) throw Object.assign(characterError('ACCOUNT_BANNED', 403), { reason: publicBanReason(account) });
      if (!account || !await sessions.active(sessionID, accountID)) throw characterError('INVALID_SESSION', 401);
      return transaction(async session => {
        await runtime.admit({ serverID, instanceID, session });
        const playSessionId = newSecret(), expiresAt = new Date(now().getTime() + 120000);
        const character = await characters.findOneAndUpdate({ _id: characterID, accountID, ...inactivePlay() }, { $set: {
          activePlay: { leaseHash: digest(playSessionId), serverID, instanceID, sessionID, expiresAt, sequence: 0, closed: false },
        } }, { new: true, session }).select('+activePlay').populate('skills').populate('inventory');
        if (!character) throw characterError('CHARACTER_IN_USE_OR_UNAVAILABLE', 409);
        const document = character.toObject ? character.toObject() : { ...character };
        // Skills, points, vitals and inventory now come from the same locked snapshot.
        const [statProfile, skillCatalog] = await Promise.all([loadStats(document), loadSkills(document,{includeFuture:true})]);
        delete document.activePlay;
        document.hudProfile = document.hudProfile ? normalizeHudProfile(document.hudProfile) : defaultHudProfile();
        document.inventoryState = document.inventoryState ? normalizeInventoryState(document.inventoryState, { upgradeLegacy: true }) : emptyInventoryState();
        document.toolbarSkills = normalizeToolbarSkills(document.toolbarSkills ?? [], document.learnedSkills ?? [], document.inventoryState);
        return { playSessionId, sequence: 0, leaseExpiresAt: expiresAt.toISOString(), character: document, statProfile, skillCatalog };
      });
    },
    save: async ({ serverID, characterID, body }) => {
      if (!id(characterID) || !body || !secret(body.playSessionId) || typeof body.saveId !== 'string'
        || !/^[A-Za-z\d-]{16,64}$/.test(body.saveId) || !Number.isSafeInteger(body.sequence) || body.sequence < 1 || body.sequence > 2147483647
        || typeof body.release !== 'boolean' || Object.keys(body).sort().join(',') !== 'playSessionId,release,saveId,sequence,state') throw characterError('INVALID_SAVE_REQUEST', 400);
      const state = normalizePlayState(body.state);
      const hash = digest(JSON.stringify({ sequence: body.sequence, saveId: body.saveId, release: body.release, state }));
      const lease = { _id: characterID, 'activePlay.serverID': serverID, 'activePlay.leaseHash': digest(body.playSessionId) };
      // Same id + same content is safe to retry, including an acknowledgement lost during final release.
      const run = body.release ? transaction : work => work(null);
      return run(async session => {
        const receipt = { _id: digest(body.playSessionId), serverID, characterID, saveId: body.saveId, hash, sequence: body.sequence };
        if (body.release && await receipts.exists(receipt, { session }))
          return { saved: true, sequence: body.sequence, released: true };
        const repeated = await characters.exists({ ...lease, 'activePlay.lastSaveId': body.saveId, 'activePlay.lastSaveHash': hash, 'activePlay.sequence': body.sequence }, { session });
        if (repeated) return { saved: true, sequence: body.sequence, released: body.release };
        const time = now();
        const updated = await characters.findOneAndUpdate({ ...lease, 'activePlay.closed': false,
          'activePlay.sequence': body.sequence - 1 }, { $set: {
          ...state, lastSavedAt: time, 'activePlay.sequence': body.sequence,
          'activePlay.lastSaveId': body.saveId, 'activePlay.lastSaveHash': hash, 'activePlay.closed': body.release,
          'activePlay.expiresAt': new Date(time.getTime() + (body.release ? 0 : 120000)),
        } }, { new: true, session, ...(!session ? { writeConcern: { w: 'majority', j: true, wtimeout: 5000 } } : {}) });
        if (updated) {
          if (body.release) await receipts.updateOne({ _id: receipt._id }, { $set: { ...receipt, expiresAt: new Date(time.getTime() + 86400000) } }, { upsert: true, session });
          return { saved: true, sequence: body.sequence, released: body.release };
        }
        // Concurrent identical retries may both miss the first read before one commits.
        if (await characters.exists({ ...lease, 'activePlay.lastSaveId': body.saveId, 'activePlay.lastSaveHash': hash, 'activePlay.sequence': body.sequence }, { session })) return { saved: true, sequence: body.sequence, released: body.release };
        throw characterError('PLAY_SESSION_CONFLICT_OR_EXPIRED', 409);
      });
    },
  });
}
export const playService = createPlayService();
