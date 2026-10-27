import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {experienceRules, referenceLevelHours, referenceHoursToLevel, buildExperienceLevels, referenceExperienceRate, petExperienceGain} from '../services/experienceProgression.js';
import {PlayerExperienceLevelModel, PetExperienceLevelModel} from '../models/experienceLevelSchema.js';

test('time curve retains the approved starter, level 45 and maximum-level reference', () => {
  assert.ok(Math.abs(referenceLevelHours(1) * 60 - 6.24) < 1e-8);
  assert.ok(Math.abs(referenceHoursToLevel(15) - 5.9019585770) < 1e-8);
  assert.ok(Math.abs(referenceLevelHours(45) - 2.1267873613) < 1e-8);
  assert.ok(Math.abs(referenceHoursToLevel(200) - 2265.17265) < 1e-8);
});

test('every level takes longer and maximum level has no next requirement', () => {
  for (let level = 2; level < 200; level++) assert.ok(referenceLevelHours(level) > referenceLevelHours(level - 1));
  assert.equal(referenceHoursToLevel(1), 0);
  assert.equal(referenceLevelHours(200), null);
  for (const level of [0, 201, 1.5, NaN]) assert.throws(() => referenceLevelHours(level), RangeError);
});

test('integer requirements accumulate from level one, with no fictitious 200 -> 201 transition', async () => {
  const rules = structuredClone(experienceRules);
  rules.rewardReference = {status: 'defined', baseXp: 80, levelFactor: 1, killsPerHour: 600};
  const levels = buildExperienceLevels(rules);
  assert.equal(levels.length, 200);
  assert.equal(levels[0].cumulativeXp, 0);
  assert.equal(levels[44].neededXp, 102086);
  assert.equal(levels[199].neededXp, null);
  let sum = 0;
  for (const row of levels) {
    assert.equal(row.cumulativeXp, sum);
    for (const Model of [PlayerExperienceLevelModel, PetExperienceLevelModel]) await new Model(row).validate();
    sum += row.neededXp ?? 0;
  }
});

test('invalid requirements and unsafe XP magnitudes are rejected', async () => {
  await assert.rejects(new PlayerExperienceLevelModel({level: 200, maximumLevel: true, neededXp: 10, cumulativeXp: 0, referenceCumulativeHours: 0, rulesVersion: 1}).validate());
  const rules = structuredClone(experienceRules);
  rules.rewardReference = {status: 'defined', baseXp: 1e16, levelFactor: 1, killsPerHour: 600};
  assert.throws(() => buildExperienceLevels(rules), RangeError);
});

test('real XP scale preserves reward anchors and stays inside whole-XP rounding error', () => {
  assert.equal(referenceExperienceRate(1).monsterXp, 2);
  assert.equal(referenceExperienceRate(45).monsterXp, 80);
  assert.ok(Math.abs(referenceExperienceRate(45).killsPerHour - 600) < 1e-8);
  const levels = buildExperienceLevels();
  assert.equal(levels[0].neededXp, 6);
  assert.equal(levels[44].neededXp, 102086);
  let actualHours = 0;
  for (const row of levels.slice(0, -1)) {
    const rate = referenceExperienceRate(row.level).xpPerHour;
    const hours = row.neededXp / rate;
    assert.ok(Math.abs(hours - row.referenceHoursToNextLevel) <= 0.5 / rate + 1e-10);
    actualHours += hours;
  }
  assert.ok(Math.abs(actualHours - referenceHoursToLevel(200)) < 0.05);
});

test('pet XP retains the existing Breed scaling without doubling threshold benefits', () => {
  const skills = JSON.parse(fs.readFileSync(new URL('../data/skills.json', import.meta.url), 'utf8'));
  const breed = skills.find(s => s.nr === 138);
  const effect = breed.effects.find(e => e.type === 'experienceBonus');
  assert.equal(breed.maxSkillLv, 3);
  assert.equal(petExperienceGain(2, 0), 0);
  for (let level = 1; level <= 3; level++) {
    const expectedMultiplier = 1 + effect.valueScaling.base + effect.valueScaling.perLevel * (level - 1);
    assert.ok(Math.abs(petExperienceGain(100, level) - 100 * expectedMultiplier) < 1e-8);
  }
  assert.equal(petExperienceGain(2, 1), 2.2);
  assert.equal(petExperienceGain(2, 2), 2.4);
  assert.equal(experienceRules.petExperience.thresholdPolicy, 'sameAsPlayer');
  for (const level of [-1, 4, 1.5]) assert.throws(() => petExperienceGain(2, level), RangeError);
  for (const xp of [-1, 1.5, Infinity]) assert.throws(() => petExperienceGain(xp, 1), RangeError);
});
