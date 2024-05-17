import mongoose, { Schema } from 'mongoose';
import { SkillDataModel } from './skillSchema.js';
import { InventoryModel } from './inventorySchema.js';
import { ItemModel } from './itemSchema.js';

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
    server: {
        type: String,
        default: "Asgard",
        required: true,
    },
    level: {
        type: Number,
        default: 1,
    },
    experience: number,
    skills: [
        {
            skillId: {
                type: Schema.Types.ObjectId, ref: SkillDataModel,
            },
            level: {
                type: Number,
                default: 1,
            },
            upgrade: {
                type: Number,
                default: 0,
            }
        }
    ],
    inventory: [
        {
            itemId: {
                type: Schema.Types.ObjectId, ref: ItemModel,
            }
        }
    ],
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


// optic: {
    //     hairstyle: {
        //         type: Schema.Types.ObjectId, ref: OpticModel,
        //     },
        //     haircolor: {
            //         type: Schema.Types.ObjectId, ref: OpticModel,
            //     },
            //     head: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     eyes: {
        //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     nose: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     mouth: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     ears: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     body: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     arms: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     hands: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     legs: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    //     feeds: {
    //         type: Schema.Types.ObjectId, ref: OpticModel,
    //     },
    // },