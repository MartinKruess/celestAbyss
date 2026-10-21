import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Kunai five levels use integers and retain first/maximum damage and burst mechanics',()=>{
 const skill=catalog.find(s=>s.nr===70);assert.equal(skill.maxSkillLv,5);
 assert.deepEqual(skill.statScaling.patk.values,[17,25,34,42,50]);
 assert.deepEqual(skill.burstUsage.belowTargetHealthFractionByLevel,[.05,.06,.06,.06,.06]);
 assert.deepEqual(skill.burstUsage.usesBelowThresholdByLevel,[2,2,2,3,3]);
 assert.deepEqual(skill.attackExecution.armorIgnoreFractionByLevel,[0,0,0,0,1]);
 for(let level=1;level<=5;level++){
  const r=resolveSkillAtLevel(skill,level);assert.equal(r.patk,[17,25,34,42,50][level-1]);assert.equal(r.mana,0);assert.equal(r.cd,16);
  assert.equal(r.attackExecution.damageMultiplierScaling.base,level===1?1:1.5);
 }
 assert.throws(()=>resolveSkillAtLevel(skill,6),/exceeds/);
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='villian');assert.equal(p.skills.find(s=>s.nr===70).sp,5);assert.equal(p.skillCount,32);
});
