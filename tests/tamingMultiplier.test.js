import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import catalog from '../data/skills.json' with {type:'json'};
import decision from '../data/balancing/taming-multiplier-decision.json' with {type:'json'};
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';

const skill = catalog.find(s => s.nr === 133);
const before = JSON.parse(fs.readFileSync(decision.backup + '/skill.json', 'utf8'));

test('Tame uses a relative creature chance multiplier and retains class learning caps', () => {
  assert.equal(new SkillDataModel(skill).validateSync(), undefined);
  assert.equal(skill.taming.baseChanceSource, 'creatureVariant');
  assert.equal(skill.taming.chanceFormula, 'baseChanceTimesSkillMultiplier');
  for (const key of ['baseSuccessChance', 'successChanceScaling', 'creatureCounterStatus']) assert.equal(skill.taming[key], undefined);
  for (const [index, expected] of [1, 1.1, 1.2].entries()) {
    const resolved = resolveSkillAtLevel(skill, index + 1, {classKey:'adventurer'});
    const factor = curveValue(resolved.taming.chanceMultiplierScaling, index + 1);
    assert.equal(factor, expected);
    assert.ok(Math.abs(0.01 * factor - [0.01, 0.011, 0.012][index]) < 1e-12);
  }
  assert.throws(() => resolveSkillAtLevel(skill, 2, {classKey:'healer'}), /exceeds/);
  assert.throws(() => resolveSkillAtLevel(skill, 4, {classKey:'adventurer'}), /exceeds/);
  const extended = resolveSkillAtLevel(skill, 3, {classKey:'adventurer', bonusLevels:3, authorizedBonusLevels:3});
  assert.equal(curveValue(extended.taming.chanceMultiplierScaling, 6), 1.5);
});

test('Tame changes only the approved chance rule and descriptions, retaining costs and timing at every level', () => {
  const normalized = value => JSON.parse(JSON.stringify(value));
  const actual = normalized(skill), old = normalized(before);
  delete old.__v;
  for (const key of ['taming', 'description_de', 'description_eng']) {delete actual[key]; delete old[key];}
  for (const value of [actual, old]) value.levelProgression.rules = value.levelProgression.rules.filter(r => r.path[0] !== 'taming');
  assert.deepEqual(actual, old);
  for (let level = 1; level <= 3; level++) {
    const previous = resolveSkillAtLevel(before, level), current = resolveSkillAtLevel(skill, level);
    for (const key of ['mana', 'cd', 'castTimeSeconds']) assert.equal(current[key], previous[key]);
  }
});
