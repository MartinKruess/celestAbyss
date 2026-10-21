import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';

test('one learned Charge level retains former maximum effects, costs and timings',()=>{
 const skills=JSON.parse(fs.readFileSync('data/skills.json'));
 const decision=JSON.parse(fs.readFileSync('data/balancing/butcher-charge-one-level-decision.json'));
 const before=JSON.parse(fs.readFileSync(decision.backup+'/skill.json'));
 const skill=skills.find(s=>s.nr===12);
 assert.equal(skill.maxSkillLv,1);assert.equal(skill._id,before._id);
 const old=resolveSkillAtLevel(before,5,{classKey:'butcher'});
 const current=resolveSkillAtLevel(skill,1,{classKey:'butcher'});
 for(const key of ['str','health','patk','mana','cd','dur','castTimeSeconds','resourceCosts','statScaling','timingModifiers','statBonusTargets','statBonusUnits'])assert.deepEqual(current[key],old[key],key);
 assert.throws(()=>resolveSkillAtLevel(skill,2,{classKey:'butcher'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='butcher');
 assert.equal(points.sp,280);assert.equal(points.skillCount,32);
});
