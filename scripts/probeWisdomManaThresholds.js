import fs from 'node:fs/promises';
import {simulateClass,conversionDelta} from '../services/timedDamageSimulation.js';
import {permanentManaRegenMultiplier} from '../services/permanentManaRegeneration.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [c,skills,model,rotations]=await Promise.all(['data/balancing/class-comparison-level60.json','data/skills.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json'].map(read));
const classes=[];
for(const key of ['adventurer','healer','knight']){
 const original=c.passiveRows.find(r=>r.key===key),rotation=rotations.classes.find(r=>r.key===key);
 const results=new Map();
 const run=loss=>{
  if(results.has(loss))return results.get(loss);
  const pre=structuredClone(original);pre.knownAttributes.wisdom-=loss;
  const delta=conversionDelta(model,key,'wisdom',-loss);
  delta.manaRegen=(delta.manaRegen??0)*permanentManaRegenMultiplier(skills,pre.includedSkills);
  for(const [stat,amount]of Object.entries(delta))pre.stats[stat]+=amount;
  if(pre.stats.maxMana<=0||pre.stats.manaRegen<0)return null;
  const r=simulateClass({pre,skills,model,attackNumbers:rotation.rows.map(s=>s.nr),config:{targetHealth:10000000,maintainEnergyOfWrath:true,manaRegenInterval:model.regenerationTiming?.manaTickIntervalSeconds??2,specialAttributeAttackFactor:model.plannedSpecialAttributeUnlock.amountPerPoint,specialAttributeAttackFactors:model.plannedSpecialAttributeUnlock.classAmountsPerPoint}});
  const row={loss,wisdom:pre.knownAttributes.wisdom,maxMana:pre.stats.maxMana,manaRegen:pre.stats.manaRegen,manaBlockedSeconds:r.manaBlockedSeconds,firstManaShortageAt:r.firstManaShortageAt??null,firstManaWaitAt:r.firstManaWaitAt??null,finalMana:r.finalMana,totalDamage:r.totalDamage};results.set(loss,row);return row;
 };
 let previous=0,upper;
 run(0);
 for(let loss=5;loss<=Math.floor(original.knownAttributes.wisdom);loss+=5){const row=run(loss);if(!row)break;if(row.manaBlockedSeconds>1e-8){upper=loss;break;}previous=loss;}
 let first;
 if(upper!==undefined)for(let loss=previous+1;loss<=upper;loss++){const row=run(loss);if(row?.manaBlockedSeconds>1e-8){first=row;break;}}
 for(const loss of [10,15,20,30,35,40,...(first?[first.loss+5,first.loss+10]:[])])if(loss<=original.knownAttributes.wisdom)run(loss);
 const entry={key,startingWisdom:original.knownAttributes.wisdom,firstManaWait:first??null,results:[...results.values()].sort((a,b)=>a.loss-b.loss)};classes.push(entry);
 console.log(JSON.stringify(entry));
}
await fs.writeFile('data/balancing/wisdom-mana-threshold-probe.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'Simulation only; current unbuffed fixed-priority 600s policy; no database or comparison values changed. Five-point scan then integer refinement of first detected bracket; not a proof of globally monotonic rotation behavior.',classes},null,2)+'\n');
