import mongoose from 'mongoose';

const skillSchema = mongoose.Schema({
    skillName: {
        type: String,
        unique: true
    },
    charClass: {
        type: Array,
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