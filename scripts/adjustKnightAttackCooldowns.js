import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[19,23,55]}}).toArray();if(before.length!==3)throw Error('Missing attack');
 const plans=before.map(s=>{
  if(s.nr===23)return {s,set:{cd:41,statScaling:{...s.statScaling,patk:{type:'linear',base:280,perLevel:(1240-280)/14}},description_de:s.description_de.replace('steigt von 280 um 40 je weiterer Stufe auf 840 auf Stufe 15','steigt gleichmäßig von 280 auf Stufe 1 auf 1240 auf Stufe 15').replace('Bisheriger Cooldown 11 Sekunden.','Cooldown 41 Sekunden auf allen Skillstufen.'),description_eng:s.description_eng.replace('increases from 280 by 40 per additional level to 840 at level 15','increases evenly from 280 at level 1 to 1240 at level 15').replace('Existing cooldown is 11 seconds.','Cooldown is 41 seconds at all skill levels.')}};
  const cooldownScaling={...s.cooldownScaling,base:s.nr===19?35:23};
  return {s,set:{cd:cooldownScaling.base,cooldownScaling,description_de:s.nr===19?s.description_de.replace('Cooldown zunächst 55 Sekunden, je weiterer Stufe 1 Sekunde weniger bis zu 46 Sekunden','Cooldown zunächst 35 Sekunden, je weiterer Stufe 1 Sekunde weniger bis zu 26 Sekunden'):s.description_de.replace('von 43 um 1 Sekunde je weiterer Stufe auf 34 Sekunden','von 23 um 1 Sekunde je weiterer Stufe auf 14 Sekunden'),description_eng:s.nr===19?s.description_eng.replace('cooldown starts at 55 seconds and decreases by 1 second per additional level to 46 seconds','cooldown starts at 35 seconds and decreases by 1 second per additional level to 26 seconds'):s.description_eng.replace('from 43 by 1 second per additional level to 34 seconds','from 23 by 1 second per additional level to 14 seconds')}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/knight-cooldown-adjustment-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified: Thundering Lance cooldown41/base280–1240; Shield Breaker cooldown35–26; Mindbreaker cooldown23–14.');
}catch(e){console.error(`Knight cooldown update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
