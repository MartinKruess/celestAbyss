import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const increments={29:3,31:2,221:4};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[29,31,221]}}).toArray();if(before.length!==3)throw Error('Missing skill');
 const plans=before.map(s=>{const old=s.statScaling.matk,c={...old,perLevel:old.perLevel+increments[s.nr]},end=old.base+old.perLevel*(s.maxSkillLv-1),next=c.base+c.perLevel*(s.maxSkillLv-1);
 const de=s.description_de.replace(`um ${old.perLevel} je weiterer Stufe auf ${end}`,`um ${c.perLevel} je weiterer Stufe auf ${next}`).replace(`plus ${old.perLevel} je weiterer Stufe, bis zu ${end}`,`plus ${c.perLevel} je weiterer Stufe, bis zu ${next}`);
 const en=s.description_eng.replace(`by ${old.perLevel} per additional level to ${end}`,`by ${c.perLevel} per additional level to ${next}`);
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');return {s,set:{statScaling:{...s.statScaling,matk:c},description_de:de,description_eng:en}};});
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/herbalist-shared-attack-increments-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified magical attack increments: Ice Lance49, Electric Field45 (DoT unchanged), Wind Slasher71.');
}catch(e){console.error(`Attack increment update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
