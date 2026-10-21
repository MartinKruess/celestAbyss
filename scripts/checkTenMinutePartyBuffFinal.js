import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';
const report=JSON.parse(await fs.readFile('data/balancing/all-class-ten-minute-party-buff-final.json','utf8'));
const skills=JSON.parse(await fs.readFile('data/skills.json','utf8'));
assert.equal(report.classes.length,13);assert.equal(report.durationSeconds,600);
let buffActivations=0,skillActions=0,autoActions=0;
for(const c of report.classes){
 assert.equal(c.autoOnly.result.initialMana,c.skillsPreferred.result.initialMana);
 assert.equal(c.autoOnly.result.initialHealth,c.skillsPreferred.result.initialHealth);
 for(const mode of ['autoOnly','skillsPreferred']){
  const m=c[mode],r=m.result;
  assert.equal(r.config.prebuffOwnBuffs,false);assert.equal(r.config.permanentPrebuffs,false);
  assert.deepEqual(r.config.preparedBuffNumbers,c.groups);assert.deepEqual(r.config.permanentBuffNumbers,c.groups);
  assert.equal(r.durationSeconds,600);assert(r.finalMana>=0&&!r.deathAt);
  assert(m.characterDamage>=m.search.baselineDamage-1e-5);
  assert(Math.abs(r.manaSpent-r.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-5);
  assert(Math.abs(r.totalDamage-r.skills.reduce((n,s)=>n+s.damage,0))<1e-5);
  assert(Math.abs(m.characterDamage-m.autoRelatedDamage-m.activeSkillDamage)<1e-5);
  for(const nr of c.groups){const periods=r.buffPeriods.filter(b=>b.nr===nr);assert.equal(periods.length,1);assert.equal(periods[0].start,0);assert.equal(periods[0].end,600);assert(!r.skills.some(s=>s.nr===nr&&s.applications>0));}
  for(const nr of m.search.selectedOwnBuffNumbers){
   const skill=skillForClass(skills.find(s=>s.nr===nr),c.key),row=r.skills.find(s=>s.nr===nr);
   if(!row)continue;
   buffActivations+=row.applications;
   const duration=curveValue(skill.durationScaling,skill.maxSkillLv)??skill.dur??Infinity;
   const cd=curveValue(skill.cooldownScaling,skill.maxSkillLv)??skill.cd??0;
   for(let i=1;i<row.useTimes.length;i++)assert(row.useTimes[i]-row.useTimes[i-1]>=cd-1e-6);
   if(skill.activation!=='toggle'&&![158,240].includes(nr))for(const p of r.buffPeriods.filter(p=>p.nr===nr))assert(p.end-p.start<=duration+1e-6);
  }
  for(const nr of m.search.omittedOwnBuffNumbers)assert(!r.skills.some(s=>s.nr===nr&&s.applications>0));
  const autos=r.skills.find(s=>s.nr==='auto');autoActions+=autos?.applications??0;
  if(mode==='skillsPreferred'){
   const acts=r.actionTimeline.filter(a=>a.nr!=='auto');skillActions+=acts.length;
   for(const a of r.actionTimeline.filter(a=>a.nr==='auto')){
    assert(a.readyAffordableSelectedSkillCount===0||a.waitingForSkill!==null);
    for(const act of acts)if(act.time>=a.time)assert(act.time>=a.recoveryUntil-1e-7);
   }
  }
 }
 console.log(JSON.stringify({class:c.name,auto:Math.round(c.autoOnly.characterDamage),mixed:Math.round(c.skillsPreferred.characterDamage),mixedAA:Math.round(c.skillsPreferred.autoRelatedDamage),mixedSkills:Math.round(c.skillsPreferred.activeSkillDamage),ownBuffMana:Math.round(c.skillsPreferred.result.buffManaSpent)}));
}
console.log(`Verified 26 final runs; ${buffActivations} paid self-buff activations, ${skillActions} combined-mode skill actions, ${autoActions} auto actions.`);
