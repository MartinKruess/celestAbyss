import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:[38,39]}}).toArray();if(before.length!==2)throw Error('Missing skill');
const earthquake=before.find(s=>s.nr===38),earthbreaker=before.find(s=>s.nr===39);
const effects=structuredClone(earthquake.effects);const slow=effects.find(e=>e.key==='earthquakeSlow');if(!slow)throw Error('Missing slow');slow.durationSeconds=3;
const quakeSet={dur:3,effects,description_de:earthquake.description_de.replace('für die bisher gespeicherte Dauer von 5 Sekunden','für 3 Sekunden'),description_eng:earthquake.description_eng.replace('for the previously stored 5 second duration','for 3 seconds')};
const breakerSet={mana:134,cd:70,dur:5,castTimeSeconds:0.3,statScaling:{patk:{type:'linear',base:284,perLevel:81}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:134,perLevel:48}}],cooldownScaling:{type:'linear',base:70,perLevel:-1},description_de:earthbreaker.description_de+' Der physische Grundangriffswert steigt von 284 um 81 je weiterer Stufe auf 1013 auf Level 10. Die Mana-Kosten steigen von 134 um 48 je weiterer Stufe auf 566. Der Cooldown sinkt von 70 um 1 Sekunde je weiterer Stufe auf 61 Sekunden. Die Cast Time beträgt 0,3 Sekunden, die Wirkungsdauer 5 Sekunden.',description_eng:earthbreaker.description_eng+' Physical base attack increases from 284 by 81 per additional level to 1013 at level 10. Mana cost increases from 134 by 48 per additional level to 566. Cooldown decreases from 70 by 1 second per additional level to 61 seconds. Cast time is 0.3 seconds and effect duration is 5 seconds.'};
const updates=[{s:earthquake,set:quakeSet},{s:earthbreaker,set:breakerSet}];
for(const{ s,set}of updates)await new SkillDataModel({...s,...set}).validate();
await fs.writeFile('data/balancing/earthbreaker-duration-swap-before.json',JSON.stringify(before,null,2)+'\n');
for(const{ s,set}of updates)await SkillDataModel.collection.updateOne({_id:s._id},{$set:set});
for(const{ s,set}of updates){const after=await SkillDataModel.collection.findOne({_id:s._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Earthbreaker verified: attack 284 to 1013, Mana 134 to 566, cooldown 70 to 61 s, cast 0.3 s. Duration swap: Earthquake slow 3 s, Earthbreaker 5 s.');
}catch(e){console.error(`Earthbreaker update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
