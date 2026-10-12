import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  channel: { type: String, required: true, enum: ['global'] },
  sequence: { type: Number, required: true },
  senderID: { type: mongoose.Schema.Types.ObjectId, ref: 'players', required: true },
  senderName: { type: String, required: true },
  clientMessageID: { type: String, required: true, maxlength: 64 },
  text: { type: String, required: true, maxlength: 1000 },
  sentAt: { type: Date, required: true },
});
messageSchema.index({ channel: 1, sequence: 1 }, { unique: true });
messageSchema.index({ senderID: 1, clientMessageID: 1 }, { unique: true });
// No automatic deletion until a moderation retention policy is agreed.
export const ChatMessageModel = mongoose.model('chatMessages', messageSchema);
export const ChatCounterModel = mongoose.model('chatCounters', new mongoose.Schema({
  _id: { type: String }, sequence: { type: Number, default: 0 },
}));
