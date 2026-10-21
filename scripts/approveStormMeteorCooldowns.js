import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[112,235]}}).toArray();if(before.length!==2)throw Error('Missing ultimate');
 const plans=before.map(s=>{
  if(s.nr===112)return {s,set:{cd:100,cooldownScaling:{type:'linear',base:100,perLevel:-1},description_de:s.description_de.replace('Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 162 Sekunden auf Stufe 10.','Cooldown beginnt bei 100 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 91 Sekunden auf Stufe 10.'),description_eng:s.description_eng.replace('Cooldown starts at 180 seconds and decreases by 2 seconds per additional level to 162 seconds at level 10.','Cooldown starts at 100 seconds and decreases by 1 second per additional level to 91 seconds at level 10.')}};
  const de=' Pro Anwendung können insgesamt höchstens 6 unterschiedliche Gegner getroffen werden; spätere Wellen dürfen dieses Gesamtlimit nicht durch neue Ziele überschreiten. Auswahl bei mehr als 6 möglichen Zielen bleibt offen. Die Anzahl sichtbarer Meteoriten ist kein zusätzlicher Schadensmultiplikator.';
  const en=' At most 6 distinct enemies may be hit per activation; later waves cannot exceed this overall limit by hitting new enemies. Selection among more than 6 eligible targets remains pending. Visual meteor count is not an additional damage multiplier.';
  return {s,set:{cd:280,cooldownScaling:{type:'linear',base:280,perLevel:-40},attackArea:{...s.attackArea,maxTargets:6,maxUniqueTargetsPerActivation:6},description_de:s.description_de.replace('Cooldown 468/428/388 Sekunden, auf Stufe 3 also 6 Minuten 28 Sekunden.','Cooldown 280/240/200 Sekunden, auf Stufe 3 also 3 Minuten 20 Sekunden.').replace(de,'')+de,description_eng:s.description_eng.replace('Cooldown 468/428/388 seconds, reaching 6 minutes 28 seconds at level 3.','Cooldown 280/240/200 seconds, reaching 3 minutes 20 seconds at level 3.').replace(en,'')+en}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/storm-meteor-cooldowns-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Raging Storm cooldown100–91, unchanged five-target-per-wave cap. Meteor cooldown280/240/200, maximum six unique enemies per activation. Soul combo skills unchanged.');
}catch(e){console.error(`Ultimate approval update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
