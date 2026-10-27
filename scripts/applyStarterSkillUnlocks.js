import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {skillUnlockUpdates} from '../services/skillUnlockPlan.js';

let stage = 'local validation';
try {
  assert.ok(['--check', '--apply'].includes(process.argv[2]));
  const catalog = JSON.parse(await fs.readFile('data/skills.json', 'utf8'));
  const plan = JSON.parse(await fs.readFile('data/balancing/skill-learning-plan.json', 'utf8'));
  const movementWindowsNotApplied = Object.values(plan.movementWindows).some(m => m.levelRange[0] !== m.levelRange[1] || m.skillNumbers.some(nr => plan.sharedFirstUnlocks[nr] !== m.levelRange[0]));
  const changes = skillUnlockUpdates(catalog, plan);
  for (const change of changes) await new SkillDataModel(change).validate();
  const numbers = changes.map(s => s.nr);
  if (process.argv[2] === '--check') console.log(JSON.stringify({status:'validated', changedSkills:changes.length, firstAttacks:Object.values(plan.classFirstAttacks).filter(Boolean).length, movementWindowsNotApplied}));
  else {
    assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
    stage = 'database preflight';
    await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName:process.env.MONGODB_DB_NAME, autoIndex:false, serverSelectionTimeoutMS:10000});
    const col = SkillDataModel.collection;
    const before = await col.find({}).sort({nr:1,_id:1}).toArray();
    const normalize = s => {const copy=JSON.parse(JSON.stringify(s));delete copy.__v;return copy;};
    assert.deepEqual(before.map(normalize), catalog, 'Local catalog differs from database; do not overwrite unrelated work');
    const backup = `data/balancing/history/before-starter-skill-unlocks-${Date.now()}`;
    await fs.mkdir(backup, {recursive:true});
    await fs.writeFile(`${backup}/catalog.json`, JSON.stringify(catalog,null,2)+'\n');
    await fs.writeFile(`${backup}/plan.json`, JSON.stringify(plan,null,2)+'\n');
    const session = await mongoose.startSession();
    try {
      await session.withTransaction(async()=>{
        stage = 'skill update';
        for (const change of changes) {
          const original = before.find(s=>s.nr===change.nr);
          const fields = {learningRequirements:change.learningRequirements};
          for (const key of ['description_de','description_eng']) if (change[key]!==original[key]) fields[key]=change[key];
          const result = await col.updateOne({_id:original._id}, {$set:fields}, {session});
          assert.equal(result.matchedCount,1);
        }
        stage = 'full catalog verification';
        const actual = await col.find({}, {session}).sort({nr:1,_id:1}).toArray();
        const expected = catalog.map(s=>changes.find(c=>c.nr===s.nr)??s);
        assert.deepEqual(actual.map(normalize), expected);
      });
    } finally {await session.endSession();}
    const manifest = {status:'appliedAndVerified',database:mongoose.connection.name,appliedAt:new Date().toISOString(),backup,skillNumbers:numbers,sharedFirstUnlocks:plan.sharedFirstUnlocks,classFirstAttacks:plan.classFirstAttacks,movementWindowsNotApplied,unchangedSkillsVerified:catalog.length-changes.length,planHash:createHash('sha256').update(JSON.stringify(plan)).digest('hex')};
    await fs.writeFile('data/balancing/starter-skill-unlocks-decision.json',JSON.stringify(manifest,null,2)+'\n');
    console.log(JSON.stringify(manifest));
  }
} catch(error) {console.error(`Starter unlock update failed at ${stage} (${error.name}); credentials suppressed.`);process.exitCode=1;}
finally {await mongoose.disconnect();}
