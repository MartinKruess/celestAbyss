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
 const col=SkillDataModel.collection,iron=await col.findOne({nr:141}),hit=await col.findOne({nr:77}),breaker=await col.findOne({nr:55});
 assert.equal(iron.attributeConversionBonus.amountPerPoint,.01);assert.equal(iron.attributeConversionBonus.amountPerPointScaling,undefined);assert.equal(hit.castTimeSeconds,.6);
 assert.equal(breaker.effects.find(e=>e.stat==='mdef').durationScaling.base+9*breaker.effects.find(e=>e.stat==='mdef').durationScaling.perLevel,30);
 const prepared=[];
 const definitions=[{before:iron,set:{attributeConversionBonus:{...norm(iron.attributeConversionBonus),amountPerPointScaling:{type:'linear',base:.01,perLevel:.01}},
 description_de:'Permanenter passiver Skill mit 10 Stufen. Gewährt je gelernter Stufe zusätzlich 1 Prozent der aktuellen gesamten Vitalität als Stärke: 1 Prozent auf Stufe 1, 5 Prozent auf Stufe 5 und 10 Prozent auf Stufe 10. Ausrüstung, permanente Passive und aktive Vitalitätsboni werden berücksichtigt; spätere Änderungen aktualisieren den Stärke-Bonus. Vitalität wird weder verbraucht noch abgezogen. Intern wird ohne Rundung gerechnet; die Anzeige rundet auf ganze Punkte. Vita und Willenskraft: jeweils +2 auf Stufe 1 und 2, danach jeweils +2 je weiterer Stufe bis +16 auf Stufe 9; Stufe 10 bleibt bei +16. Schildblock: +2 Punkte je Stufe bis +20. Block ist ein Punktewert, keine Prozentangabe. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.',
 description_eng:'Permanent passive with 10 levels. Each learned level grants additional Strength equal to 1 percent of current total Vitality: 1 percent at level 1, 5 percent at level 5 and 10 percent at level 10. Equipment, permanent passives and active Vitality bonuses are included; later changes update the Strength bonus. Vitality is neither consumed nor reduced. Internal calculations retain full precision; the display rounds to whole points. Vitality and Wisdom each grant +2 at levels 1 and 2, then increase by +2 per additional level to +16 at level 9; level 10 remains at +16. Shield Block grants +2 rating points per level to +20, not a percentage. No activation cost, cast time, cooldown or limited duration.'}},
 {before:hit,set:{castTimeSeconds:.2,description_de:hit.description_de.replace('0,6 Sekunden Aufladen','0,2 Sekunden Aufladen'),description_eng:hit.description_eng.replaceAll('0.6','0.2')}}];
 for(const p of definitions){p.set.levelProgression=buildSkillProgression({...norm(p.before),...p.set});const skill={...norm(p.before),...p.set};await new SkillDataModel(skill).validate();if(skill.nr===141)for(let level=1;level<=10;level++)assert.ok(Math.abs(resolveSkillAtLevel(skill,level).attributeConversionBonus.amountPerPoint-level*.01)<1e-10);prepared.push({before:norm(p.before),skill,set:p.set,id:p.before._id});}
 const backup='data/balancing/history/before-knight-iron-will-cast-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(prepared.map(p=>p.before),null,2)+'\n');
 for(const path of ['data/balancing/class-comparison-level60.json','data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(path,backup+'/'+path.split('/').at(-1));
 for(const p of prepared){await col.updateOne({_id:p.id},{$set:p.set});assert.deepEqual(norm(await col.findOne({_id:p.id})),p.skill);}
 await fs.writeFile('data/balancing/knight-iron-will-cast-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes:prepared.map(({before,skill})=>({before,skill})),mindbreakerMaximumDuration:30},null,2)+'\n');console.log('Iron Will level scaling and shared Mighty Strike cast time verified. Backup '+backup);
}catch(e){console.error('Knight update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}
