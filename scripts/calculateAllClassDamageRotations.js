import {isAttackSkill,isPassiveSkill} from '../services/skillClassification.js';
import fs from 'node:fs/promises';
import {skillForClass} from '../services/skillLearningLevel.js';
import {evaluateDamageSkill,skillValue,curveValue} from '../services/rotationDamage.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
import {withPassiveSkillDamageBonuses,scopedSkillDamageBonus} from '../services/groupSkillDamageBonus.js';
import {conversionDelta} from '../services/timedDamageSimulation.js';
import {soulReserveAttackBonus} from '../services/soulReserveBonus.js';
const read=async path=>JSON.parse(await fs.readFile(path,'utf8'));
const [comparison,skills,model]=await Promise.all(['data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json'].map(read));
const get=nr=>{const s=skills.find(x=>x.nr===nr);if(!s)throw Error('Missing skill '+nr);return s;};
const collectorWindow=get(185).targetMarkSettings.durationSeconds;
const maximumCollectorApplications=Math.floor(collectorWindow/get(186).castTimeSeconds+1e-8);
const chainBaseMultiplier=points=>{const c=get(229).collectedPointScaling;let tier=0;for(const threshold of c.thresholds)if(points>=threshold)tier++;return 1+c.baseDamageBonusFractionByTier[tier];};
const prefixes={villian:'rogue'};
const reports=[];
for(const pre of comparison.passiveRows){
 const get=nr=>skillForClass(skills.find(s=>s.nr===nr),pre.key);
 if(pre.key==='ritualist'&&pre.includedSkills.includes(120))continue;
 const review=await read(`data/balancing/${prefixes[pre.key]??pre.key}-skill-review.json`);
 const numbers=review.skillNumbers??review.skills.map(s=>s.nr);
 const attacks=numbers.map(get).filter(s=>isAttackSkill(s)&&([226,244].includes(s.nr)||skillValue(s,'patk')>0||skillValue(s,'matk')>0||(s.effects??[]).some(e=>e.type==='periodicDamage')));
 const excluded=[],rows=[],stats={...pre.stats};
 let souls=pre.key==='ritualist'?100:0,points=0,manaRemaining=stats.maxMana;
 let setupManaCost=0;
 if(pre.key==='summoner'){
  const opener=get(185),cost=opener.resourceCosts?.find(c=>c.resource==='mana');
  setupManaCost=(curveValue(cost?.scaling,opener.maxSkillLv)??0)*targetedSkillModifiers(skills,pre.includedSkills,185).manaMultiplier;
  if(pre.includedSkills.includes(67))setupManaCost*=.97;
  manaRemaining-=setupManaCost;
 }
 // The display is sorted independently; this order keeps setup/finisher and resource dependencies explicit.
 const ordered=pre.key==='gladiator'?[...attacks].sort((a,b)=>a.nr===13?-1:b.nr===13?1:a.nr-b.nr):pre.key==='ritualist'?[180,103,104,105,48,49,72,99,110,232,235].map(get):pre.key==='summoner'?[...attacks].sort((a,b)=>a.nr===184?-1:b.nr===184?1:a.nr===229?1:b.nr===229?-1:a.nr-b.nr):[...attacks].sort((a,b)=>a.nr===219?1:b.nr===219?-1:a.nr-b.nr);
 for(const s of ordered){
  if(s.packAttackSettings&&(s.cd===undefined||s.castTimeSeconds===undefined||!s.resourceCosts?.length)){excluded.push({nr:s.nr,name:s.skillName_de,reason:'Grundschaden bestätigt; Mana, Cooldown und Vorbereitungs-/Castdauer noch offen. Bis zur Festlegung nicht zeitlich simuliert; keine regulären Pets im Test.'});continue;}
  if([226,244].includes(s.nr)){excluded.push({nr:s.nr,name:s.skillName_de,reason:'Temporäre Beschwörung: Angriffstempo/Schadensformel fehlen; kein erfundener Einzeltreffer.'});continue;}
  const current=withPassiveSkillDamageBonuses(stats,pre.includedSkills.map(get)),notes=[];
  const options={extraFlatDamage:scopedSkillDamageBonus(s.nr,(pre.learnedSkillNumbers??pre.includedSkills).map(get).filter(isPassiveSkill))};
  if(pre.key==='gladiator'&&s.nr!==13){current.physicalAttack+=15*1.89;notes.push('Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff.');}
  if(pre.key==='ritualist'){
   const cost=s.resourceCosts?.find(c=>c.resource==='soulFragments');
   if(cost)souls-=curveValue(cost.scaling,s.maxSkillLv);
   if(souls<0)throw Error('Soul shortage');
   const burn=get(214),effect=burn.effects.find(e=>e.type==='statModifier'&&e.stat==='matk'),burnAttack=curveValue(effect.valueScaling,burn.maxSkillLv)??effect.value;
   const reserveAttack=soulReserveAttackBonus(get(241),souls);current.magicalAttack+=reserveAttack+burnAttack;
   const reaper=get(120),storage=reaper.soulStorageSettings,bonus=storage.bonusStat==='int'?Math.floor(souls/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep:0,baked=storage.bonusStat==='int'&&pre.includedSkills.includes(120)?Math.floor(curveValue(storage.capacityScaling,reaper.maxSkillLv)/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep:0;
   for(const [stat,value]of Object.entries(conversionDelta(model,pre.key,'intelligence',bonus-baked)))current[stat]=(current[stat]??0)+value;
   options.totalMultiplier=1.01;
   if(s.nr===99)options.extraSkillBase=stats.maxHealth*0.25*1.25;
   notes.push(`${souls} Seelen beim Einsatz: +${reserveAttack} M-Angriff durch Zahl der Opfer; Reaper +${bonus} Intelligenz; Ausbrennen +${burnAttack} M-Angriff als automatische Kampfpassive, Opfergabe +1 % Schaden.`);
   if(s.nr===104)notes.push('Eine Anwendung, keine 15-fache Spamserie.');
   if(s.nr===105)notes.push('Nach nur einer Seelenqual keine neuen Seelen (Schwelle: 5 Treffer); Schaden der Ernte zählt.');
  }
  if(s.nr===219){options.extraSkillBase=Math.max(0,manaRemaining)*0.3;notes.push(`Manaexplosion zuletzt: ${Math.max(0,manaRemaining).toFixed(2)} verbleibendes Mana, davon 30 % zusätzlich.`);}
  if(s.nr===229){options.baseMultiplier=chainBaseMultiplier(points);notes.push(`Nach einmal Seelensammler ${points} Sammelpunkt: ${(options.baseMultiplier-1)*100} % Bonus nur auf den Skill-Grundschaden. Keine vollständige Spamphase.`);}
  if([90,91,92].includes(s.nr))notes.push('Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase.');
  if(s.nr===70)notes.push('Eine normale Anwendung. Finisher mit drei Anwendungen und ×1,5 wird separat ausgewiesen.');
  const modifiers=targetedSkillModifiers(skills,pre.includedSkills,s.nr);
  options.extraFlatDamage=(options.extraFlatDamage??0)+modifiers.extraFlatDamage;
  options.totalMultiplier=(options.totalMultiplier??1)*modifiers.damageMultiplier;
  options.physicalMultiplier=modifiers.physicalDamageMultiplier;
  options.magicalMultiplier=modifiers.magicalDamageMultiplier;
  const row=evaluateDamageSkill(s,current,options);row.notes.push(...notes);
  if(pre.key==='ritualist')row.soulsAtUse=souls;
  if(row.cooldownSeconds!==null)row.cooldownSeconds=Math.max(0,row.cooldownSeconds-modifiers.cooldownReduction);
  if(s.nr===184){row.notes.push('Nur Initialtreffer; bedingte Schadenswiederholung ohne Zeitplan separat als Obergrenze.');}
  if(s.nr===185)row.damage=0;
  if(s.nr===186){points++;if(setupManaCost)row.notes.push(`Sammlung durch Seelenschuss mit ${setupManaCost} Mana vorausbezahlt: Budget für 20 Anwendungen, maximal 25 möglich. Abschluss separat.`);}
  if(pre.key==='ritualist'&&s.nr===48)souls=Math.min(100,souls+1);
  const mana=s.resourceCosts?.find(c=>c.resource==='mana');
  let cost=mana?(curveValue(mana.scaling,s.maxSkillLv)??0)*(mana.unit==='fraction'?(mana.reference==='currentMana'?Math.max(0,manaRemaining):stats.maxMana):1):0;
  // Body Control's permanent Mana efficiency applies to the Adventurer and Rogue.
  if(pre.includedSkills.includes(67))cost*=0.97;
  cost*=modifiers.manaMultiplier;
  row.manaCost=cost;manaRemaining-=cost;
  if(!s.resourceCosts){row.manaCostStatus='notDefined';row.notes.push('Aktivierungskosten nicht vollständig definiert; keine zusätzlichen Kosten erfunden.');}
  rows.push(row);
 }
 const sorted=[...rows].sort((a,b)=>a.damage-b.damage||a.nr-b.nr);
 const total=rows.reduce((a,r)=>a+r.damage,0);
 const alternatives=[];
 const kunai=rows.find(r=>r.nr===70);
 if(kunai)alternatives.push({name:'Kunai-Finisher unter 6 % Ziel-Leben: drei Anwendungen ×1,5',damage:kunai.damage*4.5,replacesNr:70,rotationTotal:total+kunai.damage*3.5});
 if(pre.key==='summoner'){
  const collector=rows.find(r=>r.nr===186),chain=rows.find(r=>r.nr===229);
  const chainMax=evaluateDamageSkill(get(229),stats,{baseMultiplier:chainBaseMultiplier(maximumCollectorApplications)});
  const fullWindow=total+collector.damage*(maximumCollectorApplications-1)+chainMax.damage-chain.damage;
  alternatives.push({name:`Zusätzlich vollständige ${maximumCollectorApplications}-Seelensammler-Phase statt einmaligem Einsatz; maximaler Kettenbonus`,damage:fullWindow,rotationTotal:fullWindow,extraApplications:maximumCollectorApplications-1});
  const replaySource=total-rows.find(r=>r.nr===184).damage;
  alternatives.push({name:'Bedingte Wiederholung: Markierung prockt, alle übrigen Schäden im 30-s-Fenster, +90 % Wiederholung; keine zweite Mitigation',damage:replaySource*0.9,rotationTotal:total+replaySource*0.9,procChance:0.6,status:'upperBoundNotTimelineValidated'});
 }
 if(pre.key==='ritualist'){
  const torment=rows.find(r=>r.nr===104);
  alternatives.push({name:'14 zusätzliche Seelenqual-Anwendungen (insgesamt 15): nur ihr zusätzlicher Schaden, noch ohne Folgewirkung der zwei zusätzlich erntbaren Seelen',damage:torment.damage*14,status:'additionalDamageOnlyNotFullTimeline',extraApplications:14});
 }
 const uncertain=rows.reduce((a,r)=>a+r.uncertainCasterAttackContribution,0);
 if(uncertain)alternatives.push({name:'Falls Charakter-M-Angriff zusätzlich auf alle bisher undefinierten DoT-Ticks wirkt',damage:uncertain,rotationTotal:total+uncertain,status:'unconfirmedSensitivityNotStoredRule'});
 reports.push({key:pre.key,name:pre.name.replace(' / Magiewaffe, leerer Seelenspeicher',''),weapons:pre.weapons,stats,rows:sorted,executionOrder:rows.map(r=>r.nr),total,attackSkillCount:rows.length,excluded,alternatives,resources:{initialMana:stats.maxMana,manaAfterAttacks:manaRemaining,setupManaCost,initialSouls:pre.key==='ritualist'?100:null,finalSouls:pre.key==='ritualist'?souls:null},automaticCombatPassives:pre.key==='ritualist'?['Ausbrennen','Opfergabe','Verloren in der Dunkelheit','Zahl der Opfer']:[],conditionsVerified:false});
 const result=reports.at(-1);
 result.flatThreat=sorted.reduce((sum,row)=>sum+(get(row.nr).effects??[]).filter(e=>e.type==='threatGain'&&e.affectedByThreatMultiplier===false).reduce((a,e)=>a+(curveValue(e.valueScaling,get(row.nr).maxSkillLv)??e.value),0),0);
 result.damageThreatMultiplier=pre.key==='knight'?4:pre.key==='gladiator'?2.5:1;
 result.threatWithProvoke=total*result.damageThreatMultiplier+result.flatThreat;
}
const assumptions=[
 'Level 60, ursprüngliche R6-Ausrüstung, aktuelle interne Klassenfaktoren und maximal gelernte permanente Passive. Keine Umstellung der Ausrüstung oder Skillwerte durch diese Auswertung.',
 'Jeder direkte Angriffsskill einmal; alle zu dieser Anwendung gehörenden Treffer und vollständigen DoTs gegen EIN Ziel. Anzeige schwach nach stark ist keine Ausführungsreihenfolge.',
 'Vorläufige Rohschadensformel: Skill-Grundwert plus passender Charakterangriff je Treffer; gemischte Angriffe verwenden beide gespeicherten Komponenten. Keine gegnerische Verteidigung, zufälligen Crits, Auto-Attacks, Begleiter, Verbrauchsgegenstände oder separaten aktiven Buffs.',
 'Garantierte Crits verwenden 80 % Zusatzschaden. Beim Brecher des Lichts ist der erste Treffer normal und der zweite garantiert kritisch. Kein zusätzliches Würfeln zufälliger Crits.',
 'Gladiator startet mit voller Wut und setzt Ausbruch der Wut vor seinen abhängigen Skills ein. Sein dabei automatisch erzeugter +15-Stärke-Bonus ist enthalten; andernfalls wären die Wut-Folgeskills nicht einsetzbar. Separate Self-Buffs bleiben aus.',
 'Ritualist startet mit 100 Seelen. Seelenplage kostet 30 und Seelenfessel 1; Feuer der Verdammten gewinnt gegen ein einzelnes Ziel 1 Seele. Eine Seelenqual reicht nicht zur Seelengewinnung durch Seelenernte. Seelenstände ändern den Bonus von Zahl der Opfer. Ausbrennen, Opfergabe und der feste Seelenangriffsbonus sind automatische Kampfpassiven und enthalten.',
 'Keine Zeit-/DPS- oder vollständig ressourcen-/positionsgültige Rotation simuliert: alle Schäden dürfen vollständig auslaufen; gegnerische Statuswechsel, Nebel-/Lichtgefängnis-Synergien und Freeze-Schadensreduktion werden nicht als optimale Abfolge eingerechnet. Die Mana-Rechnung berücksichtigt weder Regeneration noch Heil-/Buffkosten.',
 'Manaexplosion wird nach den übrigen Schadensskills aus verbleibendem Mana berechnet. Bedingte Finisher, Replay-Effekte und wiederholte Spamfenster stehen separat, damit die Hauptmatrix wirklich einmalige Skillnutzung vergleicht.',
 'Die Tarnvoraussetzung für Schurken-Schattenangriffe und die schadenslose Markierung für Seelenjäger werden zugelassen. Ihre Aktivierung zählt nicht als zusätzlicher Schadensskill. Alle Schattenangriffe sind nicht automatisch in einer einzigen Tarnphase realisierbar.',
 'Summon-Schaden ohne definierte Angriffsfrequenz wird nicht erfunden. Druidischer Verbrennen-DoT und Frostschauer zählen nur den definierten Tick-Grundschaden; eine zusätzliche Charakter-M-Angriff-Skalierung steht separat als Sensitivität.',
 'Meteoriten: insgesamt drei 40/60-Paare, nicht sechsmal Meteoritenanzahl; der gespeicherte Meteoritenschauer bleibt physisch. Pro Welle gegen ein Ziel der volle Wellenanteil als bisherige Vergleichsannahme; genaue Einschlagsgeometrie noch offen.',
 'Keine finale Balancebewertung: Rotationssummen hängen von Skillanzahl und langen vollständigen Feldlaufzeiten ab, nicht nur von nachhaltigem Schaden.'
];
const maxSkills=Math.max(...reports.map(r=>r.rows.length));
const spamVariants=['ritualist','summoner'].map(key=>{
 const original=reports.find(r=>r.key===key),variant=structuredClone(original);
 variant.name=key==='ritualist'?'Ritualist – Seelenqual ×15':`Seelenjäger – Seelensammler ×${maximumCollectorApplications}`;
 variant.variantOf=key;variant.repeatedSkill=key==='ritualist'?104:186;variant.repeatCount=key==='ritualist'?15:maximumCollectorApplications;
 const harvestIndex=original.executionOrder.indexOf(105);
 variant.rows=original.rows.map(row=>{
  const s=get(row.nr);
  if(row.nr===variant.repeatedSkill){const r=structuredClone(row);for(const field of ['damage','initialDamage','periodicDamage','manaCost','uncertainCasterAttackContribution'])r[field]*=variant.repeatCount;r.applications=variant.repeatCount;r.notes=[`${variant.repeatCount} vollständige Anwendungen statt einer.`];return r;}
  if(key==='ritualist'&&original.executionOrder.indexOf(row.nr)>harvestIndex){
   const bonusDelta=soulReserveAttackBonus(get(241),Math.min(100,row.soulsAtUse+2))-soulReserveAttackBonus(get(241),row.soulsAtUse);
   const current={...original.stats,physicalAttack:row.characterPhysicalAttack,magicalAttack:row.characterMagicalAttack+bonusDelta};
   const options={totalMultiplier:1.01};if([103,104,105,180].includes(row.nr))options.extraFlatDamage=120;if(row.nr===99)options.extraSkillBase=original.stats.maxHealth*0.25*1.25;
   const updated=evaluateDamageSkill(s,current,options);updated.manaCost=row.manaCost;updated.notes.push(`Nach Seelenernte zwei zusätzliche Seelen: ${bonusDelta} zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills.`);return updated;
  }
  if(key==='summoner'&&row.nr===229){const factor=chainBaseMultiplier(maximumCollectorApplications);const updated=evaluateDamageSkill(s,original.stats,{baseMultiplier:factor});updated.manaCost=row.manaCost;updated.notes.push(`${maximumCollectorApplications} Sammelpunkte: ${Math.round((factor-1)*100)} % auf den Skill-Grundschaden, nicht auf Charakterangriff.`);return updated;}
  const copied=structuredClone(row);if(key==='ritualist'&&row.nr===105)copied.notes=['Nach 15 Seelenqual-Treffern werden zwei Seelen geerntet.'];return copied;
 }).sort((a,b)=>a.damage-b.damage||a.nr-b.nr);
 variant.total=variant.rows.reduce((a,r)=>a+r.damage,0);
 variant.threatWithProvoke=variant.total*variant.damageThreatMultiplier+variant.flatThreat;
 variant.resources.manaAfterAttacks-=original.rows.find(r=>r.nr===variant.repeatedSkill).manaCost*(variant.repeatCount-1);
 if(key==='ritualist')variant.resources.finalSouls+=2;
 variant.alternatives=[];
 return variant;
});
const singleUseClasses=spamVariants.map(variant=>structuredClone(reports.find(r=>r.key===variant.key)));
for(const variant of spamVariants)reports[reports.findIndex(r=>r.key===variant.key)]=structuredClone(variant);
assumptions[1]='Jeder direkte Angriffsskill einmal, einschließlich seiner Mehrfachtreffer und vollständigen DoTs gegen EIN Ziel. Ausnahmen: Ritualist mit 15 Seelenqual-Anwendungen und Seelenjäger mit vollständigem Fünf-Sekunden-Fenster (theoretisch 25 Seelensammler-Treffer) und maximalen Spektralketten. Anzeige schwach nach stark ist keine Ausführungsreihenfolge.';
assumptions[7]='Manaexplosion wird nach den übrigen Schadensskills aus verbleibendem Mana berechnet. Bedingte Finisher und Replay-Effekte bleiben separat. Beide Seelenkombinationen stehen mit vollständigem Angriffsfenster im Hauptvergleich. Es handelt sich weiterhin nicht um eine DPS-Simulation.';
const fmt=n=>Math.round(n).toLocaleString('de-DE');
let md='# Schaden einer vollständigen Angriffsrunde – alle Klassen\n\n'+assumptions.map(s=>'- '+s).join('\n')+'\n\n## Vergleich: Skills je Klasse aufsteigend nach Schaden\n\n';
md+=`| Klasse | ${Array.from({length:maxSkills},(_,i)=>'Skill '+(i+1)).join(' | ')} | Summe |\n| --- | ${Array.from({length:maxSkills},()=> '---:').join(' | ')} | ---: |\n`;
for(const r of [...reports].sort((a,b)=>b.total-a.total))md+=`| ${r.name} | ${Array.from({length:maxSkills},(_,i)=>r.rows[i]?fmt(r.rows[i].damage):'—').join(' | ')} | **${fmt(r.total)}** |\n`;
md+='\nDer Ritualist berücksichtigt 15 Seelenqual-Anwendungen und zwei geerntete Seelen. Auf Maximalstufe hat Seelenfessel 90 Sekunden und Seelenernte 180 Sekunden Cooldown; die vollständige Kombination ist daher nicht in jeder kurzen Rotation verfügbar. Der Seelenjäger berücksichtigt 25 Seelensammler-Anwendungen bei 75 Sekunden Kombinations-Cooldown. Schadenswiederholung des Hinterhältigen Pfeils bleibt außerhalb der Hauptsumme.\n';
md+='\n## Rangfolge der dargestellten Rotationen\n\n| Klasse | Unterschiedliche Angriffsskills | Rohschaden |\n| --- | ---: | ---: |\n';
for(const r of [...reports].sort((a,b)=>b.total-a.total))md+=`| ${r.name} | ${r.rows.length} | ${fmt(r.total)} |\n`;
for(const r of reports){
 md+=`\n## ${r.name}\n\nP-Angriff **${fmt(r.stats.physicalAttack)}**, M-Angriff **${fmt(r.stats.magicalAttack)}**.\n\n| Spalte | Skill | Rohschaden | Hinweise |\n| --- | --- | ---: | --- |\n`;
 for(const [i,row]of r.rows.entries())md+=`| Skill ${i+1} | ${row.name}${row.applications?' ×'+row.applications:''} (Nr. ${row.nr}) | ${fmt(row.damage)} | ${row.notes.join(' ')||'Eine Anwendung; gespeicherte Trefferzahl.'} |\n`;
 md+=`\nGesamt: **${fmt(r.total)}**. Mana nach den Schadensskills ohne Regeneration: **${fmt(r.resources.manaAfterAttacks)}**${r.resources.finalSouls!==null?`; verbleibende Seelen: **${r.resources.finalSouls}**`:''}.\n`;
 if(['knight','gladiator'].includes(r.key))md+=`\nMit Provozieren: ${fmt(r.total)} × ${r.damageThreatMultiplier} + ${fmt(r.flatThreat)} feste Aggro = **${fmt(r.threatWithProvoke)} Aggro**. Unveränderte Buff-/Debuff-Synergien und Auto-Attacks bleiben außen vor.\n`;
 if(r.excluded.length)md+='\nNicht bezifferbar: '+r.excluded.map(x=>`${x.name}: ${x.reason}`).join(' ')+'\n';
 if(r.alternatives.length){md+='\nSeparate Bedingungen / Sensitivitäten, nicht zur Hauptsumme addiert:\n\n';for(const a of r.alternatives)md+=`- ${a.name}: **${fmt(a.damage)}**${a.rotationTotal!==undefined?`; alternative Gesamtsumme **${fmt(a.rotationTotal)}**`:''}.\n`;}
}
if(new Set(reports.map(r=>r.key)).size!==13)throw Error('Missing class');
await fs.writeFile('data/balancing/all-class-damage-rotations.json',JSON.stringify({level:60,rank:6,assumptions,classes:reports,spamVariants,singleUseClasses,maxSkillColumns:maxSkills},null,2)+'\n');
// Preserve the separately generated, explicitly dated time-comparison snapshot.
let timedSnapshot='';
try{const previous=await fs.readFile('docs/balancing/all-class-damage-rotations.md','utf8');const marker='\n<!-- TIMED_DAMAGE_COMPARISON -->';const index=previous.indexOf(marker);if(index>=0)timedSnapshot=previous.slice(index);}catch(error){if(error.code!=='ENOENT')throw error;}
await fs.writeFile('docs/balancing/all-class-damage-rotations.md',md+timedSnapshot);
console.log(JSON.stringify([...reports].sort((a,b)=>b.total-a.total).map(r=>({class:r.name,skills:r.rows.length,damage:Math.round(r.total),uncertain:r.rows.filter(s=>s.notes.some(n=>n.includes('offen')||n.includes('nicht definiert')||n.includes('hinterlegt'))).map(s=>s.name)})),null,2));

