import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:186});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={patk:4,statScaling:{...before.statScaling,patk:{type:'linear',base:4,perLevel:13}},description_de:'Nur gegen ein mit Seelenschuss markiertes Ziel einsetzbar. Verursacht einmalig physischen Schaden aus dem regulären Charakter-P-Angriff plus zusätzlichem Skill-Grundschaden. Dieser Zusatz beträgt auf Stufe 1 genau 4 und steigt je weiterer Stufe um 13 bis auf 121 auf Stufe 10. Es wird kein separater Auto-Attack zusätzlich ausgelöst. Jeder erfolgreiche Treffer gibt 1 Sammelpunkt. Geblockte und kritische Treffer geben ebenfalls genau 1 Punkt, verfehlte und ausgewichene Angriffe keinen. Castzeit 0,2 Sekunden, Cooldown 0,15 Sekunden. Die vorläufige Animation von 0,3 Sekunden blockiert keine weiteren Aktionen. Die fünf Sekunden lange Markierung begrenzt das Sammelfenster. Kostet kein Mana. Die genaue zeitliche Verrechnung von Castzeit und Cooldown ist noch offen.',description_eng:'Requires a target marked by Soulshot. Deals physical damage from normal character physical attack plus additional skill base damage. The extra damage is 4 at level 1 and increases by 13 per additional level, reaching 121 at level 10. No separate basic attack is added. Each successful hit grants one collected point; blocked and critical hits also grant one, while misses and dodges grant none. Cast time 0.2 seconds, cooldown 0.15 seconds. The provisional 0.3-second animation does not block other actions. The 5-second target mark limits the collection window. No Mana cost. Exact cast/cooldown scheduling remains pending.'};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-collector-4-121-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:186},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:186});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Collector verified: 4 base plus13 per additional level, 121 maximum.');
}catch(e){console.error(`Soul Collector integer progression failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
