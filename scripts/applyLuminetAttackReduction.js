import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[36,210,231]}}).toArray();assert.equal(before.length,3);
 const changes=before.map(original=>{
  const skill={...original};
  if(skill.nr===36){
   skill.learningLimits={...skill.learningLimits,classOverrides:{...skill.learningLimits.classOverrides,Luminet:5,Lightmage:5}};
   skill.description_de=skill.description_de.replace('Heiler, Priester, Druide und Alchemist können maximal Stufe 5 lernen; alle übrigen zugeordneten Klassen weiterhin Stufe 10.','Heiler, Priester, Druide, Alchemist, Luminet und Lichtmagier können maximal Stufe 5 lernen. Stufen 6 bis 10 sind derzeit keiner Klasse zum Lernen freigegeben.');
   skill.description_eng=skill.description_eng.replace(/Healer and Priest can learn up to level 5;[\s\S]*$/,'Healer, Priest, Druid, Alchemist, Luminet and Lightmage can learn up to level 5. Levels 6 to 10 are currently not learnable by any assigned class.');
  }else skill.charClass=skill.charClass.filter(c=>!['Luminet','Lightmage'].includes(c));
  return {before:original,skill};
 });
 for(const {skill}of changes)await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-luminet-attack-reduction-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before,skill}of changes){const set=skill.nr===36?{learningLimits:skill.learningLimits,description_de:skill.description_de,description_eng:skill.description_eng}:{charClass:skill.charClass};await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),skill);}
 await fs.writeFile('data/balancing/luminet-attack-reduction-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,followUp:'Next session: examine cooldowns of remaining Luminet attacks and design two large replacement skills. No cooldown changes authorized or applied in this step.'},null,2)+'\n');
 console.log('Verified: Luminet Energy Strike cap 5; Light Flash and Luminus unassigned. No cooldown changes.');
}catch(error){console.error('Luminet update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
