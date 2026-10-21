import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:45,castTimeSeconds:0.1,dur:15,statScaling:{matk:{type:'linear',base:97,perLevel:32}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:45,perLevel:27}}],effects:[{key:'shield-breaker-defense',type:'statModifier',target:'enemy',stat:'pdef',reference:'targetStat',value:-0.01,unit:'fraction',durationSeconds:15}],description_de:'Trifft den Gegner mit einem Schildangriff und senkt seine physische Verteidigung für 15 Sekunden um 1 Prozent. Der bisher als magisch gespeicherte Grundschaden startet bei 97 und steigt um 32 je weiterer Stufe auf 385 auf Stufe 10. Die Schadensart bleibt bis zur gesonderten Prüfung unverändert. Mana-Kosten steigen von 45 um 27 je weiterer Stufe auf 288. Castzeit 0,1 Sekunden, bisheriger Cooldown 55 Sekunden. Für Stärke und Dauer der Verteidigungssenkung ist keine zusätzliche Levelskalierung festgelegt.',description_eng:'Hits the enemy with a shield attack and reduces physical defense by 1 percent for 15 seconds. Existing magical base damage starts at 97 and increases by 32 per additional level to 385 at level 10. Damage type remains unchanged pending separate review. Mana cost increases from 45 by 27 per additional level to 288. Cast time is 0.1 seconds; existing cooldown is 55 seconds. No additional level scaling is specified for defense reduction strength or duration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:19});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/breaker-cover-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{pdef:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Breaker of Cover verified: damage 97 to 385, mana 45 to 288, cast 0.1 s, 1 percent enemy physical defense reduction for 15 s.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
