import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {attributeConversionFactor} from '../services/attributeConversion.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Technical Perfection has four ranks with one extra maximum Mana per Dexterity each',()=>{
 const s=catalog.find(s=>s.nr===243);assert.equal(s.maxSkillLv,4);
 for(let level=1;level<=4;level++){const r=resolveSkillAtLevel(s,level);assert.equal(r.attributeConversionBonus.amountPerPoint,level);assert.equal(attributeConversionFactor(r),level);assert.equal(55*attributeConversionFactor(r),[55,110,165,220][level-1]);}
 assert.equal(attributeConversionFactor(s),4);assert.deepEqual(s.resourceCosts,[]);
 assert.throws(()=>resolveSkillAtLevel(s,5),/exceeds/);
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='villian');assert.equal(p.sp,280);assert.equal(p.skillCount,32);
});
test('Assassin halves attack speed, removes all direct Ambush fields and retains timing and prices',()=>{
 const s=catalog.find(s=>s.nr===238),d=JSON.parse(fs.readFileSync('data/balancing/rogue-perfection-assassin-decision.json'));
 const old=JSON.parse(fs.readFileSync(d.backup+'/skills.json')).find(s=>s.nr===238);
 assert.equal(s.amb,undefined);assert.equal(s.statScaling.amb,undefined);assert.equal(s.statBonusUnits.amb,undefined);
 assert(!s.levelProgression.rules.some(r=>r.path.includes('amb')));
 for(let level=1;level<=10;level++){
  const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(old,level);assert(Math.abs(a.atkSpeed-b.atkSpeed/2)<1e-12);
  for(const k of ['mana','dur','cd','castTimeSeconds'])assert.equal(a[k],b[k]);
 }
 assert.equal(resolveSkillAtLevel(s,10).atkSpeed,.1);
});
