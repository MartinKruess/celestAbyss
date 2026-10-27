import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {skillUnlockUpdates} from '../services/skillUnlockPlan.js';
import {skillClassVariant} from '../services/skillClassVariant.js';
import {withSkillLearningOverview} from '../services/skillLearningOverview.js';
import {SkillDataModel} from '../models/skillSchema.js';

const catalog=JSON.parse(fs.readFileSync('data/skills.json','utf8'));
const plan=JSON.parse(fs.readFileSync('data/balancing/skill-learning-plan.json','utf8'));
const changes=skillUnlockUpdates(catalog,plan);
const get=nr=>changes.find(s=>s.nr===nr)??catalog.find(s=>s.nr===nr);

test('shared starter unlocks and the eleven class attacks retain all combat values',async()=>{
  for(const [nr,level]of Object.entries(plan.sharedFirstUnlocks)) assert.equal(get(Number(nr)).learningRequirements.minimumCharacterLevel,level);
  for(const [key,first]of Object.entries(plan.classFirstAttacks))if(first) assert.equal(skillClassVariant(get(first.nr),key==='rogue'?'villian':key).learningRequirements.minimumCharacterLevel,first.level);
  for(const s of changes){
    await new SkillDataModel(s).validate();
    const original=catalog.find(c=>c.nr===s.nr),actual=structuredClone(s);
    for(const field of ['learningRequirements','description_de','description_eng']) {
      if(Object.hasOwn(original,field))actual[field]=original[field];else delete actual[field];
    }
    assert.deepEqual(actual,original);
  }
});

test('shared unlocks apply across classes while remaining class-specific unlocks stay isolated',()=>{
  const hieb=get(77),energy=get(36);
  assert.equal(skillClassVariant(hieb,'knight').learningRequirements.minimumCharacterLevel,10);
  assert.equal(skillClassVariant(hieb,'gladiator').learningRequirements.minimumCharacterLevel,10);
  assert.equal(skillClassVariant(energy,'healer').learningRequirements.minimumCharacterLevel,6);
  assert.equal(skillClassVariant(energy,'luminet').learningRequirements.minimumCharacterLevel,6);
  assert.equal(skillClassVariant(get(231),'luminet').learningRequirements.minimumCharacterLevel,17);
});

test('overview, full table and detailed blocks follow learning order without losing content',()=>{
  const skills=[get(39),get(77),get(87)];
  const source='# Butcher\n\n## Skillübersicht\n\n| Nr | Skill |\n| --- | --- |\n| 39 | Erdbrecher |\n| 77 | Mächtiger Hieb |\n| 87 | Rotier Schlag |\n\n## Detaildaten\n\nEinleitung.\n\n### 39: Erdbrecher\n\nWert A.\n\n### 77: Mächtiger Hieb\n\nWert B.\n\n### 87: Rotier Schlag\n\nWert C.\n\n## Ende\n\nBleibt.\n';
  const result=withSkillLearningOverview(source,{skills,classKey:'butcher'});
  const detailIds=[...result.matchAll(/^### (\d+):/gm)].map(m=>Number(m[1]));
  assert.deepEqual(detailIds,[87,77,39]);
  assert.ok(result.indexOf('| 87 | Rotier Schlag |')<result.indexOf('| 77 | Mächtiger Hieb |'));
  for(const text of ['Einleitung.','Wert A.','Wert B.','Wert C.','## Ende\n\nBleibt.'])assert.equal(result.split(text).length,2);
  assert.equal(withSkillLearningOverview(result,{skills,classKey:'butcher'}),result);
});

test('movement is available at eight and Kettenschuss at twelve without selecting unresolved attacks',()=>{
  for(const nr of [14,21,25])assert.equal(get(nr).learningRequirements.minimumCharacterLevel,8);
  assert.equal(get(63).learningRequirements.minimumCharacterLevel,12);
  assert.equal(get(53).learningRequirements.minimumCharacterLevel,17);
  assert.equal(get(248).learningRequirements.minimumCharacterLevel,10);
  assert.equal(plan.classFirstAttacks.shaman,null);
  assert.equal(plan.classFirstAttacks.adventurer,null);
});

test('Gladiator learns the rage pair at 35, Warrior Charge at 47 and Bloody Breakthrough at 65',()=>{
  assert.equal(get(161).learningRequirements.minimumCharacterLevel,35);
  assert.equal(get(128).learningRequirements.minimumCharacterLevel,35);
  assert.equal(get(230).learningRequirements.minimumCharacterLevel,65);
  assert.equal(get(233).learningRequirements.minimumCharacterLevel,47);
});

test('Sturm des Feuers refers to Ritualist skill 110, not the Rogue attack 115',()=>{
  assert.equal(get(110).skillName_de,'Sturm des Feuers');
  assert.equal(get(110).learningRequirements.minimumCharacterLevel,21);
  assert.equal(get(115).skillName_de,'Überschallklinge');
  assert.equal(get(115).learningRequirements?.minimumCharacterLevel,42);
});

test('class overview shows applied values, removes duplicate plans and retains open windows',()=>{
  const original='# Ritter\n\nDetails\n';
  const pendingMovement={...catalog.find(s=>s.nr===14)};delete pendingMovement.learningRequirements;
  let md=withSkillLearningOverview(original,{skills:[get(77),pendingMovement],classKey:'knight'});
  md=md.replace('| 10 | Mächtiger Hieb | — |','| 10 | Mächtiger Hieb | 10 |').replace('| offen | Ausweichrolle | — |','| offen | Ausweichrolle | 7–8 |');
  const rendered=withSkillLearningOverview(original,{skills:[get(77),pendingMovement],classKey:'knight',existingMarkdown:md});
  assert.ok(rendered.includes('| 10 | Mächtiger Hieb | — |'));
  assert.ok(rendered.includes('| offen | Ausweichrolle | 7–8 |'));
});

test('applied catalog changes are limited to unlock requirements and Control unlock prose',()=>{
  const decision=JSON.parse(fs.readFileSync('data/balancing/starter-skill-unlocks-decision.json','utf8'));
  const before=JSON.parse(fs.readFileSync(`${decision.backup}/catalog.json`,'utf8'));
  const expected=before.map(s=>skillUnlockUpdates(before,plan).find(c=>c.nr===s.nr)??s);
  const actual=catalog.map(s=>{const copy=structuredClone(s),old=expected.find(e=>e.nr===s.nr);if(old.skillPointCosts)copy.skillPointCosts=old.skillPointCosts;else delete copy.skillPointCosts;return copy;});
  assert.deepEqual(actual,expected);
});
