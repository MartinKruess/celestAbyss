import test from 'node:test';
import assert from 'node:assert/strict';
import skills from '../data/skills.json' with {type:'json'};
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
import model from '../data/balancing/attribute-model.json' with {type:'json'};
const passive=skills.find(s=>s.skillName_eng==='Wisdom of the Salamander');
test('Salamander boosts each cross-strike component once and discounts fire Mana without cooldown changes',()=>{
 const cross=skills.find(s=>s.nr===76),stats={physicalAttack:400,magicalAttack:300,criticalDamageBonus:0.8};
 const mod=targetedSkillModifiers(skills,[passive.nr],76);
 assert.equal(mod.manaMultiplier,0.97);assert.equal(mod.cooldownReduction,0);assert.equal(mod.castTimeReduction,0);
 const boosted=evaluateDamageSkill(cross,stats,{physicalMultiplier:mod.physicalDamageMultiplier,magicalMultiplier:mod.magicalDamageMultiplier}).damage;
 const expected=2*((614+400)*1.015+(307+300)*1.03);assert.ok(Math.abs(boosted-expected)<1e-8);
 const result=simulateClass({pre:{key:'shaman',name:'Fixture',weapons:[],includedSkills:[passive.nr],stats:{...stats,maxHealth:1000,maxMana:1000,manaRegen:0,healthRegen:0,attackSpeed:1}},skills,model,attackNumbers:[76],config:{duration:0.1,targetHealth:1e9}}).skills.find(s=>s.nr===76);
 assert.ok(Math.abs(result.damage-boosted)<1e-8);
 assert.ok(Math.abs(result.manaSpent-461*0.97)<1e-8);
});
test('Salamander excludes magical earth damage and boosts existing Burn ticks',()=>{
 const earth=targetedSkillModifiers(skills,[passive.nr],38);
 assert.equal(earth.physicalDamageMultiplier,1.015);assert.equal(earth.magicalDamageMultiplier,1);assert.equal(earth.manaMultiplier,0.97);
 const burn=skills.find(s=>s.nr===202),mod=targetedSkillModifiers(skills,[passive.nr],202),stats={physicalAttack:0,magicalAttack:300,criticalDamageBonus:0.8};
 assert.equal(mod.manaMultiplier,0.97);
 assert.ok(Math.abs(evaluateDamageSkill(burn,stats,{magicalMultiplier:mod.magicalDamageMultiplier}).damage-evaluateDamageSkill(burn,stats).damage*1.03)<1e-8);
 const unrelated=targetedSkillModifiers(skills,[passive.nr],212);assert.equal(unrelated.magicalDamageMultiplier,1);
});
