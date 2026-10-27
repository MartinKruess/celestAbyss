import { characterError } from './characterPolicy.js';

export function normalizeToolbarSkills(value, learnedSkills, inventoryState) {
  const fail=()=>{throw characterError('INVALID_TOOLBAR_SKILLS',400);};
  if(!Array.isArray(value)||value.length>29||!Array.isArray(learnedSkills)) fail();
  const learned=new Set(learnedSkills.filter(s=>s.level>0).map(s=>s.number)), slots=new Set(), numbers=new Set();
  return value.map(b=>{
    if(!b||Object.keys(b).sort().join(',')!=='bar,index,number'||!Number.isInteger(b.bar)||b.bar<0||b.bar>3
      ||!Number.isInteger(b.index)||b.index<0||b.index>(b.bar<2?9:b.bar===2?4:3)||!Number.isSafeInteger(b.number)||b.number<1||b.number>2147483647
      ||!learned.has(b.number)||slots.has(b.bar*10+b.index)||numbers.has(b.number)
      ||(b.bar===0&&inventoryState?.toolbar?.[b.index])) fail();
    slots.add(b.bar*10+b.index);numbers.add(b.number);return {bar:b.bar,index:b.index,number:b.number};
  }).sort((a,b)=>a.bar-b.bar||a.index-b.index);
}
