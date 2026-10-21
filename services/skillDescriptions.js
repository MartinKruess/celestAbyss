import { createHash } from 'node:crypto';
import overrides from '../data/skill-description-overrides.json' with { type: 'json' };

const effectFields = ['maxSkillLv', 'patk', 'matk', 'pdef', 'mdef', 'health', 'mana', 'agi', 'amb', 'dex', 'str', 'int', 'wis', 'vita', 'faith', 'vic', 'luck', 'block', 'atkSpeed', 'movementSpeed', 'cd', 'dur'];
export function skillEffectFingerprint(skill) {
  return createHash('sha256').update(JSON.stringify([
    ...effectFields.map(key => Number(skill[key] ?? 0)),
    String(skill.category || '').toLowerCase(), String(skill.dmgType || '').toLowerCase(),
    ...(skill.manaRegen ? [{ manaRegen: Number(skill.manaRegen) }] : []),
    ...(skill.effects?.length ? [skill.effectsVersion, skill.effects.map(effect =>
      Object.fromEntries(Object.entries(effect.toObject ? effect.toObject() : effect).sort(([a], [b]) => a.localeCompare(b))))] : []),
  ])).digest('hex');
}
export function applyDescriptionOverride(skill) {
  const override = overrides.find(entry => entry.germanName === skill.skillName_de);
  if (!override || override.effectFingerprint !== skillEffectFingerprint(skill)) return skill;
  return { ...skill, description_de: override.de, description_eng: override.en };
}
