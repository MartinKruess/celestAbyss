import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[48,105]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const updates=before.map(s=>{const key=s.nr===48?'soulGenerationSettings':'soulHarvestSettings';return{nr:s.nr,set:{[key]:{...s[key],excludesTrainingDummies:true},description_de:s.description_de+' Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt.',description_eng:s.description_eng+' Training dummies grant no soul fragments; exact training-target detection will be implemented server-side later.'}};});
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/training-dummy-soul-exclusion-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Training dummy exclusion recorded for both soul-generation paths.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
