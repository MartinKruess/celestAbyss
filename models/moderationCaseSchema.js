import mongoose from 'mongoose';
const snapshot = new mongoose.Schema({
  messageID: String, sequence: Number, senderID: String, senderName: String, text: String, sentAt: Date,
}, { _id: false });
const rule = new mongoose.Schema({ key: String, version: Number, level: Number, reason: String }, { _id: false });
export const ModerationCaseModel = mongoose.model('moderationCases', new mongoose.Schema({
  targetKey: { type: String, required: true, unique: true },
  source: { type: String, enum: ['player', 'system'], required: true },
  senderID: { type: mongoose.Schema.Types.ObjectId, required: true },
  clientMessageID: String, messageID: mongoose.Schema.Types.ObjectId,
  originalText: { type: String, required: true },
  snapshot: [snapshot], rules: [rule],
  status: { type: String, enum: ['open', 'dismissed', 'confirmed', 'held', 'released', 'blocked'], required: true },
  resolution: String, reviewedBy: mongoose.Schema.Types.ObjectId, reviewedAt: Date,
  legalHold: { type: Boolean, default: false },
  legalHoldBy: mongoose.Schema.Types.ObjectId, legalHoldAt: Date, legalHoldReason: String,
  audit: [{ actorID: mongoose.Schema.Types.ObjectId, action: String, note: String, at: Date }],
  expiresAt: { type: Date, required: true },
}, { timestamps: true, collection: 'moderationCases' }));
// Cases require explicit sweeps: legalHold must never be erased by a TTL index.
export const PlayerReportModel = mongoose.model('playerReports', new mongoose.Schema({
  caseID: { type: mongoose.Schema.Types.ObjectId, required: true },
  reporterID: { type: mongoose.Schema.Types.ObjectId, required: true },
  reason: { type: String, maxlength: 500, required: true },
}, { timestamps: true, collection: 'playerReports' }));
PlayerReportModel.schema.index({ caseID: 1, reporterID: 1 }, { unique: true });
export const ModerationAttemptModel = mongoose.model('moderationAttempts', new mongoose.Schema({
  senderID: { type: mongoose.Schema.Types.ObjectId, required: true }, clientMessageID: { type: String, required: true },
  inputHash: { type: String, required: true }, action: { type: String, required: true }, text: String,
  originalText: { type: String, select: false },
  releaseText: { type: String, select: false },
  rules: [rule], caseID: mongoose.Schema.Types.ObjectId,
  expiresAt: { type: Date, required: true },
}, { timestamps: true, collection: 'moderationAttempts' }));
ModerationAttemptModel.schema.index({ senderID: 1, clientMessageID: 1 }, { unique: true });
ModerationAttemptModel.schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
