import assert from 'node:assert/strict';
import {skillClassVariant} from './skillClassVariant.js';
import {learnableSkillLevel} from './skillLearningLimits.js';

const tame=new Set([133,134,135,136,137,138]);
const starts={2:130,3:80,4:45,5:30,6:20,10:10,15:6,20:5};
export function increasingCosts(count,total,first){
  assert(Number.isInteger(count)&&count>0);
  if(count===1)return [total];
  first??=Math.max(1,Math.round((starts[count]??5)*total/300));
  assert(first*count<total,'Increasing costs must fit the total');
  const last=2*total/count-first;
  const raw=Array.from({length:count},(_,i)=>first+(last-first)*i/(count-1));
  const result=raw.map(Math.floor);
  const order=raw.map((v,i)=>({i,remainder:v-Math.floor(v)})).sort((a,b)=>b.remainder-a.remainder||b.i-a.i);
  for(let left=total-result.reduce((s,v)=>s+v,0),i=0;i<left;i++)result[order[i].i]++;
  assert.equal(result[0],first);
  assert.equal(result.reduce((s,v)=>s+v,0),total);
  assert(result.every((v,i)=>v>0&&(!i||v>=result[i-1])));
  return result;
}
export function fullSkillPointCostUpdates(catalog,rules,plan,memberships){
  return catalog.map(original=>{
    const skill=structuredClone(original);
    function costs(key){
      const selected=skillClassVariant(skill,key);
      const count=learnableSkillLevel(skill,key);
      let first=rules.sharedFirstLevelCosts[skill.nr];
      const attack=plan.classFirstAttacks[key==='villian'?'rogue':key];
      if(attack?.nr===skill.nr)first=rules.firstAttackCost;
      if(tame.has(skill.nr))return Array.from({length:count},(_,i)=>first+i);
      const total=(selected.learningRequirements?.minimumCharacterLevel??0)>=55?400:300;
      return increasingCosts(count,total,first);
    }
    const rankCosts=costs(undefined);
    const classRankCosts={};
    for(const [key,numbers] of Object.entries(memberships))if(numbers.includes(skill.nr)){
      const ranks=costs(key);
      if(JSON.stringify(ranks)!==JSON.stringify(rankCosts))classRankCosts[key]=ranks;
    }
    skill.skillPointCosts={firstLevel:rankCosts[0],rankCosts,classRankCosts,furtherLevelsStatus:'defined',version:2};
    return skill;
  });
}
