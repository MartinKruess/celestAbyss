import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass,conversionDelta} from '../services/timedDamageSimulation.js';
import {permanentManaRegenMultiplier} from '../services/permanentManaRegeneration.js';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';
import {playerArmorReduction,monsterArmorReduction,defenseReferenceRules} from '../services/combatDefense.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const inputPaths=['data/balancing/class-comparison-level60.json','data/balancing/ranked-equipment.json','data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/creatures/base-creature.json','data/creatures/world-reference-level1.json','data/creatures/world-variant-templates.json'];
const [comparison,equipment,skills,model,rotations,previous,base,reference,world]=await Promise.all(inputPaths.map(read));
const sourceClass={knight:'Tank',healer:'Healer',druid:'Druid'};
const attributeLabels={'Stärke':'strength','Vita':'vitality','Wisdom':'wisdom','Intelligence':'intelligence','Dexterity':'dexterity','Agility':'agility','Faith':'faith','Vic':'victim','Ambush':'ambush'};
const flatLabels={'P.Ang':'physicalAttack','M.Ang':'magicalAttack','P.Deff':'physicalDefense','ATK Speed':'attackSpeed'};
const unmodeled=[];
function loadout(key){
 const pre=structuredClone(comparison.passiveRows.find(p=>p.key===key));
 const changedAttributes={};
 for(const [rank,sign]of [[6,-1],[4,1]]){
  const armor=equipment.armor.find(a=>a.name===sourceClass[key]&&a.rank===rank);
  for(const [stat,value]of Object.entries(armor.raw))pre.stats[stat]+=sign*value;
  for(const weaponName of pre.weapons){
   const weapon=equipment.weapons.find(w=>w.name===weaponName&&w.rank===rank);assert.ok(weapon);
   assert.ok(!weapon.comparisonBonuses?.length&&!weapon.comparisonEffects?.length);
   for(const bonus of weapon.raw){
    if(attributeLabels[bonus.label]){const key=attributeLabels[bonus.label];changedAttributes[key]=(changedAttributes[key]??0)+sign*bonus.value;}
    else if(flatLabels[bonus.label])pre.stats[flatLabels[bonus.label]]+=sign*bonus.value/(bonus.label==='ATK Speed'?100:1);
    else if(['Block','Krit Ch.'].includes(bonus.label)){const note=weaponName+': '+bonus.label+' not resolved into a random chance';if(!unmodeled.includes(note))unmodeled.push(note);}
    else throw Error('Unhandled weapon stat: '+bonus.label);
   }
  }
 }
 const manaFactor=permanentManaRegenMultiplier(skills,pre.includedSkills);
 for(const [attribute,amount]of Object.entries(changedAttributes)){
  pre.knownAttributes[attribute]=(pre.knownAttributes[attribute]??0)+amount;
  for(const [stat,value]of Object.entries(conversionDelta(model,key,attribute,amount)))pre.stats[stat]=(pre.stats[stat]??0)+value*(stat==='manaRegen'?manaFactor:1);
 }
 assert.ok(Object.values(pre.stats).every(Number.isFinite));
 return pre;
}
const requestedEnemies=process.argv.find(a=>a.startsWith('--enemies='))?.slice('--enemies='.length).split(',');
const outputStem=process.argv.find(a=>a.startsWith('--report='))?.slice('--report='.length)??(requestedEnemies?'world-creature-level60-sample':'world-creature-level60-duels');
assert.ok(/^[a-z0-9-]+$/.test(outputStem),'Report name must be a simple file stem');
const templates=new Map(world.templates.map(t=>[t.key,t]));
const enemies=world.templates.filter(t=>t.kind==='variant'&&(!requestedEnemies||requestedEnemies.includes(t.key))).map(variant=>{
 const family=templates.get(variant.parentKey),growth=templates.get(family.parentKey);
 const creature=resolveCreatureTemplate(base,[reference,growth,family,variant],60);
 return {key:variant.key,name:variant.name_de,creature};
});
assert.equal(enemies.length,requestedEnemies?.length??world.templates.filter(t=>t.kind==='variant').length);
const loadouts=Object.keys(sourceClass).map(loadout);
const results=[];
for(const pre of loadouts)for(const enemy of enemies){
 const attackNumbers=rotations.classes.find(c=>c.key===pre.key).rows.map(s=>s.nr);
 const settings=previous.results.find(r=>r.key===pre.key).config;
 const encounter={playerLevel:60,enemyLevel:60,enemy:enemy.creature.stats,enemyAttackInterval:1/(1.3*enemy.creature.stats.attackSpeed),selfHealNumbers:pre.key==='healer'?[108,78]:[],healBelowFraction:0.6};
 const config={...settings,duration:180,targetHealth:enemy.creature.stats.maxHealth,cacheCombatStats:true,recordActionTimeline:false,enableOwnBuffs:false,specialAttributeAttackFactor:0,specialAttributeAttackFactors:{},encounter:{...encounter,healthRegenerationInCombat:false}};
 const run=(actor)=>simulateClass({pre:actor,skills,model,attackNumbers,config});
 const result=run(pre);
 // Isolate whether currently very large flat player HP regeneration decides survival.
 const noHPRegenPre=structuredClone(pre);noHPRegenPre.stats.healthRegen=0;
 const noHPRegen=run(noHPRegenPre);
 for(const r of [result,noHPRegen]){
  assert.ok(Number.isFinite(r.finalHealth)&&Number.isFinite(r.finalMana));
  assert.ok(Math.abs(r.totalDamage-r.autoDamage-r.skillDamage-r.summonDamage)<1e-6);
  assert.ok(Math.abs(r.rawOutgoingDamage-r.totalDamage-r.preventedOutgoingDamage)<1e-6);
  assert.ok(!(r.targetDeathAt!==undefined&&r.deathAt!==undefined));
 }
 const summarize=r=>({outcome:r.targetDeathAt!==undefined?'win':r.deathAt!==undefined?'loss':'timeout',seconds:r.targetDeathAt??r.deathAt??r.durationSeconds,finalHealth:r.finalHealth,minimumHealth:r.minimumHealth,healthPercent:r.finalHealth/pre.stats.maxHealth*100,minimumHealthPercent:r.minimumHealth/pre.stats.maxHealth*100,finalMana:r.finalMana,manaSpent:r.manaSpent,healing:r.healing,healthRegenerated:r.healthRegenerated,enemyHits:r.enemyHits,incomingDamage:r.incomingDamage,skillDamage:r.skillDamage,autoDamage:r.autoDamage,summonDamage:r.summonDamage,remainingTargetHealth:r.remainingTargetHealth});
 results.push({classKey:pre.key,className:pre.name,enemyKey:enemy.key,enemyName:enemy.name,enemyStats:enemy.creature.stats,playerPhysicalReduction:playerArmorReduction(pre.stats.physicalDefense,60),enemyPhysicalReduction:monsterArmorReduction(enemy.creature.stats.physicalDefense,60),enemyMagicalReduction:monsterArmorReduction(enemy.creature.stats.magicalDefense,60),...summarize(result),withoutPlayerHPRegeneration:summarize(noHPRegen),usedSkills:result.skills.filter(s=>s.applications>0||s.damage>0),warnings:result.warnings});
}
const summary=loadouts.map(pre=>{
 const fights=results.filter(r=>r.classKey===pre.key);
 return {key:pre.key,name:pre.name,wins:fights.filter(r=>r.outcome==='win').length,losses:fights.filter(r=>r.outcome==='loss').length,timeouts:fights.filter(r=>r.outcome==='timeout').length,minFightSeconds:Math.min(...fights.map(r=>r.seconds)),maxFightSeconds:Math.max(...fights.map(r=>r.seconds)),lowestHealthPercent:Math.min(...fights.map(r=>r.minimumHealthPercent)),withoutHPRegenerationWins:fights.filter(r=>r.withoutPlayerHPRegeneration.outcome==='win').length};
});
const assumptions=['Deterministic stationary 1v1, player and monster level 60; current R4 five-piece class armor and R4 class weapons, +0, no affixes or gems. Fresh full health/mana/cooldowns for each fight.',
 'All existing permanent passives and maximum class learning caps retained. No optional self/group buffs. Existing attack-skill side effects and Druid Nature Spirit included; Nature Spirit cannot be attacked in this probe.',
 'Monster values are the EXISTING compound-growth draft, not the hypothetical replacement armor curve. Golem profiles, when selected, are provisional new level-60 targets; elemental skills and miniboss behavior are not included.',
 'Player armor uses shared divisors 3.268 physical / 3.248 magical and the 50% midpoint. Monster armor uses 25/6 and asymmetric variant A with 30% midpoint and 10% floor.',
 'Monsters use physical auto-attacks only, illustrative base rate 1.3 × inherited attackSpeed 0.7 = 0.91 hits/s. Their actual animation/base attack frequency is not defined. First hit after a full interval; enemy hits precede player impacts at equal simulation time.',
 'Player and monster HP regeneration are OFF in combat; mana regeneration remains every 3 seconds. The redundant no-HP-regen control is retained for comparison with old reports.',
 'Healer uses explicit self-heal 108 and group heal 78 including the caster below 60% HP, respecting cast times, costs and cooldowns. Ally-only healing 58/64/124 is not silently treated as self-healing. No group or potions.',
 'No random criticals, miss/dodge/block rolls, movement, range, kiting, enemy special attacks, aggro redirection, control duration or target armor debuffs/armor bypass. Physical and magical damage phases resolve against their respective defenses. These omissions can affect class comparisons.',
 'This is a simplified numerical duel, not an Unreal combat run or a complete class-balance verdict.'];
const inputHashes=Object.fromEntries(await Promise.all([...inputPaths,'services/timedDamageSimulation.js','services/combatDefense.js'].map(async path=>[path,createHash('sha256').update(await fs.readFile(path)).digest('hex')])));
const report={status:'deterministicStationaryDuelProbe',playerLevel:60,enemyLevel:60,rank:4,upgrade:0,defenseRules:defenseReferenceRules,assumptions,unmodeled,inputHashes,loadouts,summary,results};
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# Standkampfprobe: Ritter, Heiler und Druide gegen World-Monster\n\n'+assumptions.map(a=>'- '+a).join('\n')+'\n\n## Alle Varianten\n\nJe Zelle: Ergebnis, Kampfzeit, niedrigster HP-Stand. Der niedrigste Stand kann unter dem Stand am Kampfende liegen, weil zwischen Treffern regeneriert/geheilt wird.\n\n| Monster | Leben | Ritter | Heiler | Druide |\n| --- | ---: | --- | --- | --- |\n';
for(const enemy of enemies)md+=`| ${enemy.name} | ${enemy.creature.stats.maxHealth} | ${loadouts.map(pre=>{const r=results.find(r=>r.classKey===pre.key&&r.enemyKey===enemy.key);return (r.outcome==='win'?'Sieg':r.outcome==='loss'?'Tod':'Zeitlimit')+', '+f(r.seconds)+' s, '+f(r.minimumHealthPercent)+' % HP';}).join(' | ')} |\n`;
md+='\n## Spielerwerte und Regenerationskontrolle\n\n| Klasse | HP | P-Abwehr | M-Abwehr | HP-Reg / 2 s | MP-Reg / 3 s | Siege | Siege ohne HP-Regeneration |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const pre of loadouts){const s=summary.find(s=>s.key===pre.key);md+=`| ${pre.name} | ${f(pre.stats.maxHealth)} | ${f(pre.stats.physicalDefense)} | ${f(pre.stats.magicalDefense)} | ${f(pre.stats.healthRegen)} | ${f(pre.stats.manaRegen)} | ${s.wins}/${enemies.length} | ${s.withoutHPRegenerationWins}/${enemies.length} |\n`;}
await fs.writeFile(`data/balancing/${outputStem}.json`,JSON.stringify(report,null,2)+'\n');
await fs.writeFile(`docs/balancing/${outputStem}.md`,md);
console.log(JSON.stringify({fights:results.length,sensitivityRuns:results.length,summary,examples:results.filter(r=>['world-gray-wolf','world-frostclaw-wolf','world-redcrest-ripper'].includes(r.enemyKey)).map(r=>({className:r.className,enemyName:r.enemyName,outcome:r.outcome,seconds:r.seconds,minHP:r.minimumHealthPercent,healing:r.healing,regen:r.healthRegenerated,withoutRegen:r.withoutPlayerHPRegeneration.outcome}))},null,2));
