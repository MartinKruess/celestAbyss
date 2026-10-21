import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[59,95].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===59){
  assert.equal(before.maxSkillLv,2);skill.maxSkillLv=1;
  for(const e of skill.effects){e.valueScaling={type:'linear',base:.3,perLevel:0};e.durationScaling={type:'linear',base:5,perLevel:0};}
  skill.resourceCosts[0].scaling={type:'linear',base:215,perLevel:0};
  skill.description_de='Aktiver Schutzskill mit einer einzigen lernbaren Stufe. Du rammst deinen Schild in den Boden und erschaffst vor dir ein schützendes Abbild des Schildes. Verbündete hinter dem Schild erleiden durch abgefangene Angriffe für 5 Sekunden 30 % weniger Schaden. Castzeit 0,5 Sekunden, Cooldown 77 Sekunden, Aktivierungskosten 215 Mana. Die frühere zweite Stufe entfällt; die Werte der bisherigen ersten Stufe bleiben erhalten.';
  skill.description_eng='Active protection skill with one learnable level. Plant your shield in the ground to create a protective image in front of you. Allies behind the shield take 30% less damage from intercepted attacks for 5 seconds. Cast time 0.5 seconds, cooldown 77 seconds, activation cost 215 Mana. The former second level is removed; former level-one values are retained.';
 }else{
  assert.equal(before.maxSkillLv,15);skill.maxSkillLv=20;
  skill.effects[0].durationScaling={type:'table',values:Array.from({length:20},(_,i)=>Math.min(3,1+i/7))};
  skill.description_de='Stürmt mit dem Schild auf den Gegner zu und verursacht einmalig physischen Schaden. Physischer Skill-Grundschaden 272 auf Stufe 1, +65 je weiterer Stufe, maximal 1507 auf Stufe 20. Macht das Ziel zunächst 1 Sekunde benommen; die Effektdauer steigt wie bisher gleichmäßig auf 3 Sekunden auf Stufe 15 und bleibt auf Stufe 16 bis 20 bei 3 Sekunden. Mana-Kosten 68 auf Stufe 1, +16 je weiterer Stufe, maximal 372 auf Stufe 20. Castzeit 0,1 Sekunden, Cooldown 37 Sekunden. Keine anhaltende Schadenswirkung. Ansturmdistanz und genaue Einschränkungen durch Benommenheit werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).';
  skill.description_eng='Charges toward the enemy with the shield and hits once for physical damage. Physical base damage 272 at level 1 plus 65 per additional level, reaching 1507 at level 20, plus current physical attack once. Dazes the target for 1 second initially, increasing evenly to 3 seconds at level 15 as before, then remaining at 3 seconds through level 20. Mana cost 68 plus 16 per additional level, reaching 372 at level 20. Cast time 0.1 seconds, cooldown 37 seconds. No ongoing damage. Charge distance and exact daze restrictions remain to be reviewed.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 if(nr===95){const r=skill.levelProgression.rules.find(r=>r.path.join('.')==='effects.0.durationScaling');r.rule={kind:'bounded',max:3,rule:{kind:'linear',base:1,perLevel:1/7}};r.source='confirmedThreeSecondCap';}
 return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 if(skill.nr===59){const old=resolveSkillAtLevel(before,1),now=resolveSkillAtLevel(skill,1);for(const k of ['mana','cd','dur','castTimeSeconds'])assert.equal(now[k],old[k]);assert.equal(now.effects[0].value,.3);assert.equal(now.effects[0].durationSeconds,5);assert.throws(()=>resolveSkillAtLevel(skill,2),/exceeds/);}
 else for(let level=1;level<=20;level++){const r=resolveSkillAtLevel(skill,level);assert.equal(r.patk,272+65*(level-1));assert.equal(r.mana,68+16*(level-1));assert(Math.abs(r.effects[0].durationSeconds-Math.min(3,1+(level-1)/7))<1e-12);if(level<=15){const old=resolveSkillAtLevel(before,level);for(const k of ['patk','mana','cd','castTimeSeconds'])assert.equal(r[k],old[k]);}}
}
if(!process.argv.includes('--apply'))console.log('Preview validated: Divine Protection one level, Shield Storm twenty levels with daze capped at three seconds.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[59,95]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-knight-protection-shieldstorm-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const r=await col.updateOne(live,{$set:fields});assert.equal(r.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/knight-protection-shieldstorm-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:4,changes:[{nr:59,from:2,to:1,retainedValues:'Former level one: 30% protection, five seconds, 215 Mana, 77-second cooldown, 0.5-second cast'},{nr:95,from:15,to:20,damageAtMax:1507,manaAtMax:372,dazeMaximumSeconds:3,previousLevelsUnchanged:true}]},null,2)+'\n');
 console.log('Verified Knight database updates: protection one level, Shield Storm twenty levels.');
}catch(error){console.error('Knight update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
