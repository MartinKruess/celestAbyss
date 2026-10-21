import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:124});
 if(!before)throw Error('Missing skill');
 const set={cd:39,cooldownScaling:{type:'linear',base:39,perLevel:-1},description_de:before.description_de.replace('Neuer Start-Cooldown und Senkung um 1 Sekunde je weiterer Stufe werden nach Bestätigung des gesprochenen Startwerts eingetragen; bisheriger Cooldown vorerst unverändert.','Cooldown 39 Sekunden auf Stufe 1, je weiterer Stufe 1 Sekunde weniger, auf Stufe 15 25 Sekunden.'),description_eng:before.description_eng.replace('New starting cooldown and reduction by 1 second per additional level await clarification of the spoken starting value; existing cooldown temporarily retained.','Cooldown 39 seconds at level 1, reduced by 1 second per additional level to 25 seconds at level 15.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/recovery-cooldown-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:124},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:124});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Recovery cooldown verified: 39 to 25 seconds.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
