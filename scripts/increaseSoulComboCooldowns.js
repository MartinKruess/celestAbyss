import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[103,105]}}).toArray();if(before.length!==2)throw Error('Missing combo skill');
 const plans=before.map(s=>s.nr===103?{s,set:{cd:104,cooldownScaling:{type:'linear',base:104,perLevel:-1},description_de:s.description_de.replace('Cooldown 70 Sekunden, -1,5 je weiterer Stufe, auf Stufe 15 49 Sekunden.','Cooldown 104 Sekunden, -1 je weiterer Stufe, auf Stufe 15 90 Sekunden.'),description_eng:s.description_eng.replace('Cooldown 70 minus 1.5 per additional level, reaching 49 seconds.','Cooldown starts at 104 seconds and decreases by 1 per additional level to 90 seconds at level 15.')}}:{s,set:{cd:200,cooldownScaling:{type:'linear',base:200,perLevel:-5},description_de:s.description_de.replace('Cooldown 160 Sekunden, je weiterer Stufe 5 Sekunden weniger, auf Stufe 5 140 Sekunden.','Cooldown 200 Sekunden, je weiterer Stufe 5 Sekunden weniger, auf Stufe 5 180 Sekunden.'),description_eng:s.description_eng.replace('Cooldown starts at 160 seconds, decreases by 5 per additional level, reaching 140 at level 5.','Cooldown starts at 200 seconds and decreases by 5 per additional level to 180 seconds at level 5.')}});
 for(const p of plans){if(p.set.description_de===p.s.description_de||p.set.description_eng===p.s.description_eng)throw Error('Unexpected description');await new SkillDataModel({...p.s,...p.set}).validate();}
 try{await fs.writeFile('data/balancing/soul-combo-cooldowns-90-180-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Soul Shackle cooldown104–90 over15 levels; Soul Harvest cooldown200–180 over5 levels. Other values unchanged.');
}catch(e){console.error(`Soul combo cooldown update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
