import {attachProgressionRules} from './skillProgression.js';
import {learnableSkillLevel} from './skillLearningLimits.js';
import {skillOutputAtLevel} from './skillLevel.js';
import {skillClassVariant} from './skillClassVariant.js';
export function skillForClass(skill,key){
 if(!skill)return skill;
 if(skill.effectiveSkillLevel!==undefined)return skill;
 skill=skillClassVariant(skill,key);
 const cap=learnableSkillLevel(skill,key);
 const candidate=cap===skill.maxSkillLv?skill:{...skill,maxSkillLv:cap};
 return attachProgressionRules(candidate,{outputAtLevel:(level,basis)=>skillOutputAtLevel(candidate,level,basis)});
}
