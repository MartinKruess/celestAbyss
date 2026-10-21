import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {withSelfSkillDamageBonuses,withGroupSkillDamageBonuses,withPassiveSkillDamageBonuses} from '../services/groupSkillDamageBonus.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync('data/balancing/attribute-model.json'));
const stats={maxHealth:10000,maxMana:10000,physicalAttack:100,magicalAttack:200,physicalDefense:10,magicalDefense:10,attackSpeed:1,movementSpeed:1,healthRegen:0,manaRegen:0};
const effect={type:'damageBonus',target:'self',appliesTo:'allSkills',unit:'flat',damageTypes:['physical'],value:80};
const buff={nr:9000,skillName_de:'fixture buff',category:'active',type:'selfBuff',target:'self',maxSkillLv:1,cd:100,dur:6,castTimeSeconds:.1,resourceCosts:[],effects:[effect]};
const attack={nr:9001,skillName_de:'fixture attack',maxSkillLv:1,patk:10,cd:3,castTimeSeconds:.2,resourceCosts:[]};
test('Learned permanent skill bonus applies without active buffs or a death trigger and cannot increase normal attacks',()=>{
 const passive={nr:9003,skillName_de:'fixture passive',category:'passive',type:'passive',maxSkillLv:1,effects:[{...effect,value:30,durationSeconds:0}]};
 const pre={key:'adventurer',name:'fixture',weapons:[],stats,includedSkills:[passive.nr],knownAttributes:{}};
 const config={duration:20,targetHealth:1e9,cacheCombatStats:true};
 const run=p=>simulateClass({pre,skills:[p,attack],model,attackNumbers:[attack.nr],config});
 const a=run(passive),b=run({...passive,effects:[]}),hits=a.skills.find(s=>s.nr===attack.nr).hits;
 assert(hits>0);assert.equal(a.autoDamage,b.autoDamage);assert.equal(a.skillDamage-b.skillDamage,30*hits);assert.equal(a.manaSpent,b.manaSpent);
 const unlearned=simulateClass({pre:{...pre,includedSkills:[]},skills:[passive,attack],model,attackNumbers:[attack.nr],config});assert.equal(unlearned.totalDamage,b.totalDamage);
 const context=withPassiveSkillDamageBonuses(stats,[passive]);assert.equal(context.physicalAttack,stats.physicalAttack);assert.equal(context.physicalSkillDamageBonus,30);
 assert.equal(evaluateDamageSkill({...attack,patk:0,matk:10},context).damage,evaluateDamageSkill({...attack,patk:0,matk:10},stats).damage);
});
test('Physical self skill bonus affects matching skill hits and stacks once with group bonuses without changing character attack',()=>{
 const group={...buff,nr:9002,type:'buff',target:'party',effects:[{...effect,value:180}]};
 const context=withSelfSkillDamageBonuses(withGroupSkillDamageBonuses(stats,[group,buff]),[group,buff]);
 assert.equal(context.physicalAttack,100);assert.equal(context.physicalSkillDamageBonus,260);assert.equal(stats.physicalSkillDamageBonus,undefined);
 assert.equal(evaluateDamageSkill(attack,context).damage-evaluateDamageSkill(attack,stats).damage,260);
 const magic={...attack,patk:0,matk:20};assert.equal(evaluateDamageSkill(magic,context).damage,evaluateDamageSkill(magic,stats).damage);
 const multi={...attack,attackExecution:{hitCount:3}};assert.equal(evaluateDamageSkill(multi,context).damage-evaluateDamageSkill(multi,stats).damage,780);
 assert.equal(withSelfSkillDamageBonuses(stats,[{...buff,effects:[{...effect,damageSchool:'fire'}]}]).physicalSkillDamageBonus,0);
});
test('Timed self skill bonus leaves normal auto-attacks and mana costs unchanged and expires normally',()=>{
 const pre={key:'adventurer',name:'fixture',weapons:[],stats,includedSkills:[],knownAttributes:{}};
 const config={duration:20,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[buff.nr],preparedBuffNumbers:[buff.nr],cacheCombatStats:true,recordActionTimeline:true};
 const run=b=>simulateClass({pre,skills:[b,attack],model,attackNumbers:[attack.nr],config});
 const boosted=run(buff),control=run({...buff,effects:[]});
 assert.equal(boosted.autoDamage,control.autoDamage);assert.equal(boosted.manaSpent,control.manaSpent);
 const hits=boosted.skills.find(s=>s.nr===attack.nr).useTimes.filter(t=>t+attack.castTimeSeconds<6).length;
 assert(hits>0);assert(Math.abs(boosted.skillDamage-control.skillDamage-hits*80)<1e-7);
 assert.equal(boosted.buffPeriods[0].end,6);
});
test('Self skill bonuses cannot increase summon inheritance or basic attacks in an auto-only run',()=>{
 const catalog=JSON.parse(fs.readFileSync('data/skills.json')),summon=catalog.find(s=>s.nr===226);
 const pre={key:'hunter',name:'fixture',weapons:[],stats,includedSkills:[],knownAttributes:{dexterity:100,vitality:100,wisdom:100}};
 const config={duration:20,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[buff.nr],preparedBuffNumbers:[buff.nr],attackMode:'autoOnly',cacheCombatStats:true};
 const run=b=>simulateClass({pre,skills:[b,summon],model,attackNumbers:[],config});
 const a=run(buff),b=run({...buff,effects:[]});assert(a.summonDamage>0);assert.equal(a.summonDamage,b.summonDamage);assert.equal(a.autoDamage,b.autoDamage);
});
