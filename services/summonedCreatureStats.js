import {curveValue} from './rotationDamage.js';
export function summonedCreatureStats(skill,{attributes={},stats={},bond}={}){
 const settings=skill.summonedCreatureSettings??{},base=settings.baseStats??{};
 const result={maxHealth:0,physicalAttack:0,magicalAttack:0,physicalDefense:0,magicalDefense:0,...base};
 if(settings.inheritedAttributeFractions){
  const inherited=Object.fromEntries(Object.entries(settings.inheritedAttributeFractions).map(([k,f])=>[k,(attributes[k]??0)*f]));
  const aliases={str:'strength',int:'intelligence',vita:'vitality',wis:'wisdom',dex:'dexterity'};
  // Bonuses on the summon definition belong to this creature, never its master.
  for(const effect of skill.effects??[])if(effect.type==='statModifier'&&effect.target==='companion'&&(skill.effectiveSkillLevel??skill.maxSkillLv)>=(effect.minimumSkillLevel??1)){
   const key=aliases[effect.stat];if(key)inherited[key]=(inherited[key]??0)+(curveValue(effect.valueScaling,skill.maxSkillLv)??effect.value??0);
  }
  if(settings.receivesBond&&bond)for(const effect of bond.effects??[])if(effect.type==='statModifier'&&effect.target==='companion'){
   const key=aliases[effect.stat];if(key)inherited[key]=(inherited[key]??0)+(curveValue(effect.valueScaling,bond.maxSkillLv)??effect.value??0);
  }
  result.maxHealth+=(inherited.vitality??0)*30;
  result.physicalDefense+=(inherited.vitality??0)*2;
  result.magicalDefense+=(inherited.wisdom??0)*2;
  if(settings.damageType==='magical')result.magicalAttack+=(inherited.intelligence??0)*1.8;
  else result.physicalAttack+=(inherited.dexterity??0)*1.8;
 }else{
  result.maxHealth+=(stats.maxHealth??0)*(settings.healthFractionOfCaster??0);
  result.magicalAttack+=(stats.magicalAttack??0)*(settings.magicalAttackFractionOfCaster??0);
  result.physicalDefense+=(stats.magicalDefense??0)*(settings.physicalDefenseFractionOfCasterMagicalDefense??0);
  result.magicalDefense+=(stats.magicalDefense??0)*(settings.magicalDefenseFractionOfCasterMagicalDefense??0);
 }
 return result;
}
