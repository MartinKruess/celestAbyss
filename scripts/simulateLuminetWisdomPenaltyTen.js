import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [skills,comparison,model,rotations,baseline,buffs]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const hash=createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex');
const candidate=structuredClone(skills),s=candidate.find(s=>s.nr===74);
s.wis=-1;s.statScaling.wis={type:'linear',base:-1,perLevel:-1};
const rule=s.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.wis');rule.rule={kind:'linear',base:-1,perLevel:-1};
const pre=comparison.passiveRows.find(r=>r.key==='luminet'),attackNumbers=rotations.classes.find(r=>r.key==='luminet').rows.map(s=>s.nr),base=baseline.results.find(r=>r.key==='luminet');
const compact=r=>Object.fromEntries(Object.entries(r).filter(([k,v])=>typeof v==='number'&&(/mana|wait|blocked|shortage/i.test(k)||['totalDamage','skillDamage','autoDamage','durationSeconds'].includes(k))));
const rows=[];
for(const [mode,list]of [['self',buffs.scenarios.selfOnly.results],['groups',buffs.scenarios.selfAndGroups.results]]){
 const old=list.find(r=>r.key==='luminet'),config={...old.config,cacheCombatStats:true,recordActionTimeline:false};
 const control=simulateClass({pre,skills,model,attackNumbers,config});assert(Math.abs(control.totalDamage-old.totalDamage)<1e-5);
 const result=simulateClass({pre,skills:candidate,model,attackNumbers,config});assert.equal(result.durationSeconds,600);assert(result.finalMana>=0);assert(!result.deathAt);assert(Math.abs(result.totalDamage-result.skillDamage-result.autoDamage-result.summonDamage)<1e-5);
 const row={mode,before:compact(old),after:compact(result),damageChangePercent:100*(result.totalDamage/old.totalDamage-1),oldSelfGainPercent:100*(old.totalDamage/base.totalDamage-1),newSelfGainPercent:100*(result.totalDamage/base.totalDamage-1)};rows.push(row);console.log(JSON.stringify(row));
}
assert.equal(createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex'),hash);
await fs.writeFile('data/balancing/luminet-wisdom-penalty-ten-scenario.json',JSON.stringify({status:'hypotheticalNotApplied',generatedAt:new Date().toISOString(),catalogHash:hash,skillNumber:74,proposal:'Wisdom penalty -1 per skill level instead of -1.5; all other skill values unchanged.',baseDamage:base.totalDamage,rows},null,2)+'\n');
