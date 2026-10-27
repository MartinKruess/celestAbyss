import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Requires development database');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000,
  });
  const before = await SkillDataModel.collection.findOne({nr: 133});
  if (!before) throw Error('Missing Tame definition');
  const taming = {...before.taming,
    baseChanceSource: 'creatureVariant',
    chanceFormula: 'baseChanceTimesSkillMultiplier',
    chanceMultiplierScaling: {type: 'linear', base: 1, perLevel: 0.1},
  };
  delete taming.baseSuccessChance;
  delete taming.successChanceScaling;
  delete taming.creatureCounterStatus;
  const description_de = 'Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen.';
  const description_eng = 'Attempts to tame a creature. Requires a taming card matching the creature variant. The base chance belongs to the specific creature variant. Tame multiplies this chance by 1.0 at level 1, 1.1 at level 2 and 1.2 at level 3; it adds no percentage points and supplies no fixed base success chance. A 1 percent base chance becomes 1 / 1.1 / 1.2 percent per attempt. The formula continues by 0.1 per additional effective level when separately authorized. The definition still has three learnable levels: ordinary classes are capped at level 1 and the Adventurer at level 3; a second specialist remains undefined. Mana is 100 / 125 / 150, cast time 3 / 2.5 / 2 seconds and cooldown 60 / 50 / 40 seconds. No damage or subsequent effect duration. Creature base chances, card mappings, item consumption, target distance and interruption conditions remain to be defined.';
  const levelProgression = {...before.levelProgression, rules: [
    ...before.levelProgression.rules.filter(entry => entry.path[0] !== 'taming'),
    {path: ['taming', 'chanceMultiplierScaling'], rule: {kind: 'linear', base: 1, perLevel: 0.1}, source: 'storedFormula'},
  ]};
  const set = {taming, description_de, description_eng, levelProgression};
  await new SkillDataModel({...before, ...set}).validate();
  const backup = 'data/balancing/history/before-taming-multiplier-' + Date.now();
  await fs.mkdir(backup, {recursive: true});
  await fs.writeFile(backup + '/skill.json', JSON.stringify(before, null, 2) + '\n');
  const result = await SkillDataModel.collection.updateOne({_id: before._id}, {$set: set});
  assert.equal(result.matchedCount, 1);
  const after = await SkillDataModel.collection.findOne({_id: before._id});
  for (const [key, value] of Object.entries(set)) assert.deepEqual(after[key], value);
  for (const [key, value] of Object.entries(before)) if (!Object.hasOwn(set, key)) assert.deepEqual(after[key], value);
  await fs.writeFile('data/balancing/taming-multiplier-decision.json', JSON.stringify({
    status: 'appliedAndVerified', generatedAt: new Date().toISOString(), backup,
    formula: 'creatureVariantBaseChance * (1 + 0.1 * (effectiveSkillLevel - 1))',
    learnedMultipliers: [1, 1.1, 1.2],
    runtimeStatus: 'Skill definition and progression updated; legacy taming controller is not a completed gameplay implementation.',
    skill: after,
  }, null, 2) + '\n');
  console.log('Tame verified: relative multipliers 1 / 1.1 / 1.2; learned caps, costs and timing unchanged.');
} catch (error) {
  console.error('Tame multiplier update failed (' + error.name + '); connection details omitted.');
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
