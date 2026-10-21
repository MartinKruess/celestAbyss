import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const decision=JSON.parse(fs.readFileSync('data/balancing/ritualist-280-decision.json'));
const before=JSON.parse(fs.readFileSync(decision.backup+'/skills.json'));
test('Spirit of Fire halves both bonuses at every level while preserving costs and timing',()=>{
 const skill=catalog.find(s=>s.nr===178),old=before.find(s=>s.nr===178);
 assert.equal(skill.maxSkillLv,10);
 for(let level=1;level<=10;level++){
  const a=resolveSkillAtLevel(skill,level),b=resolveSkillAtLevel(old,level);
  assert.equal(a.int,b.int/2);assert.equal(a.effects[0].value,b.effects[0].value/2);
  for(const key of ['mana','cd','dur','castTimeSeconds'])assert.equal(a[key],b[key]);
 }
});
test('Ritualist twenty-level skills preserve old endpoints including costs, control and defense reductions',()=>{
 for(const nr of [103,100]){
  const skill=catalog.find(s=>s.nr===nr),old=before.find(s=>s.nr===nr);assert.equal(skill.maxSkillLv,20);
  for(const [level,oldLevel]of [[1,1],[20,old.maxSkillLv]]){
   const a=resolveSkillAtLevel(skill,level),b=resolveSkillAtLevel(old,oldLevel);
   for(const key of ['matk','mana','cd','dur','castTimeSeconds'])if(typeof b[key]==='number')assert(Math.abs(a[key]-b[key])<1e-10);
   assert.deepEqual(a.resourceCosts,b.resourceCosts);
   for(const [i,e]of b.effects.entries()){
    if(e.value!==undefined)assert(Math.abs(a.effects[i].value-e.value)<1e-10);
    assert.equal(a.effects[i].durationSeconds,e.durationSeconds);
   }
  }
  for(let level=1;level<=20;level++){
   const a=resolveSkillAtLevel(skill,level);
   if(nr===103){assert(a.matk>=97&&a.matk<=237);assert(a.mana>=39&&a.mana<=95);assert.equal(a.resourceCosts.find(c=>c.resource==='soulFragments').scaling.base,1);assert(a.dur>=2&&a.dur<=3);}
   else for(const e of a.effects)assert(e.value>=({pdef:-.30,mdef:-.50}[e.stat])-1e-10);
  }
  assert.throws(()=>resolveSkillAtLevel(skill,21),/exceeds/);
 }
 assert.equal(catalog.find(s=>s.nr===209).maxSkillLv,10);
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='ritualist');assert.equal(p.sp,280);assert.equal(p.skillCount,32);
});
