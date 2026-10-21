import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const refreshSpeed=process.argv.includes('--refresh-speed');
const refreshCasters=process.argv.includes('--refresh-casters')||refreshSpeed;
const refreshKeys=refreshSpeed?['herbalist','healer','luminet','ritualist','hunter','summoner']:['healer','druid','luminet','ritualist'];
const previousReport=await read('data/balancing/all-class-ten-minute-party-buff-final.json');
if(refreshCasters){const backup='data/balancing/history/before-party-buff-caster-refresh-'+Date.now();await fs.mkdir(backup,{recursive:true});for(const [name,path]of [['report.json','data/balancing/all-class-ten-minute-party-buff-final.json'],['report.md','docs/balancing/all-class-ten-minute-party-buff-final.md']])await fs.copyFile(path,backup+'/'+name);}
const [reference,comparison,skills,model,rotations]=await Promise.all([
 'data/balancing/all-class-ten-minute-full-buff-attack-modes.json','data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json',
].map(read));
const get=n=>skills.find(s=>s.nr===n),damage=r=>r.autoDamage+r.skillDamage;
const groups=reference.providers.map(p=>p.nr);
const autoExtras=new Set(skills.filter(s=>s.effects?.some(e=>e.type==='triggeredAttack'&&e.applicationTrigger==='ownBasicAttackHit')).map(s=>s.nr));
let seed=81739;
const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const classes=[];
for(const ref of reference.classes.filter(c=>!refreshCasters||refreshKeys.includes(c.key))){
 const pre=comparison.passiveRows.find(r=>r.key===ref.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const all=rotations.classes.find(c=>c.key===ref.key).rows.map(s=>s.nr);
 const own=ref.ownBuffNumbers.filter(n=>!groups.includes(n));
 const needed=new Set([...pre.includedSkills,...all,...ref.ownBuffNumbers,120,13,34,56,104,105,123,134,161,185,186,188,218,226,229,237,240,244]);
 const catalog=skills.filter(s=>needed.has(s.nr));
 const base={...ref.skillsOnly.result.config,staffAttacksPerSecond:1.1,duration:600,targetHealth:1e9,prebuffOwnBuffs:false,permanentPrebuffs:false,preparedBuffNumbers:groups,permanentBuffNumbers:groups,cacheCombatStats:true,
  skillPriorityScores:undefined,reserveManaForPriority:false,skillWaitLookaheadSeconds:0,recordActionTimeline:false};
 const modes={};
 for(const mode of ['autoOnly','skillsPreferred']){
  const run=(candidate,step=.01,trace=false,cache=true)=>simulateClass({pre,skills:catalog,model,attackNumbers:candidate.attacks,config:{...base,attackMode:mode,step,recordActionTimeline:trace,cacheCombatStats:cache,
   ownBuffNumbers:[...groups,...candidate.own],skillPriorityScores:candidate.scores,reserveManaForPriority:candidate.reserve??false,skillWaitLookaheadSeconds:candidate.lookahead??0,skillWaitPriorityRatio:candidate.ratio??1.5}});
  const initialCandidate={name:'allOwnBuffsAndSkills',attacks:all,own};
  const baseline=run(initialCandidate),uncached=run(initialCandidate,.01,false,false);
  assert(Math.abs(baseline.totalDamage-uncached.totalDamage)<1e-6,'Cache damage '+ref.key);
  assert(Math.abs(baseline.manaSpent-uncached.manaSpent)<1e-6,'Cache Mana '+ref.key);
  const observed=Object.fromEntries(baseline.skills.map(s=>[s.nr,{damage:s.applications?s.damage/s.applications:0,mana:s.applications?s.manaSpent/s.applications:0}]));
  const scoreFor=(mw,tw,cw=0)=>Object.fromEntries(all.map(n=>{const s=skillForClass(get(n),ref.key),o=observed[n]??{damage:1,mana:1},cast=s.castTimeSeconds??curveValue(s.castTimeScaling,s.maxSkillLv)??0,cd=curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd??0;return[n,Math.max(1,o.damage)/Math.pow(Math.max(1,o.mana),mw)/Math.pow(Math.max(.1,cast+.1),tw)*Math.pow(Math.max(1,cd),cw)];}));
  const previous=previousReport.classes.find(c=>c.key===ref.key)?.[mode];
  const previousCandidate=previous?{name:'previousFinalPolicy',attacks:previous.search.priorityPoolAttackNumbers.filter(n=>all.includes(n)),own:previous.search.selectedOwnBuffNumbers.filter(n=>own.includes(n)),scores:previous.search.priorityScores,lookahead:previous.search.lookaheadSeconds,ratio:previous.result.config.skillWaitPriorityRatio,reserve:previous.result.config.reserveManaForPriority}:initialCandidate;
  const initial=[previousCandidate,initialCandidate,{...initialCandidate,name:'noOwnBuffs',own:[]}];
  if(mode==='skillsPreferred'){
   initial.push({...initialCandidate,name:'previousMixedPolicy',attacks:(ref.skillsPreferred.search.priorityPoolAttackNumbers??ref.skillsPreferred.search.selectedAttackNumbers).filter(n=>all.includes(n)),scores:ref.skillsPreferred.search.priorityScores??undefined,lookahead:ref.skillsPreferred.search.lookaheadSeconds,ratio:ref.skillsPreferred.search.waitPriorityRatio});
   for(const [mw,tw,cw]of [[0,0,0],[1,0,0],[0,1,0],[.5,.5,0],[1,.5,0],[.5,0,.3],[.8,.2,0]])initial.push({...initialCandidate,name:`weights:${mw}/${tw}/${cw}`,scores:scoreFor(mw,tw,cw)});
   initial.push({...initialCandidate,name:'reserveForPriority',reserve:true});
  }
  const tested=[];let trials=2;
  const evaluate=c=>{const result=run(c,.05);trials++;const row={candidate:c,damage:damage(result)};tested.push(row);return row;};
  let best;
  for(const c of initial){const r=evaluate(c);if(!best||r.damage>best.damage)best=r;}
  // Optimize whether each self buff helps this particular attack mode.
  for(let pass=0;pass<2;pass++){
   const start=best;
   for(const n of own){const included=start.candidate.own.includes(n),buffs=included?start.candidate.own.filter(x=>x!==n):own.filter(x=>start.candidate.own.includes(x)||x===n);const c={...start.candidate,name:start.candidate.name+`/buff:${n}`,own:buffs};const r=evaluate(c);if(r.damage>best.damage+1e-6)best=r;}
   if(start===best)break;
  }
  if(mode==='skillsPreferred'){
   const parents=[best.candidate,...tested.slice().sort((a,b)=>b.damage-a.damage).slice(0,2).map(r=>r.candidate)];
   for(const parent of parents)for(const lookahead of [1,3,5])for(const ratio of [1.25,2]){const c={...parent,name:parent.name+`/wait:${lookahead}/${ratio}`,lookahead,ratio};const r=evaluate(c);if(r.damage>best.damage)best=r;}
   for(let pass=0;pass<2;pass++){
    const start=best;
    for(const n of all){if(start.candidate.attacks.length<=1)continue;const included=start.candidate.attacks.includes(n),attacks=included?start.candidate.attacks.filter(x=>x!==n):all.filter(x=>start.candidate.attacks.includes(x)||x===n);const c={...start.candidate,name:start.candidate.name+`/attack:${n}`,attacks};const r=evaluate(c);if(r.damage>best.damage+1e-6)best=r;}
    if(start===best)break;
   }
  }
  for(let i=0;i<(mode==='autoOnly'?6:14);i++){
   const parent=i%2?best.candidate:initial[Math.floor(random()*initial.length)];
   const buffs=own.filter(n=>parent.own.includes(n)?random()>.12:random()>.55);
   const attacks=mode==='autoOnly'?all:all.filter(n=>parent.attacks.includes(n)?random()>.1:random()>.65);
   if(!attacks.length)continue;
   const scores=mode==='autoOnly'?undefined:Object.fromEntries(Object.entries(parent.scores??scoreFor(0,0)).map(([n,v])=>[n,v*(.5+random())]));
   const c={...parent,name:`alternative:${i}`,own:buffs,attacks,scores};const r=evaluate(c);if(r.damage>best.damage)best=r;
  }
  let winner={candidate:initialCandidate,result:baseline};
  for(const {candidate}of tested.sort((a,b)=>b.damage-a.damage).slice(0,5)){const result=run(candidate);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate,result};}
  // Final exact-grid toggles validate the chosen attack and buff selection together.
  for(let pass=0;pass<2;pass++){
   const start=winner;
   const toggles=[...own.map(n=>({kind:'buff',n})),...(mode==='skillsPreferred'?all.map(n=>({kind:'attack',n})):[])];
   for(const {kind,n}of toggles){
    const list=kind==='buff'?start.candidate.own:start.candidate.attacks,universe=kind==='buff'?own:all;
    if(kind==='attack'&&list.length<=1&&list.includes(n))continue;
    const updated=list.includes(n)?list.filter(x=>x!==n):universe.filter(x=>list.includes(x)||x===n);
    const c={...start.candidate,name:start.candidate.name+`/exact${kind}:${n}`,[kind==='buff'?'own':'attacks']:updated};
    const result=run(c);trials++;if(damage(result)>damage(winner.result)+1e-6)winner={candidate:c,result};
   }
   if(start===winner)break;
  }
  const result=run(winner.candidate,.01,true);trials++;
  assert(Math.abs(damage(result)-damage(winner.result))<1e-5);
  assert.equal(result.durationSeconds,600);assert(!result.deathAt&&result.finalMana>=0);
  assert(Math.abs(result.totalDamage-result.autoDamage-result.skillDamage-result.summonDamage)<1e-5);
  assert(Math.abs(result.manaSpent-result.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-5);
  for(const n of groups){const periods=result.buffPeriods.filter(b=>b.nr===n);assert.equal(periods.length,1);assert.equal(periods[0].start,0);assert.equal(periods[0].end,600);assert(!result.skills.some(s=>s.nr===n&&s.applications>0));}
  for(const n of winner.candidate.own){const periods=result.buffPeriods.filter(b=>b.nr===n);for(const period of periods)assert(result.skills.some(s=>s.nr===n&&s.useTimes.some(t=>t<=period.start+1e-7)));}
  const extras=result.skills.filter(s=>autoExtras.has(s.nr)).reduce((n,s)=>n+s.damage,0);
  const used=new Set(result.skills.filter(s=>s.applications>0).map(s=>s.nr));
  modes[mode]={characterDamage:damage(result),summonDamage:result.summonDamage,directAutoDamage:result.autoDamage,automaticAutoExtras:extras,autoRelatedDamage:result.autoDamage+extras,activeSkillDamage:result.skillDamage-extras,
   search:{status:'bestFoundNotProvenGlobalOptimum',trials,baselineDamage:damage(baseline),gain:damage(result)-damage(baseline),policy:winner.candidate.name,priorityPoolAttackNumbers:winner.candidate.attacks,selectedOwnBuffNumbers:winner.candidate.own,omittedOwnBuffNumbers:own.filter(n=>!winner.candidate.own.includes(n)),omittedAttackNumbers:all.filter(n=>!winner.candidate.attacks.includes(n)&&!used.has(n)),priorityScores:winner.candidate.scores??null,lookaheadSeconds:winner.candidate.lookahead??0},result};
  console.log(JSON.stringify({class:ref.name,mode,damage:Math.round(damage(result)),baseline:Math.round(damage(baseline)),buffMana:Math.round(result.buffManaSpent),trials,omittedOwn:modes[mode].search.omittedOwnBuffNumbers}));
 }
 classes.push({key:ref.key,name:ref.name,calculatedAt:new Date().toISOString(),groups,availableOwnBuffNumbers:own,...modes});
 await fs.writeFile('tmp/ten-minute-party-buff-final-progress.json',JSON.stringify({classes},null,2)+'\n');
}
const refreshedClassKeys=classes.map(c=>c.key);
if(refreshCasters){const refreshed=new Map(classes.map(c=>[c.key,c]));classes.splice(0,classes.length,...previousReport.classes.map(c=>refreshed.get(c.key)??{...c,calculatedAt:c.calculatedAt??previousReport.generatedAt}));}
const assumptions=[
 '600 Sekunden, Level 60, aktuelle R6-Ausrüstung. Alle tatsächlichen öffentlichen Gruppenbuffs sind zu Beginn vollständig aktiv und bleiben die gesamten zehn Minuten bestehen. Sie werden einmal auf dem höchsten zulässigen Anbieter-Level angewendet; alte nicht vergebene Segen werden nicht zusätzlich gestapelt.',
 'Keine aktiven Eigenbuffs beim Start. Verwendete Eigenbuffs müssen im Kampf gewirkt und bezahlt werden. Ihre normalen Laufzeiten, Cooldowns, Zauberzeiten und laufenden Mana-Kosten gelten. Neue Max-HP/MP-Boni füllen Ressourcen nicht kostenlos auf. Startressourcen sind nur bis zu den durch Gruppenbuffs erhöhten Maximalwerten gefüllt.',
 'Die Suche darf für den Schadenslauf nutzlose Eigenbuffs auslassen. Verwendete und ausgelassene Eigenbuffs werden je Modus aufgelistet. Das ist keine Bewertung ihres defensiven Nutzens in einem echten Kampf.',
 'Auto-only verwendet keine aktiven Schadensskills, aber nützliche Eigenbuffs. Automatische Zusatzpfeile gehören zur Auto-Attack-Seite. Skills bevorzugt verwendet ausgewählte Skills vorrangig und füllt freie Zeit mit Auto-Attacks; deren Erholung darf keinen bevorstehenden gewählten Skill verzögern.',
 'Die Suche vergleicht Prioritäten, Eigenbuff- und Skill-Auswahl, kleine Füllskills sowie Mana-/Zeitreservierung bis zu fünf Sekunden. Ergebnisse sind beste gefundene Läufe, keine bewiesenen globalen Optima. Grobsuche 0,05 Sekunden, Endauswertung 0,01 Sekunden.',
 'Beschwörungen werden regulär gewirkt und separat ausgewiesen. Keine regulären Pets, zufälligen Procs, Tränke, Food oder Provozieren. Kein eingehender Schaden und keine gegnerische Verteidigung. Zufällige Crits, Blocken und Ausweichen werden nicht ausgewürfelt.',
 'Nahkampf-Basis 1,3; Jäger/Seelenjäger und alle Magier einschließlich Kräuterkundler 1,1. Sämtliche Spielerklassen verwenden dieselbe Angriffsgeschwindigkeitskurve und einen Mindestabstand von 0,5 Sekunden zwischen Auto-Attacks (höchstens zwei pro Sekunde). Beschwörungen behalten ihre eigene Frequenz. Angriffsgeschwindigkeit verkürzt Castzeiten noch nicht. Agilitätsfaktor unverändert 0,06 Punkte je Agilität.',
 'Aktivierte Explosionspfeil-Ladungen bleiben Skill-Schaden und benötigen tatsächliche Auto-Attacks als Auslöser. Rein automatisch ausgelöste Ahnenpfeile werden für die Aufschlüsselung der Auto-Attack-Seite zugerechnet.',
];
const paths=['services/timedDamageSimulation.js','services/attackSpeed.js','scripts/calculateTenMinutePartyBuffFinal.js','data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json'];
const report={generatedAt:new Date().toISOString(),durationSeconds:600,targetHealth:1e9,refreshedClassKeys,partialRefresh:refreshCasters,previousGeneratedAt:previousReport.generatedAt,buffScope:'permanentPublicGroupsAndNormallyActivatedSelfBuffs',searchSeed:81739,providers:reference.providers,assumptions,classes,inputHashes:Object.fromEntries(await Promise.all(paths.map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])))};
await fs.writeFile('data/balancing/all-class-ten-minute-party-buff-final.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Abschlusstest: Gruppenbuffs permanent, Eigenbuffs regulär\n\nZehn Minuten. Beide Modi beginnen mit denselben Gruppenbuffs und ohne aktive Eigenbuffs. Beste gefundene Varianten. Beschwörungen separat.\n\n| Klasse | Nur Auto-Attacks: Charakter | Skills + Auto-Attacks: Charakter | Beschwörung im kombinierten Lauf | Gesamtschaden kombiniert | Gewinn Charakter |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
md=md.replace('Zehn Minuten.', 'Dies ist der aktuelle Vergleich mit Buffs. Stand: '+new Date(report.generatedAt).toLocaleString('de-DE',{timeZone:'Europe/Berlin'})+'. '+(refreshCasters?'Neu berechnet: '+classes.filter(c=>refreshedClassKeys.includes(c.key)).map(c=>c.name).join(', ')+'; die übrigen Klassen behalten ihren bisherigen Lauf.':'Alle Klassen neu berechnet.')+' Ziel: Dummy mit 1.000.000.000 HP, damit das volle Zeitfenster erreicht wird; keine erforderliche Schadenssumme.\n\nZehn Minuten.');
for(const c of classes)md+=`| ${c.name} | ${f(c.autoOnly.characterDamage)} | ${f(c.skillsPreferred.characterDamage)} | ${f(c.skillsPreferred.summonDamage)} | **${f(c.skillsPreferred.characterDamage+c.skillsPreferred.summonDamage)}** | ${f(c.skillsPreferred.characterDamage-c.autoOnly.characterDamage)} |\n`;
md+='\n## Aufschlüsselung des kombinierten Laufs\n\n| Klasse | Direkte Auto-Attacks | Automatische Zusätze | Aktive Skills | Beschwörungen separat |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const c of classes){const m=c.skillsPreferred;md+=`| ${c.name} | ${f(m.directAutoDamage)} | ${f(m.automaticAutoExtras)} | ${f(m.activeSkillDamage)} | ${f(m.summonDamage)} |\n`;}
md+='\n## Mana-Pool, Verbrauch und Regeneration\n\nKombinierter Lauf mit Skills bevorzugt. Startpool einschließlich vorbereiteter Gruppenbuffs; Eigenbuffs werden erst im Kampf aktiviert. Verbrauch enthält Eigenbuffs und laufende Mana-Kosten. Regeneration zeigt tatsächlich gutgeschriebenes Mana; Überschuss am vollen Pool verfällt.\n\n| Klasse | Mana beim Start | Mana verbraucht | Davon Eigenbuffs | Mana regeneriert | Mana am Ende |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const c of classes){const r=c.skillsPreferred.result;md+='| '+[c.name,f(r.initialMana),f(r.manaSpent),f(r.buffManaSpent??0),f(r.manaRegenerated),f(r.finalMana)].join(' | ')+' |\n';}
md+='\n## Regeln\n\n'+assumptions.map(s=>'- '+s).join('\n')+'\n';
for(const c of classes){md+=`\n## ${c.name}\n`;
 for(const mode of ['autoOnly','skillsPreferred']){const m=c[mode],r=m.result;md+=`\n### ${mode}\n\nCharakterschaden ${f(m.characterDamage)}, Beschwörungen ${f(m.summonDamage)}. Mana verbraucht ${f(r.manaSpent)}, davon Eigenbuffs ${f(r.buffManaSpent)} einschließlich laufender Kosten ${f(r.buffDrainManaSpent)}; Mana am Ende ${f(r.finalMana)}. Suchläufe ${m.search.trials}; Ausgangspriorität ${f(m.search.baselineDamage)}, Suchgewinn ${f(m.search.gain)}.\n\nVerwendete Eigenbuffs: ${m.search.selectedOwnBuffNumbers.map(n=>get(n).skillName_de).join(', ')||'keine'}. Ausgelassene Eigenbuffs: ${m.search.omittedOwnBuffNumbers.map(n=>get(n).skillName_de).join(', ')||'keine'}.\n\n| Eigenbuff | Aktivierungen | Aktive Sekunden | Mana |\n| --- | ---: | ---: | ---: |\n`;
  for(const n of m.search.selectedOwnBuffNumbers){const row=r.skills.find(s=>s.nr===n),uptime=r.buffPeriods.filter(p=>p.nr===n).reduce((n,p)=>n+p.end-p.start,0);md+=`| ${get(n).skillName_de} | ${row?.applications??0} | ${uptime.toFixed(2)} | ${f(row?.manaSpent??0)} |\n`;}
  md+='\n| Aktion | Anwendungen | Schaden | Mana |\n| --- | ---: | ---: | ---: |\n';for(const s of r.skills)md+=`| ${s.name} | ${s.applications} | ${f(s.damage)} | ${f(s.manaSpent)} |\n`;
  md+='\nErste 30 protokollierte Aktionen; vollständige Reihenfolge in der JSON-Datei. Im Auto-only-Modus protokolliert die Reihenfolge Buffs und Beschwörungen; Auto-Attack-Zeitpunkte stehen im Auto-Attack-Ledger.\n\n| Zeit (s) | Aktion | Mana danach |\n| ---: | --- | ---: |\n';for(const a of r.actionTimeline.slice(0,30))md+=`| ${a.time.toFixed(2)} | ${a.name} | ${f(a.manaAfter)} |\n`;
 }
}
await fs.writeFile('docs/balancing/all-class-ten-minute-party-buff-final.md',md);
console.log('Saved final ten-minute party-buff comparison.');
