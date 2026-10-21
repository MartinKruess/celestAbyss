import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={resourceCosts:[],statScaling:{str:{type:'table',values:[2,3,3,4,4,5,5,6,6,7]},agi:{type:'table',values:[1,1,2,2,3,3,4,4,5,5]}},description_de:'Verbessert dauerhaft deine Fertigkeiten im Kampf mit zwei Einhandäxten. Auf Skilllevel 1 erhältst du 2 Stärke und 1 Agility. Je weiterer Stufe steigt abwechselnd Stärke oder Agility um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 erhältst du insgesamt 7 Stärke und 5 Agility. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanently improves your proficiency with two one-handed axes. At skill level 1, gain 2 Strength and 1 Agility. Each additional level alternately adds 1 Strength or 1 Agility, starting with Strength at level 2. Level 10 grants a total of 7 Strength and 5 Agility. Permanent passive skill with no activation cost, cast time, cooldown or limited duration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:26});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/dual-axe-alternating-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Dual Axe Training verified: alternating increases, maximum 7 Strength and 5 Agility.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
