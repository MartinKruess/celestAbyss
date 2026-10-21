import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
  const col=SkillDataModel.collection,before=await col.findOne({nr:160});
  assert.equal(before.skillName_de,'Stolz des Kriegers');
  const aliases=['Knife','Templar','Ritter','Tempelritter'];
  const charClass=[...new Set([...before.charClass,...aliases])];
  await new SkillDataModel({...before,charClass}).validate();
  const backup='data/balancing/history/before-knight-warrior-pride-'+Date.now();
  await fs.mkdir(backup,{recursive:true});
  await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
  await col.updateOne({_id:before._id},{$set:{charClass}});
  assert.deepEqual(await col.findOne({_id:before._id}),{...before,charClass});
  const skills=(await col.find({}).toArray()).filter(s=>s.isClassCore&&s.allowedRaces?.length?s.allowedRaces.includes('Aurora'):s.charClass?.some(c=>aliases.includes(c)));
  assert.equal(skills.length,32);
  assert.equal(skills.filter(s=>s.type==='passive').length,15);
  await fs.writeFile('data/balancing/knight-warrior-pride-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:160,charClass,total:32,active:17,passive:15},null,2)+'\n');
  console.log('Verified Knight Warrior Pride assignment: 32 skills, 17 active and 15 passive.');
} catch(e) {console.error('Assignment failed ('+e.name+'); credentials omitted.');process.exitCode=1;}
finally {await mongoose.disconnect();}
