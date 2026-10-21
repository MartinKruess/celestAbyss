import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const path='data/balancing/all-class-ten-minute-party-buff-final.json';
const report=await read(path),comparison=await read('data/balancing/class-comparison-level60.json'),skills=await read('data/skills.json'),model=await read('data/balancing/attribute-model.json');
const known=[...(await read('data/balancing/energy-strike-five-versus-ten-scenario.json')).results.find(r=>r.energyStrikeLevel===5).classes.filter(c=>['healer','druid'].includes(c.key)),...(await read('data/balancing/luminet-paired-spells-scenario.json')).classes,...(await read('data/balancing/single-intelligence-mages-damage-comparison.json')).classes.filter(c=>c.key==='ritualist')];
const rotations=await read('data/balancing/all-class-damage-rotations.json');
for(const candidate of known){
 const c=report.classes.find(c=>c.key===candidate.key),previous=c.skillsPreferred,p=candidate.skillsPreferred;
 const available=new Set(rotations.classes.find(r=>r.key===c.key).rows.map(s=>s.nr));
 const attacks=p.search.priorityPoolAttackNumbers.filter(n=>available.has(n));
 const pre=comparison.passiveRows.find(r=>r.key===c.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120)));
 const result=simulateClass({pre,skills,model,attackNumbers:attacks,config:p.result.config});
 const damage=result.autoDamage+result.skillDamage;
 previous.search.trials++;
 if(damage>previous.characterDamage+1e-6){
  c.skillsPreferred={...previous,characterDamage:damage,summonDamage:result.summonDamage,directAutoDamage:result.autoDamage,automaticAutoExtras:0,autoRelatedDamage:result.autoDamage,activeSkillDamage:result.skillDamage,result,search:{...p.search,policy:'recheckedKnownPolicy',priorityPoolAttackNumbers:attacks,trials:previous.search.trials,baselineDamage:previous.search.baselineDamage,gain:damage-previous.search.baselineDamage,status:'bestFoundNotProvenGlobalOptimum'}};
 }
 console.log(JSON.stringify({class:c.name,damage:Math.round(c.skillsPreferred.characterDamage),knownPolicyDamage:Math.round(damage)}));
}
report.knownPoliciesRecheckedAt=new Date().toISOString();
for(const p of Object.keys(report.inputHashes))report.inputHashes[p]=createHash('sha256').update(await fs.readFile(p)).digest('hex');
await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
const generator=await fs.readFile('scripts/calculateTenMinutePartyBuffFinal.js','utf8');
const renderer=generator.slice(generator.indexOf('const f=n=>'));
const bindings="import fs from 'node:fs/promises';const report=JSON.parse(await fs.readFile('data/balancing/all-class-ten-minute-party-buff-final.json','utf8'));const {classes,assumptions,refreshedClassKeys}=report;const refreshCasters=report.partialRefresh;const skills=JSON.parse(await fs.readFile('data/skills.json','utf8'));const get=n=>skills.find(s=>s.nr===n);\n";
await import('data:text/javascript;base64,'+Buffer.from(bindings+renderer).toString('base64'));
