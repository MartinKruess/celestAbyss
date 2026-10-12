import 'dotenv/config';
import mongoose from 'mongoose';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';
import { moderationRules } from './moderationData.js';

const mode = process.argv[2];
try {
  if (process.argv.length !== 3 || !['--check', '--apply'].includes(mode)) throw new Error('Invalid mode');
  const seen = new Set();
  for (const rule of moderationRules) {
    if (seen.has(rule.key) || rule.active) throw new Error('Duplicate or active draft');
    seen.add(rule.key);
    const error = new ModerationRuleModel(rule).validateSync();
    if (error) throw error;
  }
  console.log(`Validated ${moderationRules.length} German draft entries; all inactive.`);
  if (mode === '--apply') {
    if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
    await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
    await ModerationRuleModel.createIndexes();
    const result = await ModerationRuleModel.bulkWrite(moderationRules.map(rule => ({ updateOne: {
      filter: { key: rule.key }, update: { $setOnInsert: rule }, upsert: true,
    } })), { ordered: true });
    console.log(`Inserted ${result.upsertedCount}; already present ${result.matchedCount}. Existing decisions were not overwritten.`);
    const imported = await ModerationRuleModel.find({ key: { $in: moderationRules.map(rule => rule.key) } }).select('key active');
    if (imported.length !== moderationRules.length) throw new Error('Verification failed');
    console.log(`Verified ${imported.length} entries in moderationRules; active: ${imported.filter(rule => rule.active).length}.`);
  }
} catch (error) {
  console.error(`Failure category: ${error.name}; code: ${error.code || 'none'}.`);
  console.error('Moderation draft check/import failed. Check mode, schema and development DB access. No credentials printed.');
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
