import fs from 'node:fs';

export const experienceRules = JSON.parse(fs.readFileSync(new URL('../data/balancing/experience-rules.json', import.meta.url), 'utf8'));

function validateLevel(level, rules) {
  if (!Number.isInteger(level) || level < 1 || level > rules.maximumLevel) throw new RangeError('Level outside defined experience curve');
}

// Design reference for L -> L+1, not a promise about a particular player's pace.
export function referenceLevelHours(level, rules = experienceRules) {
  validateLevel(level, rules);
  if (level === rules.maximumLevel) return null;
  const {baseHours, quadraticHours, starterDecay} = rules.timeCurve;
  return (baseHours + quadraticHours * (level - 1) ** 2) * (1 - starterDecay ** level);
}

export function referenceHoursToLevel(level, rules = experienceRules) {
  validateLevel(level, rules);
  let hours = 0;
  for (let current = 1; current < level; current++) hours += referenceLevelHours(current, rules);
  return hours;
}

// Reward and effective kill-rate curves must be selected explicitly before seeding.
export function referenceExperienceRate(level, rules = experienceRules) {
  validateLevel(level, rules);
  const reward = rules.rewardReference;
  if (reward.status !== 'defined') throw new Error('Monster reward reference has not been selected');
  const rawLevelXp = reward.baseXp * reward.levelFactor ** (level - 1);
  const levelXp = reward.roundMonsterXp ? Math.round(rawLevelXp) : rawLevelXp;
  const kills = reward.killsPerHour;
  const killsPerHour = typeof kills === 'number' ? kills : Math.min(kills.cap, kills.base * kills.levelFactor ** (level - 1));
  if (!Number.isFinite(levelXp) || levelXp <= 0 || !Number.isFinite(killsPerHour) || killsPerHour <= 0) throw new RangeError('Invalid experience reference');
  return {monsterXp: levelXp, killsPerHour, xpPerHour: levelXp * killsPerHour};
}

export function buildExperienceLevels(rules = experienceRules) {
  const rows = [];
  let cumulativeXp = 0;
  let hours = 0;
  for (let level = 1; level <= rules.maximumLevel; level++) {
    const nextHours = referenceLevelHours(level, rules);
    const neededXp = nextHours === null ? null : Math.max(1, Math.round(nextHours * referenceExperienceRate(level, rules).xpPerHour));
    if (!Number.isSafeInteger(cumulativeXp) || (neededXp !== null && !Number.isSafeInteger(neededXp))) throw new RangeError('Experience exceeds safe integer precision');
    rows.push({level, maximumLevel: level === rules.maximumLevel, neededXp, cumulativeXp, referenceHoursToNextLevel: nextHours, referenceCumulativeHours: hours, rulesVersion: rules.version});
    if (neededXp !== null) cumulativeXp += neededXp;
    if (nextHours !== null) hours += nextHours;
  }
  return rows;
}

// Caller supplies the server-validated learned level of skill 138. Class caps and
// learning requirements are enforced by the existing skill-learning system.
export function petExperienceGain(playerXp, learnedBreedLevel, rules = experienceRules) {
  if (!Number.isSafeInteger(playerXp) || playerXp < 0) throw new RangeError('Player XP award must be a nonnegative safe integer');
  const pet = rules.petExperience;
  if (pet.status !== 'defined') throw new Error('Pet experience policy has not been selected');
  if (!Number.isInteger(learnedBreedLevel) || !Object.hasOwn(pet.gainMultiplierByLearnedBreedLevel, learnedBreedLevel)) throw new RangeError('Invalid learned Breed level');
  const hundredths = playerXp * Math.round(pet.gainMultiplierByLearnedBreedLevel[learnedBreedLevel] * 100);
  if (!Number.isSafeInteger(hundredths)) throw new RangeError('Pet XP award exceeds safe precision');
  return hundredths / 100;
}
