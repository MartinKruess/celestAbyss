import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { conversionDelta } from '../services/timedDamageSimulation.js';
import { playerArmorReduction, monsterArmorReduction } from '../services/combatDefense.js';
import { autoAttackInterval } from '../services/attackSpeed.js';
import { starterEncounter } from '../services/starterEncounter.js';

const paths = ['data/balancing/healer-starter-route.json', 'data/balancing/class-baselines.json',
  'data/balancing/attribute-model.json', 'data/balancing/ranked-equipment.json',
  'data/balancing/armor-parts.json', 'data/balancing/class-comparison-level60.json',
  'data/balancing/level-one-character-reference.json', 'services/starterEncounter.js',
  'services/combatDefense.js', 'services/attackSpeed.js', 'services/timedDamageSimulation.js',
  'scripts/simulateAllClassStarterRoute.js'];
const texts = await Promise.all(paths.map(p => fs.readFile(p, 'utf8')));
const [reference, baselines, model, equipment, armor, comparison, starting] = texts.slice(0, 7).map(JSON.parse);
for (const [path, expected] of Object.entries(reference.inputHashes)) {
  const hash = createHash('sha256').update(await fs.readFile(path)).digest('hex');
  assert.equal(hash, expected, `Healer reference is stale: ${path}`);
}
const aliases = { adventurer: 'Adventure', butcher: 'Butcher', druid: 'Druid', gladiator: 'Gladiator', healer: 'Healer', herbalist: 'Kräuterkundler', hunter: 'Archer', knight: 'Tank', luminet: 'Lightmage', ritualist: 'Bloodmage', shaman: 'Shamane', summoner: 'Seelenjäger', villian: 'Villain' };
const mages = new Set(['healer', 'herbalist', 'luminet', 'ritualist']);
const classes = [];
for (const baseline of baselines.classes) {
  const key = baseline.key, name = starting.rows.find(r => r.key === key).name;
  const canonicalWeapons = comparison.rows.find(r => r.key === key).weapons;
  const rows = reference.rows.map(source => {
    const player = { ...baseline.baseStats };
    for (const attr of ['vitality', 'strength', 'intelligence', 'wisdom'])
      for (const [stat, delta] of Object.entries(conversionDelta(model, key, attr, source.playerLevel - 1))) player[stat] = (player[stat] ?? 0) + delta;
    const weaponNames = source.playerLevel >= 10 && ['gladiator', 'villian'].includes(key)
      ? canonicalWeapons : canonicalWeapons.slice(0, 1);
    for (const [index, weaponName] of weaponNames.entries()) {
      const weapon = equipment.weapons.find(w => w.name === weaponName && w.rank === 1);
      assert.ok(weapon);
      const efficiency = index ? .9 : 1;
      for (const b of weapon.raw) {
        if (b.label === 'P.Ang') player.physicalAttack += b.value * efficiency;
        else if (b.label === 'M.Ang') player.magicalAttack += b.value * efficiency;
        else if (b.label === 'ATK Speed') player.attackSpeed += b.value / 100;
        else if (!['Block', 'Krit Ch.'].includes(b.label)) throw new Error(`Unexpected R1 weapon bonus ${b.label}`);
      }
    }
    const arms = armor.parts.find(p => p.sourceClass === aliases[key] && p.rank === 1 && p.slot === 'gloves');
    assert.ok(arms);
    if (source.hasArms) for (const field of ['physicalDefense', 'magicalDefense']) player[field] += arms.raw[field];
    const magical = mages.has(key), channel = magical ? 'magical' : 'physical';
    const playerReduction = playerArmorReduction(player.physicalDefense, source.enemyLevel);
    const enemyReduction = monsterArmorReduction(source.enemy[`${channel}Defense`], source.playerLevel);
    const incoming = source.enemy.physicalAttack * (1 - playerReduction);
    const outgoing = player[`${channel}Attack`] * (1 - enemyReduction);
    const baseRate = magical || ['hunter', 'summoner'].includes(key) ? 1.1 : 1.3;
    const playerInterval = autoAttackInterval(player.attackSpeed, baseRate);
    const enemyInterval = source.current.enemyInterval;
    const combat = starterEncounter({ playerHealth: player.maxHealth, enemyHealth: source.enemy.maxHealth,
      playerDamage: outgoing, enemyDamage: incoming, playerInterval, enemyInterval });
    if (key === 'healer') for (const field of ['durationSeconds', 'healthLost', 'enemyHits', 'playerHits', 'finalPlayerHealth'])
      assert.ok(Math.abs(combat[field] - source.current.combat[field]) < 1e-8, `Healer control ${field}`);
    return { enemy: source.name === 'Kobold' ? 'Goblin' : source.name, enemyLevel: source.enemyLevel,
      playerLevel: source.playerLevel, enemyStats: source.enemy, goblinHealthIsAssumed: source.goblinHealthIsAssumed,
      hasArms: source.hasArms, weapons: weaponNames, player, channel, attacksPerSecond: 1 / playerInterval,
      incoming, outgoing, playerReduction, enemyReduction, combat };
  });
  const worst = rows.reduce((a, b) => a.combat.healthLostPercent >= b.combat.healthLostPercent ? a : b);
  const summary = { wins: rows.filter(r => r.combat.winner === 'player').length,
    encounters: rows.length, maximumLossPercent: worst.combat.healthLostPercent,
    worstEnemy: worst.enemy, worstEnemyLevel: worst.enemyLevel, worstPlayerLevel: worst.playerLevel,
    averageIndependentLossPercent: rows.reduce((n, r) => n + r.combat.healthLostPercent, 0) / rows.length,
    finalWolfLossPercent: rows.at(-1).combat.healthLostPercent,
    goblin10LossPercent: rows.find(r => r.enemy === 'Goblin' && r.enemyLevel === 10).combat.healthLostPercent };
  classes.push({ key, name, summary, rows });
}
assert.equal(classes.length, 13);
assert.ok(classes.every(c => c.rows.length === 15));
const assumptions = [...reference.assumptions.filter(a => !a.startsWith('Heiler mit') && !a.startsWith('Referenz für ersten') && !a.startsWith('Angriff 37')),
  'Alle 13 vorhandenen Klassen mit ihrer aktuellen einzelnen R1-Klassenwaffe ab Level 1. Ritter ohne Schild; Schurke und Gladiator vor Level 10 ohne Nebenhand. Die Route endet auf Spielerlevel 9, also bleibt die bestätigte zweite Waffe ab Level 10 hier noch ohne Wirkung. Schamanen-Nebenhandfreischaltung wird nicht erfunden.',
  'Gleiche Gegner und Spielerlevel wie in der Heilerprobe, keine getrennte XP-Kurve je Klasse. Jeder Kampf beginnt mit vollem Leben. Nach dem ersten Level-3-Goblin wird genau der klassenspezifische R1-Armschutz angelegt; keine weiteren Rüstungsteile angenommen.',
  'Nahkampf-Grundfrequenz 1,3, Fernkampf/Magie 1,1; vollständige jeweilige R1-Waffentempoabzüge enthalten. Magier verwenden M-Angriff und M-Abwehr des Ziels, alle anderen normale physische Auto-Attacks gegen P-Abwehr. Erde/Feuer/Wasser/Wind-Skills, Heilung und Beschwörungen sind nicht enthalten.',
  'Die größere P-Abwehr einiger Gegner gegenüber ihrer M-Abwehr kann physische Klassen stärker bremsen. Gute Ergebnisse des Heilers sind deshalb ein Indiz, kein mathematischer Nachweis gleicher Ergebnisse aller Klassen.',
  'Die 15 Heilerkontrollen stimmen bei Kampfdauer, Lebensverlust, Trefferzahlen und Endleben mit dem bisherigen Heilerbericht überein. Kein Spiel- oder Datenbankwert verändert.',
];
const report = { generatedAt: new Date().toISOString(), status: 'illustrativeAllClassAutoAttackRouteNotApplied',
  assumptions, classes, inputHashes: Object.fromEntries(paths.map((p, i) => [p, createHash('sha256').update(texts[i]).digest('hex')])) };
await fs.writeFile('data/balancing/all-class-starter-route.json', JSON.stringify(report, null, 2) + '\n');
const f = n => n.toLocaleString('de-DE', { maximumFractionDigits: 1 });
let md = '# Alle Klassen: dieselbe Starterroute bis Gegnerlevel 10\n\n' + assumptions.map(a => '- ' + a).join('\n')
  + '\n\n## Übersicht, sortiert nach höchstem Lebensverlust\n\n| Klasse | Gewonnene Einzelkämpfe | Höchster Lebensverlust | Schwieriger Gegner | Spielerlevel dabei | Goblin L10 gegen Spieler L8 | Wolf L10 gegen Spieler L9 |\n'
  + '| --- | ---: | ---: | --- | ---: | ---: | ---: |\n';
for (const c of [...classes].sort((a, b) => b.summary.maximumLossPercent - a.summary.maximumLossPercent)) {
  const s = c.summary;
  md += `| ${c.name} | ${s.wins}/${s.encounters} | ${f(s.maximumLossPercent)} % | ${s.worstEnemy} L${s.worstEnemyLevel} | ${s.worstPlayerLevel} | ${f(s.goblin10LossPercent)} % | ${f(s.finalWolfLossPercent)} % |\n`;
}
md += '\n## Lebensverlust je Einzelkampf\n\n| Gegner | Gegnerlevel | Spielerlevel | ' + classes.map(c => c.name).join(' | ') + ' |\n'
  + '| --- | ---: | ---: | ' + classes.map(() => '---:').join(' | ') + ' |\n';
for (let i = 0; i < reference.rows.length; i++) {
  const r = classes[0].rows[i];
  md += `| ${r.enemy} | ${r.enemyLevel} | ${r.playerLevel} | ${classes.map(c => `${f(c.rows[i].combat.healthLostPercent)} %${c.rows[i].combat.winner !== 'player' ? ' ✖' : ''}`).join(' | ')} |\n`;
}
for (const c of classes) {
  md += `\n## ${c.name}\n\n| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |\n`
    + '| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |\n';
  for (const r of c.rows) md += `| ${r.enemy} | ${r.enemyLevel} | ${r.playerLevel} | ${f(r.player.maxHealth)} | ${f(r.player.physicalDefense)} | ${r.weapons.join(' + ')} | ${f(r.attacksPerSecond)} | ${f(r.outgoing)} | ${f(r.incoming)} | ${r.combat.playerHits} / ${r.combat.enemyHits} | ${f(r.combat.durationSeconds)} | ${f(r.combat.healthLostPercent)} % | ${r.combat.winner} |\n`;
}
await fs.writeFile('docs/balancing/all-class-starter-route.md', md);
console.log(JSON.stringify(classes.map(c => ({ name: c.name, ...c.summary })), null, 2));
