import test from 'node:test';
import assert from 'node:assert/strict';
import {combatRatingChance as chance, combatRatingModel, resolveCombatRatings} from '../services/combatRatings.js';

test('350 points reach each configured ceiling and higher ratings are capped', () => {
  for (const [stat, settings] of Object.entries(combatRatingModel.ratings)) {
    assert.equal(chance(stat, 0), 0);
    assert.equal(chance(stat, -10), 0);
    assert.equal(chance(stat, 350), settings.maximum);
    assert.equal(chance(stat, 1e9), settings.maximum);
  }
});
test('rating gains remain positive and diminish', () => {
  for (const stat of Object.keys(combatRatingModel.ratings)) {
    let previous = Infinity;
    for (let rating = 1; rating <= 350; rating++) {
      const gain = chance(stat, rating) - chance(stat, rating - 1);
      assert.ok(gain > 0 && gain < previous);
      previous = gain;
    }
  }
});
test('resolving ratings preserves raw stats and does not mistake penetration for block-ignore percent', () => {
  const stats = {block:25,penetration:211.5,criticalDamageBonus:0.8};
  const before = {...stats};
  const result = resolveCombatRatings(stats);
  assert.deepEqual(stats, before);
  assert.equal(result.block,0.08);
  assert.ok(Math.abs(chance('block',200)-0.43636363636363634)<1e-12);
  assert.ok(result.penetration>0 && result.penetration<0.6);
  assert.equal(result.criticalDamageBonus,undefined);
  assert.throws(()=>chance('block', NaN));
});
