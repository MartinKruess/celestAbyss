import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { applyDescriptionOverride, skillEffectFingerprint } from '../services/skillDescriptions.js';
import { skills } from '../scripts/skilldata.js';
import { mapSkill, prepareSeed } from '../scripts/seedData.js';

test('description corrections do not change effects or run with stale numeric values', () => {
  const original = mapSkill(skills.find(skill => skill.S_Name_de === 'Feuerball'), 0);
  assert.ok(original.description_de.includes('Feuerball'));
  const changed = { ...original, matk: 99999, description_de: 'Custom text' };
  assert.equal(applyDescriptionOverride(changed).description_de, 'Custom text');
  assert.notEqual(skillEffectFingerprint(changed), skillEffectFingerprint(original));
});
test('patches preserve narrative and contain no thought dashes; conflicted effects excluded', async () => {
  const review = JSON.parse(await fs.readFile(new URL('../data/skill-description-review.json', import.meta.url), 'utf8'));
  assert.equal(review.patches.length, 43); assert.equal(review.majorIssues.length, 33);
  for (const patch of review.patches) {
    assert.ok(patch.after.de.trim() && patch.after.en.trim());
    assert.equal(/[\u2013\u2014]/u.test(patch.after.de + patch.after.en), false);
    assert.ok(!review.majorIssues.some(issue => issue.nr === patch.nr));
  }
  assert.equal(prepareSeed().errors.length, 0);
});
