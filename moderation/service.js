import { createHash } from 'node:crypto';
import mongoose from 'mongoose';
import { EventEmitter } from 'node:events';
import { evaluate } from './engine.js';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';
import { ModerationAttemptModel, ModerationCaseModel, PlayerReportModel } from '../models/moderationCaseSchema.js';
import { ChatMessageModel } from '../models/chatSchema.js';
import { chatStore } from '../chat/store.js';
import { chatError } from '../chat/protocol.js';
export const moderationEvents = new EventEmitter();
const hash = text => createHash('sha256').update(text).digest('hex');
const day = 86400000;
const snapshotMessage = message => ({ messageID: String(message._id), sequence: message.sequence,
  senderID: String(message.senderID), senderName: message.senderName,
  text: message.originalText || message.text, sentAt: message.sentAt });
const recent = () => ({ expiresAt: { $gt: new Date() } });
let rulesCache, rulesExpire = 0;
let pendingChecks = 0;
async function activeRules() {
  if (!rulesCache || rulesExpire <= Date.now()) {
    rulesExpire = Date.now() + 30000;
    rulesCache = ModerationRuleModel.find({ active: true, status: 'agreed' }).lean().exec();
    rulesCache.catch(() => { rulesCache = null; });
  }
  return rulesCache;
}
async function snapshot(sequence, limit = 50, session) {
  return (await ChatMessageModel.find({ channel: 'global', ...recent(), ...(sequence !== undefined ? { sequence: { $lte: sequence } } : {}) })
    .select('+originalText').sort({ sequence: -1 }).limit(limit).session(session || null).lean()).reverse().map(snapshotMessage);
}

export async function initializeModeration() {
  rulesCache = null;
  await Promise.all([ModerationRuleModel.createIndexes(), ModerationAttemptModel.createIndexes(), ModerationCaseModel.createIndexes(), PlayerReportModel.createIndexes()]);
  // Backfill old messages, but do not expose messages already older than 24h.
  await ChatMessageModel.updateMany({ expiresAt: { $exists: false } }, [{ $set: { expiresAt: { $add: ['$sentAt', day] } } }]);
}

export const moderationService = {
  prepare: async ({ identity, clientMessageID, text }) => {
    if (pendingChecks >= 64) throw chatError('MODERATION_BUSY');
    pendingChecks++;
    try {
    const filter = { senderID: identity.accountID, clientMessageID };
    const old = await ModerationAttemptModel.findOne(filter);
    if (old) {
      if (old.expiresAt <= new Date()) throw chatError('MESSAGE_OUTSIDE_HISTORY');
      if (old.inputHash !== hash(text)) throw chatError('MESSAGE_ID_CONFLICT');
      return { action: old.action, text: old.text, caseID: old.caseID ? String(old.caseID) : null };
    }
    const rules = await activeRules();
    const decision = await evaluate(text, rules, { language: identity.language || 'de', context: () => snapshot(undefined, 5) });
    try {
      return await mongoose.connection.transaction(async session => {
        const entry = { ...filter, inputHash: hash(text), action: decision.action, text: decision.text,
          releaseText: decision.releaseText,
          rules: decision.matchedRules, expiresAt: new Date(Date.now() + day) };
        if (decision.matchedRules.length) {
          // Held, blocked and masked originals are private; never chat history.
          entry.originalText = text;
        }
        if (decision.automaticReport) {
          const context = await snapshot(undefined, 49, session);
          const [incident] = await ModerationCaseModel.create([{ targetKey: `attempt:${identity.accountID}:${clientMessageID}`,
            source: 'system', senderID: identity.accountID, clientMessageID, originalText: text,
            snapshot: [...context, { senderID: identity.accountID, senderName: identity.username, text, sentAt: new Date() }],
            rules: decision.matchedRules, status: decision.action === 'hold' ? 'held' : 'open', expiresAt: new Date(Date.now() + 30 * day) }], { session });
          entry.caseID = incident._id;
        }
        const [attempt] = await ModerationAttemptModel.create([entry], { session });
        return { action: attempt.action, text: attempt.text, caseID: attempt.caseID ? String(attempt.caseID) : null };
      });
    } catch (error) {
      if (error.code !== 11000) throw error;
      const existing = await ModerationAttemptModel.findOne(filter);
      if (!existing || existing.inputHash !== hash(text)) throw chatError('MESSAGE_ID_CONFLICT');
      return { action: existing.action, text: existing.text, caseID: existing.caseID ? String(existing.caseID) : null };
    }
    } finally { pendingChecks--; }
  },
  published: async ({ caseID, message }) => {
    if (caseID) await ModerationCaseModel.updateOne({ _id: caseID }, { $set: { messageID: message.id, targetKey: `message:${message.id}` } });
  },
  report: async ({ identity, messageID, reason, retry = false }) => {
    const visible = await chatStore.history();
    if (!visible.messages.some(message => message.id === messageID)) throw chatError('MESSAGE_NOT_REPORTABLE');
    try { return await mongoose.connection.transaction(async session => {
      const message = await ChatMessageModel.findOne({ _id: messageID, ...recent() }).select('+originalText').session(session);
      if (!message) throw chatError('MESSAGE_NOT_REPORTABLE');
      const incident = await ModerationCaseModel.findOneAndUpdate({ $or: [
        { targetKey: `message:${messageID}` }, { targetKey: `attempt:${message.senderID}:${message.clientMessageID}` },
      ] }, { $setOnInsert: {
        targetKey: `message:${messageID}`,
        source: 'player', senderID: message.senderID, messageID, originalText: message.originalText || message.text,
        snapshot: await snapshot(message.sequence, 50, session), status: 'open', expiresAt: new Date(Date.now() + 30 * day),
      } }, { upsert: true, new: true, session, setDefaultsOnInsert: true });
      const result = await PlayerReportModel.updateOne({ caseID: incident._id, reporterID: identity.accountID },
        { $setOnInsert: { reason } }, { upsert: true, session });
      return { caseID: String(incident._id), duplicate: result.upsertedCount === 0 };
    }); } catch (error) {
      if (error.code === 11000 && !retry) return moderationService.report({ identity, messageID, reason, retry: true });
      throw error;
    }
  },
  resolve: async ({ caseID, actorID, decision, note }) => {
    const result = await mongoose.connection.transaction(async session => {
      const incident = await ModerationCaseModel.findById(caseID).session(session);
      if (!incident) throw chatError('CASE_NOT_FOUND');
      if (!['held', 'open'].includes(incident.status)) throw chatError('CASE_ALREADY_RESOLVED');
      if (incident.status === 'held' && !['release', 'block'].includes(decision)) throw chatError('INVALID_DECISION');
      if (incident.status === 'open' && !['dismiss', 'confirm'].includes(decision)) throw chatError('INVALID_DECISION');
      const status = { release: 'released', block: 'blocked', dismiss: 'dismissed', confirm: 'confirmed' }[decision];
      incident.status = status; incident.reviewedBy = actorID; incident.reviewedAt = new Date(); incident.resolution = note;
      incident.expiresAt = new Date(Date.now() + (decision === 'dismiss' ? 1 : 90) * day);
      incident.audit.push({ actorID, action: decision, note, at: new Date() });
      await incident.save({ session });
      if (decision === 'release' || decision === 'block') {
        const attempt = await ModerationAttemptModel.findOne({ senderID: incident.senderID, clientMessageID: incident.clientMessageID }).select('+releaseText').session(session);
        if (decision === 'release' && (!attempt || attempt.expiresAt <= new Date())) throw chatError('HELD_MESSAGE_EXPIRED');
        if (attempt) {
          attempt.action = decision === 'release' ? 'allow' : 'block';
          attempt.text = decision === 'release' ? attempt.releaseText || incident.originalText : null;
          await attempt.save({ session });
        }
      }
      return { status, caseID, senderID: String(incident.senderID), clientMessageID: incident.clientMessageID };
    });
    moderationEvents.emit('resolved', result);
    // Release permits re-send by the original client; it is not a new moderator-authored message.
    return result;
  },
  sweep: async () => mongoose.connection.transaction(async session => {
    const expired = await ModerationCaseModel.find({ expiresAt: { $lte: new Date() }, legalHold: false }).limit(500).select('_id').session(session);
    const ids = expired.map(entry => entry._id);
    await PlayerReportModel.deleteMany({ caseID: { $in: ids } }, { session });
    await ModerationCaseModel.deleteMany({ _id: { $in: ids }, legalHold: false, expiresAt: { $lte: new Date() } }, { session });
    return ids.length;
  }),
};
