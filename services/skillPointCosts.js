import {learnableSkillLevel} from './skillLearningLimits.js';

export function firstSkillPointCost(skill, classKey) {
  const costs = skill.skillPointCosts;
  const ranks = skillPointCostRanks(skill, classKey);
  if(ranks) return ranks[0];
  const overrides = costs?.classOverrides;
  return (overrides instanceof Map ? overrides.get(classKey) : overrides?.[classKey]) ?? costs?.firstLevel ?? null;
}

export function skillPointCostRanks(skill, classKey) {
  const costs=skill.skillPointCosts;
  const overrides=costs?.classRankCosts;
  return (overrides instanceof Map?overrides.get(classKey):overrides?.[classKey]) ?? costs?.rankCosts ?? null;
}

export function skillPointCostAtLevel(skill, learnedLevel, classKey) {
  if (!Number.isInteger(learnedLevel) || learnedLevel < 1 || learnedLevel > learnableSkillLevel(skill, classKey)) throw new RangeError('Invalid skill level');
  const ranks=skillPointCostRanks(skill,classKey);
  if(ranks) return ranks[learnedLevel-1] ?? null;
  if (learnedLevel === 1) return firstSkillPointCost(skill, classKey);
  // No legacy flat cost or unapproved doubling is inferred for later ranks.
  return null;
}

export function starterSkillPointCostUpdates(catalog, rules, plan) {
  const updates = new Map();
  function get(nr) {
    if (!updates.has(nr)) {
      const skill = catalog.find(s => s.nr === nr);
      if (!skill) throw new Error(`Unknown skill ${nr}`);
      updates.set(nr, structuredClone(skill));
    }
    return updates.get(nr);
  }
  for (const [nr, cost] of Object.entries(rules.sharedFirstLevelCosts)) {
    const s = get(Number(nr));
    s.skillPointCosts = {...s.skillPointCosts, firstLevel: cost, furtherLevelsStatus: 'pending', version: rules.version};
  }
  for (const [key, first] of Object.entries(plan.classFirstAttacks)) {
    if (!first) continue;
    const s = get(first.nr);
    s.skillPointCosts = {...s.skillPointCosts, classOverrides: {...s.skillPointCosts?.classOverrides, [key === 'rogue' ? 'villian' : key]: rules.firstAttackCost}, furtherLevelsStatus: 'pending', version: rules.version};
  }
  for (const old of plan.replacedFirstAttacks ?? []) {
    if (plan.classFirstAttacks[old.classKey]?.nr === old.nr) continue;
    const s = get(old.nr);
    if (s.skillPointCosts?.classOverrides?.[old.classKey] === rules.firstAttackCost) {
      delete s.skillPointCosts.classOverrides[old.classKey];
      if (!Object.keys(s.skillPointCosts.classOverrides).length) delete s.skillPointCosts.classOverrides;
    }
  }
  return [...updates.values()];
}
