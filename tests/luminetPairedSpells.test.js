import test from 'node:test';
import assert from 'node:assert/strict';
import skills from '../data/skills.json' with {type:'json'};
import decision from '../data/balancing/luminet-paired-spells-decision.json' with {type:'json'};
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {skillValue,curveValue} from '../services/rotationDamage.js';
test('Luminet paired spells match tested max values in both runtime resolution paths',()=>{
 for(const [nr,level,damage,cooldown,mana]of [[36,20,519,4,149],[231,10,249,5,65]]){
  const definition=skills.find(s=>s.nr===nr);
  for(const s of [skillForClass(definition,'luminet'),resolveSkillAtLevel(definition,level,{classKey:'luminet'})]){
   assert.equal(skillValue(s,'matk'),damage);assert.equal(curveValue(s.cooldownScaling,level),cooldown);assert.equal(curveValue(s.resourceCosts[0].scaling,level),mana);assert.equal(s.castTimeSeconds,.1);
  }
 }
});
test('shared Energy Strike retains Healer and Druid values, learning caps and original formulas',()=>{
 const current=skills.find(s=>s.nr===36),before=decision.changes.find(c=>c.skill.nr===36).before;
 for(const key of ['healer','druid'])for(let level=1;level<=5;level++)assert.deepEqual(resolveSkillAtLevel(current,level,{classKey:key}).statScaling,resolveSkillAtLevel(before,level,{classKey:key}).statScaling);
 for(const key of ['healer','druid'])assert.throws(()=>resolveSkillAtLevel(current,6,{classKey:key}),/class limit/);
 assert.throws(()=>resolveSkillAtLevel(current,21,{classKey:'luminet'}),/class limit/);
 assert.equal(skillValue(resolveSkillAtLevel(current,5,{classKey:'luminet'}),'matk'),159);
 assert.equal(skillValue(resolveSkillAtLevel(current,10,{classKey:'luminet'}),'matk'),279);
 assert.equal(curveValue(skillForClass(current,'healer').cooldownScaling,5),2.2);
 assert.deepEqual(skills.find(s=>s.nr===231).charClass,['Luminet','Lightmage']);
 assert(!skills.find(s=>s.nr===210).charClass.includes('Luminet'));
});
test('Fireball and Luminet Energy Strike retain identical integer base damage at all twenty levels',()=>{
 for(let level=1;level<=20;level++)for(const [nr,key]of [[49,'ritualist'],[36,'luminet']]){
  const s=resolveSkillAtLevel(skills.find(s=>s.nr===nr),level,{classKey:key});
  assert.equal(skillValue(s,'matk'),63+(level-1)*24);
 }
});
