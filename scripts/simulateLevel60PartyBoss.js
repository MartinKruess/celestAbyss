import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClassFrames} from '../services/timedDamageSimulation.js';
import {simulationLoadout} from '../services/simulationLoadout.js';
import {isGroupBuff,isSelfBuff} from '../services/skillClassification.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';
import {playerArmorReduction,monsterArmorReduction,defenseReferenceRules} from '../services/combatDefense.js';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const paths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/ranked-equipment.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json'];
const [skills,comparison,equipment,model,rotations,baseline]=await Promise.all(paths.map(read));
const classKeys=['ritualist','knight','healer'];
const get=nr=>skills.find(s=>s.nr===nr);
const providers=skills.filter(isGroupBuff).map(s=>{
 const candidates=comparison.passiveRows.filter(p=>p.learnedSkillNumbers?.includes(s.nr)).map(p=>({key:p.key,skill:skillForClass(s,p.key)})).sort((a,b)=>b.skill.maxSkillLv-a.skill.maxSkillLv);
 const p=candidates[0];return p?{nr:s.nr,name:s.skillName_de,providerKey:p.key,level:p.skill.maxSkillLv,skill:{...p.skill,effectiveSkillLevel:p.skill.maxSkillLv}}:null;
}).filter(Boolean);
const groups=providers.filter(p=>p.nr!==150); // 150 targets companions rather than player characters.
const loadouts=classKeys.map(key=>{const pre=simulationLoadout({key,rank:4,comparison,equipment,skills,model});pre.name={ritualist:'Ritualist',knight:'Ritter',healer:'Heiler'}[key];return pre;});
const value=(effect,skill)=>curveValue(effect.valueScaling,skill.maxSkillLv)??effect.value??0;

function run({armorDebuffs=true,bossAttackInterval=1,healingThreatFactor=0.5}={}){
 const boss={level:60,maxHealth:100000,physicalAttack:1000,physicalDefense:400,magicalDefense:400};
 const members=new Map(),finished=new Map(),damage=[],heals=[],incoming=[],debuffLog=[],timeline=[],targetChanges=[],threatLog=[],rejectedControls=[];
 const totals=Object.fromEntries(classKeys.map(key=>[key,{damage:0,healing:0,incoming:0,minimumHealth:Infinity,minimumHealthPercent:100,minimumMana:Infinity,threat:0,damageThreat:0,flatThreat:0,healingThreat:0}]));
 const activeDebuffs=new Map();
 const sharedBuffs=new Map();
 const damageThreatMultiplier=key=>members.get(key)?.frame.state.buffs.filter(b=>b.until>party.time+1e-8).flatMap(b=>{const s=skillForClass(get(b.nr),key);return(s.effects??[]).filter(e=>e.type==='threatMultiplier'&&e.threatBasis==='damageDealt').map(e=>value(e,s));}).reduce((a,b)=>a*b,1)??1;
 const party={time:0,revision:0,targetHealth:boss.maxHealth,stopped:false,healingNumbers:{healer:[64,124,58,78,108,207]},supportNumbers:{ritualist:armorDebuffs?[100]:[]},
  maxHealth(key){return members.get(key).frame.stats().maxHealth;},
  statBonus(key,stat,time){return [...sharedBuffs.values()].filter(b=>b.stat===stat&&b.until>time+1e-8).reduce((sum,b)=>sum+b.amount,0);},
  skillActivated({key,skill,time}){
   for(const effect of skill.effects??[])if(effect.type==='threatGain'&&['enemy','enemiesInArea'].includes(effect.target)){
    const amount=value(effect,skill);totals[key].flatThreat+=amount;totals[key].threat+=amount;threatLog.push({time,key,nr:skill.nr,kind:'flat',amount});
   }
  },
  damage(hit){
   const effective=Math.min(Math.max(0,party.targetHealth),hit.amount);party.targetHealth=Math.max(0,party.targetHealth-hit.amount);totals[hit.key].damage+=effective;
   const threat=effective*damageThreatMultiplier(hit.key);totals[hit.key].damageThreat+=threat;totals[hit.key].threat+=threat;
   if(effective>0)damage.push({...hit,effective,threat});
  },
  heal({sourceKey,targetKey,nr,amount,time}){
   const target=members.get(targetKey);if(!target||target.frame.state.health<=0)return 0;
   const accepted=Math.max(0,Math.min(amount,target.frame.stats().maxHealth-target.frame.state.health));
   target.frame.state.health+=accepted;totals[sourceKey].healing+=accepted;
   const threat=accepted*healingThreatFactor;totals[sourceKey].healingThreat+=threat;totals[sourceKey].threat+=threat;
   if(accepted>0)heals.push({sourceKey,targetKey,nr,requested:amount,accepted,time});
   return accepted;
  },
  healingTarget(sourceKey){
   if(sourceKey!=='healer')return null;
   const patients=[...members.entries()].filter(([,m])=>m.frame.state.health>0).map(([key,m])=>({key,fraction:m.frame.state.health/m.frame.stats().maxHealth})).filter(p=>p.fraction<0.65).sort((a,b)=>a.fraction-b.fraction);
   return patients[0]?.key??null;
  },
  healRecipients(sourceKey,targetKey,effect){
   const keys=effect.target==='self'?[sourceKey]:['ownGroup','alliesInArea'].includes(effect.target)?classKeys:[targetKey];
   return keys.filter(key=>members.has(key)&&members.get(key).frame.state.health>0&&(!effect.excludesCaster||key!==sourceKey));
  },
  debuffActive(nr,time){return [...activeDebuffs.values()].some(e=>e.nr===nr&&e.until>time+1e-8);},
  applyDebuffs({key,skill,time}){
   const deniedControls=(skill.effects??[]).filter(e=>e.type==='control'&&e.controlKind==='stun').map(e=>e.key);
   for(const control of deniedControls)rejectedControls.push({time,key,nr:skill.nr,control});
   for(const [i,effect]of (skill.effects??[]).entries()){
    if(effect.type==='statModifier'&&effect.target==='alliesInArea'&&effect.stat==='matk'&&effect.unit==='flat'){
     const duration=curveValue(effect.durationScaling,skill.maxSkillLv)??effect.durationSeconds??0;
     sharedBuffs.set(skill.nr+':'+(effect.key??i),{stat:'magicalAttack',amount:value(effect,skill),until:time+duration});party.revision++;
    }
    if(!armorDebuffs||effect.endWith&&deniedControls.includes(effect.endWith))continue;
    if(effect.type!=='statModifier'||!['enemy','enemiesInArea'].includes(effect.target)||!['pdef','mdef'].includes(effect.stat)||effect.unit!=='fraction')continue;
    const duration=curveValue(effect.durationScaling,skill.maxSkillLv)??effect.durationSeconds??0;
    const id=skill.nr+':'+(effect.key??i),modifier=value(effect,skill);
    activeDebuffs.set(id,{nr:skill.nr,stat:effect.stat,multiplier:Math.max(0,1+modifier),until:time+duration});
    debuffLog.push({key,nr:skill.nr,name:skill.skillName_de,stat:effect.stat,modifier,time,until:time+duration});
   }
  }
 };
 const defense=stat=>boss[stat]*[...activeDebuffs.values()].filter(e=>e.stat===(stat==='physicalDefense'?'pdef':'mdef')&&e.until>party.time+1e-8).reduce((product,e)=>product*e.multiplier,1);
 const targetStats={physicalAttack:boss.physicalAttack,get physicalDefense(){return defense('physicalDefense');},get magicalDefense(){return defense('magicalDefense');}};
 for(const pre of loadouts){
  const own=skills.filter(s=>pre.learnedSkillNumbers.includes(s.nr)&&isSelfBuff(s)&&![152,167,169].includes(s.nr)).map(s=>s.nr);
  if(pre.key==='knight')own.push(42); // Explicit self damage-reduction skill, outside the legacy selfBuff classification.
  const prepared=[...new Set([...groups.map(p=>p.nr),...own])];
  const config={...baseline.results.find(r=>r.key===pre.key).config,duration:120,targetHealth:boss.maxHealth,cacheCombatStats:true,recordActionTimeline:true,
   enableOwnBuffs:true,prebuffOwnBuffs:true,preparedBuffNumbers:prepared,ownBuffNumbers:prepared,permanentBuffNumbers:groups.map(p=>p.nr),externalBuffSkills:groups.map(p=>p.skill),
   buffDurationOverrides:{242:120,42:30},specialAttributeAttackFactor:0,specialAttributeAttackFactors:{},party,
   encounter:{playerLevel:60,enemyLevel:60,enemyAttackInterval:bossAttackInterval,enemy:targetStats,healthRegenerationInCombat:false,healthRegenOutOfCombatDelaySeconds:3,controlImmunities:['stun']}};
  const iterator=simulateClassFrames({pre,skills,model,attackNumbers:rotations.classes.find(r=>r.key===pre.key).rows.map(r=>r.nr),config});
  const first=iterator.next();assert.ok(!first.done);members.set(pre.key,{iterator,frame:first.value,prepared});
 }
 const initial=Object.fromEntries([...members].map(([key,m])=>[key,{stats:m.frame.stats(),health:m.frame.state.health,mana:m.frame.state.mana,preparedBuffNumbers:m.prepared}]));
 let nextBossHit=bossAttackInterval,outcome='timeout',deathAt=null,currentTarget='knight';
 for(let tick=0;tick<=12000;tick++){
  party.time=tick/100;
  for(const [key,m]of members){const health=m.frame.state.health;totals[key].minimumHealth=Math.min(totals[key].minimumHealth,health);totals[key].minimumHealthPercent=Math.min(totals[key].minimumHealthPercent,health/m.frame.stats().maxHealth*100);totals[key].minimumMana=Math.min(totals[key].minimumMana,m.frame.state.mana);}
  if(party.targetHealth<=0){outcome='win';deathAt=damage.at(-1)?.time??party.time;break;}
  const alive=classKeys.filter(key=>members.get(key).frame.state.health>1e-8);
  if(!alive.length){outcome='wipe';deathAt=party.time;break;}
  if(party.time+1e-8>=nextBossHit){
   const key=[...alive].sort((a,b)=>totals[b].threat-totals[a].threat||(a===currentTarget?-1:b===currentTarget?1:0))[0],m=members.get(key),stats=m.frame.stats();
   if(key!==currentTarget){targetChanges.push({time:party.time,from:currentTarget,to:key,threat:Object.fromEntries(classKeys.map(k=>[k,totals[k].threat]))});currentTarget=key;}
   const armorReduction=playerArmorReduction(stats.physicalDefense,60);
   const extraFactor=m.frame.state.buffs.filter(b=>b.until>party.time+1e-8).flatMap(b=>{const s=skillForClass(get(b.nr),key);return(s.effects??[]).filter(e=>e.type==='damageReduction'&&e.target==='self').map(e=>Math.max(0,1-value(e,s)));}).reduce((a,b)=>a*b,1);
   const amount=boss.physicalAttack*(1-armorReduction)*extraFactor;
   m.frame.state.health=Math.max(0,m.frame.state.health-amount);if(m.frame.state.health<1e-8)m.frame.state.health=0;
   totals[key].incoming+=amount;totals[key].minimumHealth=Math.min(totals[key].minimumHealth,m.frame.state.health);totals[key].minimumHealthPercent=Math.min(totals[key].minimumHealthPercent,m.frame.state.health/stats.maxHealth*100);
   incoming.push({time:party.time,key,amount,armorReduction,extraFactor,remainingHealth:m.frame.state.health});nextBossHit+=bossAttackInterval;
  }
  if(tick%100===0)timeline.push({time:party.time,bossHealth:party.targetHealth,target:currentTarget,pdef:defense('physicalDefense'),mdef:defense('magicalDefense'),party:classKeys.map(key=>({key,health:members.get(key).frame.state.health,mana:members.get(key).frame.state.mana,threat:totals[key].threat}))});
  for(const [key,m]of members){
   if(finished.has(key))continue;
   const next=m.iterator.next();
   if(next.done)finished.set(key,next.value);else m.frame=next.value;
  }
 }
 party.stopped=true;
 for(const [key,m]of members)if(!finished.has(key)){const next=m.iterator.next();assert.ok(next.done);finished.set(key,next.value);}
 const seconds=deathAt??120;
 assert.ok(Math.abs(Object.values(totals).reduce((sum,t)=>sum+t.damage,0)-(boss.maxHealth-party.targetHealth))<1e-6);
 const actors=classKeys.map(key=>{const result=finished.get(key),m=members.get(key);assert.equal(result.healthRegenerated,0);return {key,name:loadouts.find(p=>p.key===key).name,...totals[key],deathAt:result.deathAt??null,finalHealth:m.frame.state.health,finalMaxHealth:m.frame.stats().maxHealth,initialMana:initial[key].mana,finalMana:m.frame.state.mana,finalMaxMana:m.frame.stats().maxMana,manaSpent:result.manaSpent,manaRegenerated:result.manaRegenerated,firstManaShortageAt:result.firstManaShortageAt??null,manaBlockedSeconds:result.manaBlockedSeconds,healthCosts:result.healthCosts,healthRegenerated:result.healthRegenerated,overhealing:result.overhealing,skills:result.skills,actions:result.actionTimeline,warnings:result.warnings,buffPeriods:result.buffPeriods};});
 return {outcome,seconds,bossRemainingHealth:party.targetHealth,armorDebuffs,bossAttackInterval,healingThreatFactor,initial,actors,damage,heals,incoming,debuffLog,timeline,targetChanges,threatLog,rejectedControls};
}
const primary=run();
const noArmorDebuffs=run({armorDebuffs:false});
const threatSensitivity=[0,1].map(healingThreatFactor=>{
 const r=run({healingThreatFactor});
 return {healingThreatFactor,outcome:r.outcome,seconds:r.seconds,bossRemainingHealth:r.bossRemainingHealth,firstTankAggroLoss:r.targetChanges.find(t=>t.from==='knight')??null,actors:r.actors.map(({skills,actions,warnings,buffPeriods,...actor})=>actor)};
});
const assumptions=['Three level-60 actors, R4 +0 class weapons and five armor pieces, current permanent passives and maximum learned class skill caps. No random affixes, upgrades or gems.',
 'All public player group buffs provided at the highest currently available provider level, including providers outside the three-person party. These start prepared and persist through this isolated test; no double stacking of the same definition. Companion-only public buff 150 excluded from player stats.',
 'Own buffs start prepared with full resources. Finite own durations expire normally and are renewed with costs/casts/cooldowns; toggles pay upkeep. Assimilation 242 has no defined duration, so this probe explicitly assumes 120 seconds. Knight self reduction Awakening 42 starts active for its stored 30 seconds.',
 'Boss level 60, 100000 HP, physical AND magical armor 400, physical attack 1000. One physical attack per second, first hit after one second. Boss attacks the living actor with highest cumulative threat; ties retain the current target. No threat decay, switch margin, AoE, movement or special attacks. Morrak threat is provisionally assigned to its owner; summon tanking is not modeled.',
 'Same-time order: boss hit, then Ritualist, Ritter and Healer actor actions. Party has one shared boss-health pool and armor-debuff list. Distinct armor debuffs stack multiplicatively; repeats refresh their duration. Debuffs apply at cast completion before that skill impact, and their natural durations/costs/cooldowns are retained. Boss is assumed susceptible to these armor debuffs.',
 'Boss is stun-immune: no stun pauses, no stun-bound magic-defense reduction from Soul Shackle, and no Shackle-dependent Torment/Harvest combo window. Ritualist prioritizes Weakness of the Flesh 100. Knight field 40 includes -11% P-defense, -10% M-defense and +37.5 M-attack for each party member while in the field; both armor breakers are included. No automatic armor bypass.',
 'Healer interrupts damage actions at the next legal action opportunity when a party member is below 65% HP. Healing 64, Restoration 124, Aurora 58, group heal 78, aura 108 and emergency group heal 207 are available with costs, casts, cooldowns and effect timing. Self-targeting of ally heals is allowed for this requested probe. All members are assumed within healing range. Revival 206 is not simulated.',
 'Passive HP regeneration is OFF throughout active combat. A provisional 3-second out-of-combat delay is recorded, but there is no idle combat exit in this boss fight. MP regeneration continues every 3 seconds; active heals, damage-linked healing, HP costs and Ritualist 72 HP drain per 1.5 seconds included.',
 'Threat = effective damage times current damage-threat multiplier + fixed on-activation skill threat + healing-threat factor times effective healed HP. Provoke 158 grants knight x3 damage threat; 19/55 add 500 flat and field 40 adds 5000 flat, never multiplied again. Main healing threat factor 0.5 is a probe assumption, with sensitivity at 0 and 1; no settled healing-threat rule is claimed.',
 'No random crit/miss/dodge/block rolls, animation/recovery beyond existing cast policy, boss regeneration or Unreal movement. This is a deterministic stationary model, not a guaranteed in-engine kill time.'];
const inputHashes=Object.fromEntries(await Promise.all([...paths,'services/timedDamageSimulation.js','services/combatDefense.js','services/simulationLoadout.js'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
const report={status:'synchronizedPartyBossProbeNotUnreal',defenseRules:defenseReferenceRules,boss:{level:60,maxHealth:100000,physicalAttack:1000,physicalDefense:400,magicalDefense:400,attacksPerSecond:1,controlImmunities:['stun']},providers:groups.map(({skill,...p})=>p),assumptions,inputHashes,primary,noArmorDebuffs,threatSensitivity};
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# Ritualist, Ritter und Heiler gegen den Level-60-Boss\n\n'+assumptions.map(s=>'- '+s).join('\n')+`\n\n## Ergebnis\n\n${primary.outcome==='win'?'Sieg':primary.outcome==='wipe'?'Gruppentod':'Zeitlimit'} nach ${f(primary.seconds)} Sekunden. Boss-Restleben ${f(primary.bossRemainingHealth)}. Kontrolllauf ohne Abwehrsenkungen: ${noArmorDebuffs.outcome}, ${f(noArmorDebuffs.bossRemainingHealth)} Boss-Restleben nach ${f(noArmorDebuffs.seconds)} Sekunden.\n\n| Klasse | Effektiver Boss-Schaden | Heilung an Gruppe | Erlittener Schaden | Niedrigste HP | HP am Ende | Mana am Ende |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
for(const r of primary.actors)md+=`| ${r.name} | ${f(r.damage)} | ${f(r.healing)} | ${f(r.incoming)} | ${f(r.minimumHealthPercent)} % | ${f(r.finalHealth)} / ${f(r.finalMaxHealth)} | ${f(r.finalMana)} |\n`;
md+='\n## Mana im Kampf\n\nHP-Regeneration ist im Kampf ausgeschaltet; MP-Regeneration bleibt aktiv. Vorbereitete Buffs starten mit vollen Ressourcen. Bei einem Tod endet die Ressourcenbilanz des betroffenen Charakters zu diesem Zeitpunkt.\n\n| Klasse | Start | Verbraucht | Regeneriert | Minimum | Ende | Erster Manaengpass | Mana-bedingte Wartezeit |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of primary.actors)md+=`| ${r.name} | ${f(r.initialMana)} | ${f(r.manaSpent)} | ${f(r.manaRegenerated)} | ${f(r.minimumMana)} | ${f(r.finalMana)} | ${r.firstManaShortageAt===null?'keiner':f(r.firstManaShortageAt)+' s'} | ${f(r.manaBlockedSeconds)} s |\n`;
md+='\n## Aggro und Zielwechsel\n\nHeilaggro ist vorläufig mit 0,5 je effektiv geheiltem HP angesetzt. Feste Skillaggro wird nicht nochmals mit Provozieren multipliziert.\n\n| Klasse | Schadensaggro | Feste Skillaggro | Heilaggro | Gesamt | Tod |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of primary.actors)md+=`| ${r.name} | ${f(r.damageThreat)} | ${f(r.flatThreat)} | ${f(r.healingThreat)} | ${f(r.threat)} | ${r.deathAt===null?'überlebt':f(r.deathAt)+' s'} |\n`;
for(const change of primary.targetChanges)md+=`\n- ${f(change.time)} s: ${change.from} → ${change.to}. Aggro: ${Object.entries(change.threat).map(([key,n])=>key+' '+f(n)).join(', ')}.`;
const knight=primary.actors.find(a=>a.key==='knight');
md+=`\n\nDer Ritter erhält 3 × effektiven Schaden plus ${f(knight.flatThreat)} feste Skillaggro. Ohne Debuffs reduzieren 400 Abwehr gegen Level 60 den Schaden um ${f(monsterArmorReduction(400,60)*100)} %. Mit allen gleichzeitig aktiven P-Abwehrsenkungen bleiben ${f(400*.7*.99*.89)} P-Abwehr (${f(monsterArmorReduction(400*.7*.99*.89,60)*100)} % Reduktion).\n\n## Empfindlichkeit gegenüber Heilaggro\n\n| Aggro pro effektiv geheiltem HP | Ergebnis | Zeit | Boss-Restleben | Erster Aggroverlust des Ritters |\n| ---: | --- | ---: | ---: | ---: |\n`;
for(const r of [threatSensitivity[0],primary,threatSensitivity[1]])md+=`| ${f(r.healingThreatFactor)} | ${r.outcome} | ${f(r.seconds)} s | ${f(r.bossRemainingHealth)} | ${(r.firstTankAggroLoss??r.targetChanges?.find(t=>t.from==='knight'))?f((r.firstTankAggroLoss??r.targetChanges?.find(t=>t.from==='knight')).time)+' s':'keiner'} |\n`;
md+='\nDie Heilaggro-Regel ist eine vorläufige Modellannahme. Die Varianten zeigen, wie Zielwechsel das Kampfergebnis beeinflussen.\n';
md+='\n## Bossabwehr und Treffer pro Sekunde\n\n| Sekunde | Boss-HP | P-Abwehr | M-Abwehr |\n| ---: | ---: | ---: | ---: |\n';
for(const r of primary.timeline)md+=`| ${r.time} | ${f(r.bossHealth)} | ${f(r.pdef)} | ${f(r.mdef)} |\n`;
md+='\n## Testprüfung\n\n42 direkte Tests für gemeinsame Boss-HP, Abwehrkurven, Debuffwirkung zwischen Gruppenmitgliedern, Heilziele/Kosten, ausgeschaltete Kampf-HP-Regeneration, Betäubungsimmunität und bisherige Skillabläufe bestehen. Die breitere Auswahl hat vier bereits bekannte Fehlschläge aus historischen Skill-/Buff-Erwartungen; keine zusätzlichen Fehlschläge. Details in level60-party-boss-probe-validation.json.\n';
await fs.writeFile('data/balancing/level60-party-boss-probe.json',JSON.stringify(report,null,2)+'\n');
await fs.writeFile('docs/balancing/level60-party-boss-probe.md',md);
console.log(JSON.stringify({primary:{outcome:primary.outcome,seconds:primary.seconds,bossRemainingHealth:primary.bossRemainingHealth,actors:primary.actors.map(({skills,actions,buffPeriods,warnings,...actor})=>actor)},withoutArmorDebuffs:{outcome:noArmorDebuffs.outcome,bossRemainingHealth:noArmorDebuffs.bossRemainingHealth},debuffLog:primary.debuffLog},null,2));
