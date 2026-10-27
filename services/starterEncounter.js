// Deterministic one-on-one auto-attack probe. First hits occur after one interval.
export function starterEncounter({ playerHealth, enemyHealth, playerDamage, enemyDamage, playerInterval, enemyInterval, maximumSeconds = 120 }) {
  if ([playerHealth, enemyHealth, playerInterval, enemyInterval, maximumSeconds].some(n => !Number.isFinite(n) || n <= 0)
    || [playerDamage, enemyDamage].some(n => !Number.isFinite(n) || n < 0)) throw new RangeError('Invalid starter encounter');
  let health = playerHealth, target = enemyHealth, playerHits = 0, enemyHits = 0, nextPlayer = playerInterval, nextEnemy = enemyInterval, time = 0;
  const events = [];
  while (health > 1e-9 && target > 1e-9) {
    time = Math.min(nextPlayer, nextEnemy);
    if (time > maximumSeconds + 1e-9) break;
    const playerDue = Math.abs(time - nextPlayer) < 1e-9, enemyDue = Math.abs(time - nextEnemy) < 1e-9;
    // Equal-time attacks both land; no implicit initiative advantage.
    if (playerDue) { target -= playerDamage; playerHits++; nextPlayer = (playerHits + 1) * playerInterval; }
    if (enemyDue) { health -= enemyDamage; enemyHits++; nextEnemy = (enemyHits + 1) * enemyInterval; }
    events.push({ time, playerHit: playerDue, enemyHit: enemyDue, playerHealth: Math.max(0, health), enemyHealth: Math.max(0, target) });
  }
  return { winner: health <= 1e-9 ? target <= 1e-9 ? 'bothDefeated' : 'enemy' : target <= 1e-9 ? 'player' : 'timeout',
    durationSeconds: Math.min(time, maximumSeconds), playerHits, enemyHits,
    damageTaken: enemyHits * enemyDamage, healthLost: playerHealth - Math.max(0, health),
    healthLostPercent: (playerHealth - Math.max(0, health)) / playerHealth * 100,
    finalPlayerHealth: Math.max(0, health), finalEnemyHealth: Math.max(0, target), events };
}
