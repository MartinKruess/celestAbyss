// Local lateral position of the character reference point, relative to wave center.
// Caller checks longitudinal extent and hit eligibility separately.
export function waveDamageMultiplier(skill, lateralPositionMeters) {
  if (!Number.isFinite(lateralPositionMeters)) throw new TypeError('Target position must be finite');
  const width = skill.attackArea?.widthMeters;
  const profile = skill.waveDamageProfile;
  if (!(width > 0) || profile?.edgeWidthStatus !== 'defined') throw new RangeError('Wave zone widths must be defined');
  const leftBoundary = -width / 2 + width * profile.leftWidthFraction;
  const rightBoundary = width / 2 - width * profile.rightWidthFraction;
  if (lateralPositionMeters < -width / 2 || lateralPositionMeters > width / 2) return 0;
  return lateralPositionMeters >= leftBoundary && lateralPositionMeters <= rightBoundary
    ? profile.centerDamageMultiplier : profile.edgeDamageMultiplier;
}
