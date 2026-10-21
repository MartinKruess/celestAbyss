import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:98});if(!before)throw Error('Missing skill');
const effects=structuredClone(before.effects);const heal=effects.find(e=>e.key==='shockwaveSelfHeal');if(!heal)throw Error('Missing heal');
heal.valueScaling={type:'linear',base:0.015,perLevel:0.001};
const set={effects,description_de:before.description_de.replace('um 1,5 Prozent des tatsächlich verursachten Schadens heilt','um 1,5 Prozent des tatsächlich verursachten Schadens auf Level 1 heilt. Der Heilanteil steigt je weiterer Skillstufe um 0,1 Prozentpunkte auf 2,4 Prozent auf Level 10'),description_eng:before.description_eng.replace('heals you for 1.5 percent of actual damage dealt','heals you for 1.5 percent of actual damage dealt at level 1. The healing share increases by 0.1 percentage points per additional skill level to 2.4 percent at level 10')};
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/shockwave-healing-scale-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Shockwave healing verified: 1.5 to 2.4 percent damage dealt over ten levels, +0.1 percentage points per additional level.');
}catch(e){console.error(`Shockwave healing update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
