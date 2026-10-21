import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import comparison from '../data/balancing/class-comparison-level60.json' with {type:'json'};
import {curveValue} from '../services/skillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
import {permanentManaRegenMultiplier} from '../services/permanentManaRegeneration.js';
const wisdom=catalog.find(s=>s.skillName_eng==='Wisdom of the Archdruid');
test('Archdruid Wisdom grants three attributes and multiplicative regeneration at every level',()=>{
 for(let level=1;level<=5;level++){
  const s=resolveSkillAtLevel(wisdom,level);assert.equal(s.str,3*level);assert.equal(s.int,3*level);assert.equal(s.wis,3*level);
  assert.equal(permanentManaRegenMultiplier([s],[s.nr]),1+level*.006);
 }
 const pre=comparison.passiveRows.find(p=>p.key==='shaman');assert.equal(pre.stats.manaRegen,226.188);assert.equal(pre.stats.maxMana,6123);
 assert.equal(pre.stats.physicalAttack,571.33);assert.ok(Math.abs(pre.stats.magicalAttack-507.2)<1e-8);
});
test('Rotating Strike remains available to its other classes and Cyclone cooldown includes the approved final adjustment',()=>{
 const rotating=catalog.find(s=>s.nr===87),cyclone=catalog.find(s=>s.nr===62);
 assert.ok(!rotating.charClass.includes('Shamane'));assert.ok(!rotating.charClass.includes('High Elves'));assert.ok(rotating.charClass.length>0);
 assert.equal(curveValue(cyclone.cooldownScaling,1),119);assert.equal(curveValue(cyclone.cooldownScaling,5),111);
});
test('Salamander discounts all own skill Mana without changing other resources or earth magic damage',()=>{
 for(const nr of [50,62,76,202,255,256,258,136,149])assert.equal(targetedSkillModifiers(catalog,[254],nr).manaMultiplier,.97);
 assert.equal(targetedSkillModifiers(catalog,[254],76).physicalDamageMultiplier,1.015);
 assert.equal(targetedSkillModifiers(catalog,[254],76).magicalDamageMultiplier,1.03);
 assert.equal(targetedSkillModifiers(catalog,[254],38).magicalDamageMultiplier,1);
 assert.equal(targetedSkillModifiers(catalog,[254],258).cooldownReduction,0);
});
