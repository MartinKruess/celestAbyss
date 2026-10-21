import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[58,64,78]}}).toArray();
 if(before.length!==3)throw Error('Missing skills');
 const updates=[{nr:58,skillName_de:'Kuss der Aurora',skillName_eng:"Aurora's Kiss"},{nr:64,skillName_de:'Heilung',skillName_eng:'Healing'},{nr:78,skillName_de:'Göttliche Heilung',skillName_eng:'Divine Healing'}];
 for(const u of updates){const {nr,...set}=u;await new SkillDataModel({...before.find(s=>s.nr===nr),...set}).validate();}
 await fs.writeFile('data/balancing/healer-healing-renames-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){const {nr,...set}=u;await SkillDataModel.collection.updateOne({nr},{$set:set});const after=await SkillDataModel.collection.findOne({nr});for(const[k,v]of Object.entries(set))if(after[k]!==v)throw Error('Read-back mismatch');}
 console.log('Renamed: 58 Kuss der Aurora; 64 Heilung; 78 Göttliche Heilung. IDs and values preserved.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
