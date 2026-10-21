import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===177),s=structuredClone(before);
s.wis=0;s.statScaling.wis={type:'table',values:[0,0,0,0,0,0,0,0,0,1]};
s.levelProgression.rules.push({path:['statScaling','wis'],rule:{kind:'thresholds',base:0,changes:[{level:10,value:1}]},source:'verifiedExistingLevels'});
s.description_de+=' Zusätzlich dauerhaft +1 Willenskraft ausschließlich ab gelernter Stufe 10; Stufen 1 bis 9 geben keinen Willenskraftbonus.';
s.description_eng+=' Additionally grants 1 permanent Wisdom only at learned level 10; levels 1 through 9 grant no Wisdom bonus.';
const changes=[{before,after:s}];
await new SkillDataModel(s).validate();
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.wis,level===10?1:0);assert.deepEqual(a.effects,b.effects);for(const k of ['str','patk','cd','dur','mana','maxSkillLv','resourceCosts'])assert.deepEqual(a[k],b[k]);}
if(!process.argv.includes('--apply'))console.log('Validated one permanent Wisdom point at rank 10 only; all existing effects preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-unbroken-wisdom-ten-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/unbroken-wisdom-ten-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Unbroken rank-ten Wisdom point saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}




