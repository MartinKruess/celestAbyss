import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {progressionReference,addReferenceAttributes,dpsSummary} from '../services/progressionDpsReference.js';
import {conversionDelta,simulateClass} from '../services/timedDamageSimulation.js';
import {isSelfBuff} from '../services/skillClassification.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const comparison=read('data/balancing/class-comparison-level60.json'),equipment=read('data/balancing/ranked-equipment.json'),skills=read('data/skills.json'),model=read('data/balancing/attribute-model.json'),levelOne=read('data/balancing/level-one-character-reference.json');
const build=(key,level=60,rank=6)=>progressionReference({key,level,rank,comparison,equipment,skills,model,levelOne});

test('Level60/R6 retains the source class snapshot without inventing attribute gains',()=>{
 for(const key of ['knight','shaman','butcher','druid','luminet']){
  const original=comparison.passiveRows.find(r=>r.key===key),actual=build(key);
  for(const [stat,value]of Object.entries(original.stats))assert.ok(Math.abs(actual.stats[stat]-value)<1e-8,`${key} ${stat}`);
  assert.deepEqual(actual.knownAttributes,original.knownAttributes);
 }
});
test('Level progression carries Vitality into Knight Strength exactly once',()=>{
 const at60=build('knight'),at100=build('knight',100);
 assert.ok(Math.abs(at100.knownAttributes.vitality-at60.knownAttributes.vitality-40)<1e-9);
 assert.ok(Math.abs(at100.knownAttributes.strength-at60.knownAttributes.strength-44)<1e-9);
 const expected=(conversionDelta(model,'knight','strength',44).physicalAttack??0)+(conversionDelta(model,'knight','intelligence',40).physicalAttack??0);
 assert.ok(Math.abs(at100.stats.physicalAttack-at60.stats.physicalAttack-expected)<1e-8);
 const pre=structuredClone(at60);addReferenceAttributes(pre,{vitality:10},skills,model);
 assert.ok(Math.abs(pre.knownAttributes.strength-at60.knownAttributes.strength-1)<1e-9);
});
test('Level1 uses one starting weapon and no passive or armor bonuses',()=>{
 const actual=build('gladiator',1,1),source=levelOne.rows.find(r=>r.key==='gladiator');
 assert.equal(actual.weapons.length,1);assert.deepEqual(actual.includedSkills,[]);
 assert.equal(actual.stats.physicalDefense,source.nakedStats.physicalDefense);
 assert.equal(actual.stats.physicalAttack,source.weaponOnlyStats.physicalAttack);
});
test('DPS reference mixes mean and median for odd/even samples without mutating inputs',()=>{
 const values=[100,10,99,11,98];
 assert.deepEqual(dpsSummary(values),{count:5,mean:63.6,median:98,reference:80.8,min:10,max:100});
 assert.equal(dpsSummary([10,20,30,40]).reference,25);
 assert.deepEqual(values,[100,10,99,11,98]);assert.throws(()=>dpsSummary([]));
});

test('Cached and uncached rotations agree through buff expiry, regeneration and changing souls',()=>{
 const rotations=read('data/balancing/all-class-damage-rotations.json');
 for(const key of ['knight','druid','ritualist']){
  const pre=build(key),own=pre.learnedSkillNumbers.filter(n=>isSelfBuff(skills.find(s=>s.nr===n)));
  const run=cacheCombatStats=>simulateClass({pre:structuredClone(pre),skills,model,attackNumbers:rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr),config:{duration:65,targetHealth:1e10,cacheCombatStats,manaRegenInterval:3,enableOwnBuffs:true,ownBuffNumbers:own,preparedBuffNumbers:own,buffDurationOverrides:{242:30,42:30},encounter:{playerLevel:60,enemyLevel:60,enemyAttackInterval:1,enemy:{physicalAttack:0,physicalDefense:250,magicalDefense:250}}}});
  const expected=run(false),actual=run(true);
  for(const field of ['totalDamage','finalMana','finalHealth','healing','manaSpent','healthCosts'])assert.ok(Math.abs(actual[field]-expected[field])<1e-8,`${key}: ${field}`);
  assert.deepEqual(actual.skills,expected.skills);assert.deepEqual(actual.buffPeriods,expected.buffPeriods);
 }
});
