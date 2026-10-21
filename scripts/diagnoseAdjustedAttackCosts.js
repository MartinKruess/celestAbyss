import fs from 'node:fs/promises';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [report,catalog,comparison,model,baseline]=await Promise.all(['data/balancing/adjusted-attacks-relevance.json','data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-timed-damage.json'].map(read));
for(const row of report.rows.filter(r=>r.deltaInSearchedPolicy<0)){
 const c=report.classes.find(c=>c.key===row.key),pre=comparison.passiveRows.find(r=>r.key===row.key&&(r.key!=='ritualist'||!r.includedSkills.includes(120))),base=baseline.results.find(r=>r.key===row.key).config;
 const attacks=[...new Set([...c.bestPolicy.attacks,row.nr])],config={...base,step:.01,cacheCombatStats:true,enableOwnBuffs:false,skillPriorityScores:c.bestPolicy.scores,reserveManaForPriority:c.bestPolicy.reserve??false,disabledSetupSkillNumbers:c.bestPolicy.disabled??[]};
 for(const mode of ['zeroMana','zeroCast']){
  const skills=structuredClone(catalog),s=skills.find(s=>s.nr===row.nr);
  if(mode==='zeroCast')s.castTimeSeconds=0;
  else {s.mana=0;for(const cost of s.resourceCosts??[])if(cost.resource==='mana')cost.scaling={type:'fixed',base:0};if(s.levelProgression)s.levelProgression.rules=s.levelProgression.rules.filter(e=>e.path[0]!=='resourceCosts');}
  const result=simulateClass({pre,skills,model,attackNumbers:attacks,config});row[mode+'DiagnosticDelta']=result.totalDamage-row.withoutTotal;
 }
 console.log(JSON.stringify({nr:row.nr,actual:Math.round(row.deltaInSearchedPolicy),free:Math.round(row.zeroManaDiagnosticDelta),instant:Math.round(row.zeroCastDiagnosticDelta)}));
}
report.diagnosticScope='Zero-Mana / zero-cast sensitivity checks are hypothetical per-skill probes under the same policy, not proposed balance changes; other skills and stats stay unchanged.';
await fs.writeFile('data/balancing/adjusted-attacks-relevance.json',JSON.stringify(report,null,2)+'\n');
