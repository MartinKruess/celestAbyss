import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {curveValue,skillValue} from '../services/rotationDamage.js';
import {isDamageSkill,skillBaseDamageByLevel,proposeIntegerManaCurve} from '../services/manaCostProposal.js';

const source=await fs.readFile('data/skills.json','utf8'),catalog=JSON.parse(source),get=nr=>catalog.find(s=>s.nr===nr);
const counts=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const owners=new Map();for(const c of counts)for(const nr of c.skillNumbers){if(!owners.has(nr))owners.set(nr,[]);owners.get(nr).push(c.name.split(' / ')[0]);}
const finishers=new Set([31,39,62,112,235,239]);
const combos=new Set([103,104,105,185,186,229]);
const pureHeals=new Set([9,41,58,64,71,78,108,124]);
const rows=[];
function healingBasis(s,level){
 if(s.nr===9){const damage=s.effects.find(e=>e.key==='ether-rain-damage'),heal=s.effects.find(e=>e.type==='heal');
  const duration=curveValue(damage.durationScaling,level)??damage.durationSeconds;
  const ticks=Math.max(0,Math.floor((duration-damage.firstTickAfterSeconds+1e-8)/damage.intervalSeconds)+1);
  return ticks*((curveValue(heal.valueScaling,level)??heal.value)+heal.healingFromDamage.primaryTargetFraction*(curveValue(damage.valueScaling,level)??damage.value));
 }
 const effects=s.effects.filter(e=>e.type==='heal'&&e.unit==='flat');
 const amount=e=>{const value=curveValue(e.valueScaling,level)??e.value,duration=curveValue(e.durationScaling,level)??e.durationSeconds;
  return value*(e.intervalSeconds?Math.max(0,Math.floor((duration-(e.firstTickAfterSeconds??e.intervalSeconds)+1e-8)/e.intervalSeconds)+1):1);};
 if(!effects.length)return null;
 if(s.nr===108)return amount(effects.find(e=>e.target==='self'));
 return effects.reduce((sum,e)=>sum+amount(e),0);
}
for(const s of catalog.filter(s=>owners.has(s.nr)&&(isDamageSkill(s)||pureHeals.has(s.nr)||combos.has(s.nr)))){
 const cost=s.resourceCosts?.find(c=>c.resource==='mana'),notes=[];
 let group=pureHeals.has(s.nr)?'heal':combos.has(s.nr)?'combo':finishers.has(s.nr)?'finisher':'normal';
 const factor=group==='heal'?.35:group==='normal'?.25:.4;
 const current=cost?.unit==='flat'?Array.from({length:s.maxSkillLv},(_,i)=>curveValue(cost.scaling,i+1)):null;
 let status='referenceOnly',basis=null,curve=null;
 if(group==='combo'){status='comboBudgetPendingDistribution';notes.push('Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.');}
 else if(!cost||cost.unit!=='flat'||current.at(-1)===0){status='specialCostUnchanged';notes.push('Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.');}
 else if(group==='heal'){
  basis=Array.from({length:s.maxSkillLv},(_,i)=>healingBasis(s,i+1));
  if(basis.some(x=>x===null)){status='referenceTargetRequired';basis=null;notes.push('Heilung hängt vollständig vom Max-Leben des Ziels ab; ohne festgelegtes Referenzziel keine feste Kostenkurve erfinden.');}
  else{curve=proposeIntegerManaCurve(basis,factor);
   if(s.nr===9)notes.push('Vom Nutzer ausdrücklich als Heilung eingeordnet. Referenz: Heilung eines Empfängers aus einem getroffenen Gegner, ohne Charakterangriff und weitere Gegner; tatsächliche Heilung ist schadensabhängig. Schaden wird nicht zusätzlich bepreist.');
   if(s.nr===58)notes.push('Referenz deckt nur feste Grundheilung; zusätzlicher 3-/5-%-Max-HP-Anteil braucht ein Referenzziel.');
   if(s.nr===108)notes.push('Referenz: Selbstheilung eines Empfängers; Verbündetenheilung separat, nicht mit der Gruppengröße multipliziert.');
  }
 }else if(s.effects?.some(e=>e.type==='heal')){status='hybridReview';notes.push('Schadensangriff mit zusätzlicher Heilung: Komponenten getrennt prüfen, keine doppelte Vollbepreisung.');}
 else{
  basis=skillBaseDamageByLevel(s);curve=proposeIntegerManaCurve(basis,factor);
  if(s.nr===36)notes.push('Neue 25-%-Gruppenzuordnung: ersetzt nur im Vorschlag die frühere Ausnahme; gespeicherter Energieschlag unverändert, Heiler weiter maximal Stufe 5.');
 }
 if(group==='finisher')notes.push('Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.');
 if([65,70,88,113,126,184,211].includes(s.nr))notes.push('Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.');
 rows.push({nr:s.nr,name:s.skillName_de,classes:owners.get(s.nr),levels:s.maxSkillLv,group,factor,status,basisByLevel:basis,currentManaByLevel:current,proposedManaCurve:curve,proposedManaByLevel:curve?Array.from({length:s.maxSkillLv},(_,i)=>curveValue(curve,i+1)):null,notes});
}
const ritual=get(103),torment=get(104),harvest=get(105),collector=get(186),chain=get(229);
const ritualBasis=skillBaseDamageByLevel(ritual).at(-1)+15*skillBaseDamageByLevel(torment).at(-1)+skillBaseDamageByLevel(harvest).at(-1);
const collectorCount=25,chainMultiplier=1+chain.collectedPointScaling.baseDamageBonusFractionByTier.at(-1);
const summonerBasis=collectorCount*skillBaseDamageByLevel(collector).at(-1)+(skillValue(chain,'patk')+skillValue(chain,'matk'))*chainMultiplier;
const comboBudgets=[{name:'Ritualist: Seelenfessel + 15 Seelenqual + Seelenernte',skills:[103,104,105],basis:ritualBasis,factor:.4,budget:Math.round(.4*ritualBasis),currentMana:rows.filter(r=>[103,104,105].includes(r.nr)).reduce((sum,r)=>sum+r.currentManaByLevel.at(-1)*(r.nr===104?15:1),0),additionalCost:'1 Seele für Seelenfessel; variable Rückgewinnung separat',status:'maximumLevelBudgetOnlyDistributionPending'},
 {name:'Seelenjäger: Markierung + 25 Seelensammler + Spektralketten',skills:[185,186,229],basis:summonerBasis,factor:.4,budget:Math.round(.4*summonerBasis),currentMana:0,additionalCost:'Sammelfenster und erreichter Punktestand',status:'maximumLevelBudgetOnlyDistributionPending'}];
const report={status:'proposalOnlyNotApplied',sourceCatalogSHA256:createHash('sha256').update(source).digest('hex'),factors:{normal:.25,heal:.35,finisher:.4,combo:.4},explicitAssignments:{9:'heal',62:'finisher'},rows,comboBudgets,damageChanges:[],simulationRun:false};
const f=x=>Number(x.toFixed(2)).toLocaleString('de-DE'),range=a=>a?`${f(a[0])} → ${f(a.at(-1))}`:'—';
const formula=c=>!c?'Separat prüfen':c.type==='linear'?`${c.base} + ${c.perLevel} je weiterer Stufe`:c.type==='fixed'?`Konstant ${c.base}`:c.values.join(' / ');
let md='# Vorschlag: drei Gruppen für Manakosten\n\n**Nur Vorschläge. Datenbank, Skillwerte und bisheriger Zehn-Minuten-Test bleiben unverändert.** Dieser Entwurf ersetzt die pauschale 40-%-Referenz als Diskussionsgrundlage.\n\n| Gruppe | Faktor | Basis |\n| --- | ---: | --- |\n| Normale Angriffe | 25 % | Gesamter Skill-Grundschaden einer Anwendung gegen ein Ziel |\n| Heilungen | 35 % | Gesamte definierte Grundheilung eines Empfängers je Anwendung |\n| Finisher / anhaltende Schadensfelder / große Kombos | 40 % | Vollständiger Skill-Grundschaden gegen ein Ziel; Kombos insgesamt einmal |\n\nCharakterangriff, Gegnerzahl und Gruppengröße werden nicht in die Kostenbasis multipliziert. Ganze Startwerte und ganze Steigerungen; Tabellen bei wechselnden Trefferzahlen/Dauer und Verdopplungen. Keine Schadensänderungen nötig. Keine Laufzeit-Simulation, keine Annahme geänderter Anwendungshäufigkeiten.\n\n**Ätherregen ist ausdrücklich Heilung (35 %). Infernal Zyklon gehört ausdrücklich zu den Finishern (40 %).** Die neuen normalen 25 % sind im Vorschlag auch für Energieschlag berücksichtigt; das ist noch keine Änderung seiner gespeicherten Kosten.\n\n';
for(const [group,title]of [['normal','Normale Angriffe – 25 %'],['heal','Heilungen – 35 %'],['finisher','Finisher / Schadensfelder – 40 %']]){
 md+=`## ${title}\n\n| Nr. | Skill | Stufen | Mana bisher 1 → Max | Referenz neu 1 → Max | Ganzzahlige Kurve |\n| ---: | --- | ---: | ---: | ---: | --- |\n`;
 for(const r of rows.filter(r=>r.group===group))md+=`| ${r.nr} | ${r.name} | ${r.levels} | ${range(r.currentManaByLevel)} | ${range(r.proposedManaByLevel)} | ${formula(r.proposedManaCurve)} |\n`;
 md+='\n';
}
md+='## Große Kombos – gemeinsames 40-%-Budget\n\nNur Maximalstufen und vollständig erfolgreiche Sammelfenster. Das Budget darf nicht zusätzlich auf jede Einzelkomponente nochmals vollständig aufgeschlagen werden. Eine Verteilung auf Start, Treffer und Abschluss ist noch nicht festgelegt.\n\n| Kombo | Vollständiger Skill-Grundschaden | Mana bisher | Kostenbudget neu |\n| --- | ---: | ---: | ---: |\n';
for(const b of comboBudgets)md+=`| ${b.name} | ${f(b.basis)} | ${f(b.currentMana)} | ${f(b.budget)} |\n`;
md+='\n## Einzelprüfungen und offene Referenzen\n\n';for(const r of rows.filter(r=>r.notes.length))md+=`- **${r.name} (${r.nr})**: ${r.notes.join(' ')}\n`;
md+='\nKostenkurven für Lebensessenz und den prozentualen Zusatz von Kuss der Aurora sind ohne Referenz-Max-HP nicht abschließend ableitbar. Hybride Angriffe mit Heilung sind nicht stillschweigend als reine Heilung umklassifiziert. Beschwörungen und reine Buffs bleiben außerhalb dieses Entwurfs.\n';
await fs.writeFile('data/balancing/three-tier-mana-proposal.json',JSON.stringify(report,null,2)+'\n');
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/three-tier-mana-proposal.md'),md);
console.log(JSON.stringify({groups:Object.fromEntries(['normal','heal','finisher','combo'].map(g=>[g,rows.filter(r=>r.group===g).length])),ether:rows.find(r=>r.nr===9).proposedManaByLevel,cyclone:rows.find(r=>r.nr===62).proposedManaByLevel,comboBudgets}));
