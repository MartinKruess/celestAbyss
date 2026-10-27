import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {starterSkillPointCostUpdates} from '../services/skillPointCosts.js';

let stage='validation';
try {
  assert.ok(['--check','--apply'].includes(process.argv[2]));
  const read=async path=>JSON.parse(await fs.readFile(path,'utf8'));
  const catalog=await read('data/skills.json');
  const rules=await read('data/balancing/skill-point-cost-rules.json');
  const plan=await read('data/balancing/skill-learning-plan.json');
  const changes=starterSkillPointCostUpdates(catalog,rules,plan);
  for(const s of changes)await new SkillDataModel(s).validate();
  if(process.argv[2]==='--check')console.log(JSON.stringify({validatedSkills:changes.length,scope:'First skill stage only; later costs pending'}));
  else {
    assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
    stage='connection';
    await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
    const col=SkillDataModel.collection;
    const normalize=s=>{const r=JSON.parse(JSON.stringify(s));delete r.__v;return r;};
    const before=(await col.find({}).sort({nr:1,_id:1}).toArray()).map(normalize);
    assert.deepEqual(before,catalog,'Catalog mismatch; refusing unrelated overwrite');
    const backup=`data/balancing/history/before-starter-skill-point-costs-${Date.now()}`;
    await fs.mkdir(backup,{recursive:true});
    await fs.writeFile(`${backup}/catalog.json`,JSON.stringify(catalog,null,2)+'\n');
    await fs.writeFile(`${backup}/rules.json`,JSON.stringify(rules,null,2)+'\n');
    const session=await mongoose.startSession();
    try {await session.withTransaction(async()=>{
      stage='cost update';
      for(const s of changes){const original=await col.findOne({nr:s.nr},{session});assert.ok(original);const result=await col.updateOne({_id:original._id},{$set:{skillPointCosts:s.skillPointCosts}},{session});assert.equal(result.matchedCount,1);}
      stage='full catalog verification';
      const actual=(await col.find({},{session}).sort({nr:1,_id:1}).toArray()).map(normalize);
      assert.deepEqual(actual,catalog.map(s=>changes.find(c=>c.nr===s.nr)??s));
    });}finally{await session.endSession();}
    const decision={status:'appliedAndVerified',database:mongoose.connection.name,appliedAt:new Date().toISOString(),backup,skillNumbers:changes.map(s=>s.nr),scope:'First learned rank only; no later-rank prices or XP/SP awards changed',rules};
    await fs.writeFile('data/balancing/starter-skill-point-costs-decision.json',JSON.stringify(decision,null,2)+'\n');
    console.log(JSON.stringify({status:decision.status,skills:changes.length,backup}));
  }
}catch(error){console.error(`Starter SP-cost update failed at ${stage} (${error.name}); credentials suppressed.`);process.exitCode=1;}
finally{await mongoose.disconnect();}
