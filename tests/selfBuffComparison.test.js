import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {compareSelfBuffs} from '../services/selfBuffComparison.js';
const model=JSON.parse(fs.readFileSync('data/balancing/attribute-model.json'));
const skills=JSON.parse(fs.readFileSync('data/skills.json'));
const report=JSON.parse(fs.readFileSync('data/balancing/class-comparison-level60.json'));
test('buff comparison retains unbuffed values and does not add activation Mana as capacity',()=>{
 const pre=report.passiveRows.find(r=>r.key==='gladiator'),copy=structuredClone(pre);
 const r=compareSelfBuffs({pre,skills,model,assignedNumbers:[160,163]});
 assert.equal(r.stats.maxMana-pre.stats.maxMana,200);
 // Warrior's Pride grants 10 STR / 10 VIT plus 35 direct physical attack.
 assert(Math.abs(r.stats.physicalAttack-pre.stats.physicalAttack-53.9)<1e-10);
 assert.equal(r.stats.maxHealth-pre.stats.maxHealth,1065);
 assert(Math.abs(r.stats.criticalDamageBonus-pre.stats.criticalDamageBonus-.01)<1e-10);
 assert.deepEqual(pre,copy);
});
test('pet-only buffs never boost player and single stat effect is not counted twice',()=>{
 const pre=report.passiveRows.find(r=>r.key==='butcher');
 const r=compareSelfBuffs({pre,skills,model,assignedNumbers:[150,175]});
 assert.equal(r.excluded[0].nr,150);
 assert(Math.abs(r.stats.attackSpeed-pre.stats.attackSpeed-.15)<1e-10);
 const exchanged=pre.knownAttributes.vitality*.1;
 assert(Math.abs(r.stats.physicalAttack-pre.stats.physicalAttack-exchanged*1.98)<1e-8);
 assert(Math.abs(r.stats.maxHealth-pre.stats.maxHealth+exchanged*30)<1e-8);
});
test('dynamic knight Vitality conversion updates Strength once with own buff',()=>{
 const pre=report.passiveRows.find(r=>r.key==='knight');
 const r=compareSelfBuffs({pre,skills,model,assignedNumbers:[75]});
 assert.equal(r.attributeBonuses.vitality,20);
 assert(Math.abs(r.attributeBonuses.strength-22)<1e-10);
 assert(Math.abs(r.stats.physicalAttack-pre.stats.physicalAttack-22*1.8)<1e-8);
 assert(Math.abs(r.stats.maxHealth-pre.stats.maxHealth-660)<1e-8);
});
test('new buff table covers every permanent scenario without changing baseline combat stats',()=>{
 assert.equal(report.selfBuffRows.length,report.passiveRows.length);
 assert.equal(new Set(report.selfBuffRows.map(r=>r.key)).size,13);
 for(const r of report.selfBuffRows)assert(Object.values(r.stats).every(Number.isFinite));
 const healer=report.selfBuffRows.find(r=>r.key==='healer');
 assert(healer.buffs.some(b=>b.nr===197));
 assert(!healer.buffs.some(b=>b.nr===198||b.nr===199));
});
test('R6 Rogue table includes Ambush once and its own buff bonuses add only their delta',()=>{
 const pre=report.passiveRows.find(r=>r.key==='villian'),r=report.selfBuffRows.find(r=>r.key==='villian');
 assert.equal(pre.specialAttributeAttack.factor,1.8);assert.equal(pre.specialAttributeAttack.amount,28.8);
 assert.equal(pre.specialAttributeAttack.amount,pre.knownAttributes.ambush*1.8);
 assert(Math.abs(r.stats.physicalAttack-pre.stats.physicalAttack-27)<1e-8);
 assert.equal(pre.stats.maxMana,3917.5);assert.equal(r.stats.maxMana,3917.5);
});
