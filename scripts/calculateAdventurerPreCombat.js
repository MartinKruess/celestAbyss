import fs from 'node:fs/promises';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const comparison=JSON.parse(await fs.readFile('data/balancing/class-comparison-level60.json','utf8'));
const model=JSON.parse(await fs.readFile('data/balancing/attribute-model.json','utf8'));
const factor=(attribute,target)=>model.conversions.find(c=>c.attribute===attribute&&c.target===target).amountPerPoint;
const skillNumbers=[5,45,67,245,139,144,201];
const bonuses=[];
for(const nr of skillNumbers){const s=catalog.find(s=>s.nr===nr);if(!s?.statScaling)throw Error('Missing confirmed scaling');const stats={};for(const[k,curve]of Object.entries(s.statScaling))stats[k]=curve.type==='table'?curve.values[s.maxSkillLv-1]:curve.base+(s.maxSkillLv-1)*curve.perLevel;bonuses.push({nr,name:s.skillName_de,maxSkillLevel:s.maxSkillLv,stats});}
const add=(base,attributes)=>({...base,
maxHealth:base.maxHealth+(attributes.health??0)+(attributes.vita??0)*factor('vitality','maxHealth'),
maxMana:base.maxMana+(attributes.wis??0)*factor('wisdom','maxMana'),
physicalDefense:base.physicalDefense+(attributes.pdef??0)+(attributes.vita??0)*factor('vitality','physicalDefense'),
magicalDefense:base.magicalDefense+(attributes.mdef??0)+(attributes.wis??0)*factor('wisdom','magicalDefense'),
physicalAttack:base.physicalAttack+(attributes.patk??0)+(attributes.str??0)*factor('strength','physicalAttack'),
magicalAttack:base.magicalAttack+(attributes.matk??0)+(attributes.int??0)*factor('intelligence','magicalAttack')});
const variants=comparison.rows.filter(r=>r.key==='adventurer').map(row=>{
const selected=bonuses.filter(s=>s.nr!==245||row.weapons.includes('2H Schwert'));
const totals={};for(const s of selected)for(const[k,v]of Object.entries(s.stats))totals[k]=(totals[k]??0)+v;
const known=add(row.equipped,totals);
return {weapon:row.weapons[0],equipped:row.equipped,passiveBonuses:totals,includedSkills:selected.map(s=>s.nr),knownPassiveSubtotal:known};
});
const result={classKey:'adventurer',level:60,rank:6,status:'PermanentPassivesWithConfirmedBroadsword',bonuses,variants,excluded:['Adrenalin','Überlebenswille','Durchhalten proc draft','All active buffs','Pets','Jewelry and stones','Crit, Block and incomplete speed conversions'],assumptions:['Broadsword Training applies with the confirmed two-handed sword','Broadsword Training grants Strength only; Dexterity removed','Starting attribute contributions already included in operative baseline'],note:'These are combat-independent permanent bonuses only; not a full balance verdict.'};
await fs.writeFile('data/balancing/adventurer-precombat.json',JSON.stringify(result,null,2)+'\n');
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-Defense'],['magicalDefense','M-Defense']];
const sword=variants.find(v=>v.weapon==='2H Schwert');if(!sword)throw Error('Missing confirmed Adventurer weapon');
const f=v=>Number(v.toFixed(6)).toLocaleString('de-DE');
let md='# Abenteurer vor dem Kampf\n\nLevel 60, R6-Grundausrüstung und Zweihandschwert. Maximal gelernte permanente Passive einschließlich Breitschwert-Training. Keine Eigen-/Gruppenbuffs, Kampf-Procs, Pets, Schmuck oder Steine.\n\n| Wert | Mit Ausrüstung | Mit permanenten Passiven |\n| --- | ---: | ---: |\n';
for(const [key,label]of fields)md+=`| ${label} | ${f(sword.equipped[key])} | ${f(sword.knownPassiveSubtotal[key])} |\n`;
md+='\n## Eingerechnete Maximalboni\n\n| Skill | Max. Level | Boni |\n| --- | ---: | --- |\n';
for(const s of bonuses)md+=`| ${s.name} | ${s.maxSkillLevel} | ${Object.entries(s.stats).map(([k,v])=>k+' +'+f(v)).join(', ')} |\n`;
md+='\nBreitschwert-Training ersetzt das bisherige Schwerttraining nur beim Abenteurer: zehn Stufen, +3 Stärke auf Stufe 1, +0,5 je weiterer Stufe, maximal +7,5. Kein Geschick. Adrenalin, Beben, Rotier Schlag, Mächtiger Doppelschlag und Standhaft sind nicht mehr zugeordnet. Die vollständige aktuelle Statustabelle einschließlich Tempo und Regeneration steht in ../class-comparison.md. MP-Regeneration 0,9 je Willenskraft, Tick alle 3 Sekunden.\n';
await fs.writeFile('docs/balancing/classes/adventurer-precombat.md',md);
console.log('Adventurer precombat updated for confirmed two-handed sword and Broadsword Training.');



