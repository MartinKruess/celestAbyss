import mongoose from 'mongoose';
import { UserDataModel } from '../models/userSchema.js';
import { SessionModel } from '../models/sessionSchema.js';
import { sessionEvents } from './sessionEvents.js';
import { trackAsync } from '../services/pendingWork.js';

export function createBanAccount({ users = UserDataModel, sessions = SessionModel, events = sessionEvents,
  transaction = work => mongoose.connection.transaction(work), now = () => new Date() } = {}) {
  return trackAsync(async (accountID, reason) => {
  await transaction(async session => {
    const account = await users.updateOne({ _id: accountID }, { $set: { isBanned: true, banReason: reason } }, { session });
    if (!account.matchedCount) throw Object.assign(new Error('ACCOUNT_NOT_FOUND'), { status: 404 });
    await sessions.updateMany({ accountID, revokedAt: null }, { $set: { revokedAt: now() } }, { session });
  });
  events.emit('revoked', { accountID: String(accountID), code: 'ACCOUNT_BANNED', reason });
  });
}
export const banAccount = createBanAccount();
