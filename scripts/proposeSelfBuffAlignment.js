import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [catalog,comparison,model,rotations,report,baseline]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-buff-scenarios.json','data/balancing/all-class-timed-damage.json'].map(read));
for(const [p,hash]of Object.entries(report.inputHashes))assert.equal(createHash('sha256').update(await fs.readFile(p)).digest('hex'),hash);
const rows=[];
function changed(changes){
 const skills=structuredClone(catalog);
 for(const {nr,stat,base,perLevel}of changes){const s=skills.find(s=>s.nr===nr);s.statScaling[stat]={type:'linear',base,perLevel};if(s[stat]!==undefined)s[stat]=base;delete s.levelProgression;}
 for(const nr of new Set(changes.map(c=>c.nr))){const s=skills.find(s=>s.nr===nr);s.levelProgression=buildSkillProgression(s);}
 return skills;
}
function run(key,changes){
 const stored=report.scenarios.selfOnly.results.find(r=>r.key===key),base=baseline.results.find(r=>r.key===key),pre=comparison.passiveRows.find(r=>r.key===key),attackNumbers=rotations.classes.find(r=>r.key===key).rows.map(r=>r.nr);
 const result=simulateClass({pre,skills:changed(changes),model,attackNumbers,config:{...stored.config,recordActionTimeline:false,cacheCombatStats:true}});
 assert.equal(result.durationSeconds,600);assert(result.finalMana>=0);assert(!result.deathAt);
 return{total:result.totalDamage,gainPercent:100*(result.totalDamage/base.totalDamage-1),auto:result.autoDamage,skills:result.skillDamage,summon:result.summonDamage};
}
const add=(group,name,keys,changes)=>{const outcomes=Object.fromEntries(keys.map(k=>[k,run(k,changes)]));const row={group,name,changes,outcomes};rows.push(row);return row;};
for(const wild of [40,50,60,70,80])for(const speed of [1,2,3,4,5]){
 const c=[{nr:149,stat:'patk',base:wild/2,perLevel:wild/4},{nr:148,stat:'atkSpeed',base:0,perLevel:speed/100/9}];
 add('shared',`wild${wild}/speed${speed}`,['adventurer','shaman','summoner'],c);
}
console.log('Shared candidates complete');await fs.writeFile('tmp/self-buff-alignment-progress.json',JSON.stringify(rows,null,2));
for(const [ranger,eye,dex]of [[60,30,20],[50,30,16],[40,30,16],[40,20,16],[30,20,16],[30,20,12],[30,15,12],[20,15,12],[20,10,12],[40,20,12]]){
 const c=[{nr:156,stat:'patk',base:ranger*.6,perLevel:ranger*.2},{nr:154,stat:'patk',base:eye/10,perLevel:eye/10},{nr:153,stat:'dex',base:dex/10,perLevel:dex/10}];
 add('hunter',`ranger${ranger}/eye${eye}/dex${dex}`,['hunter'],c);
}
console.log('Hunter candidates complete');await fs.writeFile('tmp/self-buff-alignment-progress.json',JSON.stringify(rows,null,2));
for(const speed of [1,2,3,4,5])for(const attack of [49,59,69,79,89]){
 add('summoner',`speed${speed}/mercy${attack}`,['summoner'],[{nr:148,stat:'atkSpeed',base:0,perLevel:speed/100/9},{nr:190,stat:'patk',base:attack-9*(attack-9)/10,perLevel:(attack-9)/10}]);
}
console.log('Soulseeker candidates complete');
for(const [instinct,charge]of [[22,280],[18,280],[18,240],[16,240],[14,240],[12,240],[16,200],[14,200],[12,200]]){
 add('butcher',`instinct${instinct}/charge${charge}`,['butcher'],[{nr:172,stat:'str',base:4,perLevel:(instinct-4)/9},{nr:12,stat:'patk',base:charge/2,perLevel:charge/8}]);
}
for(const [courage,strength]of [[50,12],[60,12],[60,15],[66,15],[70,15],[80,15],[70,18],[80,18],[90,18],[100,18]]){
 add('gladiator',`courage${courage}/strength${strength}`,['gladiator'],[{nr:160,stat:'patk',base:courage/10,perLevel:courage/10},{nr:162,stat:'str',base:strength/10,perLevel:strength/10}]);
}
await fs.writeFile('data/balancing/self-buff-alignment-probes.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'Hypothetical self-buff definition changes in memory only; same fixed 600s attack policies, all existing buff costs/durations/cooldowns retained. No database, catalog, Markdown or canonical report changes. Shared candidates evaluated together.',inputHashes:report.inputHashes,rows},null,2)+'\n');
for(const group of ['shared','hunter','summoner','butcher','gladiator']){
 const candidates=rows.filter(r=>r.group===group);
 console.log(JSON.stringify({group,rows:candidates.map(r=>({name:r.name,gains:Object.fromEntries(Object.entries(r.outcomes).map(([k,v])=>[k,+v.gainPercent.toFixed(2)]))}))}));
}
