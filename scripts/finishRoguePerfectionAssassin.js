import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[243,238].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===243){
  assert.equal(before.maxSkillLv,1);skill.maxSkillLv=4;
  skill.attributeConversionBonus.amountPerPoint=1;
  skill.attributeConversionBonus.amountPerPointScaling={type:'linear',base:1,perLevel:1};
  skill.description_de='Permanenter passiver Skill mit vier Stufen. Jeder aktuelle Geschickpunkt gewährt je nach Skillstufe zusätzlich 1/2/3/4 Max-Mana. Verwendet den aktuellen Gesamtwert einschließlich Geschick aus Ausrüstung, permanenten Passiven und aktiven Attributboni; spätere Änderungen wirken auf den Bonus. Bei 55 bekannten Geschickpunkten ergibt das 55/110/165/220 zusätzliches Max-Mana, zuzüglich eines noch nicht festgelegten Geschick-Startwerts. Keine direkte Mana-Wiederherstellung, zusätzliche Regeneration oder weitere Manakostenreduktion. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. Aktuelles Mana bei Änderungen des Maximums wird nach der noch zentral festzulegenden Regel behandelt.';
  skill.description_eng='Permanent passive with four levels. Each current Dexterity point grants 1/2/3/4 additional maximum Mana according to skill level. Uses current total Dexterity including equipment, permanent passives and active attribute bonuses; later changes affect the bonus. At 55 known Dexterity this grants 55/110/165/220 maximum Mana, plus any starting Dexterity still undefined. No instant Mana restoration, extra regeneration or further cost reduction. No activation cost, cast time, cooldown or limited duration. Current-Mana handling on maximum changes follows a central rule still pending.';
 }else{
  assert.equal(before.maxSkillLv,10);delete skill.amb;delete skill.statScaling.amb;delete skill.statBonusUnits.amb;delete skill.statBonusTargets?.amb;
  skill.statScaling.atkSpeed={type:'linear',base:0,perLevel:.1/9};
  skill.description_de='Eigenbuff mit zehn Stufen. Gewährt 0 bis 10 % zusätzliche Angriffsgeschwindigkeit, gleichmäßig über die zehn Stufen verteilt. Kein Ambush-Bonus. Dauer steigt von 11 auf 20 Sekunden. Cooldown 120 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Keine zusätzlichen oder doppelten Auto-Attack-Treffer. Bei gleichzeitig aktivem Herz des Verräters auf Stufe 5 stellt jeder eigene Auto-Attack 12 Mana wieder her. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Animationsdauer ist von der Castzeit getrennt.';
  skill.description_eng='Self buff with ten levels. Grants 0 to 10% additional attack speed evenly across ten levels. No Ambush bonus. Duration increases from 11 to 20 seconds. Cooldown 120 seconds, fixed cast time 0.1 seconds unaffected by attack or cast speed. No additional or double basic attack hits. While Heart of the Traitor at level 5 is also active, each own basic attack restores 12 Mana. Activation costs 50 Mana plus 13 per additional level, up to 167 before discounts. Ongoing Mana drain is calculated separately; animation duration is separate.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 for(let level=1;level<=skill.maxSkillLv;level++){
  const r=resolveSkillAtLevel(skill,level);
  if(skill.nr===243)assert.equal(r.attributeConversionBonus.amountPerPoint,level);
  else{const old=resolveSkillAtLevel(before,level);assert(Math.abs(r.atkSpeed-old.atkSpeed/2)<1e-12);assert.equal(r.amb,undefined);assert.equal(r.statScaling.amb,undefined);for(const k of ['mana','cd','dur','castTimeSeconds'])assert.equal(r[k],old[k]);}
 }
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Technical Perfection four levels 1/2/3/4 Mana per Dexterity; Assassin attack speed halved and Ambush removed.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[243,238]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-rogue-perfection-assassin-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const update={$set:fields};if(skill.nr===238)update.$unset={amb:''};const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/rogue-perfection-assassin-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:3,changes:[{nr:243,from:1,to:4,manaPerDexterityByLevel:[1,2,3,4]},{nr:238,attackSpeedMaximum:.1,ambushRemoved:true,otherValuesPreserved:true}]},null,2)+'\n');
 console.log('Verified Rogue perfection and Assassin database updates.');
}catch(error){console.error('Rogue completion failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
