import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

try {
  assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName:'celestabyss_dev', autoIndex:false, serverSelectionTimeoutMS:10000});
  const col = SkillDataModel.collection;
  const before = await col.findOne({nr:148});
  assert(before);
  assert(['Scharfer Instinkte','Scharfer Instinkt'].includes(before.skillName_de));
  const backup = `data/balancing/history/before-sharp-instinct-rename-${Date.now()}`;
  await fs.mkdir(backup, {recursive:true});
  await fs.writeFile(`${backup}/skill.json`, JSON.stringify(before,null,2)+'\n');
  await col.updateOne({_id:before._id}, {$set:{skillName_de:'Scharfer Instinkt'}});
  const after = await col.findOne({_id:before._id});
  assert.deepEqual(after, {...before, skillName_de:'Scharfer Instinkt'});
  await fs.writeFile('data/balancing/sharp-instinct-rename-decision.json', JSON.stringify({status:'appliedAndVerified', nr:148, previousName:before.skillName_de, name:'Scharfer Instinkt', backup, scope:'German display name only; mechanics and class assignments unchanged.'},null,2)+'\n');
  console.log('Verified German name correction for skill 148; all other fields unchanged.');
} catch (error) {
  console.error(`Rename failed (${error.name}); credentials suppressed.`);
  process.exitCode=1;
} finally {
  await mongoose.disconnect();
}
