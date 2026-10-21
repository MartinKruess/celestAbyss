import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {isDamageSkill,manaProposalForSkill} from '../services/manaCostProposal.js';

const catalogText=await fs.readFile('data/skills.json','utf8'),catalog=JSON.parse(catalogText);
const classCounts=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const owners=new Map();for(const c of classCounts)for(const nr of c.skillNumbers){if(!owners.has(nr))owners.set(nr,[]);owners.get(nr).push(c.name.startsWith('Nachtjäger')?'Seelenjäger':c.name.split(' / ')[0]);}
const allAttacks=catalog.filter(isDamageSkill);
const rows=allAttacks.filter(s=>owners.has(s.nr)).map(s=>({...manaProposalForSkill(s),classes:owners.get(s.nr)}));
const reserved=allAttacks.filter(s=>!owners.has(s.nr)).map(s=>({nr:s.nr,name:s.skillName_de,reason:'Keiner aktuellen Klassenliste zugeordnet; Reserve unverändert lassen.'}));
const references=rows.filter(r=>r.proposedManaCurve);
const direction=r=>Math.sign(r.proposedManaByLevel.at(-1)-r.currentManaByLevel.at(-1));
const summary={attackSkills:rows.length,referenceProposals:references.length,
 moreExpensive:references.filter(r=>direction(r)>0).length,cheaper:references.filter(r=>direction(r)<0).length,
 unchangedMax:references.filter(r=>direction(r)===0).length,
 referenceCurveTypes:Object.fromEntries(['linear','fixed','table'].map(t=>[t,references.filter(r=>r.proposedManaCurve.type===t).length])),
 exceptions:rows.filter(r=>!r.proposedManaCurve).length,reserved:reserved.length,damageChanges:0};
const report={status:'proposalOnlyNotApplied',sourceCatalogSHA256:createHash('sha256').update(catalogText).digest('hex'),
 rule:{manaFractionOfSkillBaseDamage:0.4,basis:'Complete defined application against one target; all stored hits/ticks, guaranteed criticals at base +80%; no character attack, enemy count, random procs or conditional replay.',integerStartAndIncrements:true,doublingPreserved:true,damageChangesAllowedButNotNeeded:true,energyStrikeUnchanged:true,healingSkillsExcluded:true,simulationNotRun:true},summary,rows,reserved};
const fmt=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
const range=a=>a?fmt(a[0])+' → '+fmt(a.at(-1)):'Sonderkosten';
const curveText=c=>!c?'Unverändert / separat':c.type==='linear'?`${c.base} + ${c.perLevel} je weiterer Stufe`:c.type==='fixed'?`Konstant ${c.base}`:c.values.map(fmt).join(' / ');
const delta=r=>r.currentManaByLevel&&r.proposedManaCurve?(direction(r)>0?'+':'')+fmt(r.proposedManaByLevel.at(-1)-r.currentManaByLevel.at(-1)):'—';
let md='# Vorschlag: einheitliche Manakosten für Angriffsskills\n\n**Nur Vorschläge, nicht in Datenbank oder Spielwerte übernommen. Kein neuer Zehn-Minuten-Test.** Grundlage ist der aktuelle lokale Datenbankexport; gemeinsame Skills werden genau einmal berechnet. Nicht mehr zugeordnete Reserve-Skills bleiben außerhalb der Vorschläge.\n\n';
md+='## Berechnungsregel\n\n- Referenz: **40 % des vollständigen Skill-Grundschadens einer Anwendung gegen ein Ziel**. Charakter-/Waffenangriff und Anzahl möglicher Gegner werden nicht addiert.\n- Festgelegte Mehrfachtreffer und Feldticks sind enthalten; die volle Feldlaufzeit ist eine Obergrenze bei stehenbleibendem Ziel. Zufällige Procs und unbestimmte Schadenswiederholungen sind nicht enthalten. Gesicherte Krits verwenden den bisherigen Grundbonus von 80 %.\n- Bei linearer Schadensentwicklung: ganzzahlig gerundeter Start und ganzzahlige Steigerung je Stufe. Der Faktor darf dadurch leicht um 40 % schwanken. Bei Verdopplungen verdoppeln sich die ganzzahligen Manakosten exakt. Bei wechselnden Trefferzahlen oder Laufzeiten wird jeder Stufenwert ganzzahlig tabelliert.\n- **Keine Schadensänderung erforderlich:** Ganzzahlige Manakosten lassen sich ohne Eingriff in die bestehenden Schadenswerte berechnen. Bestehende gebrochene interne Schadenssteigerungen werden durch diesen Vorschlag nicht verändert.\n- Energieschlag bleibt unverändert, einschließlich Heiler-Stufengrenze 5. Kostenlose Kombos, prozentuale Manakosten und Angriffe mit ausschließlich Lebens-/Wut-/Seelenkosten bleiben Sonderfälle. Reine Heilzauber, Buffs und Beschwörungen erhalten hier keine neue Kostenkurve.\n- Kontrolle, zusätzliche Heilung, weitere Ressourcen und unklare Treffermechaniken sind markiert. Ihre 40-%-Werte sind Vergleichswerte ohne erfundene Zu-/Abschläge und müssen vor einer Übernahme einzeln beurteilt werden.\n\n';
md+='## Umfang\n\n'+[
 `- ${summary.attackSkills} aktuell zugeordnete Angriffsskills geprüft; gemeinsame Definitionen einmal gezählt.`,
 `- ${summary.referenceProposals} Kostenreferenzen: ${summary.cheaper} auf Maximalstufe günstiger, ${summary.moreExpensive} teurer.`,
 `- ${summary.referenceCurveTypes.linear} lineare Kurven mit ganzzahliger Steigerung, ${summary.referenceCurveTypes.fixed} konstante Kurve, ${summary.referenceCurveTypes.table} ganzzahlige Stufentabellen.`,
 `- ${summary.exceptions} Sonderfälle unverändert; ${summary.reserved} nicht mehr zugeordnete Reserve-Angriffe separat.`,
 '- Keine Schadenswerte geändert. Alle neuen Kostenwerte, Startwerte und linearen Steigerungen sind ganze Zahlen.'
].join('\n')+'\n\n';
const biggest=[...references].sort((a,b)=>Math.abs(b.proposedManaByLevel.at(-1)-b.currentManaByLevel.at(-1))-Math.abs(a.proposedManaByLevel.at(-1)-a.currentManaByLevel.at(-1))).slice(0,12);
md+='## Größte Änderungen auf Maximalstufe\n\n| Skill | Mana bisher | Referenz neu | Unterschied |\n| --- | ---: | ---: | ---: |\n';
for(const r of biggest)md+=`| ${r.name} (Nr. ${r.nr}) | ${fmt(r.currentManaByLevel.at(-1))} | ${fmt(r.proposedManaByLevel.at(-1))} | ${delta(r)} |\n`;
md+='\n## Vergleich aller kostenpflichtigen Angriffe\n\n⚠ = zusätzlicher Prüfpunkt, keine automatische Übernahme. Schaden = vollständiger Skill-Grundschaden gegen ein Ziel; Werte vor Charakterangriff. Die Kostenkurven enthalten ausschließlich ganze Zahlen.\n\n| Nr. | Skill / Klassen | Stufen | Schaden 1 → Max | Mana bisher 1 → Max | Referenz neu 1 → Max | Neue Kurve | Δ Mana Max |\n| ---: | --- | ---: | ---: | ---: | ---: | --- | ---: |\n';
for(const r of references)md+=`| ${r.nr} | ${r.requiresIndividualReview?'⚠ ':''}${r.name}<br>${r.classes.join(', ')} | ${r.levels} | ${range(r.damageByLevel)} | ${range(r.currentManaByLevel)} | ${range(r.proposedManaByLevel)} | ${curveText(r.proposedManaCurve)} | ${delta(r)} |\n`;
md+='\n## Unveränderte Sonderfälle\n\n| Nr. | Skill | Behandlung |\n| ---: | --- | --- |\n';
for(const r of rows.filter(r=>!r.proposedManaCurve))md+=`| ${r.nr} | ${r.name} | ${r.notes.join(' ')} |\n`;
md+='\n## Hinweise zur Einzelprüfung\n\n';
for(const r of references.filter(r=>r.requiresIndividualReview))md+=`- **${r.name} (${r.nr})**: ${r.notes.join(' ')}\n`;
md+='\n## Reserve ohne aktuelle Klassenzuordnung\n\n'+reserved.map(r=>`- ${r.name} (${r.nr}): ${r.reason}`).join('\n')+'\n\n## Freigabe und nächster Schritt\n\nVor dem Schreiben in die Datenbank zuerst die Referenzliste und ihre Ausnahmen prüfen. Besonders Felder und Mehrfachtreffer können erheblich teurer werden; günstige Kontrollangriffe können durch die reine Schadensformel zu billig werden. Der Zehn-Minuten-Test bleibt bis zum Abschluss der Manakosten-Anpassung unverändert. Eine spätere Übernahme muss den oben gespeicherten Quellhash prüfen, damit zwischenzeitliche Änderungen nicht überschrieben werden.\n';
await fs.writeFile('data/balancing/attack-mana-curve-proposal.json',JSON.stringify(report,null,2)+'\n');
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/attack-mana-curve-proposal.md'),md);
console.log(JSON.stringify(summary));
