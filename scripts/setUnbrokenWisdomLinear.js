import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===177),s=structuredClone(before);
s.wis=1;s.statScaling.wis={type:'linear',base:1,perLevel:1};
s.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.wis').rule={kind:'linear',base:1,perLevel:1};
s.description_de=s.description_de.split(' Zusätzlich dauerhaft')[0]+' Zusätzlich dauerhaft +1 Willenskraft je gelernter Skillstufe: +1 auf Stufe 1 bis insgesamt +10 auf Stufe 10.';
s.description_eng=s.description_eng.split(' Additionally grants')[0]+' Additionally grants 1 permanent Wisdom per learned skill level, from 1 at level 1 to 10 at level 10.';
const changes=[{before,after:s}];await new SkillDataModel(s).validate();
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.wis,level);assert.deepEqual(a.effects,b.effects);for(const k of ['str','patk','cd','dur','mana','maxSkillLv','resourceCosts'])assert.deepEqual(a[k],b[k]);}
if(!process.argv.includes('--apply'))console.log('Validated permanent Wisdom +1 per rank, +10 maximum; all other effects preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-unbroken-wisdom-linear-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/unbroken-wisdom-linear-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Unbroken linear Wisdom bonus saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}







