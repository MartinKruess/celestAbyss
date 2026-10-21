export const highlightedComparisonFields=['maxHealth','maxMana','physicalAttack','magicalAttack','physicalDefense','magicalDefense','healthRegen','manaRegen'];
export function comparisonHighlights(rows){
  const grouped=new Map();for(const row of rows){if(!grouped.has(row.key))grouped.set(row.key,[]);grouped.get(row.key).push(row.stats);}
  return Object.fromEntries(highlightedComparisonFields.map(field=>{
    const values=[...grouped.values()].map(variants=>variants.reduce((sum,s)=>sum+s[field],0)/variants.length).sort((a,b)=>a-b);
    if(!values.length||values.some(x=>!Number.isFinite(x)))throw Error('Invalid comparison values');
    const middle=Math.floor(values.length/2),median=values.length%2?values[middle]:(values[middle-1]+values[middle])/2;
    const tolerance=['maxHealth','maxMana'].includes(field)?500:Math.abs(median)*0.1;
    return [field,{median,mean:values.reduce((a,b)=>a+b,0)/values.length,tolerance,lower:median-tolerance,upper:median+tolerance,classCount:values.length}];
  }));
}
export function comparisonMarker(value,reference){return value<reference.lower?'🔴':value>reference.upper?'🟢':'🟡';}
