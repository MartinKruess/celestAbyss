import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {fullSkillPointCostUpdates} from '../services/fullSkillPointCosts.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
try{
  assert(['--check','--apply'].includes(process.argv[2]));
  const catalog=await read('data/skills.json'),rules=await read('data/balancing/skill-point-cost-rules.json'),plan=await read('data/balancing/skill-learning-plan.json');
  const memberships={};
  for(const file of (await fs.readdir('data/balancing')).filter(f=>f.endsWith('-skill-review.json'))){const r=await read(`data/balancing/${file}`);if(r.skills)memberships[r.classKey]=r.skillNumbers??r.skills.map(s=>s.nr);}
  const changes=fullSkillPointCostUpdates(catalog,rules,plan,memberships);
  for(const s of changes)await new SkillDataModel(s).validate();
  if(process.argv[2]==='--apply'){
    assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
    await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
    const col=SkillDataModel.collection;
    const normalize=s=>{const c=JSON.parse(JSON.stringify(s));delete c.__v;return c;};
    const before=await col.find({}).sort({nr:1,_id:1}).toArray();
    assert.deepEqual(before.map(normalize),catalog,'Catalog changed; abort rather than overwrite');
    const backup=`data/balancing/history/before-full-skill-point-costs-${Date.now()}`;
    await fs.mkdir(backup,{recursive:true});await fs.writeFile(`${backup}/catalog.json`,JSON.stringify(catalog,null,2)+'\n');
    const session=await mongoose.startSession();
    try{await session.withTransaction(async()=>{
      for(const s of changes){const result=await col.updateOne({nr:s.nr},{$set:{skillPointCosts:s.skillPointCosts}},{session});assert.equal(result.matchedCount,1);}
      assert.deepEqual((await col.find({},{session}).sort({nr:1,_id:1}).toArray()).map(normalize),changes);
    });}finally{await session.endSession();}
    await fs.writeFile('data/balancing/full-skill-point-costs-decision.json',JSON.stringify({status:'appliedAndVerified',database:'celestabyss_dev',appliedAt:new Date().toISOString(),backup,skillNumbers:changes.map(s=>s.nr),scope:'All skill rank costs; combat, learning levels, character balances and XP unchanged.',tamingException:'Existing first cost plus one per additional learned rank.',unknownUnlocks:'300 SP regular budget until an unlock at 55 or higher is selected.'},null,2)+'\n');
  }
  console.log(`Validated ${changes.length} complete skill cost schedules${process.argv[2]==='--apply'?' and verified all database fields after saving':''}.`);
}catch(error){console.error(`Full SP import failed (${error.name}); credentials suppressed.`);process.exitCode=1;}finally{await mongoose.disconnect();}
