import mongoose, { Schema } from 'mongoose';
import { ItemModel } from './itemSchema.js';

const creatureSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    type: {
        type: String,
    },
    rang: {
        type: Number,
        default: 1,
    },
    weight: {
        type: Number,
        default: 5,
    },
    stacksize: {
        type: Number,
        default: 1,
    },
    sellable: {
        type: Boolean,
        default: true,
    },
    tradable: {
        type: Boolean,
        default: true,
    },
    sell: {
        type: Number,
    },
    rare: {
        type: Number,
        default: 1,
    },
    level: {
        type: Number,
        default: 1,
    },
    experience: {
        type: Number,
        default: 0,
    },
    health: {
        type: Number,
        default: 100,
    },
    mana: {
        type: Number,
        default: 50,
    },
    strength: {
        type: Number,
    },
    vita: {
        type: Number,
    },
    intelligence: {
        type: Number,
    },
    wisdom: {
        type: Number,
    },
    luck: {
        type: Number,
    },
    dexterity: {
        type: Number,
    },
    agility: {
        type: Number,
    },
});

export const CreatureModel = mongoose.model('creatures', creatureSchema);