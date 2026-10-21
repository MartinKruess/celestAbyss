import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
test('Meteor Shower scales with magical attack while retaining the physical damage channel',()=>{
 const skill=resolveSkillAtLevel(catalog.find(s=>s.nr===235),3);
 const stats={physicalAttack:100,magicalAttack:1000,criticalDamageBonus:.8};
 const total=evaluateDamageSkill(skill,stats).damage;
 assert.equal(total,3*(2172+1000));
 assert.equal(evaluateDamageSkill(skill,{...stats,physicalAttack:9999}).damage,total);
 assert.equal(evaluateDamageSkill(skill,{...stats,magicalAttack:1100}).damage-total,300);
 assert.equal(evaluateDamageSkill(skill,stats,{physicalMultiplier:.5}).damage,total*.5);
 assert.equal(evaluateDamageSkill(skill,stats,{magicalMultiplier:2}).damage,total);
 const zero={...stats,physicalAttack:0,magicalAttack:0};assert.equal(evaluateDamageSkill(skill,zero).damage,6516);
});

test('Meteor Shower is one area hit per wave; visual meteor count never adds hits',()=>{
 const skill=resolveSkillAtLevel(catalog.find(s=>s.nr===235),3);
 assert.equal(skill.attackExecution.meteorDamageDistributionStatus,'defined');
 assert.equal(skill.attackExecution.meteorHitMode,'oneAreaHitPerWave');
 assert.equal(skill.attackExecution.meteorCountIsVisualOnly,true);
 assert.equal(skill.attackArea.maxUniqueTargetsPerActivation,undefined);
 assert.equal(skill.attackArea.maxTargetsPerWave,6);
 assert.equal(skill.attackArea.targetSelectionTiming,'eachWave');
 assert.equal(skill.attackArea.targetSelection,'randomWithoutReplacement');
 assert.deepEqual(skill.attackExecution.meteorWaveSequence.map(w=>w.offsetSeconds),[1,1.5,3,3.5,5,5.5]);
 const stats={physicalAttack:100,magicalAttack:1000,physicalSkillDamageBonus:120,criticalDamageBonus:.8};
 const changed=structuredClone(skill);
 changed.attackExecution.meteorWaveSequence.forEach(w=>w.meteorCount=100);
 assert.equal(evaluateDamageSkill(skill,stats).damage,evaluateDamageSkill(changed,stats).damage);
 assert.equal(evaluateDamageSkill(skill,stats).damage,3*(2172+1000+120));
});
test('ordinary physical skills keep physical scaling and Burn still has no implicit caster attack',()=>{
 const stats={physicalAttack:100,magicalAttack:1000,criticalDamageBonus:.8};
 assert.equal(evaluateDamageSkill({nr:900,maxSkillLv:1,patk:50},stats).damage,150);
 const definition=catalog.find(s=>s.nr===202);
 const burn=resolveSkillAtLevel(definition,definition.maxSkillLv);
 assert.equal(evaluateDamageSkill(burn,stats).damage,1060);
});
