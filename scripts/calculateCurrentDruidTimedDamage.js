import {retiredBalancingReportPath} from '../services/retiredBalancingReports.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {conversionDelta,simulateClass} from '../services/timedDamageSimulation.js';
import {applyEquipmentBonus,applyItemComparisonBonuses} from '../services/equipmentComparisonBonuses.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {skillValue} from '../services/rotationDamage.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const [skills,model,equipment,baseline,comparison,previous,items]=await Promise.all(['data/skills.json','data/balancing/attribute-model.json','data/balancing/ranked-equipment.json','data/balancing/class-baselines.json','data/balancing/class-comparison-level60.json','data/balancing/all-class-timed-damage.json','tmp/weapon-review-items.json'].map(read));
const dir='data/balancing/history/before-current-druid-timed-'+Date.now();await fs.mkdir(dir,{recursive:true});
for(const p of ['data/balancing/ranked-equipment.json','data/balancing/class-comparison-level60.json'])await fs.copyFile(p,dir+'/'+p.split('/').at(-1));
const labels={pang:'P.Ang',mang:'M.Ang',strength:'Stärke',int:'Intelligence',speed:'ATK Speed'};
for(const item of items.filter(x=>x.type==='Mace2H')){
 const weapon={name:'2H Mace',rank:item.rang,itemName:item.name,databaseItemId:String(item._id),source:'MongoDB confirmed mace decisions',raw:Object.entries(item.attributes).filter(([k])=>labels[k]).map(([k,value])=>({label:labels[k],value}))};
 const index=equipment.weapons.findIndex(w=>w.name===weapon.name&&w.rank===weapon.rank);
 if(index>=0)equipment.weapons[index]=weapon;else equipment.weapons.push(weapon);
}
const attributes={vitality:59,wisdom:59,strength:59,intelligence:59},flat={};
const initial=baseline.classes.find(c=>c.key==='druid').baseStats;
const build=(attributes,flat)=>{
 const stats={...initial,accuracy:0,dodge:0,critChanceRating:0,block:0,penetration:0,healthRegen:12,manaRegen:25,criticalDamageBonus:0.8};
 for(const [attribute,amount]of Object.entries(attributes))for(const [stat,value]of Object.entries(conversionDelta(model,'druid',attribute,amount)))stats[stat]=(stats[stat]??0)+value;
 for(const [stat,value]of Object.entries(flat))stats[stat]=(stats[stat]??0)+value;
 return stats;
};
const armor=equipment.armor.find(a=>a.name==='Druid'&&a.rank===6);
for(const [stat,value]of Object.entries(armor.raw)){
 const result=applyEquipmentBonus({stat,value,unit:['attackSpeed','movementSpeed','criticalDamageBonus'].includes(stat)?armor.rawUnits?.[stat]:'flat'},attributes,flat);assert.ok(result.applied,'Unsupported armor stat '+stat);
}
assert.deepEqual(applyItemComparisonBonuses(armor,attributes,flat),[]);
const weapon=equipment.weapons.find(w=>w.name==='2H Mace'&&w.rank===6);
assert.deepEqual(weapon.raw.filter(b=>['P.Ang','M.Ang'].includes(b.label)).map(b=>b.value),[155,248]);
for(const bonus of weapon.raw){
 const stat={'P.Ang':'physicalAttack','M.Ang':'magicalAttack','Stärke':'strength','Intelligence':'intelligence','ATK Speed':'attackSpeed'}[bonus.label];
 assert.ok(applyEquipmentBonus({stat,value:bonus.value,unit:stat==='attackSpeed'?'percentagePoints':'flat'},attributes,flat).applied);
}
const equipped=build(attributes,flat),equippedAttributes={...attributes};
const aliases={str:'strength',int:'intelligence',wis:'wisdom',vita:'vitality',dex:'dexterity',agi:'agility',luck:'luck'};
const direct={patk:'physicalAttack',matk:'magicalAttack',mana:'maxMana',health:'maxHealth',pdef:'physicalDefense',mdef:'magicalDefense',atkSpeed:'attackSpeed',manaRegen:'manaRegen'};
const includedSkills=[1,44,132,139,144,201,203,...skills.filter(s=>s.dmgType==='passive'&&s.charClass.includes('Druide')&&s.effects?.some(e=>e.appliesTo==='specificSkill')).map(s=>s.nr)];
for(const nr of includedSkills){const skill=skillForClass(skills.find(s=>s.nr===nr),'druid');assert.ok(skill.charClass.includes('Druide'));for(const [stat,curve]of Object.entries(skill.statScaling??{})){
 const value=curve.type==='table'?curve.values[skill.maxSkillLv-1]:curve.base+(skill.maxSkillLv-1)*(curve.perLevel??0);
 const destination=aliases[stat]?attributes:flat,key=aliases[stat]??direct[stat];assert.ok(key,'Unsupported passive stat '+stat);destination[key]=(destination[key]??0)+value;
}}
const pre={key:'druid',name:'Druide',weapons:['2H Mace'],knownAttributes:attributes,includedSkills,stats:build(attributes,flat)};
const assigned=skills.filter(s=>s.charClass.includes('Druide'));
assert.ok([30,31].includes(assigned.length));
const attackNumbers=assigned.filter(s=>['physical','spell','Physicas'].includes(s.dmgType)&&(s.nr===244||skillValue(s,'patk')>0||skillValue(s,'matk')>0||(s.effects??[]).some(e=>e.type==='periodicDamage'))).map(s=>s.nr);
assert.deepEqual([...attackNumbers].sort((a,b)=>a-b),[9,29,30,36,118,125,212,219,220,221,244]);
const config={duration:600,targetHealth:10000000,manaRegenInterval:model.regenerationTiming?.manaTickIntervalSeconds??2,enableOwnBuffs:false};
const result=simulateClass({pre,skills,model,attackNumbers,config});
assert.ok(result.totalDamage>0);assert.ok(result.finalMana>=0);assert.equal(result.durationSeconds,600);
assert.ok(Math.abs(result.totalDamage-result.skillDamage-result.autoDamage-result.summonDamage)<0.001);
assert.ok(result.skills.some(s=>s.nr===244&&s.damage>0));
assert.ok(!result.skills.some(s=>[15,38,41,106,192,193,194,200,202,204,225].includes(s.nr)));
const old=previous.results.find(r=>r.key==='druid');
const ranking=previous.results.map(r=>r.key==='druid'?result:r).sort((a,b)=>b.totalDamage-a.totalDamage);
const hashes=Object.fromEntries(await Promise.all(['data/skills.json','data/balancing/attribute-model.json','services/timedDamageSimulation.js'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
const assumptions=['Only Druid rerun; other twelve entries retained from previous report.','Level 60/R6, 600 seconds, 10-million-HP stationary target, no armor or counterattacks.','No own/group buffs or catalyst field; no random Adrenaline proc or critical hits.','Nature Spirit included as active damage summon; regular pets excluded.','Forgotten Spell excluded: selected skill and allowed level increase remain undefined.','Mana explosion retains its confirmed resource sacrifice. No incoming damage, so attack healing does not improve survival in this test.'];
const report={generatedAt:new Date().toISOString(),status:'druidOnlyRerun',hashes,backup:dir,assumptions,pre,weapon,attackNumbers,previousDruidDamage:old.totalDamage,result,ranking:ranking.map((r,i)=>({rank:i+1,key:r.key,name:r.name,totalDamage:r.totalDamage,dps:r.dps,rerun:r.key==='druid'}))};
await save('data/balancing/druid-current-timed-damage.json',report);
await save('data/balancing/ranked-equipment.json',equipment);
const row=comparison.rows.find(r=>r.key==='druid');Object.assign(row,{equipped,knownAttributes:equippedAttributes,weapons:pre.weapons,unresolvedWeapon:[]});
comparison.passiveRows=comparison.passiveRows.map(r=>r.key==='druid'?pre:r);
comparison.druidUpdatedAt=report.generatedAt;
await save('data/balancing/class-comparison-level60.json',comparison);
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Druide: aktueller 600-Sekunden-Vergleich\n\nNur der Druide wurde neu gerechnet. Die übrigen zwölf Klassen stammen aus dem vorherigen Vergleich.\n\nDruide: Level 60/R6, Zweihand-Mace '+weapon.itemName+' mit 155 P-/248 M-Angriff, 10 Stärke, 16 Intelligenz und −23 Angriffstempo. Permanente Passive enthalten, keine Eigen-/Gruppenbuffs oder Katalysatorfelder. Naturgeist enthalten, reguläre Pets und zufälliges Adrenalin ausgeschlossen. Vergessener Zauber bleibt wegen offener Skillauswahl ausgeschlossen. Ziel ohne Rüstung/Gegenangriffe.\n\n| Platz | Klasse | Schaden in 600 s | DPS |\n| ---: | --- | ---: | ---: |\n';
for(const r of report.ranking)md+=`| ${r.rank} | ${r.name}${r.rerun?' (neu)':''} | ${f(r.totalDamage)} | ${f(r.dps)} |\n`;
md+=`\nDruide vorher: ${f(old.totalDamage)}. Jetzt: ${f(result.totalDamage)}. Skills: ${f(result.skillDamage)}; Auto-Attacks: ${f(result.autoDamage)}; Naturgeist: ${f(result.summonDamage)}. Mana-Wartezeit: ${result.manaBlockedSeconds.toFixed(2)} Sekunden.\n\n| Aktion | Anwendungen | Schaden |\n| --- | ---: | ---: |\n`;
for(const skill of result.skills)md+=`| ${skill.name} | ${skill.applications} | ${f(skill.damage)} |\n`;
await fs.writeFile(await retiredBalancingReportPath('docs/balancing/druid-current-timed-damage.md'),md);
console.log(JSON.stringify({ranking:report.ranking,pre,damage:{total:result.totalDamage,skill:result.skillDamage,auto:result.autoDamage,natureSpirit:result.summonDamage},manaBlockedSeconds:result.manaBlockedSeconds,warnings:result.warnings},null,2));
