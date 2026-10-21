import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const decision=JSON.parse(fs.readFileSync('data/balancing/type-expansions-decision.json'));
const previous=JSON.parse(fs.readFileSync(decision.backup+'/skills.json'));

test('Body and Spirit bonuses are halved at every rank, preserving assignments and learning gates',()=>{
 for(const nr of [44,45]){
  const skill=catalog.find(s=>s.nr===nr),before=previous.find(s=>s.nr===nr);
  assert.equal(skill.maxSkillLv,before.maxSkillLv);
  assert.deepEqual(skill.charClass,before.charClass);
  assert.deepEqual(skill.learningRequirements,before.learningRequirements);
  for(let level=1;level<=10;level++){
   const now=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
   for(const key of Object.keys(before.statScaling))assert.equal(now[key],old[key]/2);
  }
 }
});

test('Senses scales all four attributes to the requested maximum without an old rank-ten jump',()=>{
 const skill=catalog.find(s=>s.nr===43),before=previous.find(s=>s.nr===43);
 assert.equal(skill.maxSkillLv,10);assert.deepEqual(skill.charClass,before.charClass);
 assert.deepEqual(skill.learningRequirements,before.learningRequirements);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(skill,level);
  assert.equal(r.agi,level);assert.equal(r.dex,level);
  assert.equal(r.vita,level/2);assert.equal(r.wis,level/2);
 }
});
