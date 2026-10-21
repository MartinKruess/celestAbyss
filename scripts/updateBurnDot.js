import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:8,castTimeSeconds:0.8,dur:5,hasLingeringDamage:true,statScaling:{matk:{type:'linear',base:12,perLevel:6}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:8,perLevel:8}}],effects:[{key:'burn-dot',type:'periodicDamage',target:'enemy',value:12,unit:'flat',damageTypes:['magical'],intervalSeconds:1,firstTickAfterSeconds:1,durationSeconds:5,valueScaling:{type:'linear',base:12,perLevel:6}}],description_de:'Lässt getroffene Gegner für 5 Sekunden brennen. Jede Sekunde verursacht der Schaden über Zeit den magischen Grundschadenswert des Skills: 12 auf Stufe 1, plus 6 je weiterer Stufe, bis zu 96 je Tick auf Stufe 15. Insgesamt fünf Ticks. Die Mana-Kosten steigen von 8 um 8 je weiterer Stufe auf 120. Castzeit 0,8 Sekunden. Der bisherige Cooldown beträgt 22 Sekunden. Zielanzahl und Trefferbereich werden noch geprüft.',description_eng:'Burns affected enemies for 5 seconds. Each second deals the skill base magical damage value: 12 at level 1, increasing by 6 per additional level to 96 per tick at level 15. Five ticks in total. Mana cost increases from 8 by 8 per additional level to 120. Cast time is 0.8 seconds. Existing cooldown is 22 seconds. Target count and hit area remain to be reviewed.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:202});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/burn-dot-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Burn verified: 15 levels, five one-second ticks, damage 12 to 96 per tick, mana 8 to 120.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
