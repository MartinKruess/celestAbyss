import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import assert from 'node:assert/strict';
import { SkillDataModel } from '../models/skillSchema.js';
import { CharDataModel } from '../models/characterSchema.js';

// Rename the class label and class-specific map keys, preserving IDs and values.
function rename(value) {
  if (value === 'Knife') return 'Knight';
  if (Array.isArray(value)) return value.map(rename);
  if (!value || Object.getPrototypeOf(value) !== Object.prototype) return value;
  const result = {};
  for (const [key, child] of Object.entries(value)) {
    const target = key === 'Knife' ? 'Knight' : key;
    if (Object.hasOwn(result, target)) throw new Error('Class key collision');
    result[target] = rename(child);
  }
  return result;
}
const json = value => JSON.stringify(value);
let phase = 'connect';
try {
  assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI,
    { dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const all = await SkillDataModel.collection.find({}).toArray();
  phase = 'backup';
  const skills = all.filter(s => json(s) !== json(rename(s)));
  const characters = await CharDataModel.collection.find({ class: 'Knife' }).toArray();
  assert.ok(characters.every(c => c.activePlay?.closed !== false
    || new Date(c.activePlay.expiresAt).getTime() <= Date.now()), 'Active character must leave before migration');
  const backup = `tmp/before-knight-name-${Date.now()}.json`;
  await fs.mkdir('tmp', { recursive: true });
  await fs.writeFile(backup, JSON.stringify({ skills, characters }, null, 2) + '\n');
  const session = await mongoose.startSession();
  phase = 'database transaction';
  try {
    await session.withTransaction(async () => {
      for (const before of skills) {
        const current = await SkillDataModel.collection.findOne({ _id: before._id }, { session });
        assert.equal(json(current), json(before), 'Skill changed during migration');
        const after = rename(before);
        const result = await SkillDataModel.collection.replaceOne({ _id: before._id }, after, { session });
        assert.equal(result.matchedCount, 1);
        assert.equal(json(await SkillDataModel.collection.findOne({ _id: before._id }, { session })), json(after));
      }
      for (const before of characters) {
        const current = await CharDataModel.collection.findOne({ _id: before._id }, { session });
        assert.equal(json(current), json(before), 'Character changed during migration');
        await CharDataModel.collection.updateOne({ _id: before._id }, { $set: { class: 'Knight' } }, { session });
        const after = await CharDataModel.collection.findOne({ _id: before._id }, { session });
        assert.equal(json(after), json({ ...before, class: 'Knight' }));
      }
    });
  } finally { await session.endSession(); }
  // The checked-in catalog and current review snapshots use the same spelling.
  phase = 'local snapshots';
  for (const path of ['data/skills.json', 'data/reports/class-skill-counts.json', 'data/balancing/knight-skill-review.json']) {
    const before = JSON.parse(await fs.readFile(path, 'utf8'));
    const after = rename(before);
    if (json(before) !== json(after)) await fs.writeFile(path, JSON.stringify(after, null, 2) + '\n');
  }
  const knight = await SkillDataModel.collection.find({ charClass: { $in: ['Knight', 'Templar', 'Ritter', 'Tempelritter'] } }).toArray();
  phase = 'readback';
  assert.equal(knight.length, 33);
  assert.equal(await SkillDataModel.collection.countDocuments({ charClass: 'Knife' }), 0);
  console.log(JSON.stringify({ renamedSkills: skills.length, renamedCharacters: characters.length, knightSkills: knight.length, backup }));
} catch (error) {
  console.error(`Knight class migration failed in ${phase} (${error.name}, code ${error.code || 'none'}); credentials omitted.`);
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
