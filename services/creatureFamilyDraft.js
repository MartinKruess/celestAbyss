import {autoAttackInterval} from './attackSpeed.js';

export function familyDraftStats(template, level, model, {attributeBonuses = {}, profileFactor = 1, statScales = {}} = {}) {
  if (!Number.isInteger(level) || level < 1 || level > 100) throw RangeError('Draft level must be an integer from 1 to 100');
  if (!Number.isFinite(profileFactor) || profileFactor <= 0) throw RangeError('Invalid profile factor');
  const attributes = Object.fromEntries(Object.entries(template.attributesLevelOne).map(([key, base]) => {
    const value = base + (level - 1) * (template.attributeGainPerLevel[key] ?? 0) + (attributeBonuses[key] ?? 0);
    if (!Number.isFinite(value) || value < 0) throw RangeError('Invalid creature attribute');
    return [key, value];
  }));
  const stats = {maxHealth: 0, maxMana: 0, physicalAttack: 0, magicalAttack: 0, physicalDefense: 0, magicalDefense: 0,
    attackSpeed: 1, movementSpeed: 1, accuracy: 0, dodge: 0, critChanceRating: 0, penetration: 0, healthRegen: 0, manaRegen: 0};
  for (const rule of model.conversions) {
    if (rule.status !== 'confirmedFactor' || !Number.isFinite(rule.amountPerPoint) || !Object.hasOwn(stats, rule.target)) continue;
    if (['physicalAttack', 'magicalAttack'].includes(rule.target) && rule.attribute !== template.offensiveAttribute) continue;
    stats[rule.target] += (attributes[rule.attribute] ?? 0) * rule.amountPerPoint / (rule.unit === 'percentagePoints' ? 100 : 1);
  }
  for (const key of ['maxHealth', 'maxMana', 'physicalAttack', 'magicalAttack', 'physicalDefense', 'magicalDefense']) stats[key] *= profileFactor;
  for (const [key, scale] of Object.entries(statScales)) {
    if (!Object.hasOwn(stats, key) || !Number.isFinite(scale.referenceValue) || scale.referenceValue <= 0 || !Number.isFinite(scale.targetValue) || scale.targetValue < 0) throw RangeError('Invalid target/reference scale');
    stats[key] = stats[key] * scale.targetValue / scale.referenceValue;
  }
  // Round only final resource pools; retain precision for damage and conversions.
  stats.maxHealth = Math.round(stats.maxHealth);
  stats.maxMana = Math.round(stats.maxMana);
  return {level, attributes, stats};
}

export function rawPetAutoProbe(stats, template, {duration = 600, targetHealth = 10000000} = {}) {
  if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(targetHealth) || targetHealth <= 0) throw RangeError('Invalid probe target or duration');
  const interval = autoAttackInterval(stats.attackSpeed, template.baseAttacksPerSecond);
  const damagePerHit = template.damageType === 'magical' ? stats.magicalAttack : stats.physicalAttack;
  if (!Number.isFinite(damagePerHit) || damagePerHit < 0) throw RangeError('Invalid pet damage');
  const maximumHits = Math.floor((duration + 1e-9) / interval);
  const hits = damagePerHit ? Math.min(maximumHits, Math.ceil(targetHealth / damagePerHit)) : maximumHits;
  const totalDamage = hits * damagePerHit;
  return {duration, targetHealth, interval, attacks: hits, damagePerHit, totalDamage, damagePerSecond: totalDamage / duration,
    targetDeathAt: totalDamage >= targetHealth ? hits * interval : null};
}
