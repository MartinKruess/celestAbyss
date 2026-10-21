import {attributeConversionFactor} from './attributeConversion.js';
import {autoAttackInterval,normalizedSpeedBonus} from './attackSpeed.js';
import {curveValue,skillValue,evaluateDamageSkill,evaluateSequenceHit,evaluateDamagePhase,casterAttackForDamage} from './rotationDamage.js';
import {withGroupSkillDamageBonuses,withSelfSkillDamageBonuses,withPassiveSkillDamageBonuses,scopedSkillDamageBonus} from './groupSkillDamageBonus.js';
import {skillForClass} from './skillLearningLevel.js';
import {targetedSkillModifiers} from './targetedSkillPassives.js';
import {summonedCreatureStats} from './summonedCreatureStats.js';
import {soulReserveAttackBonus} from './soulReserveBonus.js';
import {permanentManaRegenMultiplier} from './permanentManaRegeneration.js';
import {isPassiveSkill} from './skillClassification.js';
const attrs={str:'strength',vita:'vitality',wis:'wisdom',dex:'dexterity',agi:'agility',int:'intelligence',luck:'luck'};
const flat={patk:'physicalAttack',matk:'magicalAttack',atkSpeed:'attackSpeed',health:'maxHealth',mana:'maxMana',pdef:'physicalDefense',mdef:'magicalDefense'};
const ownAttributes={...attrs,amb:'ambush',faith:'faith',vic:'victim'};
const ownFlat={...flat,accuracy:'accuracy',dodge:'dodge',block:'block',penetration:'penetration',critDamageBonus:'criticalDamageBonus',critChanceRating:'critChanceRating',movementSpeed:'movementSpeed',healthRegen:'healthRegen',manaRegen:'manaRegen'};
export function conversionDelta(model,key,attribute,amount){
 const result={};const eligible=model.offensiveAttributeEligibility.confirmedMatchingAttributes[key]??model.offensiveAttributeEligibility.pendingClassComparisonAttributes[key]??[];
 for(const c of model.conversions.filter(c=>c.attribute===attribute&&c.status==='confirmedFactor'&&c.amountPerPoint!==undefined)){
  let f=c.amountPerPoint;
  const override=model.offensiveAttributeEligibility.classAttackOverrides?.[key];
  if(override?.attribute===attribute&&c.target==='magicalAttack')f=override.amountPerPoint;
  if(['physicalAttack','magicalAttack'].includes(c.target)&&!eligible.includes(attribute))continue;
  if(attribute==='strength'&&c.target==='physicalAttack')f*=model.strengthAttackClassModifiers?.classMultipliers[key]??1;
  if(attribute==='intelligence'&&c.target==='magicalAttack')f*=model.intelligenceAttackClassModifiers?.classMultipliers[key]??1;
  if(attribute==='vitality')f*=model.vitalityClassModifiers?.classTargetMultipliers?.[key]?.[c.target]??(model.vitalityClassModifiers?.targets.includes(c.target)?model.vitalityClassModifiers.classMultipliers[key]??1:1);
  if(attribute==='wisdom')f*=model.wisdomClassModifiers?.classTargetMultipliers[key]?.[c.target]??1;
  if(c.unit==='percentagePoints')f/=100;result[c.target]=(result[c.target]??0)+amount*f;
 }return result;
}
export function simulateClass({pre,skills,model,attackNumbers,config={}}){
 if(config.attackMode!==undefined&&!['mixed','autoOnly','skillsOnly','skillsPreferred'].includes(config.attackMode))throw Error('Unknown attack mode');
 skills=skills.map(s=>skillForClass(s,pre.key));
 skills=skills.map(s=>{const m=targetedSkillModifiers(skills,pre.includedSkills,s.nr);return m.replacementSkillName_de?{...s,skillName_de:m.replacementSkillName_de,skillName_eng:m.replacementSkillName_eng??s.skillName_eng}:s;});
 // Foreign buffs keep the provider's learned level, not the recipient's cap.
 for(const buff of config.externalBuffSkills??[]){const index=skills.findIndex(s=>s.nr===buff.nr);if(index<0)skills.push(buff);else skills[index]=buff;}
 const permanentRegenFactor=permanentManaRegenMultiplier(skills,pre.includedSkills);
 const cfg={duration:600,targetHealth:2000000,baseAttacksPerSecond:1.3,staffAttacksPerSecond:1.1,mageAttacksPerSecond:1.1,rangedAttacksPerSecond:1.1,skillToAutoSeconds:'attackInterval',autoToSkillSeconds:0.5,reactionSeconds:0.1,specialAttributeAttackFactor:0,cooldownStart:'castEnd',initialRageOnEnergyActivation:0,regenInterval:2,step:0.01,...config};
 const get=n=>skills.find(s=>s.nr===n),key=pre.key;
 const passiveModifiers=new Map(attackNumbers.map(n=>[n,targetedSkillModifiers(skills,pre.includedSkills,n)]));
 const modifiers=s=>passiveModifiers.get(s.nr)??{damageMultiplier:1,manaMultiplier:1,cooldownReduction:0,castTimeReduction:0};
 const ownBuffNumbers=new Set(config.ownBuffNumbers??[]);
 const passiveSkillBonus=withPassiveSkillDamageBonuses({},(pre.includedSkills??[]).map(get));
 const scopedPassiveSources=(pre.learnedSkillNumbers??pre.includedSkills??[]).map(get).filter(isPassiveSkill);
 const scopedPassiveBonuses=new Map(attackNumbers.map(n=>[n,scopedSkillDamageBonus(n,scopedPassiveSources)]));
 const hasPassiveSkillBonus=Boolean(passiveSkillBonus.physicalSkillDamageBonus||passiveSkillBonus.magicalSkillDamageBonus);
 const burnEffect=get(214)?.effects?.find(e=>e.type==='statModifier'&&e.stat==='matk');
 const burnAttack=burnEffect?(curveValue(burnEffect.valueScaling,get(214).maxSkillLv)??burnEffect.value??0):0;
 const state={time:0,mana:pre.stats.maxMana,health:pre.stats.maxHealth,souls:key==='ritualist'?100:0,rage:key==='gladiator'?100:0,points:0,markEnd:-1,shackleEnd:-1,torments:0,chainPending:false,harvestPending:false,stealthEnd:-1,revealEnd:-1,trapUsed:false,cast:null,buffs:[],ready:{},events:[],summons:[],nextAuto:0,nextAutoAllowed:0,lastSkillFinishedAt:-Infinity,autoSkillReady:0,nextSkill:0,explosive:0,dead:false,targetHealth:cfg.targetHealth};
 let statsSnapshot,skillStatsSnapshot;
 const permanentBuffNumbers=new Set(cfg.permanentBuffNumbers??[]);
 const result={key,name:pre.name,weapons:pre.weapons,totalDamage:0,skillDamage:0,autoDamage:0,summonDamage:0,healing:0,overhealing:0,healthCosts:0,healthRegenerated:0,manaRegenerated:0,manaSpent:0,skills:{},minutes:Array.from({length:Math.ceil(cfg.duration/60)},(_,i)=>({minute:i+1,damage:0,skillDamage:0,autoDamage:0,summonDamage:0})),manaTimeline:[],manaWarnings:[],emptyManaEvents:[],autoOnlyPeriods:[],warnings:[],burstCounts:{},simulationAssumptions:[],initialMana:state.mana,initialHealth:state.health,initialSouls:state.souls,initialRage:state.rage};
 if(cfg.recordActionTimeline)result.actionTimeline=[];
 const warn=m=>{if(!result.warnings.includes(m))result.warnings.push(m);};
 if(cfg.enableOwnBuffs){result.buffPeriods=[];result.buffManaSpent=0;result.buffDrainManaSpent=0;result.manaFromBuffAttacks=0;}
 let shortage=null,autoOnly=null;
 const round=x=>Math.round(x*1e8)/1e8;
 const val=(c,l)=>curveValue(c,l),end=s=>val(s.durationScaling,s.maxSkillLv)??s.dur??0;
 const ready=s=>Boolean(s)&&(state.ready[s.nr]??0)<=state.time+1e-7;
 const summonRate=nr=>get(nr)?.summonedCreatureSettings?.baseAttacksPerSecond??cfg.baseAttacksPerSecond;
 const active=(nr)=>state.buffs.some(b=>b.nr===nr&&b.until>state.time+1e-8);
 function stats(){
  if(cfg.cacheCombatStats&&statsSnapshot?.time===state.time&&statsSnapshot.buffs===state.buffs&&statsSnapshot.buffCount===state.buffs.length&&statsSnapshot.souls===state.souls)return statsSnapshot.value;
  const r={...pre.stats};for(const b of state.buffs.filter(b=>b.until>state.time+1e-8)){for(const[k,v]of Object.entries(b.delta))r[k]=(r[k]??0)+v;}
  if(key==='ritualist'){r.magicalAttack+=soulReserveAttackBonus(get(241),state.souls)+burnAttack;const storage=get(120)?.soulStorageSettings;if(storage?.bonusStat==='int'){const bonus=Math.floor(state.souls/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep;const capacity=curveValue(storage.capacityScaling,get(120).maxSkillLv)??0;const baked=pre.includedSkills?.includes(120)?Math.floor(capacity/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep:0;for(const [stat,value]of Object.entries(conversionDelta(model,key,'intelligence',bonus-baked)))r[stat]=(r[stat]??0)+value;}}
  for(const nr of pre.includedSkills??[]){const cv=get(nr)?.attributeConversionBonus;if(cv?.sourceStat==='vita'&&cv.targetStat==='str'){const extraVitality=state.buffs.filter(b=>b.until>state.time+1e-8).reduce((sum,b)=>sum+(b.vitalityBonus??0),0);for(const [stat,amount]of Object.entries(conversionDelta(model,key,'strength',extraVitality*attributeConversionFactor(get(nr)))))r[stat]=(r[stat]??0)+amount;}}
  const specialFactor=cfg.specialAttributeAttackFactors?.[key]??cfg.specialAttributeAttackFactor;
  if(specialFactor&&model.plannedSpecialAttributeUnlock?.classAttributes?.[key]){
   if(pre.specialAttributeAttack)r[pre.specialAttributeAttack.target]-=pre.specialAttributeAttack.amount;
   if(key==='luminet')r.magicalAttack+=specialFactor*((pre.knownAttributes?.faith??0)+(r.specialFaith??0)+buffAttribute('faith'));
   if(key==='ritualist')r.magicalAttack+=specialFactor*((pre.knownAttributes?.victim??0)+Math.floor(state.souls/10)*2+(active(237)?5:0)+buffAttribute('victim'));
   if(key==='villian')r.physicalAttack+=specialFactor*((pre.knownAttributes?.ambush??0)+buffAttribute('ambush'));
  }
  if(cfg.enableOwnBuffs)for(const nr of pre.includedSkills??[]){const cv=get(nr)?.attributeConversionBonus;if(cv?.targetStat==='maxMana'){r.maxMana+=(buffAttribute(ownAttributes[cv.sourceStat])??0)*attributeConversionFactor(get(nr));}}
  r.manaRegen=pre.stats.manaRegen+(r.manaRegen-pre.stats.manaRegen)*permanentRegenFactor;
  if(cfg.cacheCombatStats)statsSnapshot={time:state.time,buffs:state.buffs,buffCount:state.buffs.length,souls:state.souls,value:r};
  return r;
 }
 function buffAttribute(name){return state.buffs.filter(b=>b.until>state.time+1e-8).reduce((sum,b)=>sum+(b.attributeBonuses?.[name]??0),0);}
 function skillStats(){const base=stats();if(!cfg.enableOwnBuffs&&!hasPassiveSkillBonus)return base;if(skillStatsSnapshot?.base===base)return skillStatsSnapshot.value;const permanent=hasPassiveSkillBonus?{...base,physicalSkillDamageBonus:(base.physicalSkillDamageBonus??0)+passiveSkillBonus.physicalSkillDamageBonus,magicalSkillDamageBonus:(base.magicalSkillDamageBonus??0)+passiveSkillBonus.magicalSkillDamageBonus}:base;const activeBuffs=cfg.enableOwnBuffs?state.buffs.filter(b=>b.until>state.time+1e-8).map(b=>get(b.nr)):[];const value=cfg.enableOwnBuffs?withSelfSkillDamageBonuses(withGroupSkillDamageBonuses(permanent,activeBuffs),activeBuffs):permanent;skillStatsSnapshot={base,value};return value;}
 function installOwnBuff(s){
  const duration=cfg.permanentPrebuffs||permanentBuffNumbers.has(s.nr)||s.activation==='toggle'||[158,240].includes(s.nr)?Infinity:end(s);
  if(!(duration>0)){warn(s.skillName_de+': keine definierte Buffdauer; nicht dauerhaft angenommen.');return;}
  const delta={},attributeBonuses={};const add=(k,v)=>{if(ownAttributes[k])attributeBonuses[ownAttributes[k]]=(attributeBonuses[ownAttributes[k]]??0)+v;else if(ownFlat[k])delta[ownFlat[k]]=(delta[ownFlat[k]]??0)+v;};
  if(s.nr!==150){
   for(const k of [...Object.keys(ownAttributes),...Object.keys(ownFlat)]){if(k==='mana'&&!s.statScaling?.mana)continue;const v=val(s.statScaling?.[k],s.maxSkillLv)??s[k];if(typeof v==='number')add(k,normalizedSpeedBonus(s,k,v));}
   for(const e of s.effects??[])if(e.type==='statModifier'&&e.target==='self'&&!s.statScaling?.[e.stat]&&typeof s[e.stat]!=='number'){const v=val(e.valueScaling,s.maxSkillLv)??e.value;if(e.stat==='maxMana')delta.maxMana=(delta.maxMana??0)+v;else add(e.stat,v);}
   const exchange=s.attributeExchangeSettings;if(exchange){const source=ownAttributes[exchange.sourceStat],destination=ownAttributes[exchange.destinationStat],amount=((pre.knownAttributes?.[source]??0)+buffAttribute(source))*val(exchange.sourceFractionScaling,s.maxSkillLv);attributeBonuses[source]=(attributeBonuses[source]??0)-amount;attributeBonuses[destination]=(attributeBonuses[destination]??0)+amount*exchange.destinationPointsPerSourcePoint;}
   for(const [attribute,amount]of Object.entries(attributeBonuses))for(const [stat,value]of Object.entries(conversionDelta(model,key,attribute,amount)))delta[stat]=(delta[stat]??0)+value;
  }
  for(const b of state.buffs.filter(b=>b.nr===s.nr&&b.period))b.period.end=Math.min(b.period.end,state.time);
  const period={nr:s.nr,name:s.skillName_de,start:state.time,end:Math.min(cfg.duration,state.time+duration)};result.buffPeriods.push(period);
  state.buffs=state.buffs.filter(b=>b.nr!==s.nr);state.buffs.push({nr:s.nr,until:state.time+duration,delta,attributeBonuses,vitalityBonus:attributeBonuses.vitality??0,intelligenceBonus:attributeBonuses.intelligence??0,disabledEffects:[],period});
 }
 function ownEffects(type){if(!cfg.enableOwnBuffs)return [];return state.buffs.filter(b=>b.until>state.time+1e-8&&ownBuffNumbers.has(b.nr)).flatMap(b=>(get(b.nr)?.effects??[]).filter(e=>e.type===type&&!b.disabledEffects?.includes(e.key)).map(e=>({b,e})));}
 function drainOwnBuffs(){for(const {b,e}of ownEffects('resourceDrain')){if(permanentBuffNumbers.has(b.nr)||e.resource!=='mana'||e.intervalSource!=='manaRegenerationTick')continue;let amount=val(e.valueScaling,get(b.nr).maxSkillLv)??e.value;if(e.unit==='fraction')amount*=stats().maxMana;if(state.mana+1e-8<amount){if(e.onInsufficientResource==='disableEffects'){b.disabledEffects.push(...(e.disablesEffects??[e.key]));}else{b.until=state.time;b.period.end=state.time;}continue;}state.mana=Math.max(0,state.mana-amount);result.manaSpent+=amount;result.buffManaSpent+=amount;result.buffDrainManaSpent+=amount;const row=ledger(b.nr,get(b.nr).skillName_de,'skill');row.manaSpent+=amount;row.drainManaSpent=(row.drainManaSpent??0)+amount;}}
 function applyBuff(s,duration,extra={}){const delta={...extra};for(const[k,c]of Object.entries(s.statScaling??{})){const n=val(c,s.maxSkillLv);if(attrs[k])for(const[a,v]of Object.entries(conversionDelta(model,key,attrs[k],n)))delta[a]=(delta[a]??0)+v;else if(flat[k])delta[flat[k]]=(delta[flat[k]]??0)+n;}
 state.buffs=state.buffs.filter(b=>b.nr!==s.nr);state.buffs.push({nr:s.nr,until:state.time+duration,delta,vitalityBonus:skillValue(s,'vita')??0,intelligenceBonus:skillValue(s,'int')??0});}
 function event(at,fn){if(at<=cfg.duration+1e-7)state.events.push({at:round(at),fn});}
 function ledger(nr,name,kind){const id=String(nr);return result.skills[id]??=( {nr,name,kind,applications:0,hits:0,damage:0,manaSpent:0,healing:0,firstUse:null,lastUse:null,useTimes:[]} );}
 function damage(n,name,kind,amount){if(state.dead||state.targetHealth<=0||state.time>cfg.duration+1e-7)return;amount=Math.max(0,amount);const entry=ledger(n,name,kind);entry.damage+=amount;entry.hits++;result.totalDamage+=amount;result[kind+'Damage']+=amount;const bin=result.minutes[Math.min(result.minutes.length-1,Math.floor((state.time-1e-8)/60))<0?0:Math.min(result.minutes.length-1,Math.floor((state.time-1e-8)/60))];bin.damage+=amount;bin[kind+'Damage']+=amount;state.targetHealth-=amount;if(state.targetHealth<=0)result.targetDeathAt=state.time;}
 function heal(n,name,amount){if(!(amount>0))return;const accepted=Math.max(0,Math.min(amount,stats().maxHealth-state.health));state.health+=accepted;result.healing+=accepted;result.overhealing+=amount-accepted;ledger(n,name,'skill').healing+=accepted;}
 function healFromAttack(s,dealt){for(const e of s.effects??[]){if(e.type!=='heal'||e.target!=='self')continue;let n=val(e.valueScaling,s.maxSkillLv)??e.value??0;if(e.unit==='fraction')n*=e.reference==='damageDealt'?dealt:stats().maxHealth;heal(s.nr,s.skillName_de,n);}}
 function costs(s){const r=stats(),c={mana:0,health:0,rage:0,souls:0};for(const e of s.resourceCosts??[]){let amount=val(e.scaling,s.maxSkillLv)??0;if(e.unit==='fraction')amount*=e.reference==='currentMana'?state.mana:e.reference==='maxHealth'?r.maxHealth:e.resource==='rage'?100:r.maxMana;c[{soulFragments:'souls'}[e.resource]??e.resource]+=amount;}
 if(s.nr===237)c.mana=0;if(pre.includedSkills.includes(67))c.mana*=0.97;
 c.mana*=modifiers(s).manaMultiplier;
 if(key==='ritualist'&&attackNumbers.includes(s.nr)&&s.nr!==185&&s.nr!==226)c.health+=r.maxHealth*0.005;
 return c;}
 function affordable(s){const c=costs(s);return state.mana+1e-8>=c.mana&&state.health>c.health+1e-8&&state.rage+1e-8>=c.rage&&state.souls>=c.souls;}
 function legal(s,ignoreCooldown=false){const n=s.nr;if(!ignoreCooldown&&!ready(s))return false;
 if(n===13)return state.rage>=55;
 if([109,127,128].includes(n))return active(13);
 if(n===104)return state.time<state.shackleEnd-1e-8&&state.torments<15;
 if(n===105)return state.harvestPending&&state.time<=state.shackleEnd+1.5+1e-8;
 if(n===186)return state.time+0.2<=state.markEnd+1e-8&&state.points<25;
 if(n===229)return state.chainPending&&state.time<=state.markEnd+1.5+1e-8;
 if([90,91,92].includes(n))return state.time<state.stealthEnd&&state.time>=state.revealEnd&&(n!==91||!state.trapUsed);
 return true;}
 function totalMultiplier(s){let m=key==='ritualist'?1.01:1;
 if(key==='healer'&&[29,68,239].includes(s.nr))m*=1.02;
 if([31,57,69,112].includes(s.nr)&&active(56))m*=1.02;
 if([8,9,101,117,210,211,213,215,216,217,218,231].includes(s.nr)&&key==='luminet'&&active(218))m*=1.03;
 return m*modifiers(s).damageMultiplier;}
 function attackOptions(s){const r=stats(),mod=modifiers(s),o={totalMultiplier:totalMultiplier(s),physicalMultiplier:mod.physicalDamageMultiplier??1,magicalMultiplier:mod.magicalDamageMultiplier??1,extraFlatDamage:mod.extraFlatDamage??0};
 o.extraFlatDamage+=scopedBonus(s);
 if(s.nr===99)o.extraSkillBase=r.maxHealth*0.25*1.25;
 if(s.nr===219)o.extraSkillBase=state.lastSacrificedMana*0.3;
 if(s.nr===229){const p=s.collectedPointScaling;let tier=0;for(const t of p.thresholds)if(state.points>=t)tier++;o.baseMultiplier=1+p.baseDamageBonusFractionByTier[tier];}
 return o;}
 function scopedBonus(s){return (scopedPassiveBonuses.get(s.nr)??0)+(cfg.enableOwnBuffs?scopedSkillDamageBonus(s.nr,state.buffs.filter(b=>b.until>state.time+1e-8).map(b=>get(b.nr))):0);}
 function initialHit(s,weight=1){const r=skillStats(),o=attackOptions(s);const report=evaluateDamageSkill(s,r,o);const amount=report.initialDamage*weight;
 damage(s.nr,s.skillName_de,'skill',amount);healFromAttack(s,amount);return amount;}
 function periodicHit(s,e){if(state.dead)return;const r=skillStats(),o=attackOptions(s);let amount;
 if(e.initialCalculatedDamageFraction!==undefined){const bonus=scopedBonus(s);amount=evaluateDamageSkill(s,r,{...o,extraFlatDamage:o.extraFlatDamage-bonus}).initialDamage*e.initialCalculatedDamageFraction+bonus*o.totalMultiplier*(e.damageTypes?.includes('physical')?o.physicalMultiplier:o.magicalMultiplier);}
 else{amount=(val(e.valueScaling,s.maxSkillLv)??e.value??0)+(e.addsCasterMagicalAttack===true?casterAttackForDamage(s,r,'matk'):0);amount*=totalMultiplier(s);}
 if(e.initialCalculatedDamageFraction===undefined){const mod=modifiers(s);amount*=e.damageTypes?.includes('physical')&&!e.damageTypes.includes('magical')?(mod.physicalDamageMultiplier??1):(mod.magicalDamageMultiplier??1);}
 damage(s.nr,s.skillName_de,'skill',amount);
 // Healing linked to damage belongs to the damaging action; self as primary recipient is a test convention.
 for(const h of s.effects??[])if(h.type==='heal'&&h.damageSourceEffectKey===e.key&&h.healingFromDamage){heal(s.nr,s.skillName_de,amount*h.healingFromDamage.primaryTargetFraction);warn('Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.');}
 }
 function finish(s){
 state.lastSkillFinishedAt=state.time;
 state.nextAutoAllowed=cfg.skillToAutoSeconds==='attackInterval'?0:round(state.time+cfg.skillToAutoSeconds);
 if(![104,185,186].includes(s.nr))state.nextSkill=round(state.time+cfg.reactionSeconds);
 if(s.nr===161){state.rage=Math.min(100,state.rage+cfg.initialRageOnEnergyActivation);applyBuff(s,cfg.energyOfWrathDurationSeconds??end(s));return;}
 if(s.nr===185){state.markEnd=round(state.time+5);state.points=0;state.chainPending=true;result.burstCounts.soulCollectionWindows=(result.burstCounts.soulCollectionWindows??0)+1;return;}
 if(s.nr===188){state.stealthEnd=state.time+end(s);state.revealEnd=-1;state.trapUsed=false;return;}
 if(cfg.enableOwnBuffs&&ownBuffNumbers.has(s.nr)){installOwnBuff(s);return;}
 if([226,237,244].includes(s.nr)){const dur=s.nr===237?300:360;state.summons=state.summons.filter(p=>p.nr!==s.nr);state.summons.push({nr:s.nr,until:state.time+dur,next:state.time+1/summonRate(s.nr)});if(s.nr===237){const intelligence=s.effects?.find(e=>e.stat==='int')?.value??0;const d={maxHealth:-500};for(const [attribute,amount]of Object.entries({wisdom:5,intelligence}))for(const [stat,value]of Object.entries(conversionDelta(model,key,attribute,amount)))d[stat]=(d[stat]??0)+value;state.buffs.push({nr:237,until:state.time+dur,delta:d,attributeBonuses:{wisdom:5,intelligence},intelligenceBonus:intelligence});state.health=Math.min(state.health,stats().maxHealth);}return;}
 if(s.nr===47){state.explosive=3;return;}
 const exec=s.attackExecution??{},report=evaluateDamageSkill(s,skillStats(),attackOptions(s));
 const sequence=exec.meteorWaveSequence??exec.hitSequence;
 if(exec.damagePhases?.length){
 for(const phase of exec.damagePhases){if(s.maxSkillLv<(phase.minimumSkillLevel??1))continue;const hit=()=>{const mult=attackOptions(s);const amount=evaluateDamagePhase(s,skillStats(),phase)*(phase.stat==='patk'?(mult.physicalMultiplier??1):(mult.magicalMultiplier??1))*totalMultiplier(s);damage(s.nr,s.skillName_de,'skill',amount);healFromAttack(s,amount);};const delay=phase.offsetSeconds??(phase.timing==='afterSkillDuration'?end(s):0);if(delay)event(state.time+delay,hit);else hit();}
 }
 else if(sequence?.length){const weights=sequence.map(x=>x.damageFraction??x.damageMultiplier);const sum=weights.reduce((a,b)=>a+b,0);let rageGranted=false;sequence.forEach((h,i)=>event(state.time+h.offsetSeconds,()=>{
  if(!exec.sequenceScalesSkillBaseOnly){initialHit(s,weights[i]/sum);return;}
  if(state.dead||state.targetHealth<=0)return;
  const amount=evaluateSequenceHit(s,skillStats(),h,attackOptions(s));
  damage(s.nr,s.skillName_de,'skill',amount);healFromAttack(s,amount);
  if(amount>0&&!rageGranted){for(const e of s.effects??[])if(e.type==='resourceGain'&&e.resource==='rage'&&e.gainTrigger==='ownSkillDamage'&&e.oncePerSkillApplication){state.rage=Math.min(100,state.rage+(val(e.valueScaling,s.maxSkillLv)??e.value??0));rageGranted=true;}}
 }));}
 else{let delay=exec.explosionDelayAfterCreationSeconds??(exec.damageTiming==='afterSkillDuration'?end(s):0);if(s.nr===110)delay=0.5;if(s.nr===99)delay=2;
 if(report.initialDamage>0){if(delay)event(state.time+delay,()=>initialHit(s));else initialHit(s);}}
 for(const e of(s.effects??[]).filter(e=>e.type==='periodicDamage')){const dur=val(e.durationScaling,s.maxSkillLv)??e.durationSeconds;for(let d=e.firstTickAfterSeconds;d<=dur+1e-8;d+=e.intervalSeconds)event(state.time+d,()=>periodicHit(s,e));}
 if(s.nr===13){const effect=s.effects?.find(e=>e.key==='rage-outburst-strength');const strength=val(effect?.valueScaling,s.maxSkillLv)??effect?.value??0;const duration=val(effect?.durationScaling,s.maxSkillLv)??effect?.durationSeconds??end(s);state.buffs=state.buffs.filter(b=>b.nr!==13);state.buffs.push({nr:13,until:state.time+duration,delta:conversionDelta(model,key,'strength',strength)});result.burstCounts.rageOutbursts=(result.burstCounts.rageOutbursts??0)+1;}
 if(s.nr===233)state.buffs.push({nr:233,until:state.time+2.8,delta:{attackSpeed:0.2}});
 if(s.nr===101){const effect=s.effects?.find(e=>e.type==='statModifier'&&e.stat==='int');if(effect){const intelligence=val(effect.valueScaling,s.maxSkillLv)??effect.value;state.buffs=state.buffs.filter(b=>b.nr!==101);state.buffs.push({nr:101,until:state.time+end(s),delta:conversionDelta(model,key,'intelligence',intelligence),attributeBonuses:{intelligence},intelligenceBonus:intelligence});}}
 if(s.nr===40)state.buffs.push({nr:40,until:state.time+end(s),delta:{magicalAttack:37.5}});
 if([56,218].includes(s.nr))state.buffs.push({nr:s.nr,until:state.time+end(s),delta:{}});
 if(s.nr===48)state.souls=Math.min(100,state.souls+1);
 if(s.nr===103){state.shackleEnd=round(state.time+3);state.torments=0;state.harvestPending=true;result.burstCounts.soulShackles=(result.burstCounts.soulShackles??0)+1;}
 if(s.nr===104)state.torments++;
 if(s.nr===105){state.souls=Math.min(100,state.souls+(state.torments>=12?2:state.torments>=5?1:0));state.harvestPending=false;result.burstCounts.soulHarvests=(result.burstCounts.soulHarvests??0)+1;}
 if(s.nr===186)state.points++;
 if(s.nr===229){state.points=0;state.markEnd=-1;state.chainPending=false;result.burstCounts.spectralFinishers=(result.burstCounts.spectralFinishers??0)+1;}
 if(s.nr===91)state.trapUsed=true;if(s.nr===92)state.revealEnd=state.time+1;
 if(s.nr===90)state.stealthEnd=-1;
 if(key==='villian'&&state.time<state.stealthEnd&&![91,92].includes(s.nr)&&s.nr!==188)state.stealthEnd=-1;
 }
 function start(s){const manaBefore=state.mana;const c=costs(s);state.lastSacrificedMana=c.mana;state.mana=Math.max(0,state.mana-c.mana);state.rage=Math.max(0,state.rage-c.rage);state.souls-=c.souls;state.health-=c.health;result.manaSpent+=c.mana;result.healthCosts+=c.health;if(state.mana<=1e-8){result.firstEmptyManaAt??=state.time;if(manaBefore>1e-8)result.emptyManaEvents.push({time:state.time,skill:s.nr});}
 if(cfg.recordActionTimeline)result.actionTimeline.push({time:state.time,nr:s.nr,name:s.skillName_de,manaBefore,manaAfter:state.mana});
 const row=ledger(s.nr,s.skillName_de,[226,237,244].includes(s.nr)?'summon':'skill');row.applications++;row.manaSpent+=c.mana;row.firstUse??=state.time;row.lastUse=state.time;row.useTimes.push(state.time);
 if(cfg.enableOwnBuffs&&ownBuffNumbers.has(s.nr))result.buffManaSpent+=c.mana;
 let cd=s.nr===237?360:val(s.cooldownScaling,s.maxSkillLv)??s.cd??0;if(key==='herbalist'&&s.timingModifiers?.affectedByCooldownReduction!==false){const passive=get(123),effect=passive?.effects?.find(e=>e.type==='cooldownReduction');cd=Math.max(0,cd-(effect?(val(effect.valueScaling,passive.maxSkillLv)??effect.value):0));}
 cd=Math.max(0,cd-modifiers(s).cooldownReduction);
 const baseCast=s.nr===237?0.4:s.castTimeSeconds??val(s.castTimeScaling,s.maxSkillLv)??0;
 const cast=Math.max(0,baseCast-(s.timingModifiers?.castTimeIsFixed?0:modifiers(s).castTimeReduction))+(s.attackExecution?.channelTimeSeconds??0);
 if(cfg.enableOwnBuffs&&active(240)&&[29,68,239].includes(s.nr)){const effect=get(240).effects.find(e=>e.type==='cooldownReduction');cd=Math.max(.1,cd-(val(effect.valueScaling,get(240).maxSkillLv)??effect.value));}
 state.ready[s.nr]=round(round(state.time+cast)+cd);
 if(s.nr===23&&s.castTimeSeconds===undefined)warn('Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).');
 if(cast>0)state.cast={end:round(state.time+cast),skill:s};else finish(s);
 }
 const attacks=(cfg.attackMode==='autoOnly'?[]:attackNumbers).map(get).filter(s=>s&&s.nr!==185&&s.nr!==226&&s.nr!==244&&!(cfg.attackMode==='skillsOnly'&&s.nr===47));
 const rank=s=>{if(cfg.skillPriorityScores?.[s.nr]!==undefined)return cfg.skillPriorityScores[s.nr];if(s.nr===219)return -1;return evaluateDamageSkill(s,skillStats(),{...(s.nr===229?{baseMultiplier:1.15}:{}),...(key==='ritualist'?{totalMultiplier:1.01}: {})}).damage;};
 const setupNumbers=[];if(cfg.attackMode!=='autoOnly'){if(key==='gladiator')setupNumbers.push(161);if(key==='summoner')setupNumbers.push(185);if(key==='villian')setupNumbers.push(188);}if(key==='druid')setupNumbers.push(244);if(key==='hunter')setupNumbers.push(226);if(key==='ritualist')setupNumbers.push(237);
 // Optional search control: disabling setup actions lets a policy genuinely omit a combo.
 for(let i=setupNumbers.length-1;i>=0;i--)if(cfg.disabledSetupSkillNumbers?.includes(setupNumbers[i]))setupNumbers.splice(i,1);
 function priorities(){
 const allowed=attacks.filter(s=>legal(s)).sort((a,b)=>{const ac=(val(a.cooldownScaling,a.maxSkillLv)??a.cd??0)<=5,bc=(val(b.cooldownScaling,b.maxSkillLv)??b.cd??0)<=5;return (cfg.skillPriorityScores?0:Number(ac)-Number(bc))||rank(b)-rank(a)||a.nr-b.nr;});
 if(key==='ritualist'){
  if(state.harvestPending&&state.time<=state.shackleEnd+1.5){const a=get(104),h=get(105);if(state.torments<15&&legal(a)&&affordable(a))return [a];if(state.time<state.shackleEnd&&state.torments<15)return [];if(legal(h)&&affordable(h))return [h];}
  // Save the harvest for a full torment sequence when ready; shackle itself can still be used between harvests.
 }
 if(key==='summoner'){
  // The mark prepays collection. Finish its free collector sequence before
  // considering unrelated attacks; direct-damage ranking must not reject the opener.
  if(state.chainPending&&state.time<=state.markEnd+1.5){const a=get(186),f=get(229);if(legal(a))return [a];if(legal(f))return [f];}
 }
 if(key==='villian'&&state.time<state.stealthEnd){if(state.time<state.revealEnd)return [];
 const special=[91,92,90].map(get).filter(s=>legal(s));if(special.length)return special;}
 const setups=setupNumbers.map(get).filter(s=>ready(s)&&([226,237,244].includes(s.nr)?!state.summons.some(p=>p.nr===s.nr&&p.until>state.time):s.nr===185?!state.chainPending||state.time>state.markEnd+1.5:s.nr===188?state.time>=state.stealthEnd&&[90,91,92].some(n=>ready(get(n))):cfg.maintainEnergyOfWrath||(!active(161)&&state.rage<55)));
 const pets=setups.filter(s=>[226,237,244].includes(s.nr));const marks=setups.filter(s=>[185,188].includes(s.nr));
 const ownBuffs=cfg.enableOwnBuffs?[...ownBuffNumbers].map(get).filter(s=>{if(!s||!ready(s)||active(s.nr)||(s.nr===150&&!state.summons.some(p=>p.nr!==237&&p.until>state.time)))return false;if([158,240].includes(s.nr)){const drain=s.effects.find(e=>e.type==='resourceDrain');return state.mana>=(val(drain.valueScaling,s.maxSkillLv)??drain.value);}return true;}).sort((a,b)=>{const score=s=>(skillValue(s,'manaRegen')>0?100000:0)+(skillValue(s,'wis')>0?10000:0)+Math.min(end(s),1800);return score(b)-score(a)||a.nr-b.nr;}):[];
 return [...ownBuffs,...pets,...marks,...(cfg.maintainEnergyOfWrath?setups.filter(s=>s.nr===161):[]),...allowed,...(cfg.maintainEnergyOfWrath?[]:setups.filter(s=>s.nr===161))];
 }
 if(key==='ritualist')event(1.5,function drain(){if(state.dead)return;state.health-=72;result.healthCosts+=72;if(state.health<=0){state.dead=true;result.deathAt=state.time;return;}event(state.time+1.5,drain);});
 if((cfg.prebuffOwnBuffs||cfg.preparedBuffNumbers?.length)&&cfg.enableOwnBuffs){
  for(const nr of cfg.preparedBuffNumbers??ownBuffNumbers){const s=get(nr);if(!s)continue;installOwnBuff(s);state.ready[nr]=Math.max(0,val(s.cooldownScaling,s.maxSkillLv)??s.cd??0);}
  const r=stats();state.mana=r.maxMana;state.health=r.maxHealth;result.initialMana=state.mana;result.initialHealth=state.health;
 }
 for(let i=0;i<=Math.round(cfg.duration/cfg.step);i++){
 state.time=round(i*cfg.step);state.buffs=state.buffs.filter(b=>b.until>state.time+1e-8);state.summons=state.summons.filter(p=>p.until>state.time+1e-8);
 if(state.dead||state.targetHealth<=0)break;
 if(i>0&&Math.abs(state.time/(cfg.manaRegenInterval??cfg.regenInterval)-Math.round(state.time/(cfg.manaRegenInterval??cfg.regenInterval)))<1e-7){const r=stats(),mp=Math.min(r.manaRegen,Math.max(0,r.maxMana-state.mana));state.mana+=mp;result.manaRegenerated+=mp;}
 if(cfg.enableOwnBuffs&&!cfg.permanentPrebuffs&&i>0&&Math.abs(state.time/(cfg.manaRegenInterval??cfg.regenInterval)-Math.round(state.time/(cfg.manaRegenInterval??cfg.regenInterval)))<1e-7)drainOwnBuffs();
 if(i>0&&Math.abs(state.time/cfg.regenInterval-Math.round(state.time/cfg.regenInterval))<1e-7){const r=stats(),hp=Math.min(r.healthRegen,Math.max(0,r.maxHealth-state.health));state.health+=hp;result.healthRegenerated+=hp;}
 const due=state.events.filter(e=>e.at<=state.time+1e-8);state.events=state.events.filter(e=>e.at>state.time+1e-8);for(const e of due)e.fn();
 if(state.cast&&state.cast.end<=state.time+1e-8){const s=state.cast.skill;state.cast=null;finish(s);}
 // Process same-time delayed impacts scheduled by a completed cast.
 const now=state.events.filter(e=>e.at<=state.time+1e-8);state.events=state.events.filter(e=>e.at>state.time+1e-8);for(const e of now)e.fn();
 const r=stats();state.health=Math.min(state.health,r.maxHealth);state.mana=Math.min(state.mana,r.maxMana);
 for(const p of state.summons)if(p.next<=state.time+1e-8){
  const skill=get(p.nr),attributes={...pre.knownAttributes};
  attributes.intelligence=(attributes.intelligence??0)+state.buffs.filter(b=>b.until>state.time+1e-8).reduce((sum,b)=>sum+(b.intelligenceBonus??0),0);
  attributes.dexterity=(attributes.dexterity??0)+(cfg.enableOwnBuffs?buffAttribute('dexterity'):0);
  const creature=summonedCreatureStats(skill,{attributes,stats:p.nr===237?{...r,maxHealth:r.maxHealth+500}:r,bond:get(134)});
  let amount=skill.summonedCreatureSettings.damageType==='physical'?creature.physicalAttack:creature.magicalAttack;
  if(cfg.enableOwnBuffs&&p.nr===226&&active(150))amount+=skillValue(get(150),'dex')*1.8;
  damage(p.nr,skill.skillName_de,'summon',amount);p.next+=1/summonRate(p.nr);
 }
 if(Math.abs(state.time-Math.round(state.time))<1e-7)result.manaTimeline.push({time:state.time,mana:state.mana,health:state.health,souls:state.souls,rage:state.rage});
 if(state.time>=cfg.duration||state.dead||state.targetHealth<=0)break;
 if(state.cast)continue;
 const reacting=state.time+1e-8<state.nextSkill;
 const autoRecovering=state.time+1e-8<state.autoSkillReady;
 const nonMeleeRate=['healer','luminet','ritualist'].includes(key)?cfg.mageAttacksPerSecond:key==='herbalist'?cfg.staffAttacksPerSecond:['hunter','summoner'].includes(key)?cfg.rangedAttacksPerSecond:null;
 const attackPeriod=Math.max(cfg.reactionSeconds,autoAttackInterval(r.attackSpeed,nonMeleeRate??cfg.baseAttacksPerSecond));
 const autoAllowedAt=cfg.skillToAutoSeconds==='attackInterval'?state.lastSkillFinishedAt+attackPeriod:state.nextAutoAllowed;
 const candidates=priorities().filter(s=>!autoRecovering&&(!reacting||[104,186].includes(s.nr)));const affordableCandidates=candidates.filter(affordable);let chosen=cfg.reserveManaForPriority&&candidates[0]&&!affordable(candidates[0])&&costs(candidates[0]).mana>state.mana?undefined:affordableCandidates[0];
 let waitingForSkill=cfg.attackMode==='skillsPreferred'&&cfg.reserveManaForPriority&&!chosen&&candidates[0]&&!affordable(candidates[0])?candidates[0]:null;
 const manaTick=cfg.manaRegenInterval??cfg.regenInterval;
 const affordableAt=(s,time,manaSpent=0)=>{const c=costs(s);const ticks=Math.max(0,Math.floor((time+1e-8)/manaTick)-Math.floor((state.time+1e-8)/manaTick));const mana=Math.min(r.maxMana,state.mana-manaSpent+ticks*r.manaRegen);return mana+1e-8>=c.mana&&state.health>c.health+1e-8&&state.rage+1e-8>=c.rage&&state.souls>=c.souls;};
 if(cfg.attackMode==='skillsPreferred'&&chosen&&(cfg.skillWaitLookaheadSeconds??0)>0&&attackNumbers.includes(chosen.nr)){
  const cast=Math.max(0,(chosen.castTimeSeconds??val(chosen.castTimeScaling,chosen.maxSkillLv)??0)-(chosen.timingModifiers?.castTimeIsFixed?0:modifiers(chosen).castTimeReduction))+(chosen.attackExecution?.channelTimeSeconds??0);
  const next=attacks.filter(s=>legal(s,true)&&(state.ready[s.nr]??0)>state.time+1e-8&&(state.ready[s.nr]??0)<=state.time+cfg.skillWaitLookaheadSeconds+1e-8&&rank(s)>rank(chosen)*(cfg.skillWaitPriorityRatio??1.5)&&affordableAt(s,state.ready[s.nr])).sort((a,b)=>rank(b)-rank(a)||state.ready[a.nr]-state.ready[b.nr])[0];
  if(next&&(state.time+cast+cfg.reactionSeconds>state.ready[next.nr]+1e-8||!affordableAt(next,state.ready[next.nr],costs(chosen).mana))){waitingForSkill=next;chosen=undefined;}
 }
 const manaBlocked=candidates.some(s=>costs(s).mana>state.mana+1e-8);
 if(manaBlocked&&!shortage){shortage={start:state.time,mana:state.mana,skill:candidates.find(s=>costs(s).mana>state.mana+1e-8).nr};result.firstManaShortageAt??=state.time;}
 if(!manaBlocked&&shortage){result.manaWarnings.push({...shortage,end:state.time,duration:state.time-shortage.start});shortage=null;}
 if(state.mana<=1e-8)result.firstEmptyManaAt??=state.time;
 let reason=null;
 if(chosen){if(autoOnly){result.autoOnlyPeriods.push({...autoOnly,end:state.time,duration:state.time-autoOnly.start});autoOnly=null;}start(chosen);if(chosen.nr===185&&!state.cast){const collector=get(186);if(legal(collector)&&affordable(collector))start(collector);}}
 else{
 reason=reacting?'reaction':autoRecovering?'autoRecovery':waitingForSkill?'waitingForPrioritySkill':manaBlocked?'mana':key==='villian'&&state.time<state.revealEnd?'stealthReturn':'cooldownsOrRequirements';
 if(!autoOnly||autoOnly.reason!==reason){if(autoOnly)result.autoOnlyPeriods.push({...autoOnly,end:state.time,duration:state.time-autoOnly.start});autoOnly={start:state.time,reason};}
 // A filler auto must fit completely before any affordable selected skill becomes ready.
 // Never let another auto renew the recovery lock and starve available skills.
 const recovery=Math.max(cfg.autoToSkillSeconds,cfg.reactionSeconds);
 let autoWouldDelaySkill=false;
 if(cfg.attackMode==='skillsPreferred'&&!reacting&&state.time+1e-8>=autoAllowedAt&&state.time>=state.nextAuto){
  autoWouldDelaySkill=autoRecovering;
  const nextManaTick=(Math.floor((state.time+1e-8)/manaTick)+1)*manaTick;
  const imminentSetups=setupNumbers.map(get).filter(s=>s&&([226,237,244].includes(s.nr)?!state.summons.some(p=>p.nr===s.nr&&p.until>state.time+recovery):s.nr===185?!state.chainPending||state.time>state.markEnd+1.5:s.nr===188?state.time>=state.stealthEnd&&[90,91,92].some(n=>ready(get(n))):cfg.maintainEnergyOfWrath||(!active(161)&&state.rage<55)));
  for(const s of [...attacks,...imminentSetups]){
   if(autoWouldDelaySkill)break;
   if(!legal(s,true))continue;
   if(waitingForSkill&&ready(s)&&rank(s)<rank(waitingForSkill))continue;
   const readyAt=Math.max(state.time,state.ready[s.nr]??0,state.nextSkill);
   if(readyAt<state.time+recovery-1e-8&&affordableAt(s,readyAt))autoWouldDelaySkill=true;
   else if(nextManaTick<state.time+recovery-1e-8&&readyAt<=nextManaTick&&affordableAt(s,nextManaTick))autoWouldDelaySkill=true;
  }
 }
 if(cfg.attackMode!=='skillsOnly'&&!autoWouldDelaySkill&&!reacting&&state.time+1e-8>=autoAllowedAt&&state.time>=state.nextAuto&&!(key==='villian'&&state.time<state.stealthEnd)){
 const magical=['herbalist','healer','luminet','ritualist'].includes(key);let amount=magical?r.magicalAttack:r.physicalAttack;for(const {e,b}of ownEffects('damageBonus'))if(e.appliesTo==='basicAttack'){const v=val(e.valueScaling,get(b.nr).maxSkillLv)??e.value;amount=e.unit==='fraction'?amount*(1+v):amount+v;}const row=ledger('auto','Auto-Attack','auto');row.applications++;damage('auto','Auto-Attack','auto',amount);row.firstUse??=state.time;row.lastUse=state.time;row.useTimes.push(state.time);state.autoSkillReady=round(state.time+Math.max(cfg.autoToSkillSeconds,cfg.reactionSeconds));const period=attackPeriod;state.nextAuto=(state.time-state.nextAuto>cfg.step+1e-7?state.time:state.nextAuto)+period;
 if(cfg.recordActionTimeline&&cfg.attackMode==='skillsPreferred')result.actionTimeline.push({time:state.time,nr:'auto',name:'Auto-Attack',manaBefore:state.mana,manaAfter:state.mana,recoveryUntil:state.autoSkillReady,waitingForSkill:waitingForSkill?.nr??null,readyAffordableSelectedSkillCount:affordableCandidates.length});
 if(cfg.enableOwnBuffs){for(const {e,b}of ownEffects('resourceGain'))if(e.resource==='mana'&&e.gainTrigger==='ownBasicAttack'&&(e.requiredActiveSkillNumbers??[]).every(active)&&get(b.nr).maxSkillLv>=(e.minimumSkillLevel??1)){const restored=Math.min(val(e.valueScaling,get(b.nr).maxSkillLv)??e.value,Math.max(0,r.maxMana-state.mana));state.mana+=restored;result.manaFromBuffAttacks+=restored;}
  for(const {e,b}of ownEffects('triggeredAttack'))if(e.applicationTrigger==='ownBasicAttackHit'){const bonus=(val(e.valueScaling,get(b.nr).maxSkillLv)??e.value)*e.additionalProjectileCount;damage(b.nr,get(b.nr).skillName_de,'skill',bonus);}
 }
 if(key==='gladiator'&&active(161))state.rage=Math.min(100,state.rage+1);
 if(state.explosive>0){state.explosive--;event(state.time+2,()=>{const s=get(47);const amount=skillValue(s,'patk')+casterAttackForDamage(s,skillStats(),'patk');damage(s.nr,s.skillName_de,'skill',amount);});}
 }
 }
 }
 if(shortage)result.manaWarnings.push({...shortage,end:Math.min(state.time,cfg.duration),duration:Math.min(state.time,cfg.duration)-shortage.start});
 if(autoOnly)result.autoOnlyPeriods.push({...autoOnly,end:Math.min(state.time,cfg.duration),duration:Math.min(state.time,cfg.duration)-autoOnly.start});
 result.durationSeconds=Math.min(state.time,cfg.duration);result.dps=result.totalDamage/result.durationSeconds;result.finalMana=state.mana;result.finalHealth=state.health;result.finalSouls=state.souls;result.finalRage=state.rage;result.remainingTargetHealth=Math.max(0,state.targetHealth);result.manaBlockedSeconds=result.autoOnlyPeriods.filter(p=>p.reason==='mana').reduce((a,p)=>a+p.duration,0);result.manaWaitPeriods=result.autoOnlyPeriods.filter(p=>p.reason==='mana'&&p.duration>=cfg.step-1e-8);result.manaWaitEpisodeCount=result.manaWaitPeriods.length;result.longestManaWaitSeconds=Math.max(0,...result.manaWaitPeriods.map(p=>p.duration));result.firstManaWaitAt=result.manaWaitPeriods[0]?.start;result.averageMinuteDamage=result.totalDamage/result.minutes.length;
 result.skills=Object.values(result.skills).sort((a,b)=>b.damage-a.damage);result.config=cfg;return result;
}


