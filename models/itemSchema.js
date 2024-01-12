import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    thumbnail: { type: String },
    kind: { type: String, default: 'verkaufbar' },
  
    rang: { type: Number, default: 0 },
    weight: { type: Number, default: 1 },
    stacksize: { type: Number, default: 1 },
    sell: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    rare: { type: Number, default: 3 },
  
    weapon: {
      w_type: { type: String },
      w_slots: { type: Number, default: 0 },
      w_level: { type: Number, default: 0 },
      w_plus: { type: Number, default: 0 },
      a_pang: { type: Number, default: 0 },
      a_mang: { type: Number, default: 0 },
      a_pdeff: { type: Number, default: 0 },
      a_crit: { type: Number, default: 0 },
      a_block: { type: Number, default: 0 },
      a_speed: { type: Number, default: 0 },
      a_agi: { type: Number, default: 0 },
      a_amb: { type: Number, default: 0 },
      a_dex: { type: Number, default: 0 },
      a_faith: { type: Number, default: 0 },
      a_int: { type: Number, default: 0 },
      a_str: { type: Number, default: 0 },
      a_vic: { type: Number, default: 0 },
      a_vita: { type: Number, default: 0 },
      a_wis: { type: Number, default: 0 },
      w_upgrades: { type: [String], maxlength: 5 },
    },
  
    armor: {
      e_type: { type: String},
      e_health: { type: Number, default: 0 },
      e_mana: { type: Number, default: 0 },
      e_pdeff: { type: Number, default: 0 },
      e_health_reg: { type: Number, default: 0 },
      e_mana_reg: { type: Number, default: 0 },
      e_mdeff: { type: Number, default: 0 },
      e_vita: { type: Number, default: 0 },
      e_wis: { type: Number, default: 0 },
      e_agility: { type: Number, default: 0 },
      e_block: { type: Number, default: 0 },
      e_level: { type: Number, default: 0 },
      e_plus: { type: Number, default: 0 },
      e_upgrades: { type: [String], maxlength: 5 },
    },
  
    accessories: {
      type: { type: String },
      a_pang: { type: Number, default: 0 },
      a_mang: { type: Number, default: 0 },
      a_pdeff: { type: Number, default: 0 },
      a_crit: { type: Number, default: 0 },
      a_block: { type: Number, default: 0 },
      a_speed: { type: Number, default: 0 },
    },
  });

export const ItemModel = mongoose.model('items', itemSchema);