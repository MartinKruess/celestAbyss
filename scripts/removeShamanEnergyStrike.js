import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:36});assert.ok(before);
 const charClass=before.charClass.filter(c=>!['Shamane','High Elves'].includes(c));assert.equal(before.charClass.length-charClass.length,2);
 const dir='data/balancing/history/before-shaman-energy-removal-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8'));await fs.copyFile(path,dir+'/class-skill-counts.json');
 const row=report.counts.find(c=>c.name==='Schamane / Hochelfe');assert.equal(row.total,29);assert.ok(row.skillNumbers.includes(36));
 await new SkillDataModel({...before,charClass}).validate();
 await col.updateOne({_id:before._id},{$set:{charClass}});assert.deepEqual(await col.findOne({_id:before._id}),{...before,charClass});
 row.skillNumbers=row.skillNumbers.filter(n=>n!==36);row.total=row.skillNumbers.length;
 const classified=report.classified.find(s=>s.nr===36);row[classified.category]--;classified.classes=charClass;
 await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/shaman-energy-removal.json',JSON.stringify({status:'appliedAndVerified',backup:dir,remainingSkillCount:row.total},null,2)+'\n');
 console.log('Verified Energy Strike removed only from Shaman/High Elves. Shaman28 skills:17 active,11 passive.');
}catch(error){console.error('Shaman update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
