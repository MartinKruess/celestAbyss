import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[193,224].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 skill.effects??=[];
 for(const [key,kind]of [['patk','physical'],['matk','magical']]){
  if(!skill.statScaling?.[key]&&typeof skill[key]!=='number')continue;
  const curve=skill.statScaling?.[key]??{type:'fixed',base:skill[key]};
  skill.effects.push({key:`group-${kind}-skill-damage`,type:'damageBonus',target:'self',appliesTo:'allSkills',damageTypes:[kind],value:curveValue(curve,1),unit:'flat',valueScaling:structuredClone(curve),durationSeconds:skill.dur});
  delete skill[key];delete skill.statScaling?.[key];delete skill.statBonusUnits?.[key];delete skill.statBonusTargets?.[key];
 }
 skill.effectsVersion=1;
 const scopeDe='Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher.';
 const scopeEn='The damage bonus applies to matching skill hits with an attack contribution, including each hit of multi-hit skills and periodic hits that add character attack. Does not affect normal basic attacks, companion attacks or purely fixed residual DoTs. Normal attributes, weapons and self buffs retain their existing scaling.';
 skill.description_de=(nr===193?'Gruppenbuff: +15 direkte MP-Regeneration je Tick auf Stufe 1, +5 je weiterer Stufe, maximal +60. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Kein direkter M-Angriffsbonus.':'Gruppenbuff: +18 körperlicher Skillschaden je Stufe, maximal +180. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Keine direkten P-/M-Angriffsboni.')+' '+scopeDe+` Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten ${nr===193?'54 +16':'63 +24'} je weiterer Stufe, maximal ${nr===193?198:279}.`;
 skill.description_eng=(nr===193?'Group buff: +15 direct Mana regeneration per tick at level 1, +5 per additional level, reaching +60. Also adds magical skill damage: 0 at level 1, +9 per additional level to +81 at level 10. No direct magical attack bonus.':'Group buff: +18 physical skill damage per level, reaching +180. Also adds magical skill damage: 0 at level 1, +9 per additional level to +81 at level 10. No direct physical or magical attack bonuses.')+' '+scopeEn+` Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost ${nr===193?'54 +16':'63 +24'} per additional level, reaching ${nr===193?198:279}.`;
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 for(const key of ['_id','charClass','maxSkillLv','dur','cd','castTimeSeconds','resourceCosts'])assert.deepEqual(skill[key],before[key]);
 for(let level=1;level<=skill.maxSkillLv;level++){
  const now=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
  for(const[key,kind]of [['patk','physical'],['matk','magical']]){
   assert.equal(now[key],undefined);
   const effect=now.effects.find(e=>e.damageTypes.includes(kind));
   assert.equal(effect?curveValue(effect.valueScaling,level)??effect.value:0,old[key]??0);
  }
  if(skill.nr===193)assert.equal(now.manaRegen,old.manaRegen);
 }
}
if(!process.argv.includes('--apply'))console.log('Verified two group-buff conversions at every rank; resource costs, timing and regeneration preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[193,224]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-group-skill-damage-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');await fs.writeFile(backup+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const unset=Object.fromEntries(['patk','matk'].filter(k=>Object.hasOwn(live,k)).map(k=>[k,'']));const update={$set:fields};if(Object.keys(unset).length)update.$unset=unset;const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/group-skill-damage-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,skillNumbers:[193,224],maximums:{193:{magicalSkillDamage:81,manaRegen:60},224:{physicalSkillDamage:180,magicalSkillDamage:81}},scope:'All recipients. Replaces only direct attack bonuses; no effects on basic attacks or summons. Skill hits with attack contribution, including matching multi-hits and attack-scaled periodic hits, retain the converted bonus. Fixed residual DoTs unchanged.'},null,2)+'\n');
 console.log('Verified Water and Fire group buffs now grant skill-only damage.');
}catch(error){console.error('Group skill-damage update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
