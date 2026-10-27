import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [armor,baseline,attributes,model]=await Promise.all(['data/balancing/armor-parts.json','data/balancing/class-baselines.json','data/balancing/attribute-model.json','data/balancing/armor-defense-model.json'].map(read));
const aliases={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const previousDecision=await read('data/balancing/r4-armor-calibration-decision.json').catch(e=>{if(e.code==='ENOENT')return null;throw e;});
const rows=baseline.classes.map(c=>{
 const name=aliases[c.key],mods=attributes.vitalityClassModifiers;
 const factor=attributes.conversions.find(r=>r.attribute==='vitality'&&r.target==='physicalDefense').amountPerPoint*(mods?.classTargetMultipliers?.[c.key]?.physicalDefense??mods?.classMultipliers?.[c.key]??1);
 const currentR4=armor.sets.find(s=>s.name===name&&s.rank===4).raw.physicalDefense;
 // Absolute approved anchor makes rerunning this script idempotent.
 const anchorArmor=name==='Gladiator'?169:currentR4;
 const divisor=(c.baseStats.physicalDefense+59*factor+anchorArmor)/60;
 const targets=Object.fromEntries([2,3,5,6].map(rank=>{
  const level=(rank-1)*20;
  return [rank,Math.ceil(level*divisor-c.baseStats.physicalDefense-(level-1)*factor-1e-9)];
 }));
 if(name==='Gladiator')targets[4]=169;
 if(model.physicalDefenseByClassAndRank?.[name]?.[1]!==undefined)targets[1]=model.physicalDefenseByClassAndRank[name][1];
 const actual=armor.sets.filter(s=>s.name===name).sort((a,b)=>a.rank-b.rank);
 const resulting=actual.map(s=>targets[s.rank]??s.raw.physicalDefense);
 for(let i=1;i<resulting.length;i++)assert.ok(resulting[i]>=resulting[i-1]);
 return {key:c.key,name,anchorArmor,divisor,targets,before:Object.fromEntries(actual.map(s=>[s.rank,s.raw.physicalDefense])),after:Object.fromEntries(actual.map(s=>[s.rank,targets[s.rank]??s.raw.physicalDefense]))};
});
assert.equal(rows.length,13);
assert.equal(rows.find(r=>r.name==='Gladiator').targets[6],287);
const targets=Object.fromEntries(rows.map(r=>[r.name,r.targets]));
if(process.argv.includes('--apply')){
 if(previousDecision?.status==='localModelApplied')assert.deepEqual(model.physicalDefenseByClassAndRank,targets);
 const backup=`data/balancing/history/before-r4-physical-calibration-${Date.now()}`;
 await fs.mkdir(backup,{recursive:true});
 for(const file of ['armor-defense-model.json','armor-parts.json','ranked-equipment.json','r6-equipment.json','armor-database-manifest.json','class-comparison-level60.json'])await fs.copyFile(`data/balancing/${file}`,`${backup}/${file}`);
 model.physicalDefenseByClassAndRank=targets;
 model.physicalCalibration={rounding:'Ceil physical set totals to ensure effective level never falls below target; tolerate 1e-9 floating point noise',anchorRank:4,anchorLevel:60,changedRanks:[2,3,5,6],specialAnchor:{class:'Gladiator',physicalDefense:169,reduction:35},preservedRanks:[1],magicalDefense:'unchanged',rule:'Override final physical set totals after historical scaling; each class calibrated independently. R2 through R6 calibrated; R1 retained as starter exception.'};
 await fs.writeFile('data/balancing/armor-defense-model.json',JSON.stringify(model,null,2)+'\n');
 await fs.writeFile('data/balancing/r4-armor-calibration-decision.json',JSON.stringify({status:'localModelApplied',backup,scope:model.physicalCalibration,rows,inputHash:createHash('sha256').update(JSON.stringify(armor.sets)).digest('hex')},null,2)+'\n');
}
console.log(JSON.stringify({mode:process.argv.includes('--apply')?'appliedModel':'preview',rows},null,2));
