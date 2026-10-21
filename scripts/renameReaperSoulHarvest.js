import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[103,104,105,120]}}).toArray();
 if(before.length!==4)throw Error('Missing skills');
 const updates=before.map(s=>{
  const set={description_de:s.description_de.replaceAll('Seelentrennung','Seelenernte'),description_eng:s.description_eng.replaceAll('Soul Separation','Soul Harvest')};
  if(s.nr===105)Object.assign(set,{skillName_de:'Seelenernte',skillName_eng:'Soul Harvest'});
  if(s.nr===120)Object.assign(set,{skillName_de:'Reaper',skillName_eng:'Reaper',description_de:set.description_de.replace('Eine Umbenennung in Seelensammler oder Reaper ist nur vorgemerkt, noch nicht beschlossen. ','').replace('Permanenter passiver Skill.','Reaper: permanenter passiver Skill.'),description_eng:set.description_eng.replace('Soul Collector or Reaper is only a possible future rename. ','').replace('Permanent passive skill.','Reaper: permanent passive skill.')});
  return{nr:s.nr,set};
 });
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/reaper-soul-harvest-renames-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(after[k]!==v)throw Error('Read-back mismatch');}
 console.log('Reaper and Seelenernte names and related descriptions verified; IDs/values unchanged.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
