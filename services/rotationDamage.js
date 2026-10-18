import {curveValue,evaluateProgression} from './skillProgression.js';
export {curveValue} from './skillProgression.js';
export function skillValue(skill,key){const entry=skill.levelProgression?.rules.find(e=>e.path.length===2&&e.path[0]==='statScaling'&&e.path[1]===key);return entry?evaluateProgression(entry.rule,skill.maxSkillLv):curveValue(skill.statScaling?.[key],skill.maxSkillLv)??skill[key]??0;}
export function evaluateDamagePhase(skill,stats,phase){
 if(skill.maxSkillLv<(phase.minimumSkillLevel??1))return 0;
 const attack=phase.stat==='patk'?stats.physicalAttack:stats.magicalAttack;
 return (phase.baseDamage??skillValue(skill,phase.stat))+(phase.addsCasterAttack?attack:0);
}
export function evaluateSequenceHit(skill,stats,phase,{extraSkillBase=0,extraFlatDamage=0,totalMultiplier=1,baseMultiplier=1,physicalMultiplier=1,magicalMultiplier=1}={}){
 const p=skillValue(skill,'patk'),m=skillValue(skill,'matk');
 return ((p*baseMultiplier*phase.damageMultiplier+(p?stats.physicalAttack:0))*physicalMultiplier+(m*baseMultiplier*phase.damageMultiplier+(m?stats.magicalAttack:0))*magicalMultiplier+extraSkillBase*phase.damageMultiplier+extraFlatDamage)*totalMultiplier;
}
export function evaluateDamageSkill(skill,stats,{extraSkillBase=0,extraFlatDamage=0,totalMultiplier=1,baseMultiplier=1,physicalMultiplier=1,magicalMultiplier=1}={}){
  const level=skill.maxSkillLv,notes=[],p=skillValue(skill,'patk'),m=skillValue(skill,'matk');
  const execution=skill.attackExecution??{};
  const periodic=(skill.effects??[]).filter(e=>e.type==='periodicDamage');
  const periodicOnly=[9,112,202,239].includes(skill.nr);
  const hasPhysical=p!==0||(skill.nr===186&&skill.statScaling?.patk!==undefined);
  const single=(hasPhysical?p*baseMultiplier+stats.physicalAttack:0)*physicalMultiplier+(m?m*baseMultiplier+stats.magicalAttack:0)*magicalMultiplier+extraSkillBase+extraFlatDamage;
  let weight=1;
  if(execution.meteorWaveSequence?.length)weight=execution.meteorWaveSequence.reduce((a,h)=>a+h.damageFraction,0);
  else if(execution.hitSequence?.length)weight=execution.hitSequence.reduce((a,h)=>a+h.damageMultiplier,0);
  else if(execution.projectileWavesByLevel?.[level-1]?.counts)weight=execution.projectileWavesByLevel[level-1].counts.reduce((a,b)=>a+b,0);
  else weight=curveValue(execution.hitCountScaling,level)??execution.hitCount??execution.empoweredBasicAttacks??1;
  if(execution.guaranteedCriticalHit){weight*=1+stats.criticalDamageBonus;notes.push('Garantierter Crit ×1,8 eingerechnet.');}
  if((skill.effects??[]).some(e=>e.type==='conditionalCriticalHit')){weight+=stats.criticalDamageBonus;notes.push('Erster Treffer normal, zweiter garantiert kritisch; keine zufälligen Crits.');}
  let initial=periodicOnly?0:single*weight,periodicDamage=0,uncertainCasterAttackContribution=0;
  if(execution.damagePhases?.length){
    initial=execution.damagePhases.reduce((sum,phase)=>sum+evaluateDamagePhase(skill,stats,phase)*(phase.stat==='patk'?physicalMultiplier:magicalMultiplier),0);
    notes.push('Getrennte physische/magische Schadensphasen; ein Ziel in allen Phasen angenommen.');
  }
  if(execution.physicalHitBaseScaling?.length){
    initial=execution.physicalHitBaseScaling.reduce((sum,hit)=>sum+((hit.base+(level-1)*hit.perLevel)*baseMultiplier+extraSkillBase+stats.physicalAttack+extraFlatDamage)*physicalMultiplier,0);
    notes.push('Individuelle Grundschäden und voller P-Angriff je Treffer.');
  }
  if(execution.sequenceScalesSkillBaseOnly){
   initial=execution.hitSequence.reduce((sum,phase)=>sum+evaluateSequenceHit(skill,stats,phase,{extraSkillBase,extraFlatDamage,baseMultiplier,physicalMultiplier,magicalMultiplier}),0);
   notes.push('Skill-Grundschaden auf drei Phasen verteilt; voller Charakterangriff je Treffer.');
  }
  const ticks=[];
  for(const e of periodic){
    const duration=curveValue(e.durationScaling,level)??e.durationSeconds;
    const count=Math.max(0,Math.floor((duration-e.firstTickAfterSeconds+1e-8)/e.intervalSeconds)+1);
    let perTick;
    if(e.initialCalculatedDamageFraction!==undefined)perTick=initial*e.initialCalculatedDamageFraction;
    else {
      perTick=curveValue(e.valueScaling,level)??e.value;
      if(e.addsCasterMagicalAttack===true)perTick+=stats.magicalAttack;
      else if(e.addsCasterMagicalAttack===undefined){notes.push('Charakterangriff je DoT-Tick nicht definiert: Hauptwert zählt nur den gespeicherten Tick-Grundschaden.');uncertainCasterAttackContribution+=count*stats.magicalAttack;}
      perTick*=e.damageTypes?.includes('physical')&&!e.damageTypes.includes('magical')?physicalMultiplier:magicalMultiplier;
    }
    periodicDamage+=count*perTick;ticks.push({count,perTick});
  }
  if(skill.nr===211)notes.push('Aurora-Welle vorläufig einmal im Zentrum; Trefferzahl noch offen.');
  if([227,234].includes(skill.nr)&&!skill.statScaling?.patk)notes.push('Nur gespeicherter Grundwert; keine Max-Level-Steigerung hinterlegt.');
  if(skill.nr===99)notes.push('Charakter-M-Angriff vorläufig addiert; endgültige Beteiligung noch offen.');
  if(execution.empoweredBasicAttacks)notes.push('Drei ausgelöste Explosionspfeile enthalten; keine zusätzlichen normalen Auto-Attacks.');
  const total=(initial+periodicDamage)*totalMultiplier;
  if(!Number.isFinite(total)||total<0)throw Error('Invalid damage for '+skill.nr);
  return {nr:skill.nr,name:skill.skillName_de,level,cooldownSeconds:curveValue(skill.cooldownScaling,level)??skill.cd??null,physicalBase:p,magicalBase:m,characterPhysicalAttack:stats.physicalAttack,characterMagicalAttack:stats.magicalAttack,hitWeight:weight,initialDamage:initial*totalMultiplier,periodicDamage:periodicDamage*totalMultiplier,ticks,damage:total,uncertainCasterAttackContribution:uncertainCasterAttackContribution*totalMultiplier,notes};
}
