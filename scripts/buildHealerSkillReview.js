import {legacySkillType,skillClassificationLabel,withSkillClassification} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import fs from 'node:fs/promises';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=(await read('data/skills.json')).map(withSkillClassification);
const count=(await read('data/reports/class-skill-counts.json')).counts.find(c=>c.name==='Heiler / Priester');
const growth=(await read('data/balancing/class-base-growth.json')).classes.find(c=>c.key==='healer');
const equipment=await read('data/balancing/ranked-equipment.json');
const skills=count.skillNumbers.map(nr=>catalog.find(s=>s.nr===nr));
const reviewPassiveCount=skills.filter(s=>legacySkillType(s)==='passive').length;
const reviewActiveCount=skills.length-reviewPassiveCount;
const f=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const esc=v=>String(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
const statNames={healthRegen:'HP-Regeneration',manaRegen:'Mana-Regeneration',faith:'Faith',vic:'Victim',accuracy:'Genauigkeit',dodge:'Ausweichen',accuracy:'Genauigkeit',critDamageBonus:'Crit Damage',penetration:'Penetration',luck:'Luck',critChanceRating:'Crit-Chance-Wert',str:'Stärke',vita:'Vita',wis:'Wisdom',agi:'Agility',amb:'Ambush',int:'Intelligenz',dex:'Dexterity',health:'HP',mana:'Mana',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Defense',mdef:'M-Defense',atkSpeed:'Attack Speed',movementSpeed:'Movement Speed'};
const curve=(c,l)=>!c?null:c.type==='table'?c.values[l-1]:c.type==='fixed'?c.base:c.base+(l-1)*c.perLevel;
const value=(s,k,v)=>s.statBonusUnits?.[k]==='fraction'?f(v*100)+' %':f(v);
const shared=new Set([1,9,29,36,41,44,64,74,79,117,133,134,135,136,137,138,139,144,201,215,228]);
const groups={};for(const s of skills){const label=s.category==='creature'?(legacySkillType(s)==='passive'?'Kreaturen passiv':'Kreaturen aktiv'):legacySkillType(s)==='passive'?'Übrige Passive einschließlich Procs':legacySkillType(s)==='selfbuff'?'Eigenbuffs':legacySkillType(s)==='buff'?'Gruppenbuffs':legacySkillType(s)==='Movement'?'Bewegungsbuffs':'Aktive Skills (Angriff/Heilung/Unterstützung)';(groups[label]??=[]).push(s);}
if(new Set(skills.map(s=>s.nr)).size!==count.total)throw Error('Unexpected count');
let md='# Heiler / Priester: Werte und Skillprüfung\n\n**33 unterschiedliche zugeordnete Skills: 21 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.\n\n| Art | Anzahl | Skills |\n| --- | ---: | --- |\n';
for(const[label,list]of Object.entries(groups))md+=`| ${label} | ${list.length} | ${list.map(s=>s.skillName_de).join(', ')} |\n`;
md+='\n## Basis und Ausrüstung\n\nR1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.\n\n';
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']];
for(const equipped of [false,true]){
md+=`### ${equipped?'Mit Rüstung und Magiewaffe':'Basis ohne Ausrüstung'}\n\n| Wert | ${growth.levels.map(x=>'Level '+x.level).join(' | ')} |\n| --- | ${growth.levels.map(()=>'---:').join(' | ')} |\n`;
const totals=growth.levels.map(x=>{const r={...x.stats};if(!equipped)return r;const rank=equipment.rankByLevel[x.level];const a=equipment.armor.find(a=>a.name==='Healer'&&a.rank===rank);const w=equipment.weapons.find(w=>w.name==='Wand'&&w.rank===rank);r.maxHealth+=a.converted.health;r.maxMana+=a.converted.mana;r.physicalDefense+=a.converted.physicalDefense;r.magicalDefense+=a.converted.magicalDefense;const v=c=>(w.raw.find(b=>b.column===c)?.value??0);for(const b of w.raw){if(b.label==='M.Ang')r.magicalAttack+=b.value;if(['Intelligence','Int/Faith/Vic'].includes(b.label))r.magicalAttack+=b.value*1.8;if(b.label==='Wisdom'){r.maxMana+=b.value*30;r.magicalDefense+=b.value*2;}}return r;});
for(const[k,label]of fields)md+=`| ${label} | ${totals.map(x=>f(x[k])).join(' | ')} |\n`;
md+='\n';}
md+='Die vorhandene Wand-Tabelle dient als Vergleich für die Magiewaffe. Int/Faith/Vic wird einmal als alternativer Angriffsbonus gerechnet. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.\n\n';
md+='## Skillübersicht\n\n| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |\n| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n';
for(const s of skills){
const stats=Object.entries(statNames).filter(([k])=>s[k]!==undefined&&!(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana'))).map(([k,label])=>`${label} +${value(s,k,s[k])}`).join('<br>');
let effects=(s.effects??[]).map(e=>`${e.type}, Ziel ${e.target}${e.stat?', '+e.stat:''}${e.value!==undefined?', '+f(e.value):''}`).join('<br>');
let scaling=Object.entries(s.statScaling??{}).map(([k,c])=>`${statNames[k]??k}: ${value(s,k,curve(c,1))} bis ${value(s,k,curve(c,skillForClass(s,'healer').maxSkillLv))}`).concat((s.effects??[]).filter(e=>e.valueScaling?.type).map(e=>`${e.type}/${e.stat??''}: ${f(curve(e.valueScaling,1)*(e.unit==='fraction'?100:1))} bis ${f(curve(e.valueScaling,skillForClass(s,'healer').maxSkillLv)*(e.unit==='fraction'?100:1))}${e.unit==='fraction'?' %':''}`)).join('<br>');
if(s.collectedPointScaling?.thresholds?.length){const p=s.collectedPointScaling;scaling+=(scaling?'<br>':'')+'Sammelpunkte-Schwellen: '+p.thresholds.join(' / ')+'; Fesselung '+p.durationSecondsByTier.join(' / ')+' s; nur Skill-Grundschaden +'+p.baseDamageBonusFractionByTier.map(v=>f(v*100)).join(' / ')+' %';}
if(s.levelScalingPolicy==='constant')scaling='Konstant auf allen Skillstufen; keine Levelskalierung';
const permanent=legacySkillType(s)==='passive'&&!s.cd&&!s.triggerCondition;
const ongoingCosts=(s.effects??[]).filter(e=>e.type==='resourceDrain').map(e=>{const vals=e.valueScaling?.type==='table'?e.valueScaling.values.map(f).join(' / '):e.valueScaling?.type?f(curve(e.valueScaling,1))+' bis '+f(curve(e.valueScaling,skillForClass(s,'healer').maxSkillLv)):f(e.value);return `${vals} ${e.resource==='mana'?'Mana':e.resource}${e.unit==='fraction'?' Anteil an '+e.reference:''} ${e.intervalSource==='manaRegenerationTick'?'je Mana-Regenerationstick':'je '+f(e.intervalSeconds)+' s'}`;}).join('<br>');
const activationCosts=s.resourceCosts?s.resourceCosts.length?s.resourceCosts.map(c=>`${c.resource==='mana'?'Mana-Kosten':c.resource+'-Kosten'}: ${f(curve(c.scaling,1))} bis ${f(curve(c.scaling,skillForClass(s,'healer').maxSkillLv))}${c.unit==='fraction'?' (Anteil)':''}`).join('<br>'):'Keine':s.manaCostScaling?f(curve(s.manaCostScaling,1))+' bis '+f(curve(s.manaCostScaling,skillForClass(s,'healer').maxSkillLv)):s.mana??(permanent?'Keine aktive Nutzung':ongoingCosts?'Aktivierung offen; laufend '+ongoingCosts:'Offen');
const costs=activationCosts+(ongoingCosts?'<br>Laufender Verbrauch: '+ongoingCosts:'');
const range=c=>c?.type?f(curve(c,1))+' bis '+f(curve(c,skillForClass(s,'healer').maxSkillLv)):null;
if(s.animationDurationSeconds!==undefined)effects+=(effects?'<br>':'')+`Animation ${f(s.animationDurationSeconds)} s (vorläufig)`;
if(s.attackArea?.shape==='rectangle')effects+=(effects?'<br>':'')+`Fläche: ${f(s.attackArea.lengthMeters)} × ${f(s.attackArea.widthMeters)} m; Position zum Ziel offen`;
if(s.attackArea?.shape && s.attackArea.shape!=='rectangle')effects+=(effects?'<br>':'')+(s.attackArea.shape==='circle'?`Fläche: ${(s.attackArea.radiusMeters===undefined?'noch offen':f(s.attackArea.radiusMeters))} m Radius um ${s.attackArea.center==='selectedTarget'?'anvisiertes Ziel':s.attackArea.center==='skillCenter'?'Skillzentrum':'Spieler'}`:`Fläche: ${f(s.attackArea.rangeMeters)} m vor Spieler`);
if(s.attackArea?.maxTargets)effects+='<br>Maximal '+s.attackArea.maxTargets+' Gegner'+(s.attackArea.evaluation==='perHit'?' je Treffer/Tick':', jeweils ein Treffer');
if(s.blocksOtherSkillsDuringAnimation)effects+='<br>Animation blockiert andere Skills';
if(s.nr===239)effects+='<br>Schaden alle 1,5 s; Verlangsamung 1–10 % für 3 s nach Treffer';
if(s.attackExecution?.targetMode==='singleEnemy')effects+=(effects?'<br>':'')+'Ein einzelnes Ziel';
const effectDurations=(s.effects??[]).filter(e=>e.durationSeconds!==undefined).map(e=>`${e.controlKind??e.stat??e.type}: ${f(e.durationSeconds)}${e.durationScaling?.type?' bis '+f(curve(e.durationScaling,skillForClass(s,'healer').maxSkillLv)):''} s`).join('<br>');
const shownDuration=s.activation==='toggle'?'Bis ausgeschaltet oder Mana nicht reicht':s.nr===152?'Buff 600 s; Gift 3 s':s.collectedPointScaling?.thresholds?.length?s.collectedPointScaling.durationSecondsByTier.map(f).join(' / ')+' s nach Sammelpunkten':s.nr===133?'0 (keine anschließende Wirkung)':s.nr===239?range(s.durationScaling)+' s Feldlaufzeit':effectDurations||(range(s.durationScaling)??s.dur??(s.animationDurationSeconds!==undefined?'Wirkung einmalig; Animation '+f(s.animationDurationSeconds)+' s':s.hasLingeringDamage===false?'0 (einmalig)':permanent?'Permanent':'Nicht gespeichert'));
const cap=s.learningLimits?.defaultMaxLevel;
const limit=cap?`${s.maxSkillLv} / Heiler ${s.learningLimits?.classOverrides?.Healer??cap}`:s.maxSkillLv;
const flags=[];if(shared.has(s.nr))flags.push('Gemeinsame Definition');if(s.maxSkillLv>1&&!scaling&&s.nr!==145)flags.push('Levelskalierung prüfen');if(s.nr===145)flags.push('Besprochen: je Level +1 Vita, +3 P-Defense, +3 M-Defense für 10 s; unter 60 % HP, Chance 3/6/10 %; Cooldown offen, Datenbank noch Altstand');if(s.resourceCosts===undefined&&s.mana===undefined&&!permanent)flags.push(ongoingCosts?'Einmalige Aktivierungskosten offen; laufender Verbrauch definiert':'Kosten offen');if(legacySkillType(s)!=='passive'&&s.castTimeSeconds===undefined&&!s.castTimeScaling)flags.push('Cast Time offen');if(s.nr===117)flags.push('Vom Ritter entfernt, vorläufig Healer zugeordnet; mögliche spätere Heiler-Zuordnung offen');if(s.nr===215)flags.push('Vom Ritter zum Heiler übernommen');if(s.nr===91)flags.push('Tarnungsvoraussetzung vom Schurken geerbt; Nachtjäger hat aktuell keinen Dunklen Schleier, klassenabhängige Lösung offen');if(s.nr===131)flags.push('Waffentraining-spezifische Skalierung fehlt');if(s.nr===12||s.nr===98)flags.push('Wirkung/Einordnung prüfen');
md+=`| ${s.nr} | ${s.skillName_de} | ${skillClassificationLabel(s)} | ${limit} | ${stats||s.description_de}${effects?'<br>'+effects:''} | ${scaling||'Nicht vollständig gespeichert'} | ${costs} | ${range(s.cooldownScaling)??s.cd??(permanent?'Entfällt':'Offen')} | ${range(s.castTimeScaling)??s.castTimeSeconds??(legacySkillType(s)==='passive'?'Entfällt':'Offen')} | ${shownDuration} | ${flags.filter(x=>!(s.nr===131&&s.statScaling&&x==='Waffentraining-spezifische Skalierung fehlt')&&!(s.nr===12&&legacySkillType(s)==='selfbuff'&&x==='Wirkung/Einordnung prüfen')).join('; ')||(s.nr===162?'Keine zusätzliche Lernvoraussetzung':'Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen')} |\n`;
}
function flatten(v,p='',out=[]){if(Array.isArray(v)){if(!v.length)out.push([p,'[]']);else v.forEach((x,i)=>flatten(x,`${p}[${i}]`,out));}else if(v&&typeof v==='object'){for(const[k,x]of Object.entries(v))flatten(x,p?p+'.'+k:k,out);}else out.push([p,v===null?'null':f(v)]);return out;}
md+='\n## Detaildaten\n\nGemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.\n';
for(const s of skills){md+=`\n### ${s.nr}: ${s.skillName_de}\n\n${s.description_de}\n\n| Feld | Gespeicherter Wert |\n| --- | --- |\n`;for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))md+=`| ${esc(k==='mana'&&s.resourceCosts?.some(c=>c.resource==='mana')?'mana (Aktivierungskosten, kein Bonus)':k)} | ${esc(v)} |\n`;}
md+='\n## Gemeinsame Blöcke\n\n[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.\n\n## Reihenfolge\n\nDiese Klassenrunde beginnt jetzt. Bereits bestätigte gemeinsame Skills sind mit aktuellen Werten enthalten. Klassenspezifische Wirkungen, Kosten und Skalierungen werden noch geprüft.\n';
md=md.replace(/\*\*\d+ unterschiedliche zugeordnete Skills[\s\S]*?\*\*/,`**${skills.length} unterschiedliche zugeordnete Skills: ${reviewActiveCount} aktive und ${reviewPassiveCount} passive.**`);
md=md.replace('\n\n','\n\nEinteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.\n\n').replaceAll('| dmgType |','| dmgType (Altformat) |');
const pointSummary=JSON.parse(await fs.readFile('data/balancing/class-skill-points.json','utf8')).classes.find(c=>c.key==='healer');
md=md.replace('\n\n',`\n\n**${skills.length} Skills, ${pointSummary.sp} Skillpunkte.** Lunare Inkanation hat vier lernbare Stufen. Wiederbelebungsleben des Ziels: 80/160/320/640 HP. Mana-Kosten des Heilers: 120/180/240/300. Vorhandenes Ziel-Mana bleibt erhalten. Cooldown je Stufe: 100/90/80/70 Sekunden. Castzeit bleibt eine Sekunde. Die drei zusätzlichen Lernstufen bringen den Heiler auf 280 Punkte.\n\n`);
const {withSkillLearningOverview} = await import('../services/skillLearningOverview.js');
const existingLearningNotes = await fs.readFile('docs/balancing/classes/healer-skills.md', 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
await fs.writeFile('docs/balancing/classes/healer-skills.md',withSkillLearningOverview(md,{skills,classKey:'healer',existingMarkdown:existingLearningNotes}));
await fs.writeFile('data/balancing/healer-skill-review.json',JSON.stringify({classKey:'healer',total:count.total,active:count.total-count.passive,passive:count.passive,skillNumbers:skills.map(s=>s.nr),skills,source:'Current database-exported skill catalog',equipment:'Original rank values; proposed strength changes not applied'},null,2)+'\n');
console.log(`Review updated: ${skills.length} skills, ${reviewActiveCount} active, ${reviewPassiveCount} passive.`);



















