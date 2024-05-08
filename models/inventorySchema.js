import mongoose, { Schema } from 'mongoose';
import { ItemModel } from './itemSchema.js';

export const inventorySchema = mongoose.Schema({
    inv_size: {
        type: String,
        unique: true,
    },
    inv_items: [{
        type: Schema.Types.ObjectId, ref: ItemModel,
    }],
    isFull: {
        type: Boolean,
    },
});

export const InventoryModel = mongoose.model('inventorys', inventorySchema);