import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
const get=nr=>catalog.find(s=>s.nr===nr);
function run(mana){
 const unrelated={nr:999,skillName_de:'Unrelated high-priority attack',maxSkillLv:1,patk:999999,cd:1,castTimeSeconds:0,resourceCosts:[]};
 return simulateClass({pre:{key:'summoner',name:'Fixture',weapons:[],includedSkills:[],stats:{maxHealth:1000,maxMana:mana,physicalAttack:100,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0,criticalDamageBonus:.8}},skills:[...catalog,unrelated],model,attackNumbers:[186,229,999],config:{duration:6,targetHealth:1e9,recordActionTimeline:true,cacheCombatStats:true,skillPriorityScores:{999:1e12,185:-1e12,186:1,229:1}}});
}
test('Soulshot prepays 20 former collector costs per level, preserving progression beyond cap',()=>{
 const opener=get(185),collector=get(186),perAction=[2,7,12,17,22,28,33,38,43,48];
 assert.deepEqual(buildSkillProgression(opener),opener.levelProgression);
 for(let level=1;level<=10;level++){
  assert.equal(resolveSkillAtLevel(opener,level).mana,20*perAction[level-1]);
  assert.equal(resolveSkillAtLevel(collector,level).mana,0);
 }
 assert.equal(resolveSkillAtLevel(opener,10,{bonusLevels:1,authorizedBonusLevels:1}).mana,20*53);
 assert.equal(resolveSkillAtLevel(get(229),1).mana,439);
});
test('Prepaid window completes 25 free collectors despite unrelated ready high-damage skills',()=>{
 const result=run(1399),row=nr=>result.skills.find(s=>s.nr===nr);
 assert.equal(row(185).applications,1);assert.equal(row(185).manaSpent,960);
 assert.equal(row(186).applications,25);assert.equal(row(186).hits,25);assert.equal(row(186).manaSpent,0);
 assert.equal(row(229).applications,1);assert.equal(row(229).manaSpent,439);
 const actions=result.actionTimeline,finish=actions.find(a=>a.nr===229);
 assert(actions.filter(a=>a.time<finish.time).every(a=>[185,186].includes(a.nr)));
 assert.equal(result.manaSpent,1399);
});
test('Opening requires the whole budget, but does not reserve the separately paid finisher',()=>{
 const insufficient=run(959);assert(!insufficient.skills.some(s=>s.nr===185||s.nr===186));
 const paid=run(960),collection=paid.skills.find(s=>s.nr===186);
 assert.equal(collection.hits,25);assert.equal(collection.manaSpent,0);
 assert(!paid.skills.some(s=>s.nr===229));assert.equal(paid.manaSpent,960);
});
