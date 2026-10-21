import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [catalog,comparison,model,rotations,report,baseline,probes]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-buff-scenarios.json','data/balancing/all-class-timed-damage.json','data/balancing/self-buff-alignment-probes.json'].map(read));
for(const [p,hash]of Object.entries(report.inputHashes))assert.equal(createHash('sha256').update(await fs.readFile(p)).digest('hex'),hash);
const select=(group,name)=>{const row=probes.rows.find(r=>r.group===group&&r.name===name);assert(row);return row.changes;};
const packages={
 first:[...select('shared','wild70/speed1'),...select('hunter','ranger30/eye20/dex12'),...select('summoner','speed1/mercy89').filter(c=>c.nr!==148),...select('butcher','instinct16/charge240'),...select('gladiator','courage70/strength15')],
 second:[...select('shared','wild60/speed1'),...select('hunter','ranger20/eye10/dex12'),...select('summoner','speed1/mercy69').filter(c=>c.nr!==148),...select('butcher','instinct12/charge200'),...select('gladiator','courage70/strength15'),{nr:157,effectKey:'ancestor-three-arrows',base:12,perLevel:12}],
};
function modified(changes){
 const skills=structuredClone(catalog);
 for(const c of changes){const s=skills.find(s=>s.nr===c.nr);if(c.effectKey){const e=s.effects.find(e=>e.key===c.effectKey);assert(e);e.value=c.base;e.valueScaling={type:'linear',base:c.base,perLevel:c.perLevel};}else{s.statScaling[c.stat]={type:'linear',base:c.base,perLevel:c.perLevel};if(s[c.stat]!==undefined)s[c.stat]=c.base;}delete s.levelProgression;}
 for(const nr of new Set(changes.map(c=>c.nr))){const s=skills.find(s=>s.nr===nr);s.levelProgression=buildSkillProgression(s);}
 return skills;
}
const keys=['adventurer','shaman','hunter','summoner','butcher','gladiator'],rows=[];
for(const key of keys){
 const original=baseline.results.find(r=>r.key===key),pre=comparison.passiveRows.find(r=>r.key===key),attacks=rotations.classes.find(r=>r.key===key).rows.map(r=>r.nr),current=report.scenarios.selfOnly.results.find(r=>r.key===key),party=report.scenarios.selfAndGroups.results.find(r=>r.key===key);
 const execute=(skills,config)=>{const result=simulateClass({pre,skills,model,attackNumbers:attacks,config:{...config,cacheCombatStats:true,recordActionTimeline:false}});assert.equal(result.durationSeconds,config.duration);assert(result.finalMana>=0);assert(!result.deathAt);return result;};
 const pack=r=>({total:r.totalDamage,auto:r.autoDamage,skills:r.skillDamage,summon:r.summonDamage,manaSpent:r.manaSpent,ownBuffMana:r.buffManaSpent??0});
 const currentReplay=execute(catalog,current.config);assert(Math.abs(currentReplay.totalDamage-current.totalDamage)<1e-5);
 const longBase=execute(catalog,{...original.config,duration:1200}),entry={key,name:original.name,unbuffed:pack(original),currentSelf:pack(current),currentParty:pack(party),currentGainPercent:100*(current.totalDamage/original.totalDamage-1),longBase:pack(longBase),stages:{}};
 for(const [name,changes]of Object.entries(packages)){
  const skills=modified(changes),self=execute(skills,current.config),groups=execute(skills,party.config),long=execute(skills,{...current.config,duration:1200});
  entry.stages[name]={self:pack(self),party:pack(groups),gainPercent:100*(self.totalDamage/original.totalDamage-1),changeFromCurrent:self.totalDamage-current.totalDamage,longSelf:pack(long),longGainPercent:100*(long.totalDamage/longBase.totalDamage-1)};
 }
 rows.push(entry);console.log(JSON.stringify({key,current:+entry.currentGainPercent.toFixed(2),first:+entry.stages.first.gainPercent.toFixed(2),second:+entry.stages.second.gainPercent.toFixed(2),longFirst:+entry.stages.first.longGainPercent.toFixed(2),longSecond:+entry.stages.second.longGainPercent.toFixed(2)}));
 await fs.writeFile('tmp/self-buff-alignment-package-progress.json',JSON.stringify(rows,null,2)+'\n');
}
await fs.writeFile('data/balancing/self-buff-alignment-proposal.json',JSON.stringify({generatedAt:new Date().toISOString(),status:'simulatedProposalNotApplied',inputHashes:report.inputHashes,scope:'Two successive hypothetical packages. Current 600-second fixed policies; self-only and permanent-public-group scenarios tested for each package. Additional 1200-second self-only checks use freshly calculated 1200-second unbuffed controls. Existing durations, cooldowns and costs unchanged. No database, catalog or canonical Markdown/report changes.',packages,rows},null,2)+'\n');
