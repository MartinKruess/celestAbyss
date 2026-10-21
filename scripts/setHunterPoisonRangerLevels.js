import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[152,156].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===152){
  assert.equal(before.maxSkillLv,20);skill.maxSkillLv=10;
  const e=skill.effects.find(e=>e.key==='poison-arrow-dot');
  e.valueScaling={type:'table',values:Array.from({length:10},(_,i)=>Math.round(3+57*i/9))};
  skill.resourceCosts[0].scaling={type:'table',base:50,values:Array.from({length:10},(_,i)=>Math.round(50+247*i/9))};
  skill.description_de='Eigenbuff mit zehn Skillstufen für 600 Sekunden. Jeder eigene erfolgreich treffende Pfeil hat während des Buffs 3 % Chance, das getroffene Ziel für 3 Sekunden zu vergiften. Das Gift verursacht einmal pro Sekunde 3 bis 60 Schaden gemäß Stufentabelle; ohne Erneuerung drei Ticks und maximal 180 Schaden auf Stufe 10. Erste Auslösung nach einer Sekunde. Das Gift stapelt pro Ziel nicht und springt nicht auf andere Ziele über. Erneute Auslösung erneuert nur die Restdauer auf drei Sekunden, ohne den laufenden Tick-Timer zurückzusetzen. Kein zusätzlicher Magieangriffsbeitrag. Aktivierungskosten einmalig 50 bis 297 Mana gemäß Stufentabelle, vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Die bisherigen Start- und Maximalwerte bleiben erhalten und sind auf zehn statt zwanzig Stufen verteilt.';
  skill.description_eng='Self buff with ten skill levels, lasting 600 seconds. Each own arrow that successfully hits has a 3% chance to poison its target for three seconds. Poison deals 3 to 60 damage once per second according to its level table; three ticks without refresh, up to 180 damage at level 10. First tick after one second. No stacking or spreading. Reapplication refreshes duration without resetting the running tick timer. No added caster magical attack. One-time activation cost 50 to 297 Mana according to the level table, before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds, unaffected by attack or cast speed. Former starting and maximum values are redistributed over ten rather than twenty levels.';
 }else{
  assert.equal(before.maxSkillLv,3);skill.maxSkillLv=1;skill.agi=2;skill.dex=3;delete skill.patk;delete skill.statScaling.patk;
  skill.statScaling.agi={type:'linear',base:2,perLevel:0};skill.statScaling.dex={type:'linear',base:3,perLevel:0};
  delete skill.statBonusTargets?.patk;delete skill.statBonusUnits?.patk;
  skill.mana=54;skill.resourceCosts[0].scaling={type:'linear',base:54,perLevel:0};
  skill.description_de='Eigenbuff mit einer einzigen Skillstufe für 600 Sekunden. Gewährt +2 Agilität und +3 Geschicklichkeit. Kein direkter P-Angriffsbonus; der bisherige direkte Bonus entfällt vollständig. Aktivierungskosten fest 54 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt.';
  skill.description_eng='Self buff with one learnable level, lasting 600 seconds. Grants +2 Agility and +3 Dexterity. No direct physical attack bonus; the former direct bonus is removed entirely. Activation costs a fixed 54 Mana before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds, unaffected by attack or cast speed. Animation duration is separate.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 const r=resolveSkillAtLevel(skill,skill.maxSkillLv,{classKey:'hunter'});
 if(skill.nr===152){const old=resolveSkillAtLevel(before,20,{classKey:'hunter'});assert.equal(r.effects[0].value,60);assert.equal(r.mana,old.mana);const effect=structuredClone(r.effects[0]),previous=structuredClone(old.effects[0]);delete effect.valueScaling;delete previous.valueScaling;assert.deepEqual(effect,previous);}
 else{assert.equal(r.agi,2);assert.equal(r.dex,3);assert.equal(r.patk,undefined);assert.equal(r.mana,54);}
 assert.equal(r.dur,600);assert.equal(r.cd,60);assert.equal(r.castTimeSeconds,.1);
}
if(!process.argv.includes('--apply'))console.log('Preview validated: Poison Arrow ten levels with unchanged endpoints, Ranger one level (+2 Agility, +3 Dexterity, no direct attack, 54 Mana).');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[152,156]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-hunter-poison-ranger-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const update={$set:fields};if(skill.nr===156)update.$unset={patk:''};const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/hunter-poison-ranger-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:-12,changes:[{nr:152,from:20,to:10,preservedEndpoints:true},{nr:156,from:3,to:1,agi:2,dex:3,directPhysicalAttack:0,mana:54}]},null,2)+'\n');
 console.log('Verified Hunter database changes.');
}catch(error){console.error('Hunter update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
