import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===177),s=structuredClone(before);
s.wis=0;s.statScaling.wis={type:'table',values:[0,0,0,0,1,1,1,1,1,2]};
s.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.wis').rule={kind:'thresholds',base:0,changes:[{level:5,value:1},{level:10,value:2}]};
s.description_de=s.description_de.replace('Zusätzlich dauerhaft +1 Willenskraft ausschließlich ab gelernter Stufe 10; Stufen 1 bis 9 geben keinen Willenskraftbonus.','Zusätzlich dauerhaft +1 Willenskraft ab Stufe 5 und ein weiterer Punkt ab Stufe 10: Stufen 1–4 geben 0, Stufen 5–9 geben +1 und Stufe 10 gibt insgesamt +2 Willenskraft.');
s.description_eng=s.description_eng.replace('Additionally grants 1 permanent Wisdom only at learned level 10; levels 1 through 9 grant no Wisdom bonus.','Additionally grants 1 permanent Wisdom at level 5 and another point at level 10: levels 1–4 grant 0, levels 5–9 grant 1 and level 10 grants 2 Wisdom in total.');
const changes=[{before,after:s}];await new SkillDataModel(s).validate();
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.wis,level<5?0:level<10?1:2);assert.deepEqual(a.effects,b.effects);for(const k of ['str','patk','cd','dur','mana','maxSkillLv','resourceCosts'])assert.deepEqual(a[k],b[k]);}
if(!process.argv.includes('--apply'))console.log('Validated +1 Wisdom at rank 5 and +2 total at rank 10; all other effects unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-unbroken-wisdom-five-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/unbroken-wisdom-five-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Unbroken Wisdom thresholds at ranks five and ten saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}





