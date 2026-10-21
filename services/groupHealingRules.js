export function healingFromSpentMana(skill, actualManaSpent) {
  if (!Number.isFinite(actualManaSpent) || actualManaSpent < 0) throw new RangeError('Spent Mana must be finite and nonnegative');
  const effect = skill.effects?.find(effect => effect.type === 'heal' && effect.healingFromSpentMana);
  if (!effect) throw new RangeError('No spent-Mana healing rule');
  return effect.value + effect.healingFromSpentMana.multiplier * actualManaSpent;
}

export function etherRainTargetCount(groupMembersInArea, enemiesInArea) {
  for (const count of [groupMembersInArea, enemiesInArea]) {
    if (!Number.isSafeInteger(count) || count < 0) throw new RangeError('Area participant counts must be nonnegative integers');
  }
  return Math.min(groupMembersInArea, enemiesInArea);
}
