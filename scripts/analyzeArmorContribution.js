import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [baselines,comparison,armor]=await Promise.all([
  'data/balancing/class-baselines.json','data/balancing/class-comparison-level60.json','data/balancing/armor-parts.json'
].map(read));
const classNames={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const fields=['physicalDefense','magicalDefense'];
const metrics=(own,gear)=>({own,armor:gear,total:own+gear,gainPercent:100*gear/own,armorSharePercent:100*gear/(own+gear)});
const rows=[];
for(const c of baselines.classes){
  const eq=comparison.rows.find(r=>r.key===c.key);
  const passives=comparison.passiveRows.filter(r=>r.key===c.key);
  assert.ok(eq&&passives.length);
  for(const f of fields) for(const p of passives) assert.ok(Math.abs(p.stats[f]-passives[0].stats[f])<1e-8,'Weapon variants change defense: '+c.key);
  const r1=armor.sets.find(s=>s.name===classNames[c.key]&&s.rank===1);
  const r6=armor.sets.find(s=>s.name===classNames[c.key]&&s.rank===6);
  const row={key:c.key,name:eq.name,rank1:{},rank6:{},rank6WithoutPassives:{},rank6WeaponContribution:{}};
  for(const f of fields){
    const weapon=eq.equipped[f]-eq.base[f]-r6.raw[f];
    const own=passives[0].stats[f]-r6.raw[f]-weapon;
    assert.ok(own>0);
    assert.ok(Math.abs(own+r6.raw[f]+weapon-passives[0].stats[f])<1e-8);
    row.rank1[f]=metrics(c.baseStats[f],r1.raw[f]);
    row.rank6[f]=metrics(own,r6.raw[f]);
    row.rank6WithoutPassives[f]=metrics(eq.base[f],r6.raw[f]);
    row.rank6WeaponContribution[f]=weapon;
  }
  rows.push(row);
}
const assumptions={rank1:'R1 armor on Level 1 starting base defense; no learned passives, no weapons. R1 is a rank, not a confirmed single character-level mapping. Later levels within R1 have higher intrinsic defense.',rank6:'Level 60 current comparison, permanent passives at comparison ranks; no weapons, armor or active buffs in own-defense column. Weapon contribution is removed separately; both ritualist weapon variants have identical defense.',excluded:'Cloaks (unassigned values), future bonus slots and set bonuses, jewelry, stones, upgrades, self/group buffs.',meaning:'Ratios compare defense points; they are not damage reduction percentages. No mitigation or incoming-damage simulation is performed.'};
const report={generatedAt:new Date().toISOString(),assumptions,rows};
await fs.writeFile('data/balancing/armor-contribution.json',JSON.stringify(report,null,2)+'\n');
const fmt=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Beitrag der Rüstung – Rang 1 und Rang 6\n\nR1: Start auf Level 1, ohne erlernte Passive und ohne Waffen. R6: bestehendes Level-60-Szenario inklusive permanenter Passiver, ohne Waffen und ohne aktive Buffs. Die Level unterscheiden sich absichtlich; R1 umfasst möglicherweise weitere Charakterlevel, die hier nicht vorweggenommen werden.\n\n„Eigen“ enthält keine Ausrüstungsbeiträge. Beim R6-Vergleich wurden zusätzlich die Waffenbeiträge (einschließlich Schild und Attribute) aus der bestehenden Vergleichsrechnung entfernt. Beim Ritualisten stimmen beide Waffenvarianten in den Abwehrwerten überein. Alle fünf Rüstungsteile sind enthalten; Umhänge, künftige Zusatzwerte und Setboni fehlen noch. Die Prozentangabe ist der Zuwachs an Abwehrpunkten, keine Schadensreduktion.\n\n';
for(const [key,label]of [['rank1','Rang 1 – Start Level 1'],['rank6','Rang 6 – Level 60 inklusive permanenter Passiver'],['rank6WithoutPassives','Rang 6 – Level 60 ohne Passive, als zusätzliche Referenz']]){
 md+=`## ${label}\n\n| Klasse | Eigen P | Rüstung P | Gesamt P | Zuwachs P | Anteil Rüstung P | Eigen M | Rüstung M | Gesamt M | Zuwachs M | Anteil Rüstung M |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
 for(const r of rows) md+=`| ${r.name} | ${fields.map(f=>{const v=r[key][f];return `${fmt(v.own)} | ${fmt(v.armor)} | ${fmt(v.total)} | ${fmt(v.gainPercent)} % | ${fmt(v.armorSharePercent)} %`;}).join(' | ')} |\n`;
 md+='\n';
}
await fs.writeFile('docs/balancing/armor-contribution.md',md);
console.log(JSON.stringify(rows.map(r=>({name:r.name,r1:fields.map(f=>r.rank1[f]),r6:fields.map(f=>r.rank6[f])})),null,2));
