import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
const numbers=[17,47,50,66,115,202],expected={17:189,47:534,50:153,66:541,115:389,202:234};
const zero={physicalAttack:0,magicalAttack:0,criticalDamageBonus:.8};
try {
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:numbers}}).toArray();assert.equal(before.length,numbers.length);
 const changes=before.map(original=>{
  const skill=structuredClone({...original,_id:undefined});delete skill._id;delete skill.levelProgression;
  const burn=skill.nr===202,factor=burn?.15:.25;
  if(burn){
   const effect=skill.effects.find(e=>e.key==='burn-dot');effect.value=16;effect.valueScaling={type:'linear',base:16,perLevel:10};effect.durationSeconds=10;effect.addsCasterMagicalAttack=false;
   skill.dur=10;
   skill.description_de='Lässt einen Gegner für 10 Sekunden brennen: zehn magische Schadensticks, einer je Sekunde, erster Tick nach einer Sekunde, kein Initialtreffer. Grundschaden je Tick: 16 auf Stufe 1, +10 je weiterer Stufe bis 156 auf Stufe 15. Gesamter Grundschaden 160 bis 1560. Kein zusätzlicher Charakterangriff je Tick. Mana: gerundet 15 Prozent des gesamten Grundschadens, 24 auf Stufe 1 bis 234 auf Stufe 15, vor passiven Rabatten. Weisheit des Salamanders verstärkt Feuerschaden und reduziert Mana-Kosten. Castzeit 0,2 Sekunden, Cooldown 22 Sekunden. Zielanzahl und Trefferbereich werden später geprüft.';
   skill.description_eng='Burns an enemy for 10 seconds: ten magical damage ticks, one per second, first tick after one second, no initial hit. Base damage per tick starts at 16 and increases by 10 per additional level to 156 at level 15. Total base damage is 160 to 1560. No additional character attack per tick. Mana costs rounded 15 percent of total base damage, from 24 to 234 before passive discounts. Wisdom of the Salamander boosts fire damage and reduces Mana costs. Cast time 0.2 seconds, cooldown 22 seconds. Target count and area remain subject to later review.';
  }
  skill.manaPricing={category:burn?'dot':'normal',factor,basis:'skillBaseDamagePerTarget',usesCharacterAttack:false,version:1};
  const values=Array.from({length:skill.maxSkillLv},(_,i)=>Math.round(evaluateDamageSkill({...skill,maxSkillLv:i+1},zero).damage*factor));
  assert.equal(values.at(-1),expected[skill.nr]);
  skill.resourceCosts.find(c=>c.resource==='mana').scaling={type:'table',base:values[0],values};skill.mana=values[0];
  if(!burn){
   skill.description_de=skill.description_de.replace(/Mana-Kosten[^.]*\./g,'').replace(/Die Aktivierung kostet einmalig 147\s*/g,'');
   skill.description_eng=skill.description_eng.replace(/Mana cost[^.]*\./gi,'');
   skill.description_de+=` Mana-Kosten je Stufe: ${values.join('/')}. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag.`;
   skill.description_eng+=` Mana costs by level: ${values.join('/')}. Exactly rounded 25 percent of total skill base damage excluding character attack; guaranteed multiple hits and guaranteed critical damage are included, with no additional healing surcharge.`;
  }
  skill.levelProgression=buildSkillProgression(skill);
  assert(skill.levelProgression.rules.some(e=>e.rule.kind==='outputCost'));
  for(let level=1;level<=skill.maxSkillLv;level++){const s=resolveSkillAtLevel(skill,level);assert.equal(s.mana,values[level-1]);assert.equal(s.mana,Math.round(evaluateDamageSkill(s,zero).damage*factor));}
  return {before:original,skill};
 });
 for(const {skill} of changes)await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-exact-mana-burn-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before:original,skill}of changes){await col.updateOne({_id:original._id},{$set:skill});const actual=await col.findOne({_id:original._id});delete actual._id;const wanted={...original,...skill};delete wanted._id;assert.deepEqual(actual,wanted);}
 await fs.writeFile('data/balancing/exact-attack-mana-and-burn-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,dotRule:'Direct residual DoTs: rounded 15% of total base damage; no caster attack per tick. Area attacks and self-buff procs are not migrated.'},null,2)+'\n');
 console.log('Verified six skills and exact per-level output costs. Burn: 16 +10/level, 10 ticks, max 1560 damage /234 Mana; cooldown22 unchanged.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(e.name==='AssertionError'||e.name==='ValidationError')console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
