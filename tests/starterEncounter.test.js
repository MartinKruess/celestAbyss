import test from 'node:test';
import assert from 'node:assert/strict';
import { starterEncounter } from '../services/starterEncounter.js';
const base = { playerHealth: 100, enemyHealth: 20, playerDamage: 10, enemyDamage: 5, playerInterval: 1, enemyInterval: 1.5 };
test('A dead enemy cannot deliver its next scheduled attack', () => {
  const r = starterEncounter(base);
  assert.equal(r.winner, 'player'); assert.equal(r.durationSeconds, 2);
  assert.equal(r.playerHits, 2); assert.equal(r.enemyHits, 1); assert.equal(r.healthLost, 5);
});
test('Simultaneous lethal hits produce a trade, not arbitrary initiative', () => {
  const r = starterEncounter({ ...base, playerHealth: 5, enemyHealth: 10, enemyInterval: 1 });
  assert.equal(r.winner, 'bothDefeated'); assert.equal(r.enemyHits, 1);
});
test('Death stops player attacks and health loss is capped at starting health', () => {
  const r = starterEncounter({ ...base, playerHealth: 3, playerInterval: 3 });
  assert.equal(r.winner, 'enemy'); assert.equal(r.playerHits, 0); assert.equal(r.healthLost, 3);
});
test('Immunity is bounded by the timeout; malformed timings are rejected', () => {
  const r = starterEncounter({ ...base, playerDamage: 0, enemyDamage: 0, maximumSeconds: 5 });
  assert.equal(r.winner, 'timeout'); assert.equal(r.durationSeconds, 5);
  assert.throws(() => starterEncounter({ ...base, enemyInterval: 0 }), RangeError);
});
