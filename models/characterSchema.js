import mongoose, { Schema } from 'mongoose';
// import { SkillDataModel } from './skillSchema.js';
// import { InventoryModel } from './inventorySchema.js';
const string = {
    type: String,
}

const number = {
    type: Number,
    default: 0,
}

const characterSchema = mongoose.Schema({
    charName: {
        type: String,
        required: true,
        unique: true,
    },
    tribe: string,
    class: string,
    destrciption: string,
    optic: {
        hairstyle: string,
        head: string,
        body: string,
        arms: string,
        hands: string,
        legs: string,
        feeds: string,
    },
    attributes: {
        health: number,
        mana: number,

        vita: number,
        strength: number,
        dexterity: number,
        agility: number,
        ambush: number,
        victim: number,
        intelligence: number,
        faith: number,
        wisdom: number,
        luck: number,

        pang: number,
        pdeff: number,
        mang: number,
        mdeff: number,
        crit: number,
        critStr: number,
        block: number,
        dodge: number,
        atkSpeed: number,
    },
    // weapontypes: {type: Array},
    // skills: [{
    //     type: Schema.Types.ObjectId, ref: SkillDataModel,
    // }],
    // inventory: [{
    //     type: Schema.Types.ObjectId, ref: InventoryModel,
    // }],
    experience: {
        type: Number,
        default: 0,
    },
    titels: {
        type: Array
    },
    moral: {
        type: Number,
        default: 0
    }
});

export const CharDataModel = mongoose.model('characters', characterSchema);