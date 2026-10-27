import {learnableSkillLevel} from './skillLearningLimits.js';
import {skillClassVariant} from './skillClassVariant.js';
import {firstSkillPointCost} from './skillPointCosts.js';

const begin = '<!-- skill-learning-overview:start -->';
const end = '<!-- skill-learning-overview:end -->';
const blockPattern = /<!-- skill-learning-overview:start -->[\s\S]*?<!-- skill-learning-overview:end -->\r?\n*/;
const escape = text => String(text).replaceAll('|', '\\|').replace(/\r?\n/g, ' ');

// Keep review notes entered directly in the compact Markdown table when a class
// report is regenerated. Planning columns do not change live skill definitions.
export function withSkillLearningOverview(markdown, {skills, classKey, existingMarkdown = markdown}) {
  const previous = existingMarkdown.match(blockPattern)?.[0] ?? '';
  const notes = new Map();
  for (const line of previous.split(/\r?\n/)) {
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if ([6,7].includes(cells.length) && /^\d+$/.test(cells[4])) notes.set(Number(cells[4]), {first: cells[2], further: cells[3]});
  }
  const rows = skills.map(s => {
    s = skillClassVariant(s, classKey);
    if (!s) throw new Error(`Missing skill in ${classKey}`);
    const level = s.learningRequirements?.minimumCharacterLevel;
    const plan = notes.get(s.nr) ?? {first: '—', further: '—'};
    if (String(level) === plan.first) plan.first = '—';
    const plannedLevel = plan.first.match(/^\d+/)?.[0];
    return {skill: s, level, plan, sortLevel: plannedLevel === undefined ? level ?? Infinity : Number(plannedLevel)};
  }).sort((a, b) => a.sortLevel - b.sortLevel || a.skill.skillName_de.localeCompare(b.skill.skillName_de, 'de') || a.skill.nr - b.skill.nr);
  const table = rows.map(({skill, level, plan}) => `| ${level ?? 'offen'} | ${escape(skill.skillName_de)} | ${plan.first} | ${plan.further} | ${skill.nr} | ${learnableSkillLevel(skill, classKey)} | ${firstSkillPointCost(skill,classKey) ?? 'offen'} |`).join('\n');
  const block = `${begin}
## Skills nach Lernlevel

Die erste Spalte zeigt das aktuell gespeicherte Lernlevel dieser Klasse. Sortiert nach Lernlevel; noch offene Vorschläge stehen am vorgesehenen Platz. „Offen“ bedeutet: noch kein verbindliches Lernlevel gespeichert. Bereits übernommene Vorschläge werden nicht doppelt angezeigt. Weitere Skillstufen verteilen wir getrennt; „Skillstufen“ bezeichnet die lernbare Ausbaustufe, nicht das Charakterlevel.

Die SP-Spalte zeigt die Kosten der ersten Skillstufe. Die vollständigen Kosten stehen in der Tabelle „Skillpunktkosten je Stufe“. Regulär kostet der vollständige Ausbau 300 SP, ab erstem Lernlevel 55 insgesamt 400 SP; Taming-Skills behalten günstige Sonderkosten. Das alte Feld \`skillpoints\` und frühere Pauschalsummen sind historisch.

| Ab Charakterlevel | Skill | Noch offene Planung | Weitere Skillstufen ab Charakterlevel | Nr | Lernbare Skillstufen | SP erste Stufe |
| ---: | --- | ---: | --- | ---: | ---: | ---: |
${table}

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
${end}

`;
  const order = new Map(rows.map(({skill},index)=>[skill.nr,index]));
  let clean = markdown.replace(blockPattern, '').replace(/\*\*(\d+) Skills, [\d.,]+ Skillpunkte\.\*\*/g,'**$1 Skills. Gesamte SP-Kosten noch offen.**');
  // Reorder the actual detail blocks and full overview tables as well, while
  // preserving their text and every unrelated section of the class document.
  clean = clean.replace(/(^## ([^\n]+)\r?\n)([\s\S]*?)(?=^## |$(?![\s\S]))/gm,(section,header,title,body)=>{
    const blocks=[...body.matchAll(/^### (\d+):[^\n]*\r?\n[\s\S]*?(?=^### \d+:|$(?![\s\S]))/gm)];
    if(blocks.length){
      const prefix=body.slice(0,blocks[0].index);
      body=prefix+blocks.sort((a,b)=>(order.get(Number(a[1]))??Infinity)-(order.get(Number(b[1]))??Infinity)).map(m=>m[0]).join('');
    }
    if(/Skillübersicht|Vollständigkeitsprüfung/.test(title)){
      const lines=body.split('\n');
      const skillRows=lines.filter(line=>/^\| \d+ \|/.test(line)).sort((a,b)=>(order.get(Number(a.match(/^\| (\d+)/)[1]))??Infinity)-(order.get(Number(b.match(/^\| (\d+)/)[1]))??Infinity));
      let index=0;
      body=lines.map(line=>/^\| \d+ \|/.test(line)?skillRows[index++]:line).join('\n');
    }
    return header+body;
  });
  const titleEnd = clean.indexOf('\n');
  if (titleEnd < 0) throw new Error('Class overview needs a title');
  return clean.slice(0, titleEnd + 1) + '\n' + block + clean.slice(titleEnd + 1).replace(/^\s*\n/, '');
}
