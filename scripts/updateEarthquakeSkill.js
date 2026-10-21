import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:87,castTimeSeconds:0.1,statScaling:{patk:{type:'linear',base:167,perLevel:53},matk:{type:'linear',base:35,perLevel:25}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:87,perLevel:42}}]};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:38});if(!before)throw Error('Missing skill');
set.description_de=before.description_de+' Der physische Grundangriffswert steigt von 167 um 53 je weiterer Stufe auf 644, der magische von 35 um 25 auf 260 auf Level 10. Die Mana-Kosten steigen von 87 um 42 je weiterer Stufe auf 465. Die Cast Time beträgt 0,1 Sekunden.';
set.description_eng=before.description_eng+' Physical base attack increases from 167 by 53 per additional level to 644, and magical base attack from 35 by 25 to 260 at level 10. Mana cost increases from 87 by 42 per additional level to 465. Cast time is 0.1 seconds.';
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/earthquake-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Earthquake verified: physical 167 to 644, magical 35 to 260, Mana 87 to 465, cast 0.1 s. Existing cooldown and duration unchanged.');
}catch(e){console.error(`Earthquake update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
