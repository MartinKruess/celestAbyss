import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {healingFromSpentMana,etherRainTargetCount} from '../services/groupHealingRules.js';

test('Heavenly Sacrifice spends 90 percent max Mana plus 10 percent max Health and excludes the caster',()=>{
  const skill=catalog.find(s=>s.nr===207);
  assert.equal(skill.resourceCosts.length,2);
  assert.equal(skill.resourceCosts[0].resource,'mana');
  assert.equal(skill.resourceCosts[0].reference,'maxMana');
  assert.equal(skill.resourceCosts[0].scaling.base,.9);
  const health=skill.resourceCosts.find(cost=>cost.resource==='health');
  assert.equal(health.reference,'maxHealth');
  assert.equal(health.unit,'fraction');
  assert.equal(health.scaling.base,.1);
  const heal=skill.effects.find(e=>e.type==='heal');
  assert.equal(heal.target,'ownGroup');assert.equal(heal.excludesCaster,true);
  assert.equal(heal.distribution,'fullAmountToEachRecipient');
  assert.equal(heal.radiusMeters,10);
  assert.equal(heal.areaCenter,'caster');
  assert.equal(healingFromSpentMana(skill,2700),4550);
  assert.equal(healingFromSpentMana(skill,3565.8),5848.700000000001);
});

test('Ether Rain has one hit per selected enemy, up to the number of group members currently inside',()=>{
  const skill=catalog.find(s=>s.nr===9);
  assert.equal(skill.attackArea.maxTargetsFrom,'ownGroupMembersCurrentlyInAreaIncludingCaster');
  const damage=skill.effects.find(e=>e.key==='ether-rain-damage');
  assert.equal(damage.maxHitsPerTargetPerTick,1);
  assert.equal(damage.redistributeUnusedTargetSlots,false);
  assert.equal(etherRainTargetCount(8,1),1);
  assert.equal(etherRainTargetCount(8,12),8);
  assert.equal(etherRainTargetCount(3,12),3);
  assert.equal(etherRainTargetCount(0,12),0);
});
