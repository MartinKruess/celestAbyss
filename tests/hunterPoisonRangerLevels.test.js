import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Poison Arrow retains former starting and maximum effects and costs over ten levels',()=>{
 const skill=catalog.find(s=>s.nr===152);
 const d=JSON.parse(fs.readFileSync('data/balancing/hunter-poison-ranger-decision.json'));
 const old=JSON.parse(fs.readFileSync(d.backup+'/skills.json')).find(s=>s.nr===152);
 assert.equal(skill.maxSkillLv,10);
 for(const [level,previousLevel]of [[1,1],[10,20]]){
  const current=resolveSkillAtLevel(skill,level),previous=resolveSkillAtLevel(old,previousLevel);
  const effect=structuredClone(current.effects[0]),oldEffect=structuredClone(previous.effects[0]);
  delete effect.valueScaling;delete oldEffect.valueScaling;assert.deepEqual(effect,oldEffect);
  for(const k of ['mana','dur','cd','castTimeSeconds'])assert.equal(current[k],previous[k]);
 }
 let lastDamage=0,lastMana=0;
 for(let level=1;level<=10;level++){const r=resolveSkillAtLevel(skill,level);assert(r.effects[0].value>lastDamage);assert(r.mana>lastMana);lastDamage=r.effects[0].value;lastMana=r.mana;}
 assert.throws(()=>resolveSkillAtLevel(skill,11),/exceeds/);
});
test('Ranger has one level with two Agility, three Dexterity, no direct attack and 54 Mana',()=>{
 const skill=catalog.find(s=>s.nr===156),r=resolveSkillAtLevel(skill,1,{classKey:'hunter'});
 assert.equal(skill.maxSkillLv,1);assert.equal(r.agi,2);assert.equal(r.dex,3);
 assert.equal(r.patk,undefined);assert.equal(r.statScaling.patk,undefined);
 assert.equal(r.mana,54);assert.equal(r.dur,600);assert.equal(r.cd,60);assert.equal(r.castTimeSeconds,.1);
 assert.throws(()=>resolveSkillAtLevel(skill,2,{classKey:'hunter'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='hunter');assert.equal(points.sp,280);assert.equal(points.skillCount,32);
});
