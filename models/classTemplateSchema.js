import mongoose from 'mongoose';
const source = new mongoose.Schema({ file: String, sha256: String, sheet: String,
  row: Number, column: Number, primaryRow: Number, advancementRow: Number }, { _id: false });
export const ClassTemplateModel = mongoose.model('classTemplates', new mongoose.Schema({
  key: { type: String, required: true, unique: true }, displayName: { type: String, required: true },
  advancementName: String, raceGroup: { type: String, enum: ['Human', 'Umbra', 'Aurora', null], default: null },
  displayName_de: String, displayName_eng: String,
  advancementName_de: String, advancementName_eng: String,
  raceScope: { type: String, enum: ['fixed', 'crossRace'], required: true },
  roleNotes: [String], weaponNotes: String, attributeNotes: String,
  baseStats: { type: Map, of: Number, default: null }, statConversions: { type: mongoose.Schema.Types.Mixed, default: null },
  regeneration: {
    baseManaPerTick: { type: Number, min: 0 },
    baseHealthPerTick: { type: Number, min: 0 },
    tickIntervalSeconds: { type: Number, min: 0, default: null },
    manaTickIntervalSeconds: { type: Number, min: 0 },
    status: { type: String, enum: ['intervalPending', 'defined'] },
  },
  status: { type: String, enum: ['draft', 'ready'], default: 'draft' }, selectable: { type: Boolean, default: false },
  source, baseStatsSource: source, version: { type: Number, default: 1 },
}, { timestamps: true, collection: 'classTemplates' }));
export const LegacyClassSkillsModel = mongoose.model('legacyClassSkillMappings', new mongoose.Schema({
  key: { type: String, unique: true, required: true }, legacyClassName: { type: String, required: true },
  slots: { type: Map, of: Number, required: true }, unresolvedLegacySkillIDs: [Number],
  resolvedSkills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'skills' }],
  status: { type: String, enum: ['unresolved', 'resolved'], default: 'unresolved' }, source,
}, { timestamps: true, collection: 'legacyClassSkillMappings' }));
