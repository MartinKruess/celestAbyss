import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const sourcePath = 'data/balancing/armor-parts.json';
const sourceText = await fs.readFile(sourcePath, 'utf8');
const source = JSON.parse(sourceText);
const rates = [177, 175, 173, 171, 169];
const fields = ['physicalDefense', 'magicalDefense'];
// Integer hundredths, including half-up rounding after each backwards step.
const divide = (cents, rate) => Number((BigInt(cents) * 200n + BigInt(rate)) / (BigInt(rate) * 2n));
const parts = [];
for (const anchor of source.parts.filter(p => p.rank === 6)) {
  const values = Object.fromEntries(fields.map(f => {
    assert.ok(Number.isSafeInteger(anchor.raw[f]) && anchor.raw[f] > 0);
    return [f, [0, 0, 0, 0, 0, anchor.raw[f] * 100]];
  }));
  for (let i = 4; i >= 0; i--) for (const f of fields) {
    values[f][i] = divide(values[f][i + 1], rates[i]);
    assert.ok(values[f][i] > 0 && values[f][i] < values[f][i + 1]);
    assert.ok(Math.abs(values[f][i] - values[f][i + 1] * 100 / rates[i]) <= .50000001);
  }
  for (let i = 0; i < 6; i++) {
    const old = source.parts.find(p => p.sourceClass === anchor.sourceClass && p.slot === anchor.slot && p.rank === i + 1);
    assert.ok(old);
    const raw = Object.fromEntries(fields.map(f => [f, values[f][i] / 100]));
    if (i === 5) assert.deepEqual(raw, anchor.raw);
    parts.push({ id: old.id, sourceClass: old.sourceClass, className: old.className,
      name: old.name, slot: old.slot, slotName: old.slotName, rank: i + 1, previous: old.raw, proposed: raw,
      cents: Object.fromEntries(fields.map(f => [f, values[f][i]])) });
  }
}
assert.equal(parts.length, 390);
const classes = [...new Set(parts.map(p => p.sourceClass))].map(key => ({ key,
  name: parts.find(p => p.sourceClass === key).className.split(' / ')[0], ranks: Array.from({ length: 6 }, (_, i) => {
    const selected = parts.filter(p => p.sourceClass === key && p.rank === i + 1);
    assert.equal(selected.length, 5);
    const proposed = Object.fromEntries(fields.map(f => [f, selected.reduce((n, p) => n + p.cents[f], 0) / 100]));
    const previous = source.sets.find(s => s.name === key && s.rank === i + 1).raw;
    if (i === 5) assert.deepEqual(proposed, previous);
    return { rank: i + 1, previous, proposed };
  }) })).sort((a, b) => a.name.localeCompare(b.name, 'de'));
assert.equal(classes.length, 13);
const assumptions = [
  'Vorschau, keine Änderung an Spielwerten, Datenbank, Waffen oder bestehenden Rüstungstabellen.',
  'Anker: die direkten Abwehrwerte jedes bestehenden R6-Einzelteils. Alle 65 R6-Teile bleiben exakt erhalten. Charaktergrundwerte, Levelattribute, Passive, Buffs, Steine, Zufallsboni und Schild sind nicht Teil der zurückgerechneten Werte.',
  'R1→R2 +77 %, R2→R3 +75 %, R3→R4 +73 %, R4→R5 +71 %, R5→R6 +69 %. Rückwärts jeweils durch 1,69 / 1,71 / 1,73 / 1,75 / 1,77 teilen.',
  'Jeder Einzelteilwert wird nach jedem Rückwärtsschritt auf zwei Nachkommastellen kaufmännisch gerundet. Berechnung mit ganzzahligen Hundertsteln; die Setwerte sind die exakte Summe der fünf gerundeten Teile. Deshalb können sie um wenige Hundertstel von einer separat zurückgerechneten Set-Gesamtsumme abweichen.',
  'Die bestehenden R6-Slotrundungen bleiben erhalten. Das erhält die tatsächlichen R6-Gegenstände; feste Slotanteile und Klassenverhältnisse werden in niedrigen Rängen bis auf kleine Cent-Rundungsabweichungen fortgeführt.',
  'Die Level-100-R6-Ergebnisse bleiben bei dieser Variante erhalten, weil die R6-Ausrüstung unverändert ist. Der Dummytest bestätigt noch keine Balance der niedrigeren Level oder der Überlebensfähigkeit.',
  'Plusstufen, Sockel und Zufallsboni sind zusätzliche Systeme. R1 soll nach Benutzerangabe nicht verbessert werden. Bei späteren 4 % je Plus vom Grundwert beträgt +10 insgesamt +40 %; der nächste Rang +0 liegt bei dieser Kurve noch ungefähr 21–26 % darüber.',
];
const report = { generatedAt: new Date().toISOString(), status: 'previewNotApplied', sourcePath,
  sourceSha256: createHash('sha256').update(sourceText).digest('hex'), growthRates: rates.map(r => (r - 100) / 100),
  anchorRank: 6, decimalPlaces: 2, assumptions, classes, parts };
await fs.writeFile('data/balancing/armor-weapon-curve-preview.json', JSON.stringify(report, null, 2) + '\n');
const fmt = n => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pair = r => `${fmt(r.physicalDefense)} / ${fmt(r.magicalDefense)}`;
let md = '# Rüstung: Waffen-Rangkurve mit unverändertem R6-Anker\n\n' + assumptions.map(s => '- ' + s).join('\n')
  + '\n\n## Neue Set-Gesamtwerte: physische / magische Abwehr\n\n| Klasse | R1 | R2 | R3 | R4 | R5 | R6 unverändert |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for (const c of classes) md += `| ${c.name} | ${c.ranks.map(r => pair(r.proposed)).join(' | ')} |\n`;
md += '\n## Rang 1: bisher → Vorschau\n\n| Klasse | Bisher P / M | Vorschau P / M |\n| --- | ---: | ---: |\n';
for (const c of classes) md += `| ${c.name} | ${pair(c.ranks[0].previous)} | ${pair(c.ranks[0].proposed)} |\n`;
md += '\n## Einzelteile\n\n';
for (const c of classes) {
  md += `### ${c.name}\n\n| Teil | R1 P / M | R2 P / M | R3 P / M | R4 P / M | R5 P / M | R6 P / M |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
  for (const slot of source.allocation) {
    const series = parts.filter(p => p.sourceClass === c.key && p.slot === slot.key).sort((a, b) => a.rank - b.rank);
    md += `| ${slot.name} | ${series.map(p => pair(p.proposed)).join(' | ')} |\n`;
  }
  md += '\n';
}
await fs.writeFile('docs/balancing/armor-weapon-curve-preview.md', md);
console.log(JSON.stringify({ status: report.status, classes: classes.length, parts: parts.length,
  rank1: classes.map(c => ({ name: c.name, previous: c.ranks[0].previous, proposed: c.ranks[0].proposed })),
  unchangedRank6Parts: 65 }, null, 2));
