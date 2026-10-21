import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {isAttackSkill} from '../services/skillClassification.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const path='data/balancing/current-druid-energy-five-ten-simulation.json';
const [report,catalog,model]=await Promise.all([path,'data/skills.json','data/balancing/attribute-model.json'].map(read));
const compact=r=>{
 const e=r.skills.find(s=>s.nr===36),attacks=r.skills.filter(s=>isAttackSkill(catalog.find(d=>d.nr===s.nr)));
 assert(r.finalMana>=0);assert(!r.deathAt);assert.equal(r.durationSeconds,600);assert(Math.abs(r.totalDamage-r.skillDamage-r.autoDamage-r.summonDamage)<1e-5);
 return {totalDamage:r.totalDamage,characterDamage:r.skillDamage+r.autoDamage,dps:r.dps,skillDamage:r.skillDamage,autoDamage:r.autoDamage,summonDamage:r.summonDamage,manaSpent:r.manaSpent,manaRegenerated:r.manaRegenerated,finalMana:r.finalMana,manaBlockedSeconds:r.manaBlockedSeconds,energyUses:e?.applications??0,energyDamage:e?.damage??0,energyManaSpent:e?.manaSpent??0,energyShareOfCharacterDamage:100*(e?.damage??0)/(r.skillDamage+r.autoDamage),energyShareOfAttackApplications:100*(e?.applications??0)/Math.max(1,attacks.reduce((a,s)=>a+s.applications,0)),skills:r.skills.map(s=>({nr:s.nr,name:s.name,kind:s.kind,uses:s.applications,hits:s.hits,damage:s.damage,manaSpent:s.manaSpent})),warnings:r.warnings};
};
const originalRows=structuredClone(report.rows);
for(const row of report.rows){
 const skills=catalog.map(s=>s.nr===36&&row.key==='druid'?{...s,learningLimits:{...s.learningLimits,classOverrides:{...s.learningLimits.classOverrides,Druide:row.energyLevel,Alchemist:row.energyLevel}}}:s);
 const base={duration:600,targetHealth:1e9,step:.01,manaRegenInterval:model.regenerationTiming?.manaTickIntervalSeconds??3,enableOwnBuffs:row.buffMode!=='none',prebuffOwnBuffs:false,permanentPrebuffs:false,preparedBuffNumbers:row.groups,permanentBuffNumbers:row.groups,externalBuffSkills:row.buffMode==='party'?report.providers.map(p=>{const skill=skillForClass(catalog.find(s=>s.nr===p.nr),p.provider);return {...skill,effectiveSkillLevel:p.level};}):[],cacheCombatStats:true,recordActionTimeline:false,specialAttributeAttackFactor:0};
 const run=policy=>simulateClass({pre:row.pre,skills,model,attackNumbers:policy.attacks,config:{...base,attackMode:policy.mode??'skillsPreferred',ownBuffNumbers:[...row.groups,...(policy.own??row.availableOwnBuffNumbers)],skillPriorityScores:policy.scores,reserveManaForPriority:false,skillWaitLookaheadSeconds:policy.wait??0,skillWaitPriorityRatio:1.5}});
 const policies=[{...row.search.policy,name:'mixedOwnWinner',mode:'mixed'}];
 if(row.key==='druid'){
  const other=originalRows.find(r=>r.key==='druid'&&r.buffMode===row.buffMode&&r.energyLevel!==row.energyLevel);
  policies.push({...other.search.policy,name:'otherLevelWinner',mode:'skillsPreferred'},{...other.search.policy,name:'mixedOtherLevelWinner',mode:'mixed'},{name:'mixedAllSkills',attacks:row.availableAttackNumbers,mode:'mixed'});
 }
 const tested=[];
 for(const policy of policies){const result=run(policy);tested.push({policy,damage:result.totalDamage});if(result.totalDamage>row.best.totalDamage){row.best=compact(result);row.search.policy=policy;}}
 const energyOnly=compact(run({name:'mixedEnergyOnly',attacks:[36],mode:'mixed'}));
 if(energyOnly.totalDamage>row.energyOnly.totalDamage)row.energyOnly=energyOnly;
 row.refinement={tested,mixedEnergyOnlyChecked:true};
 console.log(JSON.stringify({buffMode:row.buffMode,key:row.key,level:row.energyLevel,damage:Math.round(row.best.totalDamage),energyUses:row.best.energyUses,energyShare:row.best.energyShareOfCharacterDamage,policy:row.search.policy.name}));
}
for(const [p,expected]of Object.entries(report.inputHashes))assert.equal(createHash('sha256').update(await fs.readFile(p)).digest('hex'),expected,'Source changed');
report.refinedAt=new Date().toISOString();report.assumptions.push('Additional exact-grid cross-check: each Druid level runs the other level’s winning policy. Mixed scheduling and energy-only mixed scheduling are also tested for all four variants; only higher-damage results replace the incumbent.');
await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
console.log('Cross-check saved; source hashes unchanged.');
