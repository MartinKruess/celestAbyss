import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {skillClassVariant} from '../services/skillClassVariant.js';

const plan=JSON.parse(await fs.readFile('data/balancing/skill-point-budget-plan.json','utf8'));
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
assert.equal(plan.referenceClassSkillCount*plan.regularSkillTotal+plan.referenceLateSkillCount*plan.lateSkillSurchargeTotal,plan.referenceClassTotal);
const classes=[];
for(const file of (await fs.readdir('data/balancing')).filter(f=>f.endsWith('-skill-review.json'))){
  const review=JSON.parse(await fs.readFile(`data/balancing/${file}`,'utf8'));
  if(!review.skills)continue;
  const skills=(review.skillNumbers??review.skills.map(s=>s.nr)).map(nr=>{
    const skill=catalog.find(s=>s.nr===nr);
    assert(skill);
    const variant=skillClassVariant(skill,review.classKey);
    const firstCharacterLevel=variant.learningRequirements?.minimumCharacterLevel??null;
    return {nr,name:skill.skillName_de,firstCharacterLevel,plannedTotal:firstCharacterLevel===null?null:(firstCharacterLevel>=plan.lateSkillFirstCharacterLevel?plan.lateSkillTotal:plan.regularSkillTotal)};
  });
  const unresolved=skills.filter(s=>s.firstCharacterLevel===null);
  const late=skills.filter(s=>s.firstCharacterLevel>=plan.lateSkillFirstCharacterLevel);
  classes.push({classKey:review.classKey,fileKey:file.replace('-skill-review.json',''),skillCount:skills.length,lateSkillCount:late.length,unresolvedUnlockCount:unresolved.length,referenceTotalIgnoringStarterExceptions:unresolved.length?null:skills.reduce((sum,s)=>sum+s.plannedTotal,0),skills});
}
await fs.writeFile('data/balancing/skill-point-budget-by-class.json',JSON.stringify({status:'planningOnlyNotApplied',rules:'data/balancing/skill-point-budget-plan.json',classes},null,2)+'\n');
console.log(JSON.stringify(classes.map(({fileKey,skillCount,lateSkillCount,unresolvedUnlockCount,referenceTotalIgnoringStarterExceptions})=>({class:fileKey,skillCount,lateSkillCount,unresolvedUnlockCount,total:referenceTotalIgnoringStarterExceptions}))));
