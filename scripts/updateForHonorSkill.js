import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const agility=Array.from({length:10},(_,i)=>1+Math.floor((i+1)/2));
const set={mana:321,castTimeSeconds:0,animationTimingStatus:'provisional',statScaling:{agi:{type:'table',values:agility},amb:{type:'linear',base:3,perLevel:1}},statBonusTargets:{agi:'self',amb:'self'},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:321,perLevel:42}}],description_de:'Stärkt dich selbst für 600 Sekunden. Auf Skilllevel 1 erhältst du 1 Agilität und 3 Ambush. Auf den Stufen 2, 4, 6, 8 und 10 kommt jeweils 1 Agilität hinzu. Je weiterer Stufe steigt Ambush um 1, bis zu 6 Agilität und 12 Ambush auf Level 10. Die Mana-Kosten steigen von 321 um 42 je weiterer Stufe auf 699. Der Cooldown beträgt 60 Sekunden. Der Buff wirkt sofort mit einer kurzen, noch festzulegenden Animation.',description_eng:'Strengthens you for 600 seconds. At skill level 1, gain 1 Agility and 3 Ambush. Skill levels 2, 4, 6, 8 and 10 each add 1 Agility. Each additional level adds 1 Ambush, reaching 6 Agility and 12 Ambush at level 10. Mana cost increases from 321 by 42 per additional level to 699. Cooldown is 60 seconds. The buff activates instantly with a brief animation still to be defined.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:151});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/for-honor-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('For Honor verified: Agility 1 to 6 at even levels; Ambush 3 to 12; Mana 321 to 699. Instant self buff, duration/cooldown unchanged.');
}catch(e){console.error(`For Honor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
