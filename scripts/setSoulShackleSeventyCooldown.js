import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:103});
 if(before?.maxSkillLv!==15)throw Error('Unexpected skill');
 const set={cd:70,cooldownScaling:{type:'linear',base:70,perLevel:-1.5},description_de:before.description_de.replace('Cooldown 61 Sekunden, -1 je weiterer Stufe, auf Stufe 15 47 Sekunden.','Cooldown 70 Sekunden, -1,5 je weiterer Stufe, auf Stufe 15 49 Sekunden.'),description_eng:before.description_eng.replace('Cooldown 61 minus 1 per additional level, reaching 47 seconds.','Cooldown 70 minus 1.5 per additional level, reaching 49 seconds.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/soul-shackle-seventy-cooldown-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:103},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:103});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Shackle cooldown verified: 70 minus14*1.5 =49 seconds.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
