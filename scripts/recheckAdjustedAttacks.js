import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {evaluateDamageSkill,curveValue} from '../services/rotationDamage.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [baseline,catalog,comparison,model,rotations,old]=await Promise.all(['data/balancing/all-class-timed-damage.json','data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/unbuffed-auto-versus-skills-check.json'].map(read));
const targets={butcher:[96],gladiator:[96],herbalist:[221,69],druid:[221],shaman:[202,50,255],summoner:[66,47],villian:[17,115],ritualist:[235]};
const rows=[],classes=[];
for(const [key,numbers]of Object.entries(targets)){
 const control=baseline.results.find(r=>r.key===key),pre=comparison.passiveRows.find(r=>r.key===key&&(key!=='ritualist'||!r.includedSkills.includes(120))),all=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr),previous=old.classes.find(r=>r.key===key);
 const base={...control.config,enableOwnBuffs:false,cacheCombatStats:true,recordActionTimeline:false};
 const execute=(p,step=.01)=>simulateClass({pre,skills:catalog,model,attackNumbers:p.attacks,config:{...base,step,skillPriorityScores:p.scores,reserveManaForPriority:p.reserve??false,disabledSetupSkillNumbers:p.disabled??[]}});
 const standardPolicy={attacks:all},standard=execute(standardPolicy);assert(Math.abs(standard.totalDamage-control.totalDamage)<1e-5,key);
 const candidates=[standardPolicy,previous.policy];
 for(const weight of [0,1]){
  const scores=Object.fromEntries(all.map(n=>{const r=standard.skills.find(s=>s.nr===n);return[n,(r?.damage/Math.max(1,r?.applications??0)||1)/Math.pow(Math.max(1,(r?.manaSpent??1)/Math.max(1,r?.applications??0)),weight)];}));
  candidates.push({attacks:all,scores});
 }
 let tested=candidates.map(policy=>({policy,result:execute(policy,.1)}));
 let coarse=tested.reduce((a,b)=>a.result.totalDamage>b.result.totalDamage?a:b);
 for(let pass=0;pass<2;pass++){
  const start=coarse;
  for(const nr of all){const attacks=start.policy.attacks.includes(nr)?start.policy.attacks.filter(n=>n!==nr):[...start.policy.attacks,nr];const policy={...start.policy,attacks};const candidate={policy,result:execute(policy,.1)};tested.push(candidate);if(candidate.result.totalDamage>coarse.result.totalDamage)coarse=candidate;}
  if(start===coarse)break;
 }
 let best={policy:standardPolicy,result:standard};
 for(const c of tested.sort((a,b)=>b.result.totalDamage-a.result.totalDamage).slice(0,3)){
  const result=execute(c.policy);if(result.totalDamage>best.result.totalDamage)best={policy:c.policy,result};
 }
 classes.push({key,standardTotal:standard.totalDamage,bestFoundTotal:best.result.totalDamage,bestPolicy:best.policy});
 for(const nr of numbers){
  const skill=skillForClass(catalog.find(s=>s.nr===nr),key),withPolicy={...best.policy,attacks:[...new Set([...best.policy.attacks,nr])]},withoutPolicy={...best.policy,attacks:best.policy.attacks.filter(n=>n!==nr)};
  const included=execute(withPolicy),excluded=execute(withoutPolicy),dropped=execute({attacks:all.filter(n=>n!==nr)}),usage=included.skills.find(s=>s.nr===nr),stats=pre.stats;
  const fixed=evaluateDamageSkill(skill,{...stats,physicalAttack:0,magicalAttack:0,criticalDamageBonus:.8}),actual=evaluateDamageSkill(skill,{...stats,criticalDamageBonus:.8});
  rows.push({key,nr,name:skill.skillName_de,className:control.name,cast:skill.castTimeSeconds??0,cooldown:curveValue(skill.cooldownScaling,skill.maxSkillLv)??skill.cd,baseDamage:fixed.damage,damageWithCharacter:actual.damage,listedMana:curveValue(skill.resourceCosts.find(c=>c.resource==='mana').scaling,skill.maxSkillLv),applications:usage?.applications??0,skillDamage:usage?.damage??0,manaSpent:usage?.manaSpent??0,deltaInStandard:standard.totalDamage-dropped.totalDamage,deltaInSearchedPolicy:included.totalDamage-excluded.totalDamage,withTotal:included.totalDamage,withoutTotal:excluded.totalDamage,withAutoDamage:included.autoDamage,withoutAutoDamage:excluded.autoDamage,withSkills:included.skills,withoutSkills:excluded.skills});
 }
 console.log(JSON.stringify({key,best:Math.round(best.result.totalDamage),rows:rows.filter(r=>r.key===key).map(r=>({nr:r.nr,delta:Math.round(r.deltaInSearchedPolicy)}))}));
 await fs.writeFile('tmp/adjusted-attacks-progress.json',JSON.stringify({classes,rows},null,2)+'\n');
}
const report={generatedAt:new Date().toISOString(),scope:'600 seconds unbuffed; current standard controls verified. Finite current subset/priority search seeded by archived policy, then exact .01-second paired inclusion/exclusion checks. No globally optimal claim. Healing, crowd control and multiple area targets are not scored. No skill definitions changed.',classes,rows};
await fs.writeFile('data/balancing/adjusted-attacks-relevance.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Erneute Prüfung der angepassten Angriffe\n\n'+report.scope+'\n\nPositive Differenz: Skill erhöht den Gesamtschaden. Negative Differenz: Weglassen erhöht den Gesamtschaden in dieser jeweiligen festen Rotation. Beide Tests erlauben Auto-Attacks als Füller. Keine erzwungenen Schadensanteile.\n\n| Klasse | Skill | Anwendungen mit Skill | Skill-Schaden | Mana gesamt | Beitrag im Standardlauf | Beitrag in gesuchter Rotation |\n| --- | --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.className} | ${r.name} | ${r.applications} | ${f(r.skillDamage)} | ${f(r.manaSpent)} | ${f(r.deltaInStandard)} | ${f(r.deltaInSearchedPolicy)} |\n`;
await fs.writeFile('docs/balancing/adjusted-attacks-relevance.md',md);
console.log('Saved current paired relevance checks.');
