import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {armorRanksFromAnchor,sumArmorDefense} from '../services/armorRankProgression.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url),'utf8'));
const armor=read('data/balancing/armor-parts.json');
const source=read('data/balancing/armor-source-audit.json');
const model=read('data/balancing/attribute-model.json');
const comparison=read('data/balancing/class-comparison-level60.json');
const defenseModel=read('data/balancing/armor-defense-model.json');
test('All 78 class/rank sets retain sums and follow the active anchor and rank progression',()=>{
 assert.equal(armor.sets.length,78);assert.equal(armor.parts.length,390);
 for(const set of armor.sets){
  const original=source.rows.find(s=>s.sourceClass===set.name&&s.rank===set.rank);
  const parts=armor.parts.filter(p=>set.partIds.includes(p.id));assert.equal(parts.length,5);
  for(const key of ['physicalDefense','magicalDefense']){
   let expected=Math.round(original.raw[key]*354/554);
   const target=defenseModel.rank6Targets?.[set.name]?.[key];
   if(target!==undefined){const base6=source.rows.find(r=>r.sourceClass===set.name&&r.rank===6);expected=Math.round(expected*target/Math.round(base6.raw[key]*354/554));}
   if(key==='physicalDefense')expected=defenseModel.physicalDefenseByClassAndRank?.[set.name]?.[set.rank]??expected;
   if(key==='magicalDefense')expected=defenseModel.magicalDefenseByClassAndRank?.[set.name]?.[set.rank]??expected;
   assert.equal(set.raw[key],expected);
   assert.equal(sumArmorDefense(parts,key),set.raw[key]);
   assert.ok(parts.every(p=>Number.isFinite(p.raw[key])&&p.raw[key]>=0&&Math.abs(p.raw[key]*100-Math.round(p.raw[key]*100))<1e-8));
   if(defenseModel.rankProgression)for(const part of parts){
    const anchor=defenseModel.rankProgression.anchors.find(a=>a.sourceClass===set.name&&a.slot===part.slot);
    assert.deepEqual(part.raw,armorRanksFromAnchor(anchor.raw,defenseModel.rankProgression.growthPercentages)[set.rank-1]);
   }
   if(set.rank>1)assert.ok(set.raw[key]>=armor.sets.find(s=>s.name===set.name&&s.rank===set.rank-1).raw[key]);
  }
 }
 const gladiator=armor.sets.find(s=>s.name==='Gladiator'&&s.rank===6);
 assert.deepEqual(gladiator.raw,{physicalDefense:287,magicalDefense:140});
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
  const aliases={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
  const current=armor.sets.find(s=>s.name===aliases[expected.key]&&s.rank===6);
  const physicalExpected=expected.physicalDefense.proposedFinal+current.raw.physicalDefense-expected.physicalDefense.proposedArmor;
  assert.ok(Math.abs(actual.physicalDefense-physicalExpected)<1e-8);
  const magicalExpected=expected.magicalDefense.proposedFinal+current.raw.magicalDefense-expected.magicalDefense.proposedArmor;
  assert.ok(Math.abs(actual.magicalDefense-magicalExpected)<1e-8);
 }
});

test('R4 physical calibration preserves starter ranks and magical defense and reaches class-specific target levels',()=>{
 const decision=read('data/balancing/r4-armor-calibration-decision.json');
 if(defenseModel.rankProgression){
  assert.equal(defenseModel.physicalCalibration.status,'historicalSupersededByRankProgression');
  for(const row of decision.rows)assert.equal(armor.sets.find(s=>s.name===row.name&&s.rank===6).raw.physicalDefense,row.after[6]);
  return;
 }
 const baseline=read('data/balancing/class-baselines.json');
 for(const row of decision.rows){
  const initial=baseline.classes.find(c=>c.key===row.key).baseStats.physicalDefense;
  const mods=model.vitalityClassModifiers;
  const factor=1.2*(mods.classTargetMultipliers?.[row.key]?.physicalDefense??mods.classMultipliers?.[row.key]??1);
  for(const rank of [1,2,3,4,5,6]){
   const set=armor.sets.find(s=>s.name===row.name&&s.rank===rank);
   assert.equal(set.raw.physicalDefense,row.after[rank]);
   if(rank===1){
    const adjustment=defenseModel.r1StarterAdjustment?.rows.find(r=>r.key===row.key);
    assert.equal(set.raw.physicalDefense,adjustment?adjustment.before-adjustment.reduction:row.before[rank]);
   }
   if(rank===4)assert.equal(set.raw.physicalDefense,row.name==='Gladiator'?169:row.before[rank]);
   if([2,3,5,6].includes(rank)){
    const level=(rank-1)*20;
    const actual=(initial+(level-1)*factor+set.raw.physicalDefense)/row.divisor;
    assert.ok(actual>=level-1e-9);
    assert.ok(actual-level<1.00000001/row.divisor);
   }
  }
 }
});

test('Magical calibration preserves each R4 anchor and meets every level target from R2 through R6',()=>{
 const decision=read('data/balancing/r4-magical-calibration-decision.json');
 if(defenseModel.rankProgression){
  assert.equal(defenseModel.magicalCalibration.status,'historicalSupersededByRankProgression');
  for(const row of decision.rows)assert.equal(armor.sets.find(s=>s.name===row.name&&s.rank===6).raw.magicalDefense,row.points.find(p=>p.rank===6).after);
  return;
 }
 const baseline=read('data/balancing/class-baselines.json');
 for(const row of decision.rows){
  const base=baseline.classes.find(c=>c.key===row.key).baseStats.magicalDefense;
  const mods=model.wisdomClassModifiers;
  const factor=model.conversions.find(c=>c.attribute==='wisdom'&&c.target==='magicalDefense').amountPerPoint*(mods?.classTargetMultipliers?.[row.key]?.magicalDefense??mods?.classMultipliers?.[row.key]??1);
  const r4=armor.sets.find(s=>s.name===row.name&&s.rank===4);
  assert.equal(r4.raw.magicalDefense,row.anchorArmor);
  const divisor=(base+59*factor+r4.raw.magicalDefense)/60;
  for(const point of row.points){
   const set=armor.sets.find(s=>s.name===row.name&&s.rank===point.rank);
   assert.equal(set.raw.magicalDefense,point.after);
   if(point.rank===1){assert.equal(point.after,point.before);continue;}
   const effective=(base+(point.level-1)*factor+set.raw.magicalDefense)/divisor;
   assert.ok(effective>=point.level-1e-9);
   assert.ok(effective-point.level<1/divisor+1e-9);
  }
 }
});
