const aliases={adventurer:['Abenteuer','Adventure','Adventurer','Scout'],luminet:['Luminet','Lightmage'],healer:['Healer','Priest'],druid:['Druide','Alchemist'],gladiator:['Gladiator','Berserker'],knight:['Knight','Templar','Ritter','Tempelritter']};
export function learnableSkillLevel(skill,key){
 const limits=skill.learningLimits;
 const overrides=(aliases[key]??[]).map(a=>limits?.classOverrides?.[a]).filter(v=>v!==undefined);
 return overrides.length?Math.max(...overrides):limits?.defaultMaxLevel??skill.maxSkillLv;
}
