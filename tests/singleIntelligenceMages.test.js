import test from 'node:test';
import assert from 'node:assert/strict';
import skills from '../data/skills.json' with {type:'json'};
import model from '../data/balancing/attribute-model.json' with {type:'json'};
import decision from '../data/balancing/single-intelligence-mages-decision.json' with {type:'json'};
import {conversionDelta,simulateClass} from '../services/timedDamageSimulation.js';
test('mixed INT passives lose only the special attribute; pure sources convert to INT',()=>{
 for(const nr of [60,208,236]){const before=decision.beforeSkills.find(s=>s.nr===nr),after=skills.find(s=>s.nr===nr);assert.deepEqual(after.statScaling.int,before.statScaling.int);assert.equal(after.faith,undefined);assert.equal(after.vic,undefined);}
 assert.deepEqual(skills.find(s=>s.nr===116).statScaling.int,decision.beforeSkills.find(s=>s.nr===116).statScaling.faith);
 assert.equal(skills.find(s=>s.nr===120).soulStorageSettings.bonusStat,'int');
 for(const key of ['luminet','ritualist'])assert.equal(conversionDelta(model,key,'intelligence',10).magicalAttack,18);
});
test('all six weapons preserve their bonus amount without retaining Faith or Victim',()=>{
 for(const before of decision.beforeItems){const after=decision.afterItems.find(i=>i._id===before._id);assert.equal(after.attributes.int,(before.attributes.faith??0)+(before.attributes.victim??0));assert.equal(after.attributes.faith,undefined);assert.equal(after.attributes.victim,undefined);}
});
test('Reaper grants live INT conversion and the full-reserve comparison does not count it twice',()=>{
 const stats={maxHealth:10000,maxMana:100,physicalAttack:0,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0};
 const reaper=skills.find(s=>s.nr===120);const attack={nr:900,skillName_de:'Fixture',maxSkillLv:1,matk:10,cd:10,castTimeSeconds:0,resourceCosts:[]};
 const run=full=>simulateClass({pre:{key:'ritualist',name:'Fixture',weapons:[],includedSkills:full?[120]:[],stats:{...stats,magicalAttack:100+(full?36:0)}},skills:[reaper,attack],model,attackNumbers:[900],config:{duration:.1,attackMode:'skillsOnly'}});
 assert.equal(run(false).skillDamage,329.26);assert.equal(run(true).skillDamage,329.26);
});
