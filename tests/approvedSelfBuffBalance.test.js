import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const decision=JSON.parse(fs.readFileSync('data/balancing/approved-self-buff-decision.json'));
const at=(nr,key,level)=>resolveSkillAtLevel(skillForClass(catalog.find(s=>s.nr===nr),key),level);
test('Adventurer specialization changes only its attack curve and leaves Shaman at its approved original values',()=>{
 const old=decision.changes.find(c=>c.before.nr===149).before;
 for(let level=1;level<=3;level++){
  const a=at(149,'adventurer',level),s=at(149,'shaman',level),previous=resolveSkillAtLevel(skillForClass(old,'shaman'),level);
  assert(Math.abs(a.patk-[20,30,40][level-1])<1e-8);
  for(const field of ['patk','str','mana','cd','dur','castTimeSeconds'])assert.equal(s[field],previous[field]);
  for(const field of ['str','mana','cd','dur','castTimeSeconds'])assert.equal(a[field],previous[field]);
 }
});
test('Approved offensive reductions retain learnable levels, resource costs and timings',()=>{
 for(const {before,after}of decision.changes){const current=catalog.find(s=>s.nr===before.nr);assert.deepEqual(current,after);
  for(const k of ['maxSkillLv','skillpoints','cd','dur','castTimeSeconds','resourceCosts'])assert.deepEqual(current[k],before[k]);
 }
 const p=at(236,'ritualist',3);assert.equal(p.int,6);assert.equal(p.wis,9);assert.equal(p.vita,15);
 assert.equal(at(178,'ritualist',10).int,5);
 assert(Math.abs(at(190,'summoner',10).patk-40)<1e-8);assert.equal(at(190,'summoner',10).dex,8);
 assert.equal(at(194,'druid',10).int,20);
});
