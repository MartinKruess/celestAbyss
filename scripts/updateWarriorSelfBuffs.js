import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const numbers=[12,172,174,34,161,160];
try {
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:numbers}}).toArray();assert.equal(before.length,6);
 const changes=before.map(b=>{
  const s=structuredClone(b);delete s._id;delete s.levelProgression;
  if(s.nr===12){s.statScaling.str={type:'linear',base:20,perLevel:1.25};s.description_de=s.description_de.replace('Stärke 20 +2 je weiterer Stufe bis 28','Stärke 20 +1,25 je weiterer Stufe bis 25');s.description_eng='For 15 seconds, grants 20 Strength at level 1, +1.25 per additional level to 25 at level 5; maximum Health 80 +40 per level to 240; physical attack 100 +25 per level to 200. Cooldown 130 seconds, -2 per additional level to 122.';}
  if(s.nr===172){s.statScaling.str={type:'linear',base:4,perLevel:6/9};s.description_de=s.description_de.replace('bis 12 auf Stufe 10','bis 10 auf Stufe 10');s.description_eng='Self-buff lasting 600 seconds. Strength increases evenly from 4 at level 1 to 10 at level 10. Cooldown 60 seconds.';}
  if(s.nr===174){s.statScaling.str={type:'linear',base:3,perLevel:4/9};s.description_de=s.description_de.replace('3 bis 7,5 Stärke','3 bis 7 Stärke').replace('Mana 73, je weiterer Stufe +41 bis 442. ','');s.description_eng='Self-buff lasting 60 seconds. Grants 5 to 10 Attack Speed rating points and 3 to 7 Strength over 10 levels. Cooldown 300 seconds.';}
  if(s.nr===34){s.durationScaling.values[9]=20;for(const e of s.effects)e.durationScaling.values[9]=20;s.description_de=s.description_de.replace('maximal 18 Sekunden','maximal 20 Sekunden').replace('Die Aktivierung kostet keine zusätzliche Ressource. ','');s.description_eng='Creates a shield absorbing damage equal to 10% of maximum Health, 12% from level 5 and 15% at level 10. While the shield persists and sufficient Mana remains, basic attacks deal 10% more damage and consume 1% maximum Mana per regeneration tick. Shield break ends associated effects. Lasts 15 seconds, 20 seconds at level 10. Cooldown decreases from 120 to 90 seconds.';}
  if(s.nr===161){s.patk=85;s.statScaling.patk={type:'linear',base:85,perLevel:0};s.durationScaling.values[9]=60;for(const e of s.effects)e.durationScaling=structuredClone(s.durationScaling);s.description_de=s.description_de.replace('um 50 erhöht','um 85 erhöht').replace('auf 59 Sekunden','auf 60 Sekunden');s.description_eng='Self-buff granting 85 physical attack at every level. While active, only your basic attacks generate Rage: 0.5 Rage per attack at level 1, rising to 1 at level 10 on a 100-point bar. Skills and companions do not generate Rage through this effect. Duration rises from 45 to 60 seconds; cooldown decreases from 67 to 58 seconds.';}
  if(s.nr===160){s.patk=35;s.mdef=35;s.statScaling.patk={type:'linear',base:35,perLevel:0};s.statScaling.mdef={type:'linear',base:35,perLevel:0};s.description_de=s.description_de.replace('Dauer 300 Sekunden','Zusätzlich auf allen Stufen +35 P-Angriff und +35 M-Verteidigung. Dauer 300 Sekunden');s.description_eng='Self-buff granting +1 Strength and +1 Vitality per level, reaching +10 each at level 10. Additionally grants 35 physical attack and 35 magical defense at every level. Duration 300 seconds, cooldown 60 seconds.';}
  s.description_eng+=' Fixed cast time 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, before discounts.';
  s.levelProgression=buildSkillProgression(s);return {before:b,skill:s};
 });
 const expected={12:{str:25},172:{str:10},174:{str:7},34:{dur:20},161:{patk:85,dur:60},160:{str:10,vita:10,patk:35,mdef:35}};
 for(const {before:b,skill:s}of changes){await new SkillDataModel(s).validate();assert.deepEqual(s.charClass,b.charClass);assert.deepEqual(s.resourceCosts,b.resourceCosts);const r=resolveSkillAtLevel(s,s.maxSkillLv);for(const[k,v]of Object.entries(expected[s.nr]))assert(Math.abs(r[k]-v)<1e-9);if([34,161].includes(s.nr))for(const e of r.effects)assert.equal(e.durationSeconds,r.dur);}
 const backup='data/balancing/history/before-warrior-self-buffs-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before:b,skill:s}of changes){await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);}
 await fs.writeFile('data/balancing/warrior-self-buffs-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,expected,changes},null,2)+'\n');console.log('Verified six warrior self-buff changes; resource costs and owners unchanged.');
}catch(e){console.error('Buff update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

