import { createHash } from 'node:crypto';
import mongoose from 'mongoose';
import { SessionModel } from '../models/sessionSchema.js';
import { UserDataModel } from '../models/userSchema.js';
import { createTokenService } from './tokens.js';
import { envConfig } from '../scripts/config.js';
import { sessionEvents } from './sessionEvents.js';
import { publicBanReason } from './accountBan.js';
import { trackService } from '../services/pendingWork.js';

export const refreshHash = token => createHash('sha256').update(token).digest('hex');
const validID = value => typeof value === 'string' && /^[a-f0-9]{24}$/i.test(value);
const invalid = () => { const error = new Error('INVALID_SESSION'); error.status = 401; return error; };
export function createSessionService({ sessions, users, tokens, newID = () => new mongoose.Types.ObjectId(), now = () => new Date(), events = sessionEvents }) {
  const response = (accountID, sid, expiresAt, refreshToken) => ({
    token: tokens().issue(accountID, sid), tokenType: 'Bearer', expiresIn: 900,
    refreshToken, refreshExpiresAt: expiresAt.toISOString(),
  });
  return trackService({
    start: async accountID => {
      const sid = newID(), expiresAt = new Date(now().getTime() + 7 * 86400000);
      const refreshToken = tokens().issueRefresh(accountID, sid, expiresAt);
      // Sign before saving; no session should be created if signing fails.
      const result = response(accountID, sid, expiresAt, refreshToken);
      await sessions.create({ _id: sid, accountID, refreshHash: refreshHash(refreshToken), expiresAt });
      return result;
    },
    refresh: async token => {
      let claims;
      try { claims = tokens().verifyRefresh(token); } catch { throw invalid(); }
      if (!validID(claims.sid) || !validID(claims.sub)) throw invalid();
      const account = await users.findById(claims.sub).select('_id isBanned banReason');
      if (!account || account.isBanned) {
        await sessions.updateMany({ accountID: claims.sub, revokedAt: null }, { $set: { revokedAt: now() } });
        events.emit('revoked', { accountID: claims.sub });
        if (account?.isBanned) throw Object.assign(new Error('ACCOUNT_BANNED'), { status: 403, reason: publicBanReason(account) });
        throw invalid();
      }
      const expiresAt = new Date(claims.exp * 1000);
      const nextToken = tokens().issueRefresh(claims.sub, claims.sid, expiresAt);
      const result = response(claims.sub, claims.sid, expiresAt, nextToken);
      const rotated = await sessions.findOneAndUpdate({
        _id: claims.sid, accountID: claims.sub, revokedAt: null,
        expiresAt: { $gt: now() }, refreshHash: refreshHash(token),
      }, { $set: { refreshHash: refreshHash(nextToken) } }, { new: true });
      if (!rotated) {
        // A signed token from this session was reused or the session expired.
        await sessions.updateOne({ _id: claims.sid, accountID: claims.sub, revokedAt: null }, { $set: { revokedAt: now() } });
        events.emit('revoked', { sessionID: claims.sid });
        throw invalid();
      }
      return result;
    },
    active: (sid, accountID) => sessions.exists({ _id: sid, accountID, revokedAt: null, expiresAt: { $gt: now() } }),
    logout: async (sid, accountID) => {
      await sessions.updateOne({ _id: sid, accountID, revokedAt: null }, { $set: { revokedAt: now() } });
      events.emit('revoked', { sessionID: String(sid) });
    },
    logoutAll: async accountID => {
      await sessions.updateMany({ accountID, revokedAt: null }, { $set: { revokedAt: now() } });
      events.emit('revoked', { accountID: String(accountID) });
    },
  });
}
export const sessionService = createSessionService({ sessions: SessionModel, users: UserDataModel,
  tokens: () => createTokenService(envConfig.ACCESS_TOKEN_SECRET) });
