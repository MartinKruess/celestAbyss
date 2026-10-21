// Filter before weighted selection; normalize weights over this eligible pool only.
export function eligibleEquipmentAffixes(pool, {category, equipmentSlot, rank, weaponType}, selectedStats = []) {
  const alreadySelected = new Set(selectedStats);
  return pool.filter(entry =>
    !alreadySelected.has(entry.stat) &&
    (entry.minimumEquipmentRank === undefined || (Number.isInteger(rank) && rank >= entry.minimumEquipmentRank)) &&
    (!entry.allowedItemCategories || entry.allowedItemCategories.includes(category)) &&
    (!entry.allowedWeaponTypes || entry.allowedWeaponTypes.includes(weaponType)) &&
    (!entry.allowedEquipmentSlots || entry.allowedEquipmentSlots.includes(equipmentSlot))
  );
}

// Scale random affixes only. Caller provides handedness from the weapon definition.
export function weaponAffixValue(fullValue, stat, {weaponType, handedness}) {
  if (!Number.isFinite(fullValue)) throw new TypeError('Affix value must be finite');
  if (stat === 'block') {
    if (weaponType !== 'Shield') throw new RangeError('Block affix requires a shield');
    return fullValue;
  }
  if (weaponType === 'Shield' || handedness === 1) return fullValue * 0.5;
  if (handedness === 2) return fullValue;
  throw new RangeError('Weapon handedness is required');
}
