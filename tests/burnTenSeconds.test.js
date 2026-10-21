import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
const burn=catalog.find(s=>s.nr===202);
test('Burn has ten ticks, no initial hit or caster attack, and exact derived Mana on each level',()=>{
 for(let level=1;level<=15;level++){
  const s=resolveSkillAtLevel(burn,level),damage=evaluateDamageSkill(s,{physicalAttack:9999,magicalAttack:9999});
  assert.equal(damage.initialDamage,0);assert.equal(damage.ticks[0].count,10);
  assert.equal(damage.damage,(16+(level-1)*10)*10);
  assert.equal(s.mana,Math.round(damage.damage*.15));assert.equal(s.cd,22);
 }
 const mod=targetedSkillModifiers(catalog,[254],202);
 const damage=evaluateDamageSkill(resolveSkillAtLevel(burn,15),{physicalAttack:0,magicalAttack:9999},{magicalMultiplier:mod.magicalDamageMultiplier});
 assert.ok(Math.abs(damage.damage-1606.8)<1e-8);assert.ok(Math.abs(234*mod.manaMultiplier-226.98)<1e-8);
});
