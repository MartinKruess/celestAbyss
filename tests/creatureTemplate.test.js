import test from 'node:test';
import assert from 'node:assert/strict';
import base from '../data/creatures/base-creature.json' with {type:'json'};
import worldReference from '../data/creatures/world-reference-level1.json' with {type:'json'};
import {CreatureTemplateModel} from '../models/creatureTemplateSchema.js';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';

const variant = (key, parentKey = base.key, changes = {}) => ({key, parentKey, ...changes});

test('Kill XP is an independent inherited reward with a unit base and no hidden level scaling', () => {
  assert.equal(resolveCreatureTemplate(base).rewards.experienceOnKill, 1);
  assert.equal(resolveCreatureTemplate(base, [], 100).rewards.experienceOnKill, 1);
  const layers = [variant('family', base.key, {rewards:{experienceOnKill:{multiplier:10}}}),
    variant('strong', 'family', {rewards:{experienceOnKill:{multiplier:1.25, levelFactor:1.1}}})];
  const row = resolveCreatureTemplate(base, layers, 10);
  assert.equal(row.rewards.experienceOnKill, Math.round(12.5 * 1.1 ** 9));
  assert.deepEqual(row.stats, resolveCreatureTemplate(base, [], 10).stats);
  const changed = structuredClone(base);
  changed.rewards.experienceOnKill.base = 2;
  assert.equal(resolveCreatureTemplate(changed, layers, 1).rewards.experienceOnKill, 25);
  const none = variant('no-xp', base.key, {rewards:{experienceOnKill:{multiplier:0}}});
  assert.equal(resolveCreatureTemplate(base, [none]).rewards.experienceOnKill, 0);
  assert.throws(() => resolveCreatureTemplate(base, [variant('bad', base.key, {rewards:{experienceOnKill:{multiplier:-1}}})]), RangeError);
});

test('World level-one upper reference inherits unit base without the discarded doubling or hidden bonuses', () => {
  assert.equal(new CreatureTemplateModel(worldReference).validateSync(), undefined);
  const row = resolveCreatureTemplate(base, [worldReference]);
  assert.equal(row.rawStats.maxHealth, 183.2);
  assert.equal(row.stats.maxHealth, 183);
  assert.equal(row.stats.maxMana, 151);
  assert.equal(row.stats.physicalAttack, 31.6);
  assert.equal(row.stats.magicalAttack, 38.6);
  assert.equal(row.stats.physicalDefense, 6);
  assert.equal(row.stats.magicalDefense, 8);
  assert.equal(row.capabilities.tamable, false);
  assert.equal(row.stats.healthRegen, 0.1);
  assert.equal(row.stats.attackSpeed, 0.7);
  assert.equal(row.stats.movementSpeed, 0.95);
  assert.equal(row.spawnable, false);
});

test('Neutral template validates approved speed and percentage-regeneration exceptions without hidden attribute bonuses', () => {
  assert.equal(new CreatureTemplateModel(base).validateSync(), undefined);
  assert.equal(Object.keys(base.baseStats).length, 26);
  const exceptions = {attackSpeed: 0.7, movementSpeed: 0.95, healthRegen: 0.1, manaRegen: 0};
  for (const [key, value] of Object.entries(base.baseStats)) assert.equal(value, exceptions[key] ?? 1);
  const one = resolveCreatureTemplate(base), hundred = resolveCreatureTemplate(base, [], 100);
  assert.equal(one.stats.maxHealth, 1);
  assert.equal(one.stats.physicalAttack, 1);
  assert.equal(one.stats.attackSpeed, 0.7);
  assert.equal(one.stats.movementSpeed, 0.95);
  assert.equal(one.stats.critChanceRating, 0);
  assert.equal(one.stats.healthRegen, 0.1);
  assert.deepEqual(hundred.stats, one.stats);
  assert.equal(one.spawnable, false);
  assert.deepEqual(one.capabilities, {tamable: false, mountable: false});
});

test('Variants can represent 9001 Health, independent attack values and zero unused attack without copying the base', () => {
  const row = resolveCreatureTemplate(base, [variant('wolf', base.key, {statMultipliers: {maxHealth: 9001, physicalAttack: 18, magicalAttack: 0}})]);
  assert.equal(row.stats.maxHealth, 9001);
  assert.equal(row.stats.physicalAttack, 18);
  assert.equal(row.stats.magicalAttack, 0);
  assert.equal(row.stats.maxMana, 1);
});

test('Family factors combine with variant factors and later central changes propagate', () => {
  const layers = [variant('wolves', base.key, {statMultipliers: {maxHealth: 100}}), variant('robust-wolf', 'wolves', {statMultipliers: {maxHealth: 1.25}})];
  assert.equal(resolveCreatureTemplate(base, layers).stats.maxHealth, 125);
  const adjusted = structuredClone(base);
  adjusted.statMultipliers.maxHealth = 0.8;
  assert.equal(resolveCreatureTemplate(adjusted, layers).stats.maxHealth, 100);
});

test('Only explicit growth compounds over level minus one, and rounding happens after all scaling', () => {
  const growing = structuredClone(base);
  growing.levelGrowth.statFactors.maxHealth = 1.1;
  const layers = [variant('example', base.key, {statMultipliers: {maxHealth: 366.4}})];
  assert.equal(resolveCreatureTemplate(growing, layers, 60).stats.maxHealth, Math.round(366.4 * 1.1 ** 59));
  assert.equal(resolveCreatureTemplate(growing, layers, 60).stats.physicalAttack, 1);
  const precise = resolveCreatureTemplate(base, [variant('fraction', base.key, {statMultipliers: {maxHealth: 1.4}}), variant('double', 'fraction', {statMultipliers: {maxHealth: 2}})]);
  assert.equal(precise.stats.maxHealth, 3);
});

test('Absent capability inherits, explicit false wins, body and skills are independently inherited', () => {
  const family = variant('wolves', base.key, {capabilities: {tamable: true}, bodyTemplateKey: 'wolf-body-1', skillNumbers: [42]});
  const inheriting = variant('wolf-a', 'wolves');
  const blocked = variant('wolf-b', 'wolves', {capabilities: {tamable: false}, bodyTemplateKey: null, skillNumbers: []});
  assert.equal(resolveCreatureTemplate(base, [family, inheriting]).capabilities.tamable, true);
  const result = resolveCreatureTemplate(base, [family, blocked]);
  assert.equal(result.capabilities.tamable, false);
  assert.equal(result.capabilities.mountable, false);
  assert.equal(result.bodyTemplateKey, null);
  assert.deepEqual(result.skillNumbers, []);
  // Optional child capabilities must not receive a schema default that masks inheritance.
  const child = new CreatureTemplateModel({key: 'child', parentKey: 'wolves', name_de: 'Kind', kind: 'variant', version: 1, status: 'draft'}).toObject();
  assert.equal(child.capabilities?.tamable, undefined);
  assert.equal(child.bodyTemplateKey, undefined);
  assert.equal(child.spawnable, undefined);
  assert.equal(resolveCreatureTemplate(base, [family, child]).bodyTemplateKey, 'wolf-body-1');
});

test('Optional bonus requires activation and percentage-point unit is normalized', () => {
  const result = resolveCreatureTemplate(base, [variant('critical', base.key, {enabledStats: {criticalDamageBonus: true}})]);
  assert.equal(result.rawStats.criticalDamageBonus, 1);
  assert.equal(result.stats.criticalDamageBonus, 0.01);
  assert.equal(result.stats.critChanceRating, 0);
});

test('Invalid chains, copied stats, unknown fields, negative factors and runaway growth are rejected', () => {
  assert.throws(() => resolveCreatureTemplate(base, [variant('bad', 'missing')]), /chain/);
  assert.throws(() => resolveCreatureTemplate(base, [variant('copy', base.key, {baseStats: {maxHealth: 100}})]), /copied/);
  assert.throws(() => resolveCreatureTemplate(base, [variant('bad', base.key, {statMultipliers: {unknown: 2}})]), RangeError);
  assert.throws(() => resolveCreatureTemplate(base, [variant('bad', base.key, {statMultipliers: {maxHealth: -1}})]), RangeError);
  assert.throws(() => resolveCreatureTemplate(base, [variant('bad', base.key, {levelGrowth: {statFactors: {maxHealth: 1e300}}})], 100), RangeError);
  for (const level of [0, 1.5, 101]) assert.throws(() => resolveCreatureTemplate(base, [], level), RangeError);
});
