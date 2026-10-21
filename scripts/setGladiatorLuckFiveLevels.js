import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===52);assert.equal(before.maxSkillLv,10);
const skill=structuredClone(before),luck=[1,3,6,8,10];
skill.maxSkillLv=5;skill.luck=1;
skill.statScaling.luck={type:'table',values:luck};
skill.description_de='Permanente Passive mit fünf Stufen. Glück steigt ganzzahlig von 1 auf 10: je Stufe 1/3/6/8/10. Gewährt zusätzlich 5 kritische Trefferpunkte je Skillstufe, bis zu 25 auf Stufe 5. Kritische Trefferpunkte sind keine direkten Prozentwerte und garantieren keine kritischen Treffer. Enthält den bisherigen Bonus von Lucky Strike. Keine Aktivierungskosten.';
skill.description_eng='Permanent passive with five levels. Luck increases in integer steps from 1 to 10: 1/3/6/8/10 by level. Also grants 5 critical chance rating per skill level, reaching 25 at level 5. Rating points are not direct percentages and do not guarantee critical hits. Includes the former Lucky Strike bonus. No activation costs.';
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=5;level++){const r=resolveSkillAtLevel(skill,level);assert.equal(r.luck,luck[level-1]);assert.equal(r.critChanceRating,5*level);}
assert.throws(()=>resolveSkillAtLevel(skill,6),/exceeds/);
if(!process.argv.includes('--apply'))console.log('Preview verified: five levels, Luck 1/3/6/8/10, critical rating 5/10/15/20/25.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:52});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-gladiator-luck-five-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;
 const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/gladiator-luck-five-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:52,previousMaxLevel:10,maxSkillLevel:5,luckByLevel:luck,criticalRatingPerLevel:5,criticalRatingAtMax:25,pointDelta:-5},null,2)+'\n');
 console.log('Verified database: Gladiator luck passive reduced to five levels.');
}catch(error){console.error('Gladiator luck update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
