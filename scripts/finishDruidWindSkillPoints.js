import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel,resolveCharacterSkillLevels} from '../services/skillLevel.js';
const costsArg=process.argv.find(a=>a.startsWith('--costs='));
assert(costsArg,'Explicit confirmed Forgotten Spell costs required: --costs=20,15');
const costs=costsArg.slice(8).split(',').map(Number);assert.deepEqual(costs,[20,15]);
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const table=(start,end,count)=>({type:'table',base:start,values:Array.from({length:count},(_,i)=>Math.round(start+(end-start)*i/(count-1)))});
const linear=(start,end,count)=>({type:'linear',base:start,perLevel:(end-start)/(count-1)});
const changes=[221,125,222].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===221){
  assert.equal(before.maxSkillLv,10);
  const variant=structuredClone(before);delete variant.classCombatOverrides;delete variant.levelProgression;
  variant.maxSkillLv=20;variant.statScaling.matk=table(211,921,20);variant.resourceCosts[0].scaling=table(53,233,20);variant.cooldownScaling=linear(54,45,20);
  variant.description_de='Druidenvariante von Windschlitzer mit 20 lernbaren Stufen. Einmaliger magischer Skill-Grundschaden 211 bis 921 gemäß ganzzahliger Stufentabelle, zuzüglich aktuellem M-Angriff. Mana-Kosten 53 bis 233 gemäß ganzzahliger Stufentabelle. Die Maximalwerte von Schaden und Mana entsprechen einer zusätzlichen Stufe der bisherigen Skalierung. Grund-Cooldown sinkt über die 20 Stufen gleichmäßig von 54 auf 45 Sekunden. Castzeit 0,2 Sekunden. Kräuterkundler und Witcher behalten unverändert ihre Variante mit zehn Stufen.';
  variant.description_eng='Druid specialization of Wind Slasher with 20 learnable levels. Deals magical skill base damage once, from 211 to 921 according to an integer level table, plus current magical attack. Mana cost 53 to 233 according to its integer level table. Maximum damage and Mana correspond to one extra level of the former progression. Base cooldown decreases evenly from 54 to 45 seconds over 20 levels. Cast time 0.2 seconds. Herbalist and Witcher retain their unchanged ten-level version.';
  variant.levelProgression=buildSkillProgression(variant);
  const override=Object.fromEntries(['maxSkillLv','statScaling','resourceCosts','cooldownScaling','description_de','description_eng','levelProgression'].map(k=>[k,variant[k]]));
  skill.maxSkillLv=20;
  skill.learningLimits={defaultMaxLevel:10,classOverrides:{Druide:20,Alchemist:20,Herbalist:10,Witcher:10},status:'defined'};
  const herbalistOverride=Object.fromEntries(['maxSkillLv','statScaling','resourceCosts','cooldownScaling','description_de','description_eng','levelProgression'].map(k=>[k,structuredClone(before[k])]));
  skill.classCombatOverrides={...skill.classCombatOverrides,druid:override,herbalist:herbalistOverride};
 }else if(nr===125){
  assert.equal(before.maxSkillLv,10);skill.maxSkillLv=15;
  skill.statScaling.matk=table(223,529,15);skill.resourceCosts[0].scaling=table(56,137,15);skill.durationScaling=linear(1,5,15);
  for(const e of skill.effects){e.valueScaling=linear(-.01,-.1,15);e.durationScaling=linear(1,5,15);}
  skill.description_de='Trifft den Gegner einmalig mit Windmagie und verlangsamt sein Angriffstempo. 15 Skillstufen mit unveränderten Start- und Maximalwerten. Magischer Grundschaden 223 bis 529 und Mana-Kosten 56 bis 137 gemäß ganzzahligen Stufentabellen. Angriffstempo-Senkung steigt gleichmäßig von 1 auf 10 Prozent, Debuffdauer von einer auf fünf Sekunden. Castzeit 0,2 Sekunden, Grund-Cooldown 37 Sekunden. Keine zusätzliche Bewegungsfessel und kein Schaden über Zeit.';
  skill.description_eng='Hits the enemy once with wind magic and slows attack speed. Fifteen levels retain former starting and maximum values. Magical base damage 223 to 529 and Mana cost 56 to 137 follow integer level tables. Attack speed reduction increases evenly from 1 to 10 percent and debuff duration from one to five seconds. Cast time 0.2 seconds, base cooldown 37 seconds. No additional movement root or damage over time.';
  delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 }else{
  assert.equal(before.maxSkillLv,1);skill.maxSkillLv=2;skill.statScaling={...skill.statScaling};skill.skillLevelGrant.attributeCostScaling={};
  for(const key of ['str','vita','int','wis','agi','dex']){
   skill[key]=-costs[0];skill.statScaling[key]=linear(-costs[0],-costs[1],2);
   skill.skillLevelGrant.attributeCost[key]=costs[0];skill.skillLevelGrant.attributeCostScaling[key]=linear(costs[0],costs[1],2);
  }
  skill.description_de=`Permanente Passive mit zwei Stufen. Erhöht genau einen ausgewählten, bereits gelernten eigenen Skill um eine effektive Stufe, auch über dessen normale Lerngrenze hinaus. Der Bonus bleibt auf beiden Stufen +1. Dafür werden auf Skillstufe 1 jeweils ${costs[0]} und auf Skillstufe 2 jeweils ${costs[1]} Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick abgezogen. Glück wird nicht verringert. Vergessener Zauber kann sich nicht selbst erhöhen. Gelernte Stufe und Skillpunktkosten des Zielskills bleiben unverändert. Keine Mana-Kosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Die Attributabzüge dürfen nicht doppelt eingerechnet werden.`;
  skill.description_eng=`Permanent passive with two levels. Grants one effective level to exactly one selected, already learned own skill, including above its normal learning cap. Both ranks grant +1. Each of Strength, Vitality, Intelligence, Wisdom, Agility and Dexterity is reduced by ${costs[0]} at rank 1 or ${costs[1]} at rank 2. Luck is unaffected. Cannot target Forgotten Spell itself. The target's learned rank and skill point cost remain unchanged. No Mana cost, cast time, cooldown or limited duration. Attribute deductions must not be counted twice.`;
  delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 }
 return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 if(skill.nr===221){for(let level=1;level<=10;level++){
  const old=resolveSkillAtLevel(before,level,{classKey:'herbalist'}),now=resolveSkillAtLevel(skill,level,{classKey:'herbalist'});
  for(const key of ['matk','mana','cd','castTimeSeconds'])assert.equal(now[key],old[key]);
 }const end=resolveSkillAtLevel(skill,20,{classKey:'druid'});assert.equal(end.matk,921);assert.equal(end.mana,233);assert.equal(end.cd,45);assert.throws(()=>resolveSkillAtLevel(skill,11,{classKey:'herbalist'}),/exceeds/);}
 if(skill.nr===125){const old=resolveSkillAtLevel(before,10),now=resolveSkillAtLevel(skill,15);for(const key of ['matk','mana','cd','dur'])assert.equal(now[key],old[key]);assert(Math.abs(now.effects[0].value-old.effects[0].value)<1e-12);}
 if(skill.nr===222){const target=catalog.find(s=>s.nr===132);for(let level=1;level<=2;level++){
  const result=resolveCharacterSkillLevels({catalog:catalog.map(s=>s.nr===222?skill:s),classKey:'druid',learnedSkills:[{skillId:skill._id,level},{skillId:target._id,level:1}],forgottenSpellTargetId:target._id});
  for(const key of ['str','vita','int','wis','agi','dex'])assert.equal(result.attributeModifiers[key],-costs[level-1]);
  assert.equal(result.skills.find(s=>s.nr===132).effectiveSkillLevel,2);
 }}
}
if(!process.argv.includes('--apply'))console.log('Preview validated: Druid wind specialization, Wind Shackles fifteen levels and two-rank Forgotten Spell; Herbalist unchanged. Costs '+costs.join('/'));
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[221,125,222]}}).toArray();assert.equal(stored.length,3);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-druid-wind-280-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(live,{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/druid-wind-280-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:16,changes:[{nr:221,druidMax:20,herbalistMax:10,druidDamageAtMax:921,druidManaAtMax:233,baseCooldownRange:[54,45]},{nr:125,from:10,to:15,preservedEndpoints:true},{nr:222,from:1,to:2,attributeCostsByLevel:costs,bonusLevels:1}],energyStrikeCapUnchanged:5},null,2)+'\n');
 console.log('Verified Druid database updates.');
}catch(error){console.error('Druid completion failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
