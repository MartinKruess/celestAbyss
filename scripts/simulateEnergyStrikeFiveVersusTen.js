import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const original=await fs.readFile('scripts/calculateTenMinutePartyBuffFinal.js','utf8');
const results=process.argv.includes('--resume')?JSON.parse(await fs.readFile('tmp/energy-strike-level-comparison-progress.json','utf8')):[];
for(const level of [5,10]){
 if(results.some(r=>r.energyStrikeLevel===level))continue;
 let source=original.slice(0,original.indexOf('\nconst assumptions=['));
 source="import {resolveSkillAtLevel} from '../services/skillLevel.js';\n"+source;
 source=source.replace("import fs from 'node:fs/promises';","import realFs from 'node:fs/promises'; const fs={...realFs,writeFile:async()=>{}};");
 source=source.replace('for(const ref of reference.classes){',"for(const ref of reference.classes.filter(c=>['healer','druid','luminet'].includes(c.key))){");
 source=source.replace("['autoOnly','skillsPreferred']","['skillsPreferred']");
 source=source.replace('const get=n=>skills.find(s=>s.nr===n),damage=',`const get=n=>n===36?resolveSkillAtLevel(skills.find(s=>s.nr===n),${level}):skills.find(s=>s.nr===n),damage=`);
 source=source.replace('const catalog=skills.filter(s=>needed.has(s.nr));',`const catalog=skills.filter(s=>needed.has(s.nr)).map(s=>s.nr===36?resolveSkillAtLevel({...s,learningLimits:{defaultMaxLevel:10}},${level},{classKey:ref.key}):s);`);
 source=source.replace('attacks:ref.skillsPreferred.search.priorityPoolAttackNumbers??ref.skillsPreferred.search.selectedAttackNumbers','attacks:(ref.skillsPreferred.search.priorityPoolAttackNumbers??ref.skillsPreferred.search.selectedAttackNumbers).filter(n=>all.includes(n))');
 source=source.replace('const initial=[initialCandidate,',"const previous=JSON.parse(await fs.readFile('data/balancing/all-class-ten-minute-party-buff-final.json','utf8')).classes.find(c=>c.key===ref.key)[mode];const previousCandidate={name:'previousFinalPolicy',attacks:previous.search.priorityPoolAttackNumbers.filter(n=>all.includes(n)),own:previous.search.selectedOwnBuffNumbers,scores:previous.search.priorityScores,lookahead:previous.search.lookaheadSeconds};const initial=[previousCandidate,initialCandidate,");
 source=source.replaceAll(/from '(\.\.\/services\/[^']+)'/g,(_,p)=>'from '+JSON.stringify(new URL(p,pathToFileURL(process.cwd()+'/scripts/calculateTenMinutePartyBuffFinal.js')).href));
 source+=`\nexport default {energyStrikeLevel:${level},durationSeconds:600,classes};`;
 console.log('Starting Energy Strike level '+level);
 results.push((await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'))).default);
 await fs.writeFile('tmp/energy-strike-level-comparison-progress.json',JSON.stringify(results,null,2)+'\n');
}
for(const scenario of results)for(const c of scenario.classes){assert(!c.skillsPreferred.result.skills.some(s=>[210,231].includes(s.nr)));assert(c.skillsPreferred.characterDamage>0);}
const report={generatedAt:new Date().toISOString(),scope:'600 seconds; public buffs permanent; self buffs activated and paid normally; skills preferred with filler autos; best found policies, not proven global optima; only Energy Strike level overridden; current class caps unchanged',results};
await fs.writeFile('data/balancing/energy-strike-five-versus-ten-scenario.json',JSON.stringify(report,null,2)+'\n');
console.log('Saved six verified scenario results. No database writes.');
