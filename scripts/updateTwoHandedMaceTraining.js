import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={resourceCosts:[],statScaling:{str:{type:'linear',base:2,perLevel:1},int:{type:'linear',base:1,perLevel:0.5}},description_de:'Verbessert dauerhaft deinen Umgang mit zweihändigen Streitkolben. Auf Skilllevel 1 erhältst du 2 Stärke und 1 Intelligenz. Je weiterer Stufe kommen 1 Stärke und 0,5 Intelligenz hinzu, bis zu 11 Stärke und 5,5 Intelligenz auf Stufe 10. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanently improves your proficiency with two-handed maces. At skill level 1, gain 2 Strength and 1 Intelligence. Each additional level adds 1 Strength and 0.5 Intelligence, reaching 11 Strength and 5.5 Intelligence at level 10. Permanent passive skill with no activation costs, cast time, cooldown or limited duration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:132});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/two-handed-mace-training-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Two-handed Mace Training verified: Strength 2 to 11, Intelligence 1 to 5.5; class assignments unchanged.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
