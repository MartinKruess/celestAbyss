import {isPassiveSkill} from './skillClassification.js';
import {curveValue} from './skillProgression.js';
export function permanentManaRegenMultiplier(skills,includedNumbers){
 let factor=1;
 for(const nr of includedNumbers??[]){const s=skills.find(s=>s.nr===nr);if(!isPassiveSkill(s))continue;
  for(const e of s.effects??[])if(e.type==='statModifier'&&e.target==='self'&&e.stat==='manaRegen'&&e.unit==='fraction')factor*=1+(curveValue(e.valueScaling,s.maxSkillLv)??e.value??0);
 }
 return factor;
}
