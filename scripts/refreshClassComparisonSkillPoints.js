import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [sp,c,skills]=await Promise.all(['data/balancing/class-skill-points.json','data/balancing/class-comparison-level60.json','data/skills.json'].map(read));
const backup='data/balancing/history/before-comparison-sp-refresh-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.copyFile('data/balancing/class-comparison-level60.json',backup+'/comparison.json');await fs.copyFile('docs/balancing/class-comparison.md',backup+'/comparison.md');
for(const r of c.rows)r.sp=sp.classes.find(x=>x.key===r.key).sp;
const p='docs/balancing/class-comparison.md';let md=await fs.readFile(p,'utf8');const start=md.indexOf('## Basis ohne Ausrüstung'),end=md.indexOf('## Mit Waffen und Rüstung',start);let section=md.slice(start,end);for(const r of c.rows){const re=new RegExp('\\| '+r.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+' \\| \\d+ \\|');assert(re.test(section),r.name);section=section.replace(re,'| '+r.name+' | '+r.sp+' |');}md=md.slice(0,start)+section+md.slice(end);await fs.writeFile(p,md);await fs.writeFile('data/balancing/class-comparison-level60.json',JSON.stringify(c,null,2)+'\n');console.log('Updated SP only; combat stats preserved.');
console.log('Unassigned passive in comparison for Luminet:',skills.filter(s=>sp.classes.find(x=>x.key==='luminet').skills.some(x=>x.nr===s.nr)&&s.dmgType==='passive'&&!c.passiveRows.find(r=>r.key==='luminet').includedSkills.includes(s.nr)).map(s=>({nr:s.nr,name:s.skillName_de})));
