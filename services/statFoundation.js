// Migration of the verified naked class references, not of geared simulation totals.
export const primaryAttributes = ['vitality', 'strength', 'intelligence', 'wisdom', 'dexterity', 'agility', 'luck'];

export function createStatFoundation(template, attributeGrowth) {
  const base = template.baseStats instanceof Map ? Object.fromEntries(template.baseStats) : template.baseStats;
  if (!base || primaryAttributes.some(key => Object.hasOwn(base, key))) {
    throw new Error('Legacy starting attribute contributions must be reviewed before migration');
  }
  if (Object.values(base).some(v => typeof v !== 'number' || !Number.isFinite(v) || v < 0)
    || !(base.maxHealth > 0) || !(base.maxMana >= 0)) throw new Error('Invalid naked class reference');
  if (!attributeGrowth || Object.entries(attributeGrowth).some(([k, v]) => !primaryAttributes.includes(k)
    || typeof v !== 'number' || !Number.isFinite(v) || v < 0)) throw new Error('Invalid attribute growth');
  const directStats={...base};
  for(const key of ['accuracy','dodge','critChanceRating','block','penetration'])directStats[key]??=0;
  return { version: 2, baseLevel: 1, directStats,
    attributes: Object.fromEntries(primaryAttributes.map(key => [key, 0])), attributeGrowth: { ...attributeGrowth } };
}
