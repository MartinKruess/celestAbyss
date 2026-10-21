import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
test('Reviewed attack costs follow total base output at every level and an authorized bonus level',()=>{
 for(const [nr,max]of [[17,189],[47,534],[50,153],[66,541],[115,389],[202,234]]){
  const definition=catalog.find(s=>s.nr===nr),factor=nr===202?.15:.25;
  for(let level=1;level<=definition.maxSkillLv+1;level++){
   const s=resolveSkillAtLevel(definition,Math.min(level,definition.maxSkillLv),{bonusLevels:level>definition.maxSkillLv?1:0,authorizedBonusLevels:1});
   const damage=evaluateDamageSkill(s,{physicalAttack:0,magicalAttack:0,criticalDamageBonus:.8}).damage;
   assert.equal(s.mana,Math.round(damage*factor),`${nr} level ${level}`);
   if(level===definition.maxSkillLv)assert.equal(s.mana,max);
  }
 }
});
test('Supersonic Blade casts in 0.1 seconds at every learned level',()=>{
 const definition=catalog.find(s=>s.nr===115);
 for(let level=1;level<=definition.maxSkillLv;level++)assert.equal(resolveSkillAtLevel(definition,level).castTimeSeconds,.1);
});
