import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url),'utf8'));
const armor=read('data/balancing/armor-parts.json');
const source=read('data/balancing/armor-source-audit.json');
const model=read('data/balancing/attribute-model.json');
const comparison=read('data/balancing/class-comparison-level60.json');
const defenseModel=read('data/balancing/armor-defense-model.json');
test('All 78 class/rank sets use the approved anchor exactly once; integer parts retain sums and rank progression',()=>{
 assert.equal(armor.sets.length,78);assert.equal(armor.parts.length,390);
 for(const set of armor.sets){
  const original=source.rows.find(s=>s.sourceClass===set.name&&s.rank===set.rank);
  const parts=armor.parts.filter(p=>set.partIds.includes(p.id));assert.equal(parts.length,5);
  for(const key of ['physicalDefense','magicalDefense']){
   let expected=Math.round(original.raw[key]*354/554);
   const target=defenseModel.rank6Targets?.[set.name]?.[key];
   if(target!==undefined){const base6=source.rows.find(r=>r.sourceClass===set.name&&r.rank===6);expected=Math.round(expected*target/Math.round(base6.raw[key]*354/554));}
   assert.equal(set.raw[key],expected);
   assert.equal(parts.reduce((n,p)=>n+p.raw[key],0),set.raw[key]);
   assert.ok(parts.every(p=>Number.isInteger(p.raw[key])&&p.raw[key]>=0));
   if(set.rank>1)assert.ok(set.raw[key]>=armor.sets.find(s=>s.name===set.name&&s.rank===set.rank-1).raw[key]);
  }
 }
 const gladiator=armor.sets.find(s=>s.name==='Gladiator'&&s.rank===6);
 assert.deepEqual(gladiator.raw,{physicalDefense:354,magicalDefense:123});
});
test('Cloaks remain unassigned and all empty bonus slots and six-piece memberships survive',()=>{
 assert.equal(armor.cloaks.length,52);
 for(const cloak of armor.cloaks)assert.deepEqual(cloak.raw,{physicalDefense:null,magicalDefense:null});
 for(const item of [...armor.parts,...armor.cloaks]){
  assert.deepEqual(item.bonusSlots,[null,null,null,null,null,null]);
  assert.equal(item.bonusSlotLimit,({1:0,2:1,3:1,4:2,5:2,6:3})[item.rank]);
 }
 for(const set of armor.armorSets)assert.equal(set.partIds.length,6);
});
test('Actual end values match the independently prepared 1.2-factor and armor scenario; attacks stay unchanged',()=>{
 for(const [attribute,target]of [['vitality','physicalDefense'],['wisdom','magicalDefense']])assert.equal(model.conversions.find(c=>c.attribute===attribute&&c.target===target).amountPerPoint,1.2);
 const scenario=read('data/balancing/r6-armor-anchor-scenario.json');
 for(const expected of scenario.rows){
  const actual=comparison.passiveRows.find(r=>r.key===expected.key).stats;
  for(const key of ['physicalAttack','magicalAttack'])assert.ok(Math.abs(actual[key]-expected[key])<1e-8);
  const reductions={gladiator:{magicalDefense:100},butcher:{magicalDefense:50},adventurer:{physicalDefense:25,magicalDefense:25}};
  for(const key of ['physicalDefense','magicalDefense'])assert.ok(Math.abs(actual[key]-(expected[key].proposedFinal-(reductions[expected.key]?.[key]??0)))<1e-8);
 }
});
