import { SkillDataModel } from '../models/skillSchema.js';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';
import { canonicalStatClass } from './characterStats.js';
import { skillClassVariant } from './skillClassVariant.js';
import { learnableSkillLevel } from './skillLearningLimits.js';
import { firstSkillPointCost, skillPointCostAtLevel } from './skillPointCosts.js';
import { starterTreeMetadata, discoveredSkill } from './skillTree.js';
import { characterError, classRaces } from './characterPolicy.js';
import { buildSkillTooltip } from './skillTooltip.js';
import { buildPassiveStatColumns } from './passiveStats.js';
const text = (value, max) => String(value ?? '').replace(/[\x00-\x1f\x7f]/g, ' ').slice(0, max);
const integer = (n, min = 0) => Number.isSafeInteger(n) && n >= min;
// Same legacy class/advancement names used by the existing skill-level resolver.
const namesByClass = { druid: ['Druide','Alchemist'], shaman: ['Shamane','High Elves'], healer: ['Healer','Priest'],
  gladiator: ['Gladiator','Berserker'], butcher: ['Butcher','Destroyer'], knight: ['Knight','Templar','Ritter','Tempelritter'],
  adventurer: ['Adventure','Adventurer','Abenteuer','Scout'], hunter: ['Hunter','Archer'], summoner: ['Summoner','Soulseeker'],
  villian: ['Villian','Shadowwarrior'], herbalist: ['Herbalist','Witcher'], luminet: ['Luminet','Lightmage'], ritualist: ['Ritualist','Bloodmage','Ritualiost'] };
const raceByClass=Object.fromEntries(Object.entries(classRaces).map(([key,race])=>[canonicalStatClass(key),race]));
export function buildCharacterSkills(definitions, classKey, learned = [], race = raceByClass[classKey]) {
  // Historical class aliases can match multiple race cores; use the character's
  // actual race rather than granting the first core returned by the database.
  definitions=definitions.filter(s=>s.unlockPhase!=='race'||!race||!s.allowedRaces?.length||s.allowedRaces.includes(race));
  const ranks = new Map(normalizeLearnedSkills(learned).map(s => [s.number, s.level]));
  const numbers = new Set();
  const variants=definitions.map(d=>skillClassVariant(d,classKey));
  const skillNames=new Map(variants.map(s=>[s.nr,s.skillName_de||s.skillName_eng]));
  return definitions.map(definition => {
    const s = skillClassVariant(definition, classKey), max = learnableSkillLevel(s, classKey);
    const cost = firstSkillPointCost(s, classKey), minimum = s.learningRequirements?.minimumCharacterLevel;
    if (!integer(s.nr, 1) || numbers.has(s.nr) || !integer(max, 1) || max > 1000 || (ranks.get(s.nr) ?? 0) > max
      || (cost != null && !integer(cost)) || (minimum != null && !integer(minimum, 1))) throw characterError('SKILL_CATALOG_INVALID', 503);
    numbers.add(s.nr);
    // Shared template currentSkillLv is not a per-character learned rank.
    return { number: s.nr, name: text(s.skillName_de || s.skillName_eng, 256), type: text(s.type, 32),
      ...buildSkillTooltip(s,classKey,skillNames), maximumLevel: max,
      passiveStats: buildPassiveStatColumns(s,classKey),
      minimumCharacterLevel: minimum ?? -1, firstPointCost: cost ?? -1,
      learnedLevel: ranks.get(s.nr) ?? 0, learnedLevelKnown: true,
      rankCosts: Array.from({ length: max }, (_, i) => skillPointCostAtLevel(s, i + 1, classKey) ?? -1),
      furtherLevelsDefined: s.learningRequirements?.furtherSkillLevelsStatus === 'defined',
      raceCore: s.unlockPhase === 'race', ...starterTreeMetadata(s,variants,classKey) };
  }).sort((a, b) => a.number - b.number);
}
export async function loadCharacterSkills(character, { includeUndiscovered = false, includeFuture = false } = {}) {
  const key = canonicalStatClass(character.class);
  const template = await ClassTemplateModel.findOne({ key }).select('displayName advancementName').lean();
  if (!template) throw characterError('CLASS_STATS_NOT_CONFIGURED', 503);
  const names = [...new Set([character.class, template.displayName, template.advancementName, ...(namesByClass[key] ?? [])].filter(Boolean))];
  const definitions = await SkillDataModel.find({ charClass: { $in: names } }).lean();
  const catalog=buildCharacterSkills(definitions, key, character.learnedSkills ?? [],character.race??raceByClass[key]);
  return includeFuture ? dedicatedSkillCatalog(catalog,character) : includeUndiscovered?catalog:catalog.filter(s=>discoveredSkill(s,character));
}

// Per-character ranks are separate from the shared skill templates.
export function normalizeLearnedSkills(value) {
  if (!Array.isArray(value) || value.length > 512) throw characterError('INVALID_LEARNED_SKILLS', 400);
  const seen = new Set();
  return value.map(s => {
    if (!s || Object.keys(s).sort().join(',') !== 'level,number'
      || !Number.isSafeInteger(s.number) || s.number < 1 || s.number > 2147483647
      || !Number.isSafeInteger(s.level) || s.level < 1 || s.level > 1000 || seen.has(s.number))
      throw characterError('INVALID_LEARNED_SKILLS', 400);
    seen.add(s.number); return { number: s.number, level: s.level };
  }).sort((a,b) => a.number-b.number);
}

// Only the authenticated Dedicated receives future definitions; it replicates discovered entries.
export function dedicatedSkillCatalog(catalog, character) {
  return catalog.map(s=>({...s, discoveryLevel: discoveredSkill(s,character) ? 1
    : discoveredSkill(s,{...character,level:2147483647}) ? s.minimumCharacterLevel : -1 }));
}
