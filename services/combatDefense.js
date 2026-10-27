const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
export const defenseReferenceRules=Object.freeze({physicalPlayerDivisor:3.268,magicalPlayerDivisor:3.248,monsterDivisor:25/6});
function validate(defense,level){if(!Number.isFinite(defense)||defense<0||!Number.isFinite(level)||level<=0)throw new RangeError('Invalid defense or attacker level');}
export function playerArmorReduction(defense,attackerLevel,type='physical'){
 validate(defense,attackerLevel);
 if(!['physical','magical'].includes(type))throw new TypeError('Unknown damage type');
 if(defense===0)return 0;
 const divisor=type==='physical'?defenseReferenceRules.physicalPlayerDivisor:defenseReferenceRules.magicalPlayerDivisor;
 return clamp(1-0.5*attackerLevel*divisor/defense,0,1);
}
export function monsterArmorReduction(defense,attackerLevel){
 validate(defense,attackerLevel);
 const ratio=defense/defenseReferenceRules.monsterDivisor/attackerLevel;
 return clamp(ratio<=1?0.1+0.2*ratio:0.3+(ratio-1),0.1,1);
}
