import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
  if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const before=await SkillDataModel.collection.findOne({nr:76});if(!before)throw Error('Missing skill');
  const set={cd:47,cooldownScaling:{type:'linear',base:47,perLevel:-1},
    description_de:before.description_de.replace('hat 37 Sekunden Cooldown.','hat auf Level 1 47 Sekunden Cooldown. Je weiterer Skillstufe sinkt der Cooldown um 1 Sekunde auf 33 Sekunden auf Level 15.'),
    description_eng:before.description_eng.replace('has a 37 second cooldown.','has a 47 second cooldown at level 1. Each additional skill level reduces cooldown by 1 second, reaching 33 seconds at level 15.')};
  await new SkillDataModel({...before,...set}).validate();
  await fs.writeFile('data/balancing/double-strike-cooldown-before.json',JSON.stringify(before,null,2)+'\n');
  await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
  const after=await SkillDataModel.collection.findOne({_id:before._id});
  for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
  console.log('Double Strike cooldown verified: 47 to 33 seconds over 15 levels. Other values unchanged.');
}catch(e){console.error(`Cooldown update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
