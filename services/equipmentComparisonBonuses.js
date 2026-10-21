const attributeAliases={vitality:'vitality',vita:'vitality',wisdom:'wisdom',wis:'wisdom',strength:'strength',str:'strength',dexterity:'dexterity',dex:'dexterity',ambush:'ambush',amb:'ambush',intelligence:'intelligence',int:'intelligence',faith:'faith',victim:'victim',vic:'victim',agility:'agility',agi:'agility',luck:'luck'};
const statAliases={health:'maxHealth',maxHealth:'maxHealth',mana:'maxMana',maxMana:'maxMana',physicalAttack:'physicalAttack',magicalAttack:'magicalAttack',physicalDefense:'physicalDefense',magicalDefense:'magicalDefense',healthRegen:'healthRegen',manaRegen:'manaRegen',accuracy:'accuracy',dodge:'dodge',critChanceRating:'critChanceRating',criticalDamageBonus:'criticalDamageBonus',block:'block',penetration:'penetration',attackSpeed:'attackSpeed',movementSpeed:'movementSpeed'};
// Explicit units avoid interpreting legacy weapon percentages as rating points.
export function applyEquipmentBonus(bonus,attributes,flat,{directAttackFactor=1}={}){
  if(bonus.condition && bonus.condition!=='always')return {applied:false,reason:'conditionalEffect'};
  if(!Number.isFinite(bonus.value))return {applied:false,reason:'missingNumericValue'};
  const attribute=attributeAliases[bonus.stat];
  if(attribute){if(bonus.unit && bonus.unit!=='flat')return {applied:false,reason:'attributeUnitUnresolved'};attributes[attribute]=(attributes[attribute]??0)+bonus.value;return {applied:true};}
  const stat=statAliases[bonus.stat];if(!stat)return {applied:false,reason:'unknownStat'};
  let value=bonus.value;
  if(['attackSpeed','movementSpeed','criticalDamageBonus'].includes(stat)){
    if(bonus.unit==='percentagePoints')value/=100;
    else if(bonus.unit!=='fraction')return {applied:false,reason:'percentageUnitUnresolved'};
  }else if(bonus.unit && !['flat','ratingPoints','perTick'].includes(bonus.unit))return {applied:false,reason:'stackingOrUnitUnresolved'};
  if(['physicalAttack','magicalAttack'].includes(stat))value*=directAttackFactor;
  flat[stat]=(flat[stat]??0)+value;return {applied:true};
}
export function applyItemComparisonBonuses(item,attributes,flat,options={}){
  const unresolved=[];
  for(const bonus of item.comparisonBonuses??[]){const result=applyEquipmentBonus(bonus,attributes,flat,options);if(!result.applied)unresolved.push({...bonus,reason:result.reason});}
  for(const effect of item.comparisonEffects??[])unresolved.push({...effect,reason:'specialEffectRequiresCombatEvaluation'});
  return unresolved;
}
