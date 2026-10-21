import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';

const read=async path=>JSON.parse(await fs.readFile(path,'utf8'));
const [comparison,skills,model,rotations,reference,points]=await Promise.all([
 'data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json',
 'data/balancing/all-class-damage-rotations.json','data/balancing/all-class-two-minute-attack-modes.json','data/balancing/class-skill-points.json',
].map(read));
const get=nr=>skills.find(s=>s.nr===nr);
const providers=[];
for(const skill of skills.filter(s=>s.dmgType==='buff')) {
 const eligible=points.classes.filter(c=>c.skills.some(s=>s.nr===skill.nr));
 if(!eligible.length)continue;
 const candidates=eligible.map(c=>({key:c.key,name:c.name,skill:skillForClass(skill,c.key)})).sort((a,b)=>b.skill.maxSkillLv-a.skill.maxSkillLv);
 const provider=candidates[0];
 providers.push({nr:skill.nr,name:skill.skillName_de,provider:provider.name,providerKey:provider.key,level:provider.skill.maxSkillLv,skill:{...provider.skill,effectiveSkillLevel:provider.skill.maxSkillLv}});
}
const externalBuffSkills=providers.map(p=>p.skill);
let seed=7919;
const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const classes=[];
for(const ref of reference.classes) {
 const pre=comparison.passiveRows.find(r=>r.key===ref.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const allAttacks=rotations.classes.find(r=>r.key===ref.key).rows.map(r=>r.nr);
 const ownBuffNumbers=[...new Set([...providers.map(p=>p.nr),...ref.ownBuffNumbers])].sort((a,b)=>Number(Boolean(get(a).attributeExchangeSettings))-Number(Boolean(get(b).attributeExchangeSettings)));
 assert(!ownBuffNumbers.includes(158));
 const needed=new Set([...pre.includedSkills,...allAttacks,...ownBuffNumbers,120,13,34,56,104,105,123,134,161,185,186,188,218,226,229,237,240,244]);
 const catalog=skills.filter(s=>needed.has(s.nr));
 const config={...ref.skillsOnly.result.config,duration:600,targetHealth:1e9,baseAttacksPerSecond:1.3,rangedAttacksPerSecond:1.1,
  enableOwnBuffs:true,prebuffOwnBuffs:true,permanentPrebuffs:true,ownBuffNumbers,externalBuffSkills,attackMode:'skillsOnly',step:0.01};
 const run=(candidate,step=0.01,trace=false)=>simulateClass({pre,skills:catalog,model,attackNumbers:candidate.attacks,config:{...config,step,recordActionTimeline:trace,skillPriorityScores:candidate.scores,reserveManaForPriority:candidate.reserve??false}});
 const damage=r=>r.autoDamage+r.skillDamage;
 const baselineCandidate={name:'existingPriority',attacks:allAttacks};
 const baseline=run(baselineCandidate);
 const observed=Object.fromEntries(baseline.skills.map(s=>[s.nr,{damage:s.applications?s.damage/s.applications:0,mana:s.applications?s.manaSpent/s.applications:0}]));
 const scoreFor=(manaWeight,timeWeight,cooldownWeight=0)=>Object.fromEntries(allAttacks.map(nr=>{
  const s=skillForClass(get(nr),ref.key),o=observed[nr]??{damage:1,mana:1};
  const cast=s.castTimeSeconds??curveValue(s.castTimeScaling,s.maxSkillLv)??0;
  const cd=curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd??0;
  return [nr,Math.max(1,o.damage)/Math.pow(Math.max(1,o.mana),manaWeight)/Math.pow(Math.max(.1,cast+.1),timeWeight)*Math.pow(Math.max(1,cd),cooldownWeight)];
 }));
 const candidates=[baselineCandidate];
 for(const [manaWeight,timeWeight,cooldownWeight]of [[0,0,0],[1,0,0],[0,1,0],[.5,.5,0],[1,.5,0],[.5,0,.3],[.8,.2,0]]) {
  candidates.push({name:`weights:${manaWeight}/${timeWeight}/${cooldownWeight}`,attacks:allAttacks,scores:scoreFor(manaWeight,timeWeight,cooldownWeight)});
 }
 candidates.push({...baselineCandidate,name:'reserveForLargest',reserve:true});
 let trials=0;
 const evaluated=[];
 const evaluate=candidate=>{const result=run(candidate,.05);trials++;const row={candidate,damage:damage(result)};evaluated.push(row);return row;};
 let best;
 for(const candidate of candidates){const row=evaluate(candidate);if(!best||row.damage>best.damage)best=row;}
 // Local skill-subset search, with repeated passes so interacting omissions can combine.
 for(let pass=0;pass<2;pass++) {
  const start=best;
  for(const nr of start.candidate.attacks){
   const candidate={...start.candidate,name:start.candidate.name+`/omit:${nr}`,attacks:start.candidate.attacks.filter(n=>n!==nr)};
   const row=evaluate(candidate);if(row.damage>best.damage+1e-6)best=row;
  }
  if(best===start)break;
 }
 // Reproducible alternative subsets and priority perturbations escape one greedy path.
 for(let i=0;i<12;i++) {
  const parent=i%2?best.candidate:candidates[1+Math.floor(random()*(candidates.length-2))];
  const attacks=allAttacks.filter(n=>parent.attacks.includes(n)?random()>.12:random()>.65);
  const sourceScores=parent.scores??scoreFor(0,0);
  const scores=Object.fromEntries(Object.entries(sourceScores).map(([n,v])=>[n,v*(.5+random())]));
  const row=evaluate({name:`seededAlternative:${i}`,attacks,scores});if(row.damage>best.damage)best=row;
 }
 // Coarse runs only select candidates; published numbers always use the original 0.01-s grid.
 const finalists=evaluated.sort((a,b)=>b.damage-a.damage).slice(0,5).map(r=>r.candidate);
 let winner={candidate:baselineCandidate,result:baseline};
 for(const candidate of finalists){const result=run(candidate);if(damage(result)>damage(winner.result)+1e-6)winner={candidate,result};}
 // One exact-grid omission pass provides a final check against a discretization artifact.
 const exactStart=winner;
 for(const nr of exactStart.candidate.attacks){const candidate={...exactStart.candidate,name:exactStart.candidate.name+`/exactOmit:${nr}`,attacks:exactStart.candidate.attacks.filter(n=>n!==nr)};const result=run(candidate);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate,result};}
 const selected=run(winner.candidate,.01,true);
 assert(Math.abs(damage(selected)-damage(winner.result))<1e-6);
 const auto=simulateClass({pre,skills:catalog,model,attackNumbers:allAttacks,config:{...config,attackMode:'autoOnly'}});
 for(const result of [selected,auto]){
  assert.equal(result.durationSeconds,600);assert.ok(result.finalMana>=0);
  assert(Math.abs(result.totalDamage-result.autoDamage-result.skillDamage-result.summonDamage)<1e-5);
  assert.equal(result.buffManaSpent,0);assert.equal(result.buffDrainManaSpent,0);
 }
 assert(!selected.skills.some(s=>s.nr==='auto'));
 const ledger=selected.skills.filter(s=>s.kind==='skill'&&s.applications>0);
 const longest=allAttacks.map(nr=>skillForClass(get(nr),ref.key)).filter(s=>s.nr!==47).map(s=>({nr:s.nr,name:s.skillName_de,cooldown:curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd??0,applications:selected.skills.find(r=>r.nr===s.nr)?.applications??0})).filter(s=>s.applications<2);
 const entry={key:ref.key,name:ref.name,ownBuffNumbers,search:{status:'bestFoundNotProvenGlobalOptimum',coarseStep:.05,finalStep:.01,trials:trials+finalists.length+3,chosenPolicy:winner.candidate.name,selectedAttackNumbers:winner.candidate.attacks,excludedAttackNumbers:allAttacks.filter(n=>!winner.candidate.attacks.includes(n)),priorityScores:winner.candidate.scores??null,baselineDamage:damage(baseline),gain:damage(selected)-damage(baseline)},
  autoOnly:{characterDamage:damage(auto),summonDamage:auto.summonDamage,result:auto},skillsOnly:{characterDamage:damage(selected),summonDamage:selected.summonDamage,result:selected},skillsUsedFewerThanTwice:longest};
 classes.push(entry);
 console.log(JSON.stringify({class:ref.name,auto:Math.round(damage(auto)),skillsBaseline:Math.round(damage(baseline)),skillsBest:Math.round(damage(selected)),trials:entry.search.trials,excluded:entry.search.excludedAttackNumbers}));
 // Save completed classes as a progress checkpoint for this long search.
 await fs.writeFile('tmp/ten-minute-full-buff-search-progress.json',JSON.stringify({classes},null,2)+'\n');
}
const assumptions=[
 '600 Sekunden, Level 60, aktuelle R6-Ausrüstung. Alle zugeordneten deterministischen Eigenbuffs und alle verfügbaren Gruppenbuffs sind vor Beginn aktiv, werden einmal gestapelt und bleiben permanent aktiv. Keine Buff-Castzeiten, Aktivierungs- oder laufenden Buffkosten innerhalb dieses künstlichen Szenarios. Maximale HP/MP sind zu Beginn gefüllt.',
 'Auch kurze Eigenbuffs wie Attentäter, Blutrausch und Pfeil der Vorfahren gelten dauerhaft. Das ist ein künstlicher Vollbuff-Test und kein normaler Kampf. Bedingte Angriffs-/Kombosetups, Tarnfenster, Beschwörungen und durch einzelne Angriffe ausgelöste Kurzboni behalten ihre Kampfmechanik.',
 'Öffentliche Buffs werden auf dem höchsten tatsächlich lernbaren Anbieter-Level vergeben. Identische Skills werden nicht mehrfach gestapelt. Nicht zugeordnete alte Segen sind ausgeschlossen. Stählerne Rüstung wird als von einem Verbündeten bereitgestellt angenommen. Macht des Begleiters bufft Begleiter, keine Spieler und nicht Morrak direkt.',
 'Provozieren, zufällige Procs, reguläre Pets, Tränke und Food bleiben ausgeschlossen. Es gibt keine Gegenangriffe, Rüstung, Verfehlwürfe oder zufälligen Krits. Krit-/Block-/Ausweichwertung wird nicht ausgewürfelt.',
 'Auto-only enthält keine aktiven Schadensskills. Eigene durch Auto-Attacks ausgelöste Zusatzpfeile gehören zum Charakterschaden. Skills-only enthält keine Spieler-Auto-Attacks und keinen Explosionspfeil, der diese als Auslöser benötigt. Beide Modi können ihre klassenspezifischen temporären Kreaturen beschwören; deren Schaden wird separat ausgewiesen.',
 'Skillkosten, Regeneration, Cooldowns und Klassenressourcen bleiben aktiv. Notwendige Kombosetups behalten ihre Kosten und Zeiten. Kein unendliches Mana. Angriffsgeschwindigkeit beeinflusst Castzeiten noch nicht. Aktuelle Reaktionspause 0,1 Sekunden bleibt erhalten.',
 'Nahkampf-Basis 1,3 und Sättigung bis maximal 2 Aktionen/s bei 350 Rohpunkten; Jäger/Seelenjäger-Basis 1,1, Magier und Kräuterkundler unverändert. Die Sättigung gilt bislang nur für Nahkämpfer. Agilität liefert unverändert 0,06 Rohpunkte pro Punkt.',
 'Gesucht werden Skill-Auswahl und Priorität unter diesen Regeln. Mehrere Schadens-/Mana-/Zeitgewichtungen, ein reservierender Ansatz, wiederholte Auslassungsversuche und reproduzierbare alternative Prioritäten werden verglichen. Grobsuche im 0,05-s-Raster, Finalisten und veröffentlichte Ergebnisse im 0,01-s-Raster. Besten gefundener Lauf, kein mathematisch bewiesenes globales Optimum.',
 'Zehn Minuten erlauben lange Cooldowns grundsätzlich zweimal, erzwingen aber keine ineffiziente Anwendung. Selten oder nie verwendete Skills werden ausdrücklich aufgelistet. Einzelzieltest bewertet keine Flächenabdeckung, Kontrolle oder Defensive.',
];
const inputPaths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/class-skill-points.json','services/timedDamageSimulation.js','services/attackSpeed.js', 'scripts/calculateTenMinuteFullBuffAttackModes.js'];
const report={generatedAt:new Date().toISOString(),durationSeconds:600,buffScope:'allPublicAndOwnPermanent',providers:providers.map(({skill,...p})=>p),assumptions,searchSeed:7919,classes,inputHashes:Object.fromEntries(await Promise.all(inputPaths.map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])))};
await fs.writeFile('data/balancing/all-class-ten-minute-full-buff-attack-modes.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Zehn Minuten: permanente Eigen- und Gruppenbuffs\n\nAuto-Attacks gegen die stärkste gefundene reine Skillfolge. Keine normale Kampfrotation mit Auto-Attacks zwischen Skills. Beschwörungen separat.\n\n| Klasse | Nur Auto-Attacks | Skills: bisherige Priorität | Skills: stärkster gefundener Lauf | Suchgewinn |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const c of classes)md+=`| ${c.name} | ${f(c.autoOnly.characterDamage)} | ${f(c.search.baselineDamage)} | ${f(c.skillsOnly.characterDamage)} | ${f(c.search.gain)} |\n`;
md+='\n## Geteilte Gruppenbuffs\n\n| Skill | Stufe | Anbieter |\n| --- | ---: | --- |\n';
for(const p of providers)md+=`| ${p.name} | ${p.level} | ${p.provider} |\n`;
md+='\n## Regeln und Grenzen\n\n'+assumptions.map(s=>'- '+s).join('\n')+'\n';
for(const c of classes){
 md+=`\n## ${c.name}\n\nSuchläufe: ${c.search.trials}. Gewählte Priorität: ${c.search.chosenPolicy}.\n\n| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |\n| --- | ---: | ---: | ---: | ---: | ---: |\n`;
 for(const mode of ['autoOnly','skillsOnly']){const r=c[mode].result;md+=`| ${mode} | ${f(c[mode].characterDamage)} | ${f(c[mode].summonDamage)} | ${f(r.manaSpent)} | ${f(r.finalMana)} | ${r.skills.find(s=>s.nr==='auto')?.applications??0} |\n`;}
 md+='\n### Tatsächliche Eröffnung: erste 30 Aktionen\n\n| Zeit (s) | Skill | Mana danach |\n| ---: | --- | ---: |\n';
 for(const a of c.skillsOnly.result.actionTimeline.slice(0,30))md+=`| ${a.time.toFixed(2)} | ${a.name} | ${f(a.manaAfter)} |\n`;
 md+='\nDie vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.\n\n### Verwendete Skills\n\n| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |\n| --- | ---: | ---: | ---: | ---: |\n';
 for(const s of c.skillsOnly.result.skills)md+=`| ${s.name} | ${s.applications} | ${s.hits} | ${f(s.damage)} | ${f(s.manaSpent)} |\n`;
 md+='\n### Weniger als zweimal eingesetzt\n\n'+(c.skillsUsedFewerThanTwice.length?c.skillsUsedFewerThanTwice.map(s=>`- ${s.name}: ${s.applications} Anwendungen; gespeicherter Cooldown ${s.cooldown} Sekunden.`).join('\n'):'Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.')+'\n';
}
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/all-class-ten-minute-full-buff-attack-modes.md'),md);
console.log('Saved ten-minute permanent-full-buff comparison and complete skill sequences.');
