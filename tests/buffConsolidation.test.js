import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const skills=JSON.parse(fs.readFileSync('data/skills.json'));
const report=JSON.parse(fs.readFileSync('data/reports/class-skill-counts.json'));
const get=nr=>skills.find(s=>s.nr===nr);
test('removed buffs remain recoverable but have no class assignments',()=>{
 for(const nr of [79,151,155,170]){assert(get(nr)._id);assert.deepEqual(get(nr).charClass,[]);assert(report.counts.every(c=>!c.skillNumbers.includes(nr)));}
 assert(!get(148).charClass.includes('Villian'));assert(get(148).charClass.includes('Abenteuer'));assert(get(148).charClass.includes('Summoner'));
});
test('Falcon Eye replaces Sixth Sense without retaining its former separate Luck bonus',()=>{
 const s=get(154);assert.equal(s.statScaling.luck.values.at(-1),5);assert.equal(s.statScaling.dodge.values.at(-1),20);assert(s.statScaling.dodge.values.every(Number.isInteger));
 assert.equal(s.statScaling.patk.base+9*s.statScaling.patk.perLevel,60);
});
test('moderate cuts preserve class mechanics and shared assignments',()=>{
 assert.equal(get(172).statScaling.str.base+9*get(172).statScaling.str.perLevel,22);
 assert.equal(get(146).statScaling.amb.base+9*get(146).statScaling.amb.perLevel,15);
 const wild=get(149);assert.equal(wild.statScaling.patk.base+2*wild.statScaling.patk.perLevel,120);assert.equal(wild.int,undefined);assert.equal(wild.dur,1200);assert(wild.charClass.includes('Shamane'));
 assert.equal(get(161).maxSkillLv,10);assert.equal(get(163).statScaling.health.base+2*get(163).statScaling.health.perLevel,750);assert(Math.abs(get(238).statScaling.atkSpeed.base+9*get(238).statScaling.atkSpeed.perLevel-.3)<1e-8);
});
test('Gladiator merges critical buffs without retaining physical attack or duplicate skill',()=>{
 const potential=get(163),courage=get(160);
 assert.deepEqual(get(159).charClass,[]);assert(report.counts.every(c=>!c.skillNumbers.includes(159)));
 assert.equal(potential.patk,undefined);assert.equal(potential.statScaling.patk,undefined);
 assert.equal(potential.statScaling.luck.base+2*potential.statScaling.luck.perLevel,3);
 assert.equal(potential.statScaling.critDamageBonus.values.at(-1),.01);
 const mana=potential.effects.find(e=>e.stat==='maxMana').valueScaling;
 assert.equal(mana.base+2*mana.perLevel,200);
 assert.equal(courage.statScaling.patk.base+9*courage.statScaling.patk.perLevel,30);
 assert.equal(courage.statScaling.penetration.values.at(-1),20);
});
test('reported class totals match assigned skill lists and updated Skill Point rows',()=>{
 const sp=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json'));
 for(const c of report.counts){assert.equal(c.total,c.skillNumbers.length);assert.equal(new Set(c.skillNumbers).size,c.total);const match=sp.classes.find(r=>r.skills.map(s=>s.nr).join(',')===c.skillNumbers.join(','));assert(match);assert.equal(match.skillCount,c.total);assert.equal(match.sp,match.skills.reduce((n,s)=>n+s.sp,0));}
});
