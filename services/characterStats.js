import fs from 'node:fs';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';
import { PlayerExperienceLevelModel } from '../models/experienceLevelSchema.js';
import { characterError } from './characterPolicy.js';

const growth = JSON.parse(fs.readFileSync(new URL('../data/balancing/class-base-growth.json', import.meta.url), 'utf8'));
const experience = JSON.parse(fs.readFileSync(new URL('../data/balancing/player-experience-levels.json', import.meta.url), 'utf8'));
// Read compatibility for the retired Knife typo; new characters use Knight.
const aliases = { Druide: 'druid', Shamane: 'shaman', Knife: 'knight', knife: 'knight' };
export const canonicalStatClass = key => aliases[key] || String(key).toLowerCase();
const primary = ['vitality', 'strength', 'intelligence', 'wisdom', 'dexterity', 'agility', 'luck'];
const labels = { vitality: 'Vitalität', strength: 'Stärke', intelligence: 'Intelligenz', wisdom: 'Willenskraft',
  dexterity: 'Geschicklichkeit', agility: 'Agilität', luck: 'Glück', maxHealth: 'Max HP', maxMana: 'Max Mana',
  physicalAttack: 'Physischer Angriff', magicalAttack: 'Magischer Angriff', physicalDefense: 'Physische Verteidigung',
  magicalDefense: 'Magische Verteidigung', attackSpeed: 'Angriffstempo', movementSpeed: 'Bewegungstempo',
  accuracy: 'Trefferwertung', dodge: 'Ausweichwertung', critChanceRating: 'Kritische Trefferwertung',
  criticalDamageBonus: 'Kritischer Schaden', block: 'Blockwertung', penetration: 'Durchdringung',
  healthRegen: 'HP-Regeneration', manaRegen: 'Mana-Regeneration', maxStamina: 'Max Ausdauer' };
const fail = () => { throw characterError('CLASS_STATS_NOT_CONFIGURED', 503); };
const finite = n => typeof n === 'number' && Number.isFinite(n) && Math.abs(n) <= 1e12;

export function buildCharacterStatProfile(template, level, experienceRows = experience.levels || experience.rows || experience) {
  if (!template || !Number.isInteger(level) || level < 1 || level > experience.rules.maximumLevel) return fail();
  const key = template.key, model = template.statConversions?.defaults;
  const foundation = template.statFoundation;
  if (foundation?.version !== 2 || foundation.baseLevel !== 1) return fail();
  const plain = value => value instanceof Map ? Object.fromEntries(value) : value;
  const base = plain(foundation.directStats);
  const attributes = plain(foundation.attributes);
  const attributeGrowth = plain(foundation.attributeGrowth);
  if (!attributes || !attributeGrowth || Object.keys(base || {}).some(k => primary.includes(k))
    || Object.entries(attributes).some(([k, v]) => !primary.includes(k) || !finite(v) || v < 0)
    || Object.entries(attributeGrowth).some(([k, v]) => !primary.includes(k) || !finite(v) || v < 0)) return fail();
  if (!base || !model || !Array.isArray(model.conversions) || !finite(base.maxHealth) || base.maxHealth <= 0
    || !finite(base.maxMana) || base.maxMana < 0 || !Array.isArray(growth.classes) || !growth.classes.some(c => c.key === key)) return fail();
  const notices = [];
  if (Object.entries(base).some(([stat, value]) => !labels[stat] || !finite(value) || value < 0)) return fail();
  const stats = Object.entries(base).filter(([stat]) => labels[stat] && !primary.includes(stat)).map(([stat, value]) => ({ key: stat, label: labels[stat], value, known: true, attribute: false }));
  for (const stat of ['accuracy','dodge','critChanceRating','criticalDamageBonus','block','penetration','healthRegen','manaRegen']) {
    if (!stats.some(s => s.key === stat)) {
      const configured = stat === 'healthRegen' ? template.regeneration?.baseHealthPerTick : stat === 'manaRegen' ? template.regeneration?.baseManaPerTick : stat === 'criticalDamageBonus' ? model.criticalHitRules?.baseDamageBonus : 0;
      if (configured !== undefined && !finite(configured)) return fail();
      stats.push({ key: stat, label: labels[stat], value: configured ?? 0, known: configured !== undefined, attribute: false });
    }
  }
  // Independent inputs: direct values never include attribute conversions or equipment.
  const missing = [];
  for (const stat of primary) {
    const known = Object.hasOwn(attributes, stat);
    stats.push({ key: stat, label: labels[stat], value: known ? attributes[stat] : 0, known, attribute: true });
    if (!known) missing.push(labels[stat]);
  }
  if (missing.length) notices.push(`Attributbasis offen fuer ${missing.join(', ')}; dort werden bekannte Zusaetze ausgewiesen.`);
  const eligible = model.offensiveAttributeEligibility?.confirmedMatchingAttributes?.[key];
  if (!eligible) notices.push('Offensive Attributzuordnung fuer diese Klasse ist noch nicht bestaetigt; keine Vergleichsannahmen aktiviert.');
  const conversions = [];
  for (const rule of model.conversions) {
    if (!primary.includes(rule.attribute) || rule.status !== 'confirmedFactor' || !finite(rule.amountPerPoint) || !labels[rule.target]) continue;
    if (['physicalAttack','magicalAttack'].includes(rule.target) && !eligible?.includes(rule.attribute)) continue;
    let factor = rule.amountPerPoint;
    if (rule.attribute === 'strength' && rule.target === 'physicalAttack') factor *= model.strengthAttackClassModifiers?.classMultipliers?.[key] ?? 1;
    if (rule.attribute === 'intelligence' && rule.target === 'magicalAttack') factor *= model.intelligenceAttackClassModifiers?.classMultipliers?.[key] ?? 1;
    if (rule.attribute === 'vitality') factor *= model.vitalityClassModifiers?.classTargetMultipliers?.[key]?.[rule.target] ?? (model.vitalityClassModifiers?.targets?.includes(rule.target) ? model.vitalityClassModifiers?.classMultipliers?.[key] ?? 1 : 1);
    if (rule.attribute === 'wisdom') factor *= model.wisdomClassModifiers?.classTargetMultipliers?.[key]?.[rule.target] ?? 1;
    if (rule.unit === 'percentagePoints') factor /= 100;
    if (!finite(factor)) return fail();
    conversions.push({ attribute: rule.attribute, target: rule.target, factor });
  }
  const row = Array.isArray(experienceRows) ? experienceRows.find(r => r.level === level) : null;
  if (!row || (level < experience.rules.maximumLevel && (!Number.isSafeInteger(row.neededXp) || row.neededXp <= 0))) return fail();
  return { version: 2, classKey: key, baseLevel: foundation.baseLevel,
    regenerationIntervalSeconds: template.regeneration?.tickIntervalSeconds ?? 0,
    baseValues: stats.filter(s => !s.attribute), baseAttributes: stats.filter(s => s.attribute), conversions,
    growth: Object.entries(attributeGrowth).map(([key, perLevel]) => ({ key, perLevel })),
    maximumLevel: experience.rules.maximumLevel, neededExperience: row?.neededXp ?? 0,
    experienceLevels: experienceRows.map(r=>({level:r.level,neededXp:r.neededXp??0})), notices };
}

export async function loadCharacterStatProfile(character) {
  const key = canonicalStatClass(character.class);
  const [template, xp] = await Promise.all([
    ClassTemplateModel.findOne({ key }).lean(),
    PlayerExperienceLevelModel.find({}).select('level neededXp -_id').sort({level:1}).lean(),
  ]);
  return buildCharacterStatProfile(template, character.level, xp);
}
