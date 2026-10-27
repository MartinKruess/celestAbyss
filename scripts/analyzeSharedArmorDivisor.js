import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const magical=process.argv.includes('--magical');
const defenseField=magical?'magicalDefense':'physicalDefense';
const attribute=magical?'wisdom':'vitality';
const suffix=magical?'-magical':'';
const paths=['data/balancing/armor-parts.json','data/balancing/class-baselines.json','data/balancing/attribute-model.json'];
const sources=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [armor,classes,model]=sources.map(s=>JSON.parse(s));
const names={adventurer:['Adventure','Abenteurer'],butcher:['Butcher','Butcher'],druid:['Druid','Druide'],gladiator:['Gladiator','Gladiator'],healer:['Healer','Heiler'],herbalist:['Kräuterkundler','Kräuterkundler'],hunter:['Archer','Jäger'],knight:['Tank','Ritter'],luminet:['Lightmage','Luminet'],ritualist:['Bloodmage','Ritualist'],shaman:['Shamane','Schamane'],summoner:['Seelenjäger','Seelenjäger'],villian:['Villain','Schurke']};
const checkpoints=[{level:1,rank:null},{level:20,rank:2},{level:40,rank:3},{level:60,rank:4},{level:80,rank:5},{level:100,rank:6}];
const median=values=>{const ordered=[...values].sort((a,b)=>a-b);assert.equal(ordered.length,13);return ordered[6];};
const rows=Object.entries(names).map(([key,[sourceClass,name]])=>{
 const base=classes.classes.find(c=>c.key===key).baseStats[defenseField];
 const mods=magical?model.wisdomClassModifiers:model.vitalityClassModifiers;
 const factor=model.conversions.find(c=>c.attribute===attribute&&c.target===defenseField).amountPerPoint*(mods?.classTargetMultipliers?.[key]?.[defenseField]??mods?.classMultipliers?.[key]??1);
 const points=checkpoints.map(({level,rank})=>{
  const set=rank===null?null:armor.sets.find(s=>s.name===sourceClass&&s.rank===rank);
  if(set){const parts=set.partIds.map(id=>armor.parts.find(p=>p.id===id));assert.equal(parts.length,5);assert.equal(parts.reduce((s,p)=>s+p.raw[defenseField],0),set.raw[defenseField]);}
  const armorDefense=set?.raw[defenseField]??0;
  const nakedDefense=base+(level-1)*factor;
  return {level,rank,baseDefense:base,levelDefense:(level-1)*factor,armorDefense,totalDefense:nakedDefense+armorDefense};
 });
 const individualDivisor=points.find(p=>p.level===60).totalDefense/60;
 for(const point of points){
  point.individualEffectiveLevel=point.totalDefense/individualDivisor;
  if(point.rank!==null){
   point.targetArmor=Math.ceil(point.level*individualDivisor-point.baseDefense-point.levelDefense-1e-9);
   point.armorCorrection=point.targetArmor-point.armorDefense;
   assert.ok((point.baseDefense+point.levelDefense+point.targetArmor)/individualDivisor>=point.level-1e-9);
  }
 }
 return {key,name,individualDivisor,points};
});
const anchorMedian=median(rows.map(r=>r.points.at(-1).totalDefense));
const divisor=anchorMedian/100;
for(const row of rows)for(const p of row.points)p.effectiveLevel=p.totalDefense/divisor;
const medians=checkpoints.map(({level,rank},i)=>{
 const defenseMedian=median(rows.map(r=>r.points[i].totalDefense));
 const effectiveLevel=defenseMedian/divisor;
 return {level,rank,defenseMedian,effectiveLevel,levelDeviation:effectiveLevel-level,relativeDeviationPercent:(effectiveLevel/level-1)*100,localMedianDivisor:defenseMedian/level};
});
assert.ok(Math.abs(medians.at(-1).effectiveLevel-100)<1e-9);
const report={status:'analysisOnlyNoGameChanges',defenseField,scope:'One shared divisor from the median across 13 equally weighted classes at level 100 with five R6 +0 armor pieces. Defense field as specified, from class operative base and +1 corresponding attribute per additional level only. Level 1 unarmored. No weapons, shield, passives, buffs, affixes, upgrades, gems or cloak.',inputHashes:Object.fromEntries(paths.map((p,i)=>[p,createHash('sha256').update(sources[i]).digest('hex')])),anchorMedian,divisor,checkpoints,rows,medians};
const f=n=>Number(n.toFixed(3)).toLocaleString('de-DE');
let md=`# ${magical?'Magische':'Physische'} Abwehr: gemeinsamer Divisor aus dem R6-Median\n\nNur Analyse, keine Spielwerte geändert. X = Median der Gesamtabwehr auf Level 100 mit R6 / 100 = ${f(anchorMedian)} / 100 = ${f(divisor)}. Jede der 13 Klassen zählt einmal. Basisabwehr + Levelzuwachs + fünf Rüstungsteile auf +0; Level 1 ohne Rüstung. Keine Waffen/Schild, Skills, Buffs, Zufallswerte, Steine oder Upgrades. Alle Klassen verwenden denselben Divisor.\n\n## Errechnete Rüstungslevel\n\n| Klasse | 1 ohne Rüstung | 20 / R2 | 40 / R3 | 60 / R4 | 80 / R5 | 100 / R6 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
for(const row of rows)md+=`| ${row.name} | ${row.points.map(p=>f(p.effectiveLevel)).join(' | ')} |\n`;
md+=`| **Median** | ${medians.map(p=>f(p.effectiveLevel)).join(' | ')} |\n\n## Medianprüfung\n\n| Level | Median Gesamtabwehr | Median Rüstungslevel | Abweichung Level | Median-Abwehr / Level |\n| ---: | ---: | ---: | ---: | ---: |\n`;
for(const p of medians)md+=`| ${p.level} | ${f(p.defenseMedian)} | ${f(p.effectiveLevel)} | ${f(p.levelDeviation)} | ${f(p.localMedianDivisor)} |\n`;
if(magical){
 md+='\n## Individuelle Prüfung mit R4 auf Level 60 als Anker\n\nJe Klasse eigener Divisor. Keine Änderungen übernommen.\n\n| Klasse | 1 ohne Rüstung | 20 / R2 | 40 / R3 | 60 / R4 | 80 / R5 | 100 / R6 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
 for(const row of rows)md+=`| ${row.name} | ${row.points.map(p=>f(p.individualEffectiveLevel)).join(' | ')} |\n`;
 md+='\n## Rechnerische magische Rüstungskorrekturen\n\nJe Zelle aktuelle Summe → aufgerundetes Ziel, damit kein Rang unter seinem Ziel liegt. Nur Vorschlag, nicht gespeichert. R1 bleibt für den Starttest unangelegt.\n\n| Klasse | R2 | R3 | R4 | R5 | R6 |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
 for(const row of rows)md+=`| ${row.name} | ${row.points.filter(p=>p.rank!==null).map(p=>p.armorDefense+' → '+p.targetArmor).join(' | ')} |\n`;
}
await fs.writeFile(`data/balancing/shared-armor-divisor${suffix}.json`,JSON.stringify(report,null,2)+'\n');
await fs.writeFile(`docs/balancing/shared-armor-divisor${suffix}.md`,md);
console.log(md);
