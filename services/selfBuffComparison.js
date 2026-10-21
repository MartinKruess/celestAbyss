import {isSelfBuff,isGroupBuff} from './skillClassification.js';
import {attributeConversionFactor} from './attributeConversion.js';
import {curveValue} from './rotationDamage.js';
import {conversionDelta} from './timedDamageSimulation.js';
import {skillForClass} from './skillLearningLevel.js';
import {permanentManaRegenMultiplier} from './permanentManaRegeneration.js';
import {normalizedSpeedBonus} from './attackSpeed.js';
const attributes={str:'strength',vita:'vitality',wis:'wisdom',int:'intelligence',dex:'dexterity',agi:'agility',luck:'luck',amb:'ambush',vic:'victim',faith:'faith'};
const direct={health:'maxHealth',mana:'maxMana',patk:'physicalAttack',matk:'magicalAttack',pdef:'physicalDefense',mdef:'magicalDefense',atkSpeed:'attackSpeed',movementSpeed:'movementSpeed',accuracy:'accuracy',dodge:'dodge',block:'block',penetration:'penetration',critDamageBonus:'criticalDamageBonus',critChanceRating:'critChanceRating',healthRegen:'healthRegen',manaRegen:'manaRegen'};
export function compareSelfBuffs({pre,skills,model,assignedNumbers}){
 const stats={...pre.stats},attributeBonuses={},flatBonuses={},buffs=[],excluded=[],notes=[];
 const selected=skills.filter(s=>assignedNumbers.includes(s.nr)&&s.category!=='creature'&&(isSelfBuff(s)||isGroupBuff(s))).map(s=>skillForClass(s,pre.key));
 const add=(key,value)=>{if(!Number.isFinite(value))throw Error('Nonfinite buff '+key);if(attributes[key])attributeBonuses[attributes[key]]=(attributeBonuses[attributes[key]]??0)+value;else if(direct[key])flatBonuses[direct[key]]=(flatBonuses[direct[key]]??0)+value;};
 for(const s of selected){
  if(s.nr===150){excluded.push({nr:s.nr,name:s.skillName_de,reason:'Nur Begleiter, keine Spieler.'});continue;}
  if(s.nr===107){excluded.push({nr:s.nr,name:s.skillName_de,reason:'Zielt auf verbündete Spieler; Selbstwirkung nicht ausdrücklich definiert.'});continue;}
  for(const key of [...Object.keys(attributes),...Object.keys(direct)]){
   // The legacy mana field normally stores activation cost, not a max-Mana bonus.
   if(key==='mana'&&!s.statScaling?.mana)continue;
   const value=curveValue(s.statScaling?.[key],s.maxSkillLv)??s[key];if(typeof value==='number')add(key,normalizedSpeedBonus(s,key,value));
  }
  for(const e of s.effects??[]){
   if(e.type==='statModifier'&&e.target==='self'){
    if(s.statScaling?.[e.stat]!==undefined||typeof s[e.stat]==='number')continue;
    const value=curveValue(e.valueScaling,s.maxSkillLv)??e.value;
    if(e.stat==='maxMana')flatBonuses.maxMana=(flatBonuses.maxMana??0)+value;
    else if(attributes[e.stat]||direct[e.stat])add(e.stat,value);
    else notes.push(`${s.skillName_de}: ${e.stat} nicht als Tabellenwert umgesetzt.`);
   }
  }
  const other=(s.effects??[]).filter(e=>e.type!=='statModifier').map(e=>{
   const v=curveValue(e.valueScaling,s.maxSkillLv)??e.value;
   if(e.type==='resourceDrain')return `Verbrauch: ${e.unit==='fraction'?v*100+' % Max-Mana':v+' Mana'} je MP-Tick; nicht von der Brutto-Regeneration abgezogen`;
   if(e.type==='resourceGain'&&e.resource==='mana')return `${v} Mana je eigenem Auto-Attack bei erfüllten Buffbedingungen; kein MP-Tick-Bonus`;
   if(e.type==='shield')return `Separater Schild: ${v*100} % Max-Leben; kein zusätzliches Max-Leben`;
   if(e.type==='threatMultiplier')return `Aggro-Faktor ${v}; kein Charakterattribut`;
   if(e.type==='damageBonus')return `${e.unit==='flat'?'+'+v+' ':''}${e.damageTypes?.includes('physical')?'Körperlicher ':e.damageTypes?.includes('magical')?'Magischer ':''}Zusatzschaden für ${e.appliesTo==='allSkills'?'Skills':'die definierte Angriffsart'}; nicht zum allgemeinen Angriff addiert${e.appliesTo==='allSkills'?'; kein Bonus für normale Auto-Attacks':''}`;
   return `${e.type}: kein allgemeiner Tabellenwert`;
  });
  buffs.push({nr:s.nr,name:s.skillName_de,level:s.maxSkillLv,durationSeconds:curveValue(s.durationScaling,s.maxSkillLv)??s.dur??null,notes:other});
 }
 // Apply temporary attribute exchanges after all other chosen attribute buffs.
 for(const s of selected){const e=s.attributeExchangeSettings;if(!e)continue;const source=attributes[e.sourceStat],dest=attributes[e.destinationStat];const exchanged=((pre.knownAttributes[source]??0)+(attributeBonuses[source]??0))*curveValue(e.sourceFractionScaling,s.maxSkillLv);attributeBonuses[source]=(attributeBonuses[source]??0)-exchanged;attributeBonuses[dest]=(attributeBonuses[dest]??0)+exchanged*e.destinationPointsPerSourcePoint;notes.push(`${s.skillName_de}: zuletzt aktiviert; ${exchanged.toFixed(2)} ${source} vorübergehend in ${dest} getauscht.`);}
 // Re-evaluate permanent attribute-dependent passives against the buffed attributes.
 for(const nr of pre.includedSkills){const cv=skills.find(s=>s.nr===nr)?.attributeConversionBonus;if(!cv)continue;const extra=attributeBonuses[attributes[cv.sourceStat]]??0;if(attributes[cv.targetStat])attributeBonuses[attributes[cv.targetStat]]=(attributeBonuses[attributes[cv.targetStat]]??0)+extra*attributeConversionFactor(skills.find(s=>s.nr===nr));else if(cv.targetStat==='maxMana')flatBonuses.maxMana=(flatBonuses.maxMana??0)+extra*attributeConversionFactor(skills.find(s=>s.nr===nr));}
 for(const [key,value]of Object.entries(attributeBonuses))for(const [stat,delta]of Object.entries(conversionDelta(model,pre.key,key,value)))stats[stat]=(stats[stat]??0)+delta;
 for(const [key,value]of Object.entries(flatBonuses))stats[key]=(stats[key]??0)+value;
 if(pre.specialAttributeAttack){const special=pre.specialAttributeAttack;stats[special.target]+=(attributeBonuses[special.attribute]??0)*special.factor;}
 stats.manaRegen=pre.stats.manaRegen+(stats.manaRegen-pre.stats.manaRegen)*permanentManaRegenMultiplier(skills,pre.includedSkills);
 for(const value of Object.values(stats))if(!Number.isFinite(value))throw Error('Invalid self-buff stats');
 return {...pre,stats,attributeBonuses,flatBonuses,buffs,excluded,notes};
}
