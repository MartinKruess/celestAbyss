import {legacySkillType,skillClassificationLabel,withSkillClassification} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {skillClassVariant} from '../services/skillClassVariant.js';
import fs from 'node:fs/promises';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=(await read('data/skills.json')).map(withSkillClassification);
const count=(await read('data/reports/class-skill-counts.json')).counts.find(c=>c.name==='Druide / Alchemist');
const growth=(await read('data/balancing/class-base-growth.json')).classes.find(c=>c.key==='druid');
const equipment=await read('data/balancing/ranked-equipment.json');
const skills=count.skillNumbers.map(nr=>skillClassVariant(catalog.find(s=>s.nr===nr),'druid'));
const reviewPassiveCount=skills.filter(s=>legacySkillType(s)==='passive').length;
const reviewActiveCount=skills.length-reviewPassiveCount;
const f=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const esc=v=>String(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
const statNames={healthRegen:'HP-Regeneration',luck:'Luck',critChanceRating:'Crit-Chance-Wert',str:'Stärke',vita:'Vita',wis:'Wisdom',agi:'Agility',amb:'Ambush',int:'Intelligenz',dex:'Dexterity',health:'HP',mana:'Mana',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Defense',mdef:'M-Defense',atkSpeed:'Attack Speed',movementSpeed:'Movement Speed'};
const curve=(c,l)=>!c?null:c.type==='table'?c.values[l-1]:c.type==='fixed'?c.base:c.base+(l-1)*c.perLevel;
const value=(s,k,v)=>s.statBonusUnits?.[k]==='fraction'?f(v*100)+' %':f(v);
const shared=new Set([1,6,15,38,41,44,106,133,134,135,136,137,138,139,144,201]);
const groups={};for(const s of skills){const label=s.category==='creature'?(legacySkillType(s)==='passive'?'Kreaturen passiv':'Kreaturen aktiv'):legacySkillType(s)==='passive'?'Übrige Passive einschließlich Procs':legacySkillType(s)==='selfbuff'?'Eigenbuffs':legacySkillType(s)==='buff'?'Gruppenbuffs':legacySkillType(s)==='Movement'?'Bewegungsbuffs':'Aktive Skills (Angriff/Heilung/Unterstützung)';(groups[label]??=[]).push(s);}
if(new Set(skills.map(s=>s.nr)).size!==count.total)throw Error('Unexpected count');
let md='# Druide / Alchemist: Werte und Skillprüfung\n\n**33 unterschiedliche zugeordnete Skills: 21 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.\n\n| Art | Anzahl | Skills |\n| --- | ---: | --- |\n';
for(const[label,list]of Object.entries(groups))md+=`| ${label} | ${list.length} | ${list.map(s=>s.skillName_de).join(', ')} |\n`;
md+='\n## Basis und Ausrüstung\n\nR1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.\n\n';
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']];
for(const equipped of [false,true]){
md+=`### ${equipped?'Mit Rüstung und Streitkolben':'Basis ohne Ausrüstung'}\n\n| Wert | ${growth.levels.map(x=>'Level '+x.level).join(' | ')} |\n| --- | ${growth.levels.map(()=>'---:').join(' | ')} |\n`;
const totals=growth.levels.map(x=>{const r={...x.stats};if(!equipped)return r;const rank=equipment.rankByLevel[x.level];const a=equipment.armor.find(a=>a.name==='Druid'&&a.rank===rank);const w=equipment.weapons.find(w=>w.name==='Mace'&&w.rank===rank);r.maxHealth+=a.converted.health;r.maxMana+=a.converted.mana;r.physicalDefense+=a.converted.physicalDefense;r.magicalDefense+=a.converted.magicalDefense;const v=c=>(w.raw.find(b=>b.column===c)?.value??0);r.physicalAttack+=v(4)+v(3)*1.8;r.magicalAttack+=v(6)+v(5)*1.8;return r;});
for(const[k,label]of fields)md+=`| ${label} | ${totals.map(x=>f(x[k])).join(' | ')} |\n`;
md+='\n';}
md+='Als Vergleichswaffe ist vorläufig ein Streitkolben angesetzt. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.\n\n';
md+='## Skillübersicht\n\n| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |\n| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n';
for(const s of skills){
const stats=Object.entries(statNames).filter(([k])=>s[k]!==undefined&&!(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana'))).map(([k,label])=>`${label} +${value(s,k,s[k])}`).join('<br>');
let effects=(s.effects??[]).map(e=>`${e.type}, Ziel ${e.target}${e.stat?', '+e.stat:''}${e.value!==undefined?', '+f(e.value):''}`).join('<br>');
const scaling=Object.entries(s.statScaling??{}).map(([k,c])=>`${statNames[k]??k}: ${value(s,k,curve(c,1))} bis ${value(s,k,curve(c,skillForClass(s,'druid').maxSkillLv))}`).concat((s.effects??[]).filter(e=>e.valueScaling).map(e=>`${e.type}/${e.stat??''}: ${f(curve(e.valueScaling,1)*(e.unit==='fraction'?100:1))} bis ${f(curve(e.valueScaling,skillForClass(s,'druid').maxSkillLv)*(e.unit==='fraction'?100:1))}${e.unit==='fraction'?' %':''}`)).join('<br>');
const permanent=legacySkillType(s)==='passive'&&!s.cd&&!s.triggerCondition;
const costs=s.resourceCosts?s.resourceCosts.length?s.resourceCosts.map(c=>`${c.resource==='mana'?'Mana-Kosten':c.resource+'-Kosten'}: ${f(curve(c.scaling,1))} bis ${f(curve(c.scaling,skillForClass(s,'druid').maxSkillLv))}${c.unit==='fraction'?' (Anteil)':''}`).join('<br>'):'Keine':s.manaCostScaling?f(curve(s.manaCostScaling,1))+' bis '+f(curve(s.manaCostScaling,skillForClass(s,'druid').maxSkillLv)):s.mana??(permanent?'Keine aktive Nutzung':'Offen');
const range=c=>c?f(curve(c,1))+' bis '+f(curve(c,skillForClass(s,'druid').maxSkillLv)):null;
if(s.animationDurationSeconds!==undefined)effects+=(effects?'<br>':'')+`Animation ${f(s.animationDurationSeconds)} s (vorläufig)`;
if(s.attackArea)effects+=(effects?'<br>':'')+(s.attackArea.shape==='circle'?`Fläche: ${f(s.attackArea.radiusMeters)} m Radius um Spieler`:`Fläche: ${f(s.attackArea.rangeMeters)} m vor Spieler`);
if(s.attackExecution?.targetMode==='singleEnemy')effects+=(effects?'<br>':'')+'Ein einzelnes Ziel';
const effectDurations=(s.effects??[]).filter(e=>e.durationSeconds!==undefined).map(e=>`${e.controlKind??e.stat??e.type}: ${f(e.durationSeconds)}${e.durationScaling?' bis '+f(curve(e.durationScaling,skillForClass(s,'druid').maxSkillLv)):''} s`).join('<br>');
const shownDuration=s.nr===133?'0 (keine anschließende Wirkung)':effectDurations||(range(s.durationScaling)??s.dur??(s.animationDurationSeconds!==undefined?'Wirkung einmalig; Animation '+f(s.animationDurationSeconds)+' s':s.hasLingeringDamage===false?'0 (einmalig)':permanent?'Permanent':'Nicht gespeichert'));
const overrides=['Druide','Alchemist'].map(name=>s.learningLimits?.classOverrides?.[name]).filter(v=>v!==undefined);
const cap=overrides.length?Math.max(...overrides):s.learningLimits?.defaultMaxLevel;
const limit=cap?`${s.maxSkillLv} / Druide ${cap}`:s.nr===133?`${s.maxSkillLv} / geplant 1, noch nicht hinterlegt`:s.maxSkillLv;
const flags=[];if(shared.has(s.nr))flags.push('Gemeinsame Definition');if(s.maxSkillLv>1&&!scaling)flags.push('Levelskalierung prüfen');if(s.resourceCosts===undefined&&s.mana===undefined&&!permanent)flags.push('Kosten offen');if(legacySkillType(s)!=='passive'&&s.castTimeSeconds===undefined&&!s.castTimeScaling)flags.push('Cast Time offen');if(s.nr===131)flags.push('Waffentraining-spezifische Skalierung fehlt');if(s.nr===12||s.nr===98)flags.push('Wirkung/Einordnung prüfen');
md+=`| ${s.nr} | ${s.skillName_de} | ${skillClassificationLabel(s)} | ${limit} | ${stats||s.description_de}${effects?'<br>'+effects:''} | ${scaling||'Nicht vollständig gespeichert'} | ${costs} | ${range(s.cooldownScaling)??s.cd??(permanent?'Entfällt':'Offen')} | ${range(s.castTimeScaling)??s.castTimeSeconds??(legacySkillType(s)==='passive'?'Entfällt':'Offen')} | ${shownDuration} | ${flags.filter(x=>!(s.nr===131&&s.statScaling&&x==='Waffentraining-spezifische Skalierung fehlt')&&!(s.nr===12&&legacySkillType(s)==='selfbuff'&&x==='Wirkung/Einordnung prüfen')).join('; ')||'Lernvoraussetzungen und Ausführung prüfen'} |\n`;
}
function flatten(v,p='',out=[]){if(Array.isArray(v)){if(!v.length)out.push([p,'[]']);else v.forEach((x,i)=>flatten(x,`${p}[${i}]`,out));}else if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v))flatten(x,p?p+'.'+k:k,out);}else out.push([p,v===null?'null':f(v)]);return out;}
md+='\n## Detaildaten\n\nGemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.\n';
for(const s of skills){md+=`\n### ${s.nr}: ${s.skillName_de}\n\n${s.description_de}\n\n| Feld | Gespeicherter Wert |\n| --- | --- |\n`;for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))md+=`| ${esc(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana')?'mana (Aktivierungskosten, kein Bonus)':k)} | ${esc(v)} |\n`;}
md+='\n## Gemeinsame Blöcke\n\n[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming hat noch keine klassenspezifische Lerngrenze im Datensatz; der geplante Druide-Maximalwert 1 ist deshalb nur als Plan markiert.\n\n## Reihenfolge\n\nZuerst die noch unvollständigen Druiden-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.\n';
md=md.replace(/\*\*\d+ unterschiedliche zugeordnete Skills[\s\S]*?\*\*/,`**${skills.length} unterschiedliche zugeordnete Skills: ${reviewActiveCount} aktive und ${reviewPassiveCount} passive.**`);
md=md.replace('\n\n','\n\nEinteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.\n\n').replaceAll('| dmgType |','| dmgType (Altformat) |');
const pointSummary=(await read('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='druid');
md=md.replace('\n\n',`\n\n**${skills.length} Skills, ${pointSummary.sp} Skillpunkte.** Windschlitzer hat nur beim Druiden 20 Stufen: magischer Grundschaden 211 bis 921, Mana 53 bis 233, Grund-Cooldown 54 bis 45 Sekunden. Kräuterkundler und Witcher behalten zehn Stufen mit unveränderten Werten. Windfesseln hat 15 Stufen mit bisherigen Start- und Maximalwerten: 223 bis 529 Grundschaden, 56 bis 137 Mana, ein bis fünf Sekunden Debuffdauer und ein bis zehn Prozent Angriffstempo-Senkung. Vergessener Zauber hat zwei Stufen: je −20 beziehungsweise −15 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick. Beide Stufen geben unverändert genau einem gewählten eigenen Skill +1 effektive Stufe. Energieschlag bleibt auf Stufe 5 begrenzt.\n\n`);
await fs.writeFile('docs/balancing/classes/druid-skills.md',md);
await fs.writeFile('data/balancing/druid-skill-review.json',JSON.stringify({classKey:'druid',total:count.total,active:count.total-count.passive,passive:count.passive,skillNumbers:skills.map(s=>s.nr),skills,source:'Current database-exported skill catalog',equipment:'Original rank values; proposed strength changes not applied'},null,2)+'\n');
console.log(`Review updated: ${skills.length} skills, ${reviewActiveCount} active, ${reviewPassiveCount} passive.`);
