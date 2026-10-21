import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {summonedCreatureStats} from '../services/summonedCreatureStats.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
test('Nature Spirit combines its base with attribute inheritance and Bond at the Druid cap',()=>{
 const skill=resolveSkillAtLevel(catalog.find(s=>s.nr===244),1),bond=skillForClass(catalog.find(s=>s.nr===134),'druid');
 const result=summonedCreatureStats(skill,{attributes:{intelligence:117,vitality:129,wisdom:179},bond});
 for(const [key,value]of Object.entries({maxHealth:1586,magicalAttack:118.18,physicalDefense:119.4,magicalDefense:158.4}))assert.ok(Math.abs(result[key]-value)<1e-8,key);
 assert.equal(result.physicalAttack,0);
});
test('Nature Spirit level two gains creature attributes in addition to inheritance and Bond',()=>{
 const definition=catalog.find(s=>s.nr===244),bond=skillForClass(catalog.find(s=>s.nr===134),'druid');
 const context={attributes:{intelligence:117,vitality:129,wisdom:179},bond};
 const one=summonedCreatureStats(resolveSkillAtLevel(definition,1),context);
 const two=summonedCreatureStats(resolveSkillAtLevel(definition,2),context);
 assert.equal(two.maxHealth-one.maxHealth,300);
 assert.ok(Math.abs(two.magicalAttack-one.magicalAttack-18)<1e-8);
 assert.ok(Math.abs(two.physicalDefense-one.physicalDefense-20)<1e-8);
 assert.ok(Math.abs(two.magicalDefense-one.magicalDefense-20)<1e-8);
 assert.equal(two.physicalAttack,0);
});
test('Spirit Companion gains Bond durability without converting Strength or Intelligence into ranged attack',()=>{
 const skill=catalog.find(s=>s.nr===226),bond=skillForClass(catalog.find(s=>s.nr===134),'hunter');
 const result=summonedCreatureStats(skill,{attributes:{dexterity:84,vitality:160,wisdom:144},bond});
 assert.equal(result.maxHealth,1865);assert.equal(result.physicalAttack,84.36);
 assert.equal(result.physicalDefense,141);assert.ok(Math.abs(result.magicalDefense-130.4)<1e-8);
 assert.equal(result.magicalAttack,0);
});
test('Morrak adds base values to final caster stats and rejects direct Bond',()=>{
 const skill=catalog.find(s=>s.nr===237),bond=skillForClass(catalog.find(s=>s.nr===134),'ritualist');
 const result=summonedCreatureStats(skill,{stats:{maxHealth:4500,magicalAttack:900,magicalDefense:900},bond});
 assert.deepEqual(result,{maxHealth:1750,physicalAttack:0,magicalAttack:347,physicalDefense:330,magicalDefense:336});
});
