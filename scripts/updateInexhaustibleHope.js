import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Wrong database');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const before = await SkillDataModel.collection.findOne({ nr: 116 });
  if (before?.maxSkillLv !== 10) throw Error('Unexpected skill');
  const bonuses = [0,0,0,0,1,1,1,1,1,3];
  const set = {
    matk: 2, resourceCosts: [],
    statScaling: { matk: { type: 'linear', base: 2, perLevel: 2 }, luck: { type: 'table', values: bonuses }, faith: { type: 'table', values: bonuses } },
    description_de: 'Permanenter passiver Skill. Gewährt auf Stufe 1 +2 M-Angriff und je weiterer Stufe +2 M-Angriff, insgesamt +20 auf Stufe 10. Ab Stufe 5 zusätzlich insgesamt +1 Glück und +1 Faith; auf Stufe 10 steigen diese Gesamtboni auf +3 Glück und +3 Faith. Der direkte M-Angriffsbonus hängt nicht vom Faith-Wert ab. Keine Aktivierungskosten, Castzeit oder Cooldown.',
    description_eng: 'Permanent passive skill. Grants +2 magical attack at level 1 and +2 per additional level, totaling +20 at level 10. From level 5, also grants a total of +1 Luck and +1 Faith; at level 10 these total bonuses increase to +3 Luck and +3 Faith. The direct magical attack bonus does not depend on Faith. No activation costs, cast time or cooldown.'
  };
  await new SkillDataModel({ ...before, ...set }).validate();
  await fs.writeFile('data/balancing/inexhaustible-hope-before.json', JSON.stringify(before, null, 2) + '\n');
  await SkillDataModel.collection.updateOne({ nr: 116 }, { $set: set });
  const after = await SkillDataModel.collection.findOne({ nr: 116 });
  for (const [key, value] of Object.entries(set)) if (JSON.stringify(after[key]) !== JSON.stringify(value)) throw Error('Read-back mismatch');
  console.log('Verified: magical attack 2–20; Luck/Faith 1 at level 5, total 3 at level 10.');
} catch (error) { console.error('Update failed (' + error.name + '); credentials omitted.'); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
