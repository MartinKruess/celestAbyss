import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:233});if(!s)throw Error('Missing skill');
 const de=s.description_de.replace('von 84 auf Skilllevel 1, plus 36 je weiterer Stufe, bis zu 408 auf Stufe 10','von 137 auf Skilllevel 1, plus 140 je weiterer Stufe, bis zu 1397 auf Stufe 10');
 const en=s.description_eng.replace('at 84 at skill level 1 and increasing by 36 per additional level to 408 at level 10','at 137 at skill level 1 and increasing by 140 per additional level to 1397 at level 10');
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');
 const set={patk:137,statScaling:{...s.statScaling,patk:{type:'linear',base:137,perLevel:140}},description_de:de,description_eng:en};
 await new SkillDataModel({...s,...set}).validate();
 await fs.writeFile('data/balancing/warrior-charge-137-1397-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:233},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:233});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified Warrior Charge: physical base137, +140 per additional level, maximum1397.');
}catch(e){console.error(`Warrior Charge update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
