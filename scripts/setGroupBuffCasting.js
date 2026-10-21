import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {isGroupBuff} from '../services/skillClassification.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=catalog.filter(isGroupBuff).map(before=>{
 assert([600,1800].includes(before.dur));assert.equal(before.castTimeScaling,undefined);assert.equal(before.cooldownScaling,undefined);
 const skill=structuredClone(before),cast=skill.dur===1800?.3:.2;
 skill.cd=60;skill.castTimeSeconds=cast;skill.castTimeStatus='defined';
 const de='Castzeit '+cast.toLocaleString('de-DE')+' Sekunden';
 const en='Cast time is '+cast+' seconds';
 skill.description_de=skill.description_de.replace(/(?:Die Cast Time beträgt(?: vorläufig)?|Castzeit)\s+[\d,]+\s+Sekunden?/gi,de);
 skill.description_eng=skill.description_eng.replace(/Cast time(?: is(?: provisionally)?)?\s+[\d.]+\s+seconds?/gi,en);
 if(!skill.description_de.includes(de))skill.description_de+=' '+de+'.';
 if(!skill.description_eng.toLowerCase().includes(en.toLowerCase()))skill.description_eng+=' '+en+'.';
 skill.description_de=skill.description_de.replace(/Cooldown 45 Sekunden/g,'Cooldown 60 Sekunden');
 skill.description_eng=skill.description_eng.replace(/cooldown is 45 seconds/g,'cooldown is 60 seconds');
 if(!/Cooldown|cooldown/.test(skill.description_de))skill.description_de+=' Cooldown 60 Sekunden.';
 if(!/cooldown/i.test(skill.description_eng))skill.description_eng+=' Cooldown is 60 seconds.';
 return {before,skill};
});
for(const {before,skill}of changes){await new SkillDataModel(skill).validate();for(let level=1;level<=skill.maxSkillLv;level++){
 const old=resolveSkillAtLevel(before,level),now=resolveSkillAtLevel(skill,level);assert.equal(now.cd,60);assert.equal(now.castTimeSeconds,skill.dur===1800?.3:.2);
 for(const [key,value]of Object.entries(old))if(!['cd','castTimeSeconds','castTimeStatus','description_de','description_eng'].includes(key))assert.deepEqual(now[key],value,skill.nr+' '+key);
}}
if(!process.argv.includes('--apply'))console.log('Verified group-buff timing preview at every learned rank; duration, cost and effects unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:changes.map(c=>c.skill.nr)}}).toArray();assert.equal(stored.length,changes.length);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-group-buff-casting-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');await fs.writeFile(backup+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr);const result=await col.updateOne(live,{$set:{cd:skill.cd,castTimeSeconds:skill.castTimeSeconds,castTimeStatus:skill.castTimeStatus,description_de:skill.description_de,description_eng:skill.description_eng}});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/group-buff-casting-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,skillNumbers:changes.map(c=>c.skill.nr),cooldownSeconds:60,castSecondsByDuration:{600:.2,1800:.3},scope:'All group-buff definitions, including reserve definitions and companion group buffs. No active self-buff changes.'},null,2)+'\n');
 console.log('Verified '+changes.length+' group-buff timing database updates.');
}catch(error){console.error('Group timing update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
