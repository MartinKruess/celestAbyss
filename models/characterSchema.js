import mongoose, { Schema } from 'mongoose';
import { SkillDataModel } from './skillSchema.js';
import { InventoryModel } from './inventorySchema.js';

const string = {
    type: String,
}

const number = {
    type: Number,
    default: 0,
}

const characterSchema = mongoose.Schema({
    accountID: {
        type: String,
        required: true,
    },
    charName: {
        type: String,
        required: true,
        unique: true,
    },
    class:  {
        type: String,
        required: true,
    },
    optic: {
        hairstyle: string,
        head: string,
        body: string,
        arms: string,
        hands: string,
        legs: string,
        feeds: string,
    },
    level: number,
    experience: number,
    skillUpdates: [{
        type: Schema.Types.ObjectId, ref: SkillDataModel,
    }],
    inventory: [{
        type: Schema.Types.ObjectId, ref: InventoryModel,
    }],
    titels: {
                type: Array
            },
    tribe: string,
    moral: {
        type: Number,
        default: 0
    }
});

export const CharDataModel = mongoose.model('characters', characterSchema);