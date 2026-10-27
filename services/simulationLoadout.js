import {conversionDelta} from './timedDamageSimulation.js';
import {permanentManaRegenMultiplier} from './permanentManaRegeneration.js';
import {equipmentUpgradeRule,applyLoadoutUpgrades} from './equipmentUpgrades.js';
const armorNames={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const attributes={'Stärke':'strength','Vita':'vitality','Wisdom':'wisdom','Intelligence':'intelligence','Dexterity':'dexterity','Agility':'agility','Faith':'faith','Vic':'victim','Ambush':'ambush','Int/Faith/Vic':'intelligence'};
const flat={'P.Ang':'physicalAttack','M.Ang':'magicalAttack','P.Deff':'physicalDefense','ATK Speed':'attackSpeed'};
export function simulationLoadout({key,rank,comparison,equipment,skills,model,upgrade=0,armorDefinition}){
 equipmentUpgradeRule(rank,upgrade);
 const pre=structuredClone(comparison.passiveRows.find(p=>p.key===key));
 if(!pre)throw Error('Unknown class');
 const changedAttributes={};
 for(const [r,sign]of [[6,-1],[rank,1]]){
  const armor=equipment.armor.find(a=>a.name===armorNames[key]&&a.rank===r);
  for(const [stat,value]of Object.entries(armor.raw))pre.stats[stat]+=sign*value;
  for(const name of pre.weapons){
   const weapon=equipment.weapons.find(w=>w.name===name&&w.rank===r);
   if(!weapon||weapon.comparisonBonuses?.length||weapon.comparisonEffects?.length)throw Error('Unsupported weapon bonuses');
   for(const bonus of weapon.raw){
    if(attributes[bonus.label]){const attr=attributes[bonus.label];changedAttributes[attr]=(changedAttributes[attr]??0)+sign*bonus.value;}
    else if(flat[bonus.label])pre.stats[flat[bonus.label]]+=sign*bonus.value/(bonus.label==='ATK Speed'?100:1);
    else if(!['Block','Krit Ch.'].includes(bonus.label))throw Error('Unhandled weapon bonus: '+bonus.label);
   }
  }
 }
 const regen=permanentManaRegenMultiplier(skills,pre.includedSkills);
 for(const [attribute,amount]of Object.entries(changedAttributes)){
  pre.knownAttributes[attribute]=(pre.knownAttributes[attribute]??0)+amount;
  for(const [stat,value]of Object.entries(conversionDelta(model,key,attribute,amount)))pre.stats[stat]=(pre.stats[stat]??0)+value*(stat==='manaRegen'?regen:1);
 }
 return applyLoadoutUpgrades(pre,{rank,upgrade,equipment,armorDefinition,armorClass:armorNames[key]});
}
