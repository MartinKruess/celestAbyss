import fs from 'node:fs/promises';
const skills=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const comparison=JSON.parse(await fs.readFile('data/balancing/class-comparison-level60.json','utf8'));
const row=comparison.rows.find(r=>r.key==='butcher');
const numbers=[2,45,131,139,140,144,201];const bonuses=[];const totals={};
for(const nr of numbers){const s=skills.find(s=>s.nr===nr);if(!s?.statScaling)throw Error('Missing scaling');const stats={};for(const[k,c]of Object.entries(s.statScaling)){const v=c.type==='table'?c.values[s.maxSkillLv-1]:c.base+(s.maxSkillLv-1)*c.perLevel;stats[k]=v;totals[k]=(totals[k]??0)+v;}bonuses.push({nr,name:s.skillName_de,stats});}
const base=row.equipped;
const stats={...base,maxHealth:base.maxHealth+(totals.health??0)+(totals.vita??0)*30,maxMana:base.maxMana+(totals.wis??0)*30,physicalAttack:base.physicalAttack+(totals.patk??0)+(totals.str??0)*1.8,magicalAttack:base.magicalAttack+(totals.matk??0),physicalDefense:base.physicalDefense+(totals.pdef??0)+(totals.vita??0)*2,magicalDefense:base.magicalDefense+(totals.mdef??0)+(totals.wis??0)*2};
const report={classKey:'butcher',level:60,rank:6,status:'confirmedPermanentPassives',bonuses,variants:[{weapon:'2H Axt',equipped:base,passiveBonuses:totals,includedSkills:numbers,knownPassiveSubtotal:stats}],excluded:['Ewiger Sieger: conditional combat proc','Active buffs','Ungebrochen: death proc','Pets','Jewelry/stones'],equipmentProposalApplied:false};
await fs.writeFile('data/balancing/butcher-precombat.json',JSON.stringify(report,null,2)+'\n');
const f=v=>Number(v.toFixed(6)).toLocaleString('de-DE');
let md='# Butcher vor dem Kampf\n\nLevel 60, R6-Grundausrüstung und maximal gelernte bestätigte permanente Passive. Ewiger Sieger ist ein Kampf-Proc und vor dem Kampf nicht aktiv. Keine Eigenbuffs, Gruppenbuffs, Kampf-Procs, Pets, Schmuck oder Steine. Die notierte Axtänderung ist nicht übernommen.\n\n| Wert | Nur Ausrüstung | Mit bestätigten permanenten Passiven |\n| --- | ---: | ---: |\n';
for(const[k,label]of [['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']])md+=`| ${label} | ${f(base[k])} | ${f(stats[k])} |\n`;
md+='\n## Eingerechnete Skills\n\n| Skill | Maximalboni |\n| --- | --- |\n';for(const s of bonuses)md+=`| ${s.name} | ${Object.entries(s.stats).map(([k,v])=>k+' +'+f(v)).join(', ')} |\n`;
md+='\nEwiger Sieger ist vollständig festgelegt: Eigene Angriffe unter 15 Prozent Leben prüfen eine Auslösechance von 80 Prozent, sofern der Cooldown von 180 Sekunden bereit ist. Für 30 Sekunden gibt er auf Level 10 +21 Stärke und +21 Vita. Das entspricht zusätzlich +37,8 P-Angriff, +630 maximalem Leben und +42 P-Defense. Keine direkte Heilung und keine Wiederbelebung. Dieser situative Bonus gehört nicht zu den permanenten Werten oben.\n';
await fs.writeFile('docs/balancing/classes/butcher-precombat.md',md);console.log(stats);
