import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:45,castTimeSeconds:0.6,statScaling:{patk:{type:'linear',base:75,perLevel:52}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:45,perLevel:23}}]};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:3});if(!before)throw Error('Missing skill');
set.description_de=before.description_de+' Der physische Grundangriffswert steigt von 75 um 52 je weiterer Skillstufe auf 543 auf Level 10. Die Mana-Kosten steigen von 45 um 23 je weiterer Stufe auf 252. Die Cast Time beträgt 0,6 Sekunden.';
set.description_eng=before.description_eng+' Physical base attack increases from 75 by 52 per additional skill level to 543 at level 10. Mana cost increases from 45 by 23 per additional level to 252. Cast time is 0.6 seconds.';
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/sweeper-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Sweeper verified: attack 75 to 543, Mana 45 to 252, cast 0.6 s. Cooldown 46 s and duration 2 s unchanged.');
}catch(e){console.error(`Sweeper update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
