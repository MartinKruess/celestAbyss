import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const reportPath='data/balancing/all-class-ten-minute-full-buff-attack-modes.json';
const docPath=await retiredBalancingReportPath('docs/balancing/all-class-ten-minute-full-buff-attack-modes.md');
const [report,comparison,skills,model,rotations]=await Promise.all([
 reportPath,'data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json',
].map(read));
const backup='data/balancing/history/before-ten-minute-skill-preferred-'+Date.now();
await fs.mkdir(backup,{recursive:true});
await fs.copyFile(reportPath,backup+'/all-class-ten-minute-full-buff-attack-modes.json');
await fs.copyFile(docPath,backup+'/all-class-ten-minute-full-buff-attack-modes.md');
const get=nr=>skills.find(s=>s.nr===nr),damage=r=>r.autoDamage+r.skillDamage;
let seed=97231;
const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
for(const entry of report.classes){
 const pre=comparison.passiveRows.find(r=>r.key===entry.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const all=rotations.classes.find(r=>r.key===entry.key).rows.map(r=>r.nr);
 const needed=new Set([...pre.includedSkills,...all,...entry.ownBuffNumbers,120,13,34,56,104,105,123,134,161,185,186,188,218,226,229,237,240,244]);
 const catalog=skills.filter(s=>needed.has(s.nr));
 const config={...entry.skillsOnly.result.config,attackMode:'skillsPreferred',skillPriorityScores:undefined,reserveManaForPriority:false};
 const run=(candidate,step=.01,trace=false)=>simulateClass({pre,skills:catalog,model,attackNumbers:candidate.attacks,config:{...config,step,recordActionTimeline:trace,skillPriorityScores:candidate.scores,reserveManaForPriority:candidate.reserve??false,skillWaitLookaheadSeconds:candidate.lookahead??0,skillWaitPriorityRatio:candidate.ratio??1.5}});
 let trials=0;
 const baselineCandidate={name:'allSkillsFirst',attacks:all};
 const baseline=run(baselineCandidate);trials++;
 const observed=Object.fromEntries(baseline.skills.map(s=>[s.nr,{damage:s.applications?s.damage/s.applications:0,mana:s.applications?s.manaSpent/s.applications:0}]));
 const scoreFor=(mw,tw,cw=0)=>Object.fromEntries(all.map(nr=>{const s=skillForClass(get(nr),entry.key),o=observed[nr]??{damage:1,mana:1},cast=s.castTimeSeconds??curveValue(s.castTimeScaling,s.maxSkillLv)??0,cd=curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd??0;return[nr,Math.max(1,o.damage)/Math.pow(Math.max(1,o.mana),mw)/Math.pow(Math.max(.1,cast+.1),tw)*Math.pow(Math.max(1,cd),cw)];}));
 const initial=[baselineCandidate,{name:'pureSkillWinnerAsMixed',attacks:entry.search.selectedAttackNumbers,scores:entry.search.priorityScores??undefined}];
 for(const [mw,tw,cw]of [[0,0,0],[1,0,0],[0,1,0],[.5,.5,0],[1,.5,0],[.5,0,.3],[.8,.2,0]])initial.push({name:`weights:${mw}/${tw}/${cw}`,attacks:all,scores:scoreFor(mw,tw,cw)});
 initial.push({...baselineCandidate,name:'reserveMana',reserve:true});
 const evaluated=[];
 const evaluate=candidate=>{const result=run(candidate,.05);trials++;const row={candidate,damage:damage(result)};evaluated.push(row);return row;};
 let best;
 for(const c of initial){const r=evaluate(c);if(!best||r.damage>best.damage)best=r;}
 const parents=evaluated.slice().sort((a,b)=>b.damage-a.damage).slice(0,3);
 // Compare immediate fillers against reserving time/Mana for skills ready soon.
 for(const parent of parents)for(const lookahead of [.5,1,2,3,5])for(const ratio of [1.25,2]){
  const c={...parent.candidate,name:parent.candidate.name+`/wait:${lookahead}/ratio:${ratio}`,lookahead,ratio};
  const r=evaluate(c);if(r.damage>best.damage)best=r;
 }
 for(let pass=0;pass<3;pass++){
  const start=best;
  for(const nr of start.candidate.attacks){
   if(start.candidate.attacks.length<=1)continue;
   const c={...start.candidate,name:start.candidate.name+`/omit:${nr}`,attacks:start.candidate.attacks.filter(n=>n!==nr)};
   const r=evaluate(c);if(r.damage>best.damage+1e-6)best=r;
  }
  if(start===best)break;
 }
 for(let i=0;i<20;i++){
  const parent=i%2?best.candidate:initial[Math.floor(random()*initial.length)];
  const attacks=all.filter(n=>parent.attacks.includes(n)?random()>.12:random()>.65);
  if(!attacks.length)continue;
  const source=parent.scores??scoreFor(0,0);
  const scores=Object.fromEntries(Object.entries(source).map(([n,v])=>[n,v*(.5+random())]));
  const c={...parent,name:`seededAlternative:${i}`,attacks,scores};const r=evaluate(c);if(r.damage>best.damage)best=r;
 }
 const finalists=evaluated.sort((a,b)=>b.damage-a.damage).slice(0,6).map(r=>r.candidate);
 let winner={candidate:baselineCandidate,result:baseline};
 for(const c of finalists){const result=run(c);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate:c,result};}
 // Validate single removals AND restorations against the final fine-grid policy.
 for(let pass=0;pass<2;pass++){
  const start=winner;
  for(const nr of all){
   const included=start.candidate.attacks.includes(nr);
   if(included&&start.candidate.attacks.length<=1)continue;
   const attacks=included?start.candidate.attacks.filter(n=>n!==nr):all.filter(n=>start.candidate.attacks.includes(n)||n===nr);
   const c={...start.candidate,name:start.candidate.name+`/exact${included?'Omit':'Restore'}:${nr}`,attacks};
   const result=run(c);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate:c,result};
  }
  if(start===winner)break;
 }
 // Recheck waiting around the best exact-grid subset, rather than only its initial parent.
 for(const lookahead of [0,1,3,5]){
  const c={...winner.candidate,name:winner.candidate.name+`/finalWait:${lookahead}`,lookahead};
  const result=run(c);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate:c,result};
 }
 const result=run(winner.candidate,.01,true);trials++;
 assert(Math.abs(damage(result)-damage(winner.result))<1e-5);
 assert.equal(result.durationSeconds,600);assert(result.finalMana>=0);assert(!result.deathAt);
 assert.equal(result.buffManaSpent,0);assert.equal(result.buffDrainManaSpent,0);
 assert(Math.abs(result.totalDamage-result.skills.reduce((n,s)=>n+s.damage,0))<1e-5);
 assert(Math.abs(result.manaSpent-result.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-5);
 const autos=result.actionTimeline.filter(a=>a.nr==='auto');
 for(const auto of autos){
  assert(auto.readyAffordableSelectedSkillCount===0||auto.waitingForSkill!==null);
  for(const action of result.actionTimeline)if(action.nr!=='auto'&&action.time>=auto.time)assert(action.time+1e-8>=auto.recoveryUntil);
 }
 // Mandatory combo actions may execute outside the general priority pool.
 const actuallyUsed=new Set(result.skills.filter(s=>s.applications>0).map(s=>s.nr));
 const selectedAttacks=all.filter(n=>winner.candidate.attacks.includes(n)||actuallyUsed.has(n));
 entry.skillsPreferred={characterDamage:damage(result),summonDamage:result.summonDamage,result,search:{status:'bestFoundNotProvenGlobalOptimum',trials,coarseStep:.05,finalStep:.01,baselineDamage:damage(baseline),gain:damage(result)-damage(baseline),chosenPolicy:winner.candidate.name,priorityPoolAttackNumbers:winner.candidate.attacks,selectedAttackNumbers:selectedAttacks,excludedAttackNumbers:all.filter(n=>!winner.candidate.attacks.includes(n)&&!actuallyUsed.has(n)),priorityScores:winner.candidate.scores??null,lookaheadSeconds:winner.candidate.lookahead??0,waitPriorityRatio:winner.candidate.ratio??1.5,reserveManaForPriority:winner.candidate.reserve??false}};
 console.log(JSON.stringify({class:entry.name,mixedBaseline:Math.round(damage(baseline)),mixedBest:Math.round(damage(result)),skillDamage:Math.round(result.skillDamage),autoDamage:Math.round(result.autoDamage),trials,excluded:entry.skillsPreferred.search.excludedAttackNumbers}));
 await fs.writeFile('tmp/ten-minute-skill-preferred-search-progress.json',JSON.stringify({classes:report.classes.filter(c=>c.skillsPreferred)},null,2)+'\n');
}
report.skillsPreferredAssumptions=[
 'Dritter Modus: ausgewählte legale und bezahlbare Skills haben Vorrang. Auto-Attacks nur in freien Zeitfenstern, ohne verfügbare gewählte Skill-Anwendungen zu verdrängen.',
 'Die Suche vergleicht Füllskills, ausgelassene Skills, Mana-Reservierung und Vorausschau von bis zu 5 Sekunden auf stärkere Skills. Bewusst aufgeschobene kleine Skills dürfen Platz für das Warten auf einen stärkeren Skill schaffen.',
 'Eine Auto-Attack wird unterdrückt, wenn ihre 0,5-s-Erholung einen bald bereiten und bezahlbaren gewählten Skill verzögern würde. Während dieser Erholung gibt es keine weitere Auto-Attack, die die Sperre erneuert. Nach Skills bleibt der bisherige Übergang von einem aktuellen Auto-Attack-Intervall erhalten.',
 'Vollständige Skill-/Auto-Attack-Reihenfolge und bewusste Wartefenster sind protokolliert. Auswahl und Reihenfolge sind der beste gefundene Lauf einer begrenzten Suche, kein bewiesenes globales Maximum.',
 'Notwendige Komboschritte können außerhalb der allgemeinen Prioritätsliste ausgeführt werden. Als ausgelassen gelten nur Skills, die weder in der gewählten Prioritätsliste stehen noch tatsächlich verwendet wurden. Die Prioritätsliste ist separat gespeichert.',
 'Buffs, Ressourcen, Waffen, Dauer, Zielfaktoren und fehlende Castzeit-Kopplung sind identisch mit den ersten beiden Spalten. Explosionspfeil darf im dritten Modus seine Ladungen durch tatsächliche Auto-Attacks auslösen.',
];
report.skillsPreferredSearchSeed=97231;
report.skillsPreferredGeneratedAt=new Date().toISOString();
report.skillsPreferredInputHashes=Object.fromEntries(await Promise.all(['services/timedDamageSimulation.js','scripts/calculateTenMinuteSkillPreferredDamage.js','data/skills.json','data/balancing/class-comparison-level60.json'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md=await fs.readFile(docPath,'utf8');
const start=md.indexOf('| Klasse |'),end=md.indexOf('\n## Geteilte Gruppenbuffs',start);
assert(start>=0&&end>start);
let table='| Klasse | Nur Auto-Attacks | Nur Skills: stärkster gefundener Lauf | Skills bevorzugt + Auto-Attacks in Wartezeiten |\n| --- | ---: | ---: | ---: |\n';
for(const c of report.classes)table+=`| ${c.name} | ${f(c.autoOnly.characterDamage)} | ${f(c.skillsOnly.characterDamage)} | ${f(c.skillsPreferred.characterDamage)} |\n`;
md=md.slice(0,start)+table+md.slice(end);
md=md.replace('Auto-Attacks gegen die stärkste gefundene reine Skillfolge. Keine normale Kampfrotation mit Auto-Attacks zwischen Skills. Beschwörungen separat.','Drei getrennte Läufe mit identischen permanenten Buffs: nur Auto-Attacks, stärkste gefundene reine Skillfolge und Skills mit Auto-Attacks als Lückenfüller. Beschwörungen separat.');
md=md.split('\n## Dritter Test: Skills mit Auto-Attacks als Lückenfüller')[0];
md+='\n## Dritter Test: Skills mit Auto-Attacks als Lückenfüller\n\n'+report.skillsPreferredAssumptions.map(s=>'- '+s).join('\n')+'\n';
for(const c of report.classes){
 const m=c.skillsPreferred,r=m.result;
 md+=`\n### ${c.name}: kombinierter Lauf\n\nGesamter Charakterschaden: **${f(m.characterDamage)}** = ${f(r.skillDamage)} durch Skills und ${f(r.autoDamage)} durch Auto-Attacks. Beschwörungen separat: ${f(m.summonDamage)}. Auto-Attack-Aktionen: ${r.skills.find(s=>s.nr==='auto')?.applications??0}. Mana verbraucht: ${f(r.manaSpent)}, am Ende: ${f(r.finalMana)}.\n\nSuchläufe: ${m.search.trials}; Ausgangspriorität: ${f(m.search.baselineDamage)} Schaden; Suchgewinn: ${f(m.search.gain)}. Vorausschau: ${m.search.lookaheadSeconds} s. Ausgelassene Skills: ${m.search.excludedAttackNumbers.map(n=>get(n).skillName_de).join(', ')||'keine'}.\n\n| Zeit (s) | Aktion | Mana danach |\n| ---: | --- | ---: |\n`;
 for(const a of r.actionTimeline.slice(0,40))md+=`| ${a.time.toFixed(2)} | ${a.name} | ${f(a.manaAfter)} |\n`;
 md+='\nVollständige Reihenfolge: JSON unter `skillsPreferred.result.actionTimeline`.\n\n| Aktion | Anwendungen | Schaden | Mana |\n| --- | ---: | ---: | ---: |\n';
 for(const s of r.skills)md+=`| ${s.name} | ${s.applications} | ${f(s.damage)} | ${f(s.manaSpent)} |\n`;
}
await fs.writeFile(docPath,md);
console.log('Updated existing ten-minute comparison with skill-preferred third column. Backup '+backup);
