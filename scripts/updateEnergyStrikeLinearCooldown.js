import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:36});assert(before);
 const skill={...before,cd:2.6,cooldownScaling:{type:'linear',base:2.6,perLevel:-0.1}};
 skill.description_de=before.description_de.replace(/Der Cooldown beträgt zunächst[\s\S]*?Heiler, Priester/,'Der Cooldown beträgt 2,6 Sekunden auf Stufe 1 und sinkt je weiterer Stufe um 0,1 Sekunden: 2,2 Sekunden auf Stufe 5 und 1,7 Sekunden auf Stufe 10. Heiler, Priester');
 skill.description_eng=before.description_eng.replace(/Cooldown starts at[\s\S]*?Healer, Priest/,'Cooldown starts at 2.6 seconds at level 1 and decreases by 0.1 seconds per additional level: 2.2 seconds at level 5 and 1.7 seconds at level 10. Healer, Priest');
 assert.notEqual(skill.description_de,before.description_de);assert.notEqual(skill.description_eng,before.description_eng);
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 for(const [level,expected]of [[1,2.6],[5,2.2],[10,1.7]])assert(Math.abs(curveValue(resolveSkillAtLevel(skill,level).cooldownScaling,level)-expected)<1e-8);
 assert.deepEqual(skill.learningLimits,before.learningLimits);
 await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-energy-strike-linear-cooldown-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const set=Object.fromEntries(['cd','cooldownScaling','description_de','description_eng','levelProgression'].map(k=>[k,skill[k]]));
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),skill);
 await fs.writeFile('data/balancing/energy-strike-linear-cooldown-decision.json',JSON.stringify({status:'appliedAndVerified',backup,skill,scope:'Shared Energy Strike definition; all current class learning caps remain level 5.'},null,2)+'\n');
 console.log('Verified shared Energy Strike cooldown: level 1 2.6s, level 5 2.2s, level 10 1.7s; learning caps unchanged.');
}catch(error){console.error('Cooldown update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
