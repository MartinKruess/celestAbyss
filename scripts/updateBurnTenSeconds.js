import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:202});assert.ok(before);assert.equal(before.skillName_de,'Verbrennen');
 const effects=norm(before.effects);effects.find(e=>e.key==='burn-dot').durationSeconds=10;
 const resourceCosts=norm(before.resourceCosts);resourceCosts.find(c=>c.resource==='mana').scaling={type:'linear',base:30,perLevel:15};
 const set={dur:10,mana:30,effects,resourceCosts,
 description_de:'Lässt einen Gegner für 10 Sekunden brennen. Verursacht insgesamt zehn Schadensticks, einen je Sekunde; erster Tick nach einer Sekunde, kein zusätzlicher Initialtreffer. Magischer Grundschaden je Tick: 12 auf Stufe 1, +6 je weiterer Stufe bis 96 auf Stufe 15. Gesamter Grundschaden: 120 bis 960. Nachwirkender Feuer-DoT ohne zusätzlichen Charakter-M-Angriff je Tick. Mana-Kosten entsprechen exakt gerundet 25 Prozent des gesamten Grundschadens ohne Charakterangriff: 30 auf Stufe 1, +15 je weiterer Stufe bis 240 auf Stufe 15, vor passiven Rabatten. Weisheit des Salamanders verstärkt den Feuerschaden und reduziert die Mana-Kosten. Castzeit 0,8 Sekunden, Cooldown 22 Sekunden. Zielanzahl und Trefferbereich werden später geprüft.',
 description_eng:'Burns an enemy for 10 seconds, dealing ten damage ticks, one per second. The first tick occurs after one second; there is no additional initial hit. Magical base damage per tick is 12 at level 1 plus 6 per additional level, reaching 96 at level 15. Total base damage ranges from 120 to 960. Residual fire damage over time does not add caster magical attack per tick. Mana is exactly 25 percent of total base damage, rounded and excluding character attack: 30 at level 1 plus 15 per additional level to 240 at level 15, before passive discounts. Wisdom of the Salamander boosts fire damage and reduces Mana costs. Cast time 0.8 seconds, cooldown 22 seconds. Target count and area remain subject to later review.'};
 set.levelProgression=buildSkillProgression({...norm(before),...set});
 const next={...norm(before),...set};await new SkillDataModel(next).validate();
 assert.equal(resolveSkillAtLevel(next,15).mana,240);assert.equal(resolveSkillAtLevel(next,1).mana,30);
 const dir='data/balancing/history/before-ten-second-burn-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(norm(await col.findOne({_id:before._id})),next);
 await fs.writeFile('data/balancing/burn-ten-second-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,before:norm(before),skill:next},null,2)+'\n');
 console.log('Verified Burn: ten ticks over ten seconds, base damage 120–960, exact 25% Mana 30–240, cooldown 22 seconds unchanged.');
}catch(e){console.error('Burn update failed ('+e.name+'); details omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
