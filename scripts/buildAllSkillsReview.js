import fs from 'node:fs/promises';
import {resolveSkillAtLevel} from '../services/skillLevel.js';

const remainingPassives=process.argv.includes('--remaining-passives');
const passiveOnly=process.argv.includes('--passive')||remainingPassives;
 // User-reviewed selection of the four shared passives from the current balancing discussion.
const reviewedExclusions=new Set([1,2,5,6,7,18,22,26,32,42,43,44,45,52,54,60,73,81,83,84,93,102,114,116,119,120,122,123,129,131,132,134,135,138,144,176,177,181,182,201,203,208,209,214,222,237,241,243,245,246,247,252,253,254,257,259,260,261]);
// Single-class passives are deferred; Endurance Training is now reviewed.
for(const nr of [4,10,28,33,139,141,143,187])reviewedExclusions.add(nr);
const skills=JSON.parse(await fs.readFile('data/skills.json','utf8')).filter(s=>(!passiveOnly||s.type==='passive')&&(!remainingPassives||!reviewedExclusions.has(s.nr))).sort((a,b)=>a.nr-b.nr);
const manifest=JSON.parse(await fs.readFile('data/skills.manifest.json','utf8'));
const escape=value=>String(value??'–').replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
const classes=s=>s.isClassCore&&s.allowedRaces?.length?`Volk: ${s.allowedRaces.join(', ')}`:(s.charClass??[]).join(', ');
const labels={str:'Stärke',vita:'Vitalität',int:'Intelligenz',wis:'Willenskraft',dex:'Geschick',agi:'Agilität',luck:'Glück',faith:'Faith',vic:'Victim',amb:'Ambush',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Abwehr',mdef:'M-Abwehr',health:'Leben',mana:'Mana',block:'Block',atkSpeed:'Angriffsgeschwindigkeit',manaRegen:'Mana-Regeneration',healthRegen:'Leben-Regeneration',cd:'Cooldown',dur:'Dauer',castTime:'Castzeit'};
let md=`# Alle Skills – vollständige Gesamtliste\n\n${skills.length} Skilldefinitionen aus dem aktuellen Datenbankexport vom ${manifest.exportedAt}. Aktive Skills, Passive und Reserve-Skills sind enthalten. Klassenbezeichnungen entsprechen den gespeicherten Zuordnungen einschließlich Aufstiegsklassen; Lernbegrenzungen und Klassenspezialisierungen stehen im vollständigen Datensatz.\n\nDie Wertetabellen zeigen den auf der jeweiligen Stufe aufgelösten direkten Wert. Einheiten, Auslöser, abgeleitete Boni und Bedingungen sind in der Beschreibung und im vollständigen Datensatz angegeben. Unvollständige Definitionen werden unverändert dargestellt.\n\n| Nr. | Skill | Typ | Stufen | Zuordnung |\n| ---: | --- | --- | ---: | --- |\n`;
for(const s of skills)md+=`| ${s.nr} | [${escape(s.skillName_de)}](#skill-${s.nr}) | ${escape(s.type??s.category)} | ${s.maxSkillLv} | ${escape(classes(s))} |\n`;
for(const s of skills){
 md+=`\n<a id="skill-${s.nr}"></a>\n\n## ${s.nr}: ${s.skillName_de}\n\n**Typ:** ${s.type??s.category} · **Stufen:** ${s.maxSkillLv}\n\n**Zuordnung:** ${classes(s)}\n\n${s.description_de??'Keine deutsche Beschreibung hinterlegt.'}\n`;
 const levels=Array.from({length:s.maxSkillLv},(_,i)=>resolveSkillAtLevel(s,i+1));
 const keys=Object.keys(labels).filter(k=>levels.some(r=>typeof r[k]==='number'));
 if(keys.length){
  md+='\n| Stufe | '+keys.map(k=>labels[k]).join(' | ')+' |\n| ---: | '+keys.map(()=>'---:').join(' | ')+' |\n';
  for(let i=0;i<levels.length;i++)md+=`| ${i+1} | `+keys.map(k=>escape(levels[i][k])).join(' | ')+' |\n';
 }
 md+='\n<details>\n<summary>Vollständiger aktueller Datensatz einschließlich Effekten, Lernregeln und Klassenspezialisierungen</summary>\n\n```json\n'+JSON.stringify(s,null,2)+'\n```\n\n</details>\n';
}
if(passiveOnly){
 md=md.replace('# Alle Skills – vollständige Gesamtliste','# Alle passiven Skills').replace('Aktive Skills, Passive und Reserve-Skills sind enthalten.','Enthalten sind ausschließlich als passiv klassifizierte Skills, einschließlich automatisch ausgelöster Effekte.');
 if(remainingPassives)md=md.replace('# Alle passiven Skills','# Verbleibende passive Skills – Auswahl zur Durchsicht').replace('Enthalten sind ausschließlich als passiv klassifizierte Skills, einschließlich automatisch ausgelöster Effekte.','Gefilterte Auswahl nach Absprache: Rassen-, Waffen-, Rüstungs- und Erweiterungsskills sowie die ausdrücklich ausgeschlossenen Einzel-Skills sind ausgeblendet. Auch Passive mit Angriffs-, Treffer- oder Todesauslöser sind ausgeblendet. Die Auswahl enthält die vier zuletzt besprochenen gemeinsamen Passiven mit ihren aktuellen Werten. Die vollständige passive Gesamtliste bleibt separat erhalten.');
 await fs.writeFile(remainingPassives?'docs/balancing/remaining-passive-skills.md':'docs/balancing/passive-skills.md',md);
 console.log(`Generated passive Markdown catalog with ${skills.length} skills.`);
}else{
const allSkillsPath='docs/balancing/all-skills.md';
if(await fs.readFile(allSkillsPath,'utf8').catch(error=>{if(error.code==='ENOENT')return null;throw error;}) !== md){
  const temporaryPath=allSkillsPath+'.tmp';
  await fs.writeFile(temporaryPath,md);
  await fs.rename(temporaryPath,allSkillsPath);
}
const path='docs/skill-catalog.md';
let intro=await fs.readFile(path,'utf8');
intro=intro.replace(/der \d+ aktuellen Skilldefinitionen/,`der ${skills.length} aktuellen Skilldefinitionen`).replace(/die \d+ Einträge ohne eindeutige Namenszuordnung/,`die ${manifest.unresolvedSourceEntries} Einträge ohne eindeutige Namenszuordnung`);
if(!intro.includes('balancing/all-skills.md'))intro=intro.replace('# Lokaler Skill-Katalog','# Lokaler Skill-Katalog\n\nDie lesbare **[Gesamtliste aller Skills](balancing/all-skills.md)** enthält sämtliche aktuellen Definitionen, Beschreibungen, Stufenwerte und vollständigen Datensätze. Sie wird mit `node scripts/buildAllSkillsReview.js` aus dem aktuellen Katalog erstellt.');
await fs.writeFile(path,intro);
console.log(`Generated complete Markdown catalog with ${skills.length} skills.`);
}
