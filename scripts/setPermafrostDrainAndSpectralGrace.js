import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[185,229,240]}}).toArray();if(before.length!==3)throw Error('Missing skill');
 const plans=before.map(s=>{
 if(s.nr===240)return {s,set:{effects:s.effects.map(e=>e.key==='permafrost-mana-drain'?{...e,value:13,valueScaling:{type:'table',values:[13,21,29]}}:e),description_de:s.description_de.replace('3/9/27 Mana','13/21/29 Mana'),description_eng:s.description_eng.replace('3/9/27 Mana','13/21/29 Mana')}};
 if(s.nr===185)return {s,set:{description_de:s.description_de.replace('Seelensammler und Spektralketten sind nur gegen ein mit diesem Skill markiertes Ziel einsetzbar.','Seelensammler ist nur während der Markierung einsetzbar. Spektralketten darf als Abschluss zusätzlich bis 1,5 Sekunden nach Ende der Markierung gegen dasselbe Ziel eingesetzt werden.'),description_eng:s.description_eng.replace('Soul Collector and Spectral Chains require a target marked by this skill.','Soul Collector requires the active mark. Spectral Chains may additionally finish against the same target for up to 1.5 seconds after mark expiry.')}};
 return {s,set:{activationRequirements:{...s.activationRequirements,postTargetMarkWindowSeconds:1.5},description_de:s.description_de+' Der Abschluss darf gegen dasselbe zuvor markierte Ziel noch bis 1,5 Sekunden nach Ablauf der fünfsekündigen Markierung eingesetzt werden. Nach Ablauf der Markierung können keine weiteren Sammelpunkte aufgebaut werden.',description_eng:s.description_eng.replace('Exact mark expiry and finisher timing remain pending.','Spectral Chains can finish against the same previously marked target for up to 1.5 seconds after the five-second mark expires. No additional collection is possible after mark expiry.')}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/permafrost-drain-spectral-grace-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Permafrost Mana13/21/29 per tick, Spectral Chains post-mark finisher1.5seconds.');
}catch(e){console.error(`Healer and soul timing update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
