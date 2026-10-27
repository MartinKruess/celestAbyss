import {attachProgressionRules,curveValue,evaluateProgression,getPath,setPath,UndefinedProgressionError} from './skillProgression.js';
import {evaluateDamageSkill} from './rotationDamage.js';
import {learnableSkillLevel} from './skillLearningLimits.js';
import {skillClassVariant} from './skillClassVariant.js';

function baseOutput(out,basis){
 const level=out.maxSkillLv;
 if(basis==='damage')return evaluateDamageSkill(out,{physicalAttack:0,magicalAttack:0,criticalDamageBonus:.8}).damage;
 const healing=(out.effects??[]).filter(e=>e.type==='heal');
 if(!healing.length)return curveValue(out.statScaling?.health,level)??out.health??0;
 return healing.reduce((sum,e)=>{const value=curveValue(e.valueScaling,level)??e.value??0;if(!e.intervalSeconds)return sum+value;const duration=curveValue(e.durationScaling,level)??e.durationSeconds??out.dur??0;return sum+value*Math.max(0,Math.floor((duration-(e.firstTickAfterSeconds??e.intervalSeconds)+1e-8)/e.intervalSeconds)+1);},0);
}
export function skillOutputAtLevel(definition,level,basis){
 const copy={...definition,maxSkillLv:Math.max(level,definition.maxSkillLv)};
 if(definition.levelProgression)copy.levelProgression={...definition.levelProgression,rules:definition.levelProgression.rules.filter(e=>e.rule.kind!=='outputCost')};
 return baseOutput(resolveSkillAtLevel(copy,level),basis);
}

export function resolveSkillAtLevel(definition,learnedLevel,{classKey,bonusLevels=0,authorizedBonusLevels=0}={}){
 definition=skillClassVariant(definition,classKey);
 if(!Number.isInteger(learnedLevel)||learnedLevel<1)throw RangeError('Invalid learned level');
 if(!Number.isInteger(bonusLevels)||bonusLevels<0||bonusLevels>authorizedBonusLevels)throw RangeError('Unauthorized bonus level');
 const cap=classKey?learnableSkillLevel(definition,classKey):definition.maxSkillLv;
 if(learnedLevel>cap)throw RangeError('Learned level exceeds class limit');
 const level=learnedLevel+bonusLevels;
 const runtime=attachProgressionRules(definition),out=structuredClone(definition);
 out.definitionMaxSkillLv=definition.maxSkillLv;out.learnableMaxSkillLv=cap;out.learnedLevel=learnedLevel;out.effectiveSkillLevel=level;out.maxSkillLv=level;
 for(const path of definition.levelProgression?.extensionNeedsDefinition??[]){const values=getPath(definition,path.split('.'));if(Array.isArray(values)&&level>values.length)throw new UndefinedProgressionError(path,level);}
 const entries=definition.levelProgression?.rules??[];
 for(const entry of entries){
  if(entry.rule.kind==='outputCost')continue;
  const value=evaluateProgression(entry.rule,level,{path:entry.path.join('.')});
  setPath(out,entry.path,{type:'fixed',base:value});
 }
 // Older definitions are usable inside their tables but never invent an extra level.
 if(!definition.levelProgression){
  const visit=(value,path=[])=>{if(!value||typeof value!=='object')return;if(value.type&&['linear','table','fixed'].includes(value.type)){setPath(out,path,{type:'fixed',base:curveValue(value,level)});return;}for(const[k,v]of Object.entries(value))visit(v,[...path,k]);};visit(runtime);
 }
 const output=basis=>baseOutput(out,basis);
 for(const entry of entries.filter(e=>e.rule.kind==='outputCost'))setPath(out,entry.path,{type:'fixed',base:evaluateProgression(entry.rule,level,{output})});
 for(const [stat,curve]of Object.entries(out.statScaling??{}))out[stat]=curveValue(curve,level);
 for(const [field,path]of Object.entries({cd:'cooldownScaling',dur:'durationScaling',castTimeSeconds:'castTimeScaling'}))if(out[path])out[field]=curveValue(out[path],level);
 for(const e of out.effects??[]){if(e.valueScaling)e.value=curveValue(e.valueScaling,level);if(e.durationScaling)e.durationSeconds=curveValue(e.durationScaling,level);}
 for(const [attribute,curve]of Object.entries(out.skillLevelGrant?.attributeCostScaling??{}))out.skillLevelGrant.attributeCost[attribute]=curveValue(curve,level);
 if(out.resurrectionSettings?.restoredHealthScaling)out.resurrectionSettings.restoredHealth=curveValue(out.resurrectionSettings.restoredHealthScaling,level);
 if(out.attributeConversionBonus?.amountPerPointScaling)out.attributeConversionBonus.amountPerPoint=curveValue(out.attributeConversionBonus.amountPerPointScaling,level);
 const mana=out.resourceCosts?.find(c=>c.resource==='mana'&&c.unit==='flat');if(mana)out.mana=curveValue(mana.scaling,level);
 return out;
}

// Called with trusted character state, never a client-authorized level grant.
export function resolveCharacterSkillLevels({catalog,classKey,learnedSkills,forgottenSpellTargetId}){
 const classes={druid:['Druide','Alchemist'],shaman:['Shamane','High Elves'],healer:['Healer','Priest'],gladiator:['Gladiator','Berserker'],butcher:['Butcher','Destroyer'],knight:['Knight','Templar','Ritter','Tempelritter'],adventurer:['Adventure','Adventurer','Abenteuer','Scout'],hunter:['Hunter','Archer'],summoner:['Summoner','Soulseeker'],villian:['Villian','Shadowwarrior'],herbalist:['Herbalist','Witcher'],luminet:['Luminet','Lightmage'],ritualist:['Ritualist','Bloodmage']};
 if(!classes[classKey])throw Error('Unknown class');
 const records=new Map();
 for(const state of learnedSkills){const definition=catalog.find(s=>String(s._id)===String(state.skillId));if(!definition||records.has(String(state.skillId)))throw Error('Unknown or duplicate learned skill');if(!definition.charClass.some(c=>classes[classKey].includes(c)))throw Error('Skill not allowed for class');records.set(String(state.skillId),{definition,level:state.level});}
 if([...records.values()].some(r=>r.definition.nr===222&&r.level>0)&&!forgottenSpellTargetId)throw Error('Forgotten Spell requires a selected learned skill');
 let target,grant;
 if(forgottenSpellTargetId){
  const source=[...records.values()].find(r=>r.definition.nr===222&&r.level>0);
  if(classKey!=='druid'||!source?.definition.skillLevelGrant)throw Error('Forgotten Spell not learned');
  grant=resolveSkillAtLevel(source.definition,source.level,{classKey}).skillLevelGrant;target=records.get(String(forgottenSpellTargetId));
  if(!target||target.level<1||(grant.excludesSelf&&target.definition.nr===222))throw Error('Invalid Forgotten Spell target');
 }
 const skills=[...records.values()].map(r=>resolveSkillAtLevel(r.definition,r.level,{classKey,bonusLevels:r===target?grant.levels:0,authorizedBonusLevels:r===target?grant.levels:0}));
 const attributeModifiers=grant?Object.fromEntries(Object.entries(grant.attributeCost).map(([key,value])=>[key,-value])):{};
 return {skills,attributeModifiers,attributeCostSource:grant?222:null};
}
