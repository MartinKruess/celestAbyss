import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===99);assert.equal(before.maxSkillLv,3);
const skill=structuredClone(before);
skill.maxSkillLv=6;
skill.cooldownScaling={type:'linear',base:90,perLevel:-2};
skill.statScaling.matk={type:'linear',base:666,perLevel:0};
skill.attackExecution.additionalDamageFromSacrificedHealth={type:'table',values:[0,.2,.4,.65,.95,1.25]};
skill.description_de=skill.description_de
 .replace('auf allen drei Stufen','auf allen sechs Stufen')
 .replace('Cooldown 90/85/80 Sekunden.','Cooldown je Stufe 90/88/86/84/82/80 Sekunden.')
 .replace('auf Stufe 2 zusätzlich 50 Prozent und auf Stufe 3 zusätzlich 125 Prozent des tatsächlich für diesen Skill geopferten Lebens.','zusätzlich je Stufe 0/20/40/65/95/125 Prozent des tatsächlich für diesen Skill geopferten Lebens.')
 .replace('Skill-Schaden auf Stufe 1/2/3: 666/1666/3166','Skill-Schaden auf Stufe 1/2/3/4/5/6: 666/1066/1466/1966/2566/3166');
skill.description_eng=skill.description_eng
 .replace('at all three levels','at all six levels')
 .replace('Cooldown 90/85/80 seconds.','Cooldown by level 90/88/86/84/82/80 seconds.')
 .replace('plus 50 percent of actual health sacrificed for this skill at level 2 or 125 percent at level 3.','plus 0/20/40/65/95/125 percent of actual health sacrificed for this skill by level.')
 .replace('yields 666/1666/3166 skill damage at levels 1/2/3','yields 666/1066/1466/1966/2566/3166 skill damage at levels 1/2/3/4/5/6');
assert(!skill.description_de.includes('Stufe 3 zusätzlich'));
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=6;level++){
 const r=resolveSkillAtLevel(skill,level);assert.equal(r.cd,90-2*(level-1));assert.equal(r.matk,666);
 assert.equal(r.attackExecution.additionalDamageFromSacrificedHealth.base,[0,.2,.4,.65,.95,1.25][level-1]);
}
for(const [level,oldLevel]of [[1,1],[6,3]]){
 const old=resolveSkillAtLevel(before,oldLevel),r=resolveSkillAtLevel(skill,level);
 for(const key of ['matk','dur','castTimeSeconds','resourceCosts','effects','attackArea','activationRequirements','attackExecution'])assert.deepEqual(r[key],old[key],key);
 assert.equal(r.cd,old.cd);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: six levels preserve former first/maximum effects, costs, cooldowns and all sequence rules.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:99});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-underworld-scream-six-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/underworld-scream-six-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:99,previousMaxLevel:3,maxSkillLevel:6,pointDelta:3,sacrificedHealthDamageFractions:[0,.2,.4,.65,.95,1.25],cooldownByLevel:[90,88,86,84,82,80],interpolation:'Former three-level health-damage curve interpolated over six levels, retaining its shape, starting value and maximum. All non-scaling mechanics retained.'},null,2)+'\n');
 console.log('Verified Underworld Scream six-level database update.');
}catch(error){console.error('Underworld Scream update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
