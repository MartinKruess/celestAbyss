export const ARMOR_SLOTS=Object.freeze([
 Object.freeze({key:'chest',name:'Brust',percent:30}),Object.freeze({key:'pants',name:'Hose',percent:26}),
 Object.freeze({key:'helmet',name:'Helm',percent:16}),Object.freeze({key:'gloves',name:'Handschuhe',percent:16}),Object.freeze({key:'boots',name:'Schuhe',percent:12}),
]);
export function allocateArmorTotal(total){
 if(!Number.isSafeInteger(total)||total<0||total>Number.MAX_SAFE_INTEGER/100)throw new RangeError('Armor total must be a nonnegative safe integer within calculation limits');
 const rows=ARMOR_SLOTS.map(s=>({...s,exact:total*s.percent/100,value:Math.floor(total*s.percent/100),remainder:total*s.percent%100}));
 const order=rows.map((r,index)=>({index,remainder:r.remainder})).sort((a,b)=>b.remainder-a.remainder||a.index-b.index);
 const missing=total-rows.reduce((n,r)=>n+r.value,0);
 for(let i=0;i<missing;i++)rows[order[i].index].value++;
 return rows.map(({remainder,...r})=>r);
}
export function allocateArmorDefense(physicalDefense,magicalDefense){
 const p=allocateArmorTotal(physicalDefense),m=allocateArmorTotal(magicalDefense);
 return p.map((row,i)=>({slot:row.key,slotName:row.name,percent:row.percent,physicalDefense:row.value,magicalDefense:m[i].value,exactPhysicalDefense:row.exact,exactMagicalDefense:m[i].exact}));
}
