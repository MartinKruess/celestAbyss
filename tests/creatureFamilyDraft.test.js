import test from 'node:test';
import assert from 'node:assert/strict';
import draft from '../data/balancing/creature-family-draft.json' with {type:'json'};
import model from '../data/balancing/attribute-model.json' with {type:'json'};
import {familyDraftStats, rawPetAutoProbe} from '../services/creatureFamilyDraft.js';

const wolf = draft.families.find(x => x.id === 'wolf-body-1');
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-8, `${a} != ${b}`);

test('Wolf draft uses ordinary attribute factors once, without player class attack or defense bonuses', () => {
  const one = familyDraftStats(wolf, 1, model).stats;
  assert.equal(one.maxHealth, 120);
  assert.equal(one.maxMana, 30);
  assert.equal(one.physicalAttack, 9);
  assert.equal(one.magicalAttack, 0);
  close(one.physicalDefense, 4.8);
  close(one.magicalDefense, 1.2);
  const sixty = familyDraftStats(wolf, 60, model).stats;
  assert.equal(sixty.maxHealth, 1359);
  close(sixty.physicalAttack, 115.2);
  close(sixty.physicalDefense, 54.36);
});

test('All three draft templates remain finite and nondecreasing through every level from 1 to 100', () => {
  for (const template of draft.families) {
    let previous;
    for (let level = 1; level <= 100; level++) {
      const row = familyDraftStats(template, level, model);
      for (const [key, value] of Object.entries(row.stats)) {
        assert(Number.isFinite(value) && value >= 0, template.id + ' ' + key);
        if (previous) assert(value + 1e-8 >= previous.stats[key], template.id + ' ' + key);
      }
      assert(rawPetAutoProbe(row.stats, template).totalDamage < 10000000);
      previous = row;
    }
  }
});

test('Changing family Strength propagates to both profiles while profile scaling does not multiply speed or ratings', () => {
  const changed = structuredClone(wolf);
  changed.attributeGainPerLevel.strength = 0.9;
  for (const profileFactor of [1, 2.5]) {
    const before = familyDraftStats(wolf, 60, model, {profileFactor}).stats;
    const after = familyDraftStats(changed, 60, model, {profileFactor}).stats;
    close(before.physicalAttack - after.physicalAttack, 59 * 0.1 * 1.8 * profileFactor);
  }
  const pet = familyDraftStats(wolf, 60, model).stats;
  const monster = familyDraftStats(wolf, 60, model, {profileFactor: 2.5}).stats;
  for (const key of ['attackSpeed', 'movementSpeed', 'accuracy', 'dodge']) assert.equal(pet[key], monster[key]);
});

test('Integer target/reference settings hit the target and retain a subsequent central family reduction', () => {
  const scale = {maxHealth: {referenceValue: 1359, targetValue: 1100000}};
  assert.equal(familyDraftStats(wolf, 60, model, {statScales: scale}).stats.maxHealth, 1100000);
  const weaker = structuredClone(wolf);
  weaker.attributesLevelOne.vitality *= 0.95;
  weaker.attributeGainPerLevel.vitality *= 0.95;
  assert.equal(familyDraftStats(weaker, 60, model, {statScales: scale}).stats.maxHealth, 1045000);
});

test('Raw attack probe waits for first full interval and handles boundaries, zero damage and target death', () => {
  const template = {...wolf, baseAttacksPerSecond: 1};
  const stats = {attackSpeed: 1, physicalAttack: 10};
  assert.equal(rawPetAutoProbe(stats, template, {duration: 0.99}).attacks, 0);
  assert.equal(rawPetAutoProbe(stats, template, {duration: 1}).attacks, 1);
  assert.equal(rawPetAutoProbe(stats, template, {duration: 600}).totalDamage, 6000);
  const dead = rawPetAutoProbe(stats, template, {duration: 600, targetHealth: 25});
  assert.equal(dead.attacks, 3);
  assert.equal(dead.targetDeathAt, 3);
  assert.equal(rawPetAutoProbe({...stats, physicalAttack: 0}, template).totalDamage, 0);
  for (const level of [0, 1.5, 101]) assert.throws(() => familyDraftStats(wolf, level, model), RangeError);
});
