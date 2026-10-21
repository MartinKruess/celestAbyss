import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={str:3,vita:3,wis:2,int:2,mana:127,castTimeSeconds:0.6,statScaling:{str:{type:'linear',base:3,perLevel:2},vita:{type:'linear',base:3,perLevel:2},wis:{type:'linear',base:2,perLevel:2},int:{type:'linear',base:2,perLevel:2}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:127,perLevel:56}}],description_de:'Erhöht die Werte deiner Gruppe für 600 Sekunden. Auf Skilllevel 1 gibt der Buff 3 Stärke, 3 Vitalität, 2 Wisdom und 2 Intelligenz. Je weiterer Stufe steigen diese vier Boni um 2, bis zu 21 Stärke, 21 Vitalität, 20 Wisdom und 20 Intelligenz auf Stufe 10. Zusätzlich sind bisher 2 Faith und 3 Victim gespeichert; deren Verbleib und Skalierung werden noch geklärt. Mana-Kosten steigen von 127 um 56 je weiterer Stufe auf 631. Castzeit 0,6 Sekunden, Cooldown 60 Sekunden.',description_eng:'Increases your group attributes for 600 seconds. At skill level 1 grants 3 Strength, 3 Vitality, 2 Wisdom and 2 Intelligence. Each additional level adds 2 to these four bonuses, reaching 21 Strength, 21 Vitality, 20 Wisdom and 20 Intelligence at level 10. An additional 2 Faith and 3 Victim remain stored; their inclusion and scaling are pending clarification. Mana cost increases from 127 by 56 per additional level to 631. Cast time is 0.6 seconds, cooldown is 60 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:194});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/master-elements-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Master of Elements confirmed four-attribute scaling, mana and cast time verified; Faith/Victim pending.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
