import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:36});assert.equal(before.maxSkillLv,10);
 const limits={...before.learningLimits,classOverrides:{...before.learningLimits.classOverrides,Druide:5,Alchemist:5}};
 const set={learningLimits:limits,description_de:before.description_de.replace('Heiler und Priester können maximal Stufe 5 lernen; alle übrigen zugeordneten Klassen weiterhin Stufe 10.','Heiler, Priester, Druide und Alchemist können maximal Stufe 5 lernen; alle übrigen zugeordneten Klassen weiterhin Stufe 10.'),description_eng:before.description_eng.replace('Healer and Priest can learn up to level 5; all other assigned classes can still learn up to level 10.','Healer, Priest, Druid and Alchemist can learn up to level 5; all other assigned classes can still learn up to level 10.')};
 if(set.description_eng===before.description_eng)set.description_eng=before.description_eng+' Druid and Alchemist can learn at most level 5; other existing class limits remain unchanged.';
 assert.notEqual(set.description_de,before.description_de);
 await new SkillDataModel({...before,...set}).validate();
 const dir='data/balancing/history/before-druid-energy-cap-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),{...before,...set});
 await fs.writeFile('data/balancing/druid-energy-strike-cap-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,classOverrides:{Druide:5,Alchemist:5},skill:{...before,...set}},null,2)+'\n');
 console.log('Verified Druid/Alchemist Energy Strike cap5; definition10 and all other existing class limits preserved.');
}catch(error){console.error('Energy cap update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
