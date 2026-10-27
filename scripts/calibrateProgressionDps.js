import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {progressionReference,addReferenceAttributes,dpsSummary} from '../services/progressionDpsReference.js';
import {isGroupBuff,isSelfBuff} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {eligibleEquipmentAffixes} from '../services/equipmentAffixEligibility.js';
import {defenseReferenceRules,monsterArmorReduction} from '../services/combatDefense.js';

const paths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/ranked-equipment.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/level-one-character-reference.json','data/balancing/socket-reference-budgets.json','data/balancing/random-affix-reference-proposal.json','data/balancing/armor-defense-model.json'];
const texts=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [skills,comparison,equipment,model,rotations,levelOne,sockets,affixes,armorModel]=texts.map(JSON.parse);
const keys=[...new Set(comparison.passiveRows.map(r=>r.key))];assert.equal(keys.length,13);
const magic=['herbalist','healer','luminet','ritualist'],hybrid=['druid','shaman'];
const cohort=key=>['knight','healer'].includes(key)?'control':hybrid.includes(key)?'hybrid':magic.includes(key)?'magical':'physical';
const groupBuffs=skills.filter(isGroupBuff).filter(s=>s.nr!==150).map(s=>{
 const providers=comparison.passiveRows.filter(p=>p.learnedSkillNumbers?.includes(s.nr)).map(p=>skillForClass(s,p.key)).sort((a,b)=>b.maxSkillLv-a.maxSkillLv);
 return providers[0]?{...providers[0],effectiveSkillLevel:providers[0].maxSkillLv}:null;
}).filter(Boolean);
const stages=[{level:1,rank:1},{level:20,rank:2},{level:30,rank:2},{level:40,rank:3},{level:60,rank:4},{level:80,rank:5},{level:100,rank:6},{level:120,rank:6}];
const pool=armorModel.bonusSlotRules.randomSelection.pool;

function loadout(stage,key,primary,oneSlotChoice){
 const pre=progressionReference({...stage,key,comparison,equipment,skills,model,levelOne});
 const items=[],changes={};
 if(stage.level===1)return {pre,items,primary,oneSlotChoice};
 const a=affixes.rows.find(r=>r.rank===stage.rank),channel=primary==='intelligence'?'magical':'physical';
 const addAttr=(stat,value)=>changes[stat]=(changes[stat]??0)+value;
 // An explicit maximum-roll damage reference, not an exhaustive build optimizer.
 for(const [index,name]of pre.weapons.entries()){
  const half=['1H Axt','Mace','Dagger','Sword','Shield'].includes(name);
  const selections=a.randomSlotsPerItem===1?[oneSlotChoice]:['attack','skill',...(a.randomSlotsPerItem===3?['attribute']:[])];
  const item={id:`weapon-${index}`,name,category:'weapons',affixes:[],gems:[]};
  for(const choice of selections){
   const stat=choice==='attribute'?primary:choice==='attack'?channel+'Attack':channel+'SkillDamageBonus';
   const available=eligibleEquipmentAffixes(pool,{category:'weapons',rank:stage.rank,weaponType:name},item.affixes.map(x=>x.stat));
   assert.ok(available.some(e=>e.stat===stat),'Illegal affix '+stat);
   let value=(choice==='attribute'?a.attributeMaximum:choice==='attack'?a.weaponFullReferenceAttackMaximum:a.weaponFullReferenceSkillDamageMaximum)*(half?.5:1);
   // Direct attack and basic attributes roll whole integers after weapon scaling.
   if(choice!=='skill')value=Math.floor(value);
   item.affixes.push({stat,value});
   if(choice==='attribute')addAttr(stat,value);
   else pre.stats[stat]=(pre.stats[stat]??0)+value*(choice==='attack'&&index===1&&['gladiator','villian','shaman'].includes(key)?.9:1);
  }
  items.push(item);
 }
 for(const id of ['chest','pants','gloves','helmet','boots']){
  const selected=[primary,'wisdom','vitality'].slice(0,a.randomSlotsPerItem);
  const item={id,category:'armor',affixes:[],gems:[]};
  for(const stat of selected){
   assert.ok(eligibleEquipmentAffixes(pool,{category:'armor',equipmentSlot:id,rank:stage.rank},item.affixes.map(x=>x.stat)).some(e=>e.stat===stat));
   item.affixes.push({stat,value:a.attributeMaximum});addAttr(stat,a.attributeMaximum);
  }
  items.push(item);
 }
 const shape=pre.weapons.includes('Shield')?'swordAndShield':pre.weapons.length===2?'dualWield':'twoHandWeapon';
 const budget=stage.level===30?sockets.level30:stage.level>=40?sockets.rows.find(r=>r.level===Math.min(stage.level,100)&&r.loadout===shape&&r.definedSmithingAdditionsIncluded):null;
 if(budget){
  for(const entry of budget.items){
   const item=stage.level===30?items.find(i=>i.category===(entry.itemGroup==='weapon'?'weapons':'armor')):entry.id.startsWith('oneHandWeapon')?items.filter(i=>i.category==='weapons')[entry.id.endsWith('-6')?1:0]:entry.id.startsWith('twoHandWeapon')?items.find(i=>i.category==='weapons'):entry.id.startsWith('shield')?items.find(i=>i.name==='Shield'):items.find(i=>i.id===entry.id.split('-')[0]);
   assert.ok(item,'Missing socket item '+entry.id);
   item.socketCapacity=entry.slotCount;
   const order=hybrid.includes(key)?[primary,primary==='strength'?'intelligence':'strength','wisdom','vitality']:primary==='strength'?[primary,'vitality','wisdom','agility']:[primary,'wisdom','vitality','agility'];
   for(let n=0;n<entry.slotCount;n++){
    const stat=order.find(s=>item.gems.filter(g=>g.stat===s).length<entry.sameTypeLimit);assert.ok(stat);
    item.gems.push({stat,value:budget.bonusPerStone});addAttr(stat,budget.bonusPerStone);
   }
   assert.equal(item.gems.length,entry.slotCount);
   for(const stat of order)assert.ok(item.gems.filter(g=>g.stat===stat).length<=entry.sameTypeLimit);
  }
 }
 addReferenceAttributes(pre,changes,skills,model);
 return {pre,items,primary,oneSlotChoice};
}

function simulate(stage,build,ignoreTargetArmor,{targetHealth=1e12,duration=600}={}){
 const pre=build.pre,starter=stage.level===1;
 const own=starter?[]:(pre.learnedSkillNumbers??[]).filter(n=>isSelfBuff(skillForClass(skills.find(s=>s.nr===n),pre.key)));
 const groups=stage.level>=60?groupBuffs:[];
 const config={duration,targetHealth,cacheCombatStats:true,maintainEnergyOfWrath:!starter,manaRegenInterval:3,enableOwnBuffs:!starter,prebuffOwnBuffs:!starter,preparedBuffNumbers:[...own,...groups.map(s=>s.nr)],ownBuffNumbers:[...own,...groups.map(s=>s.nr)],permanentBuffNumbers:groups.map(s=>s.nr),externalBuffSkills:groups,buffDurationOverrides:{242:120,42:30},specialAttributeAttackFactor:0,specialAttributeAttackFactors:{},encounter:{playerLevel:stage.level,enemyLevel:stage.level,enemyAttackInterval:1,ignoreTargetArmor,healthRegenerationInCombat:false,enemy:{physicalAttack:0,physicalDefense:stage.level*defenseReferenceRules.monsterDivisor,magicalDefense:stage.level*defenseReferenceRules.monsterDivisor}}};
 return simulateClass({pre,skills:starter?[]:skills,model,attackNumbers:starter?[]:rotations.classes.find(r=>r.key===pre.key).rows.map(r=>r.nr),config});
}
const compact=r=>({dps:r.totalDamage/600,activeDps:r.dps,durationSeconds:r.durationSeconds,totalDamage:r.totalDamage,rawOutgoingDamage:r.rawOutgoingDamage,preventedOutgoingDamage:r.preventedOutgoingDamage,healthRegenerated:r.healthRegenerated,healthCosts:r.healthCosts,healing:r.healing,initialHealth:r.initialHealth,finalHealth:r.finalHealth,deathAt:r.deathAt??null,initialMana:r.initialMana,finalMana:r.finalMana,manaSpent:r.manaSpent,manaRegenerated:r.manaRegenerated,firstManaShortageAt:r.firstManaShortageAt??null,manaBlockedSeconds:r.manaBlockedSeconds,warnings:r.warnings,minutes:r.minutes,skills:r.skills});
const reports=[];
for(const stage of stages){
 const actors=[];
 for(const key of keys){
  const candidates=[];
  const primaries=hybrid.includes(key)?['strength','intelligence']:[magic.includes(key)?'intelligence':'strength'];
  const choices=stage.rank===2||stage.rank===3?['attack','skill']:['attack'];
  for(const primary of primaries)for(const choice of choices){const build=loadout(stage,key,primary,choice);candidates.push({build,result:simulate(stage,build,true)});}
  candidates.sort((a,b)=>b.result.totalDamage-a.result.totalDamage);
  const chosen=candidates[0],armored=simulate(stage,chosen.build,false);
  assert.equal(chosen.result.healthRegenerated,0);assert.equal(armored.healthRegenerated,0);
  const prevented=armored.preventedOutgoingDamage/armored.rawOutgoingDamage;
  assert.ok(Math.abs(prevented-.3)<1e-8,'Every armor-affected damage event must lose 30%');
  actors.push({key,name:chosen.build.pre.name,cohort:cohort(key),build:chosen.build,alternatives:candidates.map(c=>({primary:c.build.primary,oneSlotChoice:c.build.oneSlotChoice,dps:c.result.totalDamage/600})),raw:compact(chosen.result),armored:compact(armored),armorReductionObserved:prevented,liveDpsReduction:1-armored.totalDamage/chosen.result.totalDamage});
  console.log(JSON.stringify({progress:{level:stage.level,class:key}}));
 }
 const summarize=(field,group)=>dpsSummary(actors.filter(a=>a.cohort!=='control'&&(!group||a.cohort===group)).map(a=>a[field].dps));
 const raw=summarize('raw'),armored=summarize('armored');
 const hp=armored.reference*5;
 for(const actor of actors){
  const probe=simulate(stage,actor.build,false,{targetHealth:hp,duration:60});
  actor.fiveSecondHpCheck={health:hp,targetDeathAt:probe.targetDeathAt??null,targetRemainingHealth:probe.remainingTargetHealth,damage:probe.totalDamage,playerDeathAt:probe.deathAt??null,averageDpsPredictionSeconds:hp/actor.armored.dps};
 }
 const report={...stage,status:stage.level===20||stage.level===30?'maxSkillUpperBoundNotLegalProgressionClaim':stage.level===1?'starterAutoAttackReference':stage.level===120?'R6EquipmentExtensionNotR7':'provisionalMaximumRollReference',monsterDefense:stage.level*defenseReferenceRules.monsterDivisor,raw,armored,hpForFiveSeconds:hp,idealFixedRotationArmoredDps:raw.reference*.7,cohorts:Object.fromEntries(['physical','magical','hybrid'].map(c=>[c,{raw:summarize('raw',c),armored:summarize('armored',c)}])),actors};
 report.sustainedCoverage={validForUninterruptedBossSizing:actors.every(a=>a.raw.deathAt===null&&a.armored.deathAt===null),incompleteActors:actors.filter(a=>a.raw.deathAt!==null||a.armored.deathAt!==null).map(a=>({key:a.key,rawDeathAt:a.raw.deathAt,armoredDeathAt:a.armored.deathAt}))};
 reports.push(report);
 console.log(JSON.stringify({level:stage.level,rank:stage.rank,raw:raw.reference,armored:armored.reference,hp,actualKillTimes:actors.map(a=>({key:a.key,seconds:a.fiveSecondHpCheck.targetDeathAt})),resourceDeaths:actors.filter(a=>a.raw.deathAt!==null||a.armored.deathAt!==null).map(a=>a.key)}));
}
const notes=[
 'Analysis only. No monster values, database records or active growth curves changed.',
 'Stages: 1/R1,20/R2,30/R2 tutorial,40/R3,60/R4,80/R5,100/R6;120 reuses R6 equipment and R6 stones because no R7 equipment exists here.',
 'Level 1: one starting weapon, no armor, skills, passives, affixes or sockets. Auto-attacks only. Levels 20/30 are explicitly full-skill upper-bound probes, not a claim those skills can be acquired then. No skill acquisition schedule is invented or audited.',
 'Level 40 onward assumes current maximum class skill caps and permanent passives. Levels 40+ own buffs, levels60+ all public player buffs at highest provider caps. For the upper bounds20/30 own buffs also included. External buffs start prepared and persist throughout this isolated test. Own buffs retain costs, durations and upkeep; missing duration242 provisionally120s,42=30s.',
 '600 seconds, no target attacks, no passive combat HP regeneration, normal mana regeneration every3 seconds. Class healing and damage-linked healing remain active; no outside healer. Normal target permits stun-dependent combinations. Boss immunity requires a separate boss profile.',
 'DPS in aggregation is damage divided by the scheduled600 seconds, including zero output after death. activeDps separately reports damage per actual simulated living duration. A death marks sustainedCoverage invalid for uninterrupted boss sizing; do not treat the resulting blend as a validated boss-DPS baseline.',
 'Character progression adjusts +1 Vitality/Wisdom/Strength/Intelligence per level; current rank weapons/armor replace R6 comparison gear, including offhand direct-attack efficiency. Derived Knight/Rogue passive conversions retained; future locked Ambush attack contribution removed.',
 'Explicit legal maximum-roll reference: armor primary offensive attribute, then Wisdom, then Vitality as rank slots allow. Weapon direct attack and skill damage as slots allow, then matching offensive attribute. For one-affix ranks compare attack vs skill damage; hybrid STR/INT reference alternatives compared. This is a small declared candidate set, not an exhaustive maximum-DPS optimizer. No forced critical affix.',
 'Sockets: fill legal available per-item capacity using matching offensive attribute first; hybrids use the other offensive attribute next, physical classes Vitality then Wisdom, mages Wisdom then Vitality. Per-item duplicate caps and one-slot exception enforced. Includes only smithing extras with defined equipment levels. Level30 exactly one weapon and one armor tutorial socket, +2 per stone.',
 'No invented upgrade bonuses, jewelry, advancement, regular pets or future skill enhancements. Max-affix ranges for attack speed and new special stone values remain undefined and are not fabricated.',
 'Reference=(arithmetic mean DPS+median DPS)/2 over eleven damage classes; Healer/Knight retained as controls. Physical, magical and hybrid cohorts also reported. No character receives aggregate P+M attack; full rotations are simulated.',
 'Monster PDEF=MDEF=playerLevel*(25/6) gives30% reduction per damage event. True raw baseline uses explicit armor bypass, since zero armor normally still reduces10%. Live runs may change rotation/resource healing and therefore differ from0.7 times raw total.',
 'Five-second HP=armored blended DPS*5 is a sustained-DPS planning value. A fresh fight from full resources/all cooldowns is separately simulated to expose burst differences; it need not last5seconds. No conclusion that every class is within a narrow band is assumed.'
];
const inputHashes=Object.fromEntries(paths.map((p,i)=>[p,createHash('sha256').update(texts[i]).digest('hex')]));
for(const p of ['services/progressionDpsReference.js','services/timedDamageSimulation.js','scripts/calibrateProgressionDps.js'])inputHashes[p]=createHash('sha256').update(await fs.readFile(p)).digest('hex');
await fs.writeFile('data/balancing/progression-dps-calibration.json',JSON.stringify({status:'provisionalSimulationNotFinalWorldBalance',notes,inputHashes,defenseRules:defenseReferenceRules,externalBuffProviders:groupBuffs.map(s=>({nr:s.nr,level:s.maxSkillLv})),stages:reports},null,2)+'\n');
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# DPS-Kalibrierung über die Rangstufen\n\n'+notes.map(n=>'- '+n).join('\n')+'\n\n| Level/Rang | Mittel DPS roh | Median roh | Referenz roh | Referenz mit Abwehr | PDEF=MDEF | HP für5s aus Dauer-DPS |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of reports)md+=`| ${r.level}/R${r.rank}${[20,30].includes(r.level)?' (Skill-Obergrenze)':''} | ${f(r.raw.mean)} | ${f(r.raw.median)} | ${f(r.raw.reference)} | ${f(r.armored.reference)} | ${f(r.monsterDefense)} | ${f(r.hpForFiveSeconds)} |\n`;
for(const r of reports){
 md+=`\n## Level${r.level},R${r.rank}\n\nStatus: ${r.status}. Jeder einzelne Treffer verliert${f(monsterArmorReduction(r.monsterDefense,r.level)*100)}%.\n\n| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |\n| --- | --- | ---: | ---: | ---: | ---: | ---: |\n`;
 for(const a of r.actors)md+=`| ${a.name} | ${a.cohort} | ${f(a.raw.dps)} | ${f(a.armored.dps)} | ${f(a.liveDpsReduction*100)}% | ${a.armored.firstManaShortageAt===null?'keines':f(a.armored.firstManaShortageAt)+'s'} | ${a.fiveSecondHpCheck.targetDeathAt===null?'>60s':f(a.fiveSecondHpCheck.targetDeathAt)+'s'} |\n`;
 md+='\n| Schadensgruppe | Referenz roh | Referenz mit Abwehr |\n| --- | ---: | ---: |\n';
 for(const [name,c]of Object.entries(r.cohorts))md+=`| ${name} | ${f(c.raw.reference)} | ${f(c.armored.reference)} |\n`;
}
await fs.writeFile('docs/balancing/progression-dps-calibration.md',md);
