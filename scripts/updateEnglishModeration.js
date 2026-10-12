import 'dotenv/config';
import mongoose from 'mongoose';
import { createHash } from 'node:crypto';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';

const key = (language, term) => `${language}_${createHash('sha256').update(term.toLowerCase()).digest('hex').slice(0, 24)}`;
const decisions = [
  ['en', 'Fuck you', 1, 'allow', false, 'Tolerierter allgemeiner Sprachgebrauch.'],
  ['en', 'Fuck off', 1, 'allow', false, 'Tolerierter allgemeiner Sprachgebrauch.'],
  ['en', 'Bitch', 2, 'review', true, 'Mehrdeutig; Kontext vor Zustellung prüfen.'],
  ['en', 'Bastard', 3, 'mask', false, 'Ausdrücklich zur Zensur festgelegt.'],
  ['de', 'Bastard', 3, 'mask', false, 'Ausdrücklich zur Zensur festgelegt.'],
  ['en', 'Cunt', 3, 'mask', false, 'Ausdrücklich zur Zensur festgelegt.'],
];

try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
  await ModerationRuleModel.createIndexes();
  for (const [language, term, level, action, contextRequired, reason] of decisions) {
    const filter = { key: key(language, term) };
    const existing = await ModerationRuleModel.findOne(filter);
    if (existing?.active) throw new Error('Refusing to change an active rule');
    const changes = { language, term, level, action, contextRequired, reason, status: 'agreed',
      reportAutomatically: false, active: false, matchType: term.includes(' ') ? 'phrase' : 'word',
      caseInsensitive: true, source: 'conversation-draft-2026-10-12', notes: '' };
    if (!existing) await ModerationRuleModel.create({ ...filter, ...changes });
    else if (Object.entries(changes).some(([field, value]) => existing[field] !== value)) {
      await ModerationRuleModel.updateOne({ ...filter, active: false, version: existing.version }, { $set: changes, $inc: { version: 1 } }, { runValidators: true });
    }
    const saved = await ModerationRuleModel.findOne(filter);
    if (!saved || saved.active || saved.action !== action || saved.status !== 'agreed') throw new Error('Verification failed');
    console.log(`Verified ${language}: ${term} -> ${action}; inactive.`);
  }
} catch (error) {
  console.error(`Decision update failed (${error.name}); no credentials printed.`);
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
