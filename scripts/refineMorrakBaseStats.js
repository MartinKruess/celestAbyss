import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:237});assert.ok(before);
 const baseStats={maxHealth:250,magicalAttack:47,physicalDefense:30,magicalDefense:36};
 const set={summonedCreatureSettings:{...before.summonedCreatureSettings,baseStats},description_de:before.description_de.replace('74 M-Angriff, 24 P-Verteidigung und 50 M-Verteidigung','47 M-Angriff, 30 P-Verteidigung und 36 M-Verteidigung'),description_eng:before.description_eng.replace('74 magical attack, 24 physical defense and 50 magical defense','47 magical attack, 30 physical defense and 36 magical defense')};
 assert.notEqual(set.description_de,before.description_de);assert.notEqual(set.description_eng,before.description_eng);
 await new SkillDataModel({...before,...set}).validate();
 const dir='data/balancing/history/before-morrak-base-refinement-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),{...before,...set});
 await fs.writeFile('data/balancing/morrak-base-refinement.json',JSON.stringify({status:'appliedAndVerified',backup:dir,baseStats},null,2)+'\n');
 console.log('Verified Morrak base250 HP,47 magical attack,30 physical defense,36 magical defense; no Bond.');
}catch(error){console.error('Morrak refinement failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
