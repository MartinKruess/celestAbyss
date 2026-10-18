// JSON rules only: never execute expressions supplied by a database record.
export class UndefinedProgressionError extends Error {
 constructor(path,level){super(`No defined progression for ${path} at level ${level}`);this.name='UndefinedProgressionError';}
}
const finite=n=>typeof n==='number'&&Number.isFinite(n);
export function validateProgressionRule(rule,depth=0){
 if(!rule||depth>12)throw Error('Invalid progression rule');
 const number=k=>{if(!finite(rule[k]))throw Error('Invalid '+k);};
 switch(rule.kind){
 case 'constant':number('value');break;
 case 'linear':number('base');number('perLevel');break;
 case 'exponential':number('base');number('factor');if(rule.factor<0)throw Error('Negative factor');break;
 case 'polynomial':if(!Array.isArray(rule.coefficients)||!rule.coefficients.length||rule.coefficients.length>5||!rule.coefficients.every(finite))throw Error('Invalid polynomial');break;
 case 'periodicSteps':number('base');if(!Array.isArray(rule.steps)||!rule.steps.length||!rule.steps.every(finite))throw Error('Invalid steps');break;
 case 'thresholds':number('base');if(!Array.isArray(rule.changes)||!rule.changes.every(c=>Number.isInteger(c.level)&&c.level>=1&&finite(c.value)))throw Error('Invalid thresholds');break;
 case 'piecewise':if(!Array.isArray(rule.segments)||!rule.segments.length||rule.segments[0].fromLevel!==1)throw Error('Invalid segments');rule.segments.forEach((s,i)=>{if(!Number.isInteger(s.fromLevel)||s.fromLevel<1||(i&&s.fromLevel<=rule.segments[i-1].fromLevel))throw Error('Unordered segments');validateProgressionRule(s.rule,depth+1);});break;
 case 'sum':if(!Array.isArray(rule.terms)||!rule.terms.length)throw Error('Invalid sum');rule.terms.forEach(r=>validateProgressionRule(r,depth+1));break;
 case 'rounded':if(!['round','floor','ceil'].includes(rule.mode))throw Error('Invalid rounding');validateProgressionRule(rule.rule,depth+1);break;
 case 'bounded':if(rule.min!==undefined)number('min');if(rule.max!==undefined)number('max');if(rule.min>rule.max)throw Error('Invalid bounds');validateProgressionRule(rule.rule,depth+1);break;
 case 'legacyTable':if(!Array.isArray(rule.values)||!rule.values.length||!rule.values.every(finite)||rule.beyond!=='requiresDefinition')throw Error('Invalid legacy table');break;
 case 'outputCost':number('factor');if(rule.factor<0||!['damage','healing'].includes(rule.basis))throw Error('Invalid cost basis');break;
 default:throw Error('Unknown progression kind');
 }
 return true;
}
export function evaluateProgression(rule,level,{path='skill',output}={}){
 if(!Number.isInteger(level)||level<1)throw RangeError('Positive integer skill level required');
 let value;
 switch(rule.kind){
 case 'constant':value=rule.value;break;
 case 'linear':value=rule.base+(level-1)*rule.perLevel;break;
 case 'exponential':value=rule.base*rule.factor**(level-1);break;
 case 'polynomial':value=rule.coefficients.reduce((sum,c,i)=>sum+c*(level-1)**i,0);break;
 case 'periodicSteps':{const n=level-1,cycles=Math.floor(n/rule.steps.length);value=rule.base+cycles*rule.steps.reduce((a,b)=>a+b,0)+rule.steps.slice(0,n%rule.steps.length).reduce((a,b)=>a+b,0);break;}
 case 'thresholds':value=rule.changes.reduce((v,c)=>level>=c.level?c.value:v,rule.base);break;
 case 'piecewise':{const segment=rule.segments.filter(s=>s.fromLevel<=level).at(-1);if(!segment)throw Error('Missing segment');value=evaluateProgression(segment.rule,level-segment.fromLevel+1,{path,output});break;}
 case 'sum':value=rule.terms.reduce((sum,r)=>sum+evaluateProgression(r,level,{path,output}),0);break;
 case 'rounded':value=Math[rule.mode](evaluateProgression(rule.rule,level,{path,output}));break;
 case 'bounded':value=Math.max(rule.min??-Infinity,Math.min(rule.max??Infinity,evaluateProgression(rule.rule,level,{path,output})));break;
 case 'legacyTable':if(level>rule.values.length)throw new UndefinedProgressionError(path,level);value=rule.values[level-1];break;
 case 'outputCost':if(!output)throw Error('Output resolver required');value=Math.max(rule.minimum??0,Math.round(output(rule.basis)*rule.factor));break;
 default:throw Error('Unknown progression kind');
 }
 if(!Number.isFinite(value))throw RangeError('Non-finite progression result');
 return value;
}
export function curveValue(curve,level){
 if(!curve?.type)return undefined;
 if(curve.progressionRule)return evaluateProgression(curve.progressionRule,level,{output:curve.progressionOutput?basis=>curve.progressionOutput(level,basis):undefined});
 if(curve.type==='table'){
  if(level>curve.values.length)throw new UndefinedProgressionError('unconverted table',level);
  return curve.values[level-1];
 }
 return curve.base+(curve.type==='fixed'?0:(level-1)*curve.perLevel);
}
export function getPath(object,path){return path.reduce((v,k)=>v?.[k],object);}
export function setPath(object,path,value){let target=object;for(const key of path.slice(0,-1)){if(['__proto__','constructor','prototype'].includes(String(key)))throw Error('Unsafe path');target=target[key];if(!target)throw Error('Missing path');}const key=path.at(-1);if(['__proto__','constructor','prototype'].includes(String(key)))throw Error('Unsafe path');target[key]=value;}
export function attachProgressionRules(skill,{outputAtLevel}={}){
 if(!skill?.levelProgression)return skill;
 const copy=structuredClone(skill);
 const cache=new Map();
 for(const entry of copy.levelProgression.rules){
  if(entry.rule.kind==='outputCost'&&!outputAtLevel)continue;
  const curve=getPath(copy,entry.path);
  if(curve?.type)Object.defineProperty(curve,'progressionRule',{value:entry.rule,enumerable:false});
  if(curve?.type&&entry.rule.kind==='outputCost')Object.defineProperty(curve,'progressionOutput',{value:(level,basis)=>{const key=level+':'+basis;if(!cache.has(key))cache.set(key,outputAtLevel(level,basis));return cache.get(key);},enumerable:false});
 }
 return copy;
}
