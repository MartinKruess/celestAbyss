import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:202});assert(b);const s=structuredClone(b);delete s._id;delete s.levelProgression;s.maxSkillLv=5;
 const ticks=[16,39,61,84,106];s.effects.find(e=>e.type==='periodicDamage').valueScaling={type:'table',values:ticks};s.resourceCosts[0].scaling={type:'table',base:24,values:ticks.map(t=>Math.round(t*10*.15))};
 // Retain both endpoints of the unused legacy attack field as well.
 s.statScaling.matk={type:'table',values:[12,26,39,53,66]};
 s.description_de='Lässt einen Gegner für 10 Sekunden brennen: zehn magische Schadensticks, einer je Sekunde, erster Tick nach einer Sekunde, kein Initialtreffer. Fünf Skillstufen mit 16/39/61/84/106 Grundschaden je Tick, insgesamt 160/390/610/840/1060 Grundschaden. Kein zusätzlicher Charakterangriff je Tick. Mana-Kosten: 24/59/92/126/159, gerundet 15 Prozent des gesamten Grundschadens vor passiven Rabatten. Weisheit des Salamanders verstärkt Feuerschaden und reduziert Mana-Kosten. Castzeit 0,2 Sekunden, Cooldown 22 Sekunden. Die Maximalwerte entsprechen der vorherigen Stufe 10. Zielanzahl und Trefferbereich werden später geprüft.';
 s.description_eng='Burns an enemy for 10 seconds: ten magical damage ticks, one per second, first tick after one second, no initial hit. Five skill levels deal 16/39/61/84/106 base damage per tick, totaling 160/390/610/840/1060. No additional character attack per tick. Mana costs 24/59/92/126/159, rounded 15% of total base damage before passive discounts. Wisdom of the Salamander boosts fire damage and reduces Mana cost. Cast time 0.2 seconds, cooldown 22 seconds. Maximum values match the previous level 10. Target count and area remain subject to later review.';
 s.levelProgression=buildSkillProgression(s);await new SkillDataModel(s).validate();
 for(let l=1;l<=5;l++){const r=resolveSkillAtLevel(s,l);assert.equal(r.effects[0].value,ticks[l-1]);assert.equal(r.mana,Math.round(ticks[l-1]*1.5));}
 const old=resolveSkillAtLevel({...b,maxSkillLv:10},10),now=resolveSkillAtLevel(s,5);for(const field of ['mana','cd','dur','castTimeSeconds'])assert.equal(now[field],old[field]);assert.equal(evaluateDamageSkill(now,{physicalAttack:500,magicalAttack:700}).damage,evaluateDamageSkill(old,{physicalAttack:500,magicalAttack:700}).damage);
 const backup='data/balancing/history/before-burn-five-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/burn-five-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:202,maxSkillLevel:5,ticks,mana:s.resourceCosts[0].scaling.values,scope:'Condense previous ten-level skill into five; same maximum damage, Mana and timing.'},null,2)+'\n');console.log('Verified Burn: five levels, previous level-ten maximum damage and Mana preserved.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
