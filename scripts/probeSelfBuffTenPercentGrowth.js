import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [skills,comparison,model,rotations,base,buffs]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const results=[];
for(const stored of base.results){
 const pre=structuredClone(comparison.passiveRows.find(r=>r.key===stored.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120))));
 for(const [k,v]of Object.entries(pre.stats))if(typeof v==='number')pre.stats[k]=['attackSpeed','movementSpeed'].includes(k)?1+(v-1)*1.1:v*1.1;
 for(const [k,v]of Object.entries(pre.knownAttributes??{}))if(typeof v==='number')pre.knownAttributes[k]=v*1.1;
 if(pre.specialAttributeAttack)pre.specialAttributeAttack.amount*=1.1;
 const attackNumbers=rotations.classes.find(r=>r.key===stored.key).rows.map(s=>s.nr);
 const own=buffs.scenarios.selfOnly.results.find(r=>r.key===stored.key);
 const run=extra=>simulateClass({pre,skills,model,attackNumbers,config:{...stored.config,cacheCombatStats:true,...extra}});
 const control=run({});const active=run({enableOwnBuffs:true,prebuffOwnBuffs:false,permanentPrebuffs:false,ownBuffNumbers:own.availableOwnBuffNumbers,preparedBuffNumbers:[],permanentBuffNumbers:[],externalBuffSkills:[]});
 assert.equal(control.durationSeconds,600);assert.equal(active.durationSeconds,600);assert(!active.deathAt);
 const row={key:stored.key,name:stored.name,previousBase:stored.totalDamage,previousBuffed:own.totalDamage,previousGainPercent:100*(own.totalDamage/stored.totalDamage-1),raisedBase:control.totalDamage,raisedBuffed:active.totalDamage,raisedGainPercent:100*(active.totalDamage/control.totalDamage-1)};results.push(row);console.log(JSON.stringify(row));
}
await fs.writeFile('data/balancing/self-buff-ten-percent-growth-probe.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'In-memory sensitivity only. Baseline combat stats and known attributes +10%; speed bonuses above/below neutral 100 scaled 1.1, neutral base speed unchanged. Skill bases, buff values, costs, cooldowns unchanged. Same 600-second fixed policy, no groups or fresh optimization. Not a hypothetical equipment recalculation.',results},null,2)+'\n');
