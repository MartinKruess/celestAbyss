import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { autoAttackInterval } from '../services/attackSpeed.js';

const read = async name => JSON.parse(await fs.readFile(name, 'utf8'));
const [baselines, templates, equipment, comparison, reference] = await Promise.all([
  read('data/balancing/class-baselines.json'), read('data/class-templates.json'),
  read('data/balancing/ranked-equipment.json'), read('data/balancing/class-comparison-level60.json'),
  read('data/balancing/level-one-character-reference.json'),
]);
const magical = new Set(['healer', 'herbalist', 'luminet', 'ritualist']);
const hybrids = new Set(['adventurer', 'druid', 'shaman']);
const fields = ['physicalAttack', 'magicalAttack', 'physicalDefense', 'magicalDefense'];
const fmt = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2 });
const family = key => magical.has(key) ? 'Magisch' : hybrids.has(key) ? 'Hybrid' : 'Physisch';
const rows = baselines.classes.map(c => {
  assert.deepEqual(c.baseStats, templates.find(t => t.key === c.key).baseStats);
  const ref = reference.rows.find(r => r.key === c.key);
  assert.deepEqual(c.baseStats, ref.nakedStats);
  const weaponNames = comparison.rows.find(r => r.key === c.key).weapons;
  const build = names => {
    const stats = structuredClone(c.baseStats);
    const weapons = names.map(name => equipment.weapons.find(w => w.name === name && w.rank === 1));
    assert.ok(weapons.every(Boolean));
    assert.ok(weapons.every(w => w.raw.every(b => ['P.Ang', 'M.Ang', 'P.Deff', 'ATK Speed', 'Block'].includes(b.label))));
    let attackWeapon = 0;
    for (const weapon of weapons) {
      const hasAttack = weapon.raw.some(b => ['P.Ang', 'M.Ang'].includes(b.label));
      const multiplier = hasAttack && attackWeapon++ > 0 ? comparison.dualWeaponEfficiency.offHand : 1;
      for (const bonus of weapon.raw) {
        if (bonus.label === 'P.Ang') stats.physicalAttack += bonus.value * multiplier;
        if (bonus.label === 'M.Ang') stats.magicalAttack += bonus.value * multiplier;
        if (bonus.label === 'P.Deff') stats.physicalDefense += bonus.value;
        if (bonus.label === 'ATK Speed') stats.attackSpeed += bonus.value / 100;
      }
    }
    const attackStat = magical.has(c.key) ? 'magicalAttack' : 'physicalAttack';
    const baseRate = magical.has(c.key) || ['hunter', 'summoner'].includes(c.key) ? 1.1 : 1.3;
    return { weapons: names, stats, autoAttackStat: attackStat, attacksPerSecond: 1 / autoAttackInterval(stats.attackSpeed, baseRate),
      rawAutoDps: stats[attackStat] / autoAttackInterval(stats.attackSpeed, baseRate) };
  };
  const single = build(weaponNames.slice(0, 1));
  const full = build(weaponNames);
  return { key: c.key, name: ref.name, family: family(c.key), naked: c.baseStats,
    fourStatSum: fields.reduce((sum, f) => sum + c.baseStats[f], 0), single, full };
});
assert.equal(rows.length, 13);
assert.ok(rows.every(r => r.fourStatSum === 30));
const tables = ['# Startwerte: Fairness-Prüfung der Klassen\n\n'
  + 'Analyse der aktuellen lokalen Daten, 23.10.2026. Keine Spielwerte oder Datenbankdaten verändert. Alle 13 Klassen-Basiswerte stimmen zwischen class-baselines.json, class-templates.json und der gespeicherten Level-1-Referenz überein. Waffen werden aus den aktuellen R1-Definitionen neu berechnet.\n\n'
  + 'Dies ist ein Vergleich der Zahlenbasis, kein abschließender Nachweis der Kampf-Balance. Startausrüstung, Nebenhand-Freischaltung, Startskills, Startattribute, absolute Crit-/Ausweichwerte und Reichweitenvorteile sind nicht vollständig bestätigt. Tiertrainer ist in diesen 13 Vergleichsklassen nicht separat enthalten; Seelenjäger (technischer Schlüssel summoner) ist kein Ersatz für ihn.\n\n'
  + '## Level 1 ohne Ausrüstung\n\n| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Summe vier Kampfwerte |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n'
  + rows.map(r => `| ${r.name} | ${r.naked.maxHealth} | ${r.naked.maxMana} | ${fields.map(f => r.naked[f]).join(' | ')} | ${r.fourStatSum} |`).join('\n')
  + '\n\nJede Klasse hat exakt 30 Punkte in diesen vier Kampfwerten. Das ist ein gleiches ungewichtetes Budget, kein Beweis gleicher Stärke: ein kaum genutzter M-ATK-Punkt ersetzt für eine physische Klasse keinen P-ATK-Punkt. Leben und Mana sind darin nicht enthalten. Alle nackten Klassen haben dieselben gespeicherten Tempo-Grundwerte.\n'];
for (const [mode, title] of [['single', 'Mit einer R1-Klassenwaffe, ohne Rüstung und Nebenhand'], ['full', 'Vergleichsvariante mit vollständiger R1-Waffenkombination']]) {
  tables.push(`## ${title}\n\n| Klasse | Waffe(n) | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte | Auto-Angriffe/s | Roh-Auto-Schaden/s |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n`
    + rows.map(r => { const v = r[mode]; return `| ${r.name} | ${v.weapons.join(' + ')} | ${fields.map(f => fmt(v.stats[f])).join(' | ')} | ${fmt(v.stats.attackSpeed * 100)} | ${fmt(v.attacksPerSecond)} | ${fmt(v.rawAutoDps)} |`; }).join('\n') + '\n\n');
}
tables.push('Roh-Auto-Schaden/s ist Angriffswert × Angriffe/s nach der vorhandenen Tempofunktion. Verwendet werden die Standardfrequenzen der Simulation: Nahkampf 1,3, Fernkampf/Magier 1,1 vor Tempoabzügen. Für vier Magierklassen zählt M-ATK, sonst P-ATK. Keine Gegnerabwehr, Skills, Crits, Verfehlungen, Bewegung, Heilung, Beschwörungen oder Ressourcen berücksichtigt. Hybrid-Magieskills werden damit ausdrücklich nicht bewertet. Das ist ein Vergleichsindikator und kein gemessener Kampf-DPS.\n\n'
  + 'Vollständige Waffenkombination ist eine hypothetische Vergleichsvariante, keine bestätigte Startausstattung. Direkter Nebenhandangriff zählt mit dem vorhandenen Faktor 0,9, Tempoabzüge beider Waffen vollständig. Schildblock bleibt wegen nicht geklärter Einheiten ausgeschlossen.\n\n'
  + '## Klassen mit statistischer Unterlegenheit in einem engen Vergleich\n\n'
  + 'Folgende Paare erfüllen: gleiche Ausrichtungsgruppe, in keinem der hier verwendeten Werte besser, mindestens einmal schlechter. Geprüft werden Leben, Mana, beide Abwehrwerte, Roh-Auto-Schaden/s; bei Hybriden zusätzlich beide Angriffswerte. Das beweist keine Gesamt-Unterlegenheit einschließlich Skills und Klassenmechaniken.\n\n');
const dominance = [];
for (const mode of ['single', 'full']) for (const weaker of rows) for (const stronger of rows) {
  if (weaker === stronger || weaker.family !== stronger.family) continue;
  const vector = r => [r.naked.maxHealth, r.naked.maxMana, r[mode].stats.physicalDefense, r[mode].stats.magicalDefense, r[mode].rawAutoDps,
    ...(hybrids.has(r.key) ? [r[mode].stats.physicalAttack, r[mode].stats.magicalAttack] : [])];
  const a = vector(weaker), b = vector(stronger);
  if (a.every((v, i) => v <= b[i]) && a.some((v, i) => v < b[i])) dominance.push({ mode, weaker: weaker.name, stronger: stronger.name });
}
tables.push(dominance.length ? dominance.map(d => `- ${d.mode === 'single' ? 'Eine Waffe' : 'Volle Waffenkombination'}: ${d.weaker} gegenüber ${d.stronger}.`).join('\n') + '\n\n' : 'Keine Paare erfüllen sämtliche Bedingungen. Das bedeutet nicht automatisch faire Gesamtbalance.\n\n');
tables.push('## Einordnung\n\n'
  + '- Die nackten Vier-Werte-Summen sind exakt gleich: 30 je Klasse. Der Schurke startet mit 11 P-ATK, 5 P-DEF und 8 M-DEF; der Butcher mit 13, 4 und 6. Der Schurke ist also nicht in allen diesen Werten unterlegen.\n'
  + '- Die Startwaffen spreizen die Angriffswerte deutlich. Zweite Dolche/Äxte ändern den Vergleich wesentlich. Eine Beurteilung muss deshalb mindestens eine definierte Startausstattung zugrunde legen.\n'
  + '- Schurke: niedriges Leben, aber gegenüber Butcher bessere nackte Abwehr und höheres Waffentempo. Sein Roh-Auto-Schaden bleibt auch mit zwei Dolchen unter dem Butcher. Ob frühe Skills/Mechaniken das ausgleichen, ist gesondert zu prüfen.\n'
  + '- Luminet und Ritualist haben gleiche vier nackte Kampfwerte, gleiches Mana und gleiche R1-Stabangriffswerte; Ritualist hat zwei Leben weniger. Das liegt weit unter einem Anlass für einen pauschalen Basisumbau. Beschwörung/Skills sind separat zu betrachten.\n'
  + '- Heiler: niedrigstes Leben und niedrige physische Abwehr, dafür höchste magische Abwehr und höchstes Mana. Kräuterkundler: ausgeglichenere Abwehr bei identischem nacktem M-ATK zum Heiler. Das sind erkennbare Gegenleistungen.\n'
  + '- Nicht aus der kleinen angezeigten Zahl allein auf Nutzlosigkeit schließen: unsere Abwehrformel ist levelabhängig. Ebenso ist eine frühe +5-Brust nicht mit einem +20-Gesamtset gleichzusetzen.\n\n'
  + '## Sinnvoller nächster Test\n\n'
  + 'Vor Änderungen eine konkrete Startausstattung und verfügbare Startskills festlegen. Dann Level 1, 4 und 10 gegen denselben physischen und magischen Referenzgegner prüfen: Tötungszeit, verlorene Lebenspunkte, Überlebenszeit und Ressourcen. Eine-Waffe- und volle-Waffenkombinations-Varianten getrennt halten, bis die Freischaltung geklärt ist. So werden echte Startnachteile sichtbar, ohne bloße Punktesummen gleichzusetzen.\n');
await fs.writeFile('docs/balancing/starting-class-fairness-analysis.md', tables.join('\n'));
console.log(JSON.stringify({ fourStatRange: [Math.min(...rows.map(r => r.fourStatSum)), Math.max(...rows.map(r => r.fourStatSum))],
  rows: rows.map(r => ({ name: r.name, sum: r.fourStatSum, singleDps: r.single.rawAutoDps, fullDps: r.full.rawAutoDps })), dominance }, null, 2));
