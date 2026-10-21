import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const skills=await read('data/skills.json'),pre=await read('data/balancing/luminet-precombat.json');
const stats=pre.variants[0].knownPassiveSubtotal;
const end=(c,l)=>c.type==='table'?c.values[l-1]:c.base+(c.type==='fixed'?0:(l-1)*c.perLevel);
const attackNumbers=[8,9,29,36,101,117,210,211,213,215,216,217,218,231];
const mana=s=>{const c=s.resourceCosts?.find(c=>c.resource==='mana');if(!c)throw Error('Missing Mana');return end(c.scaling,s.maxSkillLv)*(c.unit==='fraction'?stats.maxMana:1);};
const rows=attackNumbers.map(nr=>{
 const s=skills.find(s=>s.nr===nr),l=s.maxSkillLv;
 const base=s.statScaling?.matk?end(s.statScaling.matk,l):s.matk;
 let hits=s.attackExecution?.hitCount??1,multiplier=hits;
 const p=s.effects?.find(e=>e.type==='periodicDamage');
 if(p){const duration=p.durationScaling?end(p.durationScaling,l):p.durationSeconds;hits=1+Math.floor((duration-p.firstTickAfterSeconds)/p.intervalSeconds);multiplier=hits;}
 if(s.attackExecution?.hitSequence)multiplier=s.attackExecution.hitSequence.reduce((v,h)=>v+h.damageMultiplier,0);
 return{nr,name:s.skillName_de,mana:mana(s),skillBasePerHit:base,hits,totalHitMultiplier:multiplier,rawDamage:(base+stats.magicalAttack)*multiplier,assumption:nr===211?'One full center hit; repeat frequency remains pending':nr===117?'Second hit scales the complete first hit by 50 percent':nr===216?'Full character magical attack added to each spear':nr===9?'All four pulses hit the same enemy':null};
});
const once=rows.reduce((a,r)=>a+r.mana,0),damage=rows.reduce((a,r)=>a+r.rawDamage,0);
const extras=[41,74,79,228].map(nr=>{const s=skills.find(s=>s.nr===nr);return{nr,name:s.skillName_de,mana:mana(s)};});
const assumptions=['Level 60, original R6 gear, maximum permanent passives; same Intelligence-based comparison conversion as prior classes', 'Faith/Victim not additionally converted to attack without confirmed class-specific eligibility', 'Each of 14 attack skills used once, all hits land on one target; all four Ether Rain pulses included', 'No enemy defense, critical hits, active buffs, light vulnerability, dark/demon bonus, pets, regeneration or cooldown timeline', 'Character magical attack added to each hit; Judgement final hit is 50 percent of first-hit total', 'Aurora center hit counted once provisionally; edge hit is half; this is not a multi-target or sustained-DPS total'];
const report={classKey:'luminet',level:60,rank:6,stats,manaPool:stats.maxMana,attackSkillCount:rows.length,oneRotation:once,twoRotations:once*2,manaAfterOneRotation:stats.maxMana-once,manaAfterTwoRotations:stats.maxMana-once*2,totalRawDamageOneTarget:damage,rows,extrasExcludedFromAttackRotation:extras,assumptions};
await fs.writeFile('data/balancing/luminet-rotation-review.json',JSON.stringify(report,null,2)+'\n');
const f=v=>Number(v.toFixed(2)).toLocaleString('de-DE');
let md='# Luminet: Mana und Schaden einer Angriffsrunde\n\n'+assumptions.map(s=>'- '+s).join('\n')+'\n\n| Angriff | Mana | Treffer / Schadensfaktor | Rohschaden gegen ein Ziel |\n| --- | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${f(r.mana)} | ${f(r.totalHitMultiplier)} | ${f(r.rawDamage)} |\n`;
md+=`| Gesamt | **${f(once)}** | | **${f(damage)}** |\n\nMana-Pool: **${f(stats.maxMana)}**. Zwei Angriffsrunden kosten **${f(once*2)}**, ohne Regeneration fehlen **${f(once*2-stats.maxMana)}**. Nach einer Runde bleiben **${f(stats.maxMana-once)}**.\n\nHeilung und Buffs sind getrennt: ${extras.map(r=>r.name+' '+f(r.mana)+' Mana').join('; ')}. Kreaturenaktionen sind ebenfalls ausgeschlossen. Angriffskosten gelten einmal je Skillanwendung, nicht je Treffer.\n\nOffene Detailregeln: Aurora-Flächenposition, Randbreite und Trefferhäufigkeit; Nova-Zielgebietsmitbewegung; Bossregeln des Gefängnisses; allgemeine Kreaturen-Kontrolle. Der 33. Skill fehlt noch. Diese Werte sind eine Überschlagsrechnung, keine zeitliche Simulation.\n`;
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/classes/luminet-rotation-review.md'),md);
console.log(JSON.stringify(report,null,2));
