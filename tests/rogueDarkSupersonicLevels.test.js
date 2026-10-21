import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const d=JSON.parse(fs.readFileSync('data/balancing/rogue-dark-supersonic-decision.json'));
const before=JSON.parse(fs.readFileSync(d.backup+'/skills.json'));
test('Dark Strike retains endpoints and all twenty levels resolve integer damage, Mana and cooldown',()=>{
 const skill=catalog.find(s=>s.nr===27),old=before.find(s=>s.nr===27);assert.equal(skill.maxSkillLv,20);
 for(const [level,oldLevel]of [[1,1],[20,15]]){
  const a=resolveSkillAtLevel(skill,level),b=resolveSkillAtLevel(old,oldLevel);
  for(const k of ['patk','mana','cd','castTimeSeconds'])assert.equal(a[k],b[k]);
 }
 for(let level=1;level<=20;level++){const r=resolveSkillAtLevel(skill,level);for(const k of ['patk','mana','cd'])assert(Number.isInteger(r[k]));}
});
test('Supersonic Blade reaches former level six over ten integer levels with unchanged paralysis',()=>{
 const skill=catalog.find(s=>s.nr===115),old=before.find(s=>s.nr===115);assert.equal(skill.maxSkillLv,10);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(skill,level);for(const k of ['patk','mana','cd'])assert(Number.isInteger(r[k]));
  assert.equal(r.mana,Math.round(r.patk*.25));assert.deepEqual(r.effects,old.effects);assert.equal(r.effects[0].durationSeconds,.5);assert.equal(r.castTimeSeconds,.1);
 }
 const end=resolveSkillAtLevel(skill,10),target=resolveSkillAtLevel({...old,maxSkillLv:6},6);
 for(const k of ['patk','mana','cd'])assert.equal(end[k],target[k]);
 assert.throws(()=>resolveSkillAtLevel(skill,11),/exceeds/);
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='villian');assert.equal(p.skills.find(s=>s.nr===27).sp,20);assert.equal(p.skills.find(s=>s.nr===115).sp,10);assert.equal(p.skillCount,32);
});
