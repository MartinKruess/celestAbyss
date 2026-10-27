import {conversionDelta} from './timedDamageSimulation.js';
import {attributeConversionFactor} from './attributeConversion.js';
import {permanentManaRegenMultiplier} from './permanentManaRegeneration.js';
import {equipmentUpgradeRule,applyLoadoutUpgrades} from './equipmentUpgrades.js';

const armorNames={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const attributes={'Stärke':'strength','Vita':'vitality','Wisdom':'wisdom','Intelligence':'intelligence','Dexterity':'dexterity','Agility':'agility','Faith':'faith','Vic':'victim','Ambush':'ambush','Int/Faith/Vic':'intelligence'};
const flat={'P.Ang':'physicalAttack','M.Ang':'magicalAttack','P.Deff':'physicalDefense','ATK Speed':'attackSpeed'};

// Changes to attributes also change permanent derived-attribute passives.
export function addReferenceAttributes(pre,changes,skills,model){
 const deltas={...changes};
 const aliases={vita:'vitality',str:'strength',dex:'dexterity'};
 for(const nr of pre.includedSkills??[]){
  const skill=skills.find(s=>s.nr===nr),cv=skill?.attributeConversionBonus;
  if(!cv)continue;
  const amount=(changes[aliases[cv.sourceStat]]??0)*attributeConversionFactor(skill);
  if(aliases[cv.targetStat])deltas[aliases[cv.targetStat]]=(deltas[aliases[cv.targetStat]]??0)+amount;
  else pre.stats[cv.targetStat]=(pre.stats[cv.targetStat]??0)+amount;
 }
 const regen=permanentManaRegenMultiplier(skills,pre.includedSkills);
 for(const [attribute,amount]of Object.entries(deltas)){
  pre.knownAttributes[attribute]=(pre.knownAttributes[attribute]??0)+amount;
  for(const [stat,value]of Object.entries(conversionDelta(model,pre.key,attribute,amount)))pre.stats[stat]=(pre.stats[stat]??0)+value*(stat==='manaRegen'?regen:1);
 }
}

export function progressionReference({key,level,rank,comparison,equipment,skills,model,levelOne,upgrade=0,armorDefinition}){
 equipmentUpgradeRule(rank,upgrade);
 if(level===1){
  const source=levelOne.rows.find(p=>p.key===key);
  return {key,name:source.name,weapons:[source.weapon.name],includedSkills:[],learnedSkillNumbers:[],knownAttributes:{},stats:{healthRegen:12,manaRegen:25,criticalDamageBonus:.8,...structuredClone(source.weaponOnlyStats)}};
 }
 const pre=structuredClone(comparison.passiveRows.find(p=>p.key===key));
 if(!pre)throw Error('Unknown class '+key);
 pre.name=pre.name.split(' / ')[0];
 // The legacy comparison still has a future, locked Ambush contribution.
 if(pre.specialAttributeAttack&&!model.plannedSpecialAttributeUnlock.activeInCurrentCalculation){pre.stats[pre.specialAttributeAttack.target]-=pre.specialAttributeAttack.amount;delete pre.specialAttributeAttack;}
 const changes={vitality:level-60,wisdom:level-60,strength:level-60,intelligence:level-60};
 for(const [r,sign]of [[6,-1],[rank,1]]){
  const armor=equipment.armor.find(a=>a.name===armorNames[key]&&a.rank===r);
  if(!armor)throw Error('Missing armor');
  for(const [stat,value]of Object.entries(armor.raw))pre.stats[stat]=(pre.stats[stat]??0)+sign*value;
  for(const [i,name]of pre.weapons.entries()){
   const weapon=equipment.weapons.find(w=>w.name===name&&w.rank===r);
   if(!weapon||weapon.comparisonBonuses?.length||weapon.comparisonEffects?.length)throw Error('Unsupported weapon');
   const efficiency=i===1&&['villian','gladiator','shaman'].includes(key)?.9:1;
   for(const bonus of weapon.raw){
    if(attributes[bonus.label]){const attr=attributes[bonus.label];changes[attr]=(changes[attr]??0)+sign*bonus.value;}
    else if(flat[bonus.label]){const stat=flat[bonus.label];pre.stats[stat]+=sign*bonus.value*(stat.endsWith('Attack')?efficiency:1)/(stat==='attackSpeed'?100:1);}
    else if(!['Block','Krit Ch.'].includes(bonus.label))throw Error('Unhandled weapon bonus '+bonus.label);
   }
  }
 }
 addReferenceAttributes(pre,changes,skills,model);
 applyLoadoutUpgrades(pre,{rank,upgrade,equipment,armorDefinition,armorClass:armorNames[key]});
 if(Object.values(pre.stats).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw Error('Nonfinite reference');
 return pre;
}

export function dpsSummary(values){
 if(!values.length||values.some(v=>!Number.isFinite(v)||v<0))throw Error('Invalid DPS sample');
 const sorted=[...values].sort((a,b)=>a-b),n=sorted.length;
 const mean=values.reduce((a,b)=>a+b,0)/n,median=n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2;
 return {count:n,mean,median,reference:(mean+median)/2,min:sorted[0],max:sorted.at(-1)};
}
