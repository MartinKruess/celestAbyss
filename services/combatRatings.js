import fs from 'node:fs';

export const combatRatingModel = JSON.parse(fs.readFileSync(new URL('../data/balancing/combat-rating-model.json', import.meta.url), 'utf8'));

export function combatRatingChance(stat, rating, model = combatRatingModel) {
  const settings = model.ratings[stat];
  if (!settings) throw new RangeError(`Unknown combat rating: ${stat}`);
  if (!Number.isFinite(rating)) throw new TypeError('Combat rating must be finite');
  const capped = Math.min(settings.capRating, Math.max(0, rating));
  // Normalize the diminishing curve so the configured ceiling is reached at the cap.
  return settings.maximum * (capped / (settings.scale + capped))
    / (settings.capRating / (settings.scale + settings.capRating));
}

export function resolveCombatRatings(stats, model = combatRatingModel) {
  return Object.fromEntries(Object.keys(model.ratings).map(stat => [stat, combatRatingChance(stat, stats[stat] ?? 0, model)]));
}
