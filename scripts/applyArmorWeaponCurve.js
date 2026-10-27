import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { armorRanksFromAnchor } from '../services/armorRankProgression.js';

const read = async p => JSON.parse(await fs.readFile(p, 'utf8'));
const sourceText = await fs.readFile('data/balancing/armor-parts.json', 'utf8');
const armor = JSON.parse(sourceText), preview = await read('data/balancing/armor-weapon-curve-preview.json');
const model = await read('data/balancing/armor-defense-model.json');
assert.equal(createHash('sha256').update(sourceText).digest('hex'), preview.sourceSha256, 'Preview no longer matches current definitions');
const anchors = armor.parts.filter(p => p.rank === 6).map(p => ({ sourceClass: p.sourceClass, slot: p.slot, raw: p.raw }));
assert.equal(anchors.length, 65);
for (const a of anchors) {
  const ranks = armorRanksFromAnchor(a.raw);
  for (let i = 0; i < 6; i++) assert.deepEqual(ranks[i], preview.parts.find(p => p.sourceClass === a.sourceClass && p.slot === a.slot && p.rank === i + 1).proposed);
}
if (!process.argv.includes('--apply')) {
  console.log(JSON.stringify({ mode: 'dryRun', anchors: anchors.length, changedRanks: [1, 2, 3, 4, 5], retainedRank: 6 }));
} else {
  const backup = `data/balancing/history/before-weapon-curve-armor-${Date.now()}`;
  await fs.mkdir(backup, { recursive: true });
  for (const name of ['armor-parts.json', 'ranked-equipment.json', 'r6-equipment.json', 'armor-defense-model.json', 'armor-database-manifest.json'])
    await fs.copyFile(`data/balancing/${name}`, `${backup}/${name}`);
  for (const name of ['armor-parts.md', 'r6-equipment.md', 'r6-armor-sets.md'])
    await fs.copyFile(`docs/balancing/${name}`, `${backup}/${name}`);
  model.rankProgression = { mode: 'weaponCurveFromRank6Parts', anchorRank: 6, decimalPlaces: 2,
    growthPercentages: [77, 75, 73, 71, 69], rounding: 'Half up after every backwards step, integer hundredths; totals sum the rounded parts.', anchors,
    decision: 'User approved applying the all-class preview; preserve every R6 part.', backup };
  model.rounding = model.rankProgression.rounding;
  for (const [field, table] of [['physicalDefense', 'physicalDefenseByClassAndRank'], ['magicalDefense', 'magicalDefenseByClassAndRank']]) {
    model[table] = Object.fromEntries(preview.classes.map(c => [c.key, Object.fromEntries(c.ranks.map(r => [r.rank, r.proposed[field]]))]));
  }
  for (const key of ['physicalCalibration', 'magicalCalibration', 'r1StarterAdjustment'])
    if (model[key]) model[key] = { ...model[key], status: 'historicalSupersededByRankProgression' };
  await fs.writeFile('data/balancing/armor-defense-model.json', JSON.stringify(model, null, 2) + '\n');
  console.log(JSON.stringify({ appliedModel: true, backup, anchors: anchors.length }));
}
