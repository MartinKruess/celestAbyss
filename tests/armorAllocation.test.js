import test from 'node:test';
import assert from 'node:assert/strict';
import {allocateArmorTotal,allocateArmorDefense} from '../services/armorAllocation.js';
import {ItemModel} from '../models/itemSchema.js';
test('Arbitrary integer totals retain exact sums, including 501 and tied remainders',()=>{
 for(let total=0;total<=1000;total++){
  const rows=allocateArmorTotal(total);
  assert.equal(rows.reduce((n,r)=>n+r.value,0),total);
  assert.ok(rows.every(r=>Number.isInteger(r.value)&&r.value>=0&&Math.abs(r.value-r.exact)<1));
 }
 assert.deepEqual(allocateArmorTotal(501).map(r=>r.value),[151,130,80,80,60]);
 assert.deepEqual(allocateArmorTotal(550).map(r=>r.value),[165,143,88,88,66]);
});
test('Physical and magical totals are independent; invalid totals are rejected',()=>{
 const rows=allocateArmorDefense(501,123);
 assert.equal(rows.reduce((n,r)=>n+r.physicalDefense,0),501);
 assert.equal(rows.reduce((n,r)=>n+r.magicalDefense,0),123);
 for(const total of [-1,0.5,NaN,Infinity,'501',Number.MAX_SAFE_INTEGER])assert.throws(()=>allocateArmorTotal(total),RangeError);
});
test('Armor schema preserves both defenses, six open bonus slots and canonical class identity',()=>{
 const item=new ItemModel({name:'Armor schema check',armorDefinitionId:'test-armor',equipmentSlot:'chest',allowedClassKeys:['gladiator'],armorDefenseStatus:'assigned',armorBonusSlots:[null,null,null,null,null,null],attributes:{pdeff:165,mdeff:37}});
 assert.equal(item.validateSync(),undefined);
 const saved=item.toObject();assert.equal(saved.attributes.mdeff,37);assert.equal(saved.attributes.pdeff,165);
 assert.deepEqual(saved.armorBonusSlots,[null,null,null,null,null,null]);
 assert.deepEqual(saved.allowedClassKeys,['gladiator']);
});
