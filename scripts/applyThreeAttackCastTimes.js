import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[96,221,69]}}).toArray();assert.equal(before.length,3);
 const changes=before.map(original=>{
  const expected=original.nr===69?.5:.4;assert.equal(original.castTimeSeconds,expected);assert.equal(original.castTimeScaling,undefined);
  const skill={...original,castTimeSeconds:.2,description_de:original.description_de.replaceAll('Cast Time beträgt 0,4','Castzeit beträgt 0,2').replaceAll('Castzeit 0,4','Castzeit 0,2').replaceAll('Castzeit 0,5','Castzeit 0,2'),description_eng:original.description_eng.replaceAll('Cast time is 0.4','Cast time is 0.2').replaceAll('Cast time is 0.5','Cast time is 0.2')};
  assert.notEqual(skill.description_de,original.description_de);assert.notEqual(skill.description_eng,original.description_eng);
  return{before:original,skill};
 });
 for(const {skill}of changes)await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-three-attack-casts-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before:original,skill}of changes){await col.updateOne({_id:original._id},{$set:{castTimeSeconds:skill.castTimeSeconds,description_de:skill.description_de,description_eng:skill.description_eng}});assert.deepEqual(await col.findOne({_id:original._id}),skill);for(const k of ['resourceCosts','manaPricing','statScaling','cooldownScaling','cd','mana','charClass','levelProgression'])assert.deepEqual(skill[k],original[k]);}
 await fs.writeFile('data/balancing/three-attack-cast-times-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,scope:'Cast times only: Smash Strike 96, Wind Slasher 221, Ball Lightning 69 now .2 seconds. All existing shared class assignments retained. Damage, Mana, cooldowns, progression and other skills unchanged.'},null,2)+'\n');
 console.log('Verified three shared cast-time changes only; costs and damage unchanged.');
}catch(error){console.error('Cast update failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
