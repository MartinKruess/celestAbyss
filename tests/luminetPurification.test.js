import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const s=JSON.parse(fs.readFileSync('data/skills.json')).find(s=>s.nr===260);
test('Purification preserves school damage reductions separately from curse application resistance',async()=>{const model=new SkillDataModel(s);await model.validate();assert.equal(model.effects[1].damageSchool,'darkness');assert.equal(s.dmgType,'passive');assert.deepEqual(s.resourceCosts,[]);for(let lv=1;lv<=10;lv++){const r=resolveSkillAtLevel(s,lv);assert(Math.abs(r.effects[0].value-.01*lv)<1e-10);assert(Math.abs(r.effects[1].value-.005*lv)<1e-10);assert(Math.abs(r.effects[2].value-.005*lv)<1e-10);}assert.equal(s.effects[2].resistanceCheck,'onStatusApplication');assert.equal(s.effects[0].type,'damageReduction');});
