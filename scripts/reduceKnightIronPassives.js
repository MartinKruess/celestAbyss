import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const linear=n=>({type:'linear',base:n,perLevel:n});
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[28,141]}}).toArray();if(before.length!==2)throw Error('Missing skill');
 const plans=before.map(s=>({s,set:s.nr===28?{vita:1,wis:0.5,block:0.5,statScaling:{...s.statScaling,vita:linear(1),wis:linear(0.5),block:linear(0.5)},description_de:'Permanenter passiver Skill mit 10 Stufen. Je gelerntem Skilllevel +1 Vita, +0,5 Willenskraft und +0,5 Blockpunkte. Auf Stufe 1 sind das +1 Vita, +0,5 Willenskraft und +0,5 Block; auf Stufe 10 insgesamt +10 Vita, +5 Willenskraft und +5 Block. Block ist ein Punktewert, keine Prozentangabe. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanent passive with 10 levels. Each learned level grants 1 Vitality, 0.5 Wisdom and 0.5 Block rating, reaching 10 Vitality, 5 Wisdom and 5 Block at level 10. Block is a rating, not a percentage. No activation costs, cast time, cooldown or limited duration.'}:{vita:2,statScaling:{...s.statScaling,vita:linear(2)},description_de:'Erhöht dauerhaft Vita, Willenskraft und den Blockwert mit Schilden jeweils um 2 je gelerntem Skilllevel. Auf Stufe 1 jeweils +2; auf Stufe 10 insgesamt +20 Vita, +20 Willenskraft und +20 Schildblock. Block ist ein Punktewert, keine Prozentangabe. Keine Aktivierungskosten, Castzeit oder Cooldown.',description_eng:'Permanently grants 2 Vitality, 2 Wisdom and 2 shield Block rating per learned level, reaching 20 of each at level 10. Block is a rating, not a percentage. No activation costs, cast time or cooldown.'}}));
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/knight-iron-passives-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Iron Shield: Vita 1–10, Wisdom and Block 0.5–5. Iron Will: Vita 2–20; Wisdom and shield Block remain 2–20.');
}catch(e){console.error(`Knight passive update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
