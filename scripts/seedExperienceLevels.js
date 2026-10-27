import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import mongoose from 'mongoose';
import {PlayerExperienceLevelModel, PetExperienceLevelModel} from '../models/experienceLevelSchema.js';
import {experienceRules, buildExperienceLevels} from '../services/experienceProgression.js';

let stage = 'validation';
try {
  const mode = process.argv[2];
  assert.ok(['--check', '--apply'].includes(mode), 'Choose --check or --apply');
  const player = JSON.parse(await fs.readFile('data/balancing/player-experience-levels.json', 'utf8'));
  const pet = JSON.parse(await fs.readFile('data/balancing/pet-experience-levels.json', 'utf8'));
  assert.deepEqual(player.rules, experienceRules);
  assert.deepEqual(player.levels, buildExperienceLevels());
  assert.deepEqual(pet.levels, player.levels);
  assert.deepEqual(pet.gainPolicy, experienceRules.petExperience);
  const groups = [{Model: PlayerExperienceLevelModel, rows: player.levels}, {Model: PetExperienceLevelModel, rows: pet.levels}];
  for (const {Model, rows} of groups) for (const row of rows) await new Model(row).validate();
  if (mode === '--check') console.log(JSON.stringify({status: 'locallyValidated', playerLevels: 200, petLevels: 200}));
  else {
    assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
    stage = 'connection';
    await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000});
    const db = mongoose.connection.db;
    const names = [...groups.map(g => g.Model.collection.name), 'experienceProgressionRules'];
    const existing = new Set((await db.listCollections({}, {nameOnly: true}).toArray()).map(c => c.name));
    const backup = `data/balancing/history/before-experience-level-import-${Date.now()}`;
    await fs.mkdir(backup, {recursive: true});
    const snapshots = {};
    for (const name of names) {
      snapshots[name] = existing.has(name) ? await db.collection(name).find({}).toArray() : [];
      await fs.writeFile(`${backup}/${name}.json`, mongoose.mongo.BSON.EJSON.stringify({collectionExisted: existing.has(name), records: snapshots[name]}, null, 2));
    }
    stage = 'indexes';
    for (const {Model} of groups) await Model.createIndexes();
    if (!existing.has('experienceProgressionRules')) await db.createCollection('experienceProgressionRules');
    const ruleRecord = {key: 'active', ...experienceRules};
    const session = await mongoose.startSession();
    try {
      await session.withTransaction(async () => {
        stage = 'level upserts and readback';
        for (const {Model, rows} of groups) {
          await Model.bulkWrite(rows.map(row => ({updateOne: {filter: {level: row.level}, update: {$set: row}, upsert: true}})), {session, ordered: true});
          const stored = await Model.collection.find({level: {$in: rows.map(r => r.level)}}, {session, projection: {_id: 0}}).sort({level: 1}).toArray();
          for (let i = 0; i < rows.length; i++) for (const [key, value] of Object.entries(rows[i])) assert.deepEqual(stored[i]?.[key], value);
          assert.equal(stored.length, 200);
          const unrelated = snapshots[Model.collection.name].filter(r => !rows.some(row => row.level === r.level));
          const after = await Model.collection.find({_id: {$in: unrelated.map(r => r._id)}}, {session}).toArray();
          for (const row of unrelated) assert.deepEqual(after.find(r => String(r._id) === String(row._id)), row);
        }
        stage = 'rule upsert and readback';
        await db.collection('experienceProgressionRules').updateOne({key: 'active'}, {$set: ruleRecord}, {upsert: true, session});
        const stored = await db.collection('experienceProgressionRules').findOne({key: 'active'}, {session});
        for (const [key, value] of Object.entries(ruleRecord)) assert.deepEqual(stored[key], value);
      });
    } finally { await session.endSession(); }
    const manifest = {status: 'importedAndVerified', database: mongoose.connection.name, importedAt: new Date().toISOString(), backup, rulesHash: createHash('sha256').update(JSON.stringify(experienceRules)).digest('hex'), collections: names, playerLevels: 200, petLevels: 200, existingCharacterAndCreatureStateUntouched: true};
    await fs.writeFile('data/balancing/experience-database-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
    console.log(JSON.stringify(manifest));
  }
} catch (error) {
  console.error(`Experience import failed at ${stage} (${error.name}); credentials suppressed.`);
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
