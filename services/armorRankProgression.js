// Defense is stored in integer hundredths while constructing the rank series.
export function armorRanksFromAnchor(raw, growthPercentages = [77, 75, 73, 71, 69]) {
  if (growthPercentages.length !== 5 || growthPercentages.some(p => !Number.isSafeInteger(p) || p <= 0)) throw new RangeError('Invalid rank curve');
  const result = Array.from({ length: 6 }, () => ({}));
  for (const field of ['physicalDefense', 'magicalDefense']) {
    if (!Number.isFinite(raw[field]) || raw[field] < 0) throw new RangeError('Invalid anchor defense');
    let cents = Math.round(raw[field] * 100);
    if (!Number.isSafeInteger(cents) || Math.abs(cents / 100 - raw[field]) > 1e-9) throw new RangeError('Anchor must have at most two decimal places');
    result[5][field] = cents / 100;
    for (let rank = 4; rank >= 0; rank--) {
      const divisor = BigInt(100 + growthPercentages[rank]);
      cents = Number((BigInt(cents) * 200n + divisor) / (divisor * 2n));
      result[rank][field] = cents / 100;
    }
  }
  return result;
}

export function sumArmorDefense(parts, field) {
  return parts.reduce((sum, p) => sum + Math.round(p.raw[field] * 100), 0) / 100;
}
