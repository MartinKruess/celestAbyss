import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('six Underworld Scream levels retain old endpoint mechanics and interpolate health damage',()=>{
 const skill=catalog.find(s=>s.nr===99);
 const decision=JSON.parse(fs.readFileSync('data/balancing/underworld-scream-six-levels-decision.json'));
 const before=JSON.parse(fs.readFileSync(decision.backup+'/skill.json'));
 assert.equal(skill.maxSkillLv,6);assert.equal(skill._id,before._id);
 for(let level=1;level<=6;level++){
  const r=resolveSkillAtLevel(skill,level,{classKey:'ritualist'});
  assert.equal(r.matk,666);assert.equal(r.cd,[90,88,86,84,82,80][level-1]);
  assert.equal(r.attackExecution.additionalDamageFromSacrificedHealth.base,[0,.2,.4,.65,.95,1.25][level-1]);
  assert.equal(r.matk+2000*r.attackExecution.additionalDamageFromSacrificedHealth.base,[666,1066,1466,1966,2566,3166][level-1]);
 }
 for(const [level,oldLevel]of [[1,1],[6,3]]){
  const current=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,oldLevel);
  for(const key of ['matk','cd','dur','castTimeSeconds','effects','resourceCosts','activationRequirements','attackArea','attackExecution'])assert.deepEqual(current[key],old[key],key);
 }
 assert.throws(()=>resolveSkillAtLevel(skill,7,{classKey:'ritualist'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='ritualist');assert.equal(points.skills.find(s=>s.nr===99).sp,6);assert.equal(points.skillCount,32);
});
