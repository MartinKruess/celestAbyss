import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [skills,comparison,model,rotations,baseline,buffs]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const hash=createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex');
const candidate=structuredClone(skills),changes=[];
function scaleCurve(c,f){if(!c)return;for(const k of ['base','perLevel'])if(typeof c[k]==='number')c[k]*=f;if(c.values)c.values=c.values.map(v=>v*f);if(c.steps)c.steps=c.steps.map(v=>v*f);if(c.rule)scaleCurve(c.rule,f);}
function stat(nr,field,max){const s=candidate.find(s=>s.nr===nr),old=resolveSkillAtLevel(s,s.maxSkillLv)[field],f=max/old;s[field]=(s[field]??0)*f;scaleCurve(s.statScaling?.[field],f);for(const r of s.levelProgression?.rules??[])if(r.path.join('.')==='statScaling.'+field)scaleCurve(r.rule,f);changes.push({nr,name:s.skillName_de,field,oldMax:old,newMax:max});assert(Math.abs(resolveSkillAtLevel(s,s.maxSkillLv)[field]-max)<1e-7);}
stat(236,'int',6);stat(236,'wis',9);stat(178,'int',5);
const fire=candidate.find(s=>s.nr===178);for(const e of fire.effects){if(e.type!=='damageBonus')continue;e.value*=.5;scaleCurve(e.valueScaling,.5);}for(const r of fire.levelProgression.rules)if(r.path.join('.')==='effects.0.valueScaling')scaleCurve(r.rule,.5);changes.push({nr:178,name:fire.skillName_de,field:'fireDamage',oldMax:20,newMax:10});
stat(12,'patk',140);stat(173,'str',15);
stat(74,'wis',0);
stat(194,'int',20);
stat(190,'patk',40);stat(190,'dex',8);
stat(149,'patk',40);
stat(162,'str',30);
const rows=[],omissions=[],inventory=[];
const keys=['ritualist','butcher','gladiator','luminet','druid','summoner','adventurer','shaman'];
for(const key of keys){
 const pre=comparison.passiveRows.find(r=>r.key===key&&(key!=='ritualist'||!r.includedSkills.includes(120))),attackNumbers=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr),base=baseline.results.find(r=>r.key===key);
 const simulate=(catalog,stored,extra={})=>simulateClass({pre,skills:catalog,model,attackNumbers,config:{...stored.config,cacheCombatStats:true,recordActionTimeline:false,...extra}});
 for(const [mode,list]of [['self',buffs.scenarios.selfOnly.results],['groups',buffs.scenarios.selfAndGroups.results]]){
  const stored=list.find(r=>r.key===key),result=simulate(candidate,stored);assert.equal(result.durationSeconds,600);assert(!result.deathAt);assert(result.finalMana>=0);assert(Math.abs(result.totalDamage-result.autoDamage-result.skillDamage-result.summonDamage)<1e-5);
  rows.push({key,name:base.name,mode,baseDamage:base.totalDamage,oldDamage:stored.totalDamage,newDamage:result.totalDamage,oldGain:100*(stored.totalDamage/base.totalDamage-1),newGain:100*(result.totalDamage/base.totalDamage-1),oldManaBlocked:stored.manaBlockedSeconds,newManaBlocked:result.manaBlockedSeconds});
 }
 const own=buffs.scenarios.selfOnly.results.find(r=>r.key===key);
 for(const nr of own.availableOwnBuffNumbers){
  const original=skillForClass(skills.find(s=>s.nr===nr),key),resolved=resolveSkillAtLevel(original,original.maxSkillLv);
  inventory.push({key,nr,name:original.skillName_de,level:original.maxSkillLv,description:original.description_de,maxStats:Object.fromEntries(['str','vita','int','wis','dex','agi','patk','matk','atkSpeed','amb'].filter(k=>resolved[k]!==undefined).map(k=>[k,resolved[k]])),effects:resolved.effects,duration:resolved.dur,cooldown:resolved.cd});
  // Leave-one-out is a net contribution with cast/mana costs removed as well.
  const result=simulate(skills,own,{ownBuffNumbers:own.config.ownBuffNumbers.filter(n=>n!==nr)});
  omissions.push({key,nr,name:original.skillName_de,damageWithout:result.totalDamage,netDamageContribution:own.totalDamage-result.totalDamage,baselinePercentagePoints:100*(own.totalDamage-result.totalDamage)/base.totalDamage,manaBlockedWithout:result.manaBlockedSeconds});
 }
 console.log(JSON.stringify({key,rows:rows.filter(r=>r.key===key),omissions:omissions.filter(r=>r.key===key)}));
}
assert.equal(createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex'),hash);
const report={generatedAt:new Date().toISOString(),status:'proposalOnlyNotApplied',catalogHash:hash,scope:'600 seconds level60/R6; fixed policy, current companion definitions; all candidate changes combined. Omission results include saved mana/cast time and are not additive. Shared Power of the Wild affects Adventurer and Shaman. Self buffs only; no passives or group buffs changed.',changes,inventory,omissions,rows};
await fs.writeFile('data/balancing/active-self-buff-analysis.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Aktive Eigenbuffs – Prüfung und Änderungsvorschlag\n\n**Nur simuliert, nicht in der Datenbank umgesetzt.** Aktuelle Begleiterwerte, Level 60/R6, 600 Sekunden, gleiche Angriffspriorität. Kein eingehender Schaden; Schutz, Bewegung, Aggro, Ausweichen und Penetration werden nicht vollständig bewertet.\n\n| Klasse | Basis | Eigenbuffs aktuell | Eigenbuffs Vorschlag | Gewinn aktuell → Vorschlag | Mit Gruppen aktuell → Vorschlag |\n| --- | ---: | ---: | ---: | --- | --- |\n';
for(const key of keys){const a=rows.find(r=>r.key===key&&r.mode==='self'),b=rows.find(r=>r.key===key&&r.mode==='groups');md+=`| ${a.name} | ${f(a.baseDamage)} | ${f(a.oldDamage)} | ${f(a.newDamage)} | ${a.oldGain.toFixed(1)} % → ${a.newGain.toFixed(1)} % | ${f(b.oldDamage)} → ${f(b.newDamage)} |\n`;}
md+='\n## Getestete Maximalwerte\n\n| Skill | Wert | Aktuell | Vorschlag |\n| --- | --- | ---: | ---: |\n';for(const c of changes)md+=`| ${c.name} | ${c.field} | ${c.oldMax} | ${c.newMax} |\n`;
md+='\n## Einzelbeiträge im aktuellen Eigenbuff-Lauf\n\nJeweils einen Buff ausgelassen, einschließlich seiner Kosten und Aktivierungszeit. Beiträge sind nicht addierbar.\n\n| Klasse | Buff | Netto-Schadensbeitrag | Prozentpunkte der Basis |\n| --- | --- | ---: | ---: |\n';for(const r of omissions)md+=`| ${r.key} | ${r.name} | ${f(r.netDamageContribution)} | ${r.baselinePercentagePoints.toFixed(2)} |\n`;
md+='\n## Aktuelle Eigenbuffs\n\n';for(const r of inventory)md+=`### ${r.key}: ${r.name} (Stufe ${r.level})\n\n${r.description}\n\n`;
await fs.writeFile('docs/balancing/active-self-buff-analysis.md',md);

