import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const increases={128:300,109:300,106:36,77:200,96:300,13:200,230:300};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:Object.keys(increases).map(Number)}}).toArray();if(before.length!==7)throw Error('Missing skill');
 const plans=before.map(s=>{const old=s.statScaling.patk,end=Math.round(old.base+old.perLevel*(s.maxSkillLv-1)),next=end+increases[s.nr];const c={...old,perLevel:(next-old.base)/(s.maxSkillLv-1)};
 const dePhrase=`Der physische Skill-Grundschaden steigt gleichmäßig von ${old.base} auf Stufe 1 auf ${next} auf Stufe ${s.maxSkillLv}.`;
 const enPhrase=`Physical skill base damage increases evenly from ${old.base} at level 1 to ${next} at level ${s.maxSkillLv}.`;
 const dePatterns={13:/Der physische Grundschaden steigt[^.]*\./,77:/Der physische Grundschaden steigt[^.]*\./,96:/Der physische Grundangriffswert steigt[^.]*\./,106:/Der physische Grundangriffswert steigt[^.]*\./,109:/Der Grundschaden steigt[^.]*\./,128:/Der bisherige Grundschaden beträgt[^.]*\./,230:/Der physische Grundschaden je getroffenem Gegner steigt[^.]*\./};
 const enPatterns={13:/Base physical damage increases[^.]*\./,77:/Base physical damage increases[^.]*\./,96:/Physical base attack increases[^.]*\./,106:/Physical base attack increases[^.]*\./,109:/Base damage increases[^.]*\./,128:/Existing base damage is[^.]*\./,230:/Base physical damage per enemy increases[^.]*\./};
 const de=s.description_de.replace(dePatterns[s.nr],dePhrase),en=s.description_eng.replace(enPatterns[s.nr],enPhrase);if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');return {s,set:{statScaling:{...s.statScaling,patk:c},description_de:de,description_eng:en}};});
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/gladiator-attack-endpoints-second-pass-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified seven attack curves; unchanged starting values.');
}catch(e){console.error(`Attack endpoint update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
