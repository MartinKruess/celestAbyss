import {monsterArmorReduction} from './combatDefense.js';

// Stationary pack: separate health pools, capped area hits, no spillover on kills.
export function createEnemyPack(enemies,{playerLevel=60,focus='addsFirst'}={}) {
 const members=enemies.map(e=>({...e,health:e.stats.maxHealth,nextHit:e.attackInterval}));
 const hits=[],deaths=[];
 const alive=()=>members.filter(e=>e.health>1e-8);
 const ordered=()=>alive().sort((a,b)=>focus==='leaderFirst'?Number(b.leader)-Number(a.leader):Number(a.leader)-Number(b.leader));
 return {members,hits,deaths,get health(){return alive().reduce((n,e)=>n+e.health,0);},
  resolveHit({raw,physicalShare,skill,kind,time}) {
   const area=skill?.attackArea;
   const areaDamage=kind==='skill'&&skill?.attackExecution?.targetMode!=='singleEnemy'&&(
    area?.target==='enemiesInArea'||(area?.maxTargets??0)>1||
    (skill?.effects??[]).some(e=>e.type==='statModifier'&&e.target==='enemiesInArea')&&skill.nr===40);
   const cap=areaDamage?(area?.maxTargetsFrom==='ownGroupMembersCurrentlyInAreaIncludingCaster'?1:area?.maxTargets??Infinity):1;
   const targets=ordered().slice(0,cap);
   let amount=0,rawDamage=0,prevented=0,overkill=0;
   for(const e of targets){
    const reduction=physicalShare*monsterArmorReduction(e.stats.physicalDefense,playerLevel)+(1-physicalShare)*monsterArmorReduction(e.stats.magicalDefense,playerLevel);
    const mitigated=raw*(1-reduction),effective=Math.min(e.health,mitigated);
    e.health=Math.max(0,e.health-effective);amount+=effective;rawDamage+=raw;prevented+=raw-mitigated;overkill+=mitigated-effective;
    hits.push({time,nr:skill?.nr??kind,target:e.id,raw,amount:effective});
    if(e.health<=1e-8){e.health=0;deaths.push({time,id:e.id});}
   }
   return {amount,rawDamage,prevented,overkill};
  },
  dueAttackers(time){const due=alive().filter(e=>time+1e-8>=e.nextHit);for(const e of due)e.nextHit+=e.attackInterval;return due;}
 };
}
