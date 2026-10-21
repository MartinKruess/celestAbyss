import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={category:'passive',dmgType:'passive',maxSkillLv:1,resourceCosts:[],description_de:'Verzichtet permanent auf 20 Punkte jedes gespeicherten Attributes, um einen Skill deiner Wahl um eine Stufe zu erhöhen. Vergessener Zauber hat eine Skillstufe und keine Levelskalierung. Permanenter passiver Skill ohne Mana-Kosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Auswahl und zulässige Höchststufe des verbesserten Skills werden noch festgelegt.',description_eng:'Permanently sacrifices 20 points of each stored attribute to increase one chosen skill by one level. Forgotten Spell has one skill level and no level scaling. Permanent passive skill with no Mana cost, cast time, cooldown or limited duration. Selection and the permitted maximum level of the upgraded skill remain to be defined.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:222});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/forgotten-spell-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{mana:'',cd:'',dur:'',statScaling:'',castTimeSeconds:'',castTimeScaling:'',cooldownScaling:'',durationScaling:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Forgotten Spell verified: one level, passive, no mana cost or scaling; existing attribute penalties preserved.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
