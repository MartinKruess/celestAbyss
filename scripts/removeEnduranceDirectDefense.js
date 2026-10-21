import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===139),skill=structuredClone(before);
for(const key of ['pdef','mdef']){delete skill[key];delete skill.statScaling[key];delete skill.statBonusUnits?.[key];delete skill.statBonusTargets?.[key];}
skill.description_de='Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown.';
skill.description_eng='Permanent Endurance Training with 20 levels for all classes. Each learned level grants +1 Vitality and +1 Wisdom, reaching +20 each at level 20. No direct physical or magical defense bonuses; normal attribute conversions still apply. No activation costs, cast time or cooldown.';
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
assert.equal(skill.maxSkillLv,20);assert.deepEqual(skill.charClass,before.charClass);
for(let level=1;level<=20;level++){const r=resolveSkillAtLevel(skill,level);assert.equal(r.vita,level);assert.equal(r.wis,level);assert.equal(r.pdef,undefined);assert.equal(r.mdef,undefined);}
if(!process.argv.includes('--apply'))console.log('Preview verified: Endurance Training retains attributes at all twenty levels, no direct defense.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:139});
 const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-endurance-defense-removal-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify([stored],null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;
 const result=await col.updateOne(stored,{$set:fields,$unset:{pdef:'',mdef:''}});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/endurance-defense-removal-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,skillNumber:139,removedMaximumBonuses:{pdef:80,mdef:80},retainedMaximumBonuses:{vita:20,wis:20},pointDelta:0},null,2)+'\n');
 console.log('Verified Endurance Training database update.');
}catch(error){console.error('Endurance update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
