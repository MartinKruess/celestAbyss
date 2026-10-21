import fs from 'node:fs/promises';
import {isGroupBuff} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
const skills=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const classes=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const aliases={Gladiator:'gladiator','Kräuterkundler':'herbalist',Abenteurer:'adventurer',Jäger:'hunter',Butcher:'butcher',Schurke:'villian',Nachtjäger:'summoner',Ritualist:'ritualist',Druide:'druid',Heiler:'healer',Schamane:'shaman',Luminet:'luminet',Ritter:'knight'};
const labels={str:'Stärke',vita:'Vitalität',int:'Intelligenz',wis:'Willenskraft',dex:'Geschick',agi:'Agilität',patk:'P-Angriff',matk:'M-Angriff',pdef:'P-Abwehr',mdef:'M-Abwehr',manaRegen:'MP-Regeneration je Tick',atkSpeed:'Angriffsgeschwindigkeitspunkte',movementSpeed:'Laufgeschwindigkeitspunkte'};
const fmt=v=>v.toLocaleString('de-DE');
let md='# Gruppenbuffs – aktueller Stand\n\nAlle aktuell einer Klasse zugeordneten Gruppenbuffs, jeweils auf der höchsten lernbaren Anbieter-Stufe. Keine Self-Buffs. Laufzeiten: 30 oder 10 Minuten; Cooldown immer 60 Sekunden. Castzeit 0,3 Sekunden bei 30 Minuten, 0,2 Sekunden bei 10 Minuten. Tempo wird in additiven Rohpunkten angegeben. Angriffstempo folgt der bestehenden Kurve; eine konkrete Laufgeschwindigkeitskurve ist noch offen. Die Werte bedeuten keinen garantierten gleich hohen prozentualen Tempogewinn.\n\n| Skill | Anbieter | Stufe | Maximalwirkung | Dauer | Castzeit | Mana |\n| --- | --- | ---: | --- | ---: | ---: | ---: |\n';
for(const s of skills.filter(isGroupBuff)){
 const owners=classes.filter(c=>c.skillNumbers.includes(s.nr));if(!owners.length)continue;
 const candidates=owners.map(c=>skillForClass(s,aliases[c.name.split(' / ')[0]])).sort((a,b)=>b.maxSkillLv-a.maxSkillLv);
 const r=resolveSkillAtLevel(candidates[0],candidates[0].maxSkillLv);
 const bonuses=Object.entries(labels).filter(([k])=>typeof r[k]==='number'&&r[k]!==0).map(([k,label])=>{const value=['atkSpeed','movementSpeed'].includes(k)&&r.statBonusUnits?.[k]!=='ratingPoints'?r[k]*100:r[k];return '+'+fmt(value)+' '+label;});
 for(const e of r.effects??[])if(e.type==='damageBonus'&&e.appliesTo==='allSkills'&&e.unit==='flat')bonuses.push('+'+fmt(curveValue(e.valueScaling,r.maxSkillLv)??e.value)+' '+(e.damageTypes.includes('physical')?'körperlicher':'magischer')+' Skillschaden (keine Auto-Attacks)');
 md+=`| ${s.skillName_de} | ${owners.map(c=>c.name.split(' / ')[0]).join(', ')} | ${r.maxSkillLv} | ${bonuses.join(', ')}${s.nr===150?' (nur Begleiter, nicht direkt Morrak)':''} | ${r.dur/60} Min. | ${fmt(r.castTimeSeconds)} s | ${fmt(r.mana)} |\n`;
}
md+='\nAurora-Segen gewährt ausschließlich die vier genannten Attribute und direkte MP-Regeneration; keine direkten Angriffs-/Abwehrboni. Macht des Wassers und Macht des Feuers erhöhen ausschließlich passenden Skillschaden, keinen allgemeinen Angriff und keine Auto-Attacks oder Beschwörungen. Mehrfachtreffer und periodische Treffer mit normalem Angriffsanteil profitieren je Treffer, reine feste Rest-DoTs unverändert. Wassers MP-Regeneration sowie Macht des Felsens, Macht des Geistes und Erweckung der Leidenschaft bleiben erhalten. Die ehemaligen separaten Heiler-Segen sind nicht zusätzlich zugeordnet. Reserve-Definitionen ohne aktuelle Klassenzuordnung werden nicht als zusätzliche aktive Gruppenbuffs aufgeführt.\n';
await fs.writeFile('docs/balancing/group-buffs.md',md);console.log('Current assigned group-buff summary updated.');
