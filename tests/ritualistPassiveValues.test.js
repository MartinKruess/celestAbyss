import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {simulateClass,conversionDelta} from '../services/timedDamageSimulation.js';
import {soulReserveAttackBonus} from '../services/soulReserveBonus.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const model=JSON.parse(fs.readFileSync('data/balancing/attribute-model.json'));
const attack={nr:9001,skillName_de:'fixture spell',maxSkillLv:1,matk:10,cd:20,castTimeSeconds:.1,resourceCosts:[]};
const stats={maxHealth:1e6,maxMana:1e6,magicalAttack:100,physicalAttack:0,attackSpeed:1,healthRegen:0,manaRegen:0};
function run(burn,reaper,baked=false,reserve){return simulateClass({pre:{key:'ritualist',name:'fixture',weapons:[],stats:{...stats,magicalAttack:100},knownAttributes:{},includedSkills:baked?[120]:[]},skills:[burn,reaper,attack,...(reserve?[reserve]:[])],model,attackNumbers:[attack.nr],config:{duration:1,targetHealth:1e9,attackMode:'skillsOnly',cacheCombatStats:true}});}
test('Burn Out damage is resolved from its stored effect, rather than an old hard-coded +80',()=>{
 const current=catalog.find(s=>s.nr===214),reaper=catalog.find(s=>s.nr===120),old=structuredClone(current);
 old.effects[0].value=8;old.effects[0].valueScaling={type:'linear',base:8,perLevel:8};old.levelProgression.rules.find(r=>r.path.join('.')==='effects.0.valueScaling').rule={kind:'linear',base:8,perLevel:8};
 const a=run(current,reaper),b=run(old,reaper);assert.equal(a.skills.find(s=>s.nr===9001).applications,1);assert(Math.abs(b.skillDamage-a.skillDamage-40*1.01)<1e-7);assert.equal(a.healthCosts,b.healthCosts);
});
test('Reaper grants no Intelligence or attack while retaining soul storage',()=>{
 const burn=catalog.find(s=>s.nr===214),reaper=catalog.find(s=>s.nr===120),old=structuredClone(reaper);Object.assign(old.soulStorageSettings,{bonusStat:'int',fragmentsPerBonusStep:10,bonusPerFullStep:1});
 const current=run(burn,reaper),previous=run(burn,old),baked=run(burn,reaper,true);
 const expected=conversionDelta(model,'ritualist','intelligence',10).magicalAttack*1.01;
 assert(Math.abs(previous.skillDamage-current.skillDamage-expected)<1e-7);assert(Math.abs(baked.skillDamage-current.skillDamage)<1e-7);
});
test('Number of Victims uses only complete groups of ten and its stored cap in live damage',()=>{
 const reserve=catalog.find(s=>s.nr===241);
 for(const [souls,expected]of [[0,0],[9,0],[10,3],[19,3],[20,6],[99,27],[100,30],[101,30]])assert.equal(soulReserveAttackBonus(reserve,souls),expected);
 const burn=catalog.find(s=>s.nr===214),reaper=catalog.find(s=>s.nr===120);
 const a=run(burn,reaper,false,reserve),b=run(burn,reaper);
 assert(Math.abs(a.skillDamage-b.skillDamage-30*1.01)<1e-7);
});
