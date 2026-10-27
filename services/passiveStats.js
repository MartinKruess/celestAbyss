import { resolveSkillAtLevel } from './skillLevel.js';
import { learnableSkillLevel } from './skillLearningLimits.js';

const keys={vita:'vitality',str:'strength',int:'intelligence',wis:'wisdom',dex:'dexterity',agi:'agility',luck:'luck',
  patk:'physicalAttack',matk:'magicalAttack',pdef:'physicalDefense',mdef:'magicalDefense',atkSpeed:'attackSpeed',
  maxHealth:'maxHealth',maxMana:'maxMana',healthRegen:'healthRegen',manaRegen:'manaRegen',movementSpeed:'movementSpeed',
  block:'block',penetration:'penetration',accuracy:'accuracy',dodge:'dodge',critChanceRating:'critChanceRating',criticalDamageBonus:'criticalDamageBonus'};

// Numeric runtime data, independent of translated/rounded tooltip strings.
export function buildPassiveStatColumns(skill,classKey) {
  if(skill.type!=='passive')return [];
  const max=learnableSkillLevel(skill,classKey),columns=new Map();
  const add=(rank,key,amount,fraction=false,source='')=>{
    if(!key||!Number.isFinite(amount)||Math.abs(amount)>1e9)return;
    const id=[key,fraction,source].join(':');
    if(!columns.has(id))columns.set(id,{key,fraction,sourceAttribute:source,values:Array(max).fill(0)});
    columns.get(id).values[rank-1]+=amount;
  };
  for(let rank=1;rank<=max;rank++) {
    const s=resolveSkillAtLevel(skill,rank,{classKey});
    const conditional=Boolean(s.triggerCondition||s.activation==='automatic'||s.dur>0);
    // These two definitions explicitly separate permanent attributes from their triggers.
    const permanentKeys=s.nr===243?['str']:s.nr===177?['wis']:[];
    for(const [legacy,key]of Object.entries(keys))
      if(!conditional||permanentKeys.includes(legacy)) add(rank,key,s[legacy],s.statBonusUnits?.[legacy]==='fraction');
    if(s.nr===203)add(rank,'maxMana',s.mana);
    if(!conditional && !(s.effects??[]).some(e=>e.type==='resourceDrain'))
      for(const e of s.effects??[])
        if(e.type==='statModifier'&&e.target==='self'&&!e.durationSeconds&&!e.endWith&&rank>=(e.minimumSkillLevel??1))
          add(rank,keys[e.stat],e.value,e.unit==='fraction');
    const c=s.attributeConversionBonus;
    if(c&&(!conditional||s.nr===243))add(rank,keys[c.targetStat],c.amountPerPoint,false,keys[c.sourceStat]);
  }
  return [...columns.values()];
}
