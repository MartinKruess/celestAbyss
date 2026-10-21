import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===197),skill=structuredClone(before);
skill.manaRegen=2;skill.statScaling.manaRegen={type:'linear',base:2,perLevel:2};
skill.description_de=skill.description_de.replace('+18 direkte MP-Regeneration','+2 direkte MP-Regeneration').replace('+180 MP-Regeneration','+20 MP-Regeneration');
skill.description_eng=skill.description_eng.replace('+18 direct Mana regeneration','+2 direct Mana regeneration').replace('+180 Mana regeneration','+20 Mana regeneration');
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=10;level++){
 const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);assert.equal(r.manaRegen,2*level);
 for(const[k,v]of Object.entries(old))if(typeof v==='number'&&k!=='manaRegen')assert.equal(r[k],v,k+' '+level);
}
if(!process.argv.includes('--apply'))console.log('Verified preview: Aurora Mana regeneration +2 per level, +20 maximum; other values unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:197});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-aurora-mana-twenty-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify([stored],null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/aurora-mana-twenty-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,skillNumber:197,manaRegenerationPerLevel:2,maximumDirectManaRegenerationPerTick:20,unchangedAttributes:{str:20,vita:20,int:20,wis:20}},null,2)+'\n');
 console.log('Verified Aurora database update: maximum +20 direct MP regeneration per tick.');
}catch(error){console.error('Aurora update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
