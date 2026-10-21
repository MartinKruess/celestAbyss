import {curveValue} from './rotationDamage.js';
import {skillForClass} from './skillLearningLevel.js';

export function simulateHealingMana({pre,skills,duration=120,manaTickSeconds=3,reactionSeconds=.1,step=.01}){
 const allowed=[58,124,78,64,108];
 const spells=allowed.map(n=>skillForClass(skills.find(s=>s.nr===n),'healer')).filter(Boolean);
 const rows=spells.map(s=>{const lv=s.maxSkillLv,cost=s.resourceCosts.find(c=>c.resource==='mana');
  if(cost?.unit!=='flat')throw Error('Flat Mana required');
  return{nr:s.nr,name:s.skillName_de,level:lv,manaPerUse:curveValue(cost.scaling,lv),cooldown:curveValue(s.cooldownScaling,lv)??s.cd??0,cast:s.castTimeSeconds??curveValue(s.castTimeScaling,lv)??0,uses:[],completions:[],spent:0};});
 const maxMana=pre.stats.maxMana,regen=pre.stats.manaRegen;
 let mana=maxMana,minMana=mana,minAt=0,spent=0,regenerated=0,nextAction=0,casting=null,aura=null;
 const ready={},timeline=[],shortages=[],auraPeriods=[],regenEvents=[];
 function endAura(time,reason){if(aura){auraPeriods.push({start:aura.start,end:time,reason,duration:Number((time-aura.start).toFixed(8))});aura=null;}}
 function finish(row,time){row.completions.push(time);if(row.nr===108){endAura(time,'replaced');aura={start:time,end:time+12};}nextAction=time+reactionSeconds;}
 for(let i=0;i<=Math.round(duration/step);i++){
  const time=Number((i*step).toFixed(8));
  if(i>0&&Math.abs(time/manaTickSeconds-Math.round(time/manaTickSeconds))<1e-7){const amount=Math.min(regen,maxMana-mana);mana+=amount;regenerated+=amount;regenEvents.push({time,amount,mana});}
  if(aura&&aura.end<=time+1e-8)endAura(aura.end,'completed');
  if(casting&&casting.end<=time+1e-8){finish(casting.row,casting.end);casting=null;}
  if(time>=duration-1e-8)break;
  if(!casting&&time>=nextAction-1e-8){
   const available=rows.filter(r=>(ready[r.nr]??0)<=time+1e-8);
   const row=available.find(r=>r.manaPerUse<=mana+1e-8);
   if(available.length&&!row)shortages.push({time,mana});
   if(row){
    if(row.nr!==108)endAura(time,'otherHeal');
    mana-=row.manaPerUse;spent+=row.manaPerUse;row.spent+=row.manaPerUse;row.uses.push(time);
    ready[row.nr]=time+row.cast+row.cooldown;
    timeline.push({time,skill:row.nr,name:row.name,spent:row.manaPerUse,mana});
    if(mana<minMana){minMana=mana;minAt=time;}
    if(row.cast>0)casting={row,end:Number((time+row.cast).toFixed(8))};else finish(row,time);
   }
  }
 }
 endAura(duration,'testEnd');
 return{durationSeconds:duration,initialMana:maxMana,finalMana:mana,minimumMana:minMana,minimumAt:minAt,manaSpent:spent,manaSpentPerMinute:spent*60/duration,
 manaRegenPerTick:regen,manaTickSeconds,potentialRegen:regen*Math.floor(duration/manaTickSeconds),potentialRegenPerMinute:regen*60/manaTickSeconds,
 actualRegenerated:regenerated,discardedRegeneration:regen*Math.floor(duration/manaTickSeconds)-regenerated,skills:rows,timeline,regenEvents,auraPeriods,
 unaffordableFrames:shortages.length,firstShortage:shortages[0]??null,
 assumptions:{fullPool:true,allCooldownsReady:true,allHealsUseful:true,priority:allowed,excluded:[207],optionalBuffs:false,attacks:false,potions:false,castBlocks:true,cooldownStartsAfterCast:true,reactionSeconds,auraCanBeInterrupted:true,actualHealingNotSimulated:true}};
}
