import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Wrong database');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const before = await SkillDataModel.collection.find({ nr: { $in: [208, 210] } }).toArray();
  if (before.length !== 2) throw Error('Missing skills');
  const updates = [
    { nr: 208, set: {
      resourceCosts: [],
      statScaling: { faith: { type: 'linear', base: 2, perLevel: 1 }, int: { type: 'linear', base: 5, perLevel: 1 } },
      description_de: 'Permanenter passiver Skill. Die bisherigen Startwerte bleiben +2 Faith, +5 Intelligenz und +2 Wisdom. Je weiterer Stufe steigen Faith und Intelligenz jeweils um 1. Auf Stufe 10 insgesamt +11 Faith, +14 Intelligenz und unverändert +2 Wisdom. Keine Aktivierungskosten, Castzeit oder Cooldown.',
      description_eng: 'Permanent passive skill. Existing starting bonuses remain +2 Faith, +5 Intelligence and +2 Wisdom. Each additional level adds 1 Faith and 1 Intelligence. Level 10 totals: +11 Faith, +14 Intelligence and unchanged +2 Wisdom. No activation costs, cast time or cooldown.'
    } },
    { nr: 210, set: {
      statScaling: { matk: { type: 'linear', base: 62, perLevel: 28 } },
      resourceCosts: [{ resource: 'mana', reference: 'maxMana', unit: 'flat', scaling: { type: 'linear', base: 32, perLevel: 18 } }],
      cooldownScaling: { type: 'linear', base: 12, perLevel: -0.5 },
      castTimeSeconds: 0.1,
      durationScaling: { type: 'table', values: Array(20).fill(0) },
      description_de: 'Schleudert einen grellen Lichtblitz auf den Gegner. Einmaliger magischer Angriff: 62 auf Stufe 1, +28 je weiterer Stufe, insgesamt 594 auf Stufe 20. Manakosten 32, +18 je weiterer Stufe, insgesamt 374. Cooldown 12 Sekunden, je weiterer Stufe 0,5 Sekunden weniger, auf Stufe 20 2,5 Sekunden. Castzeit 0,1 Sekunde. Wirkungsdauer 0 Sekunden; nur eine Angriffsanimation, keine anhaltende Wirkung. Animationslänge noch nicht festgelegt.',
      description_eng: 'Hurls a brilliant flash of light at the enemy. One magical hit: 62 at level 1, +28 per additional level, totaling 594 at level 20. Mana cost 32, +18 per additional level, totaling 374. Cooldown starts at 12 seconds and decreases by 0.5 per additional level to 2.5 seconds at level 20. Cast time 0.1 seconds. Effect duration 0 seconds; attack animation only, no ongoing effect. Animation length remains undefined.'
    } }
  ];
  for (const { nr, set } of updates) await new SkillDataModel({ ...before.find(s => s.nr === nr), ...set }).validate();
  await fs.writeFile('data/balancing/eternal-knowledge-light-flash-before.json', JSON.stringify(before, null, 2) + '\n');
  for (const { nr, set } of updates) {
    await SkillDataModel.collection.updateOne({ nr }, { $set: set });
    const after = await SkillDataModel.collection.findOne({ nr });
    for (const [key, value] of Object.entries(set)) if (JSON.stringify(after[key]) !== JSON.stringify(value)) throw Error('Read-back mismatch');
  }
  console.log('Both skills saved and verified.');
} catch (e) { console.error('Update failed (' + e.name + '); credentials omitted.'); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
