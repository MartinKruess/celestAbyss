import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
const cat=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const curve=(c,l)=>c.type==='table'?c.values[l-1]:c.base+(c.type==='fixed'?0:(l-1)*c.perLevel);
const specs={gladiator:[61,77,96,106,230,233],knight:[19,23,55,77,94,95],adventurer:[15,76,87,106,115,126],druid:[9,15,29,36,38,106,202,220,221]};
const reports=[];
for(const[key,numbers]of Object.entries(specs)){
 const pre=JSON.parse(await fs.readFile(`data/balancing/${key}-precombat.json`,'utf8'));
 for(const variant of pre.variants){
 const stats=variant.knownPassiveSubtotal;const rows=[];
 for(const nr of numbers){const s=cat.find(s=>s.nr===nr),l=s.maxSkillLv;
 const stat=k=>s.statScaling?.[k]?curve(s.statScaling[k],l):s[k]??0;
 let total=0,hits=1,formula='';const periodic=s.effects?.find(e=>e.type==='periodicDamage');
 if(periodic){const duration=periodic.durationScaling?curve(periodic.durationScaling,l):periodic.durationSeconds;hits=1+Math.floor((duration-periodic.firstTickAfterSeconds)/periodic.intervalSeconds);const base=periodic.valueScaling?curve(periodic.valueScaling,l):periodic.value;const attack=stats.magicalAttack;total=(base+attack)*hits;formula=`(${base} + ${attack}) × ${hits}`;}
 else {const p=stat('patk'),m=stat('matk');let single=(p?p+stats.physicalAttack:0)+(m?m+stats.magicalAttack:0);hits=s.attackExecution?.hitSequence?s.attackExecution.hitSequence.reduce((v,h)=>v+h.damageMultiplier,0):s.attackExecution?.hitCount??1;total=single*hits;formula=`${single} × ${hits}`;}
 rows.push({nr,name:s.skillName_de,total,hitWeight:hits,formula});}
 const total=rows.reduce((a,r)=>a+r.total,0);reports.push({classKey:key,weapon:variant.weapon,stats,rows,total,damageThreat:total*(key==='gladiator'?2.5:key==='knight'?4:1),threatMultiplier:key==='gladiator'?2.5:key==='knight'?4:1});
 }}
const glad=reports.find(r=>r.classKey==='gladiator');const atk=glad.stats.physicalAttack;const rageRows=[13,109,127,128].map(nr=>{const s=cat.find(s=>s.nr===nr);return {nr,name:s.skillName_de,total:curve(s.statScaling.patk,s.maxSkillLv)+atk+(nr===13?0:27)}});const rageTotal=glad.total+27*6+rageRows.reduce((a,r)=>a+r.total,0);
const report={assumptions:['one target','Level 60 original R6 equipment and confirmed maximum permanent passives','skill base plus matching character attack per hit; provisional combat formula','DoT ticks include magical attack per tick provisionally, including Burn whose caster-attack scaling needs confirmation','all scheduled ticks and hits land','no defense, critical hits, auto-attacks, pets, consumables or external buffs','normal rotation uses each listed attack once; cooldowns and execution times not simulated','Mana Explosion excluded due to remaining-Mana dependence','normal Gladiator table excludes Rage skills and active buffs','mixed Earthquake adds both physical and magical components'],classes:reports,gladiatorWithRage:{rows:rageRows,total:rageTotal,includesStrengthBonus:15,damageThreat:rageTotal*2.5},tankFieldAdditionalThreat:5000};
await fs.writeFile('data/balancing/rotation-damage-comparison.json',JSON.stringify(report,null,2)+'\n');
const f=n=>n.toLocaleString('de-DE',{maximumFractionDigits:1});let md='# Überschlag: Schaden und Aggro einer Angriffsrotation\n\nEin einzelnes Ziel, Level 60, ursprüngliche R6-Ausrüstung und maximale bestätigte permanente Passive. Pro Treffer wird vorläufig Skill-Grundschaden plus passender Charakterangriff gerechnet. Vollständige DoTs, ohne Verteidigung, Crits, Auto-Attacks, Pets oder aktive Buffs. Keine DPS- oder Zeitsimulation. Manaexplosion bleibt separat. Beim Druiden wird auch für Verbrennen vorläufig M-Angriff je Tick angesetzt; diese Skalierung muss später bestätigt werden.\n\n| Klasse / Waffe | Angriffe | Rohschaden | Aggro mit Provozieren |\n| --- | ---: | ---: | ---: |\n';
for(const r of reports)md+=`| ${r.classKey} / ${r.weapon} | ${r.rows.length} | ${f(r.total)} | ${f(r.damageThreat)} |\n`;
for(const r of reports){md+=`\n## ${r.classKey} / ${r.weapon}\n\n| Angriff | Rohschaden | Rechnung |\n| --- | ---: | --- |\n`;for(const s of r.rows)md+=`| ${s.name} | ${f(s.total)} | ${s.formula} |\n`;}
md+=`\nGladiator mit voller Wut-Vorbereitung, den vier zusätzlichen Wut-Angriffen und +15 Stärke durch Ausbruch der Wut: ${f(rageTotal)} Rohschaden und ${f(rageTotal*2.5)} Aggro. Ressourcen- und Timingbedingungen noch nicht simuliert. Tank-Feld erzeugt zusätzlich 5000 Aggro nach dem Schadensmultiplikator, hat aber keine direkten Schadenstreffer.\n`;
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/rotation-damage-comparison.md'),md);
if(reports.some(r=>!Number.isFinite(r.total)))throw Error('Non-finite damage');console.log(JSON.stringify(reports.map(r=>({class:r.classKey,weapon:r.weapon,attacks:r.rows.length,damage:r.total,threat:r.damageThreat})),null,2));console.log(JSON.stringify(report.gladiatorWithRage));
