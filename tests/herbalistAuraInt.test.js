import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const skills=JSON.parse(fs.readFileSync('data/skills.json'));
test('Aura Suppression grants twelve Intelligence while retaining threat reduction and self-buff cost',()=>{const s=resolveSkillAtLevel(skills.find(s=>s.nr===165),10);assert(Math.abs(s.int-12)<1e-10);assert.equal(s.mana,167);assert.equal(s.castTimeSeconds,.1);assert(s.effects.some(e=>e.type==='threatMultiplier'));const p=resolveSkillAtLevel(skills.find(s=>s.nr===164),10);assert.equal(p.wis,12);});
test('shared Aura Suppression reduces damage threat by half a percent per level for both classes',()=>{
 const definition=skills.find(s=>s.nr===165);
 for(const alias of ['Herbalist','Witcher','Luminet','Lightmage'])assert(definition.charClass.includes(alias));
 for(const classKey of ['herbalist','luminet'])for(let level=1;level<=10;level++){
  const s=resolveSkillAtLevel(definition,level,{classKey});
  assert.equal(s.type,'selfBuff');
  assert.equal(s.dur,180);assert.equal(s.cd,60);
  const threat=s.effects.find(e=>e.type==='threatMultiplier');
  assert.equal(threat.threatBasis,'damageDealt');
  assert(Math.abs(threat.value-(1-level*.005))<1e-12);
 }
});
