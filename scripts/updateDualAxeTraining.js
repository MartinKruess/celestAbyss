import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={resourceCosts:[],statScaling:{str:{type:'linear',base:2,perLevel:2},agi:{type:'linear',base:1,perLevel:1}},description_de:'Verbessert dauerhaft deine Fertigkeiten im Kampf mit zwei Einhandäxten. Je gelerntem Skilllevel erhältst du 2 Stärke und 1 Agility, bis zu 20 Stärke und 10 Agility auf Stufe 10. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanently improves your proficiency with two one-handed axes. Each learned skill level grants 2 Strength and 1 Agility, reaching 20 Strength and 10 Agility at level 10. Permanent passive skill with no activation cost, cast time, cooldown or limited duration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:26});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/dual-axe-training-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Dual Axe Training verified: 2 Strength and 1 Agility per learned level, maximum 20 and 10.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
