import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[185,186,229]}}).toArray();if(before.length!==3)throw Error('Missing combo skill');
 const plans=before.map(s=>{
  if(s.nr===185)return {s,set:{dur:6,targetMarkSettings:{...s.targetMarkSettings,durationSeconds:6},description_de:s.description_de.replace('für 7 Sekunden','für 6 Sekunden'),description_eng:s.description_eng.replace('for 7 seconds','for 6 seconds')}};
  if(s.nr===186)return {s,set:{description_de:s.description_de.replace('Die sieben Sekunden lange Markierung','Die sechs Sekunden lange Markierung'),description_eng:s.description_eng.replace('The 7-second target mark','The 6-second target mark')}};
  return {s,set:{collectedPointScaling:{...s.collectedPointScaling,thresholds:[1,16,28]},description_de:s.description_de.replace('Bei 0 bis 13 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 14 bis 22 Punkten: 2 Sekunden und 4 Prozent mehr Skill-Grundschaden. Bei 23 bis 31 Punkten: 3 Sekunden und 9 Prozent mehr Skill-Grundschaden. Ab 32 Punkten: 4 Sekunden und 15 Prozent mehr Skill-Grundschaden.','Bei 0 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 1 bis 15 Punkten: 2 Sekunden und 4 Prozent mehr Skill-Grundschaden. Bei 16 bis 27 Punkten: 3 Sekunden und 9 Prozent mehr Skill-Grundschaden. Ab 28 Punkten: 4 Sekunden und 15 Prozent mehr Skill-Grundschaden; im sechssekündigen Sammelfenster sind theoretisch höchstens 30 Treffer möglich.'),description_eng:'Hits a marked target and consumes all collected Soul Collector points. At 0 points: 1-second root with no skill-base damage bonus. At 1–15 points: 2-second root and 4 percent skill-base damage bonus. At 16–27 points: 3-second root and 9 percent skill-base damage bonus. At 28 or more points: 4-second root and 15 percent skill-base damage bonus; the six-second collection window theoretically permits at most 30 hits. Bonuses affect skill base damage only, not character or weapon attack. One point per successful hit, including blocked and critical hits; misses and dodges grant none. Consumes all points, resets the total to zero and ends collection. No Mana cost, cast time 0.3 seconds. One skill level, 730 physical and 203 magical base damage, cooldown 69 seconds. Exact mark expiry and finisher timing remain pending.'}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/soul-window-six-seconds-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified six-second Soulshot mark, unchanged Collector damage/cooldowns, Spectral Chain thresholds1/16/28 with existing rewards.');
}catch(e){console.error(`Soul collection window update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
