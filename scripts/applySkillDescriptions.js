import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
import { skillEffectFingerprint } from '../services/skillDescriptions.js';

try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  const review = JSON.parse(await fs.readFile(new URL('../data/skill-description-review.json', import.meta.url), 'utf8'));
  const overrides = JSON.parse(await fs.readFile(new URL('../data/skill-description-overrides.json', import.meta.url), 'utf8'));
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000, autoIndex: false });
  let changed = 0;
  await mongoose.connection.transaction(async session => {
    changed = 0;
    for (const patch of review.patches) {
      const current = await SkillDataModel.findById(patch.skillID).session(session);
      const override = overrides.find(entry => entry.germanName === patch.germanName);
      if (!current || skillEffectFingerprint(current) !== override.effectFingerprint) throw new Error('Effect changed since review');
      if (current.description_de === patch.after.de && current.description_eng === patch.after.en) continue;
      if (current.description_de !== patch.before.de || current.description_eng !== patch.before.en) throw new Error('Description changed since review');
      const result = await SkillDataModel.updateOne({ _id: current._id,
        description_de: patch.before.de, description_eng: patch.before.en },
      { $set: { description_de: patch.after.de, description_eng: patch.after.en } }, { session, runValidators: true });
      if (result.matchedCount !== 1) throw new Error('Concurrent description change');
      changed++;
    }
  });
  for (const patch of review.patches) {
    const saved = await SkillDataModel.findById(patch.skillID);
    if (saved.description_de !== patch.after.de || saved.description_eng !== patch.after.en) throw new Error('Read-back mismatch');
  }
  console.log(`Updated ${changed} skill description pairs; verified ${review.patches.length}. Effects, names and classes unchanged.`);
} catch (error) { console.error(`Description update failed (${error.name}); no credentials printed.`); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
