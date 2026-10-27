import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const armor = JSON.parse(await fs.readFile('data/balancing/armor-parts.json', 'utf8'));
const ranked = JSON.parse(await fs.readFile('data/balancing/ranked-equipment.json', 'utf8'));
const fmt = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const growth = values => values.slice(1).map((v, i) =>
  typeof v !== 'number' || typeof values[i] !== 'number' || values[i] === 0
    ? '—' : `${v >= values[i] ? '+' : ''}${fmt((v / values[i] - 1) * 100)} %`);
const table = rows => '| Teil / Wert | R1 | R2 | R3 | R4 | R5 | R6 | 1→2 | 2→3 | 3→4 | 4→5 | 5→6 |\n'
  + '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n'
  + rows.map(([label, values]) => `| ${label} | ${values.map(v => v ?? '—').join(' | ')} | ${growth(values).join(' | ')} |`).join('\n') + '\n\n';
const classes = [...new Set(armor.parts.map(p => p.sourceClass))]
  .map(key => ({ key, name: armor.parts.find(p => p.sourceClass === key).className.split(' / ')[0] }))
  .sort((a, b) => a.name.localeCompare(b.name, 'de'));
const stats = [['physicalDefense', 'P-Abwehr'], ['magicalDefense', 'M-Abwehr']];
const transitions = Array.from({ length: 5 }, () => []);
let md = '# Rangsteigerungen: Waffen und alle Rüstungsteile\n\n'
  + 'Berechnet aus den aktuellen lokalen Arbeitsdaten (23.10.2026): `data/balancing/ranked-equipment.json` und `data/balancing/armor-parts.json`. Kein neuer Live-Datenbankabgleich. Keine Spielwerte verändert.\n\n'
  + 'Formel: `(neuer Wert / alter Wert − 1) × 100`. Prozentwerte auf zwei Nachkommastellen gerundet. Verglichen werden direkte Gegenstandswerte, ohne Charaktergrundwerte, Attributeumrechnung, Skills, Buffs, Verstärkung oder zufällige Boni. Gleicher Gegenstandsrang bedeutet hier keine Aussage zur Gesamtstärke eines Charakters.\n\n'
  + 'Waffen: Die allgemeine Sollkurve lautet +77 / +75 / +73 / +71 / +69 %. Angezeigt sind die tatsächlichen Steigerungen der gespeicherten Ganzzahlen. Individuelle Anpassungen können zusätzlich abweichen; die aktuelle Armbrustreihe lautet 24 / 43 / 76 / 133 / 228 / 386. Ältere Vergleichsdokumente enthalten andere Startwerte. Bei konstantem Nebenhandfaktor haben identische Dualwaffen dieselben prozentualen Steigerungen des direkten Angriffs wie eine Einzelwaffe.\n\n'
  + 'Rüstungen: Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 % der jeweiligen Klassensumme, mit Verteilung ganzer Punkte nach größtem Rest. Die Rangkurve der Gesamtsummen und diese Rundung bestimmen die tatsächlichen Einzelteilsteigerungen. P-Abwehr und M-Abwehr werden getrennt gerechnet.\n\n'
  + 'Umhänge: Für die 52 Entwürfe sind keine Abwehrwerte festgelegt; daher keine Prozentberechnung. Rüstungsboni sind leer. Schild steht separat unter Waffen.\n\n## Waffen: direkter Angriff und Schildabwehr\n\n';
const weaponRows = [];
for (const name of new Set(ranked.weapons.map(w => w.name))) {
  const series = ranked.weapons.filter(w => w.name === name).sort((a, b) => a.rank - b.rank);
  assert.deepEqual(series.map(w => w.rank), [1, 2, 3, 4, 5, 6]);
  for (const label of ['P.Ang', 'M.Ang', 'P.Deff', 'M.Deff']) {
    const values = series.map(w => w.raw.find(v => v.label === label)?.value);
    if (values.every(v => typeof v === 'number')) weaponRows.push([`${name} · ${label}`, values]);
  }
}
md += table(weaponRows);
md += 'Klassenbezug: Gladiator – Einhandaxt; Butcher – Zweihandaxt; Jäger – Bogen; Nachtjäger/Seelenjäger – Armbrust; Schurke – Dolche; Ritter – Einhandschwert und Schild; Abenteurer – Zweihandschwert. Ausgearbeitete Mace-Zuordnung: Schamane – Einhand, Druide – Zweihand (ältere Simulationsvorlagen können abweichen). Allgemeiner Stab für Heiler/Kräuterkundler, Lichtstab für Luminet, Victim-Stab für Ritualist; keine verbindlichen Item-Klassenbeschränkungen.\n\n## Rüstung: Gesamtsummen je Klasse\n\n';
for (const c of classes) {
  md += table(stats.map(([key, label]) => [`${c.name} · ${label}`, Array.from({ length: 6 }, (_, i) => {
    const set = armor.sets.find(s => s.name === c.key && s.rank === i + 1);
    const parts = armor.parts.filter(p => p.sourceClass === c.key && p.rank === i + 1);
    assert.equal(parts.length, 5);
    assert.equal(parts.reduce((sum, p) => sum + p.raw[key], 0), set.raw[key]);
    return set.raw[key];
  })]));
}
md += '## Jedes einzelne Rüstungsteil\n\n';
for (const c of classes) {
  md += `### ${c.name}\n\n`;
  const rows = [];
  for (const slot of armor.allocation) for (const [key, label] of stats) {
    const parts = armor.parts.filter(p => p.sourceClass === c.key && p.slot === slot.key).sort((a, b) => a.rank - b.rank);
    assert.deepEqual(parts.map(p => p.rank), [1, 2, 3, 4, 5, 6]);
    const values = parts.map(p => p.raw[key]);
    assert.ok(values.every(v => Number.isInteger(v) && v > 0));
    rows.push([`${slot.name} · ${label}`, values]);
    for (let i = 0; i < 5; i++) transitions[i].push({ class: c.name, slot: slot.name, stat: label, percent: (values[i + 1] / values[i] - 1) * 100 });
  }
  md += table(rows);
}
md += '## Waffen: weitere gespeicherte Werte\n\nFehlende Felder werden nicht als null erfunden. Bei null als Ausgangswert oder fehlenden Feldern ist die relative Steigerung nicht berechenbar (—). Angriffstempo wird als gespeicherter Quellwert gezeigt; seine Differenz ist keine prozentuale Steigerung des Charaktertempos.\n\n';
for (const name of new Set(ranked.weapons.map(w => w.name))) {
  const series = ranked.weapons.filter(w => w.name === name).sort((a, b) => a.rank - b.rank);
  const labels = [...new Set(series.flatMap(w => w.raw.map(v => v.label)))].filter(l => !['P.Ang', 'M.Ang', 'P.Deff', 'M.Deff', 'ATK Speed'].includes(l));
  md += `### ${name}\n\n`;
  if (labels.length) md += table(labels.map(l => [l, series.map(w => w.raw.find(v => v.label === l)?.value)]));
  md += `Angriffstempo (Quellwerte R1–R6): ${series.map(w => w.raw.find(v => v.label === 'ATK Speed')?.value ?? '—').join(' / ')}.\n\n`;
}
await fs.writeFile('docs/balancing/equipment-rank-growth-analysis.md', md);
console.log(JSON.stringify({ weaponRows, armorPartGrowthRanges: transitions.map((rows, i) => ({ transition: `${i + 1}→${i + 2}`, min: rows.reduce((a, b) => a.percent < b.percent ? a : b), max: rows.reduce((a, b) => a.percent > b.percent ? a : b) })), verified: { classes: classes.length, armorParts: armor.parts.length, armorStatTransitions: transitions.flat().length } }, null, 2));
