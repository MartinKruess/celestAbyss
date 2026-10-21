import {isPassiveSkill} from './skillClassification.js';
import {curveValue} from './rotationDamage.js';

export function targetedSkillModifiers(skills,includedSkills,skillNumber){
 let damageMultiplier=1,physicalDamageMultiplier=1,magicalDamageMultiplier=1,manaMultiplier=1,cooldownReduction=0,castTimeReduction=0,extraFlatDamage=0,replacementSkillName_de,replacementSkillName_eng;
 for(const nr of includedSkills??[]){const passive=skills.find(s=>s.nr===nr);if(!isPassiveSkill(passive))continue;
  for(const effect of passive.effects??[]){
   const specific=effect.appliesTo==='specificSkill'&&effect.targetSkillNumber===skillNumber;
   const allMana=effect.appliesTo==='allSkills'&&effect.type==='resourceCostReduction'&&effect.resource==='mana';
   if(!specific&&!allMana)continue;
   const value=curveValue(effect.valueScaling,passive.maxSkillLv)??effect.value;
   if(effect.type==='damageBonus'&&effect.unit==='flat')extraFlatDamage+=value;
   if(effect.replacementSkillName_de)replacementSkillName_de=effect.replacementSkillName_de;
   if(effect.replacementSkillName_eng)replacementSkillName_eng=effect.replacementSkillName_eng;
   if(effect.type==='damageBonus'&&effect.unit==='fraction'){
    if(effect.damageTypes?.length){
     if(effect.damageTypes.includes('physical'))physicalDamageMultiplier*=1+value;
     if(effect.damageTypes.includes('magical'))magicalDamageMultiplier*=1+value;
    }else damageMultiplier*=1+value;
   }
   if(effect.type==='resourceCostReduction'&&effect.resource==='mana'&&effect.unit==='fraction')manaMultiplier*=Math.max(0,1-value);
   if(effect.type==='cooldownReduction'&&effect.unit==='flat')cooldownReduction+=value;
   if(effect.type==='castTimeReduction'&&effect.unit==='flat')castTimeReduction+=value;
  }
 }
 return {damageMultiplier,physicalDamageMultiplier,magicalDamageMultiplier,manaMultiplier,cooldownReduction,castTimeReduction,extraFlatDamage,replacementSkillName_de,replacementSkillName_eng};
}
