import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [armor,classes,attributes,model]=await Promise.all(['data/balancing/armor-parts.json','data/balancing/class-baselines.json','data/balancing/attribute-model.json','data/balancing/armor-defense-model.json'].map(read));
const aliases={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const rows=classes.classes.map(c=>{
 const name=aliases[c.key],base=c.baseStats.magicalDefense;
 const mods=attributes.wisdomClassModifiers;
 const factor=attributes.conversions.find(r=>r.attribute==='wisdom'&&r.target==='magicalDefense').amountPerPoint*(mods?.classTargetMultipliers?.[c.key]?.magicalDefense??mods?.classMultipliers?.[c.key]??1);
 const sets=armor.sets.filter(s=>s.name===name).sort((a,b)=>a.rank-b.rank);
 assert.equal(sets.length,6);
 const anchorArmor=sets.find(s=>s.rank===4).raw.magicalDefense;
 const divisor=(base+59*factor+anchorArmor)/60;
 const targets=Object.fromEntries([2,3,5,6].map(rank=>{
  const level=(rank-1)*20;
  return [rank,Math.ceil(level*divisor-base-(level-1)*factor-1e-9)];
 }));
 const points=sets.map(s=>{
  const level=s.rank===1?1:(s.rank-1)*20;
  const after=targets[s.rank]??s.raw.magicalDefense;
  const nakedDefense=base+(level-1)*factor;
  const effectiveLevel=(nakedDefense+(s.rank===1?0:after))/divisor;
  if(s.rank>1){assert.ok(effectiveLevel>=level-1e-9);assert.ok(effectiveLevel-level<1/divisor+1e-9);}
  return {rank:s.rank,level,before:s.raw.magicalDefense,after,delta:after-s.raw.magicalDefense,effectiveLevel};
 });
 for(let i=1;i<points.length;i++)assert.ok(points[i].after>=points[i-1].after);
 return {key:c.key,name,anchorArmor,base,factor,divisor,targets,points};
});
assert.equal(rows.length,13);
if(process.argv.includes('--apply')){
 const backup=`data/balancing/history/before-r4-magical-calibration-${Date.now()}`;
 await fs.mkdir(backup,{recursive:true});
 for(const file of ['armor-defense-model.json','armor-parts.json','ranked-equipment.json','r6-equipment.json','armor-database-manifest.json','class-comparison-level60.json'])await fs.copyFile(`data/balancing/${file}`,`${backup}/${file}`);
 model.magicalDefenseByClassAndRank=Object.fromEntries(rows.map(r=>[r.name,r.targets]));
 model.magicalCalibration={anchorRank:4,anchorLevel:60,changedRanks:[2,3,5,6],preservedRanks:[1,4],physicalDefense:'unchanged',baseDefense:'unchanged',level1:'Unarmored class baseline only; no R1 gear included',rounding:'Ceil aggregate magical defense target, tolerate 1e-9 floating point noise, then distribute whole points across five slots'};
 await fs.writeFile('data/balancing/armor-defense-model.json',JSON.stringify(model,null,2)+'\n');
 await fs.writeFile('data/balancing/r4-magical-calibration-decision.json',JSON.stringify({status:'localModelApplied',backup,scope:model.magicalCalibration,rows},null,2)+'\n');
}
console.log(JSON.stringify({mode:process.argv.includes('--apply')?'localModelApplied':'preview',classes:rows.length,changedSets:rows.flatMap(r=>r.points).filter(p=>p.delta!==0).length,targets:rows.map(r=>({name:r.name,targets:r.targets}))},null,2));
