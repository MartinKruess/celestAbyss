import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const baseline=await read('data/balancing/all-class-timed-damage.json'),comparison=await read('data/balancing/class-comparison-level60.json'),skills=await read('data/skills.json'),model=await read('data/balancing/attribute-model.json'),rotations=await read('data/balancing/all-class-damage-rotations.json');
const classes=[];let seed=3192026;
const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
for(const control of baseline.results){
 const pre=comparison.passiveRows.find(r=>r.key===control.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const all=rotations.classes.find(c=>c.key===control.key).rows.map(s=>s.nr);
 const get=n=>skills.find(s=>s.nr===n);
 const availableSetups=control.key==='villian'?[188]:control.key==='summoner'?[185]:control.key==='gladiator'?[161]:[];
 const base={...control.config,enableOwnBuffs:false,cacheCombatStats:true,recordActionTimeline:false};
 const execute=(p,step=.01)=>simulateClass({pre,skills,model,attackNumbers:p.attacks,config:{...base,step,attackMode:p.mode??'mixed',skillPriorityScores:p.scores,reserveManaForPriority:p.reserve??false,disabledSetupSkillNumbers:p.disabled??[]}});
 const standard=execute({attacks:all});assert(Math.abs(standard.totalDamage-control.totalDamage)<1e-5,'Control mismatch '+control.key);
 const autoPolicy={name:'autoOnly',attacks:[],mode:'autoOnly'},autoOnly=execute(autoPolicy);
 const observed=Object.fromEntries(standard.skills.filter(s=>typeof s.nr==='number'&&s.applications>0).map(s=>[s.nr,{damage:s.damage/s.applications,mana:s.manaSpent/s.applications}]));
 const score=(manaWeight,timeWeight)=>Object.fromEntries(all.map(n=>{const s=get(n),o=observed[n]??{damage:1,mana:1};return[n,Math.max(1,o.damage)/Math.pow(Math.max(1,o.mana),manaWeight)/Math.pow(Math.max(.1,(s.castTimeSeconds??0)+.1),timeWeight)];}));
 const initial=[{name:'standard',attacks:all},autoPolicy,{name:'noAttacksNoCombos',attacks:[],disabled:availableSetups}];
 for(const [mw,tw]of [[0,0],[1,0],[0,1],[.5,.5]]){
  const scores=score(mw,tw),ordered=[...all].sort((a,b)=>scores[b]-scores[a]);
  initial.push({name:`priority:${mw}/${tw}`,attacks:all,scores});
  for(const count of [1,3,5])initial.push({name:`top:${count}/${mw}/${tw}`,attacks:ordered.slice(0,count),scores,disabled:availableSetups});
 }
 const tested=[];
 const evaluate=p=>{const r=execute(p,.1);const row={policy:p,damage:r.totalDamage};tested.push(row);return row;};
 for(const p of initial)evaluate(p);
 let best=tested.reduce((a,b)=>a.damage>b.damage?a:b);
 // Compare dropping attacks and combo setup actions, without prescribing any damage shares.
 for(let pass=0;pass<2;pass++){
  const start=best;
  for(const n of all){const attacks=start.policy.attacks.includes(n)?start.policy.attacks.filter(x=>x!==n):all.filter(x=>start.policy.attacks.includes(x)||x===n);const r=evaluate({...start.policy,name:`toggle:${pass}/${n}`,attacks,mode:'mixed'});if(r.damage>best.damage)best=r;}
  for(const n of availableSetups){const disabled=start.policy.disabled?.includes(n)?start.policy.disabled.filter(x=>x!==n):[...(start.policy.disabled??[]),n];const r=evaluate({...start.policy,name:`setup:${pass}/${n}`,disabled,mode:'mixed'});if(r.damage>best.damage)best=r;}
  if(start===best)break;
 }
 for(let i=0;i<10;i++){
  const parent=i%2?best.policy:initial[Math.floor(random()*initial.length)];
  const attacks=all.filter(n=>parent.attacks.includes(n)?random()>.2:random()>.7);
  const p={...parent,name:'random:'+i,attacks,mode:'mixed',disabled:availableSetups.filter(()=>random()>.5)};const r=evaluate(p);if(r.damage>best.damage)best=r;
 }
 let winner={policy:{name:'standard',attacks:all},result:standard};
 const finals=[{policy:autoPolicy},...tested.sort((a,b)=>b.damage-a.damage).slice(0,5)];
 for(const {policy}of finals){const result=execute(policy);if(result.totalDamage>winner.result.totalDamage+1e-6)winner={policy,result};}
 // Exact-grid removal checks protect against coarse-grid timing artifacts.
 const start=winner;
 for(const n of all){const attacks=start.policy.attacks.includes(n)?start.policy.attacks.filter(x=>x!==n):all.filter(x=>start.policy.attacks.includes(x)||x===n);const policy={...start.policy,name:'exactToggle:'+n,mode:'mixed',attacks};const result=execute(policy);if(result.totalDamage>winner.result.totalDamage+1e-6)winner={policy,result};}
 assert(winner.result.totalDamage+1e-6>=standard.totalDamage);assert(winner.result.totalDamage+1e-6>=autoOnly.totalDamage);
 classes.push({key:control.key,name:control.name,autoOnly,standard,bestFound:winner.result,policy:winner.policy,trials:tested.length+finals.length+all.length+2,omittedAttackNumbers:all.filter(n=>!winner.policy.attacks.includes(n)),gainOverAuto:winner.result.totalDamage-autoOnly.totalDamage,gainOverStandard:winner.result.totalDamage-standard.totalDamage});
 console.log(JSON.stringify({class:control.name,auto:Math.round(autoOnly.totalDamage),standard:Math.round(standard.totalDamage),best:Math.round(winner.result.totalDamage),omitted:classes.at(-1).omittedAttackNumbers}));
 await fs.writeFile('tmp/unbuffed-auto-skill-check-progress.json',JSON.stringify(classes,null,2)+'\n');
}
const report={generatedAt:new Date().toISOString(),durationSeconds:600,targetHealth:10000000,buffScope:'No optional self or group buffs',scope:'Current skills and stats. Total damage includes temporary class summons equally in all modes. No regular pets, random procs or critical rolls. Compare auto-only plus class summons, original standard policy, and searched attack subsets/priorities with optional combo setups disabled. No target damage or share quotas. Finite policy search: best found, not proof of global optimum. Coarse step .1s; final results .01s.',classes};
await fs.writeFile('data/balancing/unbuffed-auto-versus-skills-check.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Gegenprüfung: lohnen sich Skills gegenüber Auto-Attacks?\n\n'+report.scope+'\n\n600 Sekunden, dieselben ungebufften Bedingungen wie All Class Timed Damage. Temporäre Klassenbeschwörungen sind in allen Spalten enthalten; keine regulären Pets. Die Suche darf Angriffe und Kombo-Setups auslassen und hat keine Vorgabe für Schadensanteile.\n\n| Klasse | Nur Auto-Attacks + Beschwörung | Standardlauf | Bester gefundener Lauf | Gewinn gegen nur Auto-Attacks | Auto-Anteil im besten Lauf |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const c of classes){const r=c.bestFound;md+=`| ${c.name} | ${f(c.autoOnly.totalDamage)} | ${f(c.standard.totalDamage)} | ${f(r.totalDamage)} | ${(100*c.gainOverAuto/c.autoOnly.totalDamage).toFixed(1)} % | ${(100*r.autoDamage/r.totalDamage).toFixed(1)} % |\n`;}
for(const c of classes){md+=`\n## ${c.name}\n\nAusgelassene Angriffsskills: ${c.omittedAttackNumbers.map(n=>getName(n)).join(', ')||'keine'}. Ausgelassene Kombo-Setups: ${(c.policy.disabled??[]).map(n=>getName(n)).join(', ')||'keine'}. Suchläufe: ${c.trials}.\n\n| Aktion | Anwendungen | Schaden |\n| --- | ---: | ---: |\n`;for(const s of c.bestFound.skills)md+=`| ${s.name} | ${s.applications} | ${f(s.damage)} |\n`;}
function getName(n){return skills.find(s=>s.nr===n)?.skillName_de??n;}
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/unbuffed-auto-versus-skills-check.md'),md);
console.log('Saved all 13 comparisons; no skill definitions changed.');
