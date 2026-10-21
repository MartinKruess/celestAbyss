import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {withGroupSkillDamageBonuses} from '../services/groupSkillDamageBonus.js';
import {evaluateDamageSkill,evaluateDamagePhase,evaluateSequenceHit} from '../services/rotationDamage.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const catalog=read('data/skills.json'),model=read('data/balancing/attribute-model.json');
const stats={maxHealth:10000,maxMana:10000,physicalAttack:100,magicalAttack:200,physicalDefense:10,magicalDefense:10,attackSpeed:1,movementSpeed:1,healthRegen:0,manaRegen:0,criticalDamageBonus:.8};
const skill=(nr,patk,matk)=>({nr,skillName_de:'fixture',maxSkillLv:1,patk,matk,cd:3,castTimeSeconds:.2,resourceCosts:[]});

test('Water and Fire convert their old attack curves exactly at all ten levels without changing mana, timing or other definitions',()=>{
 const d=read('data/balancing/group-skill-damage-decision.json'),old=read(d.backup+'/catalog.json');
 for(const before of old){const s=catalog.find(s=>s.nr===before.nr);if(![193,224].includes(s.nr)){assert.deepEqual(s,before);continue;}
  for(const k of ['_id','charClass','maxSkillLv','dur','cd','castTimeSeconds','resourceCosts'])assert.deepEqual(s[k],before[k]);
  for(let level=1;level<=10;level++){
   const r=resolveSkillAtLevel(s,level),previous=resolveSkillAtLevel(before,level);assert.equal(r.patk,undefined);assert.equal(r.matk,undefined);
   for(const [field,kind]of [['patk','physical'],['matk','magical']]){const e=r.effects.find(e=>e.damageTypes.includes(kind));assert.equal(e?curveValue(e.valueScaling,level)??e.value:0,previous[field]??0);}
   if(s.nr===193)assert.equal(r.manaRegen,previous.manaRegen);
  }
 }
});

test('skill damage context leaves character attack values untouched and ignores unrelated self-buff damage effects',()=>{
 const buffs=catalog.filter(s=>[193,224].includes(s.nr));const actual=withGroupSkillDamageBonuses(stats,buffs);
 assert.equal(actual.physicalAttack,100);assert.equal(actual.magicalAttack,200);assert.equal(actual.physicalSkillDamageBonus,180);assert.equal(actual.magicalSkillDamageBonus,162);
 assert.equal(stats.physicalSkillDamageBonus,undefined);
 const own={...buffs[1],type:'selfBuff',target:'self'};
 assert.equal(withGroupSkillDamageBonuses(stats,[own]).physicalSkillDamageBonus,0);
});

test('physical, magical and mixed skill hits receive matching bonuses once per attack component',()=>{
 const s=withGroupSkillDamageBonuses(stats,catalog.filter(s=>[193,224].includes(s.nr)));
 assert.equal(evaluateDamageSkill(skill(9001,10,0),s).damage-evaluateDamageSkill(skill(9001,10,0),stats).damage,180);
 assert.equal(evaluateDamageSkill(skill(9002,0,20),s).damage-evaluateDamageSkill(skill(9002,0,20),stats).damage,162);
 assert.equal(evaluateDamageSkill(skill(9003,10,20),s).damage-evaluateDamageSkill(skill(9003,10,20),stats).damage,342);
 const multi={...skill(9004,10,0),attackExecution:{hitCount:3}};
 assert.equal(evaluateDamageSkill(multi,s).damage-evaluateDamageSkill(multi,stats).damage,540);
 const sequence={...multi,attackExecution:{sequenceScalesSkillBaseOnly:true,hitSequence:[{damageMultiplier:.25},{damageMultiplier:.75}]}};
 assert.equal(evaluateDamageSkill(sequence,s).damage-evaluateDamageSkill(sequence,stats).damage,360);
 assert.equal(evaluateSequenceHit(sequence,s,{damageMultiplier:.25})-evaluateSequenceHit(sequence,stats,{damageMultiplier:.25}),180);
 assert.equal(evaluateDamagePhase(skill(9005,10,20),s,{stat:'matk',addsCasterAttack:true})-evaluateDamagePhase(skill(9005,10,20),stats,{stat:'matk',addsCasterAttack:true}),162);
});

test('attack-scaled periodic hits benefit, while fixed residual ticks do not',()=>{
 const s=withGroupSkillDamageBonuses(stats,catalog.filter(s=>[193,224].includes(s.nr)));
 const dot=adds=>({...skill(9006,0,20),effects:[{type:'periodicDamage',value:5,damageTypes:['magical'],durationSeconds:2,intervalSeconds:1,firstTickAfterSeconds:1,addsCasterMagicalAttack:adds}]});
 assert.equal(evaluateDamageSkill(dot(true),s).damage-evaluateDamageSkill(dot(true),stats).damage,162*3);
 assert.equal(evaluateDamageSkill(dot(false),s).damage-evaluateDamageSkill(dot(false),stats).damage,162);
});

test('timed simulations keep auto-attack damage identical while physical and magical skills gain damage',()=>{
 const buffs=catalog.filter(s=>[193,224].includes(s.nr)),neutral=buffs.map(s=>({...s,effects:[]}));
 const pre={key:'adventurer',name:'fixture',weapons:[],stats,includedSkills:[],knownAttributes:{}};
 const config={duration:20,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[193,224],preparedBuffNumbers:[193,224],permanentBuffNumbers:[193,224],cacheCombatStats:true};
 for(const attack of [skill(9001,10,0),skill(9002,0,20)]){
  const run=bs=>simulateClass({pre,skills:[...bs,attack],model,attackNumbers:[attack.nr],config});
  const boosted=run(buffs),control=run(neutral);
  assert.equal(boosted.autoDamage,control.autoDamage);assert(boosted.skillDamage>control.skillDamage);assert.equal(boosted.manaSpent,control.manaSpent);
 }
});

test('summoned Morrak and magical normal auto-attacks do not inherit skill-only bonuses',()=>{
 const buffs=catalog.filter(s=>[193,224].includes(s.nr)),neutral=buffs.map(s=>({...s,effects:[]}));
 const morrak=catalog.find(s=>s.nr===237),pre={key:'ritualist',name:'fixture',weapons:[],stats,includedSkills:[],knownAttributes:{intelligence:100,wisdom:100,vitality:100}};
 const config={duration:20,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[193,224],preparedBuffNumbers:[193,224],permanentBuffNumbers:[193,224],attackMode:'autoOnly',cacheCombatStats:true};
 const run=bs=>simulateClass({pre,skills:[...bs,morrak],model,attackNumbers:[],config});
 const boosted=run(buffs),control=run(neutral);assert(boosted.summonDamage>0);assert.equal(boosted.summonDamage,control.summonDamage);assert.equal(boosted.autoDamage,control.autoDamage);
});
