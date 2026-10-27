import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { conversionDelta } from '../services/timedDamageSimulation.js';
import { playerArmorReduction, monsterArmorReduction } from '../services/combatDefense.js';

const paths = ['data/balancing/class-baselines.json', 'data/balancing/attribute-model.json',
  'data/balancing/armor-parts.json', 'data/creatures/world-variant-preview.json',
  'data/balancing/level-one-character-reference.json', 'services/combatDefense.js'];
const text = await Promise.all(paths.map(p => fs.readFile(p, 'utf8')));
const [baselines, model, armor, world, names] = text.slice(0, 5).map(JSON.parse);
const aliases = { adventurer: 'Adventure', butcher: 'Butcher', druid: 'Druid', gladiator: 'Gladiator', healer: 'Healer', herbalist: 'Kräuterkundler', hunter: 'Archer', knight: 'Tank', luminet: 'Lightmage', ritualist: 'Bloodmage', shaman: 'Shamane', summoner: 'Seelenjäger', villian: 'Villain' };
const levelOne = baselines.classes.map(c => {
  const r = playerArmorReduction(c.baseStats.physicalDefense, 1);
  return { key: c.key, name: names.rows.find(r => r.key === c.key).name,
    health: c.baseStats.maxHealth, defense: c.baseStats.physicalDefense, physicalReduction: r,
    probes: [10.55, 26.37, 37].map(attack => ({ attack, damagePerHit: attack * (1 - r),
      fractionOfMaxHealthPerHit: attack * (1 - r) / c.baseStats.maxHealth,
      hitsToDefeat: Math.ceil(c.baseStats.maxHealth / (attack * (1 - r))) })) };
});
assert.ok(levelOne.every(r => r.probes.every(p => p.damagePerHit > 0)));
const monsterRows = world.variants.filter(v => ['world-gray-wolf-pup', 'world-gray-wolf-young', 'world-gray-wolf', 'world-grim-forest-wolf'].includes(v.key))
  .map(v => { const s = v.levels.find(l => l.level === 1).stats; return { key: v.key, name: v.name,
    health: s.maxHealth, physicalAttack: s.physicalAttack, physicalDefense: s.physicalDefense,
    physicalReductionAgainstLevel1: monsterArmorReduction(s.physicalDefense, 1) }; });
// Illustrative earliest-drop loadout, not guaranteed drops or final spawn rules.
const unlocks = { gloves: 3, boots: 5, helmet: 8, pants: 11, chest: 13 };
const checkpoints = [];
for (const c of baselines.classes) for (const level of [1, 3, 5, 8, 10, 13, 15]) {
  const stats = { ...c.baseStats };
  for (const attribute of ['vitality', 'strength', 'intelligence', 'wisdom'])
    for (const [stat, delta] of Object.entries(conversionDelta(model, c.key, attribute, level - 1))) stats[stat] = (stats[stat] ?? 0) + delta;
  const parts = armor.parts.filter(p => p.sourceClass === aliases[c.key] && p.rank === 1 && level >= unlocks[p.slot]);
  const added = parts.reduce((n, p) => n + Math.round(p.raw.physicalDefense * 100), 0) / 100;
  stats.physicalDefense += added;
  const reduction = playerArmorReduction(stats.physicalDefense, level);
  const existingGrowthAttack = 37 * 1.04 ** (level - 1);
  checkpoints.push({ key: c.key, name: names.rows.find(r => r.key === c.key).name, level,
    parts: parts.map(p => p.slot), armorDefense: added, maxHealth: stats.maxHealth,
    totalPhysicalDefense: stats.physicalDefense, physicalReduction: reduction,
    illustrativeMonsterAttack: existingGrowthAttack, damagePerHit: existingGrowthAttack * (1 - reduction),
    hitsToDefeat: Math.ceil(stats.maxHealth / (existingGrowthAttack * (1 - reduction))) });
}
const assumptions = [
  'Nur lesende Analyse; keine Monster-, Spieler- oder Ausrüstungswerte geändert.',
  'Level 1 ohne Rüstung, Schild, Skills, Buffs oder Pets. Treffer sind physisch, treffen garantiert und kriten nicht. Treffer bis zum Tod ohne Heilung/Regeneration. Keine Aussage über Kampfdauer, da verbindliche Monster-Angriffsintervalle noch fehlen.',
  '37 Angriff ist eine Prüfzahl des Benutzers, kein bestätigter Monster-Zielwert. Die Werte 10,55 und 26,37 sind gerundete Vergleichswerte des aktuellen Grauwolf-Welpen beziehungsweise erwachsenen Grauwolfs auf Level 1.',
  'Die Levelkurvenprobe erhöht die bisherigen Attribute gemäß existierender Klassenumrechnung. Keine noch nicht zugeordneten Startattribute werden zusätzlich erfunden. Frühe Skills und Passive sind nicht enthalten.',
  'Für die Kurvenprobe wird ein hypothetischer Gegner mit 37 Startangriff und der vorhandenen +4-%-Angriffskurve geprüft. Er ist keine neu angelegte Kreatur.',
  'Frühestmögliche R1-Fundprobe: Armschutz ab 3, Schuhe ab 5, Helm ab 8, Hose ab 11, Brust ab 13. Spätere Teilzuordnungen/Dropzeitpunkte sind illustrative Annahmen innerhalb der besprochenen Bereiche, keine garantierten Funde.',
  'Die Monster-Abwehrprüfung verwendet die unveränderte aktuelle Formel ohne Penetration. Einige aktuelle auf Level 1 zurückskalierte erwachsene Varianten erreichen damit 100 % Schadensreduktion. Vor einem endgültigen Zwei-Wege-Kampftest muss der verwendete Starter-Gegnertyp beziehungsweise seine Abwehrkurve geklärt werden.',
];
const report = { generatedAt: new Date().toISOString(), status: 'analysisOnlyNotApplied', assumptions,
  inputHashes: Object.fromEntries(paths.map((p, i) => [p, createHash('sha256').update(text[i]).digest('hex')])),
  levelOne, monsterRows, illustrativeDropUnlocks: unlocks, checkpoints };
await fs.writeFile('data/balancing/starter-monster-balance-analysis.json', JSON.stringify(report, null, 2) + '\n');
const f = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2 });
let md = '# Einstieg: Monsterangriff und Spielerabwehr, Level 1–15\n\n' + assumptions.map(a => '- ' + a).join('\n')
  + '\n\n## Physische Treffer gegen ungerüstete Level-1-Klassen\n\n| Klasse | Leben | P-DEF | Reduktion | Treffer bei 10,55 Angriff | Treffer bei 26,37 Angriff | Treffer bei 37 Angriff | Treffer bis Tod bei 37 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for (const r of levelOne) md += `| ${r.name} | ${r.health} | ${r.defense} | ${f(r.physicalReduction * 100)} % | ${r.probes.map(p => f(p.damagePerHit)).join(' | ')} | ${r.probes[2].hitsToDefeat} |\n`;
md += '\n## Vorhandene Level-1-Wolfvarianten\n\n| Variante | Leben | P-ATK | P-DEF | Reduktion gegen Level 1 |\n| --- | ---: | ---: | ---: | ---: |\n';
for (const r of monsterRows) md += `| ${r.name} | ${r.health} | ${f(r.physicalAttack)} | ${f(r.physicalDefense)} | ${f(r.physicalReductionAgainstLevel1 * 100)} % |\n`;
md += '\n## Kurvenprobe: Startangriff 37, danach +4 % je Level\n\n| Klasse | Level | R1-Teile | Leben | P-DEF gesamt | Monsterangriff | Schaden pro Treffer | Treffer bis Tod |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for (const r of checkpoints) md += `| ${r.name} | ${r.level} | ${r.parts.length} | ${f(r.maxHealth)} | ${f(r.totalPhysicalDefense)} | ${f(r.illustrativeMonsterAttack)} | ${f(r.damagePerHit)} | ${r.hitsToDefeat} |\n`;
md += '\n## Einordnung\n\nDie Spielerabwehr reduziert Schaden prozentual und wird nicht vom Angriff abgezogen. Ein Gegner benötigt deshalb keinen Angriff von 37, um eine Abwehr von beispielsweise 11 zu überwinden. Bereits die vorhandenen Welpen verursachen positiven Schaden. 37 erhöht besonders die Belastung physisch empfindlicher Klassen.\n\nEin stärkeres frühes Monsterwachstum ist nicht allein deshalb nötig, weil Ausgangswerte klein sind. Entscheidend sind die Veränderungen von Spielerleben, Angriffsleistung, Rüstung, Skillfreischaltungen und gewünschter Kampfdauer. Zuerst eine konkrete Startervariante und Zielbelastung abstimmen; dann gemeinsame Stützstellen auf Level 1, 5, 10 und 15 wählen. Bis Level 15 möglichst sanfter Einstieg, ab Level 15 bewusst anspruchsvoller.\n';
await fs.writeFile('docs/balancing/starter-monster-balance-analysis.md', md);
console.log(JSON.stringify({ levelOne: levelOne.filter(r => ['knight', 'gladiator', 'butcher', 'villian', 'healer'].includes(r.key)),
  monsterRows, sampleLevel15: checkpoints.filter(r => r.level === 15 && ['knight', 'butcher', 'healer'].includes(r.key)) }, null, 2));
