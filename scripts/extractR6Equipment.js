import fs from 'node:fs/promises';

const source = JSON.parse(await fs.readFile('tmp/recovered-data/Questsystem.ods.json', 'utf8'));
const allArmor = [];
const allWeapons = [];
for (const sheetName of ['EQ_Stats', 'Weapon_Stats']) {
  let heading;
  for (const row of source.tables.find(t => t.name === sheetName).rows) {
    const cell = column => row.cells.find(c => c.column === column);
    const label = cell(1)?.text;
    if (label && !/^R[1-6]$/.test(label)) heading = row;
    if (!/^R[1-6]$/.test(label ?? '')) continue;
    const rank = Number(label.slice(1));
    const number = column => {
      const value = cell(column)?.value;
      if (value == null) return null;
      return Number(value);
    };
    if (sheetName === 'EQ_Stats') {
      const raw = { health: number(2), mana: number(3), physicalDefense: number(5), magicalDefense: number(11), vitality: number(17), wisdom: number(23) };
      allArmor.push({ name: heading.cells.find(c => c.column === 1).text, rank, row: row.row, raw,
        converted: { health: raw.health + raw.vitality * 30, mana: raw.mana + raw.wisdom * 30, physicalDefense: raw.physicalDefense + raw.vitality * 2, magicalDefense: raw.magicalDefense + raw.wisdom * 2 } });
    } else {
      allWeapons.push({ name: heading.cells.find(c => c.column === 1).text, rank, row: row.row,
        raw: heading.cells.filter(c => c.column >= 3 && c.column <= 7).map(c => ({ label: c.text, column: c.column, value: number(c.column) })) });
    }
  }
}
await fs.writeFile('data/balancing/ranked-equipment.json', JSON.stringify({ source: 'data/source/Questsystem.ods', sourceSha256: source.sha256, armor: allArmor, weapons: allWeapons, rankByLevel: { 1:1,10:1,20:2,30:3,40:4,50:5,60:6 }, purpose: 'Calculation scenario, not final equipment level requirements' }, null, 2) + '\n');
const armor = allArmor.filter(x => x.rank === 6);
const weapons = allWeapons.filter(x => x.rank === 6);
const result = { source: 'data/source/Questsystem.ods', sourceSha256: source.sha256, rank: 6, scope: 'Base rank values only; no upgrades, mastery, jewelry, stones, passives or active buffs. Armor totals use aggregate columns, not distribution columns.', armor, weapons };
await fs.writeFile('data/balancing/r6-equipment.json', JSON.stringify(result, null, 2) + '\n');
let md = '# R6-Ausrüstung\n\nGrundwerte aus EQ_Stats und Weapon_Stats. Keine Verstärkungsstufen, Meisterschaft, Steine, Schmuck oder Skills. Rüstungswerte sind die Summenspalten; die Verteilung auf Einzelteile wird nicht nochmals addiert.\n\n## Rüstung\n\n| Klasse | Direkt HP | Direkt MP | P-Def | M-Def | Vita | Wisdom | HP inklusive Vita | MP inklusive Wisdom |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for (const a of armor) md += `| ${a.name} | ${a.raw.health} | ${a.raw.mana} | ${a.raw.physicalDefense} | ${a.raw.magicalDefense} | ${a.raw.vitality} | ${a.raw.wisdom} | ${a.converted.health} | ${a.converted.mana} |\n`;
md += '\n## Waffen\n\nEine Zeile je Waffe. Int/Faith/Vic wird als alternative Attributbezeichnung der Quelle erhalten, nicht dreifach vergeben. Blockeinheit und endgültige Umrechnungen der offensiven Attribute bleiben offen.\n\n| Waffe | R6-Grundboni |\n| --- | --- |\n';
for (const w of weapons) md += `| ${w.name} | ${w.raw.map(x => `${x.label}: ${x.value ?? 'offen'}`).join(', ')} |\n`;
md += '\n## Berechnungsrichtung\n\nAttribute aus Charakter, Ausrüstung und Skills werden gesammelt und anschließend in operative Werte umgerechnet. Direkte HP-, MP-, Angriffs- und Verteidigungsboni werden separat addiert. Operative Werte verändern die zugrunde liegenden Attribute nicht. Verbesserte Attributumrechnung gilt für alle Attributquellen. Bereits im Level-1-Wert enthaltene Attributbeiträge dürfen nicht nochmals addiert werden.\n';
await fs.writeFile('docs/balancing/r6-equipment.md', md);
console.log(`Extracted ${armor.length} armor sets and ${weapons.length} weapon types, source unchanged.`);
