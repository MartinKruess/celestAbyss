import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[41,54]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const updates=before.map(s=>({nr:s.nr,charClass:s.nr===41?s.charClass.filter(c=>!['Healer','Priest'].includes(c)):[...new Set([...s.charClass,'Healer','Priest'])]}));
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),charClass:u.charClass}).validate();
 await fs.writeFile('data/balancing/healer-first-aid-frostburn-swap-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:{charClass:u.charClass}});const after=await SkillDataModel.collection.findOne({nr:u.nr});if(JSON.stringify(after.charClass)!==JSON.stringify(u.charClass))throw Error('Read-back mismatch');}
 console.log('Healer: First Aid removed, Frostburn restored. Other assignments preserved.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
