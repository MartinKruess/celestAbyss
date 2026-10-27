import { readFileSync } from 'node:fs';
const rules = JSON.parse(readFileSync(new URL('../data/balancing/equipment-upgrade-rules.json', import.meta.url), 'utf8'));

export function optimalEquipmentReference(level) {
  const p = rules.optimalProgression;
  if (!Number.isSafeInteger(level) || level < p.firstCharacterLevel) throw new RangeError('Optimal equipment progression is defined from level 40');
  const offset = Math.min(Math.floor((level - p.firstCharacterLevel) / p.levelsPerRank), p.maximumEquipmentRank - p.firstEquipmentRank);
  const rank = p.firstEquipmentRank + offset;
  const rankStartLevel = p.firstCharacterLevel + offset * p.levelsPerRank;
  const elapsed = Math.min(level - rankStartLevel, p.levelsFromRankUnlockToPlus10);
  const upgrade = Math.min(p.maximumUpgrade, Math.floor(elapsed * p.maximumUpgrade / p.levelsFromRankUnlockToPlus10));
  return { level, rank, rankStartLevel, upgrade };
}

export function equipmentUpgradeRule(rank, upgrade = 0) {
  if (!Number.isInteger(rank) || !rules.ranks[rank]) throw new RangeError('Unknown equipment rank');
  const rule = rules.ranks[rank];
  if (!Number.isInteger(upgrade) || upgrade < 0 || upgrade > rule.maximumUpgrade) throw new RangeError('Invalid equipment upgrade level');
  if (upgrade && rule.basisPointsPerUpgrade === null) throw new RangeError('R2 tutorial upgrade percentage is not defined');
  return { ...rule };
}

export function upgradedEquipmentValue(baseValue, rank, upgrade = 0) {
  const rule = equipmentUpgradeRule(rank, upgrade);
  const cents = Math.round(baseValue * 100);
  if (!Number.isFinite(baseValue) || baseValue < 0 || !Number.isSafeInteger(cents) || Math.abs(cents / 100 - baseValue) > 1e-8)
    throw new RangeError('Equipment base value must be nonnegative with at most two decimal places');
  const factor = 10000 + upgrade * (rule.basisPointsPerUpgrade ?? 0);
  const result = (BigInt(cents) * BigInt(factor) + 5000n) / 10000n;
  if (result > BigInt(Number.MAX_SAFE_INTEGER)) throw new RangeError('Upgraded equipment value exceeds precision limits');
  return Number(result) / 100;
}

export function upgradedArmorDefense(raw, rank, upgrade = 0) {
  equipmentUpgradeRule(rank, upgrade);
  return Object.fromEntries(Object.entries(raw).map(([stat, value]) => [stat,
    ['physicalDefense', 'magicalDefense'].includes(stat) ? upgradedEquipmentValue(value, rank, upgrade) : value]));
}

export function upgradedWeaponBonuses(raw, rank, upgrade = 0) {
  equipmentUpgradeRule(rank, upgrade);
  return raw.map(b => ({ ...b, value: ['P.Ang', 'M.Ang', 'P.Deff', 'M.Deff'].includes(b.label)
    ? upgradedEquipmentValue(b.value, rank, upgrade) : b.value }));
}

// Apply only the extra direct base values, before or after separately added gems/affixes.
export function applyLoadoutUpgrades(pre, { rank, upgrade = 0, equipment, armorDefinition, armorClass }) {
  equipmentUpgradeRule(rank, upgrade);
  if (!upgrade) return pre;
  const parts = armorDefinition?.parts.filter(p => p.sourceClass === armorClass && p.rank === rank);
  if (!parts || parts.length !== 5) throw new Error('Five individual armor parts are required for upgrade rounding');
  for (const part of parts) {
    const improved = upgradedArmorDefense(part.raw, rank, upgrade);
    for (const stat of ['physicalDefense', 'magicalDefense']) pre.stats[stat] += improved[stat] - part.raw[stat];
  }
  const names = { 'P.Ang': 'physicalAttack', 'M.Ang': 'magicalAttack', 'P.Deff': 'physicalDefense', 'M.Deff': 'magicalDefense' };
  for (const [i, name] of pre.weapons.entries()) {
    const weapon = equipment.weapons.find(w => w.name === name && w.rank === rank);
    if (!weapon) throw new Error('Missing weapon definition');
    const improved = upgradedWeaponBonuses(weapon.raw, rank, upgrade);
    const efficiency = i === 1 && ['gladiator', 'villian', 'shaman'].includes(pre.key) ? .9 : 1;
    for (const [j, b] of improved.entries()) if (names[b.label])
      pre.stats[names[b.label]] += (b.value - weapon.raw[j].value) * (names[b.label].endsWith('Attack') ? efficiency : 1);
  }
  return pre;
}
