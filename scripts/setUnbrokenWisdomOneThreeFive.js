import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===177),s=structuredClone(before);
s.wis=1;s.statScaling.wis={type:'table',values:[1,1,1,1,3,3,3,3,3,5]};
s.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.wis').rule={kind:'thresholds',base:1,changes:[{level:5,value:3},{level:10,value:5}]};
s.description_de=s.description_de.split(' Zusätzlich dauerhaft')[0]+' Zusätzlich dauerhaft +1 Willenskraft ab Stufe 1, zwei weitere Punkte ab Stufe 5 und zwei weitere ab Stufe 10: insgesamt +1 auf Stufen 1–4, +3 auf Stufen 5–9 und +5 auf Stufe 10.';
s.description_eng=s.description_eng.split(' Additionally grants')[0]+' Additionally grants 1 permanent Wisdom at level 1, two more points at level 5 and two more at level 10: total Wisdom is 1 at levels 1–4, 3 at levels 5–9 and 5 at level 10.';
const changes=[{before,after:s}];await new SkillDataModel(s).validate();
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.wis,level<5?1:level<10?3:5);assert.deepEqual(a.effects,b.effects);for(const k of ['str','patk','cd','dur','mana','maxSkillLv','resourceCosts'])assert.deepEqual(a[k],b[k]);}
if(!process.argv.includes('--apply'))console.log('Validated permanent Wisdom totals 1/3/5 at ranks 1/5/10; all other effects preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-unbroken-wisdom-one-three-five-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/unbroken-wisdom-one-three-five-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Unbroken Wisdom 1/3/5 thresholds saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}






