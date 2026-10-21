import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={str:3,statScaling:{str:{type:'linear',base:3,perLevel:1}},resourceCosts:[],description_de:'Verbessert dauerhaft deinen Umgang mit zweihändigen Äxten. Auf Skilllevel 1 erhältst du 3 Stärke. Je weiterer Stufe kommt 1 Stärke hinzu, bis zu 12 Stärke auf Level 10. Keine Aktivierungskosten oder Cooldown.',description_eng:'Permanently improves your proficiency with two-handed axes. At skill level 1, gain 3 Strength. Each additional level adds 1 Strength, reaching 12 Strength at level 10. No activation costs or cooldown.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:131});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/two-hand-axe-training-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Two-handed Axe Training verified: Strength +3 to +12 over ten levels; no second attribute added.');
}catch(e){console.error(`Axe training update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
