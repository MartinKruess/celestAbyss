import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const armor = JSON.parse(await fs.readFile('data/balancing/armor-parts.json', 'utf8'));
const fields = [['physicalDefense', 'P-Abwehr'], ['magicalDefense', 'M-Abwehr']];
const f = n => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const rows = [];
for (const part of armor.parts.filter(p => p.rank < 6)) {
  const next = armor.parts.find(p => p.sourceClass === part.sourceClass && p.slot === part.slot && p.rank === part.rank + 1);
  for (const [stat, label] of fields) {
    const before = part.raw[stat], after = next.raw[stat];
    rows.push({ className: part.className.split(' / ')[0], sourceClass: part.sourceClass,
      slot: part.slot, slotName: part.slotName, stat, label, fromRank: part.rank, toRank: next.rank,
      before, after, delta: (Math.round(after * 100) - Math.round(before * 100)) / 100, percent: (after / before - 1) * 100 });
  }
}
assert.equal(rows.length, 650);
let md = '# Abstände zwischen aufeinanderfolgenden Rüstungsrängen\n\nAktive direkte Gegenstandswerte. Kein Charaktergrundwert, keine Steine, Zufallsboni, Buffs oder Verstärkung eingerechnet. Alle Zahlen beruhen auf den internen Werten mit zwei Nachkommastellen, nicht auf der gerundeten Spielanzeige.\n\n'
  + '| Übergang | Zielsteigerung für jedes Teil und beide Abwehrarten | Tatsächlicher Bereich nach Rundung |\n| --- | ---: | ---: |\n';
const summary = [];
for (let rank = 1; rank < 6; rank++) {
  const selected = rows.filter(r => r.fromRank === rank);
  const min = Math.min(...selected.map(r => r.percent)), max = Math.max(...selected.map(r => r.percent));
  const target = armor.rankProgression.growthPercentages[rank - 1];
  summary.push({ fromRank: rank, target, min, max });
  md += `| R${rank} → R${rank + 1} | +${target} % | +${f(min)} bis +${f(max)} % |\n`;
}
md += '\nDie kleinen Abweichungen entstehen beim Rückrechnen und Runden einzelner Teile. Der absolute Zuwachs hängt vom Ausgangswert ab; die Ziel-Prozentkurve ist für alle Klassen und Slots gleich. R6 wurde unverändert beibehalten.\n\n';
const names = [...new Set(rows.map(r => r.className))].sort((a, b) => a.localeCompare(b, 'de'));
for (const name of names) {
  md += `## ${name}\n\n| Teil / Wert | Übergang | Vorher | Nachher | Zuwachs Punkte | Zuwachs Prozent |\n| --- | --- | ---: | ---: | ---: | ---: |\n`;
  for (const slot of armor.allocation) for (const [stat] of fields) {
    for (const row of rows.filter(r => r.className === name && r.slot === slot.key && r.stat === stat).sort((a, b) => a.fromRank - b.fromRank))
      md += `| ${row.slotName} · ${row.label} | R${row.fromRank} → R${row.toRank} | ${f(row.before)} | ${f(row.after)} | +${f(row.delta)} | +${f(row.percent)} % |\n`;
  }
  md += '\n';
}
await fs.writeFile('docs/balancing/armor-rank-gaps.md', md);
await fs.writeFile('data/balancing/armor-rank-gaps.json', JSON.stringify({ source: 'data/balancing/armor-parts.json', summary, rows }, null, 2) + '\n');
console.log(JSON.stringify({ comparisons: rows.length, summary }));
