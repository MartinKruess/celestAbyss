import {curveValue,evaluateProgression} from './skillProgression.js';
import {resolveSkillAtLevel} from './skillLevel.js';
const close=(a,b)=>Math.abs(a-b)<1e-7;
const matches=(rule,values)=>values.every((v,i)=>close(evaluateProgression(rule,i+1),v));
function regular(values){
 const base=values[0],step=values[1]-base;
 if(values.every(v=>close(v,base)))return {kind:'constant',value:base};
 if(matches({kind:'linear',base,perLevel:step},values))return {kind:'linear',base,perLevel:step};
 if(values.length>=3&&base!==0){const factor=values[1]/base;if(factor>0&&matches({kind:'exponential',base,factor},values))return {kind:'exponential',base,factor};}
 if(values.length>=4){const quadratic=(values[2]-2*values[1]+base)/2,rule={kind:'polynomial',coefficients:[base,step-quadratic,quadratic]};if(matches(rule,values))return rule;}
 const deltas=values.slice(1).map((v,i)=>v-values[i]);
 for(let period=2;period<=Math.floor(deltas.length/2);period++){const rule={kind:'periodicSteps',base,steps:deltas.slice(0,period)};if(matches(rule,values))return rule;}
 if(values.length>=5){
  const slope=(values.at(-1)-base)/(values.length-1);
  for(const mode of ['round','floor','ceil'])for(const offset of [0,.25,.5,.75,-.25,-.5]){
   const rule={kind:'rounded',mode,rule:{kind:'linear',base:base+offset,perLevel:slope}};if(matches(rule,values))return rule;
  }
 }
 return null;
}
export function inferCurveRule(curve){
 if(curve.type==='fixed')return {kind:'constant',value:curve.base};
 if(curve.type==='linear')return {kind:'linear',base:curve.base,perLevel:curve.perLevel};
 const values=curve.values,formula=regular(values);if(formula)return formula;
 // Threshold plateaus stay at their final value unless a later threshold is defined.
 const deltas=values.slice(1).map((v,i)=>v-values[i]),changes=values.flatMap((value,i)=>i&&value!==values[i-1]?[{level:i+1,value}]:[]);
 if(changes.length<=Math.max(1,Math.floor(values.length/3))&&deltas.some(d=>d===0))return {kind:'thresholds',base:values[0],changes};
 // A one-time final milestone is retained as a persistent addition to normal growth.
 if(values.length>=6){const normal=regular(values.slice(0,-1));if(normal){const extra=values.at(-1)-evaluateProgression(normal,values.length);return {kind:'sum',terms:[normal,{kind:'thresholds',base:0,changes:[{level:values.length,value:extra}]}]};}}
 return {kind:'legacyTable',values:[...values],beyond:'requiresDefinition'};
}
export function buildSkillProgression(skill){
 const rules=[],extensionNeedsDefinition=[];
 const walk=(value,path=[])=>{
  if(!value||typeof value!=='object')return;
  if(['linear','table','fixed'].includes(value.type)&&(value.type!=='table'||Array.isArray(value.values)&&value.values.every(Number.isFinite))){
   if(value.type!=='table'&&!Number.isFinite(value.base))return;
   let rule=inferCurveRule(value);
   if(/cooldownScaling|castTimeScaling/.test(path.join('.')))rule={kind:'bounded',min:path.includes('cooldownScaling')?.1:0,rule};
   const context=path.join('.');
   if(context.startsWith('resourceCosts.')){const resource=skill.resourceCosts[Number(path[1])];rule={kind:'bounded',min:0,...(resource.unit==='fraction'?{max:1}:{}),rule};}
   rules.push({path,rule,source:value.type==='table'?'verifiedExistingLevels':'storedFormula'});return;
  }
  for(const [key,child]of Object.entries(value)){
   if(key==='levelProgression'||key==='skillLevelGrant')continue;
   if(Array.isArray(child)&&/ByLevel$/.test(key)&&child.length)extensionNeedsDefinition.push([...path,key].join('.'));
   walk(child,[...path,key]);
  }
 };
 walk(skill);
 const progression={version:1,rules,extensionNeedsDefinition};
 const candidate={...skill,levelProgression:progression};
 for(let index=0;index<(skill.resourceCosts?.length??0);index++){
  const cost=skill.resourceCosts[index],pricing=skill.manaPricing;
  if(cost.resource!=='mana'||cost.unit!=='flat'||!pricing||pricing.category==='combo'||!Number.isFinite(pricing.factor))continue;
  const entry=rules.find(e=>e.path.join('.')===`resourceCosts.${index}.scaling`);if(!entry)continue;
  const original=entry.rule;
  entry.rule={kind:'outputCost',factor:pricing.factor,basis:pricing.category==='heal'?'healing':'damage',minimum:0};
  try{
   for(let level=1;level<=skill.maxSkillLv;level++){
    const resolved=resolveSkillAtLevel(candidate,level);
    if(!close(curveValue(resolved.resourceCosts[index].scaling,level),curveValue(cost.scaling,level)))throw Error('Different cost');
   }
   entry.source='verifiedManaPricing';
  }catch{entry.rule=original;}
 }
 return progression;
}
