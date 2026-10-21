import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const records=await SkillDataModel.collection.find({$or:[{nr:135},{skillName_de:/^Kontrolle$/i},{skillName_eng:/^Control$/i}]}).toArray();if(records.length!==1||records[0].nr!==135)throw Error('Unexpected duplicate');
 const control=JSON.parse(JSON.stringify(records[0]));delete control.__v;
 const counts=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
 const files=(await fs.readdir('data/balancing')).filter(f=>f.endsWith('-skill-review.json'));let matches=0;
 for(const f of files){const r=JSON.parse(await fs.readFile('data/balancing/'+f,'utf8'));const s=r.skills?.find(s=>s.nr===135);if(s){if(!isDeepStrictEqual(s,control))throw Error('Review mismatch');matches++;}}
 console.log(JSON.stringify({databaseDefinitions:records.length,skillNumber:135,classAssignments:counts.filter(c=>c.skillNumbers.includes(135)).length,identicalClassReviews:matches,description:control.description_de,hasEffects:!!control.effects?.length,hasStatScaling:!!Object.keys(control.statScaling??{}).length,learningLimits:control.learningLimits}));
}catch(e){console.error(`Shared Control check failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
