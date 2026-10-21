import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const comparison=await read('data/balancing/class-comparison-level60.json');
const hybrid=new Set(['druid','shaman']);
const magical=new Set(['healer','herbalist','luminet','ritualist']);
const rows=comparison.passiveRows.map(pre=>{
 const {physicalAttack,magicalAttack,physicalDefense,magicalDefense}=pre.stats;
 const role=hybrid.has(pre.key)?'hybrid':magical.has(pre.key)?'magical':'physical';
 const attack=role==='magical'?magicalAttack:physicalAttack;
 const matchingDefense=role==='magical'?magicalDefense:physicalDefense;
 const otherDefense=role==='magical'?physicalDefense:magicalDefense;
 assert.ok([physicalAttack,magicalAttack,physicalDefense,magicalDefense].every(n=>Number.isFinite(n)&&n>0));
 return {key:pre.key,name:pre.name,role,weapons:pre.weapons,
  physicalAttack,magicalAttack,physicalDefense,magicalDefense,
  physicalDefensePerPhysicalAttack:physicalDefense/physicalAttack,
  magicalDefensePerMagicalAttack:magicalDefense/magicalAttack,
  matchingDefensePerAttack:role==='hybrid'?null:matchingDefense/attack,
  matchingDefensePerOtherDefense:role==='hybrid'?null:matchingDefense/otherDefense,
  referenceMatchingDefenseAtTwoThirdsAttack:role==='hybrid'?null:attack*2/3};
});
assert.equal(new Set(rows.map(r=>r.key)).size,13);
const assumptions={level:60,rank:6,upgrade:0,included:'Current weapons including knight shield, five armor parts, permanent passive comparison contributions. Ritualist empty and full soul reserve separately.',excluded:'Active self/group buffs, combat-triggered bonuses including Ausbrennen, physical/magical skill-only damage bonuses in attack stats, cloaks, future equipment bonus slots, jewelry, stones, upgrades and set bonuses.',reference:'User discussion: matching attack:defense ~3:2; matching:other defense ~3:2, reversed physical/magical orientation for mages. These are reference ratios, not validated balance requirements. Knight defensive role and hybrids require separate interpretation.',limitations:'Defense point ratios are not damage reduction. Attack points are not DPS; attack speed, skill coefficients, mana, healing and pets are not represented. Same upgrade number does not guarantee constant total-stat ratios.'};
await fs.writeFile('data/balancing/attack-defense-ratios.json',JSON.stringify({generatedAt:new Date().toISOString(),assumptions,rows},null,2)+'\n');
const fmt=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Angriff und Abwehr – Rang 6 auf +0\n\nLevel 60, aktuelle Waffen einschließlich Ritter-Schild, fünf Rüstungsteile und permanente Passive. Ohne aktive Buffs, Schmuck, Steine, Verstärkungen, Umhangwerte, künftige Zusatzwerte und Setboni. Kampfzustände wie Ausbrennen sind ausgeschlossen; voller Seelenspeicher ist beim Ritualisten separat ausgewiesen. Reiner Skillschaden wird nicht als P-/M-Angriff addiert.\n\n## Endwerte\n\n| Klasse | P-Angriff | P-Abwehr | M-Angriff | M-Abwehr |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${fmt(r.physicalAttack)} | ${fmt(r.physicalDefense)} | ${fmt(r.magicalAttack)} | ${fmt(r.magicalDefense)} |\n`;
md+='\n## Verhältnis zur besprochenen Orientierung\n\nAngriff zu passender Abwehr 3:2 bedeutet Abwehr = 66,7 % des Angriffs. Passende zu anderer Abwehr 3:2 bedeutet Faktor 1,5. Das ist eine Orientierung; Ritter und Mischklassen müssen rollenspezifisch beurteilt werden.\n\n| Klasse | Passende Abwehr / Angriff | Passende / andere Abwehr | Abwehr bei 2/3 Angriff – reine Referenz |\n| --- | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${r.role==='hybrid'?'Mischklasse':fmt(r.matchingDefensePerAttack*100)+' %'} | ${r.role==='hybrid'?'Mischklasse':fmt(r.matchingDefensePerOtherDefense)+':1'} | ${r.referenceMatchingDefenseAtTwoThirdsAttack===null?'—':fmt(r.referenceMatchingDefenseAtTwoThirdsAttack)} |\n`;
md+='\nDie separate reine Rüstungsanalyse entfernt Waffen und Schild. Hier sind sie enthalten; die Tabellen sind deshalb nicht direkt gleichzusetzen. Die M-Abwehr einiger Magier enthält ebenfalls Waffenattribute.\n\nZahl der Opfer verwendet den aktuellen Skillwert von +3 M-Angriff je volle zehn Seelen (maximal +30). Keine Skill- oder Ausrüstungswerte wurden durch dieses Analyseskript geändert.\n\nEin identischer Upgradegrad erhält das Verhältnis nicht automatisch: Meist werden nur Teile der Gesamtwerte erhöht, mit möglicherweise unterschiedlichen Faktoren. Ein Vergleich höherer Upgradegrade benötigt die konkreten Waffen- und Rüstungsformeln.\n';
await fs.writeFile('docs/balancing/attack-defense-ratios.md',md);
console.log(JSON.stringify(rows.map(r=>({name:r.name,p:r.physicalAttack,pd:r.physicalDefense,m:r.magicalAttack,md:r.magicalDefense,defensePerAttack:r.matchingDefensePerAttack,defenseRatio:r.matchingDefensePerOtherDefense})),null,2));
