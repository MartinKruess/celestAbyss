import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===74),skill=structuredClone(before);
skill.wis=-1;skill.statScaling.wis={type:'linear',base:-1,perLevel:-1};
skill.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.wis').rule={kind:'linear',base:-1,perLevel:-1};
skill.description_de=skill.description_de.replace('um 1,5','um 1').replace('−15 Willenskraft','−10 Willenskraft');
skill.description_eng=skill.description_eng.replace('by 1.5','by 1').replace('−15 Wisdom','−10 Wisdom');
await new SkillDataModel(skill).validate();
for(let level=1;level<=10;level++){
 const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);assert.equal(r.wis,-level);
 for(const[k,v]of Object.entries(old))if(typeof v==='number'&&k!=='wis')assert.equal(r[k],v,k+' '+level);
}
const other=structuredClone(skill);other.wis=before.wis;other.statScaling.wis=before.statScaling.wis;other.levelProgression=before.levelProgression;other.description_de=before.description_de;other.description_eng=before.description_eng;assert.deepEqual(other,before);
if(!process.argv.includes('--apply'))console.log('Validated Luminet wisdom penalty -1 per rank, -10 maximum; all other values unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:74}),normal=JSON.parse(JSON.stringify(stored));delete normal.__v;assert.deepEqual(normal,before);
 const backup='data/balancing/history/before-luminet-wisdom-ten-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify([stored],null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;assert.equal((await col.updateOne(stored,{$set:fields})).matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/luminet-wisdom-ten-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,before,after:skill},null,2)+'\n');
 console.log('Luminet wisdom penalty saved and verified.');
}catch(error){console.error('Luminet update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
