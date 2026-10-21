import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:30});assert(b);
 const charClass=[...new Set([...b.charClass,'Healer','Priest'])];await new SkillDataModel({...b,charClass}).validate();
 const backup='data/balancing/history/before-healer-ice-thorns-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');
 await col.updateOne({_id:b._id},{$set:{charClass}});assert.deepEqual(await col.findOne({_id:b._id}),{...b,charClass});
 const rose=await col.findOne({nr:261});assert(!rose.charClass.includes('Healer'));assert(!rose.charClass.includes('Priest'));
 await fs.writeFile('data/balancing/healer-ice-thorns-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:30,charClass,reason:'User correction: Ice Thorns belongs to Healer/Priest as well as Druid. Thorned Rose remains Druid-only.'},null,2)+'\n');console.log('Verified Ice Thorns shared by Healer and Druid; Thorned Rose remains Druid-only.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
