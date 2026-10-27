import fs from 'node:fs/promises';
import {skillPointCostRanks} from '../services/skillPointCosts.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=await read('data/skills.json');
async function write(path,body){const original=await fs.readFile(path,'utf8').catch(e=>{if(e.code==='ENOENT')return null;throw e;});if(original!==body){const temp=path+'.tmp';await fs.writeFile(temp,body);await fs.rename(temp,path);}}
const rows=(value,path='skillPointCosts')=>Object.entries(value).flatMap(([k,v])=>v&&typeof v==='object'?rows(v,`${path}.${k}`):[`| ${path}.${k} | ${v} |`]);
function patch(block,skill){return block.replace(/^\| skillPointCosts(?:\.[^|]*)? \|[^\n]*\r?\n/gm,'').replace(/(\| (?:Feld \| Gespeicherter Wert|Gespeichertes Feld \| Wert) \|\r?\n\| --- \| --- \|\r?\n)/,`$1${rows(skill.skillPointCosts).join('\n')}\n`);}
const summaries=[];
for(const file of (await fs.readdir('data/balancing')).filter(f=>f.endsWith('-skill-review.json'))){
  const path=`data/balancing/${file}`,r=await read(path);if(!r.skills)continue;
  r.skills=r.skills.map(s=>({...s,skillPointCosts:catalog.find(c=>c.nr===s.nr).skillPointCosts}));await write(path,JSON.stringify(r,null,2)+'\n');
  const skills=(r.skillNumbers??r.skills.map(s=>s.nr)).map(nr=>catalog.find(s=>s.nr===nr));
  const costs=skills.map(s=>({nr:s.nr,name:s.skillName_de,costs:skillPointCostRanks(s,r.classKey)}));
  const total=costs.reduce((sum,s)=>sum+s.costs.reduce((a,b)=>a+b,0),0);
  summaries.push({classKey:r.classKey,total,skills:costs});
  const mdPath=`docs/balancing/classes/${file.replace('-skill-review.json','-skills.md')}`;
  let md=await fs.readFile(mdPath,'utf8');
  for(const s of skills){const pattern=new RegExp(`(^### ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^### \\d+:|^## |$(?![\\s\\S]))`,'m');md=md.replace(pattern,b=>patch(b,s));}
  md=md.replace(/<!-- full-skill-point-costs:start -->[\s\S]*?<!-- full-skill-point-costs:end -->\s*/,'');
  md+=`\n<!-- full-skill-point-costs:start -->\n## Skillpunktkosten je Stufe\n\nAktuell vollständig gespeichert: **${total} SP** für alle ${skills.length} Skills einschließlich günstiger Taming-Sonderkosten. Weitere Charakterlevel für einzelne Ausbaustufen sind davon getrennt und noch zu verteilen. Alte Pauschalsummen in historischen Prüfabschnitten gelten nicht für diese Preise.\n\n| Nr | Skill | SP je Skillstufe | Gesamt-SP |\n| ---: | --- | --- | ---: |\n`+costs.map(s=>`| ${s.nr} | ${s.name} | ${s.costs.join(' / ')} | ${s.costs.reduce((a,b)=>a+b,0)} |`).join('\n')+'\n<!-- full-skill-point-costs:end -->\n';
  await write(mdPath,md);
}
for(const path of ['docs/balancing/shared-creature-skills.md','docs/balancing/shared-training-skills.md']){let md=await fs.readFile(path,'utf8');for(const s of catalog){const pattern=new RegExp(`(^## ${s.nr}:[^\\n]*\\r?\\n[\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m');md=md.replace(pattern,b=>patch(b,s));}await write(path,md);}
await write('data/balancing/full-skill-point-costs-by-class.json',JSON.stringify({status:'completeStoredCosts',classes:summaries},null,2)+'\n');
const totals=await read('data/balancing/class-skill-points.json');totals.status='Complete current rank prices defined; legacy sp fields retained as historical';totals.currentCostRules='data/balancing/full-skill-point-costs-decision.json';
for(const c of totals.classes){const summary=summaries.find(s=>s.classKey===c.key);if(summary){c.currentTotalCost=summary.total;c.definedFirstStageCost=summary.skills.reduce((sum,s)=>sum+s.costs[0],0);}}
await write('data/balancing/class-skill-points.json',JSON.stringify(totals,null,2)+'\n');
await write('docs/balancing/starter-skill-point-costs.md','# Skillpunktkosten\n\nDie vollständigen Stufenpreise sind in Skillkatalog und Entwicklungsdatenbank gespeichert. Die Tabelle „Skillpunktkosten je Stufe“ in jeder Klassendatei zeigt sämtliche Einzelkosten und die tatsächliche Klassensumme.\n\nRegulärer Ausbau: 300 SP je Skill. Erstes Lernlevel ab 55: 400 SP je Skill. Kosten steigen innerhalb des Skills. Bereits festgelegte günstige Einstiegsstufen bleiben erhalten, soweit der Skill mehrere Stufen hat. Taming-Skills kosten ihre bisherigen Freischaltkosten plus einen SP mehr pro weiterer Stufe. Ein einstufiger regulärer Skill kostet 300 beziehungsweise 400 SP. Das alte Feld `skillpoints` ist historisch; `skillPointCosts` ist maßgeblich.\n\nDie Levelvergabe bis Level 40 umfasst 2000 SP. Weitere Lernlevel je Ausbaustufe, Oberwelt-SP-Belohnungen und automatische Auszahlungen sind getrennte Aufgaben.\n');
console.log(JSON.stringify(summaries.map(s=>({class:s.classKey,total:s.total}))));
