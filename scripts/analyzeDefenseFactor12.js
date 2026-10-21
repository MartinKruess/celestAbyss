import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [comparison,model]=await Promise.all(['data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json'].map(read));
const factor=1.2;
const fields=[['vitality','physicalDefense',model.vitalityClassModifiers],['wisdom','magicalDefense',model.wisdomClassModifiers]];
const rows=comparison.rows.map(base=>{
 const pre=comparison.passiveRows.find(r=>r.key===base.key);
 assert.ok(pre);
 const row={key:pre.key,name:base.name,physicalAttack:pre.stats.physicalAttack,magicalAttack:pre.stats.magicalAttack};
 if(pre.key==='ritualist')row.magicalAttackWithFullSouls=comparison.passiveRows.find(r=>r.key===pre.key&&r.includedSkills.includes(120)).stats.magicalAttack;
 for(const [attribute,target,modifiers]of fields){
  const currentFactor=model.conversions.find(c=>c.attribute===attribute&&c.target===target).amountPerPoint;
  assert.equal(currentFactor,2);
  const multiplier=modifiers?.classTargetMultipliers?.[pre.key]?.[target]??modifiers?.classMultipliers?.[pre.key]??1;
  row[target]=pre.stats[target]+(pre.knownAttributes[attribute]??0)*(factor-currentFactor)*multiplier;
  assert.ok(row[target]>0&&row[target]<pre.stats[target]);
 }
 return row;
});
assert.equal(rows.length,13);
const assumptions='Hypothetical Level 60 R6, +0 weapons and armor including knight shield, permanent passives, no active buffs. Both vitality-to-physical-defense and wisdom-to-magical-defense factors 1.2 with existing class multipliers retained. No extra -100 armor reduction. Attack and all other conversions unchanged. Ritualist full-soul attack separately noted; combat states excluded.';
await fs.writeFile('data/balancing/defense-factor-12.json',JSON.stringify({generatedAt:new Date().toISOString(),factor,armorReduction:0,assumptions,rows},null,2)+'\n');
const f=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Alle Klassen – hypothetischer Abwehrfaktor 1,2\n\nLevel 60, Rang 6, +0-Waffen einschließlich Ritter-Schild und fünf Rüstungsteile. Permanente Passive, keine aktiven Buffs, keine Umhangwerte oder künftigen Zusatzwerte. **Keine zusätzliche Kürzung der direkten Rüstungsabwehr um 100.** Klassenboni bleiben erhalten; nur die beiden Abwehrumrechnungen aus Vita und Willenskraft werden mit Grundfaktor 1,2 angesetzt. Leben, Mana, Regeneration und Angriff bleiben unverändert. Keine Spielwerte geändert.\n\n| Klasse | P-Angriff | P-Abwehr | M-Angriff | M-Abwehr |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${f(r.physicalAttack)} | ${f(r.physicalDefense)} | ${f(r.magicalAttack)}${r.magicalAttackWithFullSouls!==undefined?'–'+f(r.magicalAttackWithFullSouls):''} | ${f(r.magicalDefense)} |\n`;
md+='\nRitualist: leerer bis voller Seelenspeicher; Ausbrennen und Beschwörung als Kampfzustände ausgeschlossen.\n';
await fs.writeFile('docs/balancing/defense-factor-12.md',md);
console.log(md);
