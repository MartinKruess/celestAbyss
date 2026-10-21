import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try {
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:28});assert(b);const s=structuredClone(b);delete s._id;delete s.levelProgression;delete s.wis;delete s.statScaling.wis;
 s.mdef=1;s.statScaling.mdef={type:'linear',base:1,perLevel:1};
 s.description_de='Permanenter passiver Skill mit 10 Stufen. Je gelerntem Skilllevel +1 Vitalität, +1 magische Verteidigung und +1 Blockpunkt. Auf Stufe 10 insgesamt +10 Vitalität, +10 magische Verteidigung und +10 Blockpunkte. Gewährt keine Willenskraft mehr. Block ist ein Punktewert, keine Prozentangabe. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.';
 s.description_eng='Permanent passive with 10 levels. Each learned level grants 1 Vitality, 1 magical defense and 1 Block rating, reaching 10 of each at level 10. No longer grants Wisdom. Block is a rating, not a percentage. No activation cost, cast time, cooldown or limited duration.';
 s.levelProgression=buildSkillProgression(s);await new SkillDataModel(s).validate();for(let l=1;l<=10;l++){const r=resolveSkillAtLevel(s,l);assert.equal(r.wis,undefined);assert.equal(r.mdef,l);assert.equal(r.vita,l);assert.equal(r.block,l);}
 const backup='data/balancing/history/before-iron-shield-wisdom-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s,$unset:{wis:''}});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/iron-shield-wisdom-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:28,removedWisdom:5,addedMagicalDefense:10},null,2)+'\n');console.log('Verified Iron Shield: Wisdom removed, +1 M-Defense per level to +10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
