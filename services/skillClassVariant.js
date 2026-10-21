import {withSkillClassification} from './skillClassification.js';
// Select a stored class specialization before resolving levels or formulas.
export function skillClassVariant(skill,key){
 const override=key&&skill.classCombatOverrides?.[key];
 return withSkillClassification(override?{...skill,...structuredClone(override),classCombatOverrides:skill.classCombatOverrides}:skill);
}
