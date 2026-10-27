import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {withSkillLearningOverview} from '../services/skillLearningOverview.js';

const catalog = JSON.parse(await fs.readFile('data/skills.json', 'utf8'));
const names = {adventurer: 'Abenteurer', butcher: 'Butcher', druid: 'Druide', gladiator: 'Gladiator', healer: 'Heiler', herbalist: 'Kräuterkundler', hunter: 'Jäger', knight: 'Ritter', luminet: 'Luminet', ritualist: 'Ritualist', shaman: 'Schamane', summoner: 'Seelenjäger', rogue: 'Schurke'};
let index = '# Lernlevel der Klassen\n\nDie erste Spalte der Klassenübersichten zeigt das gespeicherte Lernlevel. Die festgelegten Einstiegslevel sind in Skillkatalog und Entwicklungsdatenbank übernommen. Offen sind insbesondere der erste Angriff von Schamane und Abenteurer sowie weitere Skillstufen. Darunter bleiben alle bisherigen Details erhalten.\n\n';
for (const [fileKey, name] of Object.entries(names)) {
  const classKey = fileKey === 'rogue' ? 'villian' : fileKey;
  const review = JSON.parse(await fs.readFile(`data/balancing/${fileKey}-skill-review.json`, 'utf8'));
  const skills = (review.skillNumbers ?? review.skills.map(s => s.nr)).map(nr => catalog.find(s => s.nr === nr));
  assert.ok(skills.every(Boolean));
  assert.equal(new Set(skills.map(s => s.nr)).size, skills.length);
  const path = `docs/balancing/classes/${fileKey}-skills.md`;
  const original = await fs.readFile(path, 'utf8');
  const result = withSkillLearningOverview(original, {skills, classKey});
  assert.equal(withSkillLearningOverview(result, {skills, classKey}), result, 'Overview must be idempotent');
  if(result !== original)await fs.writeFile(path, result);
  index += `- [${name} – ${skills.length} Skills](classes/${fileKey}-skills.md)\n`;
}
index += '\n[Alte Lernlevel aus dem Reiter Skills](legacy-skill-learning-levels.md) · [Einstiegsverteilung](skill-learning-starter-plan.md)\n\nKreaturenskills aktuell: Bindung, Kontrolle und Zucht L4; Tamen, Beschwören und Zurückrufen L5. Das sind erste Freischaltungen; weitere Skillstufen benötigen noch ihre eigene Verteilung.\n';
await fs.writeFile('docs/balancing/skill-learning-index.md', index);
console.log('Updated 13 compact class learning lists; catalog and database unchanged.');
