import mongoose, { Schema } from 'mongoose';

// A lost final-save acknowledgement can be retried even after a new admission.
const schema = new Schema({
  _id: String,
  serverID: String,
  characterID: String,
  saveId: String,
  hash: String,
  sequence: Number,
  expiresAt: { type: Date, expires: 0 },
}, { versionKey: false });
export const PlaySaveReceiptModel = mongoose.model('playSaveReceipts', schema);
