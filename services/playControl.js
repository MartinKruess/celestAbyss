import { CharDataModel } from '../models/characterSchema.js';
import { UserDataModel } from '../models/userSchema.js';
import { SessionModel } from '../models/sessionSchema.js';
import { sessionService } from '../security/sessions.js';
import { publicBanReason } from '../security/accountBan.js';
import { characterError } from './characterPolicy.js';
import { digest } from './play.js';
import { trackService } from './pendingWork.js';

const validId = value => typeof value === 'string' && /^[a-f\d]{24}$/i.test(value);
function leaseFilter(serverID, characterID, playSessionId) {
  if (!validId(characterID) || typeof playSessionId !== 'string' || !/^[A-Za-z\d_-]{43}$/.test(playSessionId))
    throw characterError('INVALID_PLAY_SESSION', 400);
  return { _id: characterID, 'activePlay.serverID': serverID, 'activePlay.leaseHash': digest(playSessionId) };
}

export function createPlayControl({ characters = CharDataModel, users = UserDataModel, records = SessionModel,
  sessions = sessionService, now = () => new Date() } = {}) {
  return trackService({
    // A server-held lease may finish saving even after its player login is revoked.
    leave: async ({ serverID, characterID, body }) => {
      if (!body || Object.keys(body).sort().join(',') !== 'logout,playSessionId' || typeof body.logout !== 'boolean')
        throw characterError('INVALID_LEAVE_REQUEST', 400);
      const character = await characters.findOne(leaseFilter(serverID, characterID, body.playSessionId)).select('accountID +activePlay').lean();
      if (!character) throw characterError('INVALID_PLAY_SESSION', 409);
      if (body.logout) {
        if (!validId(character.activePlay.sessionID)) throw characterError('INVALID_PLAY_SESSION', 409);
        await sessions.logout(character.activePlay.sessionID, character.accountID);
      }
      return { ended: true, loggedOut: body.logout };
    },
    check: async ({ serverID, leases }) => {
      if (!Array.isArray(leases) || leases.length > 128) throw characterError('INVALID_PLAY_SESSIONS', 400);
      const seen = new Set();
      const filters = leases.map(value => {
        if (!value || Object.keys(value).sort().join(',') !== 'characterID,playSessionId' || seen.has(value.characterID))
          throw characterError('INVALID_PLAY_SESSIONS', 400);
        seen.add(value.characterID);
        return leaseFilter(serverID, value.characterID, value.playSessionId);
      });
      if (!filters.length) return { sessions: [] };
      const charactersFound = await characters.find({ $or: filters }).select('accountID +activePlay').lean();
      const time = now();
      const [accounts, logins] = await Promise.all([
        users.find({ _id: { $in: [...new Set(charactersFound.map(c => c.accountID))] } }).select('_id isBanned banReason').lean(),
        records.find({ _id: { $in: charactersFound.map(c => c.activePlay.sessionID).filter(validId) }, revokedAt: null, expiresAt: { $gt: time } }).select('_id accountID').lean(),
      ]);
      const accountMap = new Map(accounts.map(a => [String(a._id), a]));
      const loginMap = new Map(logins.map(s => [String(s._id), String(s.accountID)]));
      // Also handles bans applied directly by an administrative database tool.
      for (const account of accounts) if (account.isBanned) await sessions.logoutAll(String(account._id));
      const renewals = [];
      const result = leases.map((lease, index) => {
        const character = charactersFound.find(c => String(c._id) === lease.characterID);
        const account = character && accountMap.get(String(character.accountID));
        let code = '', reason = '';
        if (!character || character.activePlay.closed) code = 'PLAY_SESSION_ENDED';
        else if (account?.isBanned) { code = 'ACCOUNT_BANNED'; reason = publicBanReason(account); }
        else if (!account || loginMap.get(String(character.activePlay.sessionID)) !== String(character.accountID)) code = 'INVALID_SESSION';
        if (!code) renewals.push({ updateOne: { filter: { ...filters[index], 'activePlay.closed': false },
          update: { $set: { 'activePlay.expiresAt': new Date(time.getTime() + 120000) } } } });
        return { characterID: lease.characterID, allowed: !code, code, reason };
      });
      if (renewals.length) await characters.bulkWrite(renewals, { ordered: false });
      return { sessions: result };
    },
  });
}
export const playControl = createPlayControl();
