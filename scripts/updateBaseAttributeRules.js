import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';

const read = async p => JSON.parse(await fs.readFile(p, 'utf8'));
const model = await read('data/balancing/attribute-model.json');
const confirmed = (attribute, target, amountPerPoint) => ({ attribute, target, amountPerPoint, status: 'confirmedFactor' });
const updatedAttributes = new Set(['vitality','wisdom','strength','dexterity','ambush','intelligence','faith','victim','luck','agility']);
const retained = model.conversions.filter(c => !updatedAttributes.has(c.attribute) || (c.attribute === 'intelligence' && c.target === 'maxMana') || (c.attribute === 'agility' && c.target === 'movementSpeed'));
model.conversions = [
  confirmed('vitality','maxHealth',30),
  confirmed('vitality','physicalDefense',2),
  confirmed('vitality','healthRegen',4),
  confirmed('wisdom','maxMana',30),
  confirmed('wisdom','magicalDefense',2),
  confirmed('wisdom','manaRegen',3),
  confirmed('strength','physicalAttack',1.8),
  {...confirmed('strength','penetration',1.5),unit:'ratingPoints',note:'Penetration rating counters Block rating. Neither is a direct percentage; no fixed 100 percent Block stat. Exact counter-formula remains pending.'},
  confirmed('dexterity','physicalAttack',1.8),
  {...confirmed('dexterity','accuracy',1.6), unit:'ratingPoints'},
  {...confirmed('agility','attackSpeed',0.06),unit:'percentagePoints',fractionPerPoint:0.0006,note:'Adds 0.06 percentage points per Agility, equivalent to 0.0006 of base attack speed.'},
  {...confirmed('agility','dodge',1.5),unit:'ratingPoints'},
  confirmed('intelligence','magicalAttack',1.8),
  {...confirmed('luck','critChanceRating',1.6), unit:'ratingPoints', note:'Increases critical hit probability through the still pending rating formula; not a direct percentage bonus.'},
  ...retained,
];
model.primary = ['vitality','wisdom','strength','dexterity','intelligence','agility','luck'];
model.operative = [...new Set([...model.operative,'accuracy','dodge','critChanceRating','criticalDamageBonus','block','penetration','healthRegen','manaRegen'])];
model.operativeDisplayNames = {...model.operativeDisplayNames,critChanceRating:'Kritische Treffer',criticalDamageBonus:'Kritischer Schaden'};
model.criticalHitRules = {
  ratingStat:'critChanceRating',ratingUnit:'ratingPoints',probabilityFormulaStatus:'pending',
  damageBonusStat:'criticalDamageBonus',baseDamageBonus:0.8,baseDamageMultiplier:1.8,
  scope:'All characters start with an 80 percent additional damage bonus on a critical hit.',
  example:{normalDamage:1000,criticalDamage:1800},
  stackingRulesStatus:'pending',damageMitigationOrderStatus:'pending',
};
model.attributeDisplayNames = {vitality:'Vita',wisdom:'Willenskraft',strength:'Stärke',dexterity:'Geschick',intelligence:'Intelligenz',agility:'Agilität',luck:'Glück',ambush:'Ambush',faith:'Faith',victim:'Victim'};
model.offensiveAttributeEligibility = {
  attributes:['strength','dexterity','ambush','intelligence','faith','victim'],
  matchingAttributeFactor:1.8,
  nonMatchingAttributeFactor:0,
  activation:'Internal class calculation, not a learnable skill; no SP cost or additional skill count.',
  confirmedMatchingAttributes:{hunter:['dexterity'],summoner:['dexterity'],villian:['strength'],ritualist:['intelligence'],luminet:['intelligence']},
  classAttackOverrides:{},
  globallyRestrictedAttackAttributes:{dexterity:['hunter','summoner']},
  pendingClassComparisonAttributes:{adventurer:['strength','intelligence'],butcher:['strength'],druid:['strength','intelligence'],gladiator:['strength'],healer:['intelligence'],herbalist:['intelligence'],knight:['strength'],luminet:['intelligence'],ritualist:['intelligence'],shaman:['strength','intelligence']},
  unassignedClasses:'pendingClassReview',
  targetRule:'Use the attack target defined by the attribute conversion; this rule changes its factor, not its damage type.',
  scope:'Only attack conversion; other effects such as Dexterity accuracy or skill-granted Mana remain unchanged.',
  precedence:'An explicit skill or class conversion overrides the matching/non-matching default and replaces that attack conversion without stacking.',
};
model.offensiveAttributeEligibility.pendingClassComparisonAttributes.villian=['strength'];
model.strengthAttackClassModifiers={target:'physicalAttack',attribute:'strength',baseFactor:1.8,classMultipliers:{butcher:1.1,gladiator:1.05,shaman:1.05},defaultMultiplier:1,scope:'Only the physical attack conversion of Strength; Penetration is unchanged. Classes not eligible for Strength attack still receive zero attack.',status:'confirmed'};
model.intelligenceAttackClassModifiers={target:'magicalAttack',attribute:'intelligence',baseFactor:1.8,classMultipliers:{druid:1.05,herbalist:1.05,luminet:1.1,ritualist:1.1},defaultMultiplier:1,scope:'Only magical attack contributed by Intelligence; not a multiplier on total magical attack or flat skill healing. Healer and Shaman remain standard.',status:'confirmed'};
model.vitalityClassModifiers={attribute:'vitality',targets:['maxHealth','physicalDefense','healthRegen'],classMultipliers:{knight:1.1,gladiator:1.05},defaultMultiplier:1,scope:'All three Vitality conversions; does not multiply flat HP, defense or regeneration bonuses.',status:'confirmed'};
model.wisdomClassModifiers={attribute:'wisdom',classTargetMultipliers:{healer:{maxMana:1.1,magicalDefense:1.1,manaRegen:1.1},herbalist:{magicalDefense:1.05},hunter:{magicalDefense:1.1},knight:{magicalDefense:1.1},luminet:{magicalDefense:1.05},ritualist:{magicalDefense:1.05},summoner:{maxMana:1.05,magicalDefense:1.05},villian:{maxMana:1.05}},defaultMultiplier:1,scope:'Multiply only the named Wisdom conversion, not flat gear/skill bonuses. Healer includes all three Wisdom effects; other classes only specified targets.',status:'confirmed'};
model.wisdomClassModifiers.classTargetMultipliers.knight.magicalDefense=1.05;
delete model.wisdomClassModifiers.classTargetMultipliers.luminet;
delete model.wisdomClassModifiers.classTargetMultipliers.ritualist;
model.vitalityClassModifiers.classTargetMultipliers={knight:{physicalDefense:1.05}};
model.specialAttributeProgression={attributes:['ambush','faith','victim'],directAttackConversion:false,status:'futureProgressionDesignPending',source:'Existing skill grants retained; socket sources and progression not implemented.',futureBonuses:{learningLevels:1,status:'proposedNotCreated',thresholds:null,rewards:null},balanceNote:'Compare attainable attribute totals and opportunity costs; identical thresholds or factors do not imply equal benefit.'};
model.conversionOverrideRule = {
  mode: 'replaceAttributeConversion',
  description: 'An explicit class or skill conversion replaces the default conversion of the affected attribute; it does not add the replaced default attack bonus. Unrelated attributes remain unchanged.',
  classIndividualizationStatus: 'pending',
};
model.regenerationUnits = 'HP or Mana per server regeneration tick; interval not yet defined';
model.weaponCalculationRules = {offHandDirectAttackFactor:0.9,attributeBonusFactor:1,attackSpeedPenaltyFactor:1,attackSpeedStacking:'additivePercentagePointsForEveryEquippedWeapon',twoHandedWeaponRule:'Use the stored two-handed weapon stats once; no off-hand reduction.'};
const regeneration = await read('data/balancing/regeneration-model.json');
regeneration.wisdomManaPerTick = { factor: 3, status: 'confirmedFactor' };
regeneration.vitalityHealthPerTick = { factor: 4, status: 'confirmedFactor' };
const defaults = { version: 14, wisdomClassModifiers:model.wisdomClassModifiers, intelligenceAttackClassModifiers:model.intelligenceAttackClassModifiers, vitalityClassModifiers:model.vitalityClassModifiers, strengthAttackClassModifiers:model.strengthAttackClassModifiers, specialAttributeProgression:model.specialAttributeProgression, weaponCalculationRules:model.weaponCalculationRules, conversions: model.conversions, criticalHitRules:model.criticalHitRules, operativeDisplayNames:model.operativeDisplayNames, offensiveAttributeEligibility:model.offensiveAttributeEligibility, attributeDisplayNames:model.attributeDisplayNames, overrideRule: model.conversionOverrideRule, regenerationUnits: model.regenerationUnits };
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Development database required');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName: process.env.MONGODB_DB_NAME, autoIndex:false, serverSelectionTimeoutMS:10000});
  const templates = await read('data/class-templates.json');
  const before = await ClassTemplateModel.find({key:{$in:templates.map(c=>c.key)}}).lean();
  if (before.length !== 13) throw new Error('Unexpected class count');
  try { await fs.writeFile('data/balancing/base-attribute-rules-before.json', JSON.stringify({model:await read('data/balancing/attribute-model.json'),regeneration:await read('data/balancing/regeneration-model.json'),classes:before.map(c=>({key:c.key,statConversions:c.statConversions}))},null,2)+'\n', {flag:'wx'}); } catch(e) { if(e.code!=='EEXIST') throw e; }
  for (const c of before) {
    const statConversions = {...(c.statConversions??{}), defaults};
    await ClassTemplateModel.updateOne({key:c.key},{$set:{statConversions}},{runValidators:true});
    const saved = await ClassTemplateModel.findOne({key:c.key}).lean();
    if (JSON.stringify(saved.statConversions.defaults)!==JSON.stringify(defaults)) throw new Error('Read-back mismatch');
    templates.find(x=>x.key===c.key).statConversions = saved.statConversions;
  }
  const baseline = await read('data/balancing/class-baselines.json');
  for (const c of baseline.classes) c.statConversions = templates.find(x=>x.key===c.key).statConversions;
  for (const [path,value] of [['data/balancing/attribute-model.json',model],['data/balancing/regeneration-model.json',regeneration],['data/class-templates.json',templates],['data/balancing/class-baselines.json',baseline]]) await fs.writeFile(path,JSON.stringify(value,null,2)+'\n');
  console.log('Verified base attribute rules in all 13 MongoDB class templates and synchronized local definitions. Individual class overrides and old combat reports still require the next review.');
} catch(e) {console.error(`Base attribute update failed (${e.name}); credentials omitted.`); process.exitCode=1;}
finally {await mongoose.disconnect();}
