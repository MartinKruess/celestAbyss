import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:85});
 if(before?.skillName_de!=='Pforte der Verbannung')throw Error('Unexpected skill');
 const charClass=before.charClass.filter(c=>!['Ritualist','Bloodmage'].includes(c));
 await new SkillDataModel({...before,charClass}).validate();
 await fs.writeFile('data/balancing/banishment-gate-remove-ritualist-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:85},{$set:{charClass}});
 const after=await SkillDataModel.collection.findOne({nr:85});
 if(JSON.stringify(after.charClass)!==JSON.stringify(charClass))throw Error('Read-back mismatch');
 console.log('Banishment Gate retained in MongoDB, removed from Ritualist/Bloodmage.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
