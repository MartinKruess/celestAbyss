import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  language: { type: String, required: true },
  term: { type: String, required: true },
  variants: { type: [String], default: [] },
  matchType: { type: String, enum: ['word', 'phrase'], required: true },
  caseInsensitive: { type: Boolean, default: true },
  level: { type: Number, min: 1, max: 4, required: true },
  action: { type: String, enum: ['allow', 'review', 'mask', 'block'], required: true },
  contextRequired: { type: Boolean, required: true },
  reportAutomatically: { type: Boolean, required: true },
  reason: { type: String, required: true },
  notes: { type: String, default: '' },
  status: { type: String, enum: ['agreed', 'needsReview'], required: true },
  active: { type: Boolean, default: false },
  version: { type: Number, default: 1 },
  source: { type: String, required: true },
}, { timestamps: true, collection: 'moderationRules' });

export const ModerationRuleModel = mongoose.model('moderationRules', schema);
