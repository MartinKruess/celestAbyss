import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:186});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={patk:89,statScaling:{...before.statScaling,patk:{type:'linear',base:89,perLevel:170/9}},description_de:before.description_de.replace('von 102 auf Stufe 1, gleichmäßig steigend auf 272 auf Stufe 10','von 89 auf Stufe 1, gleichmäßig steigend auf 259 auf Stufe 10'),description_eng:before.description_eng.replace('from 102 at level 1 to 272 at level 10','from 89 at level 1 to 259 at level 10')};
 if(set.description_de===before.description_de||set.description_eng===before.description_eng)throw Error('Unexpected description');
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-collector-89-259-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:186},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:186});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Collector verified: base89, maximum259, other mechanics unchanged.');
}catch(e){console.error(`Soul Collector range update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
