import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {dpsSummary} from '../services/progressionDpsReference.js';
import {isSelfBuff} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const sourcePath='data/balancing/progression-dps-calibration.json';
const [source,skills,model,rotations]=await Promise.all([sourcePath,'data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json'].map(read));
for(const path of ['data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','services/timedDamageSimulation.js'])assert.equal(createHash('sha256').update(await fs.readFile(path)).digest('hex'),source.inputHashes[path],'Regenerate source after changing '+path);
const providers=source.externalBuffProviders.map(p=>({...skills.find(s=>s.nr===p.nr),maxSkillLv:p.level,effectiveSkillLevel:p.level}));
function run(stage,actor,{duration=5,targetHealth=1e12}={}){
 const pre=actor.build.pre,starter=stage.level===1;
 const own=starter?[]:(pre.learnedSkillNumbers??[]).filter(n=>isSelfBuff(skillForClass(skills.find(s=>s.nr===n),pre.key)));
 const groups=stage.level>=60?providers:[];
 return simulateClass({pre,skills:starter?[]:skills,model,attackNumbers:starter?[]:rotations.classes.find(r=>r.key===pre.key).rows.map(r=>r.nr),config:{duration,targetHealth,cacheCombatStats:true,maintainEnergyOfWrath:!starter,manaRegenInterval:3,enableOwnBuffs:!starter,prebuffOwnBuffs:!starter,preparedBuffNumbers:[...own,...groups.map(s=>s.nr)],ownBuffNumbers:[...own,...groups.map(s=>s.nr)],permanentBuffNumbers:groups.map(s=>s.nr),externalBuffSkills:groups,buffDurationOverrides:{242:120,42:30},specialAttributeAttackFactor:0,specialAttributeAttackFactors:{},encounter:{playerLevel:stage.level,enemyLevel:stage.level,enemyAttackInterval:1,ignoreTargetArmor:false,healthRegenerationInCombat:false,enemy:{physicalAttack:0,physicalDefense:stage.monsterDefense,magicalDefense:stage.monsterDefense}}}});
}
const stages=[];
for(const stage of source.stages){
 const actors=stage.actors.map(a=>{
  const result=run(stage,a);
  assert.equal(result.healthRegenerated,0);
  assert.ok(Math.abs(result.totalDamage/result.rawOutgoingDamage-.7)<1e-8);
  return {key:a.key,name:a.name,cohort:a.cohort,firstFiveSecondDamage:result.totalDamage,sustainedHpKillTime:a.fiveSecondHpCheck.targetDeathAt,sustainedRawDeathAt:a.raw.deathAt,sustainedArmoredDeathAt:a.armored.deathAt};
 });
 const summary=dpsSummary(actors.filter(a=>a.cohort!=='control').map(a=>a.firstFiveSecondDamage));
 const health=summary.reference;
 for(const actor of actors){
  const result=run(stage,stage.actors.find(a=>a.key===actor.key),{duration:60,targetHealth:health});
  actor.freshHpKillTime=result.targetDeathAt??null;
  actor.remainingTargetHealth=result.remainingTargetHealth;
 }
 const times=actors.filter(a=>a.cohort!=='control').map(a=>a.freshHpKillTime);
 const report={level:stage.level,rank:stage.rank,status:stage.status,monsterDefense:stage.monsterDefense,sustainedReferenceDps:stage.armored.reference,sustainedFiveSecondHp:stage.hpForFiveSeconds,firstFiveSecondDamage:summary,freshFiveSecondHp:health,actualFreshFightTimes:times.every(t=>t!==null)?dpsSummary(times):null,actors};
 stages.push(report);console.log(JSON.stringify({level:stage.level,sustainedHp:stage.hpForFiveSeconds,freshHp:health,freshKillTimeSummary:report.actualFreshFightTimes}));
}
const report={status:'shortFightDiagnosticNotAppliedToMonsters',sourcePath,sourceSha256:createHash('sha256').update(await fs.readFile(sourcePath)).digest('hex'),notes:['Same builds, costs, class caps, buff providers and armor as the600-second calibration. Normal, non-attacking dummy; no passive HP regeneration or outside healing.','Five-second HP reference=(mean damage in the first5seconds+median damage in the first5seconds)/2 across eleven damage classes. This is separate from sustained DPS times5.','A fresh fight starts with full resources and prepared buffs. All cooldowns start in the same state as in the source calibration; skill hits at the5-second boundary count.','One common HP cannot enforce a narrow kill-time band for all classes. Report actual kill times and controls instead of assuming it.','The20/30 full-skill upper bounds are not progression baselines. Level120 reuses R6 gear/stones. Undefined item upgrades and other future bonuses remain excluded.'],stages};
await fs.writeFile('data/balancing/progression-short-fight-check.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# Gegenprobe: Dauer-DPS und frische Fünf-Sekunden-Kämpfe\n\n'+report.notes.map(n=>'- '+n).join('\n')+'\n\n| Level/Rang | HP aus600s-DPS ×5 | HP aus ersten5s | Frische Kampfzeit min/max (Schadensklassen) | Mittel/Median der Kampfzeit |\n| --- | ---: | ---: | ---: | ---: |\n';
for(const r of stages)md+=`| ${r.level}/R${r.rank} | ${f(r.sustainedFiveSecondHp)} | ${f(r.freshFiveSecondHp)} | ${r.actualFreshFightTimes?f(r.actualFreshFightTimes.min)+'–'+f(r.actualFreshFightTimes.max)+'s':'>60s bei mindestens einer Klasse'} | ${r.actualFreshFightTimes?f(r.actualFreshFightTimes.mean)+' / '+f(r.actualFreshFightTimes.median)+'s':'offen'} |\n`;
for(const r of stages){
 md+=`\n## Level${r.level}/R${r.rank}\n\n| Klasse | Schaden in ersten5s | Kampf mit Dauer-DPS-HP | Kampf mit Kurzzeit-HP | Tod im600s-Test roh / Abwehr |\n| --- | ---: | ---: | ---: | ---: |\n`;
 for(const a of r.actors)md+=`| ${a.name}${a.cohort==='control'?' (Kontrolle)':''} | ${f(a.firstFiveSecondDamage)} | ${a.sustainedHpKillTime===null?'>60':f(a.sustainedHpKillTime)}s | ${a.freshHpKillTime===null?'>60':f(a.freshHpKillTime)}s | ${a.sustainedRawDeathAt===null?'kein Tod':f(a.sustainedRawDeathAt)+'s'} / ${a.sustainedArmoredDeathAt===null?'kein Tod':f(a.sustainedArmoredDeathAt)+'s'} |\n`;
}
await fs.writeFile('docs/balancing/progression-short-fight-check.md',md);
