import mongoose from 'mongoose';

// Funktion zum Entfernen leerer Werte
function removeEmpty(value) {
    if (value === '' || value === null || value === undefined || value === 0) {
        return undefined;
    }
    return value;
}

const num = {
    type: Number,
    set: removeEmpty
}

const skillSchema = mongoose.Schema({
    nr: {
        type: Number,
        required: true,
    },
    skillName_eng: {
        type: String,
        unique: true
    },
    skillName_de: {
        type: String,
        unique: true
    },
    charClass: {
        type: Array,
        required: true,
    },
    currentSkillLv: {
        type: Number,
        required: true,
        default: 0,
    },
    maxSkillLv: {
        type: Number,
        required: true,
        default: 1,
    },
    currentUpgradeLv: {
        type: Number,
        required: true,
        default: 0,
    },
    maxUpgradeLv: {
        type: Number,
        required: true,
        default: 10,
    },
    category: {
        type: String,
        required: true,
    },
    description_eng: {
        type: String,
        required: true,
    },
    description_de: {
        type: String,
        required: true,
    },
    dmgType: {
        type: String,
        required: true,
    },
    castConditions: {
        type: Map,
        of: new mongoose.Schema({
            manaCost: {
                type: Number,
                required: true,
                default: 0
            },
            healthCost: {
                type: Number,
                default: 0
            },
            effect: {
                type: String,
            }
        }),
    },
    skillpoints: {
        type: Number,
        required: true,
        default: 1,
    },
    patk: num,
    matk: num,
    cd: num,
    dur: num,
    mana: num,
    health: num,
    agi: num,
    amb: num,
    block: num,
    dex: num,
    faith: num,
    int: num,
    luck: num,
    str: num,
    vic: num,
    vita: num,
    wis: num,
    pdef: num,
    mdef: num,
    atkSpeed: num,
    movementSpeed: num,
});

export const SkillDataModel = mongoose.model('skills', skillSchema);

// const skillSchema = mongoose.Schema({
//     S_Name: stringReq,
//     S_Thumbnail: string,
//     CharClass: stringReq,
//     S_Status: string,
//     S_Description: string,
//     S_Max_Lv: numberReq,
//     S_DMG_Type: string,
//     S_DMG: number,
//     S_PAttack: number,
//     S_MAttack: number,
//     S_CD: number,
//     S_Duration: number,
//     S_Mana: number,
//     S_Health: number,
//     S_Agi: number,
//     S_Amb: number,
//     S_Block: number,
//     S_Dex: number,
//     S_Faith: number,
//     S_Int: number,
//     S_Luck: number,
//     S_Str: number,
//     S_Vic: number,
//     S_Vita: number,
//     S_Wis: number,
//     S_PDefense: number,
//     S_MDefense: number,
//     S_ATK_Speed: number,
// });