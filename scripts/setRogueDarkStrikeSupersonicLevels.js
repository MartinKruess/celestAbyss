import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const table=(base,end,levels)=>({type:'table',base,values:Array.from({length:levels},(_,i)=>Math.round(base+(end-base)*i/(levels-1)))});
const changes=[27,115].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===27){
  assert.equal(before.maxSkillLv,15);skill.maxSkillLv=20;
  skill.statScaling.patk=table(41,279,20);skill.resourceCosts[0].scaling=table(10,66,20);skill.cooldownScaling=table(28,14,20);
  skill.description_de='Greift unmittelbar aus den Schatten an und verursacht einmalig physischen Schaden. Zwanzig Skillstufen bei unveränderten Start- und Maximalwerten. Grundschaden steigt gemäß ganzzahliger Stufentabelle von 41 auf 279, Mana-Kosten von 10 auf 66. Cooldown sinkt gemäß ganzzahliger Stufentabelle von 28 auf 14 Sekunden. Castzeit 0 Sekunden, keine anhaltende Wirkungsdauer oder zusätzliche Wartezeit vor dem Angriff. Bestehende Kosten bleiben erhalten; Charakterangriff zählt nicht zur Manakostenbasis.';
  skill.description_eng='Attacks immediately from the shadows, dealing physical damage once. Twenty levels retain former starting and maximum values. Base damage increases from 41 to 279 and Mana cost from 10 to 66 according to integer level tables. Cooldown decreases from 28 to 14 seconds according to its integer level table. Cast time 0 seconds, no lingering effect or preparation delay. Existing costs retained; character attack is excluded from the Mana cost basis.';
 }else{
  assert.equal(before.maxSkillLv,5);skill.maxSkillLv=10;
  skill.statScaling.patk=table(636,1786,10);skill.cooldownScaling=table(120,105,10);
  skill.resourceCosts[0].scaling={type:'table',base:159,values:skill.statScaling.patk.values.map(n=>Math.round(n*.25))};
  skill.description_de='Führt nach 0,1 Sekunden Castzeit einen einzelnen physischen Treffer aus. Zehn Skillstufen mit ganzzahligen Stufentabellen. Die Animationsdauer ist separat noch festzulegen. Der getroffene Gegner wird unverändert für 0,5 Sekunden paralysiert; genaue Aktionseinschränkungen bleiben offen. Physischer Skill-Grundschaden steigt von 636 auf 1786. Mana-Kosten betragen exakt gerundete 25 Prozent des jeweiligen Skill-Grundschadens ohne Charakterangriff, vor Rabatten: 159 bis 447. Cooldown sinkt von 120 auf 105 Sekunden. Die neuen Maximalwerte entsprechen der bisherigen Skalierung um eine zusätzliche Stufe; die Paralyse wird nicht erhöht.';
  skill.description_eng='Performs one physical hit after a 0.1-second cast. Ten levels use integer progression tables. Animation duration remains to be defined separately. Target paralysis remains 0.5 seconds at all levels; exact action restrictions remain pending. Physical base damage increases from 636 to 1786. Mana costs exactly rounded 25 percent of each level’s base damage excluding character attack, before discounts: 159 to 447. Cooldown decreases from 120 to 105 seconds. New maximum values correspond to one extra level of the former progression; paralysis is not increased.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 for(let level=1;level<=skill.maxSkillLv;level++){const r=resolveSkillAtLevel(skill,level);for(const k of ['patk','mana','cd'])assert(Number.isInteger(r[k]));if(skill.nr===115){assert.equal(r.mana,Math.round(r.patk*.25));assert.deepEqual(r.effects,before.effects);}}
 const target=skill.nr===27?resolveSkillAtLevel(before,15):resolveSkillAtLevel({...before,maxSkillLv:6},6);
 const actual=resolveSkillAtLevel(skill,skill.maxSkillLv);for(const key of ['patk','mana','cd','castTimeSeconds'])assert.equal(actual[key],target[key]);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Dark Strike twenty levels with preserved endpoints; Supersonic Blade ten integer levels ending at former level-six values. Kunai unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[27,115]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-rogue-dark-supersonic-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(live,{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/rogue-dark-supersonic-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:10,changes:[{nr:27,from:15,to:20,preservedEndpoints:true},{nr:115,from:5,to:10,maximumMatchesFormerLevel:6,patkAtMax:1786,manaAtMax:447,cooldownAtMax:105,paralysisSeconds:.5}],unchangedSkillNumbers:[70,243]},null,2)+'\n');
 console.log('Verified Rogue database updates.');
}catch(error){console.error('Rogue update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
