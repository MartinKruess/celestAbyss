import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {isGroupBuff,isSelfBuff,isAttackSkill} from '../services/skillClassification.js';
const paths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/reports/class-skill-counts.json','services/timedDamageSimulation.js'];
const bodies=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [catalog,comparison,model,assignments]=bodies.slice(0,4).map(JSON.parse);
const hash=s=>createHash('sha256').update(s).digest('hex');
const inputHashes=Object.fromEntries(paths.map((p,i)=>[p,hash(bodies[i])]));
const familyNames={druid:'Druide',healer:'Heiler',luminet:'Luminet'};
const ownerNumbers=key=>assignments.counts.find(c=>c.name.startsWith(familyNames[key])).skillNumbers;
const providers=catalog.filter(isGroupBuff).flatMap(s=>{
 const eligible=assignments.counts.filter(c=>c.skillNumbers.includes(s.nr));
 const aliases={Gladiator:'gladiator','Kräuterkundler':'herbalist',Abenteurer:'adventurer',Jäger:'hunter',Butcher:'butcher',Schurke:'villian',Nachtjäger:'summoner',Ritualist:'ritualist',Druide:'druid',Heiler:'healer',Schamane:'shaman',Luminet:'luminet',Ritter:'knight'};
 const candidates=eligible.map(c=>{const key=aliases[c.name.split(' / ')[0]];return {key,skill:skillForClass(s,key)};});
 if(!candidates.length)return [];
 const selected=candidates.sort((a,b)=>b.skill.maxSkillLv-a.skill.maxSkillLv)[0];
 return [{nr:s.nr,provider:selected.key,level:selected.skill.maxSkillLv,skill:{...selected.skill,effectiveSkillLevel:selected.skill.maxSkillLv}}];
});
const progress=[],rows=[];
const compact=r=>{
 assert(r.finalMana>=0);assert(!r.deathAt);assert.equal(r.durationSeconds,600);
 assert(Math.abs(r.totalDamage-r.skillDamage-r.autoDamage-r.summonDamage)<1e-5);
 const energy=r.skills.find(s=>s.nr===36);
 const attackRows=r.skills.filter(s=>isAttackSkill(catalog.find(d=>d.nr===s.nr)));
 const applications=attackRows.reduce((n,s)=>n+s.applications,0);
 return {totalDamage:r.totalDamage,characterDamage:r.skillDamage+r.autoDamage,dps:r.dps,skillDamage:r.skillDamage,autoDamage:r.autoDamage,summonDamage:r.summonDamage,manaSpent:r.manaSpent,manaRegenerated:r.manaRegenerated,finalMana:r.finalMana,manaBlockedSeconds:r.manaBlockedSeconds,energyUses:energy?.applications??0,energyDamage:energy?.damage??0,energyManaSpent:energy?.manaSpent??0,energyShareOfCharacterDamage:100*(energy?.damage??0)/(r.skillDamage+r.autoDamage),energyShareOfAttackApplications:100*(energy?.applications??0)/Math.max(1,applications),skills:r.skills.map(s=>({nr:s.nr,name:s.name,kind:s.kind,uses:s.applications,hits:s.hits,damage:s.damage,manaSpent:s.manaSpent})),warnings:r.warnings};
};
const variants=[{key:'druid',level:5},{key:'druid',level:10},{key:'healer',level:5},{key:'luminet',level:20}];
for(const buffMode of ['none','own','party'])for(const variant of variants){
 const key=variant.key;
 const skills=catalog.map(s=>s.nr===36&&key==='druid'?{...s,learningLimits:{...s.learningLimits,classOverrides:{...s.learningLimits.classOverrides,Druide:variant.level,Alchemist:variant.level}}}:s);
 const pre=comparison.passiveRows.find(r=>r.key===key);
 const owned=ownerNumbers(key);
 const all=catalog.filter(s=>owned.includes(s.nr)&&isAttackSkill(s)).map(s=>s.nr);
 const own=catalog.filter(s=>owned.includes(s.nr)&&(isSelfBuff(s)||isGroupBuff(s))).map(s=>s.nr);
 const groups=buffMode==='party'?providers.map(p=>p.nr):[];
 const candidateOwn=buffMode==='none'?[]:own.filter(n=>!groups.includes(n));
 const base={duration:600,targetHealth:1e9,step:.01,manaRegenInterval:model.regenerationTiming?.manaTickIntervalSeconds??3,enableOwnBuffs:buffMode!=='none',prebuffOwnBuffs:false,permanentPrebuffs:false,preparedBuffNumbers:groups,permanentBuffNumbers:groups,externalBuffSkills:buffMode==='party'?providers.map(p=>p.skill):[],cacheCombatStats:true,recordActionTimeline:false,specialAttributeAttackFactor:0,attackMode:'skillsPreferred'};
 const execute=(policy,step=.05)=>simulateClass({pre,skills,model,attackNumbers:policy.attacks,config:{...base,step,attackMode:policy.mode??'skillsPreferred',ownBuffNumbers:[...groups,...(policy.own??candidateOwn)],skillPriorityScores:policy.scores,reserveManaForPriority:false,skillWaitLookaheadSeconds:policy.wait??0,skillWaitPriorityRatio:1.5}});
 const allPolicy={name:'allSkills',attacks:all};
 const observed=execute(allPolicy);
 const energyOnly={name:'energyOnlyWithFillerAutos',attacks:[36]};
 const spam={name:'energyOnlyNoAutos',attacks:[36],mode:'skillsOnly'};
 const noEnergy={name:'allOtherSkills',attacks:all.filter(n=>n!==36)};
 const policies=[allPolicy,energyOnly,spam,noEnergy,{name:'autosAndClassSummon',attacks:[],mode:'autoOnly'},{name:'energyPriority',attacks:all,scores:Object.fromEntries(all.map(n=>[n,n===36?1e9:1]))},{name:'energyWaitPriority',attacks:all,scores:Object.fromEntries(all.map(n=>[n,n===36?1e9:1])),wait:2}];
 for(const [manaWeight,timeWeight]of [[0,0],[1,0],[0,1],[.5,.5]]){
  const scores=Object.fromEntries(all.map(n=>{
   const r=observed.skills.find(s=>s.nr===n),s=skillForClass(skills.find(s=>s.nr===n),key);
   const damage=r?.applications?r.damage/r.applications:1,mana=r?.applications?r.manaSpent/r.applications:1;
   return [n,Math.max(1,damage)/Math.max(1,mana)**manaWeight/Math.max(.1,(s.castTimeSeconds??0)+.1)**timeWeight];
  }));
  policies.push({name:`score:${manaWeight}/${timeWeight}`,attacks:all,scores});
  policies.push({name:`top3:${manaWeight}/${timeWeight}`,attacks:[...all].sort((a,b)=>scores[b]-scores[a]).slice(0,3),scores});
 }
 if(candidateOwn.length)policies.push({...allPolicy,name:'noOptionalOwnBuffs',own:[]});
 const tested=[];
 const evaluate=policy=>{const result=execute(policy);const row={policy,damage:result.totalDamage};tested.push(row);return row;};
 for(const policy of policies)evaluate(policy);
 let best=tested.reduce((a,b)=>a.damage>b.damage?a:b);
 for(let pass=0;pass<2;pass++){
  const start=best;
  for(const n of all){const attacks=start.policy.attacks.includes(n)?start.policy.attacks.filter(x=>x!==n):[...start.policy.attacks,n];const row=evaluate({...start.policy,name:`toggle:${pass}/${n}`,attacks,mode:'skillsPreferred'});if(row.damage>best.damage)best=row;}
  for(const n of candidateOwn){const active=start.policy.own??candidateOwn;const row=evaluate({...start.policy,name:`ownToggle:${pass}/${n}`,own:active.includes(n)?active.filter(x=>x!==n):[...active,n]});if(row.damage>best.damage)best=row;}
  if(best===start)break;
 }
 const exact=[...tested.sort((a,b)=>b.damage-a.damage).slice(0,5).map(t=>t.policy),allPolicy,energyOnly,spam,noEnergy];
 const exactResults=exact.map(policy=>({policy,result:execute(policy,.01)}));
 const winner=exactResults.reduce((a,b)=>a.result.totalDamage>b.result.totalDamage?a:b);
 const energy=resolveSkillAtLevel(skills.find(s=>s.nr===36),variant.level,{classKey:key});
 const row={buffMode,key,energyLevel:variant.level,energyDefinition:{baseDamage:energy.matk,mana:energy.mana,cooldown:energy.cd,cast:energy.castTimeSeconds},pre,availableAttackNumbers:all,availableOwnBuffNumbers:candidateOwn,groups,search:{status:'bestFoundNotProvenGlobalOptimum',coarseTrials:tested.length,exactTrials:exactResults.length,policy:winner.policy},best:compact(winner.result),allSkills:compact(exactResults.find(r=>r.policy===allPolicy).result),energyOnly:compact(exactResults.find(r=>r.policy===energyOnly).result),energySpam:compact(exactResults.find(r=>r.policy===spam).result),withoutEnergy:compact(exactResults.find(r=>r.policy===noEnergy).result)};
 rows.push(row);progress.push({buffMode,key,energyLevel:variant.level,damage:Math.round(row.best.totalDamage),energyUses:row.best.energyUses,energyDamageShare:row.best.energyShareOfCharacterDamage,energyOnlyDamage:Math.round(row.energyOnly.totalDamage)});
 console.log(JSON.stringify(progress.at(-1)));
 await fs.writeFile('tmp/current-druid-energy-progress.json',JSON.stringify(progress,null,2)+'\n');
}
for(let i=0;i<paths.length;i++)assert.equal(hash(await fs.readFile(paths[i],'utf8')),inputHashes[paths[i]],'Source changed during scenario');
const report={generatedAt:new Date().toISOString(),status:'hypotheticalNoDatabaseOrCatalogWrites',inputHashes,providers:providers.map(({skill,...p})=>p),assumptions:['Level 60/R6; 600 seconds; stationary target with one billion HP, no target armor, resistance, retaliation or forced movement.','Permanent passives always included. No active buffs in none. Own and own group buffs activated and paid in own. In party, current group buffs at highest provider cap are prepared permanently; remaining own buffs activated and paid.','Nature Spirit included as normal class summon in every Druid strategy, including energy-only. Regular pets excluded. No random critical hits/procs. Forgotten Spell excluded because no target is selected.','Healer evaluated offensively without spending Mana on group healing or resurrection; these are not estimates of healer performance while actively healing.','Only Druid Energy Strike class cap is varied, five versus ten; the existing higher-level damage, Mana and cooldown progression is used. Other classes retain their actual caps.','Finite attack/buff subset and priority search, coarse step 0.05 seconds and finalists 0.01 seconds. Best found is not proof of a globally optimal rotation.','Energy-only comparison includes normal filler autos and class summons; separate energySpam result suppresses autos.'],rows};
await fs.writeFile('data/balancing/current-druid-energy-five-ten-simulation.json',JSON.stringify(report,null,2)+'\n');
console.log('Saved current-input scenario; source hashes unchanged.');
