import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {isGroupBuff} from '../services/skillClassification.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=catalog.filter(isGroupBuff).map(before=>{
 const duration=[1500,1800].includes(before.dur)?1800:600;
 if(before.dur===duration)return null;
 assert.equal(before.durationScaling,undefined);
 assert(!before.effects?.some(e=>e.durationSeconds!==undefined||e.durationScaling));
 const skill=structuredClone(before);skill.dur=duration;
 if(before.nr===107){skill.description_de=skill.description_de.replace('25 Minuten','30 Minuten');skill.description_eng=skill.description_eng.replace('25 minutes','30 minutes');}
 else{skill.description_de=skill.description_de.replaceAll(before.dur+' Sekunden',duration+' Sekunden');skill.description_eng=skill.description_eng.replaceAll(before.dur+' seconds',duration+' seconds');}
 return {before,skill};
}).filter(Boolean);
assert.deepEqual(changes.map(c=>c.skill.nr),[75,107,147,191]);
for(const {before,skill}of changes){await new SkillDataModel(skill).validate();for(let level=1;level<=skill.maxSkillLv;level++){
 const old=resolveSkillAtLevel(before,level),now=resolveSkillAtLevel(skill,level);assert.equal(now.dur,skill.dur);
 for(const [key,value]of Object.entries(old))if(!['dur','description_de','description_eng'].includes(key))assert.deepEqual(now[key],value,skill.nr+' '+key);
}}
if(!process.argv.includes('--apply'))console.log('Verified preview: four group-buff durations, all other fields preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:changes.map(c=>c.skill.nr)}}).toArray();assert.equal(stored.length,changes.length);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-group-buff-durations-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');await fs.writeFile(backup+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr);const result=await col.updateOne(live,{$set:{dur:skill.dur,description_de:skill.description_de,description_eng:skill.description_eng}});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/group-buff-durations-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes:changes.map(({before,skill})=>({nr:skill.nr,name:skill.skillName_de,beforeSeconds:before.dur,afterSeconds:skill.dur})),rule:'Previously 25/30-minute group buffs last 30 minutes. All other group buffs last 10 minutes. Includes group companion buffs; self buffs unchanged.'},null,2)+'\n');
 console.log('Verified four group-buff duration database updates.');
}catch(error){console.error('Group duration update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
