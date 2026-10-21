import test from 'node:test';
import assert from 'node:assert/strict';
import skills from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {attributeConversionFactor} from '../services/attributeConversion.js';
import {SkillDataModel} from '../models/skillSchema.js';

test('Iron Will grants two Vitality and one Wisdom per level while retaining current Vitality conversion',()=>{
 const definition=skills.find(s=>s.nr===141);
 for(let level=1;level<=10;level++){
  const skill=resolveSkillAtLevel(definition,level);
  assert.ok(Math.abs(attributeConversionFactor(skill)-level*.01)<1e-10);
  assert.ok(Math.abs(skill.attributeConversionBonus.amountPerPoint-level*.01)<1e-10);
  assert.ok(Math.abs(1000*attributeConversionFactor(skill)-10*level)<1e-8);
  assert.equal(skill.vita,level*2);
  assert.equal(skill.wis,level);assert.equal(skill.block,level*2);
 }
 assert.ok(Math.abs(attributeConversionFactor(definition)*268-26.8)<1e-8);
 const persisted=new SkillDataModel(definition);
 assert.equal(persisted.validateSync(),undefined);
 assert.equal(persisted.attributeConversionBonus.amountPerPointScaling.perLevel,.01);
 assert.ok(Math.abs(attributeConversionFactor({...definition,maxSkillLv:15})-.15)<1e-10);
});

test('shared Mighty Strike has the approved cast time and Mindbreaker retains thirty-second maximum duration',()=>{
 assert.equal(skills.find(s=>s.nr===77).castTimeSeconds,.2);
 const effect=resolveSkillAtLevel(skills.find(s=>s.nr===55),10).effects.find(e=>e.stat==='mdef');
 assert.equal(effect.durationSeconds,30);
 assert.equal(attributeConversionFactor(skills.find(s=>s.nr===243)),2);
});
