import {legacySkillType,skillClassificationLabel,withSkillClassification} from '../services/skillClassification.js';
import fs from 'node:fs/promises';
import {skillClassVariant} from '../services/skillClassVariant.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const catalog=(await read('data/skills.json')).map(withSkillClassification);
const report=await read('data/reports/class-skill-counts.json');
const count=report.counts.find(x=>x.name==='Abenteurer / Scout');
const growth=(await read('data/balancing/class-base-growth.json')).classes.find(x=>x.key==='adventurer');
const equipment=await read('data/balancing/ranked-equipment.json');
const regen=await read('data/balancing/regeneration-model.json');
const unresolved=await read('data/unresolved-source-skills.json');
const skills=count.skillNumbers.map(nr=>skillClassVariant(catalog.find(s=>s.nr===nr),'adventurer'));
const reviewPassiveCount=skills.filter(s=>legacySkillType(s)==='passive').length;
const reviewActiveCount=skills.length-reviewPassiveCount;
const sharedNumbers=[133,134,135,136,137,138];
const commonTrainingNumbers=[139,144,201];
if(skills.length!==count.total||skills.some(s=>!s))throw new Error('Unexpected adventurer catalog');
const labels={offensive:'Angriff',self:'Eigenbuff',group:'Gruppen-/Begleiterbuff',healing:'Heilung',passive:'Passiv',utility:'Bewegung/Kreaturen',unclear:'Offen'};
const category=s=>legacySkillType(s)==='Movement'?'Bewegung':s.category==='creature'?'Kreaturen':labels[report.classified.find(x=>x.nr===s.nr).category];
const format=v=>typeof v==='number'?Number(v.toFixed(6)).toLocaleString('de-DE'):String(v);
const levels=growth.levels.map(x=>x.level);
const countGroups=[
 ['Angriffe',skills.filter(s=>legacySkillType(s)==='physical')],
 ['Eigenbuffs',skills.filter(s=>legacySkillType(s)==='selfbuff')],
 ['Gruppen-/Begleiterbuffs',skills.filter(s=>legacySkillType(s)==='buff')],
 ['Heilung',skills.filter(s=>s.nr===41||s.nr===250)],
 ['Bewegung',skills.filter(s=>legacySkillType(s)==='Movement')],
 ['Aktive Kreaturenskills',skills.filter(s=>s.category==='creature'&&legacySkillType(s)!=='passive')],
 ['Übrige Passive einschließlich Procs',skills.filter(s=>s.category!=='creature'&&legacySkillType(s)==='passive')],
 ['Passive Kreaturenskills',skills.filter(s=>s.category==='creature'&&legacySkillType(s)==='passive')],
];
const counted=countGroups.flatMap(([,list])=>list.map(s=>s.nr));
if(counted.length!==skills.length||new Set(counted).size!==skills.length)throw new Error('Skill count duplicates or omissions');
let md='# Abenteurer: Werte und Skillprüfung\n\n**33 unterschiedliche zugeordnete Skills: 19 aktive und 14 passive. Kein Skill wird doppelt gezählt.** Die Passiven enthalten auch automatisch ausgelöste Procs. Die Kreaturenskills sind separat nach aktiver und passiver Nutzung aufgeteilt.\n\n| Art | Anzahl | Skills |\n| --- | ---: | --- |\n';
for(const[label,list]of countGroups)md+=`| ${label} | ${list.length} | ${list.map(s=>s.skillName_de).join(', ')} |\n`;
md+='\nVerstärkung des Körpers und Erweckung der Leidenschaft sind Gruppenbuffs; Macht des Begleiters wirkt ausschließlich auf Gruppenbegleiter. Zwei Eigenbuffs: Scharfer Instinkte und Macht der Wildnis. Für die Ehre ist nicht mehr zugeordnet. Drei Bewegungsfähigkeiten: Ausweichrolle, Dash und Doppelsprung. Durchhalten gewährt dauerhaft maximal +8 Stärke und +5 Vitalität; kein Proc und keine direkten Abwehrboni. Diese Änderung verschiebt keine aktive/passive Gesamtzahl.\n\n';
await fs.writeFile('data/balancing/adventurer-skill-count-audit.json',JSON.stringify({total:skills.length,active:reviewActiveCount,passive:reviewPassiveCount,groups:countGroups.map(([name,list])=>({name,count:list.length,skills:list.map(s=>({nr:s.nr,name:s.skillName_de}))})),uniqueCount:new Set(counted).size,source:'data/skills.json',pending:null},null,2)+'\n');
md+='## Bereits geklärter Stand\n\n| Skill | Festgelegte Werte | Was noch fehlt |\n| --- | --- | --- |\n| Adrenalin | 1 bis 5 Prozent Stärke und Intelligenz auf Skilllevel 1 bis 5; Dauer 30 s; Cooldown 120 s; passive Auslösung nach über 15 s im Kampf | Vollständige Umsetzung im Datensatz, Proc-Wahrscheinlichkeit und genaue Kampfbedingung |\n| Erweiterung des Körpers | Permanent passiv; +150 HP, +3 Vita, +2 Wisdom, +2 Agility; keine Dauer und kein Cooldown | Veraltete Beschreibung korrigieren; endgültige Levelskalierung |\n| Waffentraining | Je Level +5 P-Angriff, +5 M-Angriff, +1 Prozent Attack Speed; maximal 20 Level, also +100/+100/+20 Prozent | Gemeinsamer Trainingsblock; Werte und Skalierung bereits gespeichert |\n| Ausdauertraining | +2 Vita, +2 Wisdom, +8 P-Defense, +8 M-Defense; maximal 20 Level | Gemeinsamer Trainingsblock; Levelskalierung und widersprüchliche Kategorie |\n| Rüstungstraining | +6 P-Defense, +2 Vita; maximal 10 Level | Gemeinsamer Trainingsblock; Levelskalierung |\n\nDie beschlossenen Adrenalin-Werte gelten für unsere Planung, obwohl der Rohdatensatz noch nicht alle enthält. Die Rohdaten weiter unten bleiben zur Nachvollziehbarkeit unverändert.\n\n';
md+='## Charakterwerte\n\nDie notierten Änderungen an anderen Rüstungen und Waffen wurden nicht übernommen. Basiswachstum: je weiterem Level +1 Vita, Stärke, Intelligenz und Wisdom. Vorläufiger Angriffsfaktor 1,8.\n\n';
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']];
for(const weaponName of [null,'2H Schwert']) {
  md+=`### ${weaponName===null?'Basis ohne Ausrüstung':'Mit Rüstung und Zweihandschwert'}\n\n| Wert | ${levels.map(l=>'Level '+l).join(' | ')} |\n| --- | ${levels.map(()=>'---:').join(' | ')} |\n`;
  const calculated=growth.levels.map(({level,stats})=>{
    const x={...stats};if(!weaponName)return x;
    const rank=equipment.rankByLevel[level];
    const a=equipment.armor.find(a=>a.name==='Adventure'&&a.rank===rank);
    x.maxHealth+=a.converted.health;x.maxMana+=a.converted.mana;x.physicalDefense+=a.converted.physicalDefense;x.magicalDefense+=a.converted.magicalDefense;
    const w=equipment.weapons.find(w=>w.name===weaponName&&w.rank===rank);
    for(const b of w.raw){const n=b.value??0;if(b.label==='P.Ang')x.physicalAttack+=n;if(b.label==='M.Ang')x.magicalAttack+=n;if(b.label==='Stärke')x.physicalAttack+=n*1.8;if(b.label==='Intelligence')x.magicalAttack+=n*1.8;}
    return x;
  });
  if(weaponName)md+=`| Rang | ${levels.map(l=>'R'+equipment.rankByLevel[l]).join(' | ')} |\n`;
  for(const[k,label]of fields)md+=`| ${label} | ${calculated.map(x=>format(x[k])).join(' | ')} |\n`;
  md+='\n';
}
md+='Attack Speed und Movement Speed starten mit Faktor 1; ihre Ausrüstungswirkung bleibt vorerst ausgenommen. Schmuck, Steine, Passive, aktive Buffs und Begleiter sind nicht eingerechnet.\n\n';
md+=`## Regeneration\n\n| Einstellung | Stand |\n| --- | --- |\n| Grundregeneration Mana | ${regen.regeneration.baseManaPerTick} pro Tick |\n| Grundregeneration HP | ${regen.regeneration.baseHealthPerTick} pro Tick |\n| Tick-Intervall | Offen, keine Umrechnung in pro Sekunde |\n| Wisdom zu Mana-Regeneration | 1 Mana pro Punkt und Tick als Vorschlag, noch nicht verbindlich |\n| Prozentuale Regeneration | Nur über konkret bestätigte Skills oder Gegenstände |\n| Kampfregeln und Verzögerung nach Schaden | Offen |\n\n`;
md+='## Skillübersicht\n\nArbeitsübersicht mit gespeicherten Werten und bereits besprochenen Festlegungen. „Besprochen“ bedeutet: festgelegt, aber noch nicht vollständig im Datensatz umgesetzt. Boni sind keine endgültigen Schadenswerte eines Treffers. Alle sechs Angriffe sind derzeit physisch.\n\n| DB-Nr | Skill | Art | Max. Level | Grundwirkung / Werte auf Level 1 | Levelskalierung / Maximalwerte | Mana-Kosten | Cooldown s | Dauer s | Noch offen / Stand |\n| ---: | --- | --- | ---: | --- | --- | --- | --- | --- | --- |\n';
const statLabels={health:'HP',mana:'Mana',str:'Stärke',int:'Intelligenz',vita:'Vita',wis:'Wisdom',dex:'Dexterity',agi:'Agility',amb:'Ambush',faith:'Faith',vic:'Victim',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Defense',mdef:'M-Defense',atkSpeed:'Attack Speed',movementSpeed:'Movement Speed',block:'Block',luck:'Luck',manaRegen:'Mana-Regeneration'};
const statValue=(s,k,v)=>s.statBonusUnits?.[k]==='fraction'?format(v*100)+' %':format(v)+(k==='atkSpeed'?' (Einheit offen)':'');
const knownCreature={133:'Kreatur zähmen; kann fehlschlagen',134:'Bindung stärkt Spieler und Kreatur; Zahlen offen',135:'Kreaturenkontrolle verbessert Effizienz; Zahlen offen',136:'Kreatur beschwören',137:'Kreatur zurückrufen',138:'Mehr Kreaturen-EP; Höhe offen'};
const movement={14:'Ausweichrolle',21:'Dash / schnelle Bewegung',25:'Zusätzlicher Sprung'};
for(const s of skills){
  const permanent=legacySkillType(s)==='passive'&&s.cd===undefined&&s.nr!==6&&!s.reactiveBuffSettings;
  let values=Object.keys(statLabels).filter(k=>k!=='mana'&&s[k]!==undefined).map(k=>`${statLabels[k]} +${statValue(s,k,s[k])}`).join('<br>')||knownCreature[s.nr]||movement[s.nr]||'Grundwirkung offen';
  if(s.nr===6)values='Stärke +1 %<br>Intelligenz +1 %<br>5 % Proc-Chance je eigener Angriffsaktion, wenn bereit';
  if(s.nr===41&&s.effects?.some(e=>e.type==='heal'))values='Sofortige Eigenheilung um 50 HP; kein M-Angriff';
  if(s.movement?.distanceMeters!==undefined)values+=`<br>Reichweite ${format(s.movement.distanceMeters)} m`;
  if(s.movement?.heightMeters!==undefined)values+=`<br>Sprunghöhe ${format(s.movement.heightMeters)} m (vorläufig)`;
  if(s.nr===75&&s.statBonusTargets?.str==='selfGroupAndCompanions')values+='<br>Ziele: selbst, Gruppe und Begleiter';
  if(s.nr===150&&s.statBonusTargets?.patk==='groupCompanions')values+='<br>Nur Begleiter der Gruppe, keine Spieler';
  if(s.attackExecution?.hitCount)values+=`<br>${s.attackExecution.hitCount} Treffer; ${s.attackExecution.damageValueScope==='perApplication'?'Grundwert gilt für gesamte Anwendung':'Angriffswert gilt je Treffer'}`;
  if(s.nr===246)values='Ab 100 % Pet-Vertrauen: Bonus aus aktuellen Spielerwerten; Spieler behält seine Werte';
  if(s.nr===247)values='Nach erlittenem Crit: 25 % Proc-Chance; 15 s +10 P-Abwehr/+10 M-Abwehr/+5 Agilität; sofort 50 HP heilen';
  if(s.attackArea)values+=s.attackArea.shape==='frontal'?`<br>Bis ${format(s.attackArea.rangeMeters)} m vor Spieler; Bereichsbreite offen`:`<br>Kreis, ${format(s.attackArea.radiusMeters)} m Radius um Spieler; Gegner im Bereich`;
  if(s.triggerCondition?.healthThresholds?.length)values+='<br>Eigener Angriff: unter 30 % HP 5 %, unter 20 % 10 %, unter 10 % 30 % Proc-Chance';
  if(s.taming)values=`Zähmversuch; passendes Item erforderlich; Grunderfolg ${format(s.taming.baseSuccessChance*100)} %`;
  if(s.nr===138&&s.effects?.some(e=>e.type==='experienceBonus'))values='Kreatur kann leveln; Spieler-EP plus 10 % auf Level 1';
  if(s.effects?.length)values+='<br>'+s.effects.map(e=>e.type==='control'?`${e.controlKind}: ${format(e.durationSeconds)} s (${e.target})`:`${statLabels[e.stat]??e.type}: ${e.unit==='fraction'?format(e.value*100)+' %':format(e.value)} (${e.target}); Dauer ${e.durationStatus==='pending'?'offen':e.durationSeconds??'offen'} s`).join('<br>');
  const curves=Object.entries(s.statScaling??{}).map(([k,v])=>{
    if(v.type==='linear')return `${statLabels[k]??k}: +${statValue(s,k,v.perLevel)} je weiterer Stufe; maximal +${statValue(s,k,v.base+(s.maxSkillLv-1)*v.perLevel)}`;
    if(v.type==='table')return v.values.length===10?`${statLabels[k]??k}: Level 1 +${statValue(s,k,v.values[0])}, Level 9 +${statValue(s,k,v.values[8])}, Level 10 +${statValue(s,k,v.values.at(-1))}`:`${statLabels[k]??k} je Level: ${v.values.map(x=>'+'+statValue(s,k,x)).join(' / ')}`;
    return `${statLabels[k]??k}: gespeicherte ${v.type}-Skalierung, Details unten`;
  });
  let scaling=curves.join('<br>')||(s.maxSkillLv===1?'Eine Stufe': 'Noch nicht vollständig gespeichert');
  if(s.nr===6)scaling='+1 Prozentpunkt je weiterer Stufe; maximal +5 % Stärke und Intelligenz (besprochen)';
  if(s.nr===15&&s.effects?.[0]?.durationStatus==='defined')scaling+='<br>Slow auf Level 5/10/15/20 jeweils +1 Prozentpunkt und +0,5 s; maximal 9 % für 3 s';
  if(s.nr===41&&s.effects?.some(e=>e.type==='heal'))scaling='+25 HP je weiterer Stufe; maximal 275 HP';
  if(s.attackExecution?.hitCount&&s.statScaling?.patk&&s.attackExecution.damageValueScope!=='perApplication'){const c=s.statScaling.patk;const end=c.base+(s.maxSkillLv-1)*c.perLevel;scaling+=`<br>Maximal ${format(end)} je Treffer, zusammen ${format(end*s.attackExecution.hitCount)} Grundwert`;}
  if(s.nr===246)scaling='Angriff: 10 / 15 / 20 % des Spieler-P-Angriffs; P-/M-Abwehr jeweils 5 / 7,5 / 10 %';
  if(s.nr===247)scaling='Je Stufe +10 P-Abwehr/+10 M-Abwehr/+5 Agilität; maximal +50/+50/+25. Heilung 50 +3 bis 62 HP';
  if(s.nr===248)scaling='Hieb 1: 27 +56 bis 531; Hieb 2: 108 +56 bis 612. Je Hieb zusätzlich aktueller P-Angriff';
  if(s.nr===249){values='273 P-Grundschaden + eigener P-Angriff + Angriffskraft von 0–2 beteiligten Pets; gemeinsame Schadensanzeige';scaling='+154 Grundschaden je weiterer Stufe bis 3.199; auch ohne Pet nutzbar';}
  if(s.nr===250){values='Vier unterbrechbare Heilimpulse für einen eigenen Begleiter; 0,8 s Cast; Kosten nur je erfolgtem Impuls';scaling='20 Stufen: Heilung je Impuls 40 bis 400, +40 alle zwei Stufen; maximal 1600 Heilung für 1200 HP und 160 Mana. Abstand 0,5 s, ab Stufe 10 0,4 s, auf Stufe 20 0,3 s';}
  if(s.nr===251){values='Horizontaler Hieb: 117 P-Grundschaden + aktueller P-Angriff; Blutgeruch 12 s, kein Blutungs-/DoT-Schaden';scaling='+57 Grundschaden bis 402; Gruppenbegleiter gegen markiertes Ziel +0,5 Prozentpunkte je Stufe bis 3 %; keine Stapelung';}
  if(s.movement?.distanceScaling)scaling='Gestufte Reichweite, Dauer, Cooldown und Kosten; vollständige Leveltabelle unten';
  if(s.movement?.heightScaling){const h=s.movement.heightScaling;scaling=`Höhe ${format(h.base)} bis ${format(h.base+(s.maxSkillLv-1)*h.perLevel)} m; Kosten, Cooldown und Dauer linear über neun Steigerungen (vorläufig)`;}
  if(s.taming)scaling='Grunderfolg 50 / 65 / 80 %; Cast Time 3 / 2,5 / 2 s; Mana und Cooldown siehe Spalten';
  if(s.nr===134&&s.effects?.length)scaling='Je +5 Stärke/Vita/Intelligenz/Wisdom pro weiterer Stufe, nur Kreatur; Level 1/2/3 jeweils +10/+15/+20';
  if(s.nr===138&&s.effects?.some(e=>e.type==='experienceBonus'))scaling='Kreaturen-EP: 110 / 120 / 130 % der Spieler-EP';
  const gaps=[];
  if(sharedNumbers.includes(s.nr))gaps.push('Gemeinsamer Kreaturenblock');
  if(commonTrainingNumbers.includes(s.nr))gaps.push('Gemeinsamer Trainingsblock');
  if(!permanent&&legacySkillType(s)!=='passive'&&s.mana===undefined)gaps.push('Kosten und Cast Time');
  if(s.maxSkillLv>1&&!curves.length&&![6,246,247].includes(s.nr))gaps.push('Levelskalierung');
  if(s.nr===246)gaps.push('Angriffszuordnung bei magischen Pets');
  if(s.nr===249)gaps.push('Reichweite, genaue Animation/Trefferzeiten, magische Pet-Beiträge');
  if(s.nr===250)gaps.push('Wirkung gespeichert; Pet-Zielreichweite noch festzulegen');
  if(s.nr===6)gaps.push('Gespeichert; Angriffstempo im Balancing prüfen');
  if(s.nr===148&&s.statBonusUnits?.atkSpeed!=='fraction')gaps.push('Attack-Speed-Einheit');
  if(s.nr===41)gaps.push('Eigenheilung und Skalierung geklärt');
  if(s.nr===102)gaps.push('Waffenbedingung');
  if(s.nr===114&&s.triggerConditionStatus!=='defined')gaps.push('Auslösebedingung');
  if(s.effects?.some(e=>e.durationStatus==='pending'))gaps.push('Effektdauer offen');
  if(s.attackExecution?.hitTimingStatus==='pending')gaps.push('Trefferzeitpunkte; Animation vorläufig');
  if(s.effects?.some(e=>e.actionRestrictionsStatus==='pending'))gaps.push('Paralyse: betroffene Aktionen');
  if(s.attackArea?.geometryStatus==='pending')gaps.push('Bereichsbreite; Bewegung während Ausführung');
  if(s.nr===126)gaps.push('Schurken-Zuordnung prüfen');
  if(s.castTimeStatus==='provisional')gaps.push('Cast Time vorläufig');
  if(s.taming)gaps.push('Kreaturen-Gegenwert; Itemverbrauch');
  if(s.learningLimits?.status==='secondSpecialistPending')gaps.push('Lerngrenze normal 1, Abenteurer 3; zweiter Spezialist offen');
  if(s.nr===201)gaps.push('Wirkung und Skalierung geklärt');
  if(commonTrainingNumbers.includes(s.nr)&&s.statScaling)gaps.push('Gemeinsame Wirkung und Skalierung gespeichert');
  const cost=permanent||legacySkillType(s)==='passive'?'Keine aktive Nutzung':s.resourceCosts?.length?s.resourceCosts.map(c=>{
    const f=v=>format(c.unit==='fraction'?v*100:v)+(c.unit==='fraction'?' %':'');
    return `${c.resource}: ${c.scaling.type==='table'?c.scaling.values.map(f).join(' / '):c.scaling.type==='linear'?f(c.scaling.base)+' bis '+f(c.scaling.base+(s.maxSkillLv-1)*c.scaling.perLevel):f(c.scaling.base)}`;
  }).join('<br>'):s.mana??'Offen';
  const range=(curve,base)=>curve?.type==='linear'?`${format(curve.base)} bis ${format(curve.base+(s.maxSkillLv-1)*curve.perLevel)}`:curve?.type==='table'?curve.values.map(format).join(' bis '):base;
  const cd=s.reactiveBuffSettings?range({type:'linear',...s.reactiveBuffSettings.internalCooldownScaling},undefined)+' (intern)':permanent?'Entfällt':range(s.cooldownScaling,s.cd??'Offen');
  const duration=permanent?'Permanent':s.effects?.some(e=>e.type==='control')?s.effects.filter(e=>e.type==='control').map(e=>format(e.durationSeconds)+' (Kontrolleffekt)').join(', '):s.attackExecution||s.animationDurationSeconds!==undefined&&legacySkillType(s)==='physical'?'Kein anhaltender Effekt':range(s.durationScaling,s.dur??'Nicht gespeichert');
  const shownDuration=s.reactiveBuffSettings?'15 s':s.nr===250?'2 bis 1,2 s Heilphase':s.animationDurationRangeSeconds&&s.dur===undefined?`${format(s.animationDurationRangeSeconds.min)} bis ${format(s.animationDurationRangeSeconds.max)} (Ausführung)`:(s.nr===41?'Sofort':duration);
  md+=`| ${s.nr} | ${s.skillName_de} | ${category(s)} | ${s.maxSkillLv} | ${values} | ${scaling} | ${cost} | ${cd} | ${s.taming?'Keine anschließende Wirkung':shownDuration} | ${legacySkillType(s)==='passive'?'Entfällt':range(s.castTimeScaling,s.castTimeSeconds??'Offen')} | ${gaps.join('; ')||'Lernvoraussetzungen prüfen'} |\n`;
}
md+='\nFehlende Felder bedeuten nicht automatisch null oder kostenlos. P-/M-Werte bei Buffs und Passiven sind Boni, keine Angriffsschäden. Die Einordnung ist vorläufig. Dauer fehlt bei vielen Sofortfähigkeiten; dies ist nicht automatisch ein Fehler.\n\n## Details je Skill\n\nDie folgenden Tabellen enthalten alle gespeicherten Felder außer der technischen Mongo-ID. Verschachtelte Effekte, Skalierungen, Klassen und Kosten sind vollständig aufgeführt. Vorhandene Beschreibungen sind unverändert.\n';
function flatten(value,prefix='',out=[]){if(Array.isArray(value)){if(!value.length)out.push([prefix,'[]']);else value.forEach((x,i)=>flatten(x,`${prefix}[${i}]`,out));}else if(value&&typeof value==='object'){if(!Object.keys(value).length)out.push([prefix,'{}']);else for(const[k,v]of Object.entries(value))flatten(v,prefix?prefix+'.'+k:k,out);}else out.push([prefix,value===null?'null':format(value)]);return out;}
const esc=x=>String(x).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
for(const s of skills.filter(s=>!sharedNumbers.includes(s.nr)&&!commonTrainingNumbers.includes(s.nr))){
  md+=`\n### ${s.nr}: ${s.skillName_de}\n\n| Gespeichertes Feld | Wert |\n| --- | --- |\n`;
  for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))md+=`| ${esc(k)} | ${esc(v)} |\n`;
  if(s.nr===21&&s.movement){
    md+='\n#### Dash je Skilllevel\n\n| Level | Cooldown s | Bewegungsdauer s | Reichweite m | Ausdauer | Mana |\n| ---: | ---: | ---: | ---: | ---: | ---: |\n';
    const cost=s.resourceCosts.find(c=>c.resource==='stamina');
    for(let i=0;i<s.maxSkillLv;i++)md+=`| ${i+1} | ${format(s.cooldownScaling.values[i])} | ${format(s.durationScaling.values[i])} | ${format(s.movement.distanceScaling.values[i])} | ${format(cost.scaling.values[i])} | 0 |\n`;
  }
  const passive=legacySkillType(s)==='passive';
  const open=[];
  if(!passive&&s.mana===undefined&&!s.resourceCosts?.length)open.push('Aktivierungskosten bestätigen, fehlender Mana-Wert ist nicht automatisch 0');
  if(!passive&&s.cd===undefined&&!s.cooldownScaling)open.push('Cooldown bestätigen');
  if(!passive&&s.castTimeSeconds===undefined)open.push('Cast Time bestätigen, Instant nicht automatisch annehmen');
  if(s.maxSkillLv>1){
    const scalingKeys=Object.keys(s.statScaling??{});
    if(scalingKeys.length||s.cooldownScaling||s.durationScaling||s.effects?.some(e=>e.valueScaling||e.durationScaling)){
      md+='\nVorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.\n';
      open.push('Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten');
    }else if(s.nr===6){open.push('Bereits festgelegte 1 bis 5 Prozent technisch nachtragen, nicht erneut entscheiden');}
    else open.push('Endgültige Levelskalierung noch nicht vollständig gespeichert');
  }
  open.push('Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen');
  if(s.nr===41)md+='\nEigenheilung vollständig festgelegt: 50 bis 275 HP, 20 bis 164 Mana, 35 bis 26 Sekunden Cooldown, 0,2 Sekunden Cast Time. Keine Skalierung mit Charakter-M-Angriff. Das frühere matk-Feld 25 war der Heilungszuwachs je weiterer Skillstufe und ist entfernt.\n';
  if(s.nr===6){
    md+='\nFestgelegt und gespeichert: 5 Prozent Chance je eigener Angriffsaktion, wenn der Skill bereit ist; eine Prüfung je Aktion, nicht je getroffenem Ziel, ohne Begleiterangriffe. Die 15-Sekunden-Kampfbedingung wurde ersetzt. Stärke und Intelligenz steigen um 1 Prozent je Skilllevel, maximal 5 Prozent. Dauer Level 1 bis 5: 20 / 22,5 / 25 / 27,5 / 30 Sekunden. Cooldown: 120 / 115,5 / 111 / 106,5 / 102 Sekunden. Keine Ressourcenkosten.\n';
  }
  if(s.nr===45)md+='\nFestgelegt und gespeichert: permanent passiv ohne Kosten oder Cooldown. Startboni +150 HP, +3 Vita, +2 Wisdom und +2 Agility. Bis Level 9 je weiterer Stufe +50 HP und je +1 Attributpunkt. Auf Level 10 werden ausschließlich die Level-9-Boni verdoppelt: +1.100 HP, +22 Vita, +20 Wisdom, +20 Agility.\n';
  if(s.nr===114&&s.triggerConditionStatus!=='defined')open.push('Auslösebedingung, Kampfregel und Proc-Verhalten bestätigen');
  if(s.nr===102)open.push('Schwerttraining gilt bei Streitkolben? Waffenbedingung und mögliche Gegenstücke klären');
  if(s.nr===151&&s.statBonusTargets?.agi!=='self')open.push('Begleiterbezug und Zielgruppe mit Beschreibung abgleichen');
  md+='\nNoch zu klären:\n\n'+open.map(x=>'- '+x).join('\n')+'\n';
}
let shared='# Gemeinsame Kreaturenskills\n\nTamen, Bindung, Kontrolle, Beschwören, Zurückrufen und Zucht werden einmal gemeinsam ausgearbeitet und zählen weiterhin zur Gesamtanzahl jeder Klasse. Geplant für alle Klassen; in den aktuellen Datenbankzuordnungen fehlen Schurke und Schattenkrieger noch bei diesen sechs Skills. Keine Zuordnungsänderung vorgenommen.\n\n';
const sharedStatus={133:'Kosten, Cast Time, Cooldown und Grunderfolg festgelegt; Kreaturen-Gegenwert, Itemverbrauch und Abbruchregeln offen.',134:'Boni nur für die Kreatur: je 10/15/20 Stärke, Vita, Intelligenz und Wisdom. Normal maximal Level 1, Abenteurer 3, zweiter Spezialist offen.',135:'Konkrete Wirkung, Levelskalierung und Spezialistengrenzen noch offen.',136:'Festgelegt: 5 Mana, 5 Sekunden Cooldown, 1 Sekunde Cast Time, keine anschließende Effektdauer.',137:'Festgelegt: 5 Mana, 5 Sekunden Cooldown, sofort, keine anschließende Effektdauer.',138:'Festgelegt: Kreatur erhält Spieler-EP plus 10/20/30 Prozent auf Level 1/2/3. Permanent passiv ohne Kosten. Normal maximal Level 1, Abenteurer 3, zweiter Spezialist offen.'};
for(const s of skills.filter(s=>sharedNumbers.includes(s.nr))){shared+=`## ${s.nr}: ${s.skillName_de}\n\n${sharedStatus[s.nr]}\n\n| Gespeichertes Feld | Wert |\n| --- | --- |\n`;for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))shared+=`| ${esc(k)} | ${esc(v)} |\n`;shared+='\nLernvoraussetzungen und allgemeine Kreaturenlimits später prüfen.\n\n';}
shared=shared.replace('## 133: Tamen','## 133: Tamen\n\nFestgelegte Stufen:\n\n| Level | Mana | Cast Time | Cooldown | Grunderfolg |\n| ---: | ---: | ---: | ---: | ---: |\n| 1 | 100 | 3 s | 60 s | 50 % |\n| 2 | 125 | 2,5 s | 50 s | 65 % |\n| 3 | 150 | 2 s | 40 s | 80 % |\n\nPassendes Taming-Item erforderlich. Kein Schaden und keine anschließende Effektdauer. Noch offen: Berechnung mit dem Kreaturen-Gegenwert, Itemverbrauch, gültige Zieldistanz und Bedingungen für einen Cast-Abbruch.');
shared=shared.replace('## 134: Bindung','## 134: Bindung\n\nNur die Kreatur erhält die Boni. Permanent passiv, keine Kosten oder Cooldown.\n\n| Level | Stärke | Vita | Intelligenz | Wisdom |\n| ---: | ---: | ---: | ---: | ---: |\n| 1 | +10 | +10 | +10 | +10 |\n| 2 | +15 | +15 | +15 | +15 |\n| 3 | +20 | +20 | +20 | +20 |\n\nLerngrenze: normale Klassen 1, Abenteurer 3. Zweiter Spezialist noch offen.');
shared=shared.replace('Offen: konkrete Wirkung je Level, Kosten bei Aktivierung, Lernvoraussetzungen, Kreaturenlimits und gegebenenfalls Erfolgswahrscheinlichkeit. Fehlende Zahlen sind nicht automatisch null.', 'Kosten, Cast Time, Cooldown und Grunderfolg sind festgelegt. Offen bleiben die oben genannten Taming-Regeln und Lernvoraussetzungen.');
await fs.writeFile('docs/balancing/shared-creature-skills.md',shared);
let training='# Gemeinsame Trainingsskills\n\nWaffentraining, Ausdauertraining und Rüstungstraining werden einmal gemeinsam geprüft. Laut Planung gelten sie für alle Klassen. Aktuell fehlen Schurke und Schattenkrieger in ihren Datenbankzuordnungen; dies ist ein eigener Zuordnungspunkt, kein Grund, ihre Werte neu zu entscheiden. Keine Datenbankänderung vorgenommen.\n\n';
for(const s of skills.filter(s=>commonTrainingNumbers.includes(s.nr))){
  training+=`## ${s.nr}: ${s.skillName_de}\n\n| Gespeichertes Feld | Wert |\n| --- | --- |\n`;
  for(const[k,v]of flatten(s).filter(([k])=>k!=='_id'))training+=`| ${esc(k)} | ${esc(v)} |\n`;
  if(s.nr===201)training+='\nBereits geklärt und gespeichert: permanent passiv, maximal 20 Level. Je gelerntem Level +5 P-Angriff, +5 M-Angriff und +1 Prozent Attack Speed. Auf Level 20 +100 P-Angriff, +100 M-Angriff und +20 Prozent Attack Speed. Diese Wirkung und Skalierung sind fertig festgelegt. Offen bleiben Lernvoraussetzungen und die Anwendung mit weiteren Speed-Boni. Keine Aktivierungskosten, Cast Time oder Cooldown für einen permanenten passiven Bonus festlegen.\n\n';
  if(s.nr===139)training+='\nFestgelegt und gespeichert: je gelerntem Level +1 Vita, +1 Wisdom, +4 P-Defense und +4 M-Defense. Maximal 20 Level: +20 Vita, +20 Wisdom und jeweils +80 direkte Verteidigung. Über Vita/Wisdom kommen mit den aktuellen Faktoren zusätzlich jeweils +40 Verteidigung sowie +600 HP/+600 Mana hinzu. Permanent passiv, keine Kosten oder Cooldown.\n\n';
  if(s.nr===144)training+='\nFestgelegt und gespeichert: je gelerntem Level +6 P-Defense und +6 M-Defense. Maximal 10 Level: jeweils +60. Vita wurde entfernt. Permanent passiv, keine Kosten oder Cooldown.\n\n';
}
training=training.replace('dmgType ist passive, category dagegen active. Die Wirkungsart ist als Widerspruch zu bereinigen. Die Beschreibung nennt Ausdauer, die Felder enthalten Vita und Wisdom.', 'dmgType und category sind jetzt beide passive. Die Beschreibung nennt die gespeicherten Vita-, Wisdom- und Verteidigungsboni korrekt.');
await fs.writeFile('docs/balancing/shared-training-skills.md',training);
md+='\n## Gemeinsame Prüfblöcke\n\nDie sechs Kreaturenskills stehen in der [gemeinsamen Kreaturendatei](../shared-creature-skills.md). Waffen-, Ausdauer- und Rüstungstraining stehen in der [gemeinsamen Trainingsdatei](../shared-training-skills.md). Alle neun zählen weiterhin zu den 33 Skills. Für die Abenteurer-Datei verbleiben 24 Detailblöcke; auch darunter sind mehrere mit anderen Klassen geteilte Skills.\n';
md+='\n## Zusätzliche Quelleneinträge\n\n';
for(const s of unresolved.entries.filter(s=>/abenteuer|adventure/i.test(JSON.stringify(s.source))))md+=`- ${s.germanName} (alte Quell-ID ${s.sourceID}): noch nicht als zusätzlicher Skill übernommen.\n`;
md+='\nKleine Regeneration und Erweiterung der Kraft aus dem alten Klassenboard bleiben gesondert zu prüfen. Keine automatische Zuordnung zu ähnlich benannten Skills.\n\n## Reihenfolge der gemeinsamen Prüfung\n\n1. Regenerationsintervall, Kampfregeln und Wisdom-Beitrag bestimmen.\n2. Fehlende Skills und Waffenbedingungen klären.\n3. Angriffe und Erste Hilfe: Wirkung, Kosten, Cast Time, Cooldown und Levelskalierung.\n4. Passive, Eigenbuffs, Gruppenbuffs und Kreaturenskills.\n5. Gesamte Attribute, Mana-Verbrauch, Heilung und Schaden mit Begleitern berechnen.\n6. Mit den anschließend ausgearbeiteten anderen Klassen vergleichen.\n';
md=md.replaceAll('(besprochen)','(gespeichert)')
  .replace(/^\| Ausdauertraining \|.*$/m,'| Ausdauertraining | Je gelerntem Level +1 Vita, +1 Wisdom, +4 P-Defense, +4 M-Defense; maximal 20 Level | Wirkung und Skalierung gespeichert; gemeinsamer Trainingsblock |')
  .replace(/^\| Rüstungstraining \|.*$/m,'| Rüstungstraining | Je gelerntem Level +6 P-Defense und +6 M-Defense; maximal 10 Level; kein Vita | Wirkung und Skalierung gespeichert; gemeinsamer Trainingsblock |')
  .replace(/^\| Erweiterung des Körpers \|.*$/m,'| Erweiterung des Körpers | Permanent; Level 1 +150 HP/+3 Vita/+2 Wisdom/+2 Agility; bis Level 9 +50 HP und je +1 Attributpunkt; Level 10 doppelte Level-9-Boni | Werte und Stufentabelle gespeichert |')
  .replace('| Dauer s | Noch offen / Stand |','| Dauer s | Cast Time s | Noch offen / Stand |')
  .replace('| ---: | --- | --- | ---: | --- | --- | --- | --- | --- | --- |','| ---: | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |')
  .replace('Alle sechs derzeit zugeordneten Angriffe sind physisch. Erste Hilfe ist eine Heilfähigkeit mit gespeichertem matk-Wert 25, kein bestätigter magischer Angriff. Der Streitkolben liefert M-Angriff; dessen Nutzen für Heilung oder andere Fähigkeiten muss über die Skalierungsformeln geklärt werden.', 'Alle sechs derzeit zugeordneten Angriffe sind physisch. Erste Hilfe ist eine feste Eigenheilung ohne M-Angriffs-Skalierung. Der zusätzliche M-Angriff des Streitkolbens verstärkt diesen Skill nicht.')
  .replace(/^\| Adrenalin \|.*$/m,'| Adrenalin | 5 % Proc-Chance je eigener Angriffsaktion; +1 bis +5 % Stärke/Intelligenz; 20 bis 30 s Dauer; 120 bis 102 s Cooldown | Gespeichert; Laufzeitausführung durch Dedicated Server |')
  .replace('Arbeitsübersicht mit gespeicherten Werten und bereits besprochenen Festlegungen. „Besprochen“ bedeutet: festgelegt, aber noch nicht vollständig im Datensatz umgesetzt.', 'Arbeitsübersicht der aktuellen Datenbankwerte. Bereits bestätigte Festlegungen wurden synchronisiert; offene Angaben bleiben offen.')
  .replace('Vollständige Umsetzung im Datensatz, Proc-Wahrscheinlichkeit und genaue Kampfbedingung','Proc-Wahrscheinlichkeit und genaue Kampfprüfung')
  .replace('Veraltete Beschreibung korrigieren; endgültige Levelskalierung','Endgültige Levelskalierung')
  .replace('Gemeinsamer Trainingsblock; Levelskalierung und widersprüchliche Kategorie','Gemeinsamer Trainingsblock; Levelskalierung')
  .replace('Die beschlossenen Adrenalin-Werte gelten für unsere Planung, obwohl der Rohdatensatz noch nicht alle enthält. Die Rohdaten weiter unten bleiben zur Nachvollziehbarkeit unverändert.','Die bestätigten Adrenalin-Werte stehen jetzt in der Datenbank. Die Detailtabellen zeigen den neu exportierten Datensatz.');
md=md.replace(/\*\*\d+ unterschiedliche zugeordnete Skills[\s\S]*?\*\*/,`**${skills.length} unterschiedliche zugeordnete Skills: ${reviewActiveCount} aktive und ${reviewPassiveCount} passive.**`);
md=md.replace(/\| Adrenalin \|[^\n]*\n/g,'');
md=md.replace('Die bestätigten Adrenalin-Werte stehen jetzt in der Datenbank. Die Detailtabellen zeigen den neu exportierten Datensatz.','Adrenalin, Beben und Rotier Schlag sind dem Abenteurer nicht mehr zugeordnet. Breitschwert-Training ersetzt das bisherige Schwerttraining: zehn Stufen mit 3 +0,5 Stärke bis 7,5; kein Geschick. Die Detailtabellen zeigen den aktuellen Datenbankstand.');
md=md.replace(/\| (Erweiterung des Körpers|Waffentraining|Ausdauertraining|Rüstungstraining) \|[^\n]*\n/g,(_,name)=>`| ${name} | ${catalog.find(s=>s.skillName_de===name).description_de.replaceAll('|','/')} | Aktueller Datenbankstand |\n`);
md=md.replace('Alle sechs Angriffe sind derzeit physisch.',`Die ${skills.filter(s=>legacySkillType(s)==='physical').length} zugeordneten Angriffe sind derzeit physisch.`);
md=md.replace('Offen, keine Umrechnung in pro Sekunde','MP alle 3 Sekunden; HP im bisherigen Simulator alle 2 Sekunden');
md=md.replace('1 Mana pro Punkt und Tick als Vorschlag, noch nicht verbindlich','0,9 Mana pro Punkt und 3-Sekunden-Tick, gespeichert');
md+='\n## Neue Abenteurer-Skills\n\n| Skill | Stufen | Bestätigte Wirkung | Noch offen |\n| --- | ---: | --- | --- |\n';
md=md.replace('Alle neun zählen weiterhin zu den 33 Skills. Für die Abenteurer-Datei verbleiben 24 Detailblöcke;',`Alle neun zählen weiterhin zu den ${skills.length} Skills. Für die Abenteurer-Datei verbleiben ${skills.length-9} Detailblöcke;`);
for(const nr of [246,247,248,249,250,251]){const s=skills.find(s=>s.nr===nr);if(s)md+=`| ${s.skillName_de} | ${s.maxSkillLv} | ${s.description_de.replaceAll('|','/')} | ${{246:'Angriffszuordnung bei magischen Pets',248:'Genaue Trefferzeitpunkte',249:'Reichweite, genaue Animation/Trefferzeiten und magische Pet-Beiträge',250:'Pet-Zielreichweite'}[nr]??'Bestätigte Grundwirkung vollständig gespeichert'} |\n`;}
md=md.replace('\n\n','\n\nEinteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.\n\n').replaceAll('| dmgType |','| dmgType (Altformat) |');
const pointSummary=(await read('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='adventurer');
md=md.replace('\n\n',`\n\n**${skills.length} Skills, ${pointSummary.sp} Skillpunkte.** Jede gelernte Stufe kostet einen Punkt, einschließlich Stufe 1. Wilde Bindung hat eine Stufe mit den bisherigen Maximalwerten (+20 % P-Angriff und jeweils +10 % P-/M-Verteidigung des Abenteurers für das Pet bei vollem Vertrauen). Kontrolle hat maximal zwei Stufen: eine gleichzeitig kontrollierbare Kreatur je gelernter Stufe, also maximal zwei beim Abenteurer und seiner Weiterentwicklung. Alle anderen Klassen bleiben bei Kontrolle Stufe 1 und einer Kreatur.\n\n`);
await fs.writeFile('docs/balancing/classes/adventurer-skills.md',md);
await fs.writeFile('data/balancing/adventurer-skill-review.json',JSON.stringify({classKey:'adventurer',total:skills.length,regeneration:regen,skills,sourceStatus:'Current local database-exported catalog; no skill mutations'},null,2)+'\n');
console.log('Created adventurer review: current assigned skills, complete stored fields, seven comparison levels and confirmed two-handed sword. No skill values changed.');



