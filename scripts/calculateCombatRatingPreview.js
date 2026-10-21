import fs from 'node:fs/promises';
import {combatRatingModel, resolveCombatRatings} from '../services/combatRatings.js';

const source = JSON.parse(await fs.readFile('data/balancing/class-comparison-level60.json', 'utf8'));
const scenarios = source.passiveRows.map(row => ({
  key: row.key, name: row.name,
  ratings: Object.fromEntries(Object.keys(combatRatingModel.ratings).map(stat => [stat, row.stats[stat] ?? 0])),
  converted: resolveCombatRatings(row.stats),
}));
await fs.writeFile('data/balancing/combat-rating-preview.json', JSON.stringify({model: combatRatingModel, scenario: 'Current equipment and permanent passives; no active buffs', scenarios}, null, 2) + '\n');
const percentage = n => (100 * n).toFixed(2).replace('.', ',') + ' %';
let md = '# Vorläufige Wertungsumrechnung\n\n350 Punkte erreichen die jeweilige Höchstwirkung; höhere Werte erhöhen die Chance nicht weiter. Formel: Höchstwirkung × 2 × r / (350 + r), mit r auf 0 bis 350 begrenzt. Die Kurve flacht bis zur Grenze ab. Block und Ausweichen erreichen 60 %, Crit 80 %. Aktuelle Ausrüstung und permanente Passive, keine aktiven Buffs. Attributfaktoren sind unverändert.\n\n';
md += '| Klasse | Crit | Ausweichen | Block | Genauigkeitsbonus | Penetrations-Gegenwert* |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for (const row of scenarios) md += `| ${row.name} | ${Object.keys(combatRatingModel.ratings).map(stat => `${row.ratings[stat]} → ${percentage(row.converted[stat])}`).join(' | ')} |\n`;
md += '\n* Penetration ist ein vorläufig separat umgerechneter Gegenwert. Die Verrechnung mit gegnerischem Block ist noch nicht definiert. Genauigkeit ist ein Bonus, keine fertige Trefferchance. Waffen-Crit und Schildblock mit ungeklärten Einheiten bleiben separat. Kein Einfluss auf die bisherigen Damage-Simulationen; keine Zufallswürfe hinzugefügt. Kritischer Zusatzschaden wird nicht abgeschwächt.\n';
await fs.writeFile('docs/balancing/combat-rating-preview.md', md);
console.log('Combat rating preview written for ' + scenarios.length + ' class scenarios.');
