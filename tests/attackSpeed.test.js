import test from 'node:test';
import assert from 'node:assert/strict';
import {effectiveMeleeAttackSpeedRating as effective, meleeAutoAttackInterval as interval} from '../services/attackSpeed.js';

test('preserves weapon penalties and uses 1.3 melee actions at 100 points', () => {
  assert.equal(effective(80), 80);
  assert.equal(interval(1), 1 / 1.3);
  assert.equal(interval(0.8), 1 / (1.3 * 0.8));
});
test('light initial reduction joins the stronger tail continuously with matching slope', () => {
  assert.equal(effective(110), 109.5);
  const epsilon = 0.00001;
  assert.ok(Math.abs((effective(110)-effective(110-epsilon))/epsilon-0.9)<0.00001);
  assert.ok(Math.abs((effective(110+epsilon)-effective(110))/epsilon-0.9)<0.00001);
});
test('speed increases with diminishing gains until the two-action cap at 350', () => {
  let previousGain = Infinity;
  for(let rating=101;rating<350;rating++) {
    const gain=effective(rating)-effective(rating-1);
    assert.ok(gain>0 && gain<previousGain);
    assert.ok(interval(rating/100)>0.5);
    previousGain=gain;
  }
  assert.equal(interval(3.5),0.5);
  assert.equal(interval(100),0.5);
});
