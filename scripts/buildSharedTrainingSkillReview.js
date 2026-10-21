import fs from 'node:fs/promises';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const skills=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const fmt=v=>typeof v==='number'?v.toLocaleString('de-DE'):String(v);
const esc=v=>fmt(v).replaceAll('|','\\|').replace(/\r?\n/g,'<br>');
function flatten(value,path='',out=[]){if(Array.isArray(value)){if(!value.length)out.push([path,'[]']);else value.forEach((v,i)=>flatten(v,`${path}[${i}]`,out));}else if(value&&typeof value==='object'){for(const [k,v]of Object.entries(value))flatten(v,path?path+'.'+k:k,out);}else out.push([path,value]);return out;}
let md='# Gemeinsame Trainingsskills\n\nWaffentraining, Rüstungstraining und Ausdauertraining sind gemeinsame permanente Passive aller 13 Klassen. Die Skillstufen bleiben unverändert; jede Klasse hat weiterhin insgesamt 280 Skillpunkte. Die Zahlen zeigen direkte Boni zusätzlich zu Attributumrechnungen.\n\n| Skill | Stufen | Maximalboni |\n| --- | ---: | --- |\n';
for(const nr of [201,144,139]){const s=skills.find(s=>s.nr===nr),r=resolveSkillAtLevel(s,s.maxSkillLv);const stats=nr===201?`+${r.patk} P-Angriff, +${r.matk} M-Angriff`:nr===144?`+${r.pdef} P-Abwehr, +${r.mdef} M-Abwehr`:`+${r.vita} Vitalität, +${r.wis} Willenskraft`;md+=`| ${s.skillName_de} | ${s.maxSkillLv} | ${stats} |\n`;}
for(const nr of [201,144,139]){const s=skills.find(s=>s.nr===nr);md+=`\n## ${nr}: ${s.skillName_de}\n\n${s.description_de}\n\n| Gespeichertes Feld | Wert |\n| --- | --- |\n`;for(const [key,value]of flatten(s).filter(([k])=>k!=='_id'))md+=`| ${esc(key)} | ${esc(value)} |\n`;}
await fs.writeFile('docs/balancing/shared-training-skills.md',md);console.log('Shared training documentation updated from current catalog.');
