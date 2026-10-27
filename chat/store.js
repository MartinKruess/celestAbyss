import mongoose from 'mongoose';
import { ChatMessageModel, ChatCounterModel } from '../models/chatSchema.js';
import { visibleHistory } from './history.js';

export function publicMessage(document) {
  return { id: String(document._id), channel: document.channel, sequence: document.sequence,
    sender: { accountID: String(document.senderID), username: document.senderName },
    clientMessageID: document.clientMessageID, text: document.text, sentAt: new Date(document.sentAt).toISOString() };
}
export async function initializeChatStore() {
  await ChatMessageModel.createIndexes();
  await ChatCounterModel.updateOne({ _id: 'global' }, { $setOnInsert: { sequence: 0 } }, { upsert: true });
}
export function createChatStore({ messages = ChatMessageModel, counters = ChatCounterModel,
  transaction = work => mongoose.connection.transaction(work, {
    readConcern: { level: 'snapshot' }, writeConcern: { w: 'majority', j: true, wtimeout: 5000 },
  }) } = {}) {
  return {
    append: async ({ identity, clientMessageID, text, originalText = text, onStored }) => {
      return transaction(async session => {
        const existing = await messages.findOne({ senderID: identity.accountID, clientMessageID }).select('+originalText').session(session);
        if (existing) {
          if (existing.expiresAt <= new Date()) throw Object.assign(new Error('MESSAGE_OUTSIDE_HISTORY'), { publicCode: 'MESSAGE_OUTSIDE_HISTORY' });
          const boundary = await messages.find({ channel: 'global', expiresAt: { $gt: new Date() } }).sort({ sequence: -1 }).skip(49).limit(1).select('sequence').session(session);
          if (boundary.length && existing.sequence < boundary[0].sequence) {
            throw Object.assign(new Error('MESSAGE_OUTSIDE_HISTORY'), { publicCode: 'MESSAGE_OUTSIDE_HISTORY' });
          }
          if ((existing.originalText || existing.text) !== originalText) { const error = new Error('MESSAGE_ID_CONFLICT'); error.publicCode = error.message; throw error; }
          await onStored?.({ message: publicMessage(existing), session });
          // An explicit retry can repair a legacy message whose old delivery outcome is unknown.
          if (!existing.deliveryState) {
            existing.deliveryState = 'pending'; await existing.save({ session });
          }
          return { message: publicMessage(existing), created: false };
        }
        const counter = await counters.findOneAndUpdate({ _id: 'global' }, { $inc: { sequence: 1 } }, { session, new: true });
        if (!counter || !Number.isSafeInteger(counter.sequence)) throw new Error('CHAT_COUNTER_UNAVAILABLE');
        const [message] = await messages.create([{ channel: 'global', sequence: counter.sequence,
          senderID: identity.accountID, senderName: identity.username, clientMessageID, text, originalText,
          sentAt: new Date(), deliveryState: 'pending' }], { session });
        await onStored?.({ message: publicMessage(message), session });
        return { message: publicMessage(message), created: true };
      });
    },
    pendingDeliveries: async () => {
      const time = new Date();
      const boundary = await messages.find({ channel: 'global', expiresAt: { $gt: time } })
        .sort({ sequence: -1 }).skip(49).limit(1).select('sequence').lean();
      // Recovery must respect the existing latest-50 / 24-hour visibility policy.
      await messages.updateMany({ deliveryState: 'pending', $or: [
        { expiresAt: { $lte: time } }, ...(boundary.length ? [{ sequence: { $lt: boundary[0].sequence } }] : []),
      ] }, { $set: { deliveryState: 'expired' } });
      return (await messages.find({ deliveryState: 'pending', expiresAt: { $gt: time },
        ...(boundary.length ? { sequence: { $gte: boundary[0].sequence } } : {}) })
        .sort({ sequence: 1 }).limit(50).lean()).map(publicMessage);
    },
    markDispatched: async messageID => {
      const result = await messages.updateOne({ _id: messageID, deliveryState: 'pending' },
        { $set: { deliveryState: 'dispatched', dispatchedAt: new Date() } },
        { writeConcern: { w: 'majority', j: true, wtimeout: 5000 } });
      // A lost write acknowledgement is safe: retry sees the committed state or repeats delivery.
      return result.matchedCount > 0;
    },
    history: async (options = {}) => {
      const counter = await counters.findById('global').lean();
      const highWater = counter?.sequence ?? 0;
      const latest = await messages.find({ channel: 'global', expiresAt: { $gt: new Date() }, sequence: { $lte: highWater } })
        .sort({ sequence: -1 }).limit(50).lean();
      return visibleHistory(latest.reverse().map(publicMessage), options, highWater);
    },
  };
}
export const chatStore = createChatStore();
