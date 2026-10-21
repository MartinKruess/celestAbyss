import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[16,81].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===16){
  assert.equal(before.maxSkillLv,20);skill.maxSkillLv=10;
  skill.statScaling={...skill.statScaling,matk:{type:'linear',base:47,perLevel:21}};
  skill.matk=47;skill.mana=12;
  skill.resourceCosts[0].scaling={type:'table',base:12,values:Array.from({length:10},(_,i)=>Math.round((47+21*i)*.25))};
  skill.cooldownScaling={type:'linear',base:38,perLevel:(28.5-38)/9};
  const durationValues=Array.from({length:10},(_,i)=>resolveSkillAtLevel(before,1+Math.round(i*19/9)).dur);
  skill.durationScaling={type:'table',values:durationValues};
  skill.description_de='Erschafft Wasserfesseln, die ein Ziel festhalten und einmalig magischen Schaden verursachen. Zehn Skillstufen. Magischer Skill-Grundschaden 47 auf Stufe 1, +21 je weiterer Stufe, maximal 236 auf Stufe 10; dazu einmal aktueller M-Angriff. Mana-Kosten nach der 25%-Regel ausschließlich aus dem Skill-Grundschaden, kaufmännisch auf ganze Punkte gerundet: 12/17/22/28/33/38/43/49/54/59. Charakterangriff zählt nicht zur Kostenbasis. Fesseldauer je Skillstufe: 1/1/1,5/1,5/1,5/2/2/2,5/2,5/3 Sekunden. Cooldown sinkt gleichmäßig von 38 auf 28,5 Sekunden über die zehn Stufen. Castzeit unverändert 0,2 Sekunden. Keine zusätzliche periodische Schadenswirkung.';
  skill.description_eng='Creates water chains that immobilize a target and deal magical damage once. Ten skill levels. Magical skill base damage 47 at level 1 plus 21 per additional level, reaching 236 at level 10, plus current magical attack once. Mana cost is 25% of skill base damage rounded to whole points: 12/17/22/28/33/38/43/49/54/59. Character attack is excluded from the cost basis. Immobilization duration by level: 1/1/1.5/1.5/1.5/2/2/2.5/2.5/3 seconds. Cooldown decreases evenly from 38 to 28.5 seconds over ten levels. Cast time remains 0.2 seconds. No additional periodic damage.';
 }else{
  assert.equal(before.maxSkillLv,3);skill.maxSkillLv=1;
  const old=resolveSkillAtLevel(before,3);
  for(const key of ['int','wis','vita']){skill[key]=old[key]/2;skill.statScaling[key]={type:'linear',base:skill[key],perLevel:0};}
  skill.description_de='Permanente Passive mit einer einzigen Skillstufe. Gewährt +7 Intelligenz, +2,5 Willenskraft und +2,5 Vitalität. Das entspricht jeweils der Hälfte der bisherigen Maximalboni von Skillstufe 3. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent passive with one learnable level. Grants +7 Intelligence, +2.5 Wisdom and +2.5 Vitality, exactly half the former level-three maximum bonuses. No activation costs, cast time or cooldown.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {skill}of changes){
 await new SkillDataModel(skill).validate();
 for(let level=1;level<=skill.maxSkillLv;level++){
  const r=resolveSkillAtLevel(skill,level,{classKey:'herbalist'});
  if(skill.nr===16){assert.equal(r.matk,47+21*(level-1));assert.equal(r.mana,Math.round(r.matk*.25));assert.equal(r.castTimeSeconds,.2);assert(r.dur>=1&&r.dur<=3);}
  else{assert.equal(r.int,7);assert.equal(r.wis,2.5);assert.equal(r.vita,2.5);}
 }
 if(skill.nr===16){assert.equal(resolveSkillAtLevel(skill,10).dur,3);assert.equal(resolveSkillAtLevel(skill,10).cd,28.5);assert.equal(skill.levelProgression.rules.find(r=>r.path.join('.')==='resourceCosts.0.scaling').rule.kind,'outputCost');}
}
if(!process.argv.includes('--apply'))console.log('Preview validated: Water Chains ten levels, base damage 47 +21 per level, 25% Mana; Force of Nature one level with half former maximum bonuses.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[16,81]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-herbalist-water-ten-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(live,{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/herbalist-water-ten-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:-12,changes:[{nr:16,from:20,to:10,magicalBase:47,damagePerAdditionalLevel:21,magicalBaseAtMax:236,manaFactor:.25,characterAttackInManaBasis:false,durationEndpoints:[1,3],cooldownEndpoints:[38,28.5]},{nr:81,from:3,to:1,int:7,wis:2.5,vita:2.5}],unchangedSkillNumbers:[46]},null,2)+'\n');
 console.log('Verified Herbalist database updates; Eternal Ice unchanged.');
}catch(error){console.error('Herbalist update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
