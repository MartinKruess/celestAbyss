import mongoose, { Schema } from 'mongoose';
import { ItemModel } from './itemSchema.js';

export const inventorySchema = mongoose.Schema({
    characterID: {type: Schema.Types.ObjectId, ref: 'characters'},
    inv_size: {
        type: Number,
        default: 160,
        unique: true,
    },
    inv_items: [{
        type: Schema.Types.ObjectId, ref: ItemModel,
        level: { type: Number, default: 1 },
        upgrade: { type: Number, default: 0 },
        amount: { type: Number, default: 1 },
    }],
    isFull: {
        type: Boolean,
    },
});

export const InventoryModel = mongoose.model('inventorys', inventorySchema);