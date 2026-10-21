import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('racial core skills provide twenty total attributes at maximum and preserve regeneration at every level',()=>{
 const decision=JSON.parse(fs.readFileSync('data/balancing/race-core-twenty-attributes-decision.json'));
 const before=JSON.parse(fs.readFileSync(decision.backup+'/skills.json'));
 for(const [nr,stats]of [[1,{int:10,wis:10}],[2,{str:10,agi:5,dex:5}],[5,{vita:10,wis:10}]]){
  const s=catalog.find(s=>s.nr===nr),old=before.find(s=>s.nr===nr);assert.equal(s.maxSkillLv,20);assert.equal(s._id,old._id);
  for(let level=1;level<=20;level++){
   const r=resolveSkillAtLevel(s,level),previous=resolveSkillAtLevel(old,level);
   for(const [key,max]of Object.entries(stats))assert.equal(r[key],max*level/20);
   for(const key of ['manaRegen','healthRegen','resourceCosts'])assert.deepEqual(r[key],previous[key]);
   assert.equal(['str','vita','int','wis','agi','dex'].reduce((n,k)=>n+(r[k]??0),0),level);
  }
  assert.deepEqual(s.charClass,old.charClass);assert.deepEqual(s.allowedRaces,old.allowedRaces);
 }
 const aurora=catalog.find(s=>s.nr===1);assert.equal(aurora.dex,undefined);assert.equal(aurora.statScaling.dex,undefined);assert(!aurora.levelProgression.rules.some(r=>r.path.includes('dex')));
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes;assert.equal(p.length,13);for(const c of p){assert.equal(c.sp,280);assert.equal(c.skillCount,32);}
});
