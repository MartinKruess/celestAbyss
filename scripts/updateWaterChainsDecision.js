import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const de='Du erschaffst eine Wasserfessel, die ein Ziel festhält. Die Fesseldauer beträgt auf Skilllevel 1 eine Sekunde.';
const en='Creates water chains that hold a target in place. The immobilization lasts one second at skill level 1.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Requires development DB');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const s=await SkillDataModel.findOne({nr:16,skillName_de:'Wasserfesseln'}).lean();
if(!s||![1,2].includes(s.dur)||s.cd!==35||s.maxSkillLv!==20)throw new Error('Unexpected skill');
const result=await SkillDataModel.updateOne({_id:s._id,dur:s.dur,cd:35,maxSkillLv:20},{$set:{dur:1,description_de:de,description_eng:en}},{runValidators:true});if(result.matchedCount!==1)throw new Error('Concurrent change');
const saved=await SkillDataModel.findById(s._id).lean();if(saved.dur!==1||saved.cd!==35||saved.maxSkillLv!==20||saved.description_de!==de||saved.description_eng!==en)throw new Error('Read-back mismatch');
const sourceURL=new URL('./skilldata.js',import.meta.url);let source=await fs.readFile(sourceURL,'utf8');const start=source.indexOf('  S_Name_de: "Wasserfesseln",');const end=source.indexOf('  S_Name_de:',start+30);if(start<0||end<0)throw new Error('Missing source');let block=source.slice(start,end).replace(/S_Duration: [\d.]+/,'S_Duration: 1').replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en)).replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de));await fs.writeFile(sourceURL,source.slice(0,start)+block+source.slice(end));
const reviewURL=new URL('../data/skill-description-review.json',import.meta.url);const review=JSON.parse(await fs.readFile(reviewURL,'utf8'));const issue=review.majorIssues.find(x=>x.nr===16);issue.status='partiallyResolved';issue.decision={durationAtLevel1:1,cooldownAtLevel1:35,maxSkillLv:20,scaling:'pending',proposal:{durationPerAdditionalLevel:0.1,cooldownPerAdditionalLevel:-0.5,durationAtLevel20:2.9,cooldownAtLevel20:25.5},pvpReview:'Review crowd control durations and chained effects before balancing approval'};issue.issue='Startdauer 1 Sekunde bestätigt. Dauer soll mit Level steigen, Cooldown sinken; genaue Schritte noch nicht bestätigt. 19 Steigerungen zwischen Level 1 und 20.';await fs.writeFile(reviewURL,JSON.stringify(review,null,2)+'\n');
const auditURL=new URL('../data/skill-review.json',import.meta.url);const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Water Chains: level 1 duration 1s, cooldown 35s, max level 20. Progression proposal recorded, not applied.');
}catch(e){console.error('Water Chains update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
