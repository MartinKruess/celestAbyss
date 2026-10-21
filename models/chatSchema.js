import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  channel: { type: String, required: true, enum: ['global'] },
  sequence: { type: Number, required: true },
  senderID: { type: mongoose.Schema.Types.ObjectId, ref: 'players', required: true },
  senderName: { type: String, required: true },
  clientMessageID: { type: String, required: true, maxlength: 64 },
  text: { type: String, required: true, maxlength: 1000 },
  originalText: { type: String, select: false },
  expiresAt: { type: Date, required: true, default: () => new Date(Date.now() + 86400000) },
  sentAt: { type: Date, required: true },
});
messageSchema.index({ channel: 1, sequence: 1 }, { unique: true });
messageSchema.index({ senderID: 1, clientMessageID: 1 }, { unique: true });
messageSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export const ChatMessageModel = mongoose.model('chatMessages', messageSchema);
export const ChatCounterModel = mongoose.model('chatCounters', new mongoose.Schema({
  _id: { type: String }, sequence: { type: Number, default: 0 },
}));
