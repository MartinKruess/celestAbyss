import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:96});if(!before)throw Error('Missing skill');
const set={statScaling:{...before.statScaling,patk:{type:'linear',base:111,perLevel:(1068-111)/9}},description_de:before.description_de.replace('von 111 um 73 je weiterer Stufe auf 768 auf Level 10','von 111 gleichmäßig über die weiteren Stufen auf 1068 auf Level 10'),description_eng:before.description_eng.replace('from 111 by 73 per additional level to 768 at level 10','from 111 evenly over the additional levels to 1068 at level 10')};
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/smash-scaling-increase-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Smash Strike verified: base 111 unchanged, level ten 1068, linear increment 106.33333333333333. Mana and timings unchanged.');
}catch(e){console.error(`Smash scaling update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
