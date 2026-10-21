import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
test('Faith Fortification is Luminet-only and trades temporary Wisdom for Intelligence',()=>{const all=JSON.parse(fs.readFileSync('data/skills.json'));const s=all.find(s=>s.nr===74);assert.deepEqual(s.charClass,['Luminet','Lightmage']);assert.equal(s.dmgType,'selfbuff');for(let level=1;level<=10;level++){const r=resolveSkillAtLevel(s,level);assert.equal(r.int,3*level);assert.equal(r.wis,-1.5*level);assert.equal(r.mana,50+13*(level-1));assert.equal(r.castTimeSeconds,.1);}assert.equal(s.dur,300);assert.equal(s.cd,60);assert.deepEqual(s.statBonusTargets,{int:'self',wis:'self'});});
