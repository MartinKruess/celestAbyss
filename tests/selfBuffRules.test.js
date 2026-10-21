import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {usesFixedSelfBuffCast} from '../services/selfBuffRules.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const skills=JSON.parse(fs.readFileSync('data/skills.json'));
test('Assigned self buffs resolve fixed activation and level-based Mana at every learned level',()=>{
 const selected=skills.filter(usesFixedSelfBuffCast);assert.equal(selected.length,35);
 for(const s of selected)for(let lv=1;lv<=s.maxSkillLv;lv++){const r=resolveSkillAtLevel(s,lv);assert.equal(r.mana,50+13*(lv-1),s.nr+' Mana');assert.equal(r.castTimeSeconds,.1,s.nr+' cast');}
 assert.equal(usesFixedSelfBuffCast(skills.find(s=>s.nr===158)),false);
});
test('Inner Strength respects the approved twenty Strength cap',()=>{const r=resolveSkillAtLevel(skills.find(s=>s.nr===162),15);assert.equal(r.str,20);});


