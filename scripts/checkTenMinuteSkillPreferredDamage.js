import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const report=JSON.parse(await fs.readFile('data/balancing/all-class-ten-minute-full-buff-attack-modes.json','utf8'));
assert.equal(report.durationSeconds,600);
assert.equal(report.classes.length,13);
let actions=0,autoActions=0;
for(const c of report.classes){
 const mixed=c.skillsPreferred,r=mixed.result;
 assert.equal(r.config.attackMode,'skillsPreferred');
 assert.equal(r.config.step,.01);
 assert.equal(r.config.permanentPrebuffs,true);
 assert.equal(r.durationSeconds,600);
 assert(r.finalMana>=0&&!r.deathAt);
 assert(mixed.characterDamage+1e-6>=mixed.search.baselineDamage);
 assert(Math.abs(r.totalDamage-r.autoDamage-r.skillDamage-r.summonDamage)<1e-5);
 assert(Math.abs(r.manaSpent-r.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-5);
 assert(Math.abs(r.totalDamage-r.skills.reduce((n,s)=>n+s.damage,0))<1e-5);
 assert.equal(r.buffManaSpent,0);
 assert.equal(r.buffDrainManaSpent,0);
 assert(r.buffPeriods.every(b=>b.start===0&&b.end===600));
 const autos=r.actionTimeline.filter(a=>a.nr==='auto');
 const skillActions=r.actionTimeline.filter(a=>a.nr!=='auto');
 assert.equal(autos.length,r.skills.find(s=>s.nr==='auto')?.applications??0);
 assert.equal(skillActions.length,r.skills.filter(s=>s.nr!=='auto').reduce((n,s)=>n+s.applications,0));
 for(const a of autos){
  assert.equal(a.recoveryUntil-a.time>=.5-1e-7,true);
  assert(a.readyAffordableSelectedSkillCount===0||a.waitingForSkill!==null);
  for(const s of skillActions)if(s.time>=a.time)assert(s.time>=a.recoveryUntil-1e-7);
 }
 for(let i=1;i<autos.length;i++)assert(autos[i].time>=autos[i-1].recoveryUntil-1e-7);
 for(const row of r.skills)assert.equal(row.useTimes.length,row.applications);
 actions+=skillActions.length;autoActions+=autos.length;
 console.log(JSON.stringify({class:c.name,autoOnly:Math.round(c.autoOnly.characterDamage),skillsOnly:Math.round(c.skillsOnly.characterDamage),skillPreferred:Math.round(mixed.characterDamage),skillActions:skillActions.length,autoActions:autos.length}));
}
console.log(`Verified 13 skill-preferred runs, ${actions} skill actions, ${autoActions} filler auto-actions, and all resource/damage ledgers.`);
