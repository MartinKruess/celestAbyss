import mongoose, { Schema } from 'mongoose';
import { ItemModel } from './itemSchema.js';

export const inventorySchema = mongoose.Schema({
    characterID: {type: Schema.Types.ObjectId, ref: 'characters'},
    size: {
        type: Number,
        default: 160
    },
    currency: {
        type: Number,
        default: 0
    },
    items: [{
        itemID: {
            type: Schema.Types.ObjectId,
            ref: ItemModel
        },
        level: { type: Number, default: 1 },
        maxLevel: { type: Number, default: 1 },
        upgrade: { type: Number, default: 0 },
        maxUpgrade: { type: Number, default: 0 },
        amount: { type: Number, default: 1 },
    }],
    isFull: {
        type: Boolean,
    },
});

export const InventoryModel = mongoose.model('inventorys', inventorySchema);