import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const norm=v=>JSON.parse(JSON.stringify(v));
const edits=[
 [202,.8,.2,[['Castzeit 0,8 Sekunden','Castzeit 0,2 Sekunden'],['Cast time 0.8 seconds','Cast time 0.2 seconds']]],
 [50,.6,.2,[['Castzeit 0,6 Sekunden','Castzeit 0,2 Sekunden'],['Cast time is 0.6 seconds','Cast time is 0.2 seconds']]],
 [62,1,.4,[['Castzeit 1 Sekunde','Castzeit 0,4 Sekunden'],['Cast time is 1 second','Cast time is 0.4 seconds']]],
 [255,.2,.1,[['Castzeit 0,2 Sekunden','Castzeit 0,1 Sekunden'],['Cast time 0.2 seconds','Cast time 0.1 seconds']]],
 [15,.2,.1,[]],
];
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,prepared=[];
 assert.equal((await col.findOne({nr:38})).castTimeSeconds,.1);
 const pillar=await col.findOne({nr:258});assert.equal(pillar.castTimeSeconds,.2);assert.equal(pillar.attackExecution.channelTimeSeconds,.1);
 for(const [nr,old,value,replacements]of edits){
  const before=await col.findOne({nr});assert.equal(before.castTimeSeconds,old);assert.equal(before.castTimeScaling,undefined);
  const set={castTimeSeconds:value,description_de:before.description_de,description_eng:before.description_eng};
  for(const field of ['description_de','description_eng'])for(const [a,b]of replacements)set[field]=set[field].replace(a,b);
  if(nr===15){set.description_de+=' Castzeit 0,1 Sekunden.';set.description_eng+=' Cast time 0.1 seconds.';}
  set.levelProgression=buildSkillProgression({...norm(before),...set});const skill={...norm(before),...set};await new SkillDataModel(skill).validate();prepared.push({before:norm(before),skill,set,id:before._id});
 }
 const backup='data/balancing/history/before-shaman-cast-times-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(prepared.map(x=>x.before),null,2)+'\n');
 for(const path of ['data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(path,backup+'/'+path.split('/').at(-1));
 for(const p of prepared){await col.updateOne({_id:p.id},{$set:p.set});assert.deepEqual(norm(await col.findOne({_id:p.id})),p.skill);}
 const path='data/balancing/shaman-archdruid-package.json',pkg=JSON.parse(await fs.readFile(path,'utf8'));
 for(const p of prepared){const existing=pkg.changes.find(c=>c.skill.nr===p.skill.nr);if(existing)existing.skill=p.skill;else pkg.changes.push({before:p.before,skill:p.skill});}
 pkg.castTimeAdjustment={backup,seconds:{202:.2,50:.2,62:.4,255:.1,15:.1,38:.1,258:.2},earthPillarChannel:.1};await fs.writeFile(path,JSON.stringify(pkg,null,2)+'\n');
 await fs.writeFile('data/balancing/shaman-cast-time-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes:prepared.map(({before,skill})=>({before,skill}))},null,2)+'\n');console.log('Five cast-time changes saved and verified; Earthquake and Earth Pillar already match. Backup '+backup);
}catch(e){console.error('Shaman cast-time update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}
