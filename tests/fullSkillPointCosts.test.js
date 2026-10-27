import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {increasingCosts,fullSkillPointCostUpdates} from '../services/fullSkillPointCosts.js';
import {skillPointCostAtLevel,skillPointCostRanks} from '../services/skillPointCosts.js';
import {learnableSkillLevel} from '../services/skillLearningLimits.js';
import {skillClassVariant} from '../services/skillClassVariant.js';
import {SkillDataModel} from '../models/skillSchema.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const catalog=read('data/skills.json'),rules=read('data/balancing/skill-point-cost-rules.json'),plan=read('data/balancing/skill-learning-plan.json');
const memberships={};
for(const f of fs.readdirSync('data/balancing').filter(f=>f.endsWith('-skill-review.json'))){const r=read(`data/balancing/${f}`);if(r.skills)memberships[r.classKey]=r.skillNumbers??r.skills.map(s=>s.nr);}
const expected=fullSkillPointCostUpdates(catalog,rules,plan,memberships);
test('every supported schedule has exact totals and increasingly expensive final ranks',()=>{
  for(const n of [1,2,3,4,5,6,10,15,20])for(const total of [300,400]){const a=increasingCosts(n,total);assert.equal(a.reduce((s,v)=>s+v,0),total);assert(a.every((v,i)=>Number.isSafeInteger(v)&&v>0&&(!i||v>=a[i-1])));if(n>1)assert(a.at(-1)>a[0]);}
  assert.deepEqual(increasingCosts(3,300),[80,100,120]);
});
test('all class-specific caps, initial costs and full-budget prices are defined',async()=>{
  for(const s of expected)await new SkillDataModel(s).validate();
  for(const [key,numbers]of Object.entries(memberships))for(const nr of numbers){
    const s=expected.find(s=>s.nr===nr),a=skillPointCostRanks(s,key),n=learnableSkillLevel(s,key);
    assert.equal(a.length,n);for(let i=1;i<=n;i++)assert.equal(skillPointCostAtLevel(s,i,key),a[i-1]);
    assert.throws(()=>skillPointCostAtLevel(s,n+1,key),RangeError);
    const starter=rules.sharedFirstLevelCosts[nr];if(starter!==undefined)assert.equal(a[0],starter);
    if(![133,134,135,136,137,138].includes(nr))assert.equal(a.reduce((s,v)=>s+v,0),(skillClassVariant(s,key).learningRequirements?.minimumCharacterLevel??0)>=55?400:300);
  }
});
test('only cost fields change, with deterministic regeneration',()=>{
  for(let i=0;i<catalog.length;i++){const c=structuredClone(expected[i]);if(catalog[i].skillPointCosts)c.skillPointCosts=catalog[i].skillPointCosts;else delete c.skillPointCosts;assert.deepEqual(c,catalog[i]);}
  assert.deepEqual(fullSkillPointCostUpdates(expected,rules,plan,memberships),expected);
});
