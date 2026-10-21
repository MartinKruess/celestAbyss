import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import {isDeepStrictEqual as same} from 'node:util';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const format=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const esc=v=>String(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
function flatten(v,p='',out=[]){if(Array.isArray(v)){if(!v.length)out.push([p,'[]']);else v.forEach((x,i)=>flatten(x,`${p}[${i}]`,out));}else if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v))flatten(x,p?p+'.'+k:k,out);}else out.push([p,v===null?'null':format(v)]);return out;}
const classes=[]; const curveErrors=[];
for(const file of (await fs.readdir('data/balancing')).filter(f=>f.endsWith('-skill-review.json'))){
 const prefix=file.replace('-skill-review.json',''),review=JSON.parse(await fs.readFile(`data/balancing/${file}`,'utf8'));
 const md=await fs.readFile(`docs/balancing/classes/${prefix}-skills.md`,'utf8');
 const mismatches=review.skills.filter(s=>!same(s,catalog.find(x=>x.nr===s.nr))).map(s=>s.nr);
 const markdownMissing=[];let checkedFields=0;
 for(const s of review.skills){
  // Adventurer delegates common skill detail blocks to the two shared documents.
  let text=md;
  if(prefix==='adventurer')text+='\n'+await fs.readFile('docs/balancing/shared-creature-skills.md','utf8')+'\n'+await fs.readFile('docs/balancing/shared-training-skills.md','utf8');
  let heading=`### ${s.nr}: ${s.skillName_de}`;if(!text.includes(heading))heading=`## ${s.nr}: ${s.skillName_de}`;const start=text.indexOf(heading);
  const end=start<0?-1:text.indexOf('\n'+heading.split(' ')[0]+' ',start+heading.length);const block=start<0?'':text.slice(start,end<0?undefined:end);
  for(const[k,v]of flatten(s).filter(([k])=>k!=='_id')){
   const label=k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana')?'mana (Aktivierungskosten, kein Bonus)':k;
   if(!block.includes(`| ${esc(label)} | ${esc(v)} |`)&&!block.includes(`| ${esc(k)} | ${esc(v)} |`))markdownMissing.push({nr:s.nr,field:k});
   checkedFields++;
  }
 }
 classes.push({key:review.classKey,prefix,total:review.skills.length,skillNumbers:review.skills.map(s=>s.nr),jsonMismatches:mismatches,checkedFields,markdownMissing});
}
for(const s of catalog){function walk(v,p){if(!v||typeof v!=='object')return;if(['linear','fixed','table'].includes(v.type)&&('base'in v||'values'in v||'perLevel'in v)){
 if(v.type==='table'&&v.values?.length&&v.values.length<s.maxSkillLv)curveErrors.push({nr:s.nr,path:p,reason:'Tabelle kürzer als Definitionsstufen',length:v.values.length,max:s.maxSkillLv});
 if(v.type==='linear'&&(!Number.isFinite(v.base)||!Number.isFinite(v.perLevel)))curveErrors.push({nr:s.nr,path:p,reason:'Ungültige lineare Kurve'});
 }for(const[k,x]of Object.entries(v))walk(x,p?`${p}.${k}`:k);}walk(s,'');}
const issues=[
 ['blocker',[13],'Wutgewinn je Auto-Attack fehlt. Voller Startbalken allein definiert keinen wiederholten 10-Minuten-Betrieb.'],
 ['blocker',[127],'Wutexplosion: Aktivierungskosten ausdrücklich offen; nicht als kostenlos behandeln.'],
 ['blocker',[40],'Erlösendes Feld: Mana-Kosten und Castzeit fehlen.'],
 ['blocker',[23],'Donnernde Lanze: keine feste Castzeit, Ansturm 0,1–3 s ohne Distanzformel. Für Dummytest Distanz/Aktionsdauer festlegen.'],
 ['blocker',[239],'Frostschauer: Cooldown fehlt, Charakter-M-Angriffsbeitrag je Tick ausdrücklich offen.'],
 ['blocker',[62],'Infernal Zyklon: zusätzlicher DoT-Schaden und Tickintervall fehlen. Gespeicherter Grundtreffer ersetzt diese Wirkung nicht.'],
 ['blocker',[186,229],'Seelensammler: Cast-/Cooldown-Überlappung offen; Spektralketten verlangt aktive Markierung, Abschluss nach maximaler Sammelphase ungeklärt. 25 Treffer plus Abschluss nicht ohne Zeitregel voraussetzen.'],
 ['decision',[104,105],'Seelenqual: 0 Cast und 0,19 s Cooldown erlaubt rechnerisch bis 16 Anwendungen in 3 s statt berichteter 15. Abschlussfenster/Skillpriorität müssen festgelegt werden.'],
 ['decision',[83,99],'Opfergabe: tödlicher Lebenspreis/Aktivierungsreihenfolge offen. Schrei der Unterwelt: Beitrag des Charakter-M-Angriffs offen; bisherige Rotation addiert ihn als Annahme.'],
 ['decision',[48,209],'Feuer der Verdammten: historischer Opferbonus ungeklärt. Verloren in der Dunkelheit: fehlende verbindliche Seelen-Skill-Tags und Anwendung je Mehrfachtreffer/DoT.'],
 ['decision',[184],'Hinterhältiger Pfeil: zufällige 60-%-Markierung führt zu 90-%-Schadenswiederholung. Im deterministischen Test explizit ausschließen oder eigene Variante; kein garantierter Proc. Zwischenstufenkurven offen, Maximalwerte vorhanden.'],
 ['decision',[8,65,76,88,113,126,180,211,227,235],'Ausführungs-/Trefferzeitpunkte oder Blockierung weiterer Aktionen teilweise offen. Besonders Klingentornado (Attack-Speed-Abhängigkeit), Seelenplage (4 s Animation), Astralkörper (Mehrfachtrefferfrage), Aurora-Randzonen und Meteoriten-Einschlagsverteilung beeinflussen Zeitvergleich.'],
 ['decision',[202],'Verbrennen: Grundwert je Tick definiert, zusätzlicher Charakter-M-Angriff nicht explizit definiert. Bisheriger Vergleich zählt nur Grundwert.'],
 ['excluded',[135],'Kontrolle: gemeinsame Definition mit Lerngrenzen vorhanden, konkrete Wirkung/Skalierung fehlt. Laut Nutzer normale Pet-Mechanik jetzt ausgenommen.'],
 ['excluded',[206,207,108],'Wiederbelebung: Aktivierungs-Mana fehlt. Himmlische Aufopferung: genaue Heilumwandlung/HP-Grenze offen. Aurafeld: M-Angriffsbeitrag offen. Keine Blocker für reinen offensiven Dummytest ohne Heilaktionen.'],
 ['decision',[169,152,54,32,84,75,176],'Zufalls-Procs/Boni separat behandeln. Nutzer schließt Zufalls-Krit aus, aber andere Zufallseffekte noch nicht pauschal entschieden; etwa Gift, Gefrierbrand, Adrenalin und Innere Unruhe können Schaden ändern.'],
 ['ready',[226,237],'Seelenbegleiter: 30 % Dex/Vita/Wis live, Fernkampf-P-Angriff, 360 s Laufzeit/CD, 132 Mana, 0,4 s Cast. Morrak: 1/3 M-Angriff live, 300 s Laufzeit/360 s CD, nur −500 Max-HP, 0,4 s Beschwörung; separate Questaktion noch nicht angebunden. Beide Attack-Speed 1. Neue Testannahme 1,5 Angriffe/s löst Grundfrequenz, keine Reichweite/Todeslogik für unbeweglichen unsterblichen Dummy nötig.'],
];
const findings=issues.map(([severity,ids,detail])=>({severity,skills:ids.map(nr=>({nr,name:catalog.find(s=>s.nr===nr)?.skillName_de})),classes:classes.filter(c=>ids.some(n=>c.skillNumbers.includes(n))).map(c=>c.key),detail}));
const pendingFields=catalog.flatMap(s=>flatten(s).filter(([k,v])=>/Status$/.test(k)&&['pending','provisional'].includes(v)).map(([path,status])=>({nr:s.nr,name:s.skillName_de,path,status})));
const result={date:'2026-10-17',simulationStarted:false,databaseVerification:{skills:243,classConversions:13,readOnly:true,commands:['node scripts/checkSkillCatalogDatabase.js','node scripts/checkClassConversionDatabase.js'],result:'Both passed immediately before this local audit'},classes,curveErrors,findings,pendingFields,globalDecisions:['100 % Angriffstempo = 1,5 gemeinsame Waffenaktionen/s; zwei Waffen sind ein gemeinsamer Angriff.','HP/MP-Regeneration alle 2 s; Mana nach jedem Tick für nächste bezahlbare Aktion nutzbar, nicht auf volles Mana warten.','Skill-Priorität, Auto-Attack während Cast/Animation, globaler Aktionsabstand, Cooldownstart und nicht blockierende Animationen zentral festlegen.','Keine Rüstung, Verfehlen oder Zufalls-Krit; garantierter Krit weiterhin ×1,8.','Eigenbuff-/Gruppenbuff-Nutzung und Zufalls-Schadensprocs vor Messung einheitlich bestimmen.'],reportingRequirements:['Zeitpunkt erstmals unzureichendes Mana und Gesamtzeit ressourcenbedingt ohne Skills.','Auto-Attack-only-Phasen getrennt nach Mana, Cooldowns und Voraussetzungen ausweisen.','Kein Warten auf vollen Mana-Pool; erste bezahlbare erlaubte Aktion nutzen.']};
await fs.writeFile('data/balancing/pre-simulation-data-audit.json',JSON.stringify(result,null,2)+'\n');
let md='# Datenprüfung vor der Zehn-Minuten-Simulation\n\nStand: 17.10.2026. **Keine Simulation gestartet, keine Datenbankwerte geändert.**\n\nMongoDB-Prüfung: alle 243 Skilldefinitionen stimmen vollständig mit data/skills.json überein; alle 13 Klassen-Attributregeln stimmen mit den lokalen Definitionen überein. Datenübereinstimmung bedeutet nicht Vollständigkeit.\n\n## Dateiabgleich\n\n| Klasse | Skills | JSON-Abweichungen | geprüfte Markdown-Felder | nicht exakt gefundene Markdown-Felder |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const c of classes)md+=`| ${c.key} | ${c.total} | ${c.jsonMismatches.length} | ${c.checkedFields} | ${c.markdownMissing.length} |\n`;
md+='\nMarkdown-Abgleich prüft die gespeicherten Detailtabellen; Zusammenfassungen und historische Berechnungsabschnitte können trotzdem veraltet sein. Abenteurer verwendet teilweise gemeinsame Detaildateien; nicht gefundene Felder sind im JSON einzeln aufgelistet und erfordern Darstellungsprüfung.\n\n## Offene Angaben und Entscheidungen\n\n| Status | Skills | betroffene Klassen | Befund |\n| --- | --- | --- | --- |\n';
for(const f of findings)md+=`| ${f.severity} | ${f.skills.map(s=>`${s.nr} ${s.name}`).join(', ')} | ${f.classes.join(', ')} | ${f.detail} |\n`;
md+='\n## Globale Testregeln\n\n'+result.globalDecisions.map(s=>'- '+s).join('\n')+'\n\n## Gewünschtes Mana-Protokoll\n\n'+result.reportingRequirements.map(s=>'- '+s).join('\n');
md+='\n\n## Weitere Prüfergebnisse\n\n'+`Kurvenstrukturauffälligkeiten: ${curveErrors.length}. Alle pending/provisional-Statusfelder sind zusätzlich im JSON inventarisiert; viele betreffen Zielgeometrie oder spätere PvP-/Pet-Regeln und blockieren diesen Einzelzieltest nicht. Fehlende aktive Kosten werden nicht als null interpretiert. Konstante Effekte benötigen nicht zwangsläufig eine Levelkurve; Passive benötigen keine aktive Castzeit. Salve skaliert durch Pfeilanzahl und Wasserfesseln durch Dauer – keine fehlende Schadenskurve behauptet. Sturm der Wut ist laut Beschreibung manafrei, obwohl das strukturierte Nullkostenfeld fehlt.\n\nVeraltete Berichtstexte: Die Rotationsauswertung schließt den Seelenbegleiter noch mit der Begründung „Angriffstempo/Schadensformel fehlen“ aus, obwohl die Definition mittlerweile vorliegt. Die Abenteurer-Zusammenfassung im Review-Generator setzt Erweiterung des Körpers weiterhin auf alte HP-/Agilitätswerte, obwohl die Detaildefinition bereits Stärke/Vita/Wisdom ohne Bonus-HP enthält. Diese Zusammenfassungen sind keine gültige Simulationsquelle.\n`;
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/pre-simulation-data-audit.md'),md+'\n');
console.log(JSON.stringify({classes:classes.map(c=>({key:c.key,json:c.jsonMismatches.length,md:c.markdownMissing.length,fields:c.checkedFields})),curveErrors,blockers:findings.filter(f=>f.severity==='blocker').length},null,2));
