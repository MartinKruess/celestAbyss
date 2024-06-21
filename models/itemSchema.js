import mongoose from 'mongoose';

// Funktion zum Entfernen leerer Werte
function removeEmpty(value) {
  if (value === '' || value === null || value === undefined || value === 0) {
    return undefined;
  }
  return value;
}

const itemSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  thumbnail: { type: String },
  type: { type: String },
  category: { type: String },
  rang: { type: Number, default: 0 },
  weight: { type: Number, default: 1 },
  stacksize: { type: Number, default: 1 },
  sellable: { type: Boolean, default: true },
  tradable: { type: Boolean, default: true },
  sell: { type: Number, default: 0 },
  price: { type: Number, default: 0, set: removeEmpty },
  rare: { type: Number, default: 3 },
  attributes: {
    slots: { type: Number, set: removeEmpty },
    level: { type: Number, set: removeEmpty },
    maxLevel: { type: Number, set: removeEmpty },
    upgrade: { type: Number, set: removeEmpty },
    maxUpgrade: { type: Number, set: removeEmpty },
    pang: { type: Number, set: removeEmpty },
    mang: { type: Number, set: removeEmpty },
    pdeff: { type: Number, set: removeEmpty },
    crit: { type: Number, set: removeEmpty },
    block: { type: Number, set: removeEmpty },
    speed: { type: Number, set: removeEmpty },
    health: { type: Number, set: removeEmpty },
    mana: { type: Number, set: removeEmpty },
    agility: { type: Number, set: removeEmpty },
    ambush: { type: Number, set: removeEmpty },
    dexerity: { type: Number, set: removeEmpty },
    faith: { type: Number, set: removeEmpty },
    int: { type: Number, set: removeEmpty },
    strength: { type: Number, set: removeEmpty },
    victim: { type: Number, set: removeEmpty },
    vita: { type: Number, set: removeEmpty },
    wisdom: { type: Number, set: removeEmpty },
    luck: { type: Number, set: removeEmpty },
    boni: {
      description: { type: String, set: removeEmpty },
      type: { type: String, set: removeEmpty },
      value: { type: Number, set: removeEmpty },
    },
  },
  set: {
    amount: { type: Number, set: removeEmpty },
    description: { type: String, set: removeEmpty },
    type: { type: String, set: removeEmpty },
    value: { type: Number, set: removeEmpty },
  },
  effect: {
    description: { type: String, set: removeEmpty },
    type: { type: String, set: removeEmpty },
    chance: { type: Number, set: removeEmpty },
    value: { type: Number, set: removeEmpty },
    duration: { type: Number, set: removeEmpty },
  },
  cd: { type: Number, set: removeEmpty },
  duration: { type: Number, set: removeEmpty },
  range: { type: Number, set: removeEmpty },
  isLegendary: { type: Boolean, default: false },
});

export const ItemModel = mongoose.model('items', itemSchema);