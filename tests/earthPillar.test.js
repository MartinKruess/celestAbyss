import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import comparison from '../data/balancing/class-comparison-level60.json' with {type:'json'};
import model from '../data/balancing/attribute-model.json' with {type:'json'};
import {SkillDataModel} from '../models/skillSchema.js';
import {evaluateDamageSkill,curveValue} from '../services/rotationDamage.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const skill=catalog.find(s=>s.skillName_eng==='Earth Pillar');
test('Earth Pillar unlocks fixed second phase at six and charges only base damage',()=>{
 for(const level of [1,5,6,10]){
  const base=231+109*(level-1),bonus=level>=6?273:0;
  assert.equal(evaluateDamageSkill({...skill,maxSkillLv:level},{physicalAttack:100,magicalAttack:0}).damage,base+100+bonus);
  assert.equal(curveValue(skill.resourceCosts[0].scaling,level),Math.round((base+bonus)*.25));
  assert.equal(curveValue(skill.cooldownScaling,level),39-level);
 }
 const persisted=new SkillDataModel(skill);assert.equal(persisted.validateSync(),undefined);
 assert.deepEqual(JSON.parse(JSON.stringify(persisted.attackExecution.damagePhases)),skill.attackExecution.damagePhases);
 assert.equal(persisted.attackExecution.terrainPlatform.supportsFurtherTerrainSkills,false);
});
test('Earth Pillar holds caster for 0.3 seconds and delays second hit until ascent completes',()=>{
 const source=comparison.passiveRows.find(p=>p.key==='shaman');
 const pre={...source,includedSkills:[],stats:{...source.stats,maxMana:1000000,manaRegen:0}};
 const run=duration=>simulateClass({pre,skills:catalog,model,attackNumbers:[skill.nr],config:{duration,targetHealth:10000000}}).skills.find(s=>s.nr===skill.nr);
 assert.equal(run(.29).damage,0);
 const first=run(1.1),both=run(1.2);
 assert.equal(first.hits,1);assert.equal(both.hits,2);
 assert.ok(Math.abs((both.damage-first.damage)-273)<1e-8);
 assert.equal(both.manaSpent,371);
});
