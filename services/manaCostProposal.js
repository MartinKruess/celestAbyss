import {isAttackSkill} from './skillClassification.js';
import {curveValue,skillValue,evaluateDamageSkill} from './rotationDamage.js';

// Analysis only: this module never changes a skill or writes to the catalog.
export function skillBaseDamageByLevel(skill){
 const stats={physicalAttack:0,magicalAttack:0,criticalDamageBonus:0.8};
 return Array.from({length:skill.maxSkillLv},(_,i)=>{
  const atLevel={...skill,maxSkillLv:i+1};
  return evaluateDamageSkill(atLevel,stats).damage;
 });
}

export function proposeIntegerManaCurve(damageByLevel,factor=0.4){
 if(!damageByLevel.length||damageByLevel.some(x=>!Number.isFinite(x)||x<=0))throw Error('Positive damage required');
 if(!Number.isFinite(factor)||factor<=0)throw Error('Positive factor required');
 const first=damageByLevel[0],n=damageByLevel.length;
 const base=Math.max(1,Math.round(first*factor));
 if(n===1)return{type:'fixed',base};
 // Preserve doubling exactly, without accumulating rounding differences per rank.
 if(damageByLevel.every((x,i)=>Math.abs(x-first*2**i)<1e-7))
  return{type:'table',values:damageByLevel.map((_,i)=>base*2**i)};
 const damageStep=(damageByLevel[n-1]-first)/(n-1);
 if(damageByLevel.every((x,i)=>Math.abs(x-first-i*damageStep)<1e-7)){
  const perLevel=Math.round(damageStep*factor);
  if(perLevel===0)return{type:'fixed',base};
  if(base+(n-1)*perLevel>=1)return{type:'linear',base,perLevel};
 }
 // Hit count, field duration or explicit end-level jumps need a level table.
 return{type:'table',values:damageByLevel.map(x=>Math.max(1,Math.round(x*factor)))};
}

export function isDamageSkill(skill){
 return isAttackSkill(skill)&&
  Boolean(skillValue(skill,'patk')||skillValue(skill,'matk')||skill.effects?.some(e=>e.type==='periodicDamage'));
}

export function manaProposalForSkill(skill){
 const damageByLevel=skillBaseDamageByLevel(skill);
 const cost=skill.resourceCosts?.find(c=>c.resource==='mana');
 const notes=[];
 let status='referenceCurve';
 if(!cost){status='separateResource';notes.push('Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten.');}
 else if(cost.unit!=='flat'){status='percentageCost';notes.push('Prozentuale Sonderkosten nicht durch Fixkosten ersetzen.');}
 else if(curveValue(cost.scaling,skill.maxSkillLv)===0){status='zeroManaCombo';notes.push('Explizit kostenlose Kombo; keine neuen Manakosten vorschlagen.');}
 else if(skill.nr===36){status='explicitlyUnchanged';notes.push('Energieschlag ausdrücklich unverändert; Heiler weiterhin maximal Stufe 5.');}
 if(skill.resourceCosts?.some(c=>c.resource!=='mana'))notes.push('Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt.');
 if(skill.effects?.some(e=>e.type==='heal'))notes.push('Zusätzliche Heilung nicht in die Schadensbasis eingepreist.');
 if(skill.effects?.some(e=>['damageReplay','conditionalCriticalHit'].includes(e.type)))notes.push('Replay-/bedingte Kritmechanik gesondert prüfen.');
 if(skill.effects?.some(e=>e.type==='control'||e.controlKind||e.type==='statusResistance'))notes.push('Kontroll-/Zusatzeffekt gesondert bewerten.');
 if(skill.effects?.some(e=>e.type==='periodicDamage'&&e.periodicDamageKind==='areaAttack'))notes.push('Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden.');
 if([16,19,20,29,30,37,40,46,53,55,56,68,91,94,95,97,101,103,105,117,121,125,184,211,218].includes(skill.nr))notes.push('Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.');
 const rawAtMax=skillValue(skill,'patk')+skillValue(skill,'matk');
 if(damageByLevel.at(-1)>rawAtMax+1e-7)notes.push('Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.');
 const curve=status==='referenceCurve'&&damageByLevel.every(x=>x>0)?proposeIntegerManaCurve(damageByLevel):null;
 const currentManaByLevel=cost?.unit==='flat'?Array.from({length:skill.maxSkillLv},(_,i)=>curveValue(cost.scaling,i+1)):null;
 const proposedManaByLevel=curve?Array.from({length:skill.maxSkillLv},(_,i)=>curveValue(curve,i+1)):currentManaByLevel;
 return{nr:skill.nr,name:skill.skillName_de,levels:skill.maxSkillLv,status,requiresIndividualReview:notes.length>0,
  damageByLevel,damageChanges:[],currentManaCurve:cost?.scaling??null,currentManaUnit:cost?.unit??null,
  currentManaByLevel,proposedManaCurve:curve,proposedManaByLevel,notes};
}
