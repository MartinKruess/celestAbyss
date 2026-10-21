import test from 'node:test';
import assert from 'node:assert/strict';
import {applyEquipmentBonus,applyItemComparisonBonuses} from '../services/equipmentComparisonBonuses.js';
test('armor speed bonuses and penalties add while regeneration and attributes stay distinct',()=>{
  const attrs={},flat={};
  const pending=applyItemComparisonBonuses({comparisonBonuses:[{stat:'movementSpeed',value:5,unit:'percentagePoints'},{stat:'movementSpeed',value:-2,unit:'percentagePoints'},{stat:'manaRegen',value:7,unit:'perTick'},{stat:'healthRegen',value:4,unit:'perTick'},{stat:'strength',value:2,unit:'flat'}]},attrs,flat);
  assert.deepEqual(pending,[]);assert.ok(Math.abs(flat.movementSpeed-0.03)<1e-12);assert.equal(flat.manaRegen,7);assert.equal(flat.healthRegen,4);assert.equal(attrs.strength,2);
});
test('offhand reduction affects direct attack only',()=>{
  const attrs={},flat={};
  for(const bonus of [{stat:'physicalAttack',value:100},{stat:'strength',value:2},{stat:'attackSpeed',value:-15,unit:'percentagePoints'}])assert.equal(applyEquipmentBonus(bonus,attrs,flat,{directAttackFactor:0.9}).applied,true);
  assert.equal(flat.physicalAttack,90);assert.equal(attrs.strength,2);assert.equal(flat.attackSpeed,-0.15);
});
test('conditional, ambiguous, and special effects stay visible instead of becoming permanent stats',()=>{
  const attrs={},flat={};
  const pending=applyItemComparisonBonuses({comparisonBonuses:[{stat:'manaRegen',value:10,condition:'onHit'},{stat:'movementSpeed',value:5}],comparisonEffects:[{name:'Mana on hit',value:12}]},attrs,flat);
  assert.equal(pending.length,3);assert.deepEqual(flat,{});assert.deepEqual(attrs,{});
});
