import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { equipmentUpgradeRule, upgradedEquipmentValue, upgradedArmorDefense, upgradedWeaponBonuses, optimalEquipmentReference } from '../services/equipmentUpgrades.js';
import { progressionReference } from '../services/progressionDpsReference.js';
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const armor = read('data/balancing/armor-parts.json');

test('Optimal progression reaches +10 before the next rank and resets only at rank unlock', () => {
  const thresholds = [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 59];
  for (const [plus, level] of thresholds.entries()) {
    assert.equal(optimalEquipmentReference(level).upgrade, plus);
    if (plus) assert.equal(optimalEquipmentReference(level - 1).upgrade, plus - 1);
  }
  for (const [level, rank] of [[40, 3], [60, 4], [80, 5], [100, 6]]) {
    assert.deepEqual(optimalEquipmentReference(level), { level, rank, rankStartLevel: level, upgrade: 0 });
    assert.equal(optimalEquipmentReference(level + 19).upgrade, 10);
  }
  assert.equal(optimalEquipmentReference(120).rank, 6);
  assert.equal(optimalEquipmentReference(120).upgrade, 10);
  assert.throws(() => optimalEquipmentReference(39), RangeError);
  assert.throws(() => optimalEquipmentReference(41.9), RangeError);
});

test('Ten upgrades give the approved linear bonus without compounding', () => {
  for (const [rank, expected] of [[3, 155], [4, 153], [5, 151], [6, 149]])
    assert.equal(upgradedEquipmentValue(100, rank, 10), expected);
  assert.equal(upgradedEquipmentValue(34, 3, 1), 35.87);
  assert.equal(upgradedEquipmentValue(34, 3, 2), 37.74);
  assert.equal(upgradedEquipmentValue(.01, 3, 10), .02);
  assert.equal(upgradedEquipmentValue(.1, 3, 10), .16);
});

test('Unupgradeable, undefined tutorial and malformed upgrade requests are rejected', () => {
  assert.equal(upgradedEquipmentValue(10, 1, 0), 10);
  assert.equal(upgradedEquipmentValue(10, 2, 0), 10);
  for (const [rank, plus] of [[1, 1], [2, 1], [3, 11], [3, -1], [3, 1.5], [7, 0]])
    assert.throws(() => equipmentUpgradeRule(rank, plus), RangeError);
  for (const v of [-1, NaN, Infinity, 1.001]) assert.throws(() => upgradedEquipmentValue(v, 3, 1), RangeError);
});

test('Only direct base combat values increase; affixes, attributes and speed are untouched', () => {
  const raw = [{ label: 'P.Ang', value: 100 }, { label: 'M.Ang', value: 20 }, { label: 'ATK Speed', value: -15 }, { label: 'Stärke', value: 10 }];
  const copy = structuredClone(raw), result = upgradedWeaponBonuses(raw, 3, 10);
  assert.deepEqual(raw, copy);
  assert.deepEqual(result.map(b => b.value), [155, 31, -15, 10]);
  assert.deepEqual(upgradedArmorDefense({ physicalDefense: 300, magicalDefense: 150, vitality: 8 }, 3, 10),
    { physicalDefense: 465, magicalDefense: 232.5, vitality: 8 });
});

test('Every actual R3-R5 armor part at +10 stays below its next rank at +0', () => {
  for (const part of armor.parts.filter(p => p.rank >= 3 && p.rank < 6)) {
    const next = armor.parts.find(p => p.sourceClass === part.sourceClass && p.slot === part.slot && p.rank === part.rank + 1);
    const upgraded = upgradedArmorDefense(part.raw, part.rank, 10);
    for (const stat of ['physicalDefense', 'magicalDefense']) assert.ok(upgraded[stat] < next.raw[stat], `${part.id} ${stat}`);
  }
});

test('Every actual weapon attack or shield defense at +10 stays below its next rank at +0', () => {
  const equipment = read('data/balancing/ranked-equipment.json');
  for (const weapon of equipment.weapons.filter(w => w.rank >= 3 && w.rank < 6)) {
    const next = equipment.weapons.find(w => w.name === weapon.name && w.rank === weapon.rank + 1);
    for (const b of upgradedWeaponBonuses(weapon.raw, weapon.rank, 10).filter(b => ['P.Ang', 'M.Ang', 'P.Deff', 'M.Deff'].includes(b.label)))
      assert.ok(b.value < next.raw.find(v => v.label === b.label).value, `${weapon.name} ${b.label}`);
  }
});

test('Class reference sums per-item upgraded defense and respects offhand efficiency', () => {
  const comparison = read('data/balancing/class-comparison-level60.json'), equipment = read('data/balancing/ranked-equipment.json');
  const skills = read('data/skills.json'), model = read('data/balancing/attribute-model.json');
  const levelOne = read('data/balancing/level-one-character-reference.json');
  const make = (key, upgrade) => progressionReference({ key, level: 100, rank: 6, comparison, equipment, skills, model, levelOne, upgrade, armorDefinition: armor });
  const plain = make('gladiator', 0), plus = make('gladiator', 10);
  assert.deepEqual(plus.knownAttributes, plain.knownAttributes);
  const weapon = equipment.weapons.find(w => w.name === '1H Axt' && w.rank === 6).raw.find(b => b.label === 'P.Ang').value;
  const attackDelta = (upgradedEquipmentValue(weapon, 6, 10) - weapon) * 1.9;
  assert.ok(Math.abs(plus.stats.physicalAttack - plain.stats.physicalAttack - attackDelta) < 1e-8);
  const delta = armor.parts.filter(p => p.sourceClass === 'Gladiator' && p.rank === 6)
    .reduce((sum, p) => sum + upgradedEquipmentValue(p.raw.physicalDefense, 6, 10) - p.raw.physicalDefense, 0);
  assert.ok(Math.abs(plus.stats.physicalDefense - plain.stats.physicalDefense - delta) < 1e-8);
});
