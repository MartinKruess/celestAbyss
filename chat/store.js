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
export const chatStore = {
  append: async ({ identity, clientMessageID, text }) => {
    const session = await mongoose.startSession();
    try {
      return await session.withTransaction(async () => {
        const existing = await ChatMessageModel.findOne({ senderID: identity.accountID, clientMessageID }).session(session);
        if (existing) {
          const boundary = await ChatMessageModel.find({ channel: 'global' }).sort({ sequence: -1 }).skip(49).limit(1).select('sequence').session(session);
          if (boundary.length && existing.sequence < boundary[0].sequence) {
            throw Object.assign(new Error('MESSAGE_OUTSIDE_HISTORY'), { publicCode: 'MESSAGE_OUTSIDE_HISTORY' });
          }
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
  history: async (options = {}) => {
    const counter = await ChatCounterModel.findById('global').lean();
    const highWater = counter?.sequence ?? 0;
    const latest = await ChatMessageModel.find({ channel: 'global', sequence: { $lte: highWater } })
      .sort({ sequence: -1 }).limit(50).lean();
    return visibleHistory(latest.reverse().map(publicMessage), options, highWater);
  },
};
