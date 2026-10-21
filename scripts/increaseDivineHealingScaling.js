import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:58});
 if(before?.maxSkillLv!==5)throw Error('Unexpected skill');
 const set={statScaling:{...before.statScaling,health:{type:'linear',base:550,perLevel:430}},effects:before.effects.map(e=>e.key==='divine-healing-single-target'?{...e,valueScaling:{type:'linear',base:550,perLevel:430}}:e),description_de:before.description_de.replace('Heilung 550 HP auf Stufe 1 und +330 je weiterer Stufe: 550, 880, 1210, 1540, 1870 HP.','Heilung 550 HP auf Stufe 1 und +430 je weiterer Stufe: 550, 980, 1410, 1840, 2270 HP.'),description_eng:before.description_eng.replace('Healing starts at 550 HP and increases by 330 per additional level: 550, 880, 1210, 1540, 1870 HP.','Healing starts at 550 HP and increases by 430 per additional level: 550, 980, 1410, 1840, 2270 HP.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/divine-healing-increased-scaling-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:58},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:58});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Divine Healing verified: 550 +430 per additional level =2270 HP at level 5.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
