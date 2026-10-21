import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
test('Master of Elements has the new attribute curves and unchanged costs and timing',()=>{
 const s=JSON.parse(fs.readFileSync('data/skills.json')).find(s=>s.nr===194);
 const d=JSON.parse(fs.readFileSync('data/balancing/master-elements-attributes-decision.json'));
 const old=JSON.parse(fs.readFileSync(d.backup+'/skill.json'));assert.equal(s.maxSkillLv,10);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(s,level),previous=resolveSkillAtLevel(old,level);
  for(const key of ['str','vita','wis'])assert.equal(r[key],[1,1,2,2,3,3,4,4,5,5][level-1]);
  assert.equal(r.int,level);
  for(const key of ['mana','cd','dur','castTimeSeconds','resourceCosts','statBonusTargets','timingModifiers'])assert.deepEqual(r[key],previous[key]);
 }
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes;
 for(const c of p)assert.equal(c.sp,280);
});
