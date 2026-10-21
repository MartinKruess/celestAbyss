import {withSkillClassification} from '../services/skillClassification.js';
import { readFileSync } from 'node:fs';
const weaponSpeedOverrides = JSON.parse(readFileSync(new URL('../data/balancing/weapon-speed-overrides.json', import.meta.url), 'utf8'));
const weaponCombatOverrides = JSON.parse(readFileSync(new URL('../data/balancing/weapon-combat-value-overrides.json', import.meta.url), 'utf8'));
const weaponRankOverrides = JSON.parse(readFileSync(new URL('../data/balancing/weapon-attribute-rank-overrides.json', import.meta.url), 'utf8'));
const missingItemTranslations = JSON.parse(readFileSync(new URL('../data/localization/item-missing-translations.json', import.meta.url), 'utf8'));
import { items } from './itemData.js';
import { skills } from './skilldata.js';
import { ItemModel } from '../models/itemSchema.js';
import { SkillDataModel } from '../models/skillSchema.js';
import { applyDescriptionOverride } from '../services/skillDescriptions.js';

export function mapItem(source) {
  const data = { ...source, tradable: source.tradable ?? source.tadable, attributes: {} };
  for (const key of Object.keys(ItemModel.schema.paths)) {
    if (key.startsWith('attributes.') && key.split('.').length === 2) {
      const field = key.split('.')[1];
      data.attributes[field] = source.attributes?.[field] ?? source[field === 'maxLevel' ? 'maxlevel' : field];
    }
  }
  for (const [name, fields] of Object.entries({ boni: ['description', 'type', 'value'], set: ['amount', 'description', 'type', 'value'], effect: ['description', 'type', 'chance', 'value', 'duration'] })) {
    const target = name === 'boni' ? data.attributes : data;
    target[name] = Object.fromEntries(fields.map(field => [field, source[name]?.[field] ?? source[`${name}_${field}`]]));
  }
  const weaponOverride=weaponRankOverrides[data.name];
  if(weaponOverride){
    data.rang=weaponOverride.rang;
    for(const key of ['strength','dexerity','agility','ambush','int','faith','victim','vita','wisdom','luck'])delete data.attributes[key];
    Object.assign(data.attributes,weaponOverride.attributes);
  }
  if(weaponSpeedOverrides[data.name]!==undefined)data.attributes.speed=weaponSpeedOverrides[data.name];
  if(weaponCombatOverrides[data.name])Object.assign(data.attributes,weaponCombatOverrides[data.name]);
  for(const [field,value] of Object.entries(missingItemTranslations[data.name]??{})){
    if(typeof data[field]!=='string'||!data[field].trim())data[field]=value;
  }
  return data;
}

export function mapSkill(source, index) {
  const data = {
    nr: source.nr ?? index + 1, skillName_eng: source.S_Name_eng, skillName_de: source.S_Name_de,
    allowedRaces: source.allowedRaces || [], unlockPhase: source.unlockPhase, isClassCore: source.isClassCore || false,
    charClass: Array.isArray(source.CharClass) ? [...source.CharClass] : source.CharClass.split(',').map(value => value.trim()),
    maxSkillLv: source.S_Max_Lv,
    statBonusUnits: source.statBonusUnits,
    effectsVersion: source.effectsVersion,
    effects: source.effects,
    resourceCosts: source.resourceCosts,
    cooldownScaling: source.cooldownScaling,
    durationScaling: source.durationScaling,
    castTimeSeconds: source.castTimeSeconds,
    statScaling: source.statScaling,
    areaSettings: source.areaSettings,
    statBonusTargets: source.statBonusTargets,
    activation: source.activation,
    triggerConditionStatus: source.triggerConditionStatus,
    category: ['creature', 'Aurora', 'Human', 'Umbra', 'passive', 'active'].includes(source.category) ? source.category
      : source.S_DMG_Type === 'passive' && !source.category ? 'passive' : 'active',
    description_eng: source.S_Description_eng, description_de: source.S_Description_de, dmgType: source.S_DMG_Type,
  };
  const mapping = { patk: 'PAttack', matk: 'MAttack', cd: 'CD', dur: 'Duration', mana: 'Mana', health: 'Health', agi: 'Agi', amb: 'Amb', block: 'Block', dex: 'Dex', faith: 'Faith', int: 'Int', luck: 'Luck', str: 'Str', vic: 'Vic', vita: 'Vita', wis: 'Wis', pdef: 'PDefense', mdef: 'MDefense', atkSpeed: 'ATK_Speed', movementSpeed: 'MovementSpeed' };
  mapping.manaRegen = 'ManaRegen';
  for (const [field, suffix] of Object.entries(mapping)) data[field] = source[`S_${suffix}`];
  // Database-exported catalog records are authoritative and retain every field.
  // A legacy zero must not invent a cooldown absent from the authoritative record.
  if (source.catalogRecord && !Object.hasOwn(source.catalogRecord, 'cd')) delete data.cd;
  return withSkillClassification(source.catalogRecord ? { ...data, ...structuredClone(source.catalogRecord) } : applyDescriptionOverride(data));
}

export function prepareSeed() {
  const groups = [
    { model: ItemModel, records: items.map(mapItem), keys: ['name'] },
    { model: SkillDataModel, records: skills.map(mapSkill), keys: ['skillName_eng', 'skillName_de'] },
  ];
  const errors = [];
  for (const group of groups) {
    const seen = Object.fromEntries(group.keys.map(key => [key, new Set()]));
    group.documents = group.records.map((record, index) => {
      for (const key of group.keys) {
        if (!record[key] || seen[key].has(record[key])) errors.push(`${group.model.modelName}[${index}]: missing or duplicate ${key}: ${record[key]}`);
        seen[key].add(record[key]);
      }
      const document = new group.model(record);
      const error = document.validateSync();
      if (error) errors.push(`${group.model.modelName}[${index}]: ${error.message}`);
      return document;
    });
  }
  return { groups, errors };
}

export function insertOperations(group) {
  return group.documents.map(document => {
    const data = document.toObject();
    if (group.model !== SkillDataModel) delete data._id;
    delete data.__v;
    return { updateOne: { filter: { [group.keys[0]]: data[group.keys[0]] }, update: { $setOnInsert: data }, upsert: true } };
  });
}
