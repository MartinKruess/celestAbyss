import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try {
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
  const col=SkillDataModel.collection,b=await col.findOne({nr:171});assert(b);
  const s=structuredClone(b);delete s._id;delete s.levelProgression;s.block=10;
  s.description_de=s.description_de.replace('Der bisherige Blockbonus bleibt bei 3 festen Blockpunkten, nicht 3 Prozent.','Gewährt auf allen Stufen zusätzlich 10 feste Blockpunkte, keine 10 Prozent.');
  s.description_eng=s.description_eng.replace('Existing Block bonus remains 3 flat rating points, not 3 percent.','Grants an additional 10 flat Block rating at every level, not 10 percent.');
  s.levelProgression=buildSkillProgression(s);await new SkillDataModel(s).validate();
  for(let l=1;l<=10;l++){const r=resolveSkillAtLevel(s,l);assert.equal(r.block,10);assert.equal(r.pdef,6+3*(l-1));assert.equal(r.mdef,6+3*(l-1));}
  const backup='data/balancing/history/before-active-cover-block-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');
  await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
  await fs.writeFile('data/balancing/active-cover-block-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:171,block:10,scope:'Replace fixed 3 Block with fixed 10 Block; all other mechanics unchanged.'},null,2)+'\n');
  console.log('Verified Active Cover: fixed +10 Block at every skill level.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
