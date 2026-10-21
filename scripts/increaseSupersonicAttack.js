import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {SkillDataModel} from '../models/skillSchema.js';
try {
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:115});if(!before)throw Error('Missing skill');
const set={statScaling:{...before.statScaling,patk:{type:'linear',base:636,perLevel:230}},description_de:before.description_de.replace('von 636 um 186 je weiterer Stufe auf 1380','von 636 um 230 je weiterer Stufe auf 1556'),description_eng:before.description_eng.replace('from 636 by 186 per additional level to 1380','from 636 by 230 per additional level to 1556')};
await new SkillDataModel({...before,...set}).validate();
await fs.writeFile('data/balancing/supersonic-attack-increase-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Supersonic Blade attack scaling verified: 636 + 230 per additional level, ending at 1556. Mana costs and all other fields unchanged.');
}catch(e){console.error(`Supersonic attack increase failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
