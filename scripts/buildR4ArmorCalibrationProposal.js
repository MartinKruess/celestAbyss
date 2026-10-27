import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {allocateArmorTotal} from '../services/armorAllocation.js';

const report=JSON.parse(await fs.readFile('data/balancing/armor-level-progression-r4-anchor.json','utf8'));
assert.equal(report.anchor.rank,4);
assert.equal(report.anchor.level,60);
for(const [path,hash]of Object.entries(report.inputHashes)){
 assert.equal(createHash('sha256').update(await fs.readFile(path)).digest('hex'),hash,`Stale source: ${path}`);
}
const rows=report.rows.map(row=>{
 const points=[...row.points].reverse().map(point=>{
  // Starter protection is intentionally separate from the linear target.
  const proposedArmor=point.rank===1?point.armorDefense:point.roundedTargetArmor;
  const total=point.nakedDefense+proposedArmor;
  const effectiveLevel=total/row.divisor;
  const parts=allocateArmorTotal(proposedArmor);
  assert.equal(parts.reduce((sum,p)=>sum+p.value,0),proposedArmor);
  if(point.rank>1)assert.ok(Math.abs(effectiveLevel-point.level)<=0.50000001/row.divisor);
  if(point.rank===4)assert.equal(proposedArmor,point.armorDefense);
  return {rank:point.rank,level:point.level,currentArmor:point.armorDefense,proposedArmor,change:proposedArmor-point.armorDefense,nakedDefense:point.nakedDefense,total,effectiveLevel,levelDeviation:effectiveLevel-point.level,parts};
 });
 for(let i=1;i<points.length;i++)assert.ok(points[i].proposedArmor>=points[i-1].proposedArmor);
 return {key:row.key,name:row.name,divisor:row.divisor,points};
});
assert.equal(rows.length,13);
const maxLevelDeviation=Math.max(...rows.flatMap(r=>r.points.filter(p=>p.rank>1).map(p=>Math.abs(p.levelDeviation))));
const proposal={status:'proposalOnlyNoGameChanges',scope:'Physical armor defense only; per-class level-60 R4 anchor. Existing operative class baseline and level contributions included once. No weapons, shield, skills, buffs, affixes, upgrades or gems. Magical defense unchanged and not calibrated by this proposal.',inputHashes:report.inputHashes,anchor:report.anchor,starterRule:{status:'proposal',rule:'Retain current R1 physical defense as separate starter protection; do not force level-1 total onto the linear curve.',reason:'Existing R1 is below every proposed R2 total and yields effective armor levels about 8 to 12 at level 1. These values are a starting proposal, not combat-validated.'},rounding:'Nearest integer set total, largest-remainder allocation 30/26/16/16/12 to five slots',maxLevelDeviation,rows};
const f=n=>Number(n.toFixed(3)).toLocaleString('de-DE');
let md='# Vorschlag: Physische Rüstung an R4 kalibrieren\n\nNur berechnet, keine Spielwerte geändert. R4 auf Level 60 bleibt pro Klasse der feste Anker. X = (Klassenbasis + 59 × Vita-Abwehrfaktor + R4-Rüstung) / 60. Ziel-Rüstung auf Level L = L × X − Klassenbasis − (L − 1) × Vita-Abwehrfaktor. R2/3/5/6 werden daraus auf 20/40/80/100 hoch- beziehungsweise heruntergerechnet. Keine Passiven, Buffs, Waffen/Schild, Zufallswerte, Upgrades oder Steine. Magische Abwehr ist nicht Gegenstand dieser Kalibrierung.\n\n## Vorgeschlagene P-Abwehrsummen der fünf Rüstungsteile\n\nR1 als separater Vorschlag unverändert übernehmen; R4 bleibt unverändert. Alle Summen sind ganzzahlig.\n\n| Klasse | R1 / 1 | R2 / 20 | R3 / 40 | R4 / 60 | R5 / 80 | R6 / 100 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const row of rows)md+=`| ${row.name} | ${row.points.map(p=>p.proposedArmor).join(' | ')} |\n`;
md+=`\nMaximale verbleibende Levelabweichung für R2–R6 nach Rundung: ${f(maxLevelDeviation)} Level. Alle 78 Summen wurden auf monotone Rangfolge und exakte Verteilung auf fünf Teile geprüft. Alle 65 Punkte R2–R6 liegen innerhalb der rechnerischen Rundungstoleranz; R4 ist unverändert.\n\n## R1 als separate Startausnahme\n\nDie bestehenden R1-Werte werden vorläufig beibehalten. Sie geben auf Level 1 das folgende rechnerische Rüstungslevel. Ob dieser Startschutz angenehm ist, muss im Kampf mit Startgegnern geprüft werden.\n\n| Klasse | R1 P-Abwehr | Rüstungslevel auf Level 1 |\n| --- | ---: | ---: |\n`;
for(const row of rows)md+=`| ${row.name} | ${row.points[0].proposedArmor} | ${f(row.points[0].effectiveLevel)} |\n`;
for(const row of rows){
 md+=`\n## ${row.name}\n\nX = ${f(row.divisor)} (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.\n\n| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |\n| --- | ---: | ---: | ---: | ---: | ---: | --- |\n`;
 for(const point of row.points)md+=`| R${point.rank} | ${point.currentArmor} | ${point.proposedArmor} | ${point.change>0?'+':''}${point.change} | ${f(point.total)} | ${f(point.effectiveLevel)} | ${point.parts.map(p=>p.value).join(' / ')} |\n`;
}
await fs.writeFile('data/balancing/r4-armor-calibration-proposal.json',JSON.stringify(proposal,null,2)+'\n');
await fs.writeFile('docs/balancing/r4-armor-calibration-proposal.md',md);
console.log(JSON.stringify({classes:rows.length,sets:rows.flatMap(r=>r.points).length,maxLevelDeviation,rows:rows.map(r=>({name:r.name,targets:r.points.map(p=>p.proposedArmor)}))},null,2));
