import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[103,105]}}).toArray();if(before.length!==2)throw Error('Missing combo skill');
 const plans=before.map(s=>s.nr===103?{s,set:{statScaling:{...s.statScaling,matk:{type:'linear',base:97,perLevel:10}},description_de:s.description_de.replace('Magischer Initial-Grundschaden 97, +34 je weiterer Stufe, auf Stufe 15 573.','Magischer Initial-Grundschaden 97, +10 je weiterer Stufe, auf Stufe 15 237.'),description_eng:s.description_eng.replace(/97.*?573/,'97 at level 1, plus 10 per additional level to 237')}}:{s,set:{matk:381,statScaling:{...s.statScaling,matk:{type:'linear',base:381,perLevel:158}},description_de:s.description_de.replace('Magischer Grundschaden 481 auf Stufe 1, +183 je weiterer Stufe, auf Stufe 5 1213.','Magischer Grundschaden 381 auf Stufe 1, +158 je weiterer Stufe, auf Stufe 5 1013.'),description_eng:s.description_eng.replace(/481.*?1213/,'381 at level 1, plus 158 per additional level to 1013')}});
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/soul-shackle-harvest-damage-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Soul Shackle damage97–237 and Soul Harvest damage381–1013. Mana unchanged pending clarification.');
}catch(e){console.error(`Soul combo damage update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
