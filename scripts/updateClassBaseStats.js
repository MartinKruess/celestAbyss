import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  const records = JSON.parse(await fs.readFile(new URL('../data/class-templates.json', import.meta.url), 'utf8'));
  for (const record of records) {
    if (Object.keys(record.baseStats || {}).length !== 8 || !record.baseStatsSource) throw new Error('Incomplete source');
    const error = new ClassTemplateModel(record).validateSync(); if (error) throw error;
  }
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
  await mongoose.connection.transaction(async session => {
    for (const record of records) {
      const existing = await ClassTemplateModel.findOne({ key: record.key }).session(session);
      if (!existing) throw new Error('Missing template');
      const changed = JSON.stringify(Object.fromEntries(existing.baseStats || [])) !== JSON.stringify(record.baseStats)
        || existing.baseStatsSource?.sha256 !== record.baseStatsSource.sha256;
      if (changed) {
        existing.baseStats = record.baseStats; existing.baseStatsSource = record.baseStatsSource;
        existing.version++; await existing.save({ session });
      }
    }
  });
  for (const record of records) {
    const saved = await ClassTemplateModel.findOne({ key: record.key });
    for (const [key, value] of Object.entries(record.baseStats)) if (saved.baseStats.get(key) !== value) throw new Error('Read-back mismatch');
  }
  console.log(`Verified eight supplied base stats for all ${records.length} class templates. No conversion formulas invented.`);
} catch (error) { console.error(`Base stat update failed (${error.name}); no credentials printed.`); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
