import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const decision=JSON.parse(fs.readFileSync('data/balancing/training-rebalance-decision.json'));
const before=JSON.parse(fs.readFileSync(decision.backup+'/skills.json'));
test('training changes preserve assignments and skill levels and match requested maximum bonuses',()=>{
 for(const [nr,expected]of Object.entries(decision.maximumBonuses)){
  const s=catalog.find(s=>s.nr===Number(nr)),old=before.find(s=>s.nr===Number(nr));
  assert.equal(s.maxSkillLv,old.maxSkillLv);assert.deepEqual(s.charClass,old.charClass);assert.equal(s._id,old._id);
  const r=resolveSkillAtLevel(s,s.maxSkillLv);for(const [k,v]of Object.entries(expected))assert.equal(r[k],v);
 }
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes;assert.equal(p.length,13);for(const c of p){assert.equal(c.sp,280);assert.equal(c.skillCount,32);}
});
test('shared training scales correctly at every level without changing magical defense',()=>{
 const w=catalog.find(s=>s.nr===201),a=catalog.find(s=>s.nr===144);
 for(let level=1;level<=20;level++){const r=resolveSkillAtLevel(w,level);assert.equal(r.patk,level);assert.equal(r.matk,level);assert.equal(r.atkSpeed,undefined);}
 for(let level=1;level<=10;level++){const r=resolveSkillAtLevel(a,level);assert.equal(r.pdef,3*level);assert.equal(r.mdef,6*level);}
});
test('Dagger Training exactly mirrors Dual Axe attributes at all ten levels',()=>{
 const dagger=catalog.find(s=>s.nr===22),dual=catalog.find(s=>s.nr===26);
 for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(dagger,level),b=resolveSkillAtLevel(dual,level);assert.equal(a.agi,b.str);assert.equal(a.str,b.agi);}
});
test('Knight replaces Dexterity with Vitality and Bow Training drops direct attack without residual rules',()=>{
 const sword=catalog.find(s=>s.nr===102),oldSword=before.find(s=>s.nr===102);
 for(let level=1;level<=5;level++){const r=resolveSkillAtLevel(sword,level),old=resolveSkillAtLevel(oldSword,level);assert.equal(r.vita,old.dex);assert.equal(r.str,old.str);assert.equal(r.dex,undefined);}
 assert(!sword.levelProgression.rules.some(r=>r.path.includes('dex')));
 const bow=catalog.find(s=>s.nr===18),oldBow=before.find(s=>s.nr===18);
 for(let level=1;level<=10;level++){const r=resolveSkillAtLevel(bow,level),old=resolveSkillAtLevel(oldBow,level);assert.equal(r.dex,old.dex);assert.equal(r.patk,undefined);}
 assert(!bow.levelProgression.rules.some(r=>r.path.includes('patk')));
});
