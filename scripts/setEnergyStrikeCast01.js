import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:36});
 if(!before)throw Error('Missing Energy Strike');
 const set={castTimeSeconds:0.1,description_de:before.description_de.replace('Castzeit 0,05 Sekunden','Castzeit 0,1 Sekunden'),description_eng:before.description_eng.replace('Cast time 0.05 seconds','Cast time 0.1 seconds')};
 await new SkillDataModel({...before,...set}).validate();
 if(before.castTimeSeconds!==0.1){
  await fs.writeFile('data/balancing/energy-strike-cast01-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
  await SkillDataModel.collection.updateOne({nr:36},{$set:set});
 }
 const after=await SkillDataModel.collection.findOne({nr:36});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified Energy Strike cast time 0.1 seconds; other mechanics unchanged.');
}catch(error){console.error('Energy Strike update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
