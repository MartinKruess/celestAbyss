import {withSkillClassification} from './skillClassification.js';
// Select a stored class specialization before resolving levels or formulas.
export function skillClassVariant(skill,key){
 const override=key&&skill.classCombatOverrides?.[key];
 const selected=override?{...skill,...structuredClone(override),classCombatOverrides:skill.classCombatOverrides}:skill;
 const levels=selected.learningRequirements?.classOverrides;
 const unlock=levels instanceof Map?levels.get(key):levels?.[key];
 return withSkillClassification(unlock===undefined?selected:{...selected,learningRequirements:{...selected.learningRequirements,minimumCharacterLevel:unlock}});
}
