import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {firstSkillPointCost,skillPointCostAtLevel,starterSkillPointCostUpdates} from '../services/skillPointCosts.js';
import {SkillDataModel} from '../models/skillSchema.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const catalog=read('data/skills.json'),rules=read('data/balancing/skill-point-cost-rules.json'),plan=read('data/balancing/skill-learning-plan.json');
const changes=starterSkillPointCostUpdates(catalog,rules,plan),get=nr=>changes.find(s=>s.nr===nr)??catalog.find(s=>s.nr===nr);

test('all approved initial costs validate without changing combat or unlock values',async()=>{
  for(const [nr,cost]of Object.entries(rules.sharedFirstLevelCosts))assert.equal(firstSkillPointCost(get(Number(nr))),cost);
  for(const [key,attack]of Object.entries(plan.classFirstAttacks))if(attack)assert.equal(firstSkillPointCost(get(attack.nr),key==='rogue'?'villian':key),12);
  for(const s of changes){await new SkillDataModel(s).validate();const original=catalog.find(c=>c.nr===s.nr),copy=structuredClone(s);if(original.skillPointCosts)copy.skillPointCosts=original.skillPointCosts;else delete copy.skillPointCosts;assert.deepEqual(copy,original);}
});

test('complete prices are used while legacy skills without schedules remain unresolved',()=>{
  assert.equal(skillPointCostAtLevel(get(87),1,'butcher'),12);
  assert.equal(skillPointCostAtLevel(get(87),2,'butcher'),16);
  assert.equal(firstSkillPointCost(get(77),'knight'),12);
  assert.equal(firstSkillPointCost(get(77),'gladiator'),10);
  assert.equal(firstSkillPointCost(get(248),'adventurer'),10);
  assert.equal(firstSkillPointCost(get(36),'luminet'),12);
  assert.equal(firstSkillPointCost(get(231),'luminet'),10);
  assert.equal(skillPointCostAtLevel({maxSkillLv:2,skillpoints:1},2),null);
  assert.throws(()=>skillPointCostAtLevel(get(87),0,'butcher'),RangeError);
});

test('the approved initial package requires 55 points including racial skill and Endurance',()=>{
  const common=[5,139,201,144,134,135,138,136,137,133,45];
  assert.equal(common.reduce((sum,nr)=>sum+firstSkillPointCost(get(nr),'gladiator'),0)+firstSkillPointCost(get(61),'gladiator'),55);
});
