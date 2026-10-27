import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createStatFoundation, primaryAttributes } from '../services/statFoundation.js';
import { buildCharacterStatProfile } from '../services/characterStats.js';
const templates = JSON.parse(fs.readFileSync(new URL('../data/class-templates.json', import.meta.url)));
const growth = JSON.parse(fs.readFileSync(new URL('../data/balancing/class-base-growth.json', import.meta.url)));

test('migration preserves naked baselines and stores zero starting attributes independently', () => {
  for (const template of templates) {
    const result = createStatFoundation(template, growth.attributeGainPerLevel);
    for(const [key,value]of Object.entries(template.baseStats))assert.equal(result.directStats[key],value);
    for(const key of ['accuracy','dodge','critChanceRating','block','penetration'])assert.equal(result.directStats[key],0);
    assert.deepEqual(result.attributes, Object.fromEntries(primaryAttributes.map(k => [k, 0])));
    assert.deepEqual(result.attributeGrowth, growth.attributeGainPerLevel);
    assert.deepEqual(result, template.statFoundation);
  }
});
test('ambiguous legacy attribute totals and invalid migration inputs fail instead of guessing', () => {
  const hunter = templates.find(t => t.key === 'hunter');
  assert.throws(() => createStatFoundation({ ...hunter, baseStats: { ...hunter.baseStats, vitality: 5 } }, growth.attributeGainPerLevel));
  assert.throws(() => createStatFoundation(hunter, { vitality: -1 }));
  assert.throws(() => createStatFoundation({ baseStats: { maxHealth: NaN } }, {}));
});
test('runtime ignores legacy aggregate references and consumes database growth', () => {
  const hunter = structuredClone(templates.find(t => t.key === 'hunter'));
  hunter.baseStats.maxHealth = 6000;
  hunter.statFoundation.attributeGrowth.vitality = 2;
  const profile = buildCharacterStatProfile(hunter, 25);
  assert.equal(profile.baseValues.find(v => v.key === 'maxHealth').value, 184);
  assert.equal(profile.growth.find(v => v.key === 'vitality').perLevel, 2);
  assert.equal(profile.stats, undefined);
  hunter.statFoundation.directStats.vitality = 10;
  assert.throws(() => buildCharacterStatProfile(hunter, 25));
});
