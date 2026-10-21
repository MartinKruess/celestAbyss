import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const norm=v=>JSON.parse(JSON.stringify(v));
const changes=[
 {nr:258,base:37,delta:1,replacements:[['37 bis 28 Sekunden','38 bis 29 Sekunden'],['37 seconds minus 1 per additional level to 28','38 seconds minus 1 per additional level to 29']]},
 {nr:255,base:33,delta:1,replacements:[['Cooldown 33 Sekunden','Cooldown 34 Sekunden'],['bis 14 auf Stufe 20','bis 15 auf Stufe 20'],['Cooldown 33 seconds','Cooldown 34 seconds'],['per additional level to 14','per additional level to 15']]},
 {nr:50,base:48,delta:1,replacements:[['von 48 um 1 Sekunde je weiterer Stufe auf 39 Sekunden','von 49 um 1 Sekunde je weiterer Stufe auf 40 Sekunden'],['from 48 by 1 second per additional level to 39 seconds','from 49 by 1 second per additional level to 40 seconds']]},
 {nr:15,base:40,delta:-1,replacements:[['von 40 auf 30 Sekunden','von 39 auf 29 Sekunden'],['from 40 to 30 seconds','from 39 to 29 seconds']]},
 {nr:62,base:120,delta:-1,replacements:[['von 120 um 2 Sekunden je weiterer Stufe auf 112 Sekunden','von 119 um 2 Sekunden je weiterer Stufe auf 111 Sekunden'],['from 120 by 2 seconds per additional level to 112 seconds','from 119 by 2 seconds per additional level to 111 seconds'],['by 112 per additional level to 936','by 142 per additional level to 936']]},
];
try {
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,prepared=[];
 for(const c of changes){
  const before=await col.findOne({nr:c.nr});assert.equal(before.cooldownScaling.base,c.base);
  const set={cd:before.cd+c.delta,cooldownScaling:{...norm(before.cooldownScaling),base:c.base+c.delta}};
  for(const field of ['description_de','description_eng']){set[field]=before[field];for(const [a,b] of c.replacements)set[field]=set[field].replace(a,b);}
  set.levelProgression=buildSkillProgression({...norm(before),...set});
  const skill={...norm(before),...set};await new SkillDataModel(skill).validate();prepared.push({before:norm(before),skill,set,id:before._id});
 }
 const backup='data/balancing/history/before-shaman-cooldown-sweetspot-'+Date.now();await fs.mkdir(backup,{recursive:true});
 await fs.writeFile(backup+'/skills.json',JSON.stringify(prepared.map(x=>x.before),null,2)+'\n');
 for(const path of ['data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(path,backup+'/'+path.split('/').at(-1));
 for(const p of prepared){await col.updateOne({_id:p.id},{$set:p.set});assert.deepEqual(norm(await col.findOne({_id:p.id})),p.skill);}
 const path='data/balancing/shaman-archdruid-package.json',pkg=JSON.parse(await fs.readFile(path,'utf8'));
 for(const p of prepared){const existing=pkg.changes.find(x=>x.skill.nr===p.skill.nr);if(existing)existing.skill=p.skill;else pkg.changes.push({before:p.before,skill:p.skill});}
 pkg.cooldownSweetspot={backup,maximumLearned:{258:29,255:15,50:40,15:29,62:111}};
 await fs.writeFile(path,JSON.stringify(pkg,null,2)+'\n');
 await fs.writeFile('data/balancing/shaman-cooldown-sweetspot-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes:prepared.map(({before,skill})=>({before,skill}))},null,2)+'\n');
 console.log('Five cooldown changes validated and verified. Backup: '+backup);
}catch(e){console.error('Shaman cooldown update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}
