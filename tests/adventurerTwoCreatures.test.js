import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {learnableSkillLevel} from '../services/skillLearningLimits.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Control permits two Adventurer creatures and only one for every other class',()=>{
 const skill=catalog.find(s=>s.nr===135);
 assert.equal(skill.maxSkillLv,2);
 assert.deepEqual(skill.companionControlSettings.maximumControlledCreaturesByLevel,[1,2]);
 assert.equal(learnableSkillLevel(skill,'adventurer'),2);
 for(const alias of ['Abenteuer','Adventure','Adventurer','Scout'])assert.equal(skill.learningLimits.classOverrides[alias],2);
 for(const key of ['butcher','gladiator','knight','luminet','druid','shaman','hunter','summoner','healer','herbalist','ritualist','villian'])assert.equal(learnableSkillLevel(skill,key),1);
 assert.throws(()=>resolveSkillAtLevel(skill,3,{classKey:'adventurer'}),/exceeds/);
 assert.equal(skill.learningRequirements.minimumCharacterLevel,5);
});
test('Wild Bond retains all former maximum bonuses in its only learned level',()=>{
 const skill=catalog.find(s=>s.nr===246);
 const decision=JSON.parse(fs.readFileSync('data/balancing/adventurer-two-creatures-decision.json'));
 const before=JSON.parse(fs.readFileSync(decision.backup+'/skills.json')).find(s=>s.nr===246);
 assert.equal(skill.maxSkillLv,1);assert.equal(skill._id,before._id);
 for(const key of Object.keys(before.companionBondSettings)){
  const old=before.companionBondSettings[key];
  assert.deepEqual(skill.companionBondSettings[key],Array.isArray(old)?[old.at(-1)]:old,key);
 }
 assert.throws(()=>resolveSkillAtLevel(skill,2,{classKey:'adventurer'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes;
 assert.equal(points.find(c=>c.key==='adventurer').sp,280);
 assert.equal(points.find(c=>c.key==='adventurer').skillCount,32);
});
