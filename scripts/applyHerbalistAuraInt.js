import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:165});assert(before);const s=structuredClone(before);delete s._id;delete s.levelProgression;
 s.int=1.2;s.statScaling={...s.statScaling,int:{type:'linear',base:1.2,perLevel:1.2}};s.statBonusTargets={...s.statBonusTargets,int:'self'};s.statBonusUnits={...s.statBonusUnits,int:'flat'};
 s.description_de+=' Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10.';s.description_eng+=' Also grants 1.2 Intelligence per skill level, up to 12 Intelligence at level 10.';s.levelProgression=buildSkillProgression(s);
 await new SkillDataModel(s).validate();assert(Math.abs(resolveSkillAtLevel(s,10).int-12)<1e-10);assert.deepEqual(s.effects,before.effects);assert.deepEqual(s.resourceCosts,before.resourceCosts);
 const backup='data/balancing/history/before-aura-suppression-int-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');await col.updateOne({_id:before._id},{$set:s});const actual=await col.findOne({_id:before._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/herbalist-aura-int-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:165,rule:'1.2 Intelligence per skill level; 12 at level 10. Existing threat reduction, costs and timing unchanged. Natural Protection Wisdom unchanged.'},null,2)+'\n');console.log('Verified Aura Suppression: +12 INT at level 10; existing effects unchanged.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(e.name==='AssertionError'||e.name==='ValidationError')console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

