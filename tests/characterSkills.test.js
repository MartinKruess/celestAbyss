import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCharacterSkills, normalizeLearnedSkills, dedicatedSkillCatalog } from '../services/characterSkills.js';
const skill = { nr: 1, skillName_de: 'Testskill', description_de: 'Ein Skill', type: 'skill', maxSkillLv: 10,
  currentSkillLv: 7, learningRequirements: { minimumCharacterLevel: 5, classOverrides: { hunter: 2 } },
  learningLimits: { defaultMaxLevel: 3 }, skillPointCosts: { firstLevel: 10 } };
test('skill display uses class unlock/cap/cost but never treats shared template rank as learned', () => {
  const [s] = buildCharacterSkills([skill], 'hunter');
  assert.equal(s.minimumCharacterLevel, 2); assert.equal(s.maximumLevel, 3); assert.equal(s.firstPointCost, 10);
  assert.equal(s.learnedLevelKnown, true); assert.equal(s.learnedLevel, 0); assert.equal(skill.currentSkillLv, 7);
});
test('skill transport retains explicit missing requirements and rejects duplicate definitions', () => {
  const [s] = buildCharacterSkills([{ nr: 2, skillName_de: 'Name\nInjected', type: 'passive', maxSkillLv: 1 }], 'hunter');
  assert.equal(s.minimumCharacterLevel, -1); assert.equal(s.firstPointCost, -1); assert.equal(s.name, 'Name Injected');
  assert.throws(() => buildCharacterSkills([skill, skill], 'hunter'));
});

test('personal learned ranks round-trip independently of template rank; costs never inferred', () => {
 const [s]=buildCharacterSkills([skill], 'hunter', [{number:1,level:1}]);
 assert.equal(s.learnedLevel,1); assert.equal(s.learnedLevelKnown,true);
 assert.equal(s.definedLearningRanks,3); assert.deepEqual(s.rankCosts,[10,-1,-1]); assert.equal(s.furtherLevelsDefined,false);
 assert.throws(()=>buildCharacterSkills([skill],'hunter',[{number:1,level:4}]));
 for(const invalid of [[{number:1,level:0}],[{number:1,level:1},{number:1,level:2}],[{number:1,level:1,extra:1}]]) assert.throws(()=>normalizeLearnedSkills(invalid));
});

test('global rank unlock retains class cap, character level and exact costs',()=>{
 const sample={...skill,learningLimits:{defaultMaxLevel:3},skillPointCosts:{rankCosts:[10,14,18]}};
 const [s]=buildCharacterSkills([sample],'hunter',[{number:1,level:1}]);
 assert.equal(s.minimumCharacterLevel,2);assert.equal(s.definedLearningRanks,3);assert.equal(s.maximumLevel,3);
 assert.deepEqual(s.rankCosts,[10,14,18]);
});

test('dedicated receives level-gated future skills but preserves missing quest gates',()=>{
 const future={number:900,minimumCharacterLevel:47,learnedLevel:0};
 const unlocked={level:46,completedSkillQuests:['foundation','specialization']};
 assert.equal(dedicatedSkillCatalog([future],unlocked)[0].discoveryLevel,47);
 assert.equal(dedicatedSkillCatalog([future],{...unlocked,level:47})[0].discoveryLevel,1);
 assert.equal(dedicatedSkillCatalog([future],{level:49,completedSkillQuests:['foundation']})[0].discoveryLevel,-1);
 assert.equal(dedicatedSkillCatalog([{...future,minimumCharacterLevel:42}],unlocked)[0].discoveryLevel,1);
});
