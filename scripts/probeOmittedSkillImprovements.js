import fs from 'node:fs/promises';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const report=await read('data/balancing/unbuffed-auto-versus-skills-check.json'),catalog=await read('data/skills.json'),comparison=await read('data/balancing/class-comparison-level60.json'),model=await read('data/balancing/attribute-model.json');
const probes=[
 ['butcher',98,[{cast:.3},{mana:400},{cast:.3,mana:400},{cast:.3,mana:250}]],
 ['gladiator',96,[{cast:.2}]],
 ['herbalist',221,[{cast:.2},{mana:170},{cast:.2,mana:170}]],
 ['herbalist',69,[{cast:.2},{mana:340},{cast:.2,mana:340}]],
 ['ritualist',72,[{mana:250},{mana:180},{mana:75}]],
 ['ritualist',180,[{souls:10},{souls:5},{souls:1},{souls:10,base:1400},{souls:5,base:1400},{souls:3,base:1500},{souls:1,base:1400}]],
 ['ritualist',235,[{mana:1900},{mana:1500},{cast:.4,mana:1500},{mana:800}]],
 ['shaman',202,[{dot:120},{dot:144},{mana:160},{dot:120,mana:180},{dot:192},{dot:144,mana:120}]],
 ['shaman',50,[{cast:.1},{base:750},{mana:125},{cast:.1,base:950,mana:125}]],
 ['shaman',255,[{base:1137},{mana:190}]],
 ['summoner',66,[{cast:.1},{mana:430},{cast:.1,mana:430}]],
 ['summoner',47,[{mana:400},{mana:300}]],
 ['villian',17,[{mana:250},{mana:180},{mana:100}]],
 ['villian',115,[{cast:.4},{cast:.2},{cast:.2,mana:200,base:2000}]],
];
const rows=[];
for(const [key,nr,variants]of probes){
 const c=report.classes.find(c=>c.key===key),pre=comparison.passiveRows.find(r=>r.key===key&&(key!=='ritualist'||!r.includedSkills.includes(120)));
 const definition=catalog.find(s=>s.nr===nr),attacks=[...new Set([...c.policy.attacks,nr])];
 for(const change of variants){
  const s=resolveSkillAtLevel(definition,definition.maxSkillLv,{classKey:key});delete s.levelProgression;
  if(change.cast!==undefined){s.castTimeSeconds=change.cast;delete s.castTimeScaling;}
  if(change.base!==undefined){const stat=s.matk?'matk':'patk';s[stat]=change.base;s.statScaling[stat]={type:'fixed',base:change.base};}
  for(const cost of s.resourceCosts??[]){const value=cost.resource==='mana'?change.mana:cost.resource==='soulFragments'?change.souls:undefined;if(value!==undefined)cost.scaling={type:'fixed',base:value};}
  if(change.dot!==undefined){const e=s.effects.find(e=>e.type==='periodicDamage');e.value=change.dot;e.valueScaling={type:'fixed',base:change.dot};}
  const result=simulateClass({pre,skills:catalog.map(x=>x.nr===nr?s:x),model,attackNumbers:attacks,config:{...c.bestFound.config,cacheCombatStats:true}});
  rows.push({classKey:key,className:c.name,nr,name:definition.skillName_de,change,gainVersusOmitting:result.totalDamage-c.bestFound.totalDamage,totalDamage:result.totalDamage,applications:result.skills.find(s=>s.nr===nr)?.applications??0});
 }
 console.log(JSON.stringify({class:c.name,skill:definition.skillName_de,bestGain:Math.round(Math.max(...rows.filter(r=>r.classKey===key&&r.nr===nr).map(r=>r.gainVersusOmitting)))}));
}
await fs.writeFile('data/balancing/omitted-skill-improvement-probes.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'RAM-only max-level probes. One omitted skill added to the fixed best-found unbuffed single-target policy. Unmodified fields retained, no complete reoptimization. Positive gain means this example beats omitting the skill under this fixed policy. Not a proven minimum threshold, recommendation to persist, or guaranteed gain in other rotations.',rows},null,2)+'\n');
