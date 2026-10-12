import mongoose from 'mongoose';
import { ChatMessageModel, ChatCounterModel } from '../models/chatSchema.js';

export function publicMessage(document) {
  return { id: String(document._id), channel: document.channel, sequence: document.sequence,
    sender: { accountID: String(document.senderID), username: document.senderName },
    clientMessageID: document.clientMessageID, text: document.text, sentAt: new Date(document.sentAt).toISOString() };
}
export async function initializeChatStore() {
  await ChatMessageModel.createIndexes();
  await ChatCounterModel.updateOne({ _id: 'global' }, { $setOnInsert: { sequence: 0 } }, { upsert: true });
}
export const chatStore = {
  append: async ({ identity, clientMessageID, text }) => {
    const session = await mongoose.startSession();
    try {
      return await session.withTransaction(async () => {
        const existing = await ChatMessageModel.findOne({ senderID: identity.accountID, clientMessageID }).session(session);
        if (existing) {
          if (existing.text !== text) { const error = new Error('MESSAGE_ID_CONFLICT'); error.publicCode = error.message; throw error; }
          return { message: publicMessage(existing), created: false };
        }
        const counter = await ChatCounterModel.findOneAndUpdate({ _id: 'global' }, { $inc: { sequence: 1 } }, { session, new: true });
        if (!counter || !Number.isSafeInteger(counter.sequence)) throw new Error('CHAT_COUNTER_UNAVAILABLE');
        const [message] = await ChatMessageModel.create([{ channel: 'global', sequence: counter.sequence,
          senderID: identity.accountID, senderName: identity.username, clientMessageID, text, sentAt: new Date() }], { session });
        return { message: publicMessage(message), created: true };
      });
    } finally { await session.endSession(); }
  },
  history: async ({ before, after, through, limit = 50 } = {}) => {
    const counter = await ChatCounterModel.findById('global').lean();
    const highWater = Math.min(through ?? counter?.sequence ?? 0, counter?.sequence ?? 0);
    const sequence = { $lte: highWater, ...(before !== undefined ? { $lt: before } : {}), ...(after !== undefined ? { $gt: after } : {}) };
    const rows = await ChatMessageModel.find({ channel: 'global', sequence }).sort({ sequence: after !== undefined ? 1 : -1 }).limit(limit + 1).lean();
    const hasMore = rows.length > limit;
    const page = rows.slice(0, limit);
    if (after === undefined) page.reverse();
    const messages = page.map(publicMessage);
    return { channel: 'global', messages, highWater, hasMore,
      ...(hasMore && messages.length ? after !== undefined ? { nextAfter: messages.at(-1).sequence } : { nextBefore: messages[0].sequence } : {}) };
  },
};
