import knightCooldownDecision from '../data/balancing/knight-cooldown-combination-decision.json' with {type:'json'};
import mageDecision from '../data/balancing/single-intelligence-mages-decision.json' with {type:'json'};
import knightDecision from '../data/balancing/knight-iron-will-cast-decision.json' with {type:'json'};
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import catalog from '../data/skills.json' with {type:'json'};
import migration from '../data/balancing/skill-progression-migration.json' with {type:'json'};
import burnDecision from '../data/balancing/burn-ten-second-decision.json' with {type:'json'};
import shamanPackage from '../data/balancing/shaman-archdruid-package.json' with {type:'json'};
import {evaluateProgression,validateProgressionRule,curveValue,getPath,UndefinedProgressionError} from '../services/skillProgression.js';
import {resolveSkillAtLevel,resolveCharacterSkillLevels} from '../services/skillLevel.js';
import {skillForClass} from '../services/skillLearningLevel.js';
const get=nr=>catalog.find(s=>s.nr===nr);
test('all migrated formulas reproduce every historical level without changing legacy definitions',()=>{
 const before=JSON.parse(fs.readFileSync(migration.backup+'/skills.json','utf8'));let checked=0;
 for(const historical of before){
  const original=mageDecision.afterSkills.find(s=>s.nr===historical.nr)??[...knightCooldownDecision.changes,...knightDecision.changes].find(c=>c.skill.nr===historical.nr)?.skill??shamanPackage.changes.find(c=>c.skill.nr===historical.nr)?.skill??(historical.nr===202?burnDecision.skill:historical);
  const skill=get(original.nr),stripped={...skill};delete stripped.levelProgression;delete stripped.skillLevelGrant;
  const expected={...original};delete expected.__v;delete expected.levelProgression;delete expected.skillLevelGrant;
  if(original.nr===222){stripped.description_de=original.description_de;stripped.description_eng=original.description_eng;}
  assert.deepEqual(stripped,expected);
  for(let level=1;level<=original.maxSkillLv;level++){
   const current=resolveSkillAtLevel(skill,level);
   for(const entry of skill.levelProgression.rules){assert.ok(Math.abs(curveValue(getPath(current,entry.path),level)-curveValue(getPath(original,entry.path),level))<1e-7,`${skill.nr} ${entry.path} ${level}`);checked++;}
  }
 }
 assert.ok(checked>=7000);
});
test('changing only maximum level extends Recovery and Earth Pillar including derived Mana',()=>{
 const recovery=resolveSkillAtLevel({...get(124),maxSkillLv:30},30);
 assert.equal(recovery.health,1200);assert.equal(recovery.mana,1680);assert.equal(recovery.cd,12);assert.equal(recovery.dur,4);
 const pillar=resolveSkillAtLevel({...get(258),maxSkillLv:15},15);
 assert.equal(pillar.patk,1757);assert.equal(pillar.mana,508);assert.equal(pillar.cd,24);
 const edited=structuredClone(get(258));edited.levelProgression.rules.find(e=>e.path.join('.')==='statScaling.patk').rule.perLevel=200;
 const changed=resolveSkillAtLevel(edited,10);assert.equal(changed.patk,2031);assert.equal(changed.mana,576);
 const inSimulation=skillForClass(edited,'shaman');assert.equal(curveValue(inSimulation.resourceCosts[0].scaling,10),576);
});
test('Forgotten Spell grants one active or passive level with six explicit attribute costs',()=>{
 const source=get(222),training=get(132),attack=get(221);
 for(const target of [training,attack]){
  const result=resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:source._id,level:1},{skillId:target._id,level:target.maxSkillLv}],forgottenSpellTargetId:target._id});
  const resolved=result.skills.find(s=>s.nr===target.nr);
  assert.equal(resolved.learnedLevel,target.maxSkillLv);assert.equal(resolved.effectiveSkillLevel,target.maxSkillLv+1);
  assert.deepEqual(result.attributeModifiers,{str:-20,vita:-20,int:-20,wis:-20,agi:-20,dex:-20});
  if(target.nr===132){assert.equal(resolved.str,6);assert.equal(resolved.int,7);}
 }
 const energy=resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:source._id,level:1},{skillId:get(36)._id,level:5}],forgottenSpellTargetId:get(36)._id});
 assert.equal(energy.skills.find(s=>s.nr===36).effectiveSkillLevel,6);
 assert.throws(()=>resolveSkillAtLevel(training,11),/exceeds/);
 assert.throws(()=>resolveSkillAtLevel(training,10,{bonusLevels:1}),/Unauthorized/);
 assert.throws(()=>resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:source._id,level:1}],forgottenSpellTargetId:source._id}),/Invalid/);
 assert.throws(()=>resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:get(258)._id,level:1}]}),/not allowed/);
});
test('special progression never invents table values and cooldowns have an explicit lower bound',()=>{
 assert.throws(()=>resolveSkillAtLevel({...get(36),maxSkillLv:11},11),UndefinedProgressionError);
 assert.throws(()=>resolveSkillAtLevel({...get(88),maxSkillLv:6},6),UndefinedProgressionError);
 assert.equal(resolveSkillAtLevel({...get(258),maxSkillLv:100},100).cd,.1);
 assert.equal(evaluateProgression({kind:'exponential',base:10,factor:1.25},3),15.625);
 assert.throws(()=>validateProgressionRule({kind:'javascript',code:'ignored'}),/Unknown/);
 assert.throws(()=>evaluateProgression({kind:'linear',base:1,perLevel:1},0),RangeError);
});
test('piecewise growth changes its increment after level five and extends to level thirty five',()=>{
 const rule={kind:'piecewise',segments:[{fromLevel:1,rule:{kind:'linear',base:100,perLevel:20}},{fromLevel:6,rule:{kind:'linear',base:215,perLevel:35}}]};
 assert.equal(validateProgressionRule(rule),true);
 assert.equal(evaluateProgression(rule,5),180);assert.equal(evaluateProgression(rule,6),215);assert.equal(evaluateProgression(rule,35),1230);
 assert.throws(()=>validateProgressionRule({kind:'piecewise',segments:[{fromLevel:2,rule:{kind:'constant',value:1}}]}),/Invalid segments/);
});
