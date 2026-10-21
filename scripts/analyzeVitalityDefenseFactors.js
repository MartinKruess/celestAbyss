import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [comparison,model]=await Promise.all(['data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json'].map(read));
const currentFactor=model.conversions.find(c=>c.attribute==='vitality'&&c.target==='physicalDefense').amountPerPoint;
assert.equal(currentFactor,2);
const factors=[2,1.8,1.6,1.4,1.3];
const rows=comparison.passiveRows.map(pre=>{
 const vitality=pre.knownAttributes.vitality??0;
 const modifiers=model.vitalityClassModifiers;
 const multiplier=modifiers?.classTargetMultipliers?.[pre.key]?.physicalDefense??modifiers?.classMultipliers?.[pre.key]??1;
 const fixedDefense=pre.stats.physicalDefense-vitality*currentFactor*multiplier;
 const scenarios=factors.map(baseFactor=>{
  const effectiveFactor=baseFactor*multiplier;
  const vitalityDefense=vitality*effectiveFactor;
  const physicalDefense=fixedDefense+vitalityDefense;
  return {baseFactor,effectiveFactor,vitalityDefense,physicalDefense,
   physicalDefenseWithHypotheticalArmorMinus100:physicalDefense-100,
   difference:physicalDefense-pre.stats.physicalDefense,
   differencePercent:100*(physicalDefense/pre.stats.physicalDefense-1),
   physicalAttack:pre.stats.physicalAttack,magicalDefense:pre.stats.magicalDefense,
   defensePerAttack:physicalDefense/pre.stats.physicalAttack};
 });
 assert.ok(Math.abs(scenarios[0].physicalDefense-pre.stats.physicalDefense)<1e-8);
 for(let i=1;i<scenarios.length;i++)assert.ok(scenarios[i].physicalDefense<=scenarios[i-1].physicalDefense);
 return {key:pre.key,name:pre.name,vitality,multiplier,fixedDefense,scenarios};
});
const assumptions='Hypothetical only. R6 Level 60, +0 equipment and permanent passives, without active buffs. Base Vitality-to-physical-defense factor varied; existing class multipliers retained. All flat armor, weapon and passive defense remains unchanged. HP, HP regeneration, attack, Wisdom and magical defense unchanged. Starting base stats are retained, not reverse-engineered. No combat damage simulation.';
await fs.writeFile('data/balancing/vitality-defense-sensitivity.json',JSON.stringify({generatedAt:new Date().toISOString(),assumptions,rows},null,2)+'\n');
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
const gladi=rows.find(r=>r.key==='gladiator');
let md='# Vitalität → P-Abwehr – hypothetische Faktoren\n\nKeine Spielwerte geändert. Level 60, Rang 6, +0-Ausrüstung und permanente Passive; ohne aktive Buffs. Klassenmodifikatoren bleiben erhalten. Leben, HP-Regeneration, Angriff, Willenskraft und M-Abwehr bleiben unverändert. Die vorhandenen Startwerte werden beibehalten, nicht rückwirkend in Startattribute zerlegt.\n\n## Gladiator\n\n114 bekannte Vitalität, Klassenmultiplikator 1,05. Unveränderlicher P-Abwehr-Anteil: 593 (554 direkte Rüstung, 30 Rüstungstraining, 9 Basis). P-Angriff: 629,36; M-Abwehr: 620.\n\n| Grundfaktor | Effektiv je Vita | P-Abwehr aus Vita | P-Abwehr gesamt | Differenz | Änderung |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const s of gladi.scenarios)md+=`| ${f(s.baseFactor)} | ${f(s.effectiveFactor)} | ${f(s.vitalityDefense)} | ${f(s.physicalDefense)} | ${f(s.difference)} | ${f(s.differencePercent)} % |\n`;
const oneThree=gladi.scenarios.find(s=>s.baseFactor===1.3);
md+=`\nZusätzliche hypothetische Variante nur für den Gladiator: Bei Grundfaktor 1,3 und zusätzlich 100 Punkten weniger direkter P-Abwehr der Rüstung ergeben sich **${f(oneThree.physicalDefenseWithHypotheticalArmorMinus100)} P-Abwehr**. Keine Rüstungsteile wurden geändert.\n`;
md+='\n## Alle Klassen und Vergleichsvarianten\n\n| Klasse | Vita | Klassenfaktor | P-Abwehr bei 2,0 | bei 1,8 | bei 1,6 | bei 1,4 | bei 1,3 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${f(r.vitality)} | ${f(r.multiplier)} | ${r.scenarios.map(s=>f(s.physicalDefense)).join(' | ')} |\n`;
await fs.writeFile('docs/balancing/vitality-defense-sensitivity.md',md);
console.log(JSON.stringify(gladi,null,2));
