import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {monsterArmorReduction,playerArmorReduction} from '../services/combatDefense.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
const pre={key:'adventurer',name:'Fixture',weapons:[],includedSkills:[],stats:{maxHealth:100,maxMana:100,physicalAttack:100,magicalAttack:100,physicalDefense:326.8,magicalDefense:324.8,healthRegen:0,manaRegen:0,attackSpeed:1,criticalDamageBonus:0.8}};
const encounter={playerLevel:100,enemyLevel:100,enemyAttackInterval:1,enemy:{physicalAttack:100,physicalDefense:0,magicalDefense:0}};
const run=(skills=[],config={},attackNumbers=[])=>simulateClass({pre:structuredClone(pre),skills,model,attackNumbers,config:{duration:10,targetHealth:1e6,attackMode:'autoOnly',regenInterval:2,manaRegenInterval:3,encounter:structuredClone(encounter),...config}});

test('Defense curves meet approved anchors, asymmetric monster branches and zero-defense limits',()=>{
 assert.ok(Math.abs(playerArmorReduction(326.8,100)-0.5)<1e-9);
 assert.ok(Math.abs(playerArmorReduction(324.8,100,'magical')-0.5)<1e-9);
 assert.equal(playerArmorReduction(0,100),0);
 assert.equal(playerArmorReduction(10,100),0);
 assert.equal(monsterArmorReduction(0,120),0.1);
 assert.ok(Math.abs(monsterArmorReduction(500,120)-0.3)<1e-9);
 assert.ok(Math.abs(monsterArmorReduction(500,110)-0.3909090909090909)<1e-9);
 assert.ok(Math.abs(monsterArmorReduction(500,130)-0.2846153846153846)<1e-9);
 assert.equal(monsterArmorReduction(10000,1),1);
 assert.throws(()=>monsterArmorReduction(1,0),RangeError);
});

test('Enemy hits use player armor, start after a full interval and stop the fight on death',()=>{
 const result=run();
 assert.equal(result.enemyHits,2);assert.ok(Math.abs(result.incomingDamage-100)<1e-9);
 assert.equal(result.deathAt,2);assert.equal(result.finalHealth,0);
 assert.equal(result.targetDeathAt,undefined);
 assert.ok(result.skills.every(s=>s.useTimes.every(t=>t<2)));
});

test('Calibration bypass removes the armor floor and sweetspot armor retains exactly 70% for both channels',()=>{
 for(const key of ['adventurer','healer']){
  const actor={...structuredClone(pre),key};
  const runCalibration=ignoreTargetArmor=>simulateClass({pre:actor,skills:[],model,attackNumbers:[],config:{duration:10,targetHealth:1e9,attackMode:'autoOnly',encounter:{...encounter,ignoreTargetArmor,enemy:{physicalAttack:0,physicalDefense:100*25/6,magicalDefense:100*25/6}}}});
  const raw=runCalibration(true),armored=runCalibration(false);
  assert.ok(Math.abs(raw.totalDamage-raw.rawOutgoingDamage)<1e-8);
  assert.ok(Math.abs(armored.totalDamage/raw.totalDamage-.7)<1e-10);
  assert.equal(raw.healthRegenerated,0);
 }
});

test('A level-one Ritualist without Burn Out has no learned-passive HP drain',()=>{
 const actor={...structuredClone(pre),key:'ritualist'};
 const result=simulateClass({pre:actor,skills:[],model,attackNumbers:[],config:{duration:10,targetHealth:1e9,attackMode:'autoOnly',encounter:{...encounter,enemy:{physicalAttack:0,physicalDefense:0,magicalDefense:0}}}});
 assert.equal(result.healthCosts,0);assert.equal(result.finalHealth,100);assert.equal(result.deathAt,undefined);
});

test('A lethal player hit prevents future monster attacks',()=>{
 const result=run([],{targetHealth:50});
 assert.equal(result.targetDeathAt,0);assert.equal(result.enemyHits,0);assert.equal(result.finalHealth,100);
});

test('Pure self-healing spends an action and delays player death',()=>{
 const heal={nr:990002,skillName_de:'Fixture heal',maxSkillLv:1,cd:5,castTimeSeconds:0.1,resourceCosts:[],effects:[{type:'heal',target:'self',value:50,unit:'flat'}]};
 const result=run([heal],{encounter:{...encounter,selfHealNumbers:[heal.nr],healBelowFraction:0.6},autoToSkillSeconds:0});
 assert.ok(Math.abs(result.healing-50)<1e-9);assert.equal(result.deathAt,3);
 assert.ok(result.skills.find(s=>s.nr===heal.nr).applications===1);
});

test('Physical and magical skill hits use the corresponding monster defense',()=>{
 const hit=stat=>({nr:990003,skillName_de:'Fixture attack',maxSkillLv:1,cd:10,castTimeSeconds:0,[stat]:100,resourceCosts:[]});
 const encounterSettings={...encounter,playerLevel:120,enemy:{physicalAttack:0,physicalDefense:500,magicalDefense:0}};
 for(const [stat,expected]of [['patk',140],['matk',180]]){
  const skill=hit(stat),result=run([skill],{duration:0.1,attackMode:'skillsOnly',encounter:encounterSettings},[skill.nr]);
  assert.ok(Math.abs(result.totalDamage-expected)<1e-9);
 }
});

test('Passive HP regeneration cannot heal an actor during an encounter',()=>{
 const actor=structuredClone(pre);actor.stats.healthRegen=1000;
 const result=simulateClass({pre:actor,skills:[],model,attackNumbers:[],config:{duration:3,targetHealth:1e6,attackMode:'autoOnly',regenInterval:2,encounter:structuredClone(encounter)}});
 assert.equal(result.healthRegenerated,0);assert.equal(result.deathAt,2);
});

test('Stun immune bosses cannot open the Shackle-dependent Torment and Harvest window',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const actor=structuredClone(pre);actor.key='ritualist';actor.stats.maxHealth=10000;actor.stats.maxMana=10000;
 const run=immune=>simulateClass({pre:structuredClone(actor),skills:catalog,model,attackNumbers:[103,104,105],config:{duration:4,targetHealth:1e9,attackMode:'skillsOnly',encounter:{...encounter,enemy:{physicalAttack:0,physicalDefense:0,magicalDefense:0},controlImmunities:immune?['stun']:[]}}});
 const immune=run(true),normal=run(false);
 assert.ok(immune.skills.find(s=>s.nr===103)?.applications>0);
 assert.ok(!immune.skills.some(s=>[104,105].includes(s.nr)&&s.applications>0));
 assert.ok(normal.skills.find(s=>s.nr===104)?.applications>0);
});
