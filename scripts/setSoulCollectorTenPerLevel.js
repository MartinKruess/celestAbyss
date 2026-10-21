import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:186});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={patk:59,statScaling:{...before.statScaling,patk:{type:'linear',base:59,perLevel:10}},description_de:before.description_de.replace(/von \d+ auf Stufe 1, gleichmäßig steigend auf \d+ auf Stufe 10/,'von 59 auf Stufe 1, plus 10 je weiterer Stufe, bis zu 149 auf Stufe 10'),description_eng:before.description_eng.replace(/from \d+ at level 1 to \d+ at level 10/,'from 59 at level 1 by 10 per additional level to 149 at level 10')};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-collector-59-149-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:186},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:186});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Collector verified: 59 base, +10 per additional level, 149 at level10; all other mechanics unchanged.');
}catch(e){console.error(`Soul Collector progression update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
