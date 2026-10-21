import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
test('Thorned Rose adds initial damage only and preserves active Mana cost at every passive level',()=>{
 const attack=resolveSkillAtLevel(catalog.find(s=>s.nr===30),10),stats={physicalAttack:0,magicalAttack:700,criticalDamageBonus:.8};
 const original=evaluateDamageSkill(attack,stats),mana=attack.mana;
 for(let level=1;level<=5;level++){
  const passive=resolveSkillAtLevel(catalog.find(s=>s.nr===261),level);
  const m=targetedSkillModifiers([passive],[261],30);
  const boosted=evaluateDamageSkill(attack,stats,{extraFlatDamage:m.extraFlatDamage});
  assert.equal(boosted.initialDamage-original.initialDamage,37*level);
  assert.equal(boosted.periodicDamage,original.periodicDamage);
  assert.equal(attack.mana,158);assert.equal(attack.mana,mana);assert.equal(m.manaMultiplier,1);
  assert.equal(m.replacementSkillName_de,'Dornige Eisranken');
 }
 assert.equal(targetedSkillModifiers(catalog,[],30).extraFlatDamage,0);
 assert.equal(targetedSkillModifiers(catalog,[261],29).extraFlatDamage,0);
 assert.equal(catalog.find(s=>s.nr===30).skillName_de,'Eisranken');
 assert.deepEqual(catalog.find(s=>s.nr===261).charClass,['Druide','Alchemist']);
});
test('Magic Ban interrupts an ongoing cast only on successful hit',()=>{
 const effect=catalog.find(s=>s.nr===220).effects.find(e=>e.controlKind==='spellSuppression');
 assert.equal(effect.interruptsCurrentCast,true);assert.equal(effect.requiresSuccessfulHit,true);
});
