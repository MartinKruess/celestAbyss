import test from 'node:test';
import assert from 'node:assert/strict';
import { readClassData } from '../scripts/seedClasses.js';
test('class drafts preserve source structure without invented stats or skill mappings', async () => {
  const [classes, matrices] = await readClassData();
  assert.equal(classes.records.length, 13); assert.equal(matrices.records.length, 14);
  for (const group of [classes, matrices]) {
    assert.equal(new Set(group.records.map(record => record.key)).size, group.records.length);
    for (const record of group.records) assert.equal(new group.model(record).validateSync(), undefined);
  }
  assert.equal(classes.records.filter(record => record.raceScope === 'fixed').length, 11);
  assert.equal(classes.records.filter(record => record.raceScope === 'crossRace').length, 2);
  assert.ok(classes.records.every(record => Object.keys(record.baseStats).length === 9 && record.baseStats.maxStamina === 1 && !record.selectable));
  for (const record of classes.records) {
    const rules = record.statConversions.defaults;
    assert.equal(rules.overrideRule.mode, 'replaceAttributeConversion');
    for (const [attribute,target,amount] of [['vitality','healthRegen',4],['wisdom','manaRegen',0.9],['luck','critChanceRating',1.6]]) {
      assert.equal(rules.conversions.find(c=>c.attribute===attribute && c.target===target)?.amountPerPoint,amount);
    }
    assert.ok(!rules.conversions.some(c=>['faith','victim'].includes(c.attribute) && c.target==='magicalAttack'));
    assert.equal(rules.conversions.find(c=>c.attribute==='dexterity' && c.target==='accuracy').amountPerPoint,1.6);
    assert.equal(rules.conversions.find(c=>c.attribute==='agility' && c.target==='dodge').amountPerPoint,1.5);
    const speed = rules.conversions.filter(c=>c.attribute==='agility' && c.target==='attackSpeed');
    assert.equal(speed.length,1);
    assert.equal(speed[0].amountPerPoint,0.06);
    assert.equal(speed[0].unit,'percentagePoints');
    assert.equal(speed[0].fractionPerPoint,0.0006);
    const penetration = rules.conversions.filter(c=>c.attribute==='strength' && c.target==='penetration');
    assert.equal(penetration.length,1);
    assert.equal(penetration[0].amountPerPoint,1.5);
    assert.equal(penetration[0].unit,'ratingPoints');
    assert.equal(penetration[0].fractionPerPoint,undefined);
    assert.equal(rules.offensiveAttributeEligibility.nonMatchingAttributeFactor,0);
    assert.equal(rules.criticalHitRules.baseDamageBonus,0.8);
    assert.equal(rules.criticalHitRules.baseDamageMultiplier,1.8);
    assert.equal(rules.criticalHitRules.example.normalDamage * (1 + rules.criticalHitRules.baseDamageBonus),rules.criticalHitRules.example.criticalDamage);
    assert.equal(rules.operativeDisplayNames.critChanceRating,'Kritische Treffer');
    assert.equal(rules.operativeDisplayNames.criticalDamageBonus,'Kritischer Schaden');
    assert.deepEqual(rules.offensiveAttributeEligibility.confirmedMatchingAttributes,{hunter:['dexterity'],summoner:['dexterity'],villian:['strength'],ritualist:['intelligence'],luminet:['intelligence']});
    assert.ok(!rules.conversions.some(c=>['ambush','faith','victim'].includes(c.attribute)&&['physicalAttack','magicalAttack'].includes(c.target)));
    assert.equal(rules.specialAttributeProgression.directAttackConversion,false);
    assert.deepEqual(rules.strengthAttackClassModifiers.classMultipliers,{butcher:1.1,gladiator:1.05,shaman:1.05});
    assert.equal(rules.strengthAttackClassModifiers.target,'physicalAttack');
    assert.deepEqual(rules.intelligenceAttackClassModifiers.classMultipliers,{druid:1.05,herbalist:1.05});
    assert.deepEqual(rules.vitalityClassModifiers.classMultipliers,{knight:1.1,gladiator:1.05});
    assert.equal(rules.wisdomClassModifiers.classTargetMultipliers.healer,undefined);
    assert.deepEqual(rules.wisdomClassModifiers.classTargetMultipliers.villian,{maxMana:1.05});
    assert.deepEqual(rules.wisdomClassModifiers.classTargetMultipliers.hunter,{magicalDefense:1.1});
    assert.deepEqual(rules.wisdomClassModifiers.classTargetMultipliers.knight,{magicalDefense:1.05});
    assert.equal(rules.wisdomClassModifiers.classTargetMultipliers.luminet,undefined);
    assert.equal(rules.wisdomClassModifiers.classTargetMultipliers.ritualist,undefined);
    assert.deepEqual(rules.vitalityClassModifiers.classTargetMultipliers.knight,{physicalDefense:1.05});
  }
  assert.equal(classes.records.find(record => record.key === 'gladiator').baseStats.maxHealth, 212);
  assert.equal(classes.records.find(record => record.key === 'druid').baseStats.magicalAttack, 11);
  assert.equal(classes.records.find(record => record.key === 'healer').baseStats.magicalDefense, 13);
  assert.ok(matrices.records.every(record => record.status === 'unresolved' && record.resolvedSkills.length === 0));
  const druid = matrices.records.find(record => record.key === 'Druide');
  assert.ok(druid.unresolvedLegacySkillIDs.includes(300));
});
