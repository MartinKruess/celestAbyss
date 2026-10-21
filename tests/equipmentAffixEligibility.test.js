import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {eligibleEquipmentAffixes,weaponAffixValue} from '../services/equipmentAffixEligibility.js';
const pool=JSON.parse(fs.readFileSync(new URL('../data/balancing/armor-defense-model.json',import.meta.url))).bonusSlotRules.randomSelection.pool;
const offense=['physicalAttack','magicalAttack','physicalSkillDamageBonus','magicalSkillDamageBonus','attackSpeed','criticalDamageBonus','penetration','luck'];
test('direct offensive affixes require weapons; movement requires armor boots',()=>{
  for(const equipmentSlot of ['chest','pants','helmet','gloves','boots','cloak']){
    const eligible=eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot,rank:6}).map(e=>e.stat);
    for(const stat of offense)assert.ok(!eligible.includes(stat));
    assert.equal(eligible.includes('movementSpeed'),equipmentSlot==='boots');
    assert.ok(eligible.includes('strength')&&eligible.includes('agility'));
  }
  const weapon=eligibleEquipmentAffixes(pool,{category:'weapons',rank:6}).map(e=>e.stat);
  for(const stat of offense)assert.ok(weapon.includes(stat));
  assert.ok(!weapon.includes('movementSpeed'));
  assert.ok(weapon.includes('strength')&&weapon.includes('wisdom'));
  for(const stat of ['physicalDefense','magicalDefense','dodge','maxHealth','maxMana']){
    assert.ok(!weapon.includes(stat));
    assert.ok(eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot:'chest',rank:6}).some(e=>e.stat===stat));
  }
  assert.ok(!eligibleEquipmentAffixes(pool,{category:'weapons',equipmentSlot:'boots'}).some(e=>e.stat==='movementSpeed'));
});

test('movement speed requires rank 4 or higher even on boots',()=>{
  for(const rank of [1,2,3,4,5,6])assert.equal(
    eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot:'boots',rank}).some(e=>e.stat==='movementSpeed'),rank>=4);
  assert.ok(!eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot:'boots'}).some(e=>e.stat==='movementSpeed'));
});

test('critical damage is available on weapons only from rank 4 with approved full and half maxima',()=>{
  const entry=pool.find(e=>e.stat==='criticalDamageBonus');
  for(const rank of [1,2,3,4,5,6])assert.equal(eligibleEquipmentAffixes(pool,{category:'weapons',rank}).some(e=>e.stat===entry.stat),rank>=4);
  for(const [rank,max]of [[4,1],[5,3],[6,5]]){
    assert.equal(entry.baseValueByRank[String(rank)],max);
    assert.equal(weaponAffixValue(max,entry.stat,{handedness:1}),max/2);
  }
});

test('each item excludes its already selected stats while retaining different stats and fresh item choices',()=>{
  const item={category:'weapons'};
  const selected=['strength','penetration'];
  const next=eligibleEquipmentAffixes(pool,item,selected).map(e=>e.stat);
  assert.ok(!next.includes('strength')&&!next.includes('penetration'));
  assert.ok(!next.includes('block')&&next.includes('vitality'));
  assert.ok(eligibleEquipmentAffixes(pool,item).some(e=>e.stat==='strength'));
  assert.deepEqual(selected,['strength','penetration']);
  const selection=JSON.parse(fs.readFileSync(new URL('../data/balancing/armor-defense-model.json',import.meta.url))).bonusSlotRules.randomSelection;
  assert.equal(selection.mode,'weightedDrawWithoutReplacement');
  assert.equal(selection.duplicatesAllowed,false);
});

test('shields share the weapon pool plus exclusive unhalved block; all other shield bonuses are halved',()=>{
  const weapon=eligibleEquipmentAffixes(pool,{category:'weapons',rank:6,weaponType:'Sword'}).map(e=>e.stat);
  const shield=eligibleEquipmentAffixes(pool,{category:'weapons',rank:6,weaponType:'Shield'}).map(e=>e.stat);
  assert.deepEqual(shield.filter(stat=>stat!=='block'),weapon);
  assert.ok(shield.includes('block')&&!weapon.includes('block'));
  assert.ok(!eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot:'chest',rank:6}).some(e=>e.stat==='block'));
  assert.equal(weaponAffixValue(20,'block',{weaponType:'Shield'}),20);
  assert.equal(weaponAffixValue(120,'physicalSkillDamageBonus',{weaponType:'Shield'}),60);
  assert.equal(weaponAffixValue(120,'physicalSkillDamageBonus',{handedness:1}),60);
  assert.equal(weaponAffixValue(120,'physicalSkillDamageBonus',{handedness:2}),120);
  assert.equal(weaponAffixValue(20,'penetration',{handedness:1}),10);
  assert.throws(()=>weaponAffixValue(20,'block',{weaponType:'Sword',handedness:1}));
  assert.throws(()=>weaponAffixValue(20,'penetration',{}));
});
