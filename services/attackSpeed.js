// Stored speed remains a fraction: 1 = 100 raw rating points.
// Apply diminishing returns once, after equipment, attributes and buffs stack.
export const meleeAttackSpeedSettings = Object.freeze({
  baseActionsPerSecond: 1.3,
  maximumActionsPerSecond: 2,
  capRating: 350,
  kneeRating: 110,
});

const kneeEffective = 109.5;
const kneeSlope = 0.9;
const capEffective = 100 * 2 / 1.3;
// Calibrate the logarithmic tail to reach the cap at 350 raw points.
let low = 0, high = 1;
for (let i = 0; i < 100; i++) {
  const k = (low + high) / 2;
  const gain = kneeSlope * Math.log1p(k * 240) / k;
  if (gain > capEffective - kneeEffective) low = k;
  else high = k;
}
const tailStrength = (low + high) / 2;

export function effectiveMeleeAttackSpeedRating(rating) {
  if (!Number.isFinite(rating)) throw new TypeError('Attack speed rating must be finite');
  if (rating <= 100) return rating;
  if (rating >= meleeAttackSpeedSettings.capRating) return capEffective;
  if (rating <= 110) {
    const bonus = rating - 100;
    return 100 + bonus - 0.005 * bonus * bonus;
  }
  return kneeEffective + kneeSlope * Math.log1p(tailStrength * (rating - 110)) / tailStrength;
}

export function meleeAutoAttackInterval(rawSpeedFraction, baseActionsPerSecond = 1.3) {
  const effective = effectiveMeleeAttackSpeedRating(rawSpeedFraction * 100);
  return Math.max(0.5, 1 / (baseActionsPerSecond * Math.max(0.01, effective / 100)));
}

// Every player class uses the same rating curve; its base frequency stays class-specific.
export const effectiveAttackSpeedRating = effectiveMeleeAttackSpeedRating;
export const autoAttackInterval = meleeAutoAttackInterval;

// Internal speed accumulators use 1 = 100 raw points, before any speed curve.
// Explicit point bonuses must be normalized once, rather than added as multipliers.
export function normalizedSpeedBonus(skill,stat,value){
 if(['atkSpeed','movementSpeed'].includes(stat)&&skill.statBonusUnits?.[stat]==='ratingPoints')return value/100;
 return value;
}
