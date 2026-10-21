import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [comparison,skills,model,rotations,buffs]=await Promise.all(['data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-buffed-timed-damage.json'].map(read));
assert.equal(buffs.buffScope,'selfOnly');
const classes=[];
for(const reference of buffs.unbuffedResults){
 const pre=comparison.passiveRows.find(r=>r.key===reference.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const ownBuffNumbers=buffs.results.find(r=>r.key===pre.key).buffNumbers;
 assert(!ownBuffNumbers.includes(158));
 const attackNumbers=rotations.classes.find(r=>r.key===pre.key).rows.map(r=>r.nr),modes={};
 for(const attackMode of ['autoOnly','skillsOnly']){
  const result=simulateClass({pre,skills,model,attackNumbers,config:{...reference.config,baseAttacksPerSecond:1.3,rangedAttacksPerSecond:1.1,duration:120,targetHealth:10000000,enableOwnBuffs:true,prebuffOwnBuffs:true,ownBuffNumbers,attackMode}});
  assert.equal(result.durationSeconds,120);assert(result.finalMana>=0);
  assert(Math.abs(result.totalDamage-result.autoDamage-result.skillDamage-result.summonDamage)<1e-6);
  if(attackMode==='skillsOnly')assert(!result.skills.some(s=>s.nr==='auto'));
  if(attackMode==='autoOnly')assert(!result.skills.some(s=>attackNumbers.includes(s.nr)&&s.applications>0));
  modes[attackMode]={characterDamage:result.autoDamage+result.skillDamage,summonDamage:result.summonDamage,totalDamage:result.totalDamage,result};
 }
 classes.push({key:pre.key,name:reference.name,ownBuffNumbers,...modes});
 console.log(JSON.stringify({class:reference.name,auto:modes.autoOnly.characterDamage,skills:modes.skillsOnly.characterDamage,autoSummon:modes.autoOnly.summonDamage,skillsSummon:modes.skillsOnly.summonDamage}));
}
const assumptions=[
 'Nahkampf-Basis 1,3 Auto-Attack-Aktionen pro Sekunde; gemeinsame Punktsumme durch die Nahkampf-Sättigungskurve, maximal 2 Aktionen pro Sekunde bei 350 Punkten. Jäger und Seelenjäger: Grundfrequenz 1,1; Magierfrequenzen unverändert. Angriffsgeschwindigkeit verkürzt Castzeiten noch nicht. Agilitätsfaktor unverändert: 0,06 Punkte pro Agilität. Krit-/Block-/Ausweichkurven nicht als Zufallswürfe aktiviert.',
 'Je Klasse 120 Sekunden, Level 60 und R6-Grundausrüstung. Volle Ressourcen und alle im reinen Selbstbuff-Vergleich zugelassenen Selbstbuffs bereits bei t=0 aktiv; deren Vorbereitung liegt außerhalb der Messung. Keine Gruppenbuffs, kein Provozieren, keine regulären Pets oder zufälligen Procs.',
 'Abgelaufene Selbstbuffs werden bei Verfügbarkeit innerhalb der Messung erneuert und bezahlt. Maximalwerte und Ressourcenboni sind beim Start bereits berücksichtigt; spätere Erneuerungen füllen Ressourcen nicht kostenlos auf.',
 'Auto-only verwendet keine aktiven Schadensskills. Durch die Auto-Attacks ausgelöste Zusatztreffer aus Selbstbuffs, insbesondere Ahnenpfeile, gehören zum Charakterschaden dieser Variante. Reine Wut-, Seelenschuss- und Tarnungssetups ohne Nutzen für reine Auto-Attacks werden hier nicht aktiviert.',
 'Skills-only deaktiviert sämtliche Spieler-Auto-Attacks. Notwendige Skillsetups bleiben aktiv. Explosionspfeil wird nicht aktiviert, weil seine Ladungen ausschließlich durch Auto-Attacks ausgelöst werden. Auto-Attack-abhängige Mana-Rückgewinnung und Zusatzpfeile lösen ohne Auto-Attacks nicht aus. Cooldowns und Mana-Budget gelten unverändert; keine optimierte Suche nach anderen Skill-Auswahlen.',
 'Naturgeist, Seelenbegleiter und Morrak werden wie bisher beschworen, aber separat ausgewiesen und nicht in den Vergleich der Charakterangriffe eingerechnet. Beschwörung und Erneuerung beanspruchen regulär Zeit und Ressourcen.',
 'Nicht angreifendes Einzelziel ohne Abwehr, Verfehlwürfe oder zufällige Krits. Aktuelle Reaktionspausen und Angriffsübergänge bleiben erhalten. Die zuvor identifizierte feste 0,5-Sekunden-Sperre nach Auto-Attacks ist unverändert; im Skills-only-Lauf gibt es keine auslösenden Auto-Attacks.',
];
const report={generatedAt:new Date().toISOString(),durationSeconds:120,buffScope:'selfOnly',start:'prebuffedFullResources',assumptions,classes,inputHashes:Object.fromEntries(await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','services/timedDamageSimulation.js','services/attackSpeed.js'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])))};
await fs.writeFile('data/balancing/all-class-two-minute-attack-modes.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Zwei Minuten: nur Auto-Attacks gegenüber nur Skills\n\nAlle reinen Selbstbuffs bereits bei Messbeginn aktiv. Charakterschaden einschließlich eigener ausgelöster Zusatztreffer, Beschwörungen separat.\n\n| Klasse | Nur Auto-Attacks | Nur Skills, keine Auto-Attacks |\n| --- | ---: | ---: |\n';
for(const c of classes)md+=`| ${c.name} | ${f(c.autoOnly.characterDamage)} | ${f(c.skillsOnly.characterDamage)} |\n`;
md+='\n## Separater Beschwörungsschaden\n\n| Klasse | Im Auto-Attack-Lauf | Im Skill-Lauf |\n| --- | ---: | ---: |\n';for(const c of classes.filter(c=>c.autoOnly.summonDamage||c.skillsOnly.summonDamage))md+=`| ${c.name} | ${f(c.autoOnly.summonDamage)} | ${f(c.skillsOnly.summonDamage)} |\n`;
md+='\n## Regeln\n\n'+assumptions.map(x=>'- '+x).join('\n')+'\n';
for(const c of classes){md+=`\n## ${c.name}\n\n| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |\n| --- | ---: | ---: | ---: |\n`;for(const mode of ['autoOnly','skillsOnly']){const r=c[mode].result;md+=`| ${mode} | ${f(r.manaSpent)} | ${f(r.finalMana)} | ${r.skills.find(s=>s.nr==='auto')?.applications??0} |\n`;}md+='\n| Modus | Aktion | Anwendungen | Schaden | Mana |\n| --- | --- | ---: | ---: | ---: |\n';for(const mode of ['autoOnly','skillsOnly'])for(const s of c[mode].result.skills)md+=`| ${mode} | ${s.name} | ${s.applications} | ${f(s.damage)} | ${f(s.manaSpent)} |\n`;}
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/all-class-two-minute-attack-modes.md'),md);
