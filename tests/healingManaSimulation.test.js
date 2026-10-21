import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {simulateHealingMana} from '../services/healingManaSimulation.js';
const skills=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
const pre=JSON.parse(fs.readFileSync(new URL('../data/balancing/class-comparison-level60.json',import.meta.url))).passiveRows.find(r=>r.key==='healer');
test('two-minute healing stress test reconciles pool, regeneration and per-skill costs',()=>{
 const r=simulateHealingMana({pre,skills});
 assert.equal(r.manaSpent,13491);
 assert.equal(r.manaSpent,r.skills.reduce((sum,s)=>sum+s.spent,0));
 assert(Math.abs(r.finalMana-(r.initialMana-r.manaSpent+r.actualRegenerated))<1e-8);
 assert(Math.abs(r.finalMana-4465)<1e-8);
 assert.equal(r.potentialRegen,pre.stats.manaRegen*40);
 assert.equal(r.minimumMana,3511);
 assert.equal(r.unaffordableFrames,0);
 assert(!r.skills.some(s=>s.nr===207));
});
test('healing obeys cast-end cooldowns and blocks overlapping casts',()=>{
 const r=simulateHealingMana({pre,skills});
 for(const s of r.skills){for(let i=1;i<s.uses.length;i++)assert(s.uses[i]-s.uses[i-1]>=s.cast+s.cooldown-1e-7);assert(s.completions.every((t,i)=>Math.abs(t-s.uses[i]-s.cast)<1e-7));}
 for(let i=1;i<r.timeline.length;i++){const last=r.timeline[i-1],row=r.skills.find(s=>s.nr===last.skill);assert(r.timeline[i].time>=last.time+row.cast+.1-1e-7);}
});
test('aura ends on a new active heal but does not block it until twelve seconds elapse',()=>{
 const r=simulateHealingMana({pre,skills});
 assert(r.auraPeriods.some(a=>a.reason==='completed'&&a.duration===12));
 const cancelled=r.auraPeriods.filter(a=>a.reason==='otherHeal');assert(cancelled.length>0);
 for(const a of cancelled){assert(a.duration<12);assert(r.timeline.some(t=>t.time===a.end&&t.skill!==108));}
});
test('empty pool waits for the exact three-second Mana tick',()=>{
 const minimal={...pre,stats:{...pre.stats,maxMana:539,manaRegen:539}};
 const heal={...skills.find(s=>s.nr===64),cd:0,cooldownScaling:{type:'fixed',base:0}};
 const r=simulateHealingMana({pre:minimal,skills:[heal],duration:6});
 assert.deepEqual(r.skills[0].uses,[0,3]);
 assert.equal(r.finalMana,539);
 assert(r.unaffordableFrames>0);
 assert.equal(r.actualRegenerated,1078);
});
