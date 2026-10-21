import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const linear=(base,end)=>({type:'linear',base,perLevel:(end-base)/19});
const integerTable=(base,end)=>({type:'table',base,values:Array.from({length:20},(_,i)=>Math.round(base+(end-base)*i/19))});
const changes=[178,103,100].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===178){
  skill.int=1;skill.statScaling.int={type:'linear',base:1,perLevel:1};
  const effect=skill.effects.find(e=>e.key==='fire-spirit-fire-attack');effect.value=2;effect.valueScaling={type:'linear',base:2,perLevel:2};
  skill.description_de='Eigenbuff für 300 Sekunden mit zehn Stufen. Gewährt +1 Intelligenz je gelerntem Skilllevel, maximal +10 auf Stufe 10. Feuerangriffe erhalten zusätzlich +2 direkten Angriff je Skillstufe, maximal +20. Beide Boni sind gegenüber der bisherigen Definition halbiert. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit; Cooldown 60 Sekunden. Einheitliche Element-Zuordnung und genaue Anwendung des flachen Feuerbonus bei Mehrfachtreffern und DoTs werden noch abgestimmt. Animationsdauer ist von der Castzeit getrennt.';
  skill.description_eng='Self buff lasting 300 seconds with ten levels. Grants +1 Intelligence per learned level, up to +10. Fire attacks gain +2 flat attack per learned level, up to +20. Both bonuses are half their former values. Activation costs 50 Mana plus 13 per additional level, up to 167 before discounts. Fixed cast time 0.1 seconds, unaffected by attack or cast speed; cooldown 60 seconds. Unified element tags and exact application of the flat fire bonus to multi-hits and DoTs remain pending. Animation duration is separate.';
 }else if(nr===103){
  assert.equal(before.maxSkillLv,15);skill.maxSkillLv=20;
  skill.statScaling.matk=integerTable(97,237);
  skill.resourceCosts.find(c=>c.resource==='mana').scaling=integerTable(39,95);
  skill.cooldownScaling=linear(104,90);skill.durationScaling=linear(2,3);
  for(const effect of skill.effects)effect.durationScaling=linear(2,3);
  skill.description_de='Verbraucht 1 Seelenfragment und lässt zwei seelenhafte Hände aus dem Boden den Gegner festhalten. Kein Lebensopfer. Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Die Fessel betäubt das Ziel und senkt seine M-Defense währenddessen um 10 Prozent. Dauer steigt gleichmäßig von 2 Sekunden auf Stufe 1 bis 3 Sekunden auf Stufe 20. Magischer Initial-Grundschaden steigt gemäß ganzzahliger Stufentabelle von 97 auf 237; dazu einmal aktueller M-Angriff. Mana steigt gemäß ganzzahliger Stufentabelle von 39 auf 95. Cooldown sinkt gleichmäßig von 104 auf 90 Sekunden. Castzeit vorläufig 0,1 Sekunden innerhalb des genannten Bereichs 0,1–0,2 Sekunden. Während der Fessel ist Seelenqual nutzbar. Definition, Kapazität und Wiederauffüllen des permanenten Seelenvorrats werden separat ausgearbeitet. Mana-Gruppe: combo; bestehende Start- und Endkosten bleiben erhalten.';
  skill.description_eng='Consumes one soul fragment and summons two spectral hands to shackle an enemy. No health sacrifice. Twenty levels retain the former starting and maximum effects. Stuns and reduces magical defense by 10 percent for the same duration, increasing evenly from 2 to 3 seconds. Initial magical base damage increases from 97 to 237 according to an integer level table, plus current magical attack once. Mana increases from 39 to 95 according to its integer level table. Cooldown decreases evenly from 104 to 90 seconds. Provisional cast time 0.1 seconds within the stated 0.1–0.2 range. Soul Torment is usable during the shackle. Permanent soul storage capacity and replenishment are defined separately. Combo Mana group; existing starting and maximum costs retained.';
 }else{
  assert.equal(before.maxSkillLv,10);skill.maxSkillLv=20;
  skill.effects.find(e=>e.stat==='pdef').valueScaling=linear(-.03,-.30);
  skill.effects.find(e=>e.stat==='mdef').valueScaling=linear(-.05,-.50);
  skill.resourceCosts.find(c=>c.resource==='health').scaling=integerTable(50,95);
  skill.resourceCosts.find(c=>c.resource==='mana').scaling=integerTable(47,281);
  skill.description_de='Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Opfert gemäß ganzzahliger Stufentabelle 50 bis 95 HP und kostet zusätzlich 47 bis 281 Mana. Belegt einen Gegner für 30 Sekunden mit Schwäche: physische Verteidigung sinkt gleichmäßig von −3 Prozent auf Stufe 1 auf −30 Prozent auf Stufe 20; magische Verteidigung von −5 auf −50 Prozent. Dies reduziert Verteidigungswerte, nicht direkt erlittenen Schaden um denselben Prozentsatz. Cooldown 55 Sekunden, Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen.';
  skill.description_eng='Twenty skill levels retain the former starting and maximum effects. Sacrifices 50 to 95 HP and costs 47 to 281 Mana according to integer level tables. Debuffs one enemy for 30 seconds: physical defense reduction increases evenly from 3 to 30 percent, magical defense reduction from 5 to 50 percent. These modify defense stats, not incoming damage by those percentages. Cooldown 55 seconds, cast time 0.1 seconds. Insufficient-health behavior remains pending.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 if(skill.nr===178){for(let level=1;level<=10;level++){const old=resolveSkillAtLevel(before,level),r=resolveSkillAtLevel(skill,level);assert.equal(r.int,old.int/2);assert.equal(r.effects[0].value,old.effects[0].value/2);assert.equal(r.mana,old.mana);}}
 else for(const [level,oldLevel]of [[1,1],[20,before.maxSkillLv]]){
  const old=resolveSkillAtLevel(before,oldLevel),r=resolveSkillAtLevel(skill,level);
  for(const key of ['matk','dur','cd','castTimeSeconds'])if(typeof old[key]==='number')assert(Math.abs(r[key]-old[key])<1e-10,key);
  for(const [index,e]of (old.effects??[]).entries()){if(e.value!==undefined)assert(Math.abs(r.effects[index].value-e.value)<1e-10);assert.equal(r.effects[index].durationSeconds,e.durationSeconds);}
  assert.deepEqual(r.resourceCosts,old.resourceCosts);
 }
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Spirit of Fire bonuses halved; Soul Shackle and Weakness of the Flesh retain endpoint values over twenty levels.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[178,103,100]}}).toArray();assert.equal(stored.length,3);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-ritualist-280-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(live,{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/ritualist-280-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:15,changes:[{nr:178,intelligenceAndFireBonusMultiplier:.5},{nr:103,from:15,to:20,preservedEndpoints:true},{nr:100,from:10,to:20,preservedEndpoints:true}],unchangedSkillNumbers:[209]},null,2)+'\n');
 console.log('Verified Ritualist database updates.');
}catch(error){console.error('Ritualist update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
