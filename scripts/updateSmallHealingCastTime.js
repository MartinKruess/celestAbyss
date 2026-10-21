import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:64});
 if(!before)throw Error('Missing skill');
 const set={castTimeSeconds:0.1};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/small-healing-cast-time-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:64},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:64});
 if(after.castTimeSeconds!==0.1)throw Error('Read-back mismatch');
 console.log('Small Healing cast time verified: 0.1 seconds. Mana remains unresolved.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
