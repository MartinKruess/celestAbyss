import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const norm=v=>JSON.parse(JSON.stringify(v));
const edits=[
 {nr:19,old:24,next:27,replace:[['Cooldown 33 Sekunden auf Stufe 1 und 24 Sekunden auf Stufe 10','Cooldown 36 Sekunden auf Stufe 1 und 27 Sekunden auf Stufe 10'],['Cooldown 33 seconds at level 1 and 24 seconds at level 10','Cooldown 36 seconds at level 1 and 27 seconds at level 10']]},
 {nr:94,old:31,next:29,replace:[['Cooldown 31 Sekunden auf Stufe 1 und 31 Sekunden auf Stufe 20','Cooldown 29 Sekunden auf Stufe 1 und 29 Sekunden auf Stufe 20'],['Cooldown 31 seconds at level 1 and 31 seconds at level 20','Cooldown 29 seconds at level 1 and 29 seconds at level 20']]},
 {nr:95,old:39,next:37,replace:[['bisheriger Cooldown 39 Sekunden','Cooldown 37 Sekunden'],['existing cooldown is 39 seconds','cooldown is 37 seconds']]},
 {nr:23,old:39,next:37,replace:[['Cooldown 39 Sekunden auf Stufe 1 und 39 Sekunden auf Stufe 15','Cooldown 37 Sekunden auf Stufe 1 und 37 Sekunden auf Stufe 15'],['Cooldown 39 seconds at level 1 and 39 seconds at level 15','Cooldown 37 seconds at level 1 and 37 seconds at level 15']]},
 {nr:40,old:72,next:74,replace:[['Cooldown 81 Sekunden auf Stufe 1 und 72 Sekunden auf Stufe 10','Cooldown 83 Sekunden auf Stufe 1 und 74 Sekunden auf Stufe 10'],['Cooldown 81 seconds at level 1 and 72 seconds at level 10','Cooldown 83 seconds at level 1 and 74 seconds at level 10']]},
];
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,prepared=[];
 const mind=await col.findOne({nr:55});assert.equal(resolveSkillAtLevel(norm(mind),10).cd,18);
 for(const e of edits){
  const before=await col.findOne({nr:e.nr});assert.equal(resolveSkillAtLevel(norm(before),before.maxSkillLv).cd,e.old);
  const set={cd:before.cd+e.next-e.old,description_de:before.description_de,description_eng:before.description_eng};
  if(before.cooldownScaling){assert.equal(before.cooldownScaling.type,'linear');set.cooldownScaling={...norm(before.cooldownScaling),base:before.cooldownScaling.base+e.next-e.old};}
  for(const [a,b]of e.replace){const field=a.includes('Sekunden')?'description_de':'description_eng';assert.ok(set[field].includes(a));set[field]=set[field].replace(a,b);}
  set.description_eng=set.description_eng.replace('Existing effects, cooldown and cast time unchanged.','Other effects and cast time are unchanged.');
  set.levelProgression=buildSkillProgression({...norm(before),...set});const skill={...norm(before),...set};await new SkillDataModel(skill).validate();assert.equal(resolveSkillAtLevel(skill,skill.maxSkillLv).cd,e.next);prepared.push({before:norm(before),skill,set,id:before._id});
 }
 const backup='data/balancing/history/before-knight-cooldown-combination-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(prepared.map(p=>p.before),null,2)+'\n');
 for(const path of ['data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(path,backup+'/'+path.split('/').at(-1));
 for(const p of prepared){await col.updateOne({_id:p.id},{$set:p.set});assert.deepEqual(norm(await col.findOne({_id:p.id})),p.skill);}
 await fs.writeFile('data/balancing/knight-cooldown-combination-decision.json',JSON.stringify({status:'appliedAndVerified',backup,maximumLearned:{19:27,55:18,94:29,95:37,23:37,40:74},changes:prepared.map(({before,skill})=>({before,skill})),expectedDamage:607805.1599999974},null,2)+'\n');
 console.log('Five Knight cooldown changes saved and verified; Mindbreaker stays at 18 seconds. Backup '+backup);
}catch(e){console.error('Knight cooldown update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}
