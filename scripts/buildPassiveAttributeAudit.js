import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {learnableSkillLevel} from '../services/skillLearningLimits.js';
import {attributeConversionFactor} from '../services/attributeConversion.js';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const assignments=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const groups={adventurer:['Abenteurer','Abenteurer / Scout'],butcher:['Butcher','Butcher / Destroyer'],druid:['Druide','Druide / Alchemist'],gladiator:['Gladiator','Gladiator / Berserker'],healer:['Heiler','Heiler / Priester'],herbalist:['Kräuterkundler','Kräuterkundler / Witcher'],hunter:['Jäger','Jäger / Schütze'],knight:['Ritter','Ritter / Tempelritter'],luminet:['Luminet','Luminet / Lichtmagier'],ritualist:['Ritualist','Ritualist / Blutmagier'],shaman:['Schamane','Schamane / Hochelfe'],summoner:['Nachtjäger','Nachtjäger / Seelenjäger'],villian:['Schurke','Schurke / Schattenkrieger']};
const labels={str:'Stärke',vita:'Vitalität',int:'Intelligenz',wis:'Willenskraft',agi:'Agilität',dex:'Geschick'};
const keys=Object.keys(labels),fmt=n=>n.toLocaleString('de-DE');
const excluded=new Map([[6,'Angriffs-Proc'],[32,'Angriffs-Proc'],[42,'Angriffs-Proc'],[114,'Angriffs-Proc'],[134,'Boni für Begleiter statt Spieler'],[145,'Unvollständige Definition; +3 Vitalität nicht sicher als dauerhaft einzuordnen'],[176,'Angriffs-Proc'],[177,'Todesauslöser'],[222,'Zielskillabhängige Wahl: auf Stufe 2 −15 je Hauptattribut, insgesamt −90, plus Bonus des gewählten Zielskills'],[237,'Nur während der Morrak-Beschwörung'],[247,'Treffer-Proc'],[257,'Angriffs-Proc']]);
let appliedDecision;
try{appliedDecision=JSON.parse(await fs.readFile('data/balancing/passive-attribute-budget-decision.json','utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
if(appliedDecision){excluded.delete(145);excluded.delete(177);}
let unbrokenChange;
let unbrokenWisdomChange;
try{unbrokenWisdomChange=JSON.parse(await fs.readFile('data/balancing/unbroken-wisdom-ten-decision.json','utf8')).changes[0];}catch(error){if(error.code!=='ENOENT')throw error;}
try{const later=JSON.parse(await fs.readFile('data/balancing/unbroken-wisdom-five-decision.json','utf8')).changes[0];assert.deepEqual(later.before,unbrokenWisdomChange.after);unbrokenWisdomChange={before:unbrokenWisdomChange.before,after:later.after};}catch(error){if(error.code!=='ENOENT')throw error;}
try{const later=JSON.parse(await fs.readFile('data/balancing/unbroken-wisdom-one-three-five-decision.json','utf8')).changes[0];assert.deepEqual(later.before,unbrokenWisdomChange.after);unbrokenWisdomChange={before:unbrokenWisdomChange.before,after:later.after};}catch(error){if(error.code!=='ENOENT')throw error;}
try{const later=JSON.parse(await fs.readFile('data/balancing/unbroken-wisdom-linear-decision.json','utf8')).changes[0];assert.deepEqual(later.before,unbrokenWisdomChange.after);unbrokenWisdomChange={before:unbrokenWisdomChange.before,after:later.after};}catch(error){if(error.code!=='ENOENT')throw error;}
try{unbrokenChange=JSON.parse(await fs.readFile('data/balancing/unbroken-passive-skill-damage-decision.json','utf8')).changes[0];if(unbrokenWisdomChange)assert.deepEqual(unbrokenWisdomChange.before,unbrokenChange.after);assert.deepEqual(catalog.find(s=>s.nr===177),unbrokenWisdomChange?.after??unbrokenChange.after);}catch(error){if(error.code!=='ENOENT')throw error;}
const rows=[];
let ritualistChanges;
let soulReserveChanges;
let reserveThreeChange;
try{reserveThreeChange=JSON.parse(await fs.readFile('data/balancing/soul-reserve-three-decision.json','utf8')).changes[0];assert.deepEqual(catalog.find(s=>s.nr===241),reserveThreeChange.after);}catch(error){if(error.code!=='ENOENT')throw error;}
try{soulReserveChanges=JSON.parse(await fs.readFile('data/balancing/ritualist-soul-reserve-decision.json','utf8')).changes;for(const c of soulReserveChanges){const later=c.after.nr===241?reserveThreeChange:undefined;if(later)assert.deepEqual(later.before,c.after);assert.deepEqual(catalog.find(s=>s.nr===c.after.nr),later?.after??c.after);}}catch(error){if(error.code!=='ENOENT')throw error;}
try{ritualistChanges=JSON.parse(await fs.readFile('data/balancing/ritualist-passive-reduction-decision.json','utf8')).changes;for(const c of ritualistChanges){const later=soulReserveChanges?.find(r=>r.before.nr===c.after.nr);if(later)assert.deepEqual(later.before,c.after);assert.deepEqual(catalog.find(s=>s.nr===c.after.nr),later?.after??c.after);}}catch(error){if(error.code!=='ENOENT')throw error;}
for(const [key,[name,assignmentName]]of Object.entries(groups)){
 const assignment=assignments.find(c=>c.name===assignmentName);assert(assignment);
 const totals=Object.fromEntries(keys.map(k=>[k,0])),special={},sources=[],notes=[];
 for(const nr of assignment.skillNumbers){
  const s=catalog.find(s=>s.nr===nr);assert(s);if(s.type!=='passive')continue;
  if(excluded.has(nr)){if([145,222,237].includes(nr))notes.push(`${s.skillName_de}: ${excluded.get(nr)}`);continue;}
  if(s.triggerCondition?.type)continue;
  const level=learnableSkillLevel(s,key),r=resolveSkillAtLevel(s,level),bonuses={};
  for(const k of [...keys,'luck','faith','vic','amb']){
   const value=r[k];if(typeof value!=='number'||value===0)continue;
   assert.notEqual(s.statBonusUnits?.[k],'fraction');
   if(keys.includes(k)){totals[k]+=value;bonuses[k]=value;}else{special[k]=(special[k]??0)+value;}
  }
  if(Object.keys(bonuses).length)sources.push({nr,name:s.skillName_de,level,bonuses,total:Object.values(bonuses).reduce((a,b)=>a+b,0)});
  if(nr===120){const storage=r.soulStorageSettings;notes.push(storage.bonusStat?`Reaper: zusätzlich 0 bis +${(storage.capacityScaling.base/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep} Intelligenz abhängig vom aktuellen Seelenvorrat; nicht in der festen Summe.`:'Reaper: ausschließlich Seelenspeicher ohne Attributbonus. '+catalog.find(s=>s.nr===241).description_de);}
  if(nr===141)notes.push(`Eiserner Wille: zusätzlich ${100*attributeConversionFactor(s)} % der aktuellen Gesamt-Vitalität als Stärke. Allein aus den hier summierten Skill-Vitalitätsboni ergibt das +${fmt(totals.vita*attributeConversionFactor(s))} Stärke; Grundwerte, Ausrüstung und Buffs kämen als Berechnungsbasis hinzu.`);
 }
 rows.push({key,name,totals,total:keys.reduce((sum,k)=>sum+totals[k],0),special,sources,notes});
}
const proposals={status:'discussionOnlyNotApplied',standhaft:{maximum:{vita:10,wis:5}},bodyControl:{options:[{dex:10,agi:5},{agi:10,dex:5}],manaCostReduction:'No change decided'}};
const suggestedDistribution={
 adventurer:{values:[30,40,0,40,5,15],role:'Vielseitiger Begleiterkämpfer: solide Stärke und Überleben, etwas Geschick für Genauigkeit.'},
 butcher:{values:[50,40,0,30,5,5],role:'Schwerer Nahkämpfer: Schwerpunkt Stärke, danach Vitalität.'},
 druid:{values:[15,25,35,45,0,10],role:'Hybrid und Unterstützer: Magie mit kleiner körperlicher Komponente, ausreichende Willenskraft.'},
 gladiator:{values:[35,45,0,40,10,0],role:'Robuster Nahkämpfer: Stärke und Vitalität, etwas Agilität.'},
 healer:{values:[0,20,45,55,0,10],role:'Heilung und Ausdauer: Willenskraft vor Intelligenz; Heilskalierung gesondert prüfen.'},
 herbalist:{values:[0,30,45,45,0,10],role:'Magischer Unterstützer: Intelligenz und Willenskraft gleich gewichtet, etwas mehr Vitalität.'},
 hunter:{values:[0,35,0,35,20,40],role:'Fernkämpfer: Geschick als Angriffsattribut, Agilität als zweiter Schwerpunkt.'},
 knight:{values:[25,55,10,40,0,0],role:'Tank: hoher Vitalitätsbonus, ergänzende Willenskraft und etwas Stärke. Intelligenz aus dem Rassen-Skill bleibt enthalten; dynamische Zusatzstärke und Block kommen separat hinzu.'},
 luminet:{values:[0,30,40,50,0,10],role:'Bereits starker Magier: Intelligenz unverändert; das zusätzliche Budget geht in Vitalität statt mehr Angriff.'},
 ritualist:{values:[10,30,10,50,5,15],role:'Vorläufig 120 statt 130 feste Attributpunkte als Abschlag für Morrak. Ohne Dämon etwas schwächer als Luminet; mit Morraks eigenem Schaden und den Beschwörungsboni ungefähr gleichauf, gerne leicht darunter. Feste Intelligenz unverändert. Reaper bleibt separat. Die genaue Differenz muss der Schadensvergleich bestätigen.'},
 shaman:{values:[25,25,35,35,0,10],role:'Offensiver Hybrid: Stärke und Intelligenz, weniger zusätzliche Willenskraft als bisher.'},
 summoner:{values:[10,25,0,25,30,40],role:'Schneller Armbrustkämpfer: Geschick vor Agilität; Rassen-Stärke bleibt erhalten.'},
 villian:{values:[30,25,0,25,30,20],role:'Beweglicher Nahkämpfer: mehr Stärke für den tatsächlichen Angriff, Agilität für Tempo; Geschick unterstützt Genauigkeit und Technische Perfektion.'}
};
proposals.classAttributeDistribution={status:'draftNotAppliedNotDamageValidated',targetMainAttributePoints:130,targetOverrides:{ritualist:120},balanceIntent:'Ritualist alone slightly weaker than Luminet; with Morrak damage and summon-dependent owner bonuses roughly equal or slightly weaker. Compare matching buff scenarios and account for summon uptime.',scope:'Same fixed passive attribute scope as the current table; conditional bonuses remain separate',rows:rows.map(r=>{
 const suggestion=suggestedDistribution[r.key],total=suggestion.values.reduce((a,b)=>a+b,0);assert.equal(total,r.key==='ritualist'?120:130);
 return {key:r.key,name:r.name,attributes:Object.fromEntries(keys.map((k,i)=>[k,suggestion.values[i]])),total,changeFromCurrent:total-r.total,role:suggestion.role};
})};
const passivePlan=[
 {nr:140,attributes:{vita:10,wis:5},note:'Standhaft halbieren. Gilt identisch für Gladiator, Butcher und Ritter.'},
 {nr:67,attributes:{dex:10,agi:5},note:'Körperbeherrschung vereinheitlichen; die bisherigen 3 % Mana-Kostenreduktion auf Maximalstufe bleiben.'},
 {nr:145,attributes:{str:8,vita:5},note:'Durchhalten erstmals eindeutig als dauerhaften Attributskill definieren, ohne Auslöser und ohne direkte Abwehrboni. Gleiche Werte für Abenteurer und Gladiator. Die bisher unvollständige Definition wird damit ersetzt.'},
 {nr:177,attributes:{str:13},note:'Ungebrochen erhält zusätzlich einen ständig wirksamen Stärkebonus. Der bestehende Effekt nach tödlichem Schaden bleibt separat und unverändert. Dieser permanente Anteil wäre neu.'},
 {nr:203,attributes:{str:10,vita:5,int:8,wis:5},note:'Kanalisierung erhält einen neuen permanenten Attributanteil. Der bestehende direkte Max-Mana-Bonus bleibt unverändert.'},
 {nr:60,attributes:{int:6,wis:4},note:'Hoffnungsschimmer gemeinsam für Heiler und Luminet. Direkte MP-Regeneration bleibt unverändert.'},
 {nr:208,attributes:{int:14,wis:6},note:'Das ewige Wissen gemeinsam für Heiler und Luminet.'},
 {nr:143,attributes:{int:5,wis:5},note:'Immunität: bisherige Attributboni ersetzen; Fluchabwehr und direkte M-Abwehr bleiben unverändert.'},
 {nr:4,attributes:{int:25,wis:5},note:'Abschöpfen stärker auf Intelligenz ausrichten.'},
 {nr:81,attributes:{int:5,vita:5},note:'Naturgewalt: bisherigen Attributanteil ersetzen; eine lernbare Stufe bleibt erhalten.'},
 {nr:10,attributes:{dex:8,agi:1},note:'Auf der Jagd verkleinern. Waffen-, Ausweichtraining und Durchziehen bleiben erhalten.'},
 {nr:28,attributes:{vita:5},note:'Eiserner Schild: Vitalität halbieren; +10 M-Abwehr und +10 Blockpunkte bleiben.'},
 {nr:141,attributes:{str:3},note:'Eiserner Wille: feste +20 Vitalität/+10 Willenskraft durch +3 Stärke ersetzen. +20 Blockpunkte und dynamische Vitalität-zu-Stärke-Umrechnung bleiben separat erhalten.'},
 {nr:116,attributes:{vita:10},note:'Unerschöpfliche Hoffnung: bisherigen festen Intelligenzbonus durch Vitalität ersetzen. +3 Glück und +20 direkter M-Angriff bleiben unverändert.'},
 {nr:181,attributes:{vita:10,wis:20},note:'Arkane Aufladung erhält neue dauerhafte defensive Attribute. +20 direkte MP-Regeneration bleiben unverändert. Keine zusätzliche Intelligenz; Dämon und Seelenspeicher bleiben separat.'},
 {nr:259,attributes:{str:10,vita:8,int:10},note:'Weisheit des Erdweisen umverteilen; bisherige feste Willenskraft entfällt. Die 3 % zusätzliche Mana-Regeneration bleiben.'},
 {nr:187,attributes:{dex:14},note:'Hartes Training: Geschick von 10 auf 14. Die konstanten 5 Punkte Angriffsgeschwindigkeit bleiben.'},
 {nr:243,attributes:{str:13},note:'Technische Perfektion erhält einen neuen permanenten Stärkebonus. +4 Max-Mana je aktuellem Geschickpunkt auf Stufe 4 bleiben unverändert.'}
];
const concreteRows=rows.map(row=>{
 const assigned=assignments.find(a=>a.name===groups[row.key][1]).skillNumbers;
 const totals={...row.totals};
 for(const change of passivePlan){if(!assigned.includes(change.nr))continue;
  const old=row.sources.find(s=>s.nr===change.nr)?.bonuses??{};
  for(const k of keys)totals[k]+=(change.attributes[k]??0)-(old[k]??0);
 }
 const total=Object.values(totals).reduce((a,b)=>a+b,0);assert.equal(total,row.key==='ritualist'?120:130,row.key);
 return {key:row.key,name:row.name,attributes:totals,total,changeFromCurrent:total-row.total,role:suggestedDistribution[row.key].role};
});
proposals.concretePassivePlan={status:'discussionOnlyNotApplied',maximumAttributeReplacements:passivePlan,rows:concreteRows,scope:'Replace all six fixed main-attribute fields on the listed skills with the proposed maximum bonuses. Keep levels, class assignments and unmentioned effects. New permanent components are explicitly identified. Full rank progression still to be designed before implementation.'};
proposals.classAttributeDistribution.rows=concreteRows;
if(appliedDecision){
 proposals.status='appliedAndVerified';proposals.classAttributeDistribution.status='appliedAwaitingDamageReview';proposals.concretePassivePlan.status='appliedAndVerified';
 proposals.bodyControl={maximum:{dex:10,agi:5},manaCostReduction:'Existing reduction preserved'};
 for(const row of rows){const expected=structuredClone(appliedDecision.expectedRows.find(r=>r.key===row.key));if(unbrokenChange&&row.key==='butcher'){const removed=resolveSkillAtLevel(unbrokenChange.before,unbrokenChange.before.maxSkillLv).str;expected.attributes.str-=removed;expected.total-=removed;if(unbrokenWisdomChange){const added=resolveSkillAtLevel(unbrokenWisdomChange.after,10).wis;expected.attributes.wis+=added;expected.total+=added;}}if(ritualistChanges&&row.key==='ritualist'){expected.attributes.wis-=20;expected.total-=20;}assert.deepEqual(row.totals,expected.attributes);assert.equal(row.total,expected.total);}
 for(const row of concreteRows)row.changeFromCurrent=appliedDecision.expectedRows.find(r=>r.key===row.key).changeFromCurrent;
}
await fs.writeFile('data/balancing/passive-attribute-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'Fixed unconditional player attribute bonuses from all assigned passive skills at maximum learnable levels. No equipment, base stats, active buffs, procs, companion stats, conditional storage, or chosen extra skill level.',rows,proposals,currentOverrides:unbrokenChange?[{key:'butcher',removedStrength:13,addedPhysicalSkillDamage:30,addedWisdom:unbrokenWisdomChange?resolveSkillAtLevel(unbrokenWisdomChange.after,10).wis:0,currentAttributeTotal:117+(unbrokenWisdomChange?resolveSkillAtLevel(unbrokenWisdomChange.after,10).wis:0),decision:'unbroken-passive-skill-damage-decision.json',note:'Original 130-point plan below is historical for Unbroken; skill damage is not an attribute.'}]:[]},null,2)+'\n');
let md='# Dauerhafte Attributboni aus Skills je Klasse\n\nAlle zugeordneten Passiven auf maximal lernbarer Stufe. Gezählt werden sechs Hauptattribute: Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick. Grundwerte, Charakterlevel, Ausrüstung, aktive Buffs, Procs und Begleiterboni sind ausgeschlossen. Glück und Spezialattribute stehen separat. Direkte Kampfwerte wie Angriff, Abwehr, Mana und Block sind keine Attributpunkte und fehlen deshalb in dieser Summe. Die Summe ist ein Mengenvergleich, keine Bewertung der Kampfstärke.\n\n| Klasse | Stärke | Vitalität | Intelligenz | Willenskraft | Agilität | Geschick | Summe | Glück zusätzlich |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${keys.map(k=>fmt(r.totals[k])).join(' | ')} | **${fmt(r.total)}** | ${fmt(r.special.luck??0)} |\n`;
md+='\n## Vorschlag: Attributverteilung nach Klassenrolle – nicht umgesetzt\n\nAls gemeinsame Arbeitsgrundlage schlage ich **130 feste Hauptattributpunkte je Klasse** vor, beim **Ritualisten vorläufig 120** wegen seines zusätzlichen Dämons. Das Grundbudget liegt nahe an der aktuellen Mitte der Klassen. Die Zahlen ersetzen gedanklich die gesamte feste Skill-Attributsumme der oberen Tabelle; sie sind keine zusätzlichen Boni. Sie sind ein erster Rollenentwurf, noch kein durch Schadenstests bestätigtes Balancing. Der konkrete Vorschlag zur Verteilung auf bestehende Passive folgt direkt unter der Zieltabelle; die Stufenskalierung ist noch offen.\n\n| Klasse | Stärke | Vitalität | Intelligenz | Willenskraft | Agilität | Geschick | Summe | Änderung zur aktuellen Summe |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of proposals.classAttributeDistribution.rows)md+=`| ${r.name} | ${keys.map(k=>fmt(r.attributes[k])).join(' | ')} | **${r.total}** | ${r.changeFromCurrent>0?'+':''}${fmt(r.changeFromCurrent)} |\n`;
md+='\n### Konkreter Vorschlag über vorhandene Passive – nicht umgesetzt\n\nDie obige Zieltabelle ist auf diese konkret durchgerechnete Variante abgestimmt. Einzelne Verteilungen weichen vom ersten Rollenentwurf ab, damit gemeinsame Skills identisch bleiben. Rassen-Skills, drei Erweiterungen, Waffentrainings, allgemeines Waffen-/Rüstungstraining und Ausdauertraining bleiben auf dem aktuellen Stand. Ausweichtraining bleibt bei +10 Agilität/+5 Geschick. Keine neuen Skills oder Lernstufen: 32 Skills und 280 Skillpunkte bleiben erhalten. Manche vorhandenen Passiven erhalten dafür ausdrücklich einen neuen dauerhaften Attributanteil; dies ist noch keine bestätigte Designentscheidung.\n\nDie Attributspalte **ersetzt** den bisherigen festen Hauptattributanteil des jeweiligen Skills vollständig, sie wird nicht zusätzlich daraufgerechnet. Alle Angaben sind Maximalwerte; die genaue Stufenverteilung ist noch auszuarbeiten.\n\n| Passivskill | Klassen | Vorgeschlagene feste Hauptattributboni auf Maximalstufe | Weitere Regeln |\n| --- | --- | --- | --- |\n';
for(const p of passivePlan){const s=catalog.find(s=>s.nr===p.nr);const affected=rows.filter(r=>assignments.find(a=>a.name===groups[r.key][1]).skillNumbers.includes(p.nr)).map(r=>r.name).join(', ');md+=`| ${s.skillName_de} | ${affected} | ${Object.entries(p.attributes).map(([k,v])=>'+'+fmt(v)+' '+labels[k]).join(', ')} | ${p.note} |\n`;}
md+='\nDiese Änderungen wurden gegen alle 13 aktuellen Klassenzuweisungen gerechnet: zwölf Klassen ergeben exakt 130 feste Hauptattributpunkte, der Ritualist 120. Die zusätzlichen dynamischen und bedingten Boni sind darin weiterhin nicht enthalten. Die wirkliche Leistungswirkung ist noch nicht simuliert. Mehr Willenskraft kann insbesondere über Mana-Regeneration den dauerhaften Schaden steigern, auch ohne mehr Intelligenz.\n';
md+='\nGleiche Punktmengen bedeuten keine gleiche Kampfstärke: Angriffsattribute, defensive Attribute, direkte Angriffsboni, Skill-Grundschaden, Frequenz und Ressourcen haben unterschiedliche Auswirkungen. Gerade Ritualist und Luminet sollten durch den Mengenausgleich nicht automatisch mehr Intelligenz erhalten. Auch zusätzliche Vitalität und Willenskraft können durch längeres Überleben und weniger Ressourcenpausen die Kampfleistung erhöhen. Der Ritter wird über Tank-Leistung und Bedrohung beurteilt; geringerer Schaden allein macht ihn nicht zur schwächsten Klasse.\n\n';
for(const r of proposals.classAttributeDistribution.rows)md+=`- **${r.name}:** ${r.role}\n`;
md+='\nReaper (+0 bis +20 Intelligenz), Eiserner Wille (Vitalität → zusätzliche Stärke), Vergessener Zauber (gewählter Zusatzlevel mit Attributabzug), Procs, Glück und direkte Kampfwerte bleiben wie in der oberen Tabelle separat. Der Vorschlag ändert keine davon. Ein zusätzlicher allgemein geteilter Magier-Skill ist für einen fairen Gesamtvergleich nicht zwingend: Bereits vorhandene eigene Magier-Passiven zählen in das Budget hinein.\n';
md+='\n**Balancingziel Luminet/Ritualist:** Ohne Morrak soll der Ritualist etwas schwächer sein. Mit Morraks eigenem Schaden und dem nur während der verbesserten Beschwörung gewährten Bonus von +5 Intelligenz/+5 Willenskraft soll er insgesamt ungefähr beim Luminet liegen, gerne leicht darunter. Diese Beiträge getrennt erfassen und genau einmal rechnen. Vergleich ohne aktive Buffs, mit eigenen Buffs und mit Gruppenbuffs unter gleichen Bedingungen; sowohl aktive Beschwörungsphase als auch tatsächliche Verfügbarkeit mit Beschwörungskosten und Cooldown beachten. Der Abschlag von zehn festen Punkten ist vorläufig und beweist noch keine entsprechende Schadensdifferenz.\n';
for(const r of rows){md+=`\n## ${r.name}\n\n| Skill | Gelernte Stufe | Hauptattributboni | Summe |\n| --- | ---: | --- | ---: |\n`;for(const s of r.sources)md+=`| ${s.name} | ${s.level} | ${Object.entries(s.bonuses).map(([k,v])=>'+'+fmt(v)+' '+labels[k]).join(', ')} | ${fmt(s.total)} |\n`;for(const note of r.notes)md+='\n'+note+'\n';}
md+='\n## Nur vorgemerkt, nicht umgesetzt\n\nStandhaft: maximal +10 Vitalität und +5 Willenskraft. Körperbeherrschung: entweder +10 Geschick/+5 Agilität oder +10 Agilität/+5 Geschick; Verteilung noch offen. Zu den Mana-Kosten wurde keine Änderung beschlossen.\n';
if(appliedDecision){
 md=md.replace('Änderung zur aktuellen Summe','Änderung gegenüber vor der Anpassung').replace('Vorgeschlagene feste Hauptattributboni auf Maximalstufe','Feste Hauptattributboni auf Maximalstufe').replaceAll('Dieser permanente Anteil wäre neu.','Dieser permanente Anteil wurde ergänzt.');
 md=md.replace('## Vorschlag: Attributverteilung nach Klassenrolle – nicht umgesetzt','## Umgesetzte Attributverteilung nach Klassenrolle').replace('### Konkreter Vorschlag über vorhandene Passive – nicht umgesetzt','### Umgesetzte Anpassungen der vorhandenen Passiven');
 md=md.replace('Als gemeinsame Arbeitsgrundlage schlage ich **130 feste Hauptattributpunkte je Klasse** vor, beim **Ritualisten vorläufig 120** wegen seines zusätzlichen Dämons.','Umgesetzt sind **130 feste Hauptattributpunkte je Klasse**, beim **Ritualisten 120** wegen seines zusätzlichen Dämons.');
 md=md.replace('Sie sind ein erster Rollenentwurf, noch kein durch Schadenstests bestätigtes Balancing. Der konkrete Vorschlag zur Verteilung auf bestehende Passive folgt direkt unter der Zieltabelle; die Stufenskalierung ist noch offen.','Die Datenbank-Anpassungen sind bestätigt und umgesetzt. Der nachfolgende Schadenstest bewertet ihre Leistungswirkung. Feste Attribute steigen je Stufe linear um Maximalbonus geteilt durch Stufenzahl.');
 md=md.replace('Manche vorhandenen Passiven erhalten dafür ausdrücklich einen neuen dauerhaften Attributanteil; dies ist noch keine bestätigte Designentscheidung.','Die bestätigten neuen dauerhaften Attributanteile sind in der Datenbank enthalten; bestehende Spezialeffekte und aktive Self-Buffs bleiben unverändert.');
 md=md.replace('Alle Angaben sind Maximalwerte; die genaue Stufenverteilung ist noch auszuarbeiten.','Alle Angaben sind Maximalwerte. Je gelernter Stufe steigt jedes feste Attribut um Maximalwert geteilt durch die Zahl der Skillstufen.');
 md=md.replace('Die wirkliche Leistungswirkung ist noch nicht simuliert.','Die Leistungswirkung wird im separat erzeugten aktuellen 600-Sekunden-Bericht geprüft.');
 md=md.replace(/\n## Nur vorgemerkt, nicht umgesetzt[\s\S]*$/,'\n## Umsetzungsstand\n\nAlle 18 bestätigten Passiv-Anpassungen sind in Datenbank und Katalog gespeichert. Die drei Varianten ohne optionale Buffs, mit Eigenbuffs und mit Eigen-/Gruppenbuffs werden im aktuellen [600-Sekunden-Test](all-class-timed-damage.md) ausgewertet. Aktive Self-Buff-Definitionen wurden nicht geändert.\n');
}
if(unbrokenChange){md=md.replace('## Umgesetzte Attributverteilung nach Klassenrolle','## Ursprüngliche umgesetzte Attributverteilung nach Klassenrolle (historisch)').replace('### Umgesetzte Anpassungen der vorhandenen Passiven','### Ursprüngliche Anpassungen der vorhandenen Passiven (historisch)');md=md.replace('\n\n','\n\n**Aktuelle Ausnahme: Butcher hat nach der bestätigten Änderung von Ungebrochen 117 statt 130 feste Attributpunkte. Die bisherigen +13 Stärke wurden durch +30 physischen Skillschaden auf Stufe 10 ersetzt. Dieser Bonus ist kein Attribut und zählt nicht in die obere Summe. Die nachfolgenden ursprünglichen Plan-Tabellen dokumentieren den vorherigen 130-Punkte-Stand.**\n\n');}
if(unbrokenWisdomChange)md=md.replace('117 statt 130 feste Attributpunkte',(117+resolveSkillAtLevel(unbrokenWisdomChange.after,10).wis)+' statt 130 feste Attributpunkte').replace('Die bisherigen +13 Stärke wurden durch +30 physischen Skillschaden auf Stufe 10 ersetzt.','Die bisherigen +13 Stärke wurden durch +30 physischen Skillschaden ersetzt; der aktuelle zusätzliche Willenskraftbonus auf Stufe 10 beträgt '+resolveSkillAtLevel(unbrokenWisdomChange.after,10).wis+'.');
if(ritualistChanges)md=md.replace('Reaper (+0 bis +20 Intelligenz)','Reaper (+0 bis +10 Intelligenz)')+'\n\nAktuelle Ritualisten-Anpassung: Arkane Aufladung gibt keine +20 Willenskraft mehr, daher jetzt 100 feste Attributpunkte. Direkte MP-Regeneration 16–24 je Tick; Reaper maximal +10 dynamische Intelligenz; Ausbrennen maximal +40 M-Angriff. Diese direkten und dynamischen Boni zählen nicht als feste Hauptattribute.\n';
if(soulReserveChanges)md=md.replaceAll('Reaper (+0 bis +10 Intelligenz)','Reaper (nur Speicher)').replaceAll('Reaper maximal +10 dynamische Intelligenz','Reaper ohne Intelligenzbonus; Zahl der Opfer maximal +50 direkter M-Angriff');
if(reserveThreeChange)md=md.replaceAll('Zahl der Opfer gibt separat +5 M-Angriff je volle zehn Seelen, maximal +50.','Zahl der Opfer gibt separat +3 M-Angriff je volle zehn Seelen, maximal +30.').replaceAll('Zahl der Opfer maximal +50 direkter M-Angriff','Zahl der Opfer maximal +30 direkter M-Angriff');
await fs.writeFile('docs/balancing/passive-attribute-audit.md',md);
console.log(rows.map(r=>r.name+': '+r.total+' | '+keys.map(k=>labels[k]+' '+r.totals[k]).join(', ')+(r.special.luck?' | Glück '+r.special.luck:'')).join('\n'));
console.log('All 13 classes audited; proposals recorded without changing skills.');







