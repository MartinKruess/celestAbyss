import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { resolveCreatureTemplate } from '../services/creatureTemplate.js';
import { conversionDelta } from '../services/timedDamageSimulation.js';
import { playerArmorReduction, monsterArmorReduction } from '../services/combatDefense.js';
import { autoAttackInterval } from '../services/attackSpeed.js';
import { starterEncounter } from '../services/starterEncounter.js';

const paths = ['data/creatures/base-creature.json', 'data/creatures/world-reference-level1.json',
  'data/creatures/world-variant-templates.json', 'data/creatures/family-combat-design.json',
  'data/balancing/class-baselines.json', 'data/balancing/attribute-model.json',
  'data/balancing/ranked-equipment.json', 'data/balancing/armor-parts.json',
  'services/starterEncounter.js', 'services/combatDefense.js', 'services/attackSpeed.js', 'scripts/simulateHealerStarterRoute.js'];
const texts = await Promise.all(paths.map(p => fs.readFile(p, 'utf8')));
const [base, reference, world, families, baselines, model, equipment, armor] = texts.slice(0, 8).map(JSON.parse);
const templates = new Map([base, reference, ...world.templates].map(t => [t.key, t]));
function wolf(key, level) {
  const layers = []; let current = templates.get(key);
  while (current.key !== base.key) { layers.unshift(current); current = templates.get(current.parentKey); assert.ok(current); }
  return resolveCreatureTemplate(base, layers, level).stats;
}
const growth = world.templates.find(t => t.key === 'world-growth-draft').levelGrowth.statFactors;
const goblinDesign = families.families.find(f => f.key === 'goblins').statDesign;
assert.equal(goblinDesign.referenceLevel, 1);
function goblin(level) {
  const stats = wolf('world-gray-wolf', level); // Explicit HP-only probe assumption.
  const def = goblinDesign.forestDefenseOverrides.warrior;
  return { ...stats, physicalAttack: goblinDesign.physicalAttackByHabitat.forest * growth.physicalAttack ** (level - 1),
    physicalDefense: def.physicalDefense * growth.physicalDefense ** (level - 1),
    magicalDefense: def.magicalDefense * growth.magicalDefense ** (level - 1) };
}
const baseline = baselines.classes.find(c => c.key === 'healer').baseStats;
const weapon = equipment.weapons.find(w => w.name === 'Wand' && w.rank === 1);
const arms = armor.parts.find(p => p.sourceClass === 'Healer' && p.rank === 1 && p.slot === 'gloves');
function healer(level) {
  const stats = { ...baseline };
  for (const attr of ['vitality', 'strength', 'intelligence', 'wisdom'])
    for (const [stat, value] of Object.entries(conversionDelta(model, 'healer', attr, level - 1))) stats[stat] = (stats[stat] ?? 0) + value;
  stats.magicalAttack += weapon.raw.find(b => b.label === 'M.Ang').value;
  stats.attackSpeed += weapon.raw.find(b => b.label === 'ATK Speed').value / 100;
  return stats;
}
const route = [
  ['Welpe', 1, 1, 'pup'], ['Jungtier', 2, 2, 'young'], ['Grauwolf', 3, 2, 'wolf'],
  ['Kobold', 3, 3, 'goblin'], ['Kobold', 4, 4, 'goblin'], ['Kobold', 5, 4, 'goblin'],
  ['Grauwolf', 5, 5, 'wolf'], ['Grauwolf', 6, 6, 'wolf'], ['Grauwolf', 7, 6, 'wolf'],
  ['Kobold', 8, 7, 'goblin'], ['Grauwolf', 8, 7, 'wolf'],
  ['Grauwolf', 9, 8, 'wolf'], ['Kobold', 9, 8, 'goblin'], ['Kobold', 10, 8, 'goblin'],
  ['Grauwolf', 10, 9, 'wolf'],
];
function probe(enemy, enemyLevel, playerLevel, withArms, monsterAttackOverride) {
  const player = healer(playerLevel);
  if (withArms) for (const field of ['physicalDefense', 'magicalDefense']) player[field] += arms.raw[field];
  const reduction = playerArmorReduction(player.physicalDefense, enemyLevel);
  const enemyReduction = monsterArmorReduction(enemy.magicalDefense, playerLevel);
  const enemyAttack = monsterAttackOverride ?? enemy.physicalAttack;
  const incoming = enemyAttack * (1 - reduction), outgoing = player.magicalAttack * (1 - enemyReduction);
  const playerInterval = autoAttackInterval(player.attackSpeed, 1.1), enemyInterval = 1 / .7;
  return { player, playerReduction: reduction, enemyReduction, enemyAttack, incoming, outgoing, playerInterval, enemyInterval,
    combat: starterEncounter({ playerHealth: player.maxHealth, enemyHealth: enemy.maxHealth, playerDamage: outgoing,
      enemyDamage: incoming, playerInterval, enemyInterval }) };
}
const rows = route.map(([name, enemyLevel, playerLevel, type], index) => {
  const enemy = type === 'goblin' ? goblin(enemyLevel) : wolf(type === 'pup' ? 'world-gray-wolf-pup' : type === 'young' ? 'world-gray-wolf-young' : 'world-gray-wolf', enemyLevel);
  const withoutArms = probe(enemy, enemyLevel, playerLevel, false), withArms = probe(enemy, enemyLevel, playerLevel, true);
  // Illustrative successful first goblin drop, equipped after that encounter.
  const hasArms = index > 3;
  const current = hasArms ? withArms : withoutArms;
  const attack37 = probe(enemy, enemyLevel, playerLevel, hasArms, 37);
  return { name, enemyLevel, playerLevel, type, enemy, goblinHealthIsAssumed: type === 'goblin', hasArms,
    current, withoutArms, withArms, sameStatsWith37Attack: attack37,
    playerLevelSensitivity: [Math.max(1, playerLevel - 1), playerLevel, playerLevel + 1].map(l => ({ playerLevel: l, ...probe(enemy, enemyLevel, l, hasArms) })) };
});
assert.equal(rows.length, 15);
assert.ok(rows.every(r => Number.isFinite(r.current.incoming) && r.current.incoming > 0));
const assumptions = [
  'Probe auf Grundlage des groben Benutzerverlaufs, keine berechnete XP-Kurve. Eine Zeile ist eine eigenständige Begegnung; zusätzliche Wolfs-Kills für Levelaufstiege sind nicht als exakte XP-Anzahl modelliert.',
  'Alle Zeilen starten mit vollem Leben. Keine passive HP-Regeneration im Kampf, Heilung, aktiven Schadensskills, Begleiter, Buffs, Crits, Ausweichen, Bewegung, Aggrogruppen oder Verbrauchsgüter. Frühe Skillfreischaltungen und erlernte Stufen bleiben offen. Ergebnisse sind eine reine Auto-Attack-Referenz.',
  'Heiler mit aktuellem R1-Intelligenzstab ab Level 1 (+25 M-ATK, −20 Tempopunkte), bestehenden Level-1-Werten und normalen Attributzuwächsen. Keine unbekannten Startattribute doppelt addiert. Grundfrequenz 1,1; mit Waffenabzug 0,88 Angriffe/s.',
  'Monsterfrequenz vorläufig 0,7 Angriffe/s (angenommene Grundfrequenz 1 × gespeicherter Tempofaktor 0,7), keine bestätigte Animationsfrequenz. Beide Seiten treffen erstmals nach ihrem eigenen Angriffsintervall; zeitgleiche Treffer zählen beide. Keine Monster-HP-Regeneration im Kampf.',
  'Wolfwerte aus aktuellen aufgelösten World-Templates. Kobolde als normale Wald-Krieger: Angriff 24, P-DEF 8, M-DEF 5 auf Level 1, danach vorhandene +4-%-Kurve. Keine neuen Goblinwerte in die Spieldaten geschrieben.',
  'Kobold-Leben ist noch undefiniert. Ausschließlich für Kampfdauer und Gesamtlebensverlust wird das Leben eines gleichleveligen erwachsenen Grauwolfs verwendet. Schaden pro Koboldtreffer hängt nicht von dieser HP-Annahme ab.',
  `Referenz für ersten erfolgreichen Rüstungsdrop: nach dem Level-3-Kobold wird der R1-Armschutz angelegt (+${arms.raw.physicalDefense} P-DEF / +${arms.raw.magicalDefense} M-DEF). Kein Armschutzdrop durch Wölfe. Keine weiteren Funde in der Hauptprobe; Vorher/Nachher-Vergleich ist separat aufgeführt.`,
  'Der gesamte Armschutzbonus wird gegen das tatsächliche Monsterlevel ausgewertet. Bei Gegnern über dem Heilerlevel können sowohl mit als auch ohne Armschutz bereits 0 % physische Reduktion gelten.',
  'Angriff 37 wird separat als lokale Sensitivität bei sonst gleichem Gegner geprüft, nicht als neue Startzahl oder Wachstumskurve festgelegt. Pro Begegnung sind außerdem Heilerlevel −1/+1 enthalten.',
];
const report = { generatedAt: new Date().toISOString(), status: 'illustrativeAutoAttackRouteNotApplied', assumptions,
  inputHashes: Object.fromEntries(paths.map((p, i) => [p, createHash('sha256').update(texts[i]).digest('hex')])), rows };
await fs.writeFile('data/balancing/healer-starter-route.json', JSON.stringify(report, null, 2) + '\n');
const f = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2 });
let md = '# Heiler: Beispielroute gegen Wölfe und Kobolde bis Gegnerlevel 10\n\n' + assumptions.map(a => '- ' + a).join('\n')
  + '\n\n## Hauptprobe\n\nKobold-Leben und Monsterfrequenz sind Annahmen. Die Spalte Schaden/Treffer folgt den aktuellen Angriff-/Abwehrwerten; Kampfdauer und Gesamtverlust hängen zusätzlich von den Annahmen ab.\n\n'
  + '| Gegner | Gegnerlevel | Heilerlevel | Heilerleben | Armschutz | Monsterleben | Monsterangriff | Schaden/Treffer | Heilerangriffe | Gegentreffer | Dauer s | Lebensverlust | Verlust % | Ergebnis |\n'
  + '| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |\n';
for (const r of rows) { const p = r.current, c = p.combat; md += `| ${r.name} | ${r.enemyLevel} | ${r.playerLevel} | ${f(p.player.maxHealth)} | ${r.hasArms ? 'Ja' : 'Nein'} | ${r.enemy.maxHealth}${r.goblinHealthIsAssumed ? ' (Probe)' : ''} | ${f(r.enemy.physicalAttack)} | ${f(p.incoming)} | ${c.playerHits} | ${c.enemyHits} | ${f(c.durationSeconds)} | ${f(c.healthLost)} | ${f(c.healthLostPercent)} % | ${c.winner} |\n`; }
md += '\n## Eingehender Schaden pro Treffer: Armschutz und Angriff 37\n\n| Gegner | Gegnerlevel | Heilerlevel | Ohne Armschutz | Mit Armschutz | Angriff 37 im angenommenen Ausrüstungsstand |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for (const r of rows) md += `| ${r.name} | ${r.enemyLevel} | ${r.playerLevel} | ${f(r.withoutArms.incoming)} | ${f(r.withArms.incoming)} | ${f(r.sameStatsWith37Attack.incoming)} |\n`;
md += '\n## Grenzen\n\nEin kleiner Verlust in der Referenz bedeutet einen leichten einzelnen Auto-Attack-Kampf, nicht automatisch zu schwache Monster. Ohne Erholung aufeinanderfolgende Gegner, Gruppen, Fähigkeiten, veränderte Monsterfrequenz und frühe Heilerskills verändern das Ergebnis. Die Armschutz-/Waffen-/Levelwerte sind berechnet; für eine endgültige Kampfabstimmung fehlen insbesondere Koboldleben, tatsächliche Angriffsintervalle und frühe Skillstufen. Es wurden keine Spiel- oder Datenbankwerte verändert.\n';
await fs.writeFile('docs/balancing/healer-starter-route.md', md);
console.log(JSON.stringify(rows.map(r => ({ enemy: r.name, enemyLevel: r.enemyLevel, healerLevel: r.playerLevel,
  hp: r.current.player.maxHealth, arms: r.hasArms, incoming: r.current.incoming,
  enemyHits: r.current.combat.enemyHits, seconds: r.current.combat.durationSeconds,
  healthLost: r.current.combat.healthLost, lostPercent: r.current.combat.healthLostPercent, winner: r.current.combat.winner })), null, 2));
