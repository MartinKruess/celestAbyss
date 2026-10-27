import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {withSkillLearningOverview} from '../services/skillLearningOverview.js';

const plan = JSON.parse(await fs.readFile('data/balancing/skill-learning-plan.json', 'utf8'));
const catalog = JSON.parse(await fs.readFile('data/skills.json', 'utf8'));
const names = {adventurer:'Abenteurer', butcher:'Butcher', druid:'Druide', gladiator:'Gladiator', healer:'Heiler', herbalist:'Kräuterkundler', hunter:'Jäger', knight:'Ritter', luminet:'Luminet', ritualist:'Ritualist', shaman:'Schamane', summoner:'Seelenjäger', rogue:'Schurke'};
let summary = '# Einstieg der Klassen\n\nDie festgelegten ersten Freischaltungen wurden in Skillkatalog und Entwicklungsdatenbank übernommen. Die unten ausdrücklich offenen Entscheidungen bleiben Planung. Weitere Skillstufen werden getrennt verteilt.\n\nGemeinsam: Rassenskill L1, Waffentraining L2, Rüstungstraining und Bindung/Kontrolle/Zucht L4, Tamen/Beschwören/Zurückrufen L5. Erweiterung des Körpers beziehungsweise die entsprechende Erweiterung des Geistes/der Sinne L9. Ausdauertraining steht weiterhin auf dem bisherigen L2; neuer Zeitpunkt offen.\n\n| Klasse | Erster Angriff auf Charakterlevel 6 | Bewegung auf Level 8 |\n| --- | --- | --- |\n';
for (const [key, name] of Object.entries(names)) {
  const review = JSON.parse(await fs.readFile(`data/balancing/${key}-skill-review.json`, 'utf8'));
  const skills = (review.skillNumbers ?? review.skills.map(s => s.nr)).map(nr => catalog.find(s => s.nr === nr));
  const ids = new Set(skills.map(s => s.nr));
  const assignments = new Map(Object.entries(plan.sharedFirstUnlocks).filter(([nr]) => ids.has(Number(nr))).map(([nr, level]) => [Number(nr), String(level)]));
  const attack = plan.classFirstAttacks[key];
  if (attack) { assert.ok(ids.has(attack.nr), `${key} attack is not assigned`); assignments.set(attack.nr, String(attack.level)); }
  const movement = plan.movementWindows[key];
  if (movement) for (const nr of movement.skillNumbers) { assert.ok(ids.has(nr), `${key} movement is not assigned`); assignments.set(nr, movement.levelRange[0]===movement.levelRange[1]?String(movement.levelRange[0]):movement.levelRange.join('–')); }
  const path = `docs/balancing/classes/${key}-skills.md`;
  const original = await fs.readFile(path, 'utf8');
  const marker = /<!-- skill-learning-overview:start -->[\s\S]*?<!-- skill-learning-overview:end -->/;
  const edited = original.replace(marker, block => block.split('\n').map(line => {
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (![6,7].includes(cells.length) || !/^\d+$/.test(cells[4])) return line;
    const level = assignments.get(Number(cells[4]));
    if (level === undefined) return line;
    cells[2] = level;
    return '| ' + cells.join(' | ') + ' |';
  }).join('\n'));
  const result = withSkillLearningOverview(edited, {skills, classKey: key === 'rogue' ? 'villian' : key});
  for (const [nr, level] of assignments) {
    const line = result.split('\n').find(line => line.split('|').slice(1, -1).map(c => c.trim())[4] === String(nr));
    const cells=line?.split('|').slice(1,-1).map(c=>c.trim());
    assert.ok(cells?.[2]===level||(cells?.[0]===level&&cells?.[2]==='—'));
  }
  await fs.writeFile(path, result);
  const attackName = attack ? `${catalog.find(s => s.nr === attack.nr).skillName_de} (Level ${attack.level})` : key === 'adventurer' ? 'Offen – Kreuzhieb zur Prüfung' : 'Noch offen';
  const movementNames = movement ? movement.skillNumbers.map(nr => catalog.find(s => s.nr === nr).skillName_de).join(', ') : 'Noch nicht festgelegt';
  summary += `| [${name}](classes/${key}-skills.md) | ${attackName} | ${movementNames} |\n`;
}
summary += '\n## Offene Entscheidungen\n\n- **Abenteurer:** Kreuzhieb auf Skillstufe 1 hat zwei Treffer: 27 + P-Angriff und 108 + P-Angriff, insgesamt 135 + 2 × P-Angriff vor Verteidigung. 34 Mana, 43 Sekunden Cooldown. Deutlich stärkerer Einzelburst als die genannten einfachen Einstiegsangriffe; kein dauerhafter DPS-Vergleich. Auswahl und eventuelle Anpassung offen.\n- **Schamane:** Noch kein erster Angriff genannt. Die aktuelle Klassenliste enthält weder Rotier Schlag noch Energieschlag; bestehende physische Kandidaten wären Beben (81 Grundschaden) oder Felszähne (73 Grundschaden). Keine Auswahl vorgenommen.\n- **Bewegung:** Jäger hat Ausweichrolle und Doppelsprung, keinen Dash. Seelenjäger hat Dash, weder Ausweichrolle noch Doppelsprung; Doppelschuss ist ein Angriff und nicht Teil dieses Bewegungspakets. Abenteurer hat alle drei Bewegungsskills. Alle genannten Bewegungsskills sind auf L8 festgelegt.\n- **Ausdauertraining:** Bisher L2, neuer Zeitpunkt nicht genannt.\n\nQuelle der Verteilung: `data/balancing/skill-learning-plan.json`; geprüfter Datenbankimport: `data/balancing/starter-skill-unlocks-decision.json`. Lernlevel wurden übernommen, Kampfwerte, Skillpunktkosten und Klassenzuordnungen bleiben erhalten.\n';
summary=summary.replace('Erster Angriff auf Charakterlevel 6','Erster festgelegter Angriff');
summary+='\n## Weitere gemeinsame Lernlevel\n\nMächtiger Hieb L10 (ersetzt beim Ritter die frühere Ausnahme L6), Erdbeben L12, waffenspezifische Trainings L15, Schmetterschlag L17, Standhaft L20, Erdbrecher L21. Diese Lernlevel gelten für alle Klassen, denen der jeweilige Skill bereits zugeordnet ist. Andere klassenspezifische Passive auf L20 werden erst nach Benennung zugeordnet. Ausweichtraining und Hartes Training wurden nicht als Waffenspezialisierung eingestuft.\n';
await fs.writeFile('docs/balancing/skill-learning-starter-plan.md', summary);
console.log('Saved the shared starter plan, 11 first attacks and three movement windows to 13 class overviews; no gameplay definitions changed.');
