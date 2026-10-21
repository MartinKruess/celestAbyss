import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {ARMOR_SLOTS,allocateArmorTotal} from '../services/armorAllocation.js';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const audit = await read('data/balancing/armor-source-audit.json');
const ranked = await read('data/balancing/ranked-equipment.json');
const r6 = await read('data/balancing/r6-equipment.json');
const names = await read('data/balancing/armor-names.json');
const defenseModel=await read('data/balancing/armor-defense-model.json');
const defenseScale=defenseModel.scaleNumerator/defenseModel.scaleDenominator;
assert.ok(defenseScale>0&&defenseScale<=1);
assert.equal(audit.rows.find(r=>r.sourceClass===defenseModel.anchor.sourceClass&&r.rank===defenseModel.anchor.rank).raw[defenseModel.anchor.field],defenseModel.anchor.original);
assert.equal(Math.round(defenseModel.anchor.original*defenseScale),defenseModel.anchor.target);
const previousParts = await read('data/balancing/armor-parts.json').catch(error => {
  if(error.code==='ENOENT') return null;
  throw error;
});
const slots = [...ARMOR_SLOTS];
const themes = {
  Butcher:'Schlächterplatten', Gladiator:'Arenapanzer', Tank:'Wächterplatten',
  Villain:'Schattenleder', Bloodmage:'Ritualgewand', Healer:'Segensgewand',
  Lightmage:'Lichtgewand', Kräuterkundler:'Kräuterleder', Archer:'Waldläuferleder',
  Shamane:'Geistergewand', Druid:'Naturgewand', Seelenjäger:'Seelenjägerleder', Adventure:'Wandererleder',
};

// Largest remainder: integer items always add up to the original defense total.
function allocate(total) {
  return allocateArmorTotal(total).map(row=>row.value);
}
assert.equal(slots.reduce((a,s)=>a+s.percent,0),100);
assert.deepEqual(names.slotOrder,slots.map(s=>s.key));
const parts = [], sets = [];
for(const row of audit.rows) {
  const namedSet=row.rank===6 ? names.rank6Sets?.[row.sourceClass] : undefined;
  const raw={physicalDefense:Math.round(row.raw.physicalDefense*defenseScale),magicalDefense:Math.round(row.raw.magicalDefense*defenseScale)};
  for(const [field,target]of Object.entries(defenseModel.rank6Targets?.[row.sourceClass]??{})){
    assert.ok(['physicalDefense','magicalDefense'].includes(field)&&Number.isInteger(target)&&target>=0);
    const baselineRank6=Math.round(audit.rows.find(r=>r.sourceClass===row.sourceClass&&r.rank===6).raw[field]*defenseScale);
    raw[field]=Math.round(raw[field]*target/baselineRank6);
    if(row.rank===6)assert.equal(raw[field],target);
  }
  const physical = allocate(raw.physicalDefense);
  const magical = allocate(raw.magicalDefense);
  const setParts = slots.map((slot,i) => ({
    id:`armor-${row.sourceClass.toLowerCase()}-r${row.rank}-${slot.key}`,
    sourceClass:row.sourceClass, className:row.className, rank:row.rank,
    slot:slot.key, slotName:slot.name,
    name:namedSet ? namedSet.parts[i] : row.rank===4 ? names.rank4[row.sourceClass][i]
      : row.rank<=3 ? names.earlyProfiles[names.classProfiles[row.sourceClass]][row.rank][i]
      : `${themes[row.sourceClass]} – ${slot.name} R${row.rank}`,
    nameStatus:namedSet ? namedSet.namingStatus??'Benanntes Rang-6-Set; Setboni noch offen' : names.rankStatus[row.rank],
    ...(namedSet ? {setId:namedSet.id,description_de:namedSet.partDescriptions[i]} : {}),
    allocationPercent:slot.percent,
    raw:{physicalDefense:physical[i],magicalDefense:magical[i]},
    bonusSlots:Array.from({length:6},()=>null),bonusSlotLimit:defenseModel.bonusSlotRules.availableByRank[row.rank],
  }));
  parts.push(...setParts);
  sets.push({name:row.sourceClass,rank:row.rank,row:row.row,raw,
    converted:{health:0,mana:0,...raw},partIds:setParts.map(p=>p.id)});
}
assert.equal(sets.length,78);
assert.equal(parts.length,390);
assert.equal(new Set(parts.map(p=>p.id)).size,390);
for(const p of parts) {
  assert.deepEqual(Object.keys(p.raw),['physicalDefense','magicalDefense']);
  assert.equal(p.bonusSlots.length,6);
  assert.ok(p.bonusSlots.every(v=>v===null));
  assert.ok(Number.isInteger(p.bonusSlotLimit)&&p.bonusSlotLimit>=0&&p.bonusSlotLimit<=6);
  assert.ok(typeof p.name==='string' && p.name.length>0);
}
if(previousParts) for(const part of parts) {
  const old=previousParts.parts.find(p=>p.id===part.id);
  assert.ok(old);
  if(!process.argv.includes('--allow-defense-change'))assert.deepEqual(part.raw,old.raw);
  for(const key of ['id','sourceClass','className','rank','slot','slotName','allocationPercent'])assert.equal(part[key],old[key]);
  assert.deepEqual(part.bonusSlots,old.bonusSlots);
}
for(const set of sets){
 const selected=parts.filter(p=>set.partIds.includes(p.id));
 for(const key of ['physicalDefense','magicalDefense'])assert.equal(selected.reduce((n,p)=>n+p.raw[key],0),set.raw[key]);
 if(set.rank>1){const prior=sets.find(s=>s.name===set.name&&s.rank===set.rank-1);for(const key of ['physicalDefense','magicalDefense'])assert.ok(set.raw[key]>=prior.raw[key]);}
}
const backup = `data/balancing/history/before-five-slot-armor-${Date.now()}`;
await fs.mkdir(backup,{recursive:true});
for(const name of ['ranked-equipment.json','r6-equipment.json'])
  await fs.copyFile(`data/balancing/${name}`,`${backup}/${name}`);
if(previousParts) await fs.copyFile('data/balancing/armor-parts.json',`${backup}/armor-parts.json`);
const weaponsBefore=JSON.stringify(ranked.weapons);
ranked.armor=sets;
ranked.armorDefinition='data/balancing/armor-parts.json';
ranked.armorStatus='Five slots; defense only; six empty bonus slots per item. Original spreadsheet archived unchanged.';
r6.armor=sets.filter(s=>s.rank===6);
r6.armorDefinition=ranked.armorDefinition;
r6.assumptions='Armor: five slots, P/M defense only, no additional attributes or HP/MP. Weapons retain their existing snapshot; current weapon definitions are in ranked-equipment.json.';
assert.equal(JSON.stringify(ranked.weapons),weaponsBefore);
const definition={schemaVersion:1,source:'data/source/Questsystem.ods',
  status:'Local armor definitions; not imported into MongoDB',
  allocation:slots,rounding:'Largest remainder, ties in slot order; preserve each class/rank defense total exactly.',
  additionalStats:'Removed until later assignment: direct HP/MP, vitality and wisdom. Six empty bonus slots per item.',
  correctedSourceExceptions:audit.sumErrors,
  namingDefinition:'data/balancing/armor-names.json',bonusSlotRules:defenseModel.bonusSlotRules,
  defenseModel:'data/balancing/armor-defense-model.json',defenseScale,rank6Targets:defenseModel.rank6Targets??{},
  sets,parts};
definition.armorSets=Object.entries(names.rank6Sets??{}).map(([sourceClass,set])=>({
  id:set.id,name:set.name,description_de:set.description,sourceClass,className:audit.aliases[sourceClass],rank:6,
  themeItem:set.themeItem,themeItemName:set.themeItemName,
  themeMaterial:set.themeMaterial,
  ...(set.materialLore?{materialLore:set.materialLore}:{}),
  ...(set.namingStatus?{namingStatus:set.namingStatus,designNotes:set.designNotes}:{}),
  themeStatus:'Thematic association; crafting recipe and quantities not defined',
  partIds:parts.filter(p=>p.setId===set.id).map(p=>p.id),
  setBonuses:[],setBonusStatus:'Not yet defined',
}));
for(const set of definition.armorSets){
  assert.equal(set.partIds.length,5);
  assert.equal(new Set(set.partIds).size,5);
  assert.deepEqual(parts.filter(p=>p.setId===set.id).map(p=>p.slot),names.slotOrder);
}
// Cloaks are an additional slot from R3; their stats have not been assigned.
definition.cloaks=[];
definition.cloakStatus='Available from R3. Defense and bonus values pending; not included in the five-slot defense allocation or combat comparison.';
for(const sourceClass of Object.keys(themes)) for(let rank=names.cloaks.firstRank;rank<=6;rank++){
  const profile=names.classProfiles[sourceClass];
  const material=['mage','nature'].includes(profile)?'cloth':'leather';
  const namedSet=rank===6?definition.armorSets.find(s=>s.sourceClass===sourceClass):undefined;
  const flower=namedSet?(names.rank6Sets[sourceClass].cloak??names.cloaks.flowerNames[namedSet.themeItem]):undefined;
  const cloak={id:`armor-${sourceClass.toLowerCase()}-r${rank}-cloak`,sourceClass,
    className:audit.aliases[sourceClass],rank,slot:'cloak',slotName:'Umhang',
    name:flower?.name??names.cloaks.earlyNames[material][rank]??`Umhang – ${audit.aliases[sourceClass].split(' / ')[0]} R${rank}`,
    nameStatus:flower?namedSet.namingStatus??'Benannter Rang-6-Setumhang':rank<=4?'Materialname':'Arbeitsname, noch offen',
    description_de:flower?.description_de??(material==='cloth'?'Ein gefütterter Umhang aus dicht gewebtem Stoff.':'Ein robuster Umhang aus geschmeidig verarbeitetem Leder.'),
    raw:{physicalDefense:null,magicalDefense:null},statsStatus:'Not yet defined',
    bonusSlots:Array.from({length:6},()=>null),bonusSlotLimit:defenseModel.bonusSlotRules.availableByRank[rank],...(namedSet?{setId:namedSet.id}:{})};
  definition.cloaks.push(cloak);
  if(namedSet) namedSet.partIds.push(cloak.id);
}
assert.equal(definition.cloaks.length,52);
for(const set of definition.armorSets) assert.equal(set.partIds.length,6);
assert.equal(new Set([...parts,...definition.cloaks].map(p=>p.id)).size,442);
const manifest=await read('data/balancing/armor-database-manifest.json').catch(error=>{if(error.code==='ENOENT')return null;throw error;});
const definitionHash=createHash('sha256').update(JSON.stringify({parts:definition.parts,cloaks:definition.cloaks,sets:definition.armorSets})).digest('hex');
const databaseVerified=manifest?.status==='importedAndVerified'&&manifest.definitionHash===definitionHash;
if(databaseVerified){definition.status='Imported into MongoDB; verified definition snapshot';definition.databaseManifest='data/balancing/armor-database-manifest.json';}
await fs.writeFile('data/balancing/armor-parts.json',JSON.stringify(definition,null,2)+'\n');
await fs.writeFile('data/balancing/ranked-equipment.json',JSON.stringify(ranked,null,2)+'\n');
await fs.writeFile('data/balancing/r6-equipment.json',JSON.stringify(r6,null,2)+'\n');
let md='# Rüstungsteile – fünf Teile je Klasse und Rang\n\nBrust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. Ganze Abwehrpunkte werden mit dem größten Rest verteilt; bei Gleichstand gilt diese Reihenfolge. Die fünf Teile ergeben exakt die bisherigen P-/M-Abwehr-Gesamtwerte der Klasse und des Rangs.\n\nNur P-Abwehr und M-Abwehr sind belegt. Direkte HP/MP sowie Vitalität und Willenskraft sind vorerst entfernt. Unter den beiden Abwehrwerten stehen je Teil sechs leere Bonusplätze. Namen sind Arbeitsnamen; Materialbezeichnungen haben keine zusätzlichen Effekte. Lokale Definitionen, noch keine MongoDB-Items.\n\nDie fehlerhaften M-Abwehr-Teilsummen des Butchers in R2–R5 sind durch Neuverteilung korrigiert: 64 / 97 / 176 / 245. Die Originaltabelle bleibt als historische Quelle erhalten. Aktuelle Definition: `data/balancing/armor-parts.json`.\n\n';
const sortedClasses=Object.keys(themes).sort((a,b)=>audit.aliases[a].localeCompare(audit.aliases[b],'de'));
const primaryName=sourceClass=>audit.aliases[sourceClass].split(' / ')[0];
const headingAnchor=sourceClass=>primaryName(sourceClass).toLocaleLowerCase('de');
md+='## Gesamtwerte auf einen Blick\n\nJe Zelle **P-Abwehr / M-Abwehr**, jeweils die Summe der fünf Rüstungsteile. Umhänge sind nicht enthalten. Über den Klassennamen geht es zu den Einzelteilen.\n\n| Klasse | R1 | R2 | R3 | R4 | R5 | R6 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const sourceClass of sortedClasses){
 md+=`| [${primaryName(sourceClass)}](#${headingAnchor(sourceClass)}) | ${Array.from({length:6},(_,i)=>{const s=sets.find(s=>s.name===sourceClass&&s.rank===i+1);return `${s.raw.physicalDefense} / ${s.raw.magicalDefense}`;}).join(' | ')} |\n`;
}
md+='\n## Verteilungsregel für neue Rüstungen\n\nFür jede Klasse gilt dieselbe Aufteilung: Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. P-Abwehr und M-Abwehr werden getrennt verteilt. Zunächst werden die exakten Prozentanteile berechnet und abgerundet. Verbleibende Punkte erhalten die Teile mit dem größten Nachkommarest; Gleichstände folgen der genannten Teilreihenfolge. So ergibt auch eine Gesamtsumme von 501 exakt 501 ganze Punkte: 151 / 130 / 80 / 80 / 60.\n\nDie Klasse bestimmt die Zuordnung und das gewünschte Verhältnis zwischen P- und M-Abwehr, nicht diese Slotanteile. Optional lässt sich das aktuelle R6-Profil fortschreiben: neue M-Abwehr = gerundet(neue P-Abwehr × R6-M-Abwehr / R6-P-Abwehr). Das ist ein Vorschlag für denselben Klassenstil, keine automatische Zusage zur Balance eines neuen Rangs. Beide Gesamtsummen können auch unabhängig festgelegt werden. Umhänge bleiben zusätzlich. Gemeinsame Berechnung: `services/armorAllocation.js`.\n\n';
for(const sourceClass of sortedClasses) {
  md+=`## ${primaryName(sourceClass)}\n\nKlassenlinie: ${audit.aliases[sourceClass]}.\n\n`;
  for(let rank=1;rank<=6;rank++) {
    const selected=parts.filter(p=>p.sourceClass===sourceClass&&p.rank===rank);
    const namedSet=rank===6 ? definition.armorSets.find(s=>s.sourceClass===sourceClass) : undefined;
    const namingNote=namedSet ? `**Set: ${namedSet.name}.** Thema: ${namedSet.themeItemName??namedSet.themeMaterial}. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.` : names.rankStatus[rank]+'.';
    md+=`### Rang ${rank}\n\n${namingNote}\n\n| Wert | ${selected.map(p=>p.name).join(' | ')} |\n| --- | ---: | ---: | ---: | ---: | ---: |\n`;
    for(const [key,label]of [['physicalDefense','P-Abwehr'],['magicalDefense','M-Abwehr']])
      md+=`| ${label} | ${selected.map(p=>p.raw[key]).join(' | ')} |\n`;
    for(let i=1;i<=6;i++) md+=`| Bonusplatz ${i}${i>selected[0].bonusSlotLimit?' (später)':''} | | | | | |\n`;
    const set=sets.find(s=>s.name===sourceClass&&s.rank===rank);
    md+=`\nGesamt: **${set.raw.physicalDefense} P-Abwehr / ${set.raw.magicalDefense} M-Abwehr**.\n\n`;
    const cloak=definition.cloaks.find(p=>p.sourceClass===sourceClass&&p.rank===rank);
    if(cloak) md+=`**Umhang: ${cloak.name}.** P-/M-Abwehr noch offen; ${cloak.bonusSlotLimit} Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.\n\n`;
  }
}
md=md.replace('Die fünf Teile ergeben exakt die bisherigen P-/M-Abwehr-Gesamtwerte der Klasse und des Rangs.',`Die bisherigen Quellen-Gesamtwerte werden einmal mit 354/554 skaliert und auf ganze Punkte gerundet. Anschließend gelten individuelle R6-Ziele, proportional auf R1–R5 übertragen: Gladiator M-Abwehr 123, Butcher M-Abwehr 149, Abenteurer P-Abwehr 302 und M-Abwehr 186. Die fünf Teile ergeben exakt die neuen Gesamtwerte.`)
 .replace('Die fehlerhaften M-Abwehr-Teilsummen des Butchers in R2–R5 sind durch Neuverteilung korrigiert: 64 / 97 / 176 / 245.','Die früher fehlerhaften M-Abwehr-Teilsummen des Butchers wurden aus den korrekten Quellen-Gesamtwerten neu verteilt und anschließend mit demselben Faktor skaliert.');
if(databaseVerified)md=md.replace('Lokale Definitionen, noch keine MongoDB-Items.','Als 390 Rüstungsteile und 52 Umhangentwürfe in MongoDB gespeichert und gegen diese Definitionen geprüft.');
md=md.replace('Unter den beiden Abwehrwerten stehen je Teil sechs leere Bonusplätze.','Unter den beiden Abwehrwerten stehen je Teil sechs vorbereitete, noch leere Bonusplätze. Davon für Zusatzwerte vorgesehen: R1 0, R2 1, R3 1, R4 2, R5 2, R6 3. Übrige Plätze sind für später reserviert. Sockel für Steine sind davon getrennt.');
if(defenseModel.bonusSlotRules.randomSelection){
 md+='\n## Zufallsbonus-Regeln\n\nJeder verfügbare Zusatzwertplatz erhält beim Drop garantiert einen Wert. Gewichtete Ziehungen ohne Wiederholung: Jeder Zusatzwert darf pro Gegenstand nur einmal vorkommen, auf Rüstung ebenso wie auf Waffen. Nach jeder Ziehung wird der gewählte Wert für die übrigen Plätze desselben Items entfernt und die verbleibenden Gewichte neu normalisiert. Auf verschiedenen Gegenständen darf derselbe Wert erneut vorkommen. Die Ergebnisse gehören zum einzelnen gedroppten Item. Gewichte sind keine unabhängigen Trefferprüfungen. Bonushöhen, Qualitätsstufen und Umschmieden sind noch offen; derzeit wird nichts ausgewürfelt.\n\nStärke bis Agilität: ausschließlich die festgelegten ganzzahligen Würfelwerte. Glück: höchstens eine Nachkommastelle. Maximales Leben und Mana: ganze Zahlen. Block und Penetration: ganze Zahlen. Alle übrigen Boni: höchstens zwei Nachkommastellen, jeweils in ihrer Anzeigeeinheit. Keine Rundung der abgeleiteten Charakterwerte durch diese Regel.\n\n| Zusatzwert | Ziehgewicht | Nachkommastellen |\n| --- | ---: | ---: |\n';
 for(const entry of defenseModel.bonusSlotRules.randomSelection.pool){
  const restriction=entry.allowedWeaponTypes?.includes('Shield')?'nur Schilde':entry.allowedEquipmentSlots?.includes('boots')?'nur Schuhe':entry.allowedItemCategories?.includes('weapons')?'nur Waffen':entry.allowedItemCategories?.includes('armor')?'nur Rüstung':'';
  md+=`| ${entry.name}${restriction?` (${restriction})`:''} | ${entry.weight} | ${entry.decimalPlaces} |\n`;
 }
 if(defenseModel.bonusSlotRules.randomSelection.eligibilityRule)md+='\nVor jeder Ziehung wird der Pool nach Itemkategorie und Ausrüstungsplatz gefiltert. Direkter P-/M-Angriff, physischer/magischer Skillschaden, Angriffstempo, kritischer Zusatzschaden, Penetration und Glück sind nur auf Waffen erlaubt. Lauftempo ist ausschließlich auf Schuhen ab Rang 4 erlaubt. Stärke bis Agilität bleiben auf Rüstung und Waffen möglich. Direkter Kritwert bleibt auch auf Rüstung möglich. Block ist ausschließlich auf Schilden rollbar, nicht auf Rüstung oder anderen Waffen. Die Ziehgewichte werden innerhalb des zulässigen Pools normalisiert. Diese Regeln betreffen zufällige Zusatzwerte; die Belegung durch Steine ist separat.\n';
 md+='\n### Festgelegte Bonus-Höchstwerte\n\nR1 ist nur der rechnerische Ausgangspunkt; auf R1 werden keine Zusatzwerte erzeugt. Wertigkeitsstufen sind noch offen.\n\n| Zusatzwert | R1 | R2 | R3 | R4 | R5 | R6 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
 for(const entry of defenseModel.bonusSlotRules.randomSelection.pool.filter(e=>e.baseValueByRank&&!e.weaponBalanceStatus))md+=`| ${entry.name} | ${Array.from({length:6},(_,i)=>(entry.baseValueByRank[String(i+1)]===undefined?'—':String(entry.baseValueByRank[String(i+1)]).replace('.',','))).join(' | ')} |\n`;
 for(const entry of defenseModel.bonusSlotRules.randomSelection.pool.filter(e=>e.weaponBalanceStatus))md+=`\n${entry.name}: nur Waffen; separat nach Einhand/Zweihand abzustimmen. Frühere Höchstwerte sind nur Referenz. Vorgeschlagen, noch zurückgestellt: ab R4 0,1–1,5, R5 0,1–3 und R6 0,1–4,5 Prozentpunkte.\n`;
 if(defenseModel.bonusSlotRules.randomSelection.weaponValueScaling)md+='\nWaffen-Zusatzwerte sind als voller Zweihand-Referenzwert angegeben. Einhandwaffen erhalten 50 %, Zweihandwaffen 100 %. Das betrifft ausschließlich zufällige Boni, nicht die Grundwerte der Waffe. Schilde erhalten denselben Pool wie normale Waffen plus exklusiv Block. Alle Schildboni werden halbiert, außer Block: dieser bleibt ungekürzt bei maximal 20 auf R6. Skillschaden ist auf 120 für Zweihand und 60 für Einhand/Schilde festgelegt. Waffen und Schilde haben R1 0, R2–R3 1, R4–R5 2 und R6 3 zufällige Zusatzwerte. Präzision halbierter Ganzzahlen und die vollständige Zuordnung der Waffentypen sind noch offen; es werden noch keine Waffenboni ausgewürfelt.\n';
 md+='\n### Festgelegte mögliche Würfelwerte\n\nDie Einträge nennen erlaubte Werte je gezogenem Bonus. Ihre einzelnen Wahrscheinlichkeiten sind noch nicht festgelegt. R1 bleibt ohne Zusatzwertplätze.\n\n| Zusatzwert | R1 | R2 | R3 | R4 | R5 | R6 |\n| --- | --- | --- | --- | --- | --- | --- |\n';
 for(const entry of defenseModel.bonusSlotRules.randomSelection.pool.filter(e=>e.rollValuesByRank))md+=`| ${entry.name} | ${Array.from({length:6},(_,i)=>entry.rollValuesByRank[String(i+1)].join(' / ')).join(' | ')} |\n`;
 for(const entry of defenseModel.bonusSlotRules.randomSelection.pool.filter(e=>e.rollRangeByRank))md+=`| ${entry.name} | ${Array.from({length:6},(_,i)=>{const range=entry.rollRangeByRank[String(i+1)];if(!range)return '—';return range.min===range.max?String(range.min):`${range.min}–${range.max} (Schritt ${range.step})`;}).join(' | ')} |\n`;
 if(defenseModel.bonusSlotRules.randomSelection.futureSmithingDesign)md+='\n### Späterer Schmiedeausbau – Entwurfsrichtung\n\nDie Grundabwehr steigt mit dem Rang; die Zusatzwertwürfe bestimmen zusätzlich die Qualität des einzelnen Fundstücks. Gezieltes Schmieden soll einzelne vorhandene Zusatzwerte mit passenden Materialien und einer Erfolgschance bis zum normalen Rangmaximum verbessern können. Danach ist Meisterschmiedearbeit mit selteneren Spezialmaterialien vorgesehen, beispielsweise für Hauptattribute von R6-Maximum 8 auf bis zu 10. Drop-Maxima bleiben unverändert. Noch keine Umsetzung: Materialkosten, Erfolgschancen, Fehlschläge, zulässige Werte/Ränge und endgültige Meistergrenzen sind offen.\n';

}
await fs.writeFile('docs/balancing/armor-parts.md',md);
let setMd='# Rang-6-Rüstungssets – Morgenblüte und Dämmerblüte\n\nVier benannte Sets mit jeweils fünf Teilen. Die Beschreibungen erläutern das Aussehen; daraus entstehen keine zusätzlichen Spielwirkungen. Abwehrwerte entsprechen der aktuellen Fünf-Teile-Verteilung. Je Teil bleiben sechs Bonusplätze leer. Setboni, Herstellungsrezepte und Materialmengen sind noch offen. Lokale Definitionen, noch keine Datenbank-Items.\n\nDie Silberweberhaube war zuvor ein Namensvorschlag im Gespräch. In den gespeicherten Rang-4- und Rang-5-Teilen ist sie nicht vergeben; die Heilerhaube in Rang 4 heißt „Haube des Morgenlichts“.\n\n';
for(const set of definition.armorSets){
  setMd+=`## ${set.className}: ${set.name}\n\n${set.description_de}\n\nThema: **${set.themeItemName??set.themeMaterial}**${set.themeItem?` (${set.themeItem})`:''}.\n\n`;
  if(set.materialLore) setMd+=`Materialeigenschaft: natürliche ${set.materialLore.naturalResistance}resistenz der Bestie. ${set.materialLore.itemResistanceStatus}.\n\n`;
  if(set.namingStatus) setMd+=`**Stand: ${set.namingStatus}.**\n\n${set.designNotes.map(note=>`- ${note}`).join('\n')}\n\n`;
  for(const id of set.partIds){
    const part=[...parts,...definition.cloaks].find(p=>p.id===id);
    assert.ok(typeof part.description_de==='string' && part.description_de.length>0);
    setMd+=`### ${part.name}\n\n${part.description_de}\n\n| Wert | Belegung |\n| --- | --- |\n| P-Abwehr | ${part.raw.physicalDefense??'Noch offen'} |\n| M-Abwehr | ${part.raw.magicalDefense??'Noch offen'} |\n`;
    for(let i=1;i<=6;i++) setMd+=`| Bonusplatz ${i}${i>part.bonusSlotLimit?' (später)':''} | |\n`;
    setMd+='\n';
  }
}
setMd=setMd.replace('# Rang-6-Rüstungssets – Morgenblüte und Dämmerblüte','# Rang-6-Rüstungssets')
  .replace('Vier benannte Sets mit jeweils fünf Teilen.',`${definition.armorSets.length} benannte Sets beziehungsweise Arbeitsentwürfe mit jeweils fünf Rüstungsteilen und einem Umhang. Der Luminet trägt die Morgenblüten-Linie; für den Heiler ist das Numara-Set noch ein Arbeitsentwurf. Die Umhangwerte sind noch offen; die bestehende Abwehrverteilung gilt weiterhin nur für die fünf Rüstungsteile.`);
await fs.writeFile('docs/balancing/r6-armor-sets.md',setMd);
if(databaseVerified)await fs.writeFile('docs/balancing/r6-armor-sets.md',setMd.replace('Lokale Definitionen, noch keine Datenbank-Items.','Alle Teile, Umhänge und Setzuordnungen sind in MongoDB gespeichert und geprüft.'));
await fs.writeFile('docs/balancing/r6-flower-armor-sets.md','# Rang-6-Rüstungssets\n\nDie aktuelle Übersicht enthält auch Schwarzstahl: [Rang-6-Rüstungssets](r6-armor-sets.md).\n');
// Preserve the weapon section of the older R6 overview verbatim.
const oldMd=await fs.readFile('docs/balancing/r6-equipment.md','utf8');
const weaponSection=oldMd.slice(oldMd.indexOf('## Waffen'));
let summary='# R6-Ausrüstung\n\nRüstung aktuell: fünf Teile, nur direkte P-/M-Abwehr. Zusatzwerte sind entfernt und bleiben als sechs leere Bonusplätze je Teil offen. Einzelteile und Arbeitsnamen: [Rüstungsteile](armor-parts.md). Die Waffenübersicht unten ist ein historischer Export; aktuelle Waffen stehen in [Alle Waffen](all-weapons-review.md).\n\n## Rüstung\n\n| Klasse | P-Abwehr gesamt | M-Abwehr gesamt |\n| --- | ---: | ---: |\n';
for(const set of r6.armor) summary+=`| ${audit.aliases[set.name]} | ${set.raw.physicalDefense} | ${set.raw.magicalDefense} |\n`;
await fs.writeFile('docs/balancing/r6-equipment.md',summary+'\n'+weaponSection);
console.log(JSON.stringify({sets:sets.length,parts:parts.length,cloaks:definition.cloaks.length,flowerSets:definition.armorSets.length,flowerSetPieces:definition.armorSets.map(s=>s.partIds.length),emptyBonusSlots:(parts.length+definition.cloaks.length)*6,correctedMdefSets:audit.sumErrors.length,backup,weaponsUnchanged:true}));
