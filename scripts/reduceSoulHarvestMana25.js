import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:105});if(!before||before.maxSkillLv!==5)throw Error('Unexpected skill');
 const set={mana:153,resourceCosts:before.resourceCosts.map(c=>c.resource==='mana'?{...c,scaling:{type:'linear',base:153,perLevel:78}}:c),description_de:before.description_de.replace(/\b178\b/g,'153').replace(/\b490\b/g,'465'),description_eng:before.description_eng.replace(/\b178\b/g,'153').replace(/\b490\b/g,'465')};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-harvest-mana-153-465-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:105},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:105});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Harvest Mana verified: 153+78 per additional level, 465 at level5.');
}catch(e){console.error(`Soul Harvest Mana update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
