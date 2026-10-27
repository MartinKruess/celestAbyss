import mongoose from 'mongoose';

const nonnegativeMap = () => ({type: Map, of: {type: Number, min: 0}, default: undefined});
const schema = new mongoose.Schema({
  key: {type: String, required: true, unique: true},
  name_de: {type: String, required: true},
  name_eng: String,
  kind: {type: String, enum: ['base', 'family', 'profile', 'variant'], required: true},
  parentKey: {type: String, default: null},
  version: {type: Number, min: 1, required: true},
  status: {type: String, enum: ['draft', 'ready'], required: true},
  spawnable: {type: Boolean, default: undefined},
  description_de: String,
  description_eng: String,
  statResolution: {type: String, enum: ['independentValuesNoAutomaticAttributeConversion']},
  baseStats: nonnegativeMap(),
  enabledStats: {type: Map, of: Boolean, default: undefined},
  statUnits: {type: Map, of: {type: String, enum: ['flat', 'fractionOfBaseSpeed', 'ratingPoints', 'percentagePoints', 'perTick', 'fractionOfMaxPerTick']}, default: undefined},
  statMultipliers: nonnegativeMap(),
  rewards: {
    experienceOnKill: {
      base: {type: Number, min: 0},
      multiplier: {type: Number, min: 0},
      levelFactor: {type: Number, min: Number.MIN_VALUE},
    },
  },
  regenerationRules: {
    tickIntervalSeconds: {type: Number, min: Number.MIN_VALUE},
    healthInCombat: {type: Boolean, default: undefined},
    healthWhileReturning: {type: Boolean, default: undefined},
    returnInterruptedByIncomingHits: {type: Boolean, default: undefined},
  },
  resourceRules: {
    mana: {mode: {type: String, enum: ['cooldownOnly', 'consumeMana']}},
    stamina: {
      mode: {type: String, enum: ['unused', 'consumeStamina']},
      sprintStatus: {type: String, enum: ['pending', 'defined']},
    },
  },
  levelGrowth: {
    mode: {type: String, enum: ['compoundPerLevel']},
    referenceLevel: {type: Number, min: 1},
    maximumPreviewLevel: {type: Number, min: 1},
    status: {type: String, enum: ['unconfigured', 'configured']},
    statFactors: {type: Map, of: {type: Number, min: Number.MIN_VALUE}, default: undefined},
  },
  capabilities: {
    tamable: {type: Boolean, default: undefined},
    mountable: {type: Boolean, default: undefined},
  },
  bodyTemplateKey: {type: String, default: undefined},
  skillNumbers: {type: [Number], default: undefined},
  pending: [String],
}, {collection: 'creatureTemplates', strict: 'throw'});

export const CreatureTemplateModel = mongoose.model('creatureTemplates', schema);
