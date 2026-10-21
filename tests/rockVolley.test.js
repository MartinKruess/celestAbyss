import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {evaluateDamageSkill,curveValue} from '../services/rotationDamage.js';
const skill=catalog.find(s=>s.skillName_eng==='Rock Volley');
test('Rock Volley increases projectile count at five ten and fifteen without charging secondary-target count',()=>{
 const stats={physicalAttack:100,magicalAttack:0,criticalDamageBonus:0.8};
 for(const [level,count]of [[1,2],[4,2],[5,3],[9,3],[10,4],[14,4],[15,5]]){
  const s={...skill,maxSkillLv:level},base=611+(level-1)*150;
  assert.equal(evaluateDamageSkill(s,stats).damage,(base+100)*count);
  assert.equal(curveValue(skill.resourceCosts[0].scaling,level),Math.round(base*count*0.25));
 }
 assert.equal(curveValue(skill.resourceCosts[0].scaling,15),3389);
 assert.deepEqual(skill.attackExecution.secondarySplinters,{damageFractionOfPrimaryHit:0.1,maxTargetsPerProjectile:4,reselectEachProjectile:true,distinctWithinProjectile:true,excludesPrimaryTarget:true,unusedSlotsExpire:true,canCauseFurtherSplinters:false,region:'behindPrimaryTarget',geometryStatus:'pending'});
});
