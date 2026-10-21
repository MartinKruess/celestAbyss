import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Water Chains has ten damaging levels and derives rounded Mana from base damage only',()=>{
 const skill=catalog.find(s=>s.nr===16);assert.equal(skill.maxSkillLv,10);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(skill,level,{classKey:'herbalist'});
  assert.equal(r.matk,47+21*(level-1));assert.equal(r.mana,Math.round(r.matk*.25));assert.equal(r.castTimeSeconds,.2);
 }
 assert.equal(resolveSkillAtLevel(skill,1).dur,1);assert.equal(resolveSkillAtLevel(skill,10).dur,3);
 assert.equal(resolveSkillAtLevel(skill,1).cd,38);assert.equal(resolveSkillAtLevel(skill,10).cd,28.5);
 const modified=structuredClone(skill);
 modified.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.matk').rule.perLevel=30;
 assert.equal(resolveSkillAtLevel(modified,10).mana,Math.round((47+9*30)*.25));
 assert.throws(()=>resolveSkillAtLevel(skill,11),/exceeds/);
});
test('Force of Nature halves former maximum stats and Herbalist reaches 280 points',()=>{
 const skill=catalog.find(s=>s.nr===81),r=resolveSkillAtLevel(skill,1);
 assert.equal(skill.maxSkillLv,1);assert.equal(r.int,7);assert.equal(r.wis,2.5);assert.equal(r.vita,2.5);
 assert.throws(()=>resolveSkillAtLevel(skill,2),/exceeds/);
 assert.deepEqual(catalog.find(s=>s.nr===46).charClass,['Herbalist','Witcher']);assert.equal(catalog.find(s=>s.nr===46).maxSkillLv,15);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='herbalist');assert.equal(points.sp,280);assert.equal(points.skillCount,32);
});
