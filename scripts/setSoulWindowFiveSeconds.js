import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[185,186,229]}}).toArray();if(before.length!==3)throw Error('Missing combo skill');
 const plans=before.map(s=>{
  if(s.nr===185)return {s,set:{dur:5,targetMarkSettings:{...s.targetMarkSettings,durationSeconds:5},description_de:s.description_de.replace('für 6 Sekunden','für 5 Sekunden'),description_eng:s.description_eng.replace('for 6 seconds','for 5 seconds')}};
  if(s.nr===186)return {s,set:{description_de:s.description_de.replace('Die sechs Sekunden lange Markierung','Die fünf Sekunden lange Markierung'),description_eng:s.description_eng.replace('The 6-second target mark','The 5-second target mark')}};
  return {s,set:{collectedPointScaling:{...s.collectedPointScaling,thresholds:[6,16,22]},description_de:s.description_de.replace('Bei 0 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 1 bis 15 Punkten:','Bei 0 bis 5 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 6 bis 15 Punkten:').replace('Bei 16 bis 27 Punkten:','Bei 16 bis 21 Punkten:').replace('Ab 28 Punkten:','Ab 22 Punkten:').replace('im sechssekündigen Sammelfenster sind theoretisch höchstens 30 Treffer möglich','im fünfsekündigen Sammelfenster sind theoretisch höchstens 25 Treffer möglich'),description_eng:s.description_eng.replace('At 0 points:','At 0–5 points:').replace('At 1–15 points:','At 6–15 points:').replace('At 16–27 points:','At 16–21 points:').replace('At 28 or more points:','At 22 or more points:').replace('the six-second collection window theoretically permits at most 30 hits','the five-second collection window theoretically permits at most 25 hits')}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/soul-window-five-seconds-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified five-second Soulshot mark and thresholds6/16/22. Collector damage0–59 and all cooldowns unchanged.');
}catch(e){console.error(`Five-second collection update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
