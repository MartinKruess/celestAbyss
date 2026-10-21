import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Divine Protection retains only former level one',()=>{
 const skill=catalog.find(s=>s.nr===59),r=resolveSkillAtLevel(skill,1,{classKey:'knight'});
 assert.equal(skill.maxSkillLv,1);assert.equal(r.effects[0].value,.3);assert.equal(r.effects[0].durationSeconds,5);
 assert.equal(r.mana,215);assert.equal(r.cd,77);assert.equal(r.castTimeSeconds,.5);
 assert.throws(()=>resolveSkillAtLevel(skill,2,{classKey:'knight'}),/exceeds/);
});
test('Shield Storm extends damage and Mana to twenty while retaining old levels and capping daze',()=>{
 const skill=catalog.find(s=>s.nr===95);
 const d=JSON.parse(fs.readFileSync('data/balancing/knight-protection-shieldstorm-decision.json'));
 const old=JSON.parse(fs.readFileSync(d.backup+'/skills.json')).find(s=>s.nr===95);
 assert.equal(skill.maxSkillLv,20);
 for(let level=1;level<=20;level++){
  const r=resolveSkillAtLevel(skill,level,{classKey:'knight'});
  assert.equal(r.patk,272+65*(level-1));assert.equal(r.mana,68+16*(level-1));
  assert.equal(r.cd,37);assert.equal(r.castTimeSeconds,.1);
  assert(Math.abs(r.effects[0].durationSeconds-Math.min(3,1+(level-1)/7))<1e-12);
  if(level<=15){const previous=resolveSkillAtLevel(old,level);assert(Math.abs(r.effects[0].durationSeconds-previous.effects[0].durationSeconds)<1e-12);}
 }
 assert.throws(()=>resolveSkillAtLevel(skill,21,{classKey:'knight'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='knight');
 assert.equal(points.sp,280);assert.equal(points.skillCount,32);
});
