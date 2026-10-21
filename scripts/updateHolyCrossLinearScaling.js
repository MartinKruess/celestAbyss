import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:215});
 if(before?.maxSkillLv!==10||before.matk!==237)throw Error('Unexpected skill');
 const set={statScaling:{...before.statScaling,matk:{type:'linear',base:237,perLevel:101}},description_de:before.description_de.replace('Bis einschließlich Stufe 5 steigt er je weiterer Stufe um 101 auf 641; ab Stufe 6 jeweils um 92 auf insgesamt 1101 auf Stufe 10.','Je weiterer Stufe steigt er durchgehend um 101: auf 641 auf Stufe 5 und insgesamt 1146 auf Stufe 10.'),description_eng:before.description_eng.replace('Each additional level through level 5 adds 101, reaching 641; levels 6 through 10 each add 92, reaching 1101.','Each additional level adds 101 throughout, reaching 641 at level 5 and 1146 at level 10.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/holy-cross-linear-scaling-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:215},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:215});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Holy Cross verified: 237 + 101 per additional level = 1146 at level 10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
