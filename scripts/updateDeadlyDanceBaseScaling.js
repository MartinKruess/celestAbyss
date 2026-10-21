import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:45,cd:68,castTimeSeconds:0.1,animationDurationSeconds:0.3,animationTimingStatus:'provisional',hasLingeringDamage:false,statScaling:{patk:{type:'linear',base:138,perLevel:37}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:45,perLevel:31}}],description_de:'Setzt eine besondere Technik der Assassinen ein, bewegt dich zwischen mehreren Gegnern und fügt ihnen Schaden zu. Der bisherige physische Grundschadenswert steigt von 138 um 37 je weiterer Stufe auf 471 auf Stufe 10. Anzahl der Treffer und Ziele sowie die Verteilung dieses Schadenswerts sind noch nicht festgelegt. Mana-Kosten steigen von 45 um 31 je weiterer Stufe auf 324. Cooldown 68 Sekunden, Castzeit 0,1 Sekunden, vorläufige Animations- beziehungsweise Ausführungsdauer 0,3 Sekunden. Keine zusätzliche Schadenswirkung über Zeit.',description_eng:'Uses a special assassin technique to move between multiple enemies and damage them. Existing base physical damage value increases from 138 by 37 per additional level to 471 at level 10. Hit count, target count and distribution of this damage value are not yet defined. Mana cost increases from 45 by 31 per additional level to 324. Cooldown is 68 seconds, cast time is 0.1 seconds, provisional animation or execution duration is 0.3 seconds. No additional damage over time.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:113});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/deadly-dance-base-scaling-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Deadly Dance confirmed values verified; hit count and target count remain unspecified.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
