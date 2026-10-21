import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {SkillDataModel} from '../models/skillSchema.js';
test('Piercing Shot scales damage and output-based Mana without granting permanent penetration',async()=>{
 const s=catalog.find(s=>s.nr===262);assert(s);await new SkillDataModel(s).validate();
 assert.deepEqual(s.charClass,['Summoner','Soulseeker']);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(s,level,{classKey:'summoner'});const base=340+61*(level-1);
  assert.equal(r.patk,base);assert.equal(r.mana,Math.round(base*.25));assert.equal(r.cd,42);assert.equal(r.castTimeSeconds,0);
  assert.equal(r.penetration,undefined);assert.equal(r.attackExecution.penetrationBonus,20);
  assert.equal(evaluateDamageSkill(r,{physicalAttack:600,magicalAttack:0,criticalDamageBonus:.8}).damage,base+600);
 }
});
