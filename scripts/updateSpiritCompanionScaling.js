import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:53,castTimeSeconds:0.4,dur:9,durationScaling:{type:'linear',base:9,perLevel:1},statScaling:{patk:{type:'linear',base:120,perLevel:75},matk:{type:'linear',base:120,perLevel:75}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:53,perLevel:22}}],description_de:'Beschwört zunächst für 9 Sekunden deinen Seelenbegleiter, der deine Feinde angreift. Je weiterer Stufe hält die Beschwörung 1 Sekunde länger, bis zu 18 Sekunden auf Stufe 10. Der gespeicherte physische und magische Angriffswert beträgt jeweils 120 auf Skilllevel 1 und steigt um 75 je weiterer Stufe auf jeweils 795 auf Stufe 10. Die Werte gehören zur Beschwörungswirkung und erhöhen nicht als Eigenbuff deinen Angriff. Mana-Kosten steigen von 53 um 22 je weiterer Stufe auf 251. Castzeit 0,4 Sekunden. Der bisherige Cooldown beträgt 300 Sekunden. Angriffsfrequenz, Schadensberechnung und genaue Umsetzung des Begleiters werden noch festgelegt.',description_eng:'Summons your spirit companion to attack your enemies, starting at 9 seconds. Each additional level adds 1 second, reaching 18 seconds at level 10. Stored physical and magical attack values each start at 120 at skill level 1 and increase by 75 per additional level to 795 each at level 10. These values belong to the summon effect and do not buff your own attack. Mana cost increases from 53 by 22 per additional level to 251. Cast time is 0.4 seconds. Existing cooldown is 300 seconds. Attack frequency, damage calculation and exact companion implementation remain to be defined.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:226});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/spirit-companion-duration-attack-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Spirit Companion verified: summon 9 to 18 seconds, attack values 120 to 795, mana 53 to 251, cast 0.4 seconds.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
