import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [comparison,model,armor]=await Promise.all(['data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/armor-parts.json'].map(read));
const selected=['luminet','shaman','adventurer','knight','healer'];
const armorClass={luminet:'Lightmage',shaman:'Shamane',adventurer:'Adventure',knight:'Tank',healer:'Healer'};
const rules=[{attribute:'vitality',target:'physicalDefense',modifiers:model.vitalityClassModifiers},{attribute:'wisdom',target:'magicalDefense',modifiers:model.wisdomClassModifiers}];
for(const rule of rules)assert.equal(model.conversions.find(c=>c.attribute===rule.attribute&&c.target===rule.target).amountPerPoint,2);
const variants=[{name:'Aktuell 2,0',factor:2,armorReduction:0},{name:'Faktor 1,3',factor:1.3,armorReduction:0},{name:'1,3 und Rüstung −100 je Abwehrseite',factor:1.3,armorReduction:100}];
const rows=selected.map(key=>{
 const pre=comparison.passiveRows.find(r=>r.key===key);
 assert.ok(pre);
 const set=armor.sets.find(s=>s.name===armorClass[key]&&s.rank===6);
 const factors=Object.fromEntries(rules.map(rule=>[rule.attribute,rule.modifiers?.classTargetMultipliers?.[key]?.[rule.target]??rule.modifiers?.classMultipliers?.[key]??1]));
 const scenarios=variants.map(variant=>{
  const result={...variant,physicalAttack:pre.stats.physicalAttack,magicalAttack:pre.stats.magicalAttack};
  for(const rule of rules){
   const amount=pre.knownAttributes[rule.attribute]??0;
   assert.ok(set.raw[rule.target]>=variant.armorReduction);
   result[rule.target]=pre.stats[rule.target]+amount*(variant.factor-2)*factors[rule.attribute]-variant.armorReduction;
   if(variant.factor===2)assert.ok(Math.abs(result[rule.target]-pre.stats[rule.target])<1e-8);
  }
  return result;
 });
 for(const field of ['physicalDefense','magicalDefense']){
  assert.ok(scenarios[0][field]>scenarios[1][field]);
  assert.ok(Math.abs(scenarios[1][field]-scenarios[2][field]-100)<1e-8);
 }
 return {key,name:comparison.rows.find(r=>r.key===key).name,attributes:pre.knownAttributes,classMultipliers:factors,scenarios};
});
const assumptions='Hypothetical only. Level 60, R6, +0 weapons including knight shield, five armor parts and permanent passives; no active buffs. Base conversion factors for Vitality to physical defense and Wisdom to magical defense changed from 2 to 1.3, retaining class bonuses. Final scenario subtracts 100 direct armor physical defense AND 100 direct armor magical defense per complete five-part loadout, not per item and not from shield. Attack and all other stat conversions unchanged. No damage mitigation simulation.';
await fs.writeFile('data/balancing/dual-defense-sensitivity.json',JSON.stringify({generatedAt:new Date().toISOString(),assumptions,rows},null,2)+'\n');
const f=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Vita und Willenskraft – Abwehrfaktoren im Vergleich\n\nReine Vergleichsrechnung: keine Spielwerte verändert. Level 60, Rang 6, Waffen und Rüstung auf +0, permanente Passive, ohne aktive Buffs und ohne Schmuck, Umhangwerte oder künftige Boni. Schild des Ritters ist enthalten.\n\nBeide Grundfaktoren werden von 2,0 auf 1,3 reduziert. Klassenboni bleiben bestehen: Beim Ritter wird für beide Abwehrumrechnungen weiterhin mit 1,05 multipliziert. Stärke-/Intelligenzumrechnung, Leben, Mana und Regeneration bleiben unverändert.\n\n„−100“ bedeutet zusätzlich 100 direkte P-Abwehr **und** 100 direkte M-Abwehr weniger aus dem kompletten Rüstungsumfang, nicht je Teil. Schild und Waffen bleiben unverändert.\n\n| Klasse | Variante | P-Angriff | P-Abwehr | M-Angriff | M-Abwehr |\n| --- | --- | ---: | ---: | ---: | ---: |\n';
for(const row of rows)for(const s of row.scenarios)md+=`| ${row.name} | ${s.name} | ${f(s.physicalAttack)} | ${f(s.physicalDefense)} | ${f(s.magicalAttack)} | ${f(s.magicalDefense)} |\n`;
await fs.writeFile('docs/balancing/dual-defense-sensitivity.md',md);
console.log(md);
