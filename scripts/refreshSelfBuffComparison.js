import fs from 'node:fs/promises';
import {compareSelfBuffs} from '../services/selfBuffComparison.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const p='data/balancing/class-comparison-level60.json';
const [c,skills,model,assign]=await Promise.all([p,'data/skills.json','data/balancing/attribute-model.json','data/reports/class-skill-counts.json'].map(read));
const names={gladiator:'Gladiator / Berserker',herbalist:'Kräuterkundler / Witcher',adventurer:'Abenteurer / Scout',hunter:'Jäger / Schütze',butcher:'Butcher / Destroyer',villian:'Schurke / Schattenkrieger',summoner:'Nachtjäger / Seelenjäger',ritualist:'Ritualist / Blutmagier',druid:'Druide / Alchemist',healer:'Heiler / Priester',shaman:'Schamane / Hochelfe',luminet:'Luminet / Lichtmagier',knight:'Ritter / Tempelritter'};
c.selfBuffRows=c.passiveRows.map(pre=>compareSelfBuffs({pre,skills,model,assignedNumbers:assign.counts.find(a=>a.name===names[pre.key]).skillNumbers}));
await fs.writeFile(p,JSON.stringify(c,null,2)+'\n');
const path='docs/balancing/class-comparison.md';let md=await fs.readFile(path,'utf8');const start=md.indexOf('## Vergleich mit permanenten Passiven und eigenen Buffs');if(start<0)throw Error('Section missing');const tableStart=md.indexOf('| Klasse |',start),tableEnd=md.indexOf('\n\n',tableStart);
const fmt=(v,k)=>{const pct=['criticalDamageBonus','attackSpeed','movementSpeed'].includes(k);return (['maxHealth','maxMana','physicalAttack','magicalAttack','physicalDefense','magicalDefense'].includes(k)?Math.round(v):Number((v*(pct?100:1)).toFixed(2))).toLocaleString('de-DE')+(pct?' %':'');};
const table='| Klasse | '+c.fields.map(x=>x[1]).join(' | ')+' |\n| --- | '+c.fields.map(()=>'---:').join(' | ')+' |\n'+c.selfBuffRows.map(r=>'| '+r.name+' | '+c.fields.map(([k])=>fmt(r.stats[k],k)).join(' | ')+' |').join('\n');md=md.slice(0,tableStart)+table+md.slice(tableEnd);
const detailStart=md.indexOf('| Klasse | Eigene Buffs (maximale Dauer) |');
if(detailStart>=0){
 const detailEnd=md.indexOf('\n\n',detailStart);
 const esc=v=>String(v).replaceAll('|','\\|').replaceAll('\n',' ');
 const detail='| Klasse | Eigene Buffs (maximale Dauer) | Separate Effekte / Annahmen |\n| --- | --- | --- |\n'+c.selfBuffRows.map(r=>{
  const buffs=r.buffs.map(b=>`${b.name} (${b.durationSeconds===null?'Dauer offen':b.durationSeconds+' s'})`).join('; ');
  const notes=[...r.excluded.map(e=>`${e.name}: ${e.reason}`),...r.buffs.flatMap(b=>b.notes.map(n=>`${b.name}: ${n}`)),...r.notes].join('; ');
  return `| ${esc(r.name)} | ${esc(buffs)} | ${esc(notes)} |`;
 }).join('\n');
 md=md.slice(0,detailStart)+detail+(detailEnd<0?'':md.slice(detailEnd));
}
await fs.writeFile(path,md);console.log('Refreshed self-buff snapshot and source list; base and passive rows preserved.');
