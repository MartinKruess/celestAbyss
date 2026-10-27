import {legacySkillType,skillClassificationLabel,withSkillClassification} from '../services/skillClassification.js';
import fs from 'node:fs/promises';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=(await read('data/skills.json')).map(withSkillClassification);
const count=(await read('data/reports/class-skill-counts.json')).counts.find(c=>c.name==='Butcher / Destroyer');
const growth=(await read('data/balancing/class-base-growth.json')).classes.find(c=>c.key==='butcher');
const equipment=await read('data/balancing/ranked-equipment.json');
const skills=count.skillNumbers.map(nr=>catalog.find(s=>s.nr===nr));
const reviewPassiveCount=skills.filter(s=>legacySkillType(s)==='passive').length;
const reviewActiveCount=skills.length-reviewPassiveCount;
const f=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const esc=v=>String(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
const statNames={healthRegen:'HP-Regeneration',luck:'Luck',critChanceRating:'Crit-Chance-Wert',str:'Stärke',vita:'Vita',wis:'Wisdom',agi:'Agility',amb:'Ambush',int:'Intelligenz',dex:'Dexterity',health:'HP',mana:'Mana',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Defense',mdef:'M-Defense',atkSpeed:'Attack Speed',movementSpeed:'Movement Speed'};
const curve=(c,l)=>!c?null:c.type==='table'?c.values[l-1]:c.type==='fixed'?c.base:c.base+(l-1)*c.perLevel;
const value=(s,k,v)=>s.statBonusUnits?.[k]==='fraction'?f(v*100)+' %':f(v);
const shared=new Set([2,45,75,87,133,134,135,136,137,138,139,140,144,201]);
const groups={};for(const s of skills){const label=s.category==='creature'?(legacySkillType(s)==='passive'?'Kreaturen passiv':'Kreaturen aktiv'):legacySkillType(s)==='passive'?'Übrige Passive einschließlich Procs':legacySkillType(s)==='selfbuff'?'Eigenbuffs':legacySkillType(s)==='buff'?'Gruppenbuffs':legacySkillType(s)==='Movement'?'Bewegungsbuffs':'Aktive Skills (Angriff/Heilung/Unterstützung)';(groups[label]??=[]).push(s);}
if(new Set(skills.map(s=>s.nr)).size!==count.total)throw Error('Unexpected count');
let md='# Butcher / Destroyer: Werte und Skillprüfung\n\n**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie beim Abenteurer. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.\n\n| Art | Anzahl | Skills |\n| --- | ---: | --- |\n';
for(const[label,list]of Object.entries(groups))md+=`| ${label} | ${list.length} | ${list.map(s=>s.skillName_de).join(', ')} |\n`;
md+='\n## Ewiger Sieger: festgelegter Kampf-Proc\n\n**DB-Nr. 176, maximal 10 Stufen.** Unter 15 Prozent Leben haben eigene Angriffe eine Proc-Chance von 80 Prozent, wenn der Skill bereit ist. Für 30 Sekunden +3 bis +21 Stärke und +3 bis +21 Vita; Cooldown 180 Sekunden. Keine Kosten oder direkte Heilung. Dieser Buff gehört zu den 32 Skills, ist aber vor dem Kampf nicht aktiv. Die Wiederbelebungsmechanik ist der separate Skill Ungebrochen.\n\n';
md+='\n## Basis und Ausrüstung\n\nR1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.\n\n';
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']];
for(const equipped of [false,true]){
md+=`### ${equipped?'Mit Rüstung und Zweihandaxt':'Basis ohne Ausrüstung'}\n\n| Wert | ${growth.levels.map(x=>'Level '+x.level).join(' | ')} |\n| --- | ${growth.levels.map(()=>'---:').join(' | ')} |\n`;
const totals=growth.levels.map(x=>{const r={...x.stats};if(!equipped)return r;const rank=equipment.rankByLevel[x.level];const a=equipment.armor.find(a=>a.name==='Butcher'&&a.rank===rank);const w=equipment.weapons.find(w=>w.name==='2H Axt'&&w.rank===rank);r.maxHealth+=a.converted.health;r.maxMana+=a.converted.mana;r.physicalDefense+=a.converted.physicalDefense;r.magicalDefense+=a.converted.magicalDefense;const v=c=>(w.raw.find(b=>b.column===c)?.value??0);r.physicalAttack+=v(4)+v(3)*1.8;return r;});
for(const[k,label]of fields)md+=`| ${label} | ${totals.map(x=>f(x[k])).join(' | ')} |\n`;
md+='\n';}
md+='Die neue Zweihandaxt-Stärke ist nur notiert, nicht in der Datenbank oder Vergleichsrechnung übernommen: auf R6 45 statt 40. Damit wäre P-Angriff auf Level 60 715,2 statt 706,2. Alle übrigen Equipment-Vorschläge bleiben ebenfalls unverändert notiert. Grundregeneration: 25 Mana und 12 HP pro Tick. Intervall wird später in Unreal geprüft.\n\n';
const audit=skills.map(s=>{const missing=[];
const automatic=legacySkillType(s)==='passive'||s.activation==='automatic';
if(!automatic&&s.resourceCosts===undefined&&s.mana===undefined)missing.push('Kosten');
if(!automatic&&s.castTimeSeconds===undefined&&!s.castTimeScaling?.type)missing.push('Castzeit');
if(!automatic&&s.cd===undefined&&!s.cooldownScaling?.type)missing.push('Cooldown');
if(s.maxSkillLv>1&&!Object.keys(s.statScaling??{}).length&&!(s.effects??[]).some(e=>e.valueScaling?.type||e.durationScaling?.type)&&!s.attributeExchangeSettings?.sourceFractionScaling?.type&&!s.taming?.chanceMultiplierScaling?.type)missing.push('Wirkungs-/Levelskalierung');
if(s.nr===135)missing.push('konkrete Wirkung');
return {nr:s.nr,name:s.skillName_de,missing};});
md+='## Vollständigkeitsprüfung aller 32 Skilldefinitionen\n\nDie Detailblöcke enthalten den vollständigen Datenbankexport. Fehlende aktive Kosten/Castzeiten werden nicht ergänzt oder als null angenommen. Passive erfordern keine aktive Castzeit; nicht angegebene Zusatzkosten bleiben unbestimmt.\n\n| Nr | Skill | Tatsächlich fehlende Grundangaben |\n| ---: | --- | --- |\n';
for(const row of audit)md+=`| ${row.nr} | ${row.name} | ${row.missing.join(', ')||'Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext'} |\n`;
md+='\nDarstellungsfehler korrigiert: Ungebrochen erzeugt bei leerer valueScaling-Struktur keinen NaN-Eintrag mehr; Tamen zeigt seine vorhandene Chancen-Skalierung. Einstufige Skills benötigen keine Levelskalierung.\n\n';
md+='## Skillübersicht\n\n| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |\n| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n';
for(const s of skills){
const stats=Object.entries(statNames).filter(([k])=>s[k]!==undefined&&!(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana'))).map(([k,label])=>`${label} +${value(s,k,s[k])}`).join('<br>');
let effects=(s.effects??[]).map(e=>`${e.type}, Ziel ${e.target}${e.stat?', '+e.stat:''}${e.value!==undefined?', '+f(e.value):''}`).join('<br>');
let scaling=Object.entries(s.statScaling??{}).map(([k,c])=>`${statNames[k]??k}: ${value(s,k,curve(c,1))} bis ${value(s,k,curve(c,s.maxSkillLv))}`).concat((s.effects??[]).filter(e=>e.valueScaling?.type).map(e=>`${e.type}/${e.stat??''}: ${f(curve(e.valueScaling,1)*(e.unit==='fraction'?100:1))} bis ${f(curve(e.valueScaling,s.maxSkillLv)*(e.unit==='fraction'?100:1))}${e.unit==='fraction'?' %':''}`)).join('<br>');
if(s.attributeExchangeSettings?.sourceFractionScaling?.type)scaling+=(scaling?'<br>':'')+'Vita → Stärke 1:1: '+f(curve(s.attributeExchangeSettings.sourceFractionScaling,1)*100)+' bis '+f(curve(s.attributeExchangeSettings.sourceFractionScaling,s.maxSkillLv)*100)+' % Vita';
if(s.taming?.chanceMultiplierScaling?.type)scaling+=(scaling?'<br>':'')+'Chancenfaktor: ×'+f(curve(s.taming.chanceMultiplierScaling,1))+' bis ×'+f(curve(s.taming.chanceMultiplierScaling,s.maxSkillLv));
const permanent=legacySkillType(s)==='passive'&&!s.cd&&!s.triggerCondition;
const automatic=legacySkillType(s)==='passive'||s.activation==='automatic';
const costs=s.resourceCosts?s.resourceCosts.length?s.resourceCosts.map(c=>`${c.resource==='mana'?'Mana-Kosten':c.resource+'-Kosten'}: ${f(curve(c.scaling,1))} bis ${f(curve(c.scaling,s.maxSkillLv))}${c.unit==='fraction'?' (Anteil)':''}`).join('<br>'):'Keine':s.mana??(automatic?'Keine aktive Nutzung; Zusatzkosten nicht separat definiert':'Offen');
const range=c=>c?f(curve(c,1))+' bis '+f(curve(c,s.maxSkillLv)):null;
if(s.animationDurationSeconds!==undefined)effects+=(effects?'<br>':'')+`Animation ${f(s.animationDurationSeconds)} s (vorläufig)`;
if(s.attackArea)effects+=(effects?'<br>':'')+(s.attackArea.shape==='circle'?`Fläche: ${f(s.attackArea.radiusMeters)} m Radius um Spieler`:`Fläche: ${f(s.attackArea.rangeMeters)} m vor Spieler`);
if(s.attackExecution?.targetMode==='singleEnemy')effects+=(effects?'<br>':'')+'Ein einzelnes Ziel';
const effectDurations=(s.effects??[]).filter(e=>e.durationSeconds!==undefined).map(e=>`${e.controlKind??e.stat??e.type}: ${f(e.durationSeconds)}${e.durationScaling?' bis '+f(curve(e.durationScaling,s.maxSkillLv)):''} s`).join('<br>');
const shownDuration=effectDurations||(range(s.durationScaling)??s.dur??(s.animationDurationSeconds!==undefined?'Wirkung einmalig; Animation '+f(s.animationDurationSeconds)+' s':s.hasLingeringDamage===false?'0 (einmalig)':permanent?'Permanent':'Nicht gespeichert'));
const cap=s.learningLimits?.defaultMaxLevel;
const limit=cap?`${s.maxSkillLv} / Butcher ${cap}`:s.nr===133?`${s.maxSkillLv} / geplant 1, noch nicht hinterlegt`:s.maxSkillLv;
const flags=[];if(shared.has(s.nr))flags.push('Gemeinsame Definition');if(s.maxSkillLv>1&&!scaling&&!s.taming?.chanceMultiplierScaling?.type)flags.push('Levelskalierung prüfen');if(s.resourceCosts===undefined&&s.mana===undefined&&!automatic)flags.push('Kosten offen');if(legacySkillType(s)!=='passive'&&s.castTimeSeconds===undefined&&!s.castTimeScaling)flags.push('Cast Time offen');if(s.nr===2)flags.push('Rassengrundskill: bisherige Namensentscheidung beachten');if(s.nr===131)flags.push('Waffentraining-spezifische Skalierung fehlt');if(s.nr===12||s.nr===98)flags.push('Wirkung/Einordnung prüfen');
md+=`| ${s.nr} | ${s.skillName_de} | ${skillClassificationLabel(s)} | ${limit} | ${stats||s.description_de}${effects?'<br>'+effects:''} | ${scaling||(s.maxSkillLv===1?'Eine Stufe; keine Levelskalierung nötig':'Nicht vollständig gespeichert')} | ${costs} | ${range(s.cooldownScaling)??s.cd??(permanent?'Entfällt':'Offen')} | ${range(s.castTimeScaling)??s.castTimeSeconds??(legacySkillType(s)==='passive'?'Entfällt':'Offen')} | ${shownDuration} | ${flags.filter(x=>!(s.nr===131&&s.statScaling&&x==='Waffentraining-spezifische Skalierung fehlt')&&!(s.nr===12&&legacySkillType(s)==='selfbuff'&&x==='Wirkung/Einordnung prüfen')).join('; ')||'Lernvoraussetzungen und Ausführung prüfen'} |\n`;
}
function flatten(v,p='',out=[]){if(Array.isArray(v)){if(!v.length)out.push([p,'[]']);else v.forEach((x,i)=>flatten(x,`${p}[${i}]`,out));}else if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v))flatten(x,p?p+'.'+k:k,out);}else out.push([p,v===null?'null':f(v)]);return out;}
md+='\n## Detaildaten\n\nGemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.\n';
for(const s of skills){md+=`\n### ${s.nr}: ${s.skillName_de}\n\n${s.description_de}\n\n| Feld | Gespeicherter Wert |\n| --- | --- |\n`;for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))md+=`| ${esc(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana')?'mana (Aktivierungskosten, kein Bonus)':k)} | ${esc(v)} |\n`;}
md+='\n## Gemeinsame Blöcke\n\n[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Tamen verwendet beim Butcher die gespeicherte Standard-Lerngrenze 1; die Definition umfasst für andere Klassen bis zu 3 Stufen.\n\n## Reihenfolge\n\nZuerst die noch unvollständigen Butcher-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.\n';
md=md.replace(/\*\*\d+ unterschiedliche zugeordnete Skills[\s\S]*?\*\*/,`**${skills.length} unterschiedliche zugeordnete Skills: ${reviewActiveCount} aktive und ${reviewPassiveCount} passive.**`);
md=md.replace('\n\n','\n\nEinteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.\n\n').replaceAll('| dmgType |','| dmgType (Altformat) |');
const pointSummary=JSON.parse(await fs.readFile('data/balancing/class-skill-points.json','utf8')).classes.find(c=>c.key==='butcher');
md=md.replace('## Basis und Ausrüstung',`## Skillpunkte\n\n**${pointSummary.sp} Skillpunkte** für alle ${skills.length} Skills auf ihrer maximal lernbaren Stufe. Jede gelernte Stufe kostet einen Punkt, einschließlich Stufe 1. Klassenspezifische Lerngrenzen sind berücksichtigt.\n\n**Aufladung (Nr. 12)** hat eine einzige lernbare Stufe und übernimmt vollständig die bisherigen Werte von Stufe 5: +25 Stärke, +240 maximale Lebenspunkte, +200 P-Angriff, 15 Sekunden Dauer, 102 Mana Aktivierungskosten, 122 Sekunden Cooldown und feste Castzeit 0,1 Sekunden. Damit entfallen vier Skillpunkte bei unveränderter maximaler Wirkung.\n\n## Basis und Ausrüstung`);
const {withSkillLearningOverview} = await import('../services/skillLearningOverview.js');
const existingLearningNotes = await fs.readFile('docs/balancing/classes/butcher-skills.md', 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
await fs.writeFile('docs/balancing/classes/butcher-skills.md',withSkillLearningOverview(md,{skills,classKey:'butcher',existingMarkdown:existingLearningNotes}));
await fs.writeFile('data/balancing/butcher-skill-review.json',JSON.stringify({classKey:'butcher',total:skills.length,active:reviewActiveCount,passive:reviewPassiveCount,skillNumbers:skills.map(s=>s.nr),skills,completenessAudit:audit,source:'Current database-exported skill catalog',equipment:'Original rank values; proposed strength changes not applied'},null,2)+'\n');
console.log(`Review updated: ${skills.length} skills, ${reviewActiveCount} active, ${reviewPassiveCount} passive.`);
