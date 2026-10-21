import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:68});
 if(!before)throw Error('Missing skill');
 const charClass=[...new Set([...before.charClass,'Healer','Priest'])];
 await new SkillDataModel({...before,charClass}).validate();
 await fs.writeFile('data/balancing/healer-water-sphere-assignment-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:68},{$set:{charClass}});
 const after=await SkillDataModel.collection.findOne({nr:68});
 if(JSON.stringify(after.charClass)!==JSON.stringify(charClass))throw Error('Read-back mismatch');
 console.log('Crystallized Water Sphere assigned to Healer/Priest; existing assignments and values retained.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
