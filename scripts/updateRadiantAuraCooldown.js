import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:108});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={cooldownScaling:{type:'linear',base:72,perLevel:-3},description_de:before.description_de.replace('Cooldown 72 Sekunden.','Cooldown 72 Sekunden auf Stufe 1, je weiterer Stufe 3 Sekunden weniger, auf Stufe 10 45 Sekunden.'),description_eng:before.description_eng.replace('Cooldown 72 seconds; cast time zero.','Cooldown 72 seconds at level 1, reduced by 3 per additional level to 45 seconds at level 10; cast time zero.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/radiant-aura-cooldown-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:108},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:108});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Radiant Aura cooldown verified: 72 - 9*3 = 45 seconds at level 10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
