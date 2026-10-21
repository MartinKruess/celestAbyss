import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const plans={75:{str:10,vita:10},107:{pdef:80,mdef:60},150:{dex:20,vita:20,wis:20},166:{int:10,wis:10},191:{movementSpeed:10},197:{str:20,vita:20,int:20,wis:20,manaRegen:180},223:{atkSpeed:10,movementSpeed:5},225:{mdef:180}};
const descriptions={
 75:['Gruppenbuff für dich, Gruppenmitglieder und Begleiter. Je Stufe +1 Stärke und +1 Vitalität, auf Stufe 10 jeweils +10.','Group buff for yourself, group members and companions. +1 Strength and +1 Vitality per level, reaching +10 each at level 10.'],
 107:['Verstärkt verbündete Spieler in der Nähe um 80 physische und 60 magische Verteidigung. Eine lernbare Stufe.','Grants nearby allied players +80 physical and +60 magical defense. One learnable level.'],
 150:['Verstärkt ausschließlich Gruppenbegleiter, keine Spieler. Je Stufe +2 Geschick, +2 Vitalität und +2 Willenskraft, maximal jeweils +20. Gilt für reguläre Pets einschließlich der Pets des Ritualisten und für den Seelenbegleiter, nicht direkt für Morrak. Der Seelenbegleiter erhält diese Attribute zusätzlich zur Meistervererbung. Seine Geschickpunkte geben 1,8 P-Angriff je Punkt; andere Begleiter verwenden ihre jeweiligen Attributregeln.','Buffs group companions only, not players. Each level grants +2 Dexterity, Vitality and Wisdom, reaching +20 each. Applies to regular pets including Ritualist pets and the spirit companion, not directly to Morrak. The spirit companion gains these attributes in addition to master inheritance and converts Dexterity into 1.8 physical attack per point; other companions use their respective attribute rules.'],
 166:['Gruppenbuff: je Stufe +1 Intelligenz und +1 Willenskraft, auf Stufe 10 jeweils +10. Kein direkter M-Angriffsbonus.','Group buff: +1 Intelligence and +1 Wisdom per level, reaching +10 each at level 10. No direct magical attack bonus.'],
 191:['Gruppenbuff: Laufgeschwindigkeitspunkte je Stufe 1 / 5,5 / 10. Das sind additive Rohpunkte zum Tempo, kein garantierter prozentualer Laufgeschwindigkeitsgewinn. Die konkrete Laufgeschwindigkeitskurve ist noch offen.','Group buff: movement-speed rating by level 1 / 5.5 / 10. Additive raw speed points, not a guaranteed percentage movement-speed increase. The movement-speed curve remains pending.'],
 197:['Aurora-Segen vereint die bisherigen Angriffs-, Mentalitäts- und Verteidigungssegen. Je Stufe +2 Stärke, Vitalität, Intelligenz und Willenskraft sowie +18 direkte MP-Regeneration je Tick. Auf Stufe 10 jeweils +20 der vier Attribute und +180 MP-Regeneration je Tick. Keine direkten Boni auf P-Angriff, M-Angriff, P-Abwehr oder M-Abwehr. Die bisherigen separaten Segen werden nicht zusätzlich gestapelt.','Combines the former Attack, Mentality and Defense blessings. Each level grants +2 Strength, Vitality, Intelligence and Wisdom and +18 direct Mana regeneration per tick. Level 10 grants +20 of each of those four attributes and +180 Mana regeneration per tick. No direct physical/magical attack or defense bonuses. Former separate blessings do not stack in addition.'],
 223:['Gruppenbuff über drei Stufen: Angriffsgeschwindigkeitspunkte 5 / 7,5 / 10 und Laufgeschwindigkeitspunkte 1 / 3 / 5. Beide sind additive Rohpunkte, keine direkten Prozentmultiplikatoren. Angriffstempo wird nach dem Sammeln aller Boni durch die bestehende Tempokurve gerechnet; die konkrete Laufgeschwindigkeitskurve ist noch offen.','Group buff with three levels: attack-speed rating 5 / 7.5 / 10 and movement-speed rating 1 / 3 / 5. Both are additive raw points, not direct percentage multipliers. Attack speed follows the existing speed curve after all bonuses stack; the movement-speed curve remains pending.'],
 225:['Gruppenbuff: +18 magische Verteidigung je Stufe, auf Stufe 10 +180. Kein zusätzlicher Willenskraftbonus.','Group buff: +18 magical defense per level, reaching +180 at level 10. No additional Wisdom bonus.']
};
const changes=Object.entries(plans).map(([nr,bonuses])=>{
 const before=catalog.find(s=>s.nr===Number(nr)),skill=structuredClone(before);
 const affected=Object.keys(bonuses);
 if(skill.nr===166)affected.push('matk');if(skill.nr===197)affected.push('patk','matk','pdef','mdef');if(skill.nr===225)affected.push('wis');
 skill.statScaling??={};skill.statBonusUnits??={};
 for(const key of affected){delete skill[key];delete skill.statScaling[key];delete skill.statBonusUnits[key];delete skill.statBonusTargets?.[key];}
 for(const [key,max]of Object.entries(bonuses)){
  let curve={type:'linear',base:max/skill.maxSkillLv,perLevel:max/skill.maxSkillLv};
  if(skill.nr===191)curve={type:'table',values:[1,5.5,10]};
  if(skill.nr===223)curve={type:'table',values:key==='atkSpeed'?[5,7.5,10]:[1,3,5]};
  skill.statScaling[key]=curve;skill[key]=curve.base??curve.values[0];
  skill.statBonusUnits[key]=['atkSpeed','movementSpeed'].includes(key)?'ratingPoints':'flat';
  if(skill.nr===75)skill.statBonusTargets[key]='selfGroupAndCompanions';
  if(skill.nr===150)skill.statBonusTargets[key]='groupCompanions';
  if([166,191,223].includes(skill.nr)){skill.statBonusTargets??={};skill.statBonusTargets[key]='selfAndAllies';}
 }
 const mana=before.resourceCosts?.find(c=>c.resource==='mana')?.scaling;
 const cost=mana?.type==='linear'?`${mana.base} + ${mana.perLevel} je weiterer Stufe`:`${mana?.base??before.mana}`;
 skill.description_de=descriptions[skill.nr][0]+` Dauer ${skill.dur/60} Minuten, Cooldown 60 Sekunden, Castzeit ${skill.castTimeSeconds.toLocaleString('de-DE')} Sekunden. Mana-Kosten: ${cost}.`;
 skill.description_eng=descriptions[skill.nr][1]+` Duration ${skill.dur/60} minutes, cooldown 60 seconds, cast time ${skill.castTimeSeconds} seconds. Mana cost: ${mana?.type==='linear'?mana.base+' + '+mana.perLevel+' per additional level':mana?.base??before.mana}.`;
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 return {before,skill,bonuses,affected};
});
for(const {before,skill,bonuses,affected}of changes){
 await new SkillDataModel(skill).validate();
 for(const key of ['_id','charClass','maxSkillLv','dur','cd','castTimeSeconds','resourceCosts','effects'])assert.deepEqual(skill[key],before[key]);
 const max=resolveSkillAtLevel(skill,skill.maxSkillLv);for(const key of affected)assert.ok(Math.abs((max[key]??0)-(bonuses[key]??0))<1e-8,skill.nr+' '+key);
 for(let level=1;level<=skill.maxSkillLv;level++){
  const now=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
  for(const [key,value]of Object.entries(old))if(typeof value==='number'&&!affected.includes(key))assert.equal(now[key],value,skill.nr+' '+key+' '+level);
 }
}
if(!process.argv.includes('--apply'))console.log('Verified preview: eight group buffs; costs, timing, levels and unmentioned effects preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:changes.map(c=>c.skill.nr)}}).toArray();assert.equal(stored.length,8);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-group-buff-bonuses-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');await fs.writeFile(backup+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');
 for(const {skill,affected}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const update={$set:fields};const unset=Object.fromEntries(affected.filter(k=>Object.hasOwn(live,k)&&!Object.hasOwn(fields,k)).map(k=>[k,'']));if(Object.keys(unset).length)update.$unset=unset;const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/group-buff-bonuses-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,maximumBonuses:plans,progression:'Linear per learned level for attribute buffs; Dox attack rating 5/7.5/10, movement rating 1/3/5; Quick Feet movement rating 1/5.5/10.',movementCurveStatus:'pending; raw rating is stored and displayed without claiming a final percentage'},null,2)+'\n');
 console.log('Verified eight group-buff bonus database updates.');
}catch(error){console.error('Group bonus update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
