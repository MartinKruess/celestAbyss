import fs from 'node:fs/promises';

const catalog = JSON.parse(await fs.readFile('data/skills.json', 'utf8'));
const skill = catalog.find(s => s.nr === 133);
const decision = JSON.parse(await fs.readFile('data/balancing/taming-multiplier-decision.json', 'utf8'));
const before = JSON.parse(await fs.readFile(decision.backup + '/skill.json', 'utf8'));
const format = value => typeof value === 'number' ? value.toLocaleString('de-DE') : String(value);
const escape = value => format(value).replaceAll('|', '\\|').replace(/\r?\n/g, '<br>');
function flatten(value, path = '', rows = []) {
  if (Array.isArray(value)) value.forEach((v, i) => flatten(v, `${path}[${i}]`, rows));
  else if (value && typeof value === 'object') for (const [key, v] of Object.entries(value)) flatten(v, path ? path + '.' + key : key, rows);
  else rows.push([path, value]);
  return rows;
}
const table = '| Feld | Gespeicherter Wert |\n| --- | --- |\n'
  + flatten(skill).filter(([key]) => !['_id', '__v'].includes(key)).map(([key, value]) => `| ${escape(key)} | ${escape(value)} |\n`).join('');
const description = skill.description_de + '\n\n';

// Update only Tame, preserving the reviewed baseline tables and other skills.
for (const file of await fs.readdir('data/balancing')) {
  if (!file.endsWith('-skill-review.json')) continue;
  const path = 'data/balancing/' + file;
  const review = JSON.parse(await fs.readFile(path, 'utf8'));
  if (!review.skills?.some(s => s.nr === 133)) continue;
  review.skills = review.skills.map(s => s.nr === 133 ? structuredClone(skill) : s);
  await fs.writeFile(path, JSON.stringify(review, null, 2) + '\n');
}
for (const file of await fs.readdir('docs/balancing/classes')) {
  if (!file.endsWith('-skills.md')) continue;
  const path = 'docs/balancing/classes/' + file;
  let md = await fs.readFile(path, 'utf8');
  md = md.replaceAll(before.description_de, skill.description_de).replaceAll(before.description_eng, skill.description_eng);
  md = md.replace(/^### 133: Tamen\r?\n[\s\S]*?(?=^### \d+:)/m, '### 133: Tamen\n\n' + description + table + '\n');
  md = md.replaceAll('Zähmchance: 50 bis 80 %', 'Chancenfaktor: ×1,0 bis ×1,2');
  md = md.replaceAll('Grunderfolg 50 %', 'Grundchance der Kreaturenvariante × Skillfaktor');
  md = md.replaceAll('Grunderfolg 50 / 65 / 80 %', 'Chancenfaktor ×1,0 / ×1,1 / ×1,2');
  md = md.replaceAll('Kreaturen-Gegenwert; Itemverbrauch', 'Kreaturen-Grundchancen; Itemverbrauch');
  // Other class builders did not previously display the chance column.
  md = md.split('\n').map(line => line.startsWith('| 133 | Tamen |') && line.includes('Nicht vollständig gespeichert')
    ? line.replace('Nicht vollständig gespeichert', 'Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1') : line).join('\n');
  await fs.writeFile(path, md);
}
const sharedPath = 'docs/balancing/shared-creature-skills.md';
let shared = await fs.readFile(sharedPath, 'utf8');
const intro = 'Festgelegte Stufen:\n\n| Level | Mana | Castzeit | Cooldown | Chancenfaktor |\n| ---: | ---: | ---: | ---: | ---: |\n| 1 | 100 | 3 s | 60 s | ×1,0 |\n| 2 | 125 | 2,5 s | 50 s | ×1,1 |\n| 3 | 150 | 2 s | 40 s | ×1,2 |\n\n';
shared = shared.replace(/^## 133: Tamen\r?\n[\s\S]*?(?=^## 134:)/m, '## 133: Tamen\n\n' + intro + description + table + '\n');
await fs.writeFile(sharedPath, shared);
console.log('Updated Tame in current class reviews and shared creature documentation; other skill sections preserved.');
