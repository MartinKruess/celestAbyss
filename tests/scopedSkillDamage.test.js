import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import catalog from '../data/skills.json' with {type:'json'};
import {scopedSkillDamageBonus} from '../services/groupSkillDamageBonus.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
const fire=catalog.find(s=>s.nr===178),souls=catalog.find(s=>s.nr===209);

test('school-specific bonuses use current skill lists and learned level, not old hardcoded lists',()=>{
 for(const nr of [48,49,110])assert.equal(scopedSkillDamageBonus(nr,[fire]),65);
 for(const nr of [235,103,104,105,180])assert.equal(scopedSkillDamageBonus(nr,[fire]),0);
 for(const nr of [103,104,105,180])assert.equal(scopedSkillDamageBonus(nr,[{...souls,maxSkillLv:5}]),60);
 assert.equal(scopedSkillDamageBonus(49,[souls]),0);
 assert.equal(scopedSkillDamageBonus('auto',[fire,souls]),0);
});

test('Fire Spirit adds its full flat bonus to the initial hit and each of six Damned Fire ticks without boosting autos',()=>{
 const attack=catalog.find(s=>s.nr===48);
 const pre={key:'adventurer',name:'fixture',weapons:[],includedSkills:[],knownAttributes:{},stats:{maxHealth:10000,maxMana:10000,physicalAttack:100,magicalAttack:200,physicalDefense:0,magicalDefense:0,attackSpeed:1,movementSpeed:1,healthRegen:0,manaRegen:0}};
 const config={duration:12,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[178],preparedBuffNumbers:[178],cacheCombatStats:true};
 const run=buff=>simulateClass({pre,skills:[buff,attack],model,attackNumbers:[48],config});
 const boosted=run(fire),control=run({...fire,effects:[]});
 assert.equal(boosted.skills.find(s=>s.nr===48).applications,1);
 assert.ok(Math.abs(boosted.skillDamage-control.skillDamage-7*65)<1e-7);
 assert.equal(boosted.autoDamage,control.autoDamage);
 assert.equal(boosted.manaSpent,control.manaSpent);
});

test('combat-only learned passives count even when absent from static stat passives',()=>{
 const passive={...souls,maxSkillLv:5,effects:souls.effects.map(e=>({...e,eligibleSkillNumbers:[999]}))};
 const attack={nr:999,skillName_de:'fixture soul attack',maxSkillLv:1,matk:100,cd:3,castTimeSeconds:.1,resourceCosts:[]};
 const pre={key:'adventurer',name:'fixture',weapons:[],includedSkills:[],learnedSkillNumbers:[209,178],knownAttributes:{},stats:{maxHealth:10000,maxMana:10000,physicalAttack:100,magicalAttack:200,physicalDefense:0,magicalDefense:0,attackSpeed:1,movementSpeed:1,healthRegen:0,manaRegen:0}};
 const run=learned=>simulateClass({pre:{...pre,learnedSkillNumbers:learned},skills:[passive,fire,attack],model,attackNumbers:[999],config:{duration:10,targetHealth:1e9,cacheCombatStats:true}});
 const boosted=run([209,178]),control=run([]),hits=boosted.skills.find(s=>s.nr===999).hits;
 assert.ok(hits>0);
 assert.equal(boosted.skillDamage-control.skillDamage,hits*60);
 assert.equal(boosted.autoDamage,control.autoDamage);
});
