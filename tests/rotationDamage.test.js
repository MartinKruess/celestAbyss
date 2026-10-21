import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
import fs from 'node:fs/promises';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const stats={physicalAttack:100,magicalAttack:200,criticalDamageBonus:0.8};
test('Skybreaker applies both character attack values to its 100 and 80 percent hits',async()=>{
 const catalog=JSON.parse(await fs.readFile(new URL('../data/skills.json',import.meta.url),'utf8'));
 const skill=catalog.find(s=>s.nr===212);
 assert.equal(skill.maxSkillLv,20);
 assert.equal(evaluateDamageSkill(skill,stats).damage,(2785+100+4197+200)*1.8);
 assert.equal(evaluateDamageSkill(resolveSkillAtLevel(skill,10),stats).damage,(1500+100+2300+200)*1.8);
 assert.equal(evaluateDamageSkill(skill,{...stats,physicalAttack:200}).damage-evaluateDamageSkill(skill,stats).damage,180);
});
test('split-base phases each add full character attack',()=>{
 const s={nr:230,maxSkillLv:10,patk:5400,attackExecution:{sequenceScalesSkillBaseOnly:true,hitSequence:[{damageMultiplier:1/6},{damageMultiplier:1/3},{damageMultiplier:1/2}]}};
 assert.equal(evaluateDamageSkill(s,stats).damage,5700);
});
test('Soul Collector still deals character attack when its level-one skill bonus is zero',()=>{
 const s={nr:186,maxSkillLv:1,statScaling:{patk:{type:'linear',base:0,perLevel:59/9}}};
 assert.equal(evaluateDamageSkill(s,stats).damage,100);
});
test('multi-hit attacks add character attack per hit and guaranteed critical bonus',()=>{
 const s={nr:1,skillName_de:'Test',maxSkillLv:1,patk:50,attackExecution:{hitCount:2,guaranteedCriticalHit:true}};
 assert.equal(evaluateDamageSkill(s,stats).damage,540);
});
test('meteor visual count does not multiply wave damage',()=>{
 const s={nr:235,maxSkillLv:1,patk:100,attackExecution:{meteorWaveSequence:Array.from({length:3},()=>[{damageFraction:0.4,meteorCount:6},{damageFraction:0.6,meteorCount:6}]).flat()}};
 assert.equal(evaluateDamageSkill(s,stats).damage,600);
});
test('periodic-only field starts on its first tick without an extra initial hit',()=>{
 const s={nr:112,maxSkillLv:1,matk:50,effects:[{type:'periodicDamage',value:50,durationSeconds:4,firstTickAfterSeconds:1,intervalSeconds:2,addsCasterMagicalAttack:true}]};
 const r=evaluateDamageSkill(s,stats);assert.equal(r.damage,500);assert.equal(r.initialDamage,0);
});
test('fixed DoT does not inherit character attack; fractional followups use calculated initial damage',()=>{
 assert.equal(evaluateDamageSkill({nr:31,maxSkillLv:1,matk:50,effects:[{type:'periodicDamage',value:10,durationSeconds:4,firstTickAfterSeconds:2,intervalSeconds:2,addsCasterMagicalAttack:false}]},stats).damage,270);
 assert.equal(evaluateDamageSkill({nr:48,maxSkillLv:1,matk:50,effects:[{type:'periodicDamage',initialCalculatedDamageFraction:0.3,durationSeconds:10,firstTickAfterSeconds:1.5,intervalSeconds:1.5}]},stats).damage,700);
});
test('all 13 classes use current comparison stats and include the legacy physical Butcher skill',async()=>{
 const report=JSON.parse(await fs.readFile('data/balancing/all-class-damage-rotations.json','utf8'));
 const comparison=JSON.parse(await fs.readFile('data/balancing/class-comparison-level60.json','utf8'));
 assert.equal(new Set(report.classes.map(x=>x.key)).size,13);
 assert.ok(report.classes.find(x=>x.key==='butcher').rows.some(s=>s.nr===35));
 assert.ok(report.classes.some(x=>x.key==='healer'));
 for(const r of report.classes){
  const source=comparison.passiveRows.find(p=>p.key===r.key&&JSON.stringify(p.weapons)===JSON.stringify(r.weapons));
  assert.deepEqual(r.stats,source.stats);
  assert.ok(Math.abs(r.total-r.rows.reduce((a,s)=>a+s.damage,0))<1e-6);
  assert.ok(r.rows.every((s,i)=>!i||s.damage>=r.rows[i-1].damage));
  assert.equal(new Set(r.rows.map(s=>s.nr)).size,r.rows.length);
 }
 const ritual=report.classes.find(x=>x.key==='ritualist');assert.equal(ritual.resources.finalSouls,72);
 assert.equal(ritual.rows.find(s=>s.nr===104).applications,15);
 assert.equal(report.singleUseClasses.find(r=>r.key==='ritualist').resources.finalSouls,70);
 assert.equal(report.spamVariants.length,2);
 for(const v of report.spamVariants){
  const main=report.singleUseClasses.find(r=>r.key===v.variantOf)??report.classes.find(r=>r.key===v.variantOf);
  assert.equal(v.rows.length,main.rows.length);
  assert.equal(v.rows.find(r=>r.nr===v.repeatedSkill).damage,main.rows.find(r=>r.nr===v.repeatedSkill).damage*v.repeatCount);
  assert.ok(Math.abs(v.total-v.rows.reduce((a,r)=>a+r.damage,0))<1e-6);
 }
 assert.equal(report.spamVariants.find(r=>r.key==='ritualist').resources.finalSouls,72);
 assert.equal(report.spamVariants.find(r=>r.key==='summoner').repeatCount,25);
 assert.equal(report.classes.find(r=>r.key==='summoner').rows.find(s=>s.nr===186).applications,25);
});
