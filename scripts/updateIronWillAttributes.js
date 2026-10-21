import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:141});assert(b);const s=structuredClone(b);delete s._id;delete s.levelProgression;
 s.vita=2;s.wis=1;s.statScaling.vita={type:'linear',base:2,perLevel:2};s.statScaling.wis={type:'linear',base:1,perLevel:1};
 s.description_de='Permanenter passiver Skill mit 10 Stufen. Je Skillstufe +2 Vitalität, +1 Willenskraft und +2 Blockpunkte, bis zu +20 Vitalität, +10 Willenskraft und +20 Blockpunkten auf Stufe 10. Zusätzlich je gelernter Stufe 1 Prozent der aktuellen gesamten Vitalität als Stärke, maximal 10 Prozent. Ausrüstung, permanente Passive und aktive Vitalitätsboni zählen mit; Änderungen aktualisieren den Stärkebonus. Vitalität wird weder verbraucht noch abgezogen. Intern keine Rundung. Block ist ein Punktewert, keine Prozentchance. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.';
 s.description_eng='Permanent passive with 10 levels. Each level grants 2 Vitality, 1 Wisdom and 2 Block rating, reaching 20 Vitality, 10 Wisdom and 20 Block rating at level 10. Additionally grants Strength equal to 1% of current total Vitality per skill level, up to 10%. Includes equipment, permanent passives and active Vitality buffs; changes update the Strength bonus. Vitality is not consumed or reduced. Calculations retain full precision. No activation cost, cast time, cooldown or limited duration.';
 s.levelProgression=buildSkillProgression(s);await new SkillDataModel(s).validate();for(let l=1;l<=10;l++){const r=resolveSkillAtLevel(s,l);assert.equal(r.vita,2*l);assert.equal(r.wis,l);assert.equal(r.block,2*l);}
 assert.deepEqual(s.attributeConversionBonus,b.attributeConversionBonus);
 const backup='data/balancing/history/before-iron-will-attributes-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/iron-will-attributes-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:141,vitalityPerLevel:2,wisdomPerLevel:1},null,2)+'\n');console.log('Verified Iron Will: 20 VIT / 10 WIS at level 10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
