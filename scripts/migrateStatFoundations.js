import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';
import { createStatFoundation } from '../services/statFoundation.js';
import { buildCharacterStatProfile } from '../services/characterStats.js';

const mode = process.argv[2];
const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
try {
  if (!['--check', '--apply'].includes(mode) || process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Development DB and explicit mode required');
  const templates = await read('data/class-templates.json');
  const growth = await read('data/balancing/class-base-growth.json');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000,
  });
  const before = await ClassTemplateModel.find({}).lean();
  if (before.length !== templates.length || before.some(t => !templates.some(local => local.key === t.key))) throw new Error('Class set mismatch');
  const proposed = before.map(t => ({ ...t, statFoundation: t.statFoundation ?? createStatFoundation(t, growth.attributeGainPerLevel) }));
  for (const template of proposed) {
    await new ClassTemplateModel(template).validate();
    for (const level of [1, 25, 60, 200]) buildCharacterStatProfile(template, level);
  }
  if (mode === '--apply') {
    // Preserve full class documents before changing anything. No account/character records are touched.
    const backup = `tmp/stat-foundations-${new Date().toISOString().replace(/[:.]/g, '-')}`;
    await fs.mkdir(backup, { recursive: true });
    await fs.writeFile(`${backup}/classTemplates.json`, JSON.stringify(before, null, 2) + '\n');
    await fs.copyFile('data/class-templates.json', `${backup}/class-templates.local.json`);
    for (const template of proposed) {
      const old = before.find(t => t.key === template.key);
      if (!old.statFoundation) {
        const updated = await ClassTemplateModel.updateOne({ _id: old._id, updatedAt: old.updatedAt,
          statFoundation: { $exists: false } }, { $set: { statFoundation: template.statFoundation } }, { runValidators: true });
        if (updated.matchedCount !== 1) throw new Error('Concurrent class change; backup retained');
      }
    }
    const after = await ClassTemplateModel.find({}).lean();
    for (const template of proposed) {
      const saved = after.find(t => t.key === template.key);
      if (JSON.stringify(saved.statFoundation) !== JSON.stringify(template.statFoundation)) throw new Error('Read-back mismatch');
    }
    for (const local of templates) local.statFoundation = after.find(t => t.key === local.key).statFoundation;
    await fs.writeFile('data/class-templates.json', JSON.stringify(templates, null, 2) + '\n');
    console.log(`Migrated and verified ${after.length} class foundations; backup: ${backup}`);
  } else console.log(`Validated ${proposed.length} class foundations without writes`);
} catch (error) {
  console.error(`Stat foundation migration failed (${error.name}: ${error.message}); configuration omitted.`);
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }
