import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [comparison,armor,model,baselines,growth]=await Promise.all(['data/balancing/class-comparison-level60.json','data/balancing/armor-parts.json','data/balancing/attribute-model.json','data/balancing/class-baselines.json','data/balancing/class-base-growth.json'].map(read));
// Refresh only the two affected defense columns of the older growth reference.
for(const row of growth.classes){
 const base=baselines.classes.find(c=>c.key===row.key).baseStats;
 for(const level of row.levels)for(const [attribute,target,mods]of [['vitality','physicalDefense',model.vitalityClassModifiers],['wisdom','magicalDefense',model.wisdomClassModifiers]]){
  const factor=model.conversions.find(c=>c.attribute===attribute&&c.target===target).amountPerPoint;
  const multiplier=mods?.classTargetMultipliers?.[row.key]?.[target]??mods?.classMultipliers?.[row.key]??1;
  level.stats[target]=base[target]+level.attributeGain[attribute]*factor*multiplier;
 }
}
growth.defenseConversionStatus='Updated to current 1.2 factors and retained class modifiers';
await fs.writeFile('data/balancing/class-base-growth.json',JSON.stringify(growth,null,2)+'\n');
const rows=comparison.rows.map(c=>{
 const p=comparison.passiveRows.find(r=>r.key===c.key);
 const full=c.key==='ritualist'?comparison.passiveRows.find(r=>r.key===c.key&&r.includedSkills.includes(120)):undefined;
 return {key:c.key,name:c.name,physicalAttack:p.stats.physicalAttack,magicalAttack:p.stats.magicalAttack,...(full?{magicalAttackFullSouls:full.stats.magicalAttack}:{}),physicalDefense:p.stats.physicalDefense,magicalDefense:p.stats.magicalDefense};
});
assert.equal(rows.length,13);
const result={generatedAt:new Date().toISOString(),status:'appliedAndVerified',level:60,rank:6,upgrade:0,rows,
 armor:{classRankSets:armor.sets.length,parts:armor.parts.length,cloaks:armor.cloaks.length,scale:armor.defenseScale,rank6Targets:armor.rank6Targets},
 factors:{vitalityPhysicalDefense:1.2,wisdomMagicalDefense:1.2,classModifiers:'unchanged'},
 assumptions:'Weapons including knight shield, five armor parts, permanent passives. No active buffs, unassigned cloak values, future armor bonuses, jewelry, stones, upgrades or set bonuses. Ritualist soul-reserve range shown; combat states such as Burn Out excluded.'};
await fs.writeFile('data/balancing/armor-rebalance-result.json',JSON.stringify(result,null,2)+'\n');
const f=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Klassenwerte nach der Rüstungsüberarbeitung\n\nÜbernommen: alle 78 Klassen-Rang-Kombinationen mit dem Faktor 354/554, ganzzahlig verteilte Einzelteile. Vita → P-Abwehr und Willenskraft → M-Abwehr jeweils 1,2, Klassenboni unverändert. Umhänge erhalten später zusätzliche Werte; derzeit keine Abwehr zugewiesen.\n\nLevel 60, Rang 6, Waffen und Rüstung auf +0, inklusive permanenter Passiver und Ritter-Schild. Ohne aktive Buffs, Schmuck, Steine, künftige Zusatzwerte und Setboni. Rüstungen liegen als lokale Definitionen vor; Attributumrechnungen sind auch in den 13 Datenbankklassenvorlagen gespeichert und geprüft.\n\n| Klasse | P-Angriff | M-Angriff | P-Abwehr | M-Abwehr |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${f(r.physicalAttack)} | ${f(r.magicalAttack)}${r.magicalAttackFullSouls!==undefined?'–'+f(r.magicalAttackFullSouls):''} | ${f(r.physicalDefense)} | ${f(r.magicalDefense)} |\n`;
md+='\nRitualist: leerer bis voller Seelenspeicher. Kampfzustände wie Ausbrennen sind hier ausgeschlossen. Angriffswerte bleiben gegenüber dem vorherigen Vergleich unverändert.\n';
md=md.replace('ganzzahlig verteilte Einzelteile.','ganzzahlig verteilte Einzelteile. Danach individuelle Kürzungen: Gladiator R6 −100 M-Abwehr, Butcher −50 M-Abwehr und Abenteurer je −25 P-/M-Abwehr, proportional auf die unteren Ränge übertragen.');
if(armor.databaseManifest)md=md.replace('Rüstungen liegen als lokale Definitionen vor; Attributumrechnungen sind auch in den 13 Datenbankklassenvorlagen gespeichert und geprüft.','Rüstungsteile, Umhangentwürfe und Setzuordnungen sind in MongoDB gespeichert und gegen die lokalen Definitionen geprüft. Attributumrechnungen sind ebenfalls in den 13 Datenbankklassenvorlagen gespeichert und geprüft.');
await fs.writeFile('docs/balancing/armor-rebalance-result.md',md);
console.log(md);
