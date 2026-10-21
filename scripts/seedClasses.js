import 'dotenv/config';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import mongoose from 'mongoose';
import { ClassTemplateModel, LegacyClassSkillsModel } from '../models/classTemplateSchema.js';

export async function readClassData() {
  return [
    { model: ClassTemplateModel, records: JSON.parse(await fs.readFile(new URL('../data/class-templates.json', import.meta.url), 'utf8')) },
    { model: LegacyClassSkillsModel, records: JSON.parse(await fs.readFile(new URL('../data/legacy-class-skills.json', import.meta.url), 'utf8')) },
  ];
}
// Imports in tests must not start a connection.
if (process.argv[1] && fileURLToPath(import.meta.url).toLowerCase() === resolve(process.argv[1]).toLowerCase()) {
  try {
    const mode = process.argv[2];
    if (!['--check', '--apply'].includes(mode)) throw new Error('Invalid mode');
    const groups = await readClassData();
    for (const group of groups) {
      const seen = new Set();
      for (const record of group.records) {
        if (seen.has(record.key)) throw new Error('Duplicate key');
        seen.add(record.key);
        const error = new group.model(record).validateSync(); if (error) throw error;
      }
      console.log(`${group.model.collection.name}: ${group.records.length} valid drafts`);
    }
    if (mode === '--apply') {
      if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
      await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
      for (const group of groups) {
        await group.model.createIndexes();
        const result = await group.model.bulkWrite(group.records.map(record => ({ updateOne: {
          filter: { key: record.key }, update: { $setOnInsert: record }, upsert: true,
        } })), { ordered: true });
        const count = await group.model.countDocuments({ key: { $in: group.records.map(record => record.key) } });
        if (count !== group.records.length) throw new Error('Verification failed');
        console.log(`${group.model.collection.name}: inserted ${result.upsertedCount}, verified ${count}`);
      }
    }
  } catch (error) { console.error(`Class import failed (${error.name}); no credentials printed.`); process.exitCode = 1; }
  finally { await mongoose.disconnect(); }
}
