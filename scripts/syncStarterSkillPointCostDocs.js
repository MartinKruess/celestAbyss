import fs from 'node:fs/promises';
import {firstSkillPointCost} from '../services/skillPointCosts.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=await read('data/skills.json');
const decision=await read('data/balancing/starter-skill-point-costs-decision.json');
const numbers=new Set(decision.skillNumbers);
const rows=(value,path='skillPointCosts')=>Object.entries(value).flatMap(([k,v])=>v&&typeof v==='object'?rows(v,`${path}.${k}`):[`| ${path}.${k} | ${v} |`]);
function patchBlock(block,s){
  const stripped=block.replace(/^\| skillPointCosts(?:\.[^|]*)? \|[^\n]*\r?\n/gm,'');
  return stripped.replace(/(\| (?:Feld \| Gespeicherter Wert|Gespeichertes Feld \| Wert) \|\r?\n\| --- \| --- \|\r?\n)/,`$1${rows(s.skillPointCosts).join('\n')}\n`);
}
for(const file of await fs.readdir('data/balancing')){
  if(!file.endsWith('-skill-review.json'))continue;
  const path=`data/balancing/${file}`,review=await read(path);
  if(!review.skills)continue;
  review.skills=review.skills.map(s=>numbers.has(s.nr)?{...s,skillPointCosts:catalog.find(c=>c.nr===s.nr).skillPointCosts}:s);
  await fs.writeFile(path,JSON.stringify(review,null,2)+'\n');
  const mdPath=`docs/balancing/classes/${file.replace('-skill-review.json','-skills.md')}`;
  let md;
  try{md=await fs.readFile(mdPath,'utf8');}catch(e){if(e.code==='ENOENT')continue;throw e;}
  for(const s of review.skills.filter(s=>numbers.has(s.nr))){
    const pattern=new RegExp(`(^### ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^### \\d+:|^## |$(?![\\s\\S]))`,'m');
    md=md.replace(pattern,b=>patchBlock(b,s));
  }
  await fs.writeFile(mdPath,md);
}
for(const path of ['docs/balancing/shared-creature-skills.md','docs/balancing/shared-training-skills.md']){
  let md=await fs.readFile(path,'utf8');
  for(const s of catalog.filter(s=>numbers.has(s.nr))){
    const pattern=new RegExp(`(^## ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m');
    md=md.replace(pattern,b=>patchBlock(b,s));
  }
  await fs.writeFile(path,md);
}
const pointPath='data/balancing/class-skill-points.json';
const totals=await read(pointPath);
totals.status='Historical flat-one-point-per-rank totals; new first-stage prices defined, complete totals pending';
totals.currentCostRules='data/balancing/skill-point-cost-rules.json';
totals.currentTotalCost=null;
totals.legacyFields=['costPerLearnedLevel','classes[].sp','classes[].activeSP','classes[].passiveSP','classes[].skills[].sp'];
for(const c of totals.classes){
  const reviewKey=c.key==='villian'?'rogue':c.key;
  const review=await read(`data/balancing/${reviewKey}-skill-review.json`);
  const ss=(review.skillNumbers??review.skills.map(s=>s.nr)).map(nr=>catalog.find(s=>s.nr===nr));
  c.definedFirstStageCost=ss.reduce((sum,s)=>sum+(firstSkillPointCost(s,c.key)??0),0);
  c.currentTotalCost=null;
}
await fs.writeFile(pointPath,JSON.stringify(totals,null,2)+'\n');
await fs.writeFile('docs/balancing/starter-skill-point-costs.md',`# Kosten der ersten Skillstufe

In Skillkatalog und Entwicklungsdatenbank gespeichert. Die neue Eigenschaft \`skillPointCosts\` ist maßgeblich; das ältere Feld \`skillpoints\` stammt aus der historischen Pauschale von einem Punkt je gelernter Stufe.

| Skill | SP für Stufe 1 |
| --- | ---: |
| Rassenskill (einschließlich Überleben), Ausdauertraining, Waffentraining, Rüstungstraining | 1 je Skill |
| Bindung | 6 |
| Kontrolle | 4 |
| Zucht | 5 |
| Beschwören, Zurückrufen | 1 je Skill |
| Tamen | 10 |
| Festgelegter erster Angriff (meist L6, Ritter aktuell L10) | 12 |
| Erweiterung des Körpers / Geistes / der Sinne | 12 |

Das vollständige festgelegte Einstiegspaket benötigt einschließlich Rassenskill und Ausdauertraining **55 SP**. Für Abenteurer und Schamane sind zunächst **43 SP** festgelegt, da die Auswahl des ersten Angriffs offen ist. Keine Kosten für einen unbestätigten Angriff ergänzt.

Kumulativ für das vollständige Paket: Rassenskill L1 = 1 SP; einschließlich Waffentraining und des bisherigen Ausdauertrainings L2 = 3 SP; nach den L4-Skills = 19 SP; nach den L5-Skills = 31 SP; erster Angriff meist L6 = 43 SP; Erweiterung L9 = 55 SP. Beim Ritter liegt Mächtiger Hieb inzwischen auf L10: damit 43 SP bis L9 und 55 SP einschließlich L10. Bewegungsskill-Kosten und spätere Skillstufen sind darin nicht enthalten.

**Noch offen:** Kosten weiterer Skillstufen, genaue Lernlevel dieser Stufen und Vergabe von Skillpunkten durch Levelaufstiege oder Gegner. Eine Verdopplung der Kosten wurde diskutiert, aber nicht festgelegt. Der Kostenhelfer gibt für nicht definierte Stufen ausdrücklich keinen Preis zurück. Die historischen 280 SP pro vollständiger Klasse sind keine gültigen Gesamtkosten für dieses neue System.

Der bisherige Vergleich unter Level 10 enthält Startwerte, Attributzuwachs pro Level, eine Startwaffe und einen ersten Armschutz nach der vorgesehenen Begegnung. Keine erlernten Passiven, Angriffsskills, Buffs oder Pets. Die Monsterwerte wurden bei dieser Kostenänderung nicht erhöht. Vor einer Anhebung mit den neuen lernbaren Fähigkeiten erneut vergleichen.
`);
console.log('Synchronized first-stage SP costs in class files and marked flat-budget totals historical.');
