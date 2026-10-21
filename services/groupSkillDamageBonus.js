import {isGroupBuff,isSelfBuff,isPassiveSkill} from './skillClassification.js';
import {curveValue} from './skillProgression.js';

// This evaluation context is used only for the player's skill hits.
// Never pass it to basic attacks, character sheets or companion inheritance.
export function withGroupSkillDamageBonuses(stats,activeBuffs){
 return withSkillDamageBonuses(stats,activeBuffs,isGroupBuff);
}
export function withSelfSkillDamageBonuses(stats,activeBuffs){
 return withSkillDamageBonuses(stats,activeBuffs,isSelfBuff);
}
export function withPassiveSkillDamageBonuses(stats,learnedPassives){
 return withSkillDamageBonuses(stats,learnedPassives,isPassiveSkill);
}

// Explicit skill lists identify school bonuses; callers supply learned passives
// and currently active buffs only. Never use this context for ordinary attacks.
export function scopedSkillDamageBonus(skillNumber, sources){
 let amount=0;
 for(const source of sources){
  if(!source)continue;
  for(const effect of source.effects??[]){
   if(effect.type!=='damageBonus'||effect.unit!=='flat'||effect.target!=='self'||!effect.eligibleSkillNumbers?.includes(skillNumber))continue;
   amount+=curveValue(effect.valueScaling,source.maxSkillLv)??effect.value??0;
  }
 }
 return amount;
}
function withSkillDamageBonuses(stats,activeBuffs,eligible){
 let physical=0,magical=0;
 for(const buff of activeBuffs){
  if(!buff||!eligible(buff))continue;
  for(const e of buff.effects??[]){
   if(e.type!=='damageBonus'||e.appliesTo!=='allSkills'||e.target!=='self'||e.unit!=='flat'||e.damageSchool)continue;
   const amount=curveValue(e.valueScaling,buff.maxSkillLv)??e.value??0;
   if(e.damageTypes?.includes('physical'))physical+=amount;
   if(e.damageTypes?.includes('magical'))magical+=amount;
  }
 }
 return {...stats,physicalSkillDamageBonus:(stats.physicalSkillDamageBonus??0)+physical,magicalSkillDamageBonus:(stats.magicalSkillDamageBonus??0)+magical};
}
