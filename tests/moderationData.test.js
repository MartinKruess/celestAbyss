import test from 'node:test';
import assert from 'node:assert/strict';
import { moderationRules } from '../scripts/moderationData.js';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';
test('moderation drafts are unique, valid, inactive and retain disputed decisions', () => {
  assert.equal(new Set(moderationRules.map(rule => rule.key)).size, moderationRules.length);
  for (const rule of moderationRules) {
    assert.equal(rule.active, false);
    assert.equal(new ModerationRuleModel(rule).validateSync(), undefined);
  }
  const byTerm = term => moderationRules.find(rule => rule.term === term);
  assert.equal(byTerm('Spast').action, 'allow');
  assert.equal(byTerm('Fick dich').status, 'needsReview');
  assert.equal(byTerm('Jude').action, 'block');
  assert.equal(byTerm('Jap').contextRequired, true);
  assert.equal(byTerm('Zwitter').contextRequired, true);
  assert.equal(byTerm('Bastard').action, 'mask');
  assert.equal(byTerm('Bastard').status, 'agreed');
  assert.equal(byTerm('Ich bring dich um').reportAutomatically, true);
});
