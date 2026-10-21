import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const report=await read('data/balancing/unbuffed-auto-versus-skills-check.json'),catalog=await read('data/skills.json'),comparison=await read('data/balancing/class-comparison-level60.json'),model=await read('data/balancing/attribute-model.json'),rotations=await read('data/balancing/all-class-damage-rotations.json');
const rows=[];
for(const c of report.classes.filter(c=>c.omittedAttackNumbers.length)){
 const pre=comparison.passiveRows.find(r=>r.key===c.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120))),all=rotations.classes.find(r=>r.key===c.key).rows.map(s=>s.nr);
 const execute=(attacks,config)=>simulateClass({pre,skills:catalog,model,attackNumbers:attacks,config:{...config,cacheCombatStats:true}});
 const control=execute(c.policy.attacks,c.bestFound.config);assert(Math.abs(control.totalDamage-c.bestFound.totalDamage)<1e-5);
 for(const nr of c.omittedAttackNumbers){
  if(c.key==='villian'&&[90,91,92].includes(nr))continue;
  const s=catalog.find(s=>s.nr===nr),before=c.standard.skills.find(s=>s.nr===nr),restore=execute([...c.policy.attacks,nr],c.bestFound.config),drop=execute(all.filter(n=>n!==nr),c.standard.config);
  rows.push({classKey:c.key,className:c.name,nr,name:s.skillName_de,description:s.description_de,standardUses:before?.applications??0,standardDamage:before?.damage??0,standardMana:before?.manaSpent??0,gainDroppingFromStandard:drop.totalDamage-c.standard.totalDamage,gainRestoringToBest:restore.totalDamage-c.bestFound.totalDamage,baselineBest:c.bestFound.totalDamage,restoredDamage:restore.totalDamage});
 }
 if(c.key==='villian'){
  const numbers=[90,91,92],config={...c.bestFound.config,disabledSetupSkillNumbers:(c.bestFound.config.disabledSetupSkillNumbers??[]).filter(n=>n!==188)};
  const restore=execute([...new Set([...c.policy.attacks,...numbers])],config);
  rows.push({classKey:c.key,className:c.name,numbers,name:'Tarnpaket: Schattenfalle, Schattendolch, Schattenschlag + Dunkler Schleier',gainRestoringToBest:restore.totalDamage-c.bestFound.totalDamage,baselineBest:c.bestFound.totalDamage,restoredDamage:restore.totalDamage,note:'Joint check: enabling the stealth setup triggers its built-in sequence. No separate per-skill attribution claimed.'});
 }
 console.log(JSON.stringify({class:c.name,checked:rows.filter(r=>r.classKey===c.key).length}));
}
await fs.writeFile('data/balancing/omitted-attack-skills-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'600s unbuffed single-target dummy, no incoming damage. Same policy and stats; restore one omitted attack to the best-found policy, or drop one from the standard policy. These are local marginal effects, not globally optimized skill worth. Stealth assessed as one bundle. Healing/control/area/movement utility excluded from damage score.',rows},null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');let md='# Ausgelassene Angriffsskills: gezielte Gegenprüfung\n\n600 Sekunden, ungebufft, einzelnes stationäres Ziel ohne Gegenangriffe. Heilung, Kontrolle und zusätzliche Flächenziele werden nicht belohnt. Negative Werte in der letzten Spalte bedeuten: Das Hinzufügen verschlechtert die geprüfte Rotation. Keine allgemeine Aussage über PvP, Gruppen oder andere Ausrüstung.\n\n| Klasse | Skill / Paket | Gewinn beim Weglassen aus Standardlauf | Änderung beim Hinzufügen zur besten gefundenen Variante |\n| --- | --- | ---: | ---: |\n';for(const r of rows)md+=`| ${r.className} | ${r.name} | ${r.gainDroppingFromStandard===undefined?'Paketprüfung':f(r.gainDroppingFromStandard)} | ${f(r.gainRestoringToBest)} |\n`;
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/omitted-attack-skills-audit.md'),md);
console.log('Saved local add/remove checks. No skill definitions changed.');
