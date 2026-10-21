import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {SkillDataModel} from '../models/skillSchema.js';
test('Prayer preserves fixed healing while damage and cooldown scale across three levels',async()=>{
 const skill=catalog.find(s=>s.nr===263);assert(skill);await new SkillDataModel(skill).validate();
 for(let level=1;level<=3;level++){
  const s=resolveSkillAtLevel(skill,level,{classKey:'shaman'});
  assert.equal(s.mana,[36,55,74][level-1]);assert.equal(s.cd,[54,49,44][level-1]);assert.equal(s.castTimeSeconds,.1);
  assert.equal(evaluateDamageSkill(s,{physicalAttack:999,magicalAttack:700,criticalDamageBonus:.8}).damage,[143,219,295][level-1]+700);
  for(const e of s.effects){assert.equal(e.value,240);assert.equal(e.requiresSuccessfulHit,true);}
  const ally=s.effects.find(e=>e.target==='alliesInArea');assert.equal(ally.excludesCaster,true);assert.equal(ally.maximumRecipients,2);assert.equal(ally.radiusMeters,2.5);assert.equal(ally.areaCenter,'caster');
 }
});
