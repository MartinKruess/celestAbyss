import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const reportPath='data/balancing/all-class-ten-minute-full-buff-attack-modes.json';
const docPath=await retiredBalancingReportPath('docs/balancing/all-class-ten-minute-full-buff-attack-modes.md');
const [report,skills,comparison,model,rotations]=await Promise.all([reportPath,'data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json'].map(read));
const freeAutoSources=new Set(skills.filter(s=>s.effects?.some(e=>e.type==='triggeredAttack'&&e.applicationTrigger==='ownBasicAttackHit')).map(s=>s.nr));
const classes=report.classes.map(c=>{
 const r=c.skillsPreferred.result;
 const automaticExtras=r.skills.filter(s=>freeAutoSources.has(s.nr)).reduce((n,s)=>n+s.damage,0);
 const autoRelatedDamage=r.autoDamage+automaticExtras,activeSkillDamage=r.skillDamage-automaticExtras;
 assert(Math.abs(autoRelatedDamage+activeSkillDamage-c.skillsPreferred.characterDamage)<1e-5);
 const breakdown={directAutoDamage:r.autoDamage,automaticAutoExtras:automaticExtras,autoRelatedDamage,activeSkillDamage,autoShare:autoRelatedDamage/c.skillsPreferred.characterDamage,activeSkillShare:activeSkillDamage/c.skillsPreferred.characterDamage};
 c.skillsPreferred.attackSourceBreakdown=breakdown;
 return {key:c.key,name:c.name,total:c.skillsPreferred.characterDamage,...breakdown};
});
// Diagnostic variant only: honor real durations for selected buffs, while all other
// buffs retain the requested permanent state. No definitions or DB records change.
let source=await fs.readFile('services/timedDamageSimulation.js','utf8');
const needle="const duration=cfg.permanentPrebuffs||permanentBuffNumbers.has(s.nr)||s.activation==='toggle'||[158,240].includes(s.nr)?Infinity:end(s);";
assert(source.includes(needle));
source=source.replace(needle,"const duration=(cfg.permanentPrebuffs&&!cfg.actualDurationBuffs?.includes(s.nr))||permanentBuffNumbers.has(s.nr)||s.activation==='toggle'||[158,240].includes(s.nr)?Infinity:end(s);");
source=source.replace(/from '\.\/([^']+)'/g,(_,p)=>"from '"+pathToFileURL(resolve('services',p)).href+"'");
const {simulateClass}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const durationChecks=[];
for(const [key,numbers]of [['butcher',[12]],['butcher',[12,173,174,175]],['hunter',[157]]]){
 const c=report.classes.find(c=>c.key===key),pre=comparison.passiveRows.find(r=>r.key===key);
 const result=simulateClass({pre,skills,model,attackNumbers:rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr),config:{...c.autoOnly.result.config,actualDurationBuffs:numbers}});
 assert.equal(result.durationSeconds,600);assert(result.finalMana>=0);
 durationChecks.push({key,actualDurationBuffs:numbers,characterDamage:result.autoDamage+result.skillDamage,directAutoDamage:result.autoDamage,automaticExtras:result.skillDamage,autoActions:result.skills.find(s=>s.nr==='auto')?.applications,finalMana:result.finalMana});
}
const output={scope:'Damage attribution only; no balance changes',autoAttribution:'Basic attacks plus automatic extra projectiles from basic attacks. Activated charge skills such as Explosive Arrow remain active skill damage and are explicitly dependent on basic attacks.',classes,durationDiagnostic:{scope:'Only listed buffs regain real durations/cooldowns and refresh costs; all other buffs remain permanent. Initial preparation remains free. This is not a fully normal-uptime combat simulation.',rows:durationChecks}};
await fs.writeFile('data/balancing/attack-source-breakdown.json',JSON.stringify(output,null,2)+'\n');
await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE'),percent=n=>(100*n).toFixed(1).replace('.',',')+' %';
let md=(await fs.readFile(docPath,'utf8')).split('\n## Aufschlüsselung nach Schadensquelle')[0];
md+='\n## Aufschlüsselung nach Schadensquelle\n\nAutomatisch durch Auto-Attacks ausgelöste Ahnenpfeile zählen hier zur Auto-Attack-Seite. Das interne Schadensledger führt sie unter Skill Nr. 157; sie sind jedoch keine gesondert gewirkten Angriffe. Aktivierte Ladungsskills wie Explosionspfeil bleiben aktive Skills, benötigen aber Auto-Attacks als Auslöser. Keine Änderung der Gesamtschäden. Beschwörungen separat.\n\n| Klasse | Direkte Auto-Attacks | Automatische Auto-Attack-Zusätze | Aktive Skills | Anteil aktive Skills |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const c of classes)md+=`| ${c.name} | ${f(c.directAutoDamage)} | ${f(c.automaticAutoExtras)} | ${f(c.activeSkillDamage)} | ${percent(c.activeSkillShare)} |\n`;
md+='\n### Butcher: aktive Angriffe im kombinierten Lauf\n\n| Skill | Anwendungen | Schaden je Anwendung | Gesamtschaden | Mana |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const s of report.classes.find(c=>c.key==='butcher').skillsPreferred.result.skills.filter(s=>s.kind==='skill'&&s.applications>0))md+=`| ${s.name} | ${s.applications} | ${f(s.damage/s.applications)} | ${f(s.damage)} | ${f(s.manaSpent)} |\n`;
md+='\n### Diagnose der permanent gehaltenen Kurzbuffs\n\nDie folgenden Werte stammen aus separaten reinen Auto-Attack-Läufen über 600 Sekunden. Nur die genannten Buffs erhalten ihre tatsächlichen Laufzeiten und Abklingzeiten zurück; alle übrigen Eigen-/Gruppenbuffs bleiben permanent. Die Haupttabelle bleibt unverändert.\n\n| Gegenprobe | Auto-Attack-bezogener Charakterschaden |\n| --- | ---: |\n';
for(const row of durationChecks)md+=`| ${row.key}: echte Laufzeiten für ${row.actualDurationBuffs.map(n=>skills.find(s=>s.nr===n).skillName_de).join(', ')} | ${f(row.characterDamage)} |\n`;
md+='\nAufladung gewährt auf Maximalstufe +320 P-Angriff und +28 Stärke für 15 Sekunden bei 122 Sekunden Cooldown. Blutrausch gibt +10 Punkte Angriffsgeschwindigkeit für 60 Sekunden bei 300 Sekunden Cooldown; Bis in den Tot +15 Punkte für 15 Sekunden bei 141 Sekunden Cooldown. Geist des Kriegers hält 270 Sekunden bei 420 Sekunden Cooldown. Pfeil der Vorfahren hält 12 Sekunden bei 90 Sekunden Cooldown und erzeugt maximal 3 × 160 zusätzlichen Schaden je erfolgreicher Auto-Attack. Ihre permanente Aktivität verstärkt die reinen Auto-Attack-Werte erheblich.\n\nBeim Butcher ist Mana im kombinierten Vollbuff-Lauf kein Engpass: keine registrierte Mana-Wartezeit und voller Mana-Pool am Ende. Viele Angriffe haben lange Cooldowns oder Flächen-/Kontroll-/Heil-/Krit-Nutzen, der an der einzelnen widerstandslosen Puppe teilweise nicht bewertet wird. Der zufällige Kritbonus von Zorn des Henkers wird im deterministischen Test nicht ausgewürfelt.\n';
await fs.writeFile(docPath,md);
console.log(JSON.stringify({classes,durationChecks}));
