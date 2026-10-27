// Called once per regeneration tick. Scheduling and AI state transitions belong
// to the authoritative game loop; this helper never resets a creature's state.
export function creatureRegenerationTick(creature, {health, mana, inCombat = false, returning = false}) {
  const s = creature.stats, rules = creature.regenerationRules;
  for (const value of [health, mana, s.maxHealth, s.maxMana]) if (!Number.isFinite(value) || value < 0) throw RangeError('Invalid creature resource');
  if (!(rules.tickIntervalSeconds > 0)) throw RangeError('Invalid regeneration interval');
  // Dead creatures never recover, even when flagged as returning.
  if (health === 0) return {health: 0, mana: Math.min(mana, s.maxMana), healthRestored: 0, manaRestored: 0};
  const currentHealth = Math.min(health, s.maxHealth), currentMana = Math.min(mana, s.maxMana);
  const canHeal = !inCombat || rules.healthInCombat === true || returning && rules.healthWhileReturning === true;
  const canRestoreMana = creature.resourceRules.mana.mode === 'consumeMana';
  const restore = (stat, maximum, allowed) => {
    if (!allowed || !s[stat]) return 0;
    if (creature.statUnits[stat] !== 'fractionOfMaxPerTick') throw TypeError('Creature regeneration needs percentage units');
    if (!Number.isFinite(s[stat]) || s[stat] < 0) throw RangeError('Invalid regeneration fraction');
    return maximum * s[stat];
  };
  // Retain fractions between ticks, rather than losing small heals to rounding.
  const nextHealth = Math.min(s.maxHealth, currentHealth + restore('healthRegen', s.maxHealth, canHeal));
  const nextMana = Math.min(s.maxMana, currentMana + restore('manaRegen', s.maxMana, canRestoreMana));
  return {health: nextHealth, mana: nextMana, healthRestored: nextHealth - currentHealth, manaRestored: nextMana - currentMana};
}

// Mana policy does not waive cooldowns or any unrelated ability requirements.
export function creatureManaAndCooldownCheck(creature, {mana, nominalManaCost = 0, remainingCooldownSeconds = 0}) {
  for (const value of [mana, nominalManaCost, remainingCooldownSeconds]) if (!Number.isFinite(value) || value < 0) throw RangeError('Invalid ability resource or cooldown');
  const mode = creature.resourceRules.mana.mode;
  if (!['cooldownOnly', 'consumeMana'].includes(mode)) throw TypeError('Unknown creature Mana mode');
  const manaCost = mode === 'cooldownOnly' ? 0 : nominalManaCost;
  return {manaCost, ready: remainingCooldownSeconds === 0 && mana >= manaCost};
}

export function incomingHitCanInterruptCreatureReturn(creature) {
  return creature.regenerationRules.returnInterruptedByIncomingHits === true;
}
