// These definitions are numerical templates, not spawned creature instances.
// Resolve plain records (e.g. lean MongoDB results); no implicit attribute conversion.
export function resolveCreatureTemplate(base, layers = [], level = 1) {
  if (base.kind !== 'base' || base.statResolution !== 'independentValuesNoAutomaticAttributeConversion') throw TypeError('Unsupported creature base');
  const referenceLevel = base.levelGrowth.referenceLevel;
  if (!Number.isInteger(level) || level < referenceLevel || level > base.levelGrowth.maximumPreviewLevel) throw RangeError('Invalid creature preview level');
  if (base.levelGrowth.mode !== 'compoundPerLevel') throw TypeError('Unsupported creature growth mode');
  const enabled = {...base.enabledStats}, units = {...base.statUnits}, capabilities = {...base.capabilities};
  const growth = {...base.levelGrowth.statFactors};
  const regenerationRules = {...base.regenerationRules};
  const resourceRules = {mana: {...base.resourceRules?.mana}, stamina: {...base.resourceRules?.stamina}};
  const experienceBase = base.rewards.experienceOnKill.base;
  let experienceMultiplier = 1, experienceGrowth = base.rewards.experienceOnKill.levelFactor;
  const multipliers = Object.fromEntries(Object.keys(base.baseStats).map(key => [key, 1]));
  const chain = [base, ...layers];
  for (let index = 0; index < chain.length; index++) {
    const layer = chain[index];
    Object.assign(regenerationRules, layer.regenerationRules ?? {});
    for (const resource of ['mana', 'stamina']) Object.assign(resourceRules[resource], layer.resourceRules?.[resource] ?? {});
    if (index && layer.parentKey !== chain[index - 1].key) throw Error('Broken creature inheritance chain');
    const experience = layer.rewards?.experienceOnKill;
    if (index && Object.hasOwn(experience ?? {}, 'base')) throw Error('Variants use relative XP modifiers, not copied reward bases');
    if (experience?.multiplier !== undefined) {
      if (!Number.isFinite(experience.multiplier) || experience.multiplier < 0) throw RangeError('Invalid XP multiplier');
      experienceMultiplier *= experience.multiplier;
    }
    if (experience?.levelFactor !== undefined) {
      if (!Number.isFinite(experience.levelFactor) || experience.levelFactor <= 0) throw RangeError('Invalid XP growth');
      experienceGrowth = experience.levelFactor;
    }
    if (index && Object.keys(layer.baseStats ?? {}).length) throw Error('Variants use relative modifiers, not copied base stats');
    if (index && (layer.statResolution && layer.statResolution !== base.statResolution
      || layer.levelGrowth?.mode && layer.levelGrowth.mode !== base.levelGrowth.mode
      || layer.levelGrowth?.referenceLevel && layer.levelGrowth.referenceLevel !== referenceLevel)) throw Error('Incompatible inherited creature rules');
    for (const [key, factor] of Object.entries(layer.statMultipliers ?? {})) {
      if (!Object.hasOwn(multipliers, key) || !Number.isFinite(factor) || factor < 0) throw RangeError('Invalid creature stat multiplier');
      multipliers[key] *= factor;
    }
    for (const [key, factor] of Object.entries(layer.levelGrowth?.statFactors ?? {})) {
      if (!Object.hasOwn(multipliers, key) || !Number.isFinite(factor) || factor <= 0) throw RangeError('Invalid creature growth factor');
      growth[key] = factor;
    }
    for (const [key, value] of Object.entries(layer.enabledStats ?? {})) {
      if (!Object.hasOwn(multipliers, key) || typeof value !== 'boolean') throw TypeError('Invalid enabled stat');
      enabled[key] = value;
    }
    for (const [key, value] of Object.entries(layer.capabilities ?? {})) {
      if (!Object.hasOwn(capabilities, key) || typeof value !== 'boolean') throw TypeError('Invalid creature capability');
      capabilities[key] = value;
    }
    // Explicit null removes a body assignment; an absent key inherits it.
    if (layer.statUnits) for (const [key, value] of Object.entries(layer.statUnits)) {
      if (units[key] !== value) throw Error('Inherited stat units must remain unchanged');
    }
  }
  const rawStats = {}, stats = {};
  for (const [key, initial] of Object.entries(base.baseStats)) {
    const value = initial * multipliers[key] * (growth[key] ?? 1) ** (level - referenceLevel);
    if (!Number.isFinite(value) || value < 0) throw RangeError('Nonfinite creature stat');
    rawStats[key] = value;
    let effective = enabled[key] === false ? 0 : value;
    if (units[key] === 'percentagePoints') effective /= 100;
    if (['maxHealth', 'maxMana', 'maxStamina'].includes(key)) effective = Math.round(effective);
    stats[key] = effective;
  }
  const lastWith = key => [...chain].reverse().find(layer => Object.hasOwn(layer, key));
  const experienceOnKill = experienceBase * experienceMultiplier * experienceGrowth ** (level - referenceLevel);
  if (!Number.isFinite(experienceOnKill) || experienceOnKill < 0) throw RangeError('Invalid kill experience');
  return {key: chain.at(-1).key, level, sourceKeys: chain.map(x => x.key), rawStats, stats, capabilities,
    rawRewards: {experienceOnKill}, rewards: {experienceOnKill: Math.round(experienceOnKill)},
    bodyTemplateKey: lastWith('bodyTemplateKey')?.bodyTemplateKey ?? null,
    skillNumbers: [...(lastWith('skillNumbers')?.skillNumbers ?? [])],
    spawnable: lastWith('spawnable')?.spawnable ?? false,
    statUnits: units, regenerationRules, resourceRules,
    statResolution: base.statResolution};
}
