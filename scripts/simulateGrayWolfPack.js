import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createEnemyPack} from '../services/enemyPack.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {simulationLoadout} from '../services/simulationLoadout.js';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';

const paths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/ranked-equipment.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/creatures/base-creature.json','data/creatures/world-reference-level1.json','data/creatures/world-variant-templates.json'];
const [skills,comparison,equipment,model,rotations,baseline,base,reference,world]=await Promise.all(paths.map(async p=>JSON.parse(await fs.readFile(p,'utf8'))));
const group=world.encounterGroups.find(g=>g.key==='gray-wolf-pack');
assert.ok(group.alwaysTogether&&group.engageTogether&&group.sameLevel);
const templates=new Map(world.templates.map(t=>[t.key,t]));
const enemies=group.members.flatMap(member=>Array.from({length:member.count},(_,i)=>{
 const variant=templates.get(member.variantKey),family=templates.get(variant.parentKey),growth=templates.get(family.parentKey);
 const {stats}=resolveCreatureTemplate(base,[reference,growth,family,variant],60);
 return {id:variant.key+'-'+(i+1),name:variant.name_de,leader:member.leader,stats,attackInterval:1/(1.3*stats.attackSpeed)};
}));
assert.equal(enemies.length,3);
const results=[];
for(const key of ['knight','healer','druid'])for(const focus of ['addsFirst','leaderFirst']){
 const pre=simulationLoadout({key,rank:4,comparison,equipment,skills,model});
 const pack=createEnemyPack(enemies,{playerLevel:60,focus});
 const settings=baseline.results.find(r=>r.key===key).config;
 const result=simulateClass({pre,skills,model,attackNumbers:rotations.classes.find(c=>c.key===key).rows.map(r=>r.nr),config:{...settings,duration:180,targetHealth:pack.health,cacheCombatStats:true,enableOwnBuffs:false,recordActionTimeline:true,specialAttributeAttackFactor:0,specialAttributeAttackFactors:{},encounter:{pack,playerLevel:60,enemyLevel:60,enemy:enemies[0].stats,enemyAttackInterval:enemies[0].attackInterval,healthRegenerationInCombat:false,selfHealNumbers:key==='healer'?[108,78]:[],healBelowFraction:.6}}});
 assert.equal(result.healthRegenerated,0);
 const actual=pack.hits.reduce((s,h)=>s+h.amount,0);
 assert.ok(Math.abs(actual-result.totalDamage)<1e-6);
 assert.ok(Math.abs(result.rawOutgoingDamage-result.totalDamage-result.preventedOutgoingDamage-(result.overkillDamage??0))<1e-6);
 assert.ok(pack.hits.every(h=>!pack.deaths.some(d=>d.id===h.target&&d.time<h.time)));
 results.push({key,name:pre.name,focus,outcome:result.targetDeathAt!==undefined?'win':result.deathAt!==undefined?'loss':'timeout',seconds:result.targetDeathAt??result.deathAt??result.durationSeconds,minimumHealthPercent:result.minimumHealth/pre.stats.maxHealth*100,finalHealth:result.finalHealth,maxHealth:pre.stats.maxHealth,finalMana:result.finalMana,manaSpent:result.manaSpent,manaRegenerated:result.manaRegenerated,healing:result.healing,incomingDamage:result.incomingDamage,enemyHits:result.enemyHits,totalDamage:result.totalDamage,enemyDeaths:pack.deaths,remainingEnemies:pack.members.map(e=>({id:e.id,health:e.health})),skills:result.skills,damageHits:pack.hits,warnings:result.warnings});
}
const assumptions=['Level 60, R4 +0, current passives and learned skill caps, no optional self/group buffs, random affixes, upgrades or gems. Fresh resources for each fight.',
 'One gray wolf pack leader plus two normal gray wolves, all level 60, simultaneous aggro. Each has separate HP, defenses and physical attacks. Dead wolves stop attacking. No monster skills.',
 'Two focus orders: companions first or leader first. Single-target overkill never spills to another enemy. All wolves remain in range; automatic retargeting happens on each damage impact, including lingering effects. This simplification does not model fixed DOT ownership or projectile flight.',
 'Explicit damaging area definitions hit all living eligible wolves up to stored target caps. A supportive field alone does not make its initial damage an AoE. Knight field 40 hits the pack; Healer 101 remains single-target. Druid 9 is limited to one enemy by the solo group-size rule.',
 'All wolves attack the player; Druid Nature Spirit contributes damage but cannot tank. No movement, random crit/dodge/block, control durations or armor debuffs. These are the same simplified combat omissions as the earlier solo probes.',
 'Attack frequency provisional: 1.3 × attackSpeed = 0.91 attacks/s per living wolf. First hit after a full interval; synchronized enemy hits precede player impacts on equal frames.',
 'No HP regeneration in combat; mana regeneration continues. Healer may use self-heal 108 and group heal 78 below 60% HP with real costs, casts and cooldowns. No potions.'];
const inputHashes=Object.fromEntries(await Promise.all([...paths,'services/enemyPack.js','services/timedDamageSimulation.js','scripts/simulateGrayWolfPack.js'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
await fs.writeFile('data/balancing/gray-wolf-pack-level60.json',JSON.stringify({status:'stationaryPackProbeNotUnreal',group,level:60,enemies,assumptions,inputHashes,results},null,2)+'\n');
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# Grauwolf-Rudelführer mit zwei Grauwölfen – Level 60\n\n'+assumptions.map(a=>'- '+a).join('\n')+'\n\n| Gegner | HP | P-Angriff | P-Abwehr | M-Abwehr |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const e of enemies)md+=`| ${e.name} | ${f(e.stats.maxHealth)} | ${f(e.stats.physicalAttack)} | ${f(e.stats.physicalDefense)} | ${f(e.stats.magicalDefense)} |\n`;
md+='\n| Klasse | Fokus | Ergebnis | Zeit | Niedrigste HP | End-HP | End-Mana | Heilung |\n| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of results)md+=`| ${r.name} | ${r.focus==='addsFirst'?'Begleiter zuerst':'Rudelführer zuerst'} | ${r.outcome==='win'?'Sieg':r.outcome==='loss'?'Tod':'Zeitlimit'} | ${f(r.seconds)} s | ${f(r.minimumHealthPercent)} % | ${f(r.finalHealth)} | ${f(r.finalMana)} | ${f(r.healing)} |\n`;
md+='\n## Getrennte Todeszeitpunkte\n\n';
for(const r of results)md+=`- ${r.name}, ${r.focus}: ${r.enemyDeaths.map(d=>d.id+' bei '+f(d.time)+' s').join('; ')}\n`;
await fs.writeFile('docs/balancing/gray-wolf-pack-level60.md',md);
console.log(JSON.stringify(results.map(({skills,damageHits,warnings,...r})=>r),null,2));
