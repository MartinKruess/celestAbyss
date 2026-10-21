import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const original=await fs.readFile('scripts/calculateTenMinutePartyBuffFinal.js','utf8');
let source=original.slice(0,original.indexOf('\nconst assumptions=['));
source="import {resolveSkillAtLevel} from '../services/skillLevel.js';\n"+source;
source=source.replace("import fs from 'node:fs/promises';","import realFs from 'node:fs/promises'; const fs={...realFs,writeFile:async()=>{}};");
source=source.replace('const get=n=>skills.find(s=>s.nr===n),damage=',`for(const [nr,key]of [[36,'luminet'],[49,'ritualist']]){
 const index=skills.findIndex(s=>s.nr===nr),runtime=resolveSkillAtLevel(skills[index],20,{classKey:key});
 runtime.matk=514;runtime.statScaling.matk={type:'fixed',base:514};delete runtime.levelProgression;skills[index]=runtime;
}
const get=n=>skills.find(s=>s.nr===n),damage=`);
source=source.replace('for(const ref of reference.classes){',"for(const ref of reference.classes.filter(c=>['luminet','ritualist'].includes(c.key))){");
source=source.replace("['autoOnly','skillsPreferred']","['skillsPreferred']");
source=source.replace('attacks:ref.skillsPreferred.search.priorityPoolAttackNumbers??ref.skillsPreferred.search.selectedAttackNumbers','attacks:(ref.skillsPreferred.search.priorityPoolAttackNumbers??ref.skillsPreferred.search.selectedAttackNumbers).filter(n=>all.includes(n))');
source=source.replace('const initial=[initialCandidate,',`const previousReport=JSON.parse(await fs.readFile(ref.key==='luminet'?'data/balancing/luminet-paired-spells-scenario.json':'data/balancing/single-intelligence-mages-damage-comparison.json','utf8'));
 const previous=previousReport.classes.find(c=>c.key===ref.key)[mode];
 const previousCandidate={name:'previousBestPolicy',attacks:previous.search.priorityPoolAttackNumbers.filter(n=>all.includes(n)),own:previous.search.selectedOwnBuffNumbers,scores:previous.search.priorityScores,lookahead:previous.search.lookaheadSeconds,ratio:previous.result.config.skillWaitPriorityRatio,reserve:previous.result.config.reserveManaForPriority};const initial=[previousCandidate,initialCandidate,`);
source=source.replaceAll(/from '(\.\.\/services\/[^']+)'/g,(_,p)=>'from '+JSON.stringify(new URL(p,pathToFileURL(process.cwd()+'/scripts/calculateTenMinutePartyBuffFinal.js')).href));
source+='\nexport default {durationSeconds:600,classes};';
const result=(await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'))).default;
for(const c of result.classes){const n=c.key==='luminet'?36:49;assert(c.skillsPreferred.result.skills.some(s=>s.nr===n&&s.applications>0));}
await fs.writeFile('data/balancing/fireball-energy-minus-hundred-scenario.json',JSON.stringify({generatedAt:new Date().toISOString(),scope:'RAM-only max-level Fireball and Luminet Energy Strike base damage 614 to 514; Mana fixed at 149, cooldown 4s and cast .1s unchanged. Both level 20. Each class independently re-searched under 600s permanent public buffs, regularly paid self buffs, skills preferred with auto fillers. Summons separate. Best found, not proven global optimum.',...result},null,2)+'\n');
console.log('Saved both damage-only scenarios. No database writes.');
