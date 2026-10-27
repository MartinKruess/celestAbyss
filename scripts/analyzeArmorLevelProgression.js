import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

// Analysis only: never writes equipment definitions or database records.
const paths=['data/balancing/class-baselines.json','data/balancing/attribute-model.json','data/balancing/armor-parts.json','data/balancing/ranked-equipment.json'];
const sources=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [baseline,model,armor,equipment]=sources.map(s=>JSON.parse(s));
const roundTarget=armor.physicalCalibration?.rounding?.startsWith('Ceil')?n=>Math.ceil(n-1e-9):Math.round;
const names={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const display={adventurer:'Abenteurer',butcher:'Butcher',druid:'Druide',gladiator:'Gladiator',healer:'Heiler',herbalist:'Kräuterkundler',hunter:'Jäger',knight:'Ritter',luminet:'Luminet',ritualist:'Ritualist',shaman:'Schamane',summoner:'Seelenjäger',villian:'Schurke'};
const checkpoints=[{level:100,rank:6},{level:80,rank:5},{level:60,rank:4},{level:40,rank:3},{level:20,rank:2},{level:1,rank:1}];
const anchorOptions=process.argv.filter(arg=>/^--anchor-r[2-6]$/.test(arg));
assert.ok(anchorOptions.length<=1,'Choose a single anchor rank');
const anchorRank=anchorOptions.length?Number(anchorOptions[0].at(-1)):6;
const anchorLevel=checkpoints.find(p=>p.rank===anchorRank).level;
const outputSuffix=anchorRank===6?'':`-r${anchorRank}-anchor`;
const conversion=model.conversions.find(c=>c.attribute==='vitality'&&c.target==='physicalDefense');
assert.equal(conversion.status,'confirmedFactor');
const mods=model.vitalityClassModifiers;
assert.equal(baseline.classes.length,13);
const rows=baseline.classes.map(c=>{
 const factor=conversion.amountPerPoint*(mods?.classTargetMultipliers?.[c.key]?.physicalDefense??mods?.classMultipliers?.[c.key]??1);
 const sets=armor.sets.filter(s=>s.name===names[c.key]);
 assert.equal(sets.length,6);
 for(const set of sets){
  const parts=set.partIds.map(id=>armor.parts.find(p=>p.id===id));
  assert.equal(parts.length,5);assert.ok(parts.every(Boolean));
  assert.equal(parts.reduce((n,p)=>n+p.raw.physicalDefense,0),set.raw.physicalDefense);
  assert.deepEqual(set.raw,equipment.armor.find(s=>s.name===set.name&&s.rank===set.rank).raw);
 }
 const base=c.baseStats.physicalDefense;
 const anchor=base+(anchorLevel-1)*factor+sets.find(s=>s.rank===anchorRank).raw.physicalDefense;
 const divisor=anchor/anchorLevel;
 const points=checkpoints.map(({level,rank})=>{
  const armorDefense=sets.find(s=>s.rank===rank).raw.physicalDefense;
  const nakedDefense=base+(level-1)*factor;
  const total=nakedDefense+armorDefense;
  const effectiveLevel=total/divisor;
  const targetTotal=level*divisor;
  const targetArmor=targetTotal-nakedDefense;
  const roundedTargetArmor=Math.max(0,roundTarget(targetArmor));
  assert.ok(Number.isFinite(effectiveLevel)&&effectiveLevel>0);
  return {level,rank,baseDefense:base,levelDefense:(level-1)*factor,nakedDefense,armorDefense,total,effectiveLevel,levelDeviation:effectiveLevel-level,deviationPercent:(effectiveLevel/level-1)*100,targetTotal,targetArmor,roundedTargetArmor,armorChange:roundedTargetArmor-armorDefense,roundedTargetEffectiveLevel:(nakedDefense+roundedTargetArmor)/divisor,role:level===anchorLevel?'anchor':level===1?'starterException':'rankEntryCheck'};
 });
 assert.ok(Math.abs(points.find(p=>p.rank===anchorRank).effectiveLevel-anchorLevel)<1e-10);
 return {key:c.key,name:display[c.key],physicalDefensePerLevel:factor,anchorTotal:anchor,divisor,points};
});
const summary=checkpoints.map(({level,rank},i)=>{
 const points=rows.map(r=>r.points[i]);
 return {level,rank,minEffectiveLevel:Math.min(...points.map(p=>p.effectiveLevel)),maxEffectiveLevel:Math.max(...points.map(p=>p.effectiveLevel)),meanEffectiveLevel:points.reduce((s,p)=>s+p.effectiveLevel,0)/points.length};
});
const report={status:'analysisOnlyNoGameChanges',scope:'Physical defense only; existing operative class baseline once, +1 Vitality per level after level 1 with current class conversion, five +0 armor pieces. No weapons/shield, cloak, passives, active buffs, affixes, upgrades, gems or invented starting attributes.',rankLevelMapping:{status:'User-defined evaluation checkpoints, not enforced armor level requirements',1:1,2:20,3:40,4:60,5:80,6:100},anchor:{level:anchorLevel,rank:anchorRank,rule:`Per-class divisor = total physical defense at ${anchorLevel} / ${anchorLevel}`} ,limitations:['R1 at level 1 is an allowed starter exception; computed targets there are diagnostic only.','Target armor sums are hypothetical nearest-integer corrections, not applied and not approval of gameplay balance.','Skills and buffs require separate progression checks.'],inputHashes:Object.fromEntries(paths.map((p,i)=>[p,createHash('sha256').update(sources[i]).digest('hex')])),summary,rows};
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
const comparisonPoints=[...checkpoints].reverse();
const comparisonHeaders=comparisonPoints.map(p=>`${p.level}/R${p.rank}`).join(' | ');
let md=`# Physische Rüstungsprogression ohne Skills\n\nNur Analyse; keine Spielwerte geändert. Klassenbasis + (Level − 1) × aktueller Vita-Abwehrfaktor + fünf Rüstungsteile auf +0. Keine Waffen/Schild, Passiven, Buffs, Zufallswerte, Verstärkungen oder Steine. Bestehende operative Startwerte werden einmal angesetzt; unbekannte Startattribute werden nicht zusätzlich erfunden.\n\nPro Klasse: X = Gesamtabwehr auf Level ${anchorLevel} mit R${anchorRank} / ${anchorLevel}. Rüstungslevel = Gesamtabwehr / X. Die Levelzuordnung ist die gewünschte Testannahme, keine in den Rüstungsdaten gespeicherte Levelvoraussetzung.\n\n| Klasse | Abwehr ${anchorLevel}/R${anchorRank} | X | ${comparisonHeaders} |\n| --- | ---: | ---: | ${comparisonPoints.map(()=>'---:').join(' | ')} |\n`;
for(const r of rows)md+=`| ${r.name} | ${f(r.anchorTotal)} | ${f(r.divisor)} | ${comparisonPoints.map(check=>f(r.points.find(p=>p.rank===check.rank).effectiveLevel)).join(' | ')} |\n`;
md+='\nDie letzten sechs Spalten zeigen das errechnete Rüstungslevel, nicht die Abwehr. R1 auf Level 1 bleibt eine gesonderte Startausnahme. Skills/Buffs können anders skalieren und müssen separat geprüft werden.\n';

md+='\n## Rüstungssummen aus dem Anker hochgerechnet\n\nNur direkte P-Abwehr der fünf Teile; je Zelle aktuell → gerundetes Ziel. Klassenbasis und Levelbeitrag werden vom Ziel-Gesamtwert abgezogen. R1 bleibt eine Startausnahme und erhält hier keinen Änderungsvorschlag.\n\n| Klasse | R1 aktuell | R2 / 20 | R3 / 40 | R4 / 60 | R5 / 80 | R6 / 100 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${r.points.find(p=>p.rank===1).armorDefense} | ${comparisonPoints.filter(p=>p.rank>1).map(check=>{const p=r.points.find(p=>p.rank===check.rank);return p.armorDefense+' → '+p.roundedTargetArmor;}).join(' | ')} |\n`;
for(const r of rows){
 md+=`\n## ${r.name}\n\nX = ${f(r.anchorTotal)} / ${anchorLevel} = ${f(r.divisor)} (intern ungerundet).\n\n| Level | Rang | Basis + Level | Rüstung aktuell | Gesamt | Rüstungslevel | Abweichung Level | Ziel Rüstung gerundet | Änderung Rüstung |\n| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
 for(const p of r.points)md+=`| ${p.level} | R${p.rank} | ${f(p.nakedDefense)} | ${p.armorDefense} | ${f(p.total)} | ${f(p.effectiveLevel)} | ${f(p.levelDeviation)} | ${p.roundedTargetArmor} | ${p.armorChange>0?'+':''}${p.armorChange} |\n`;
}
md+='\nZielwerte sind Rechenvorschläge, keine Änderungen. Das R1-Ziel ist wegen der erlaubten Startausnahme kein Anpassungsvorschlag. Rundung der Rüstung auf ganze Summen führt zu kleinen verbleibenden Levelabweichungen.\n';
await fs.writeFile(`data/balancing/armor-level-progression${outputSuffix}.json`,JSON.stringify(report,null,2)+'\n');
await fs.writeFile(`docs/balancing/armor-level-progression${outputSuffix}.md`,md);
console.log(JSON.stringify({classes:rows.length,verifiedSets:armor.sets.length,anchor:report.anchor,summary},null,2));
