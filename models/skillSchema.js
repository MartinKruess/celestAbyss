import mongoose from 'mongoose';

const stringReq = {
    type: String,
    required: true,
}

const string = {
    type: String,
}

const numberReq = {
    type: Number,
    required: true,
}

const number = {
    type: Number,
}

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

const skillSchema = mongoose.Schema({
    skillName: {
        type: String,
        unique: true
    },
    charClass: {
        type: Array,
    },
    maxSkillLv: numberReq,
});

export const SkillDataModel = mongoose.model('skills', skillSchema);