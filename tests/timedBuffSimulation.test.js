import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {simulateClass} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync('data/balancing/attribute-model.json'));
const pre={key:'adventurer',name:'Buff fixture',weapons:[],includedSkills:[],knownAttributes:{strength:10,vitality:10,wisdom:10},stats:{maxHealth:1000,maxMana:1000,physicalAttack:100,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0,criticalDamageBonus:.8}};
const run=(skills,config={},source=pre)=>simulateClass({pre:source,skills,model,attackNumbers:[],config:{duration:10,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:skills.map(s=>s.nr),manaRegenInterval:3,...config}});
const buff={nr:900,skillName_de:'Strength',maxSkillLv:1,dmgType:'selfbuff',str:10,dur:20,cd:1,castTimeSeconds:.2,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:50}}]};
test('long buffs are paid and cast once, not spammed each time cooldown is ready',()=>{
 const r=run([buff]);assert.equal(r.skills.find(s=>s.nr===900).applications,1);assert.equal(r.manaSpent,50);assert.equal(r.buffManaSpent,50);assert(r.skills.find(s=>s.nr==='auto').firstUse>=.2+1/1.5);assert(r.autoDamage>0);assert.equal(r.buffPeriods[0].start,.2);
 const off=run([buff],{enableOwnBuffs:false});assert.equal(off.manaSpent,0);assert(!off.skills.some(s=>s.nr===900));
});
test('expired buffs renew only after expiry and obey cast-end cooldowns',()=>{
 const r=run([{...buff,dur:2,cd:3}],{duration:8});const row=r.skills.find(s=>s.nr===900);assert.equal(row.applications,3);for(let i=1;i<row.useTimes.length;i++)assert(row.useTimes[i]-row.useTimes[i-1]>=3.2-1e-8);assert.equal(r.manaSpent,150);
});
test('toggle Mana drain is paid separately and disables the effect when unaffordable',()=>{
 const toggle={nr:240,skillName_de:'Toggle',maxSkillLv:1,castTimeSeconds:0,dmgType:'selfbuff',cd:100,effects:[{key:'drain',type:'resourceDrain',resource:'mana',unit:'flat',value:30,intervalSource:'manaRegenerationTick'}]};
 const r=run([toggle],{duration:10},{...pre,stats:{...pre.stats,maxMana:70}});assert.equal(r.buffDrainManaSpent,60);assert.equal(r.manaSpent,60);assert.equal(r.finalMana,10);assert.equal(r.buffPeriods[0].end,9);
});
test('live master Dexterity and pet-only buff both affect the Hunter companion',()=>{
 const source={...pre,key:'hunter',knownAttributes:{dexterity:100}};
 const companion={nr:226,skillName_de:'Pet',maxSkillLv:1,cd:360,castTimeSeconds:0,summonedCreatureSettings:{damageType:'physical',inheritedAttributeFractions:{dexterity:.3},baseAttacksPerSecond:1.5}};
 const dex={...buff,nr:901,str:undefined,dex:20,castTimeSeconds:0,resourceCosts:[]};
 const pet={...buff,nr:150,str:undefined,dex:50,castTimeSeconds:0,resourceCosts:[]};
 const r=run([companion,dex,pet],{ownBuffNumbers:[901,150],duration:3},source);
 const summon=r.skills.find(s=>s.nr===226);assert(summon.hits>0);assert(Math.abs(summon.damage/summon.hits-(120*.3+50)*1.8)<1e-8);
});
test('Rogue Mana restoration requires both own buffs and reconciles with the resource ledger',()=>{
 const skills=JSON.parse(fs.readFileSync('data/skills.json')).filter(s=>[189,238].includes(s.nr));
 const r=run(skills,{duration:8},{...pre,key:'villian'});
 assert(r.manaFromBuffAttacks>0);assert.equal(r.manaFromBuffAttacks,r.skills.find(s=>s.nr==='auto').applications*12);
 assert(Math.abs(r.finalMana-(r.initialMana-r.manaSpent+r.manaRegenerated+r.manaFromBuffAttacks))<1e-8);
 const single=run(skills.filter(s=>s.nr===189),{duration:8},{...pre,key:'villian'});assert.equal(single.manaFromBuffAttacks,0);
});
test('ancestral arrows trigger three flat projectiles without adding weapon attack again',()=>{
 const skills=JSON.parse(fs.readFileSync('data/skills.json')).filter(s=>s.nr===157);
 const r=run(skills,{duration:10},{...pre,key:'hunter'});
 const arrows=r.skills.find(s=>s.nr===157),auto=r.skills.find(s=>s.nr==='auto');
 assert.equal(arrows.applications,1);assert.equal(arrows.damage,auto.applications*360);
});
test('maximum resource buffs do not grant free immediate Health or Mana',()=>{
 const skills=JSON.parse(fs.readFileSync('data/skills.json')).filter(s=>s.nr===163);
 const r=run(skills,{duration:2},{...pre,key:'gladiator'});
 assert.equal(r.finalHealth,1000);assert.equal(r.finalMana,1000-76);
});
test('R6 Ambush counts once at baseline and includes Rogue buffs live',()=>{
 const source={...pre,key:'villian',knownAttributes:{ambush:16},specialAttributeAttack:{attribute:'ambush',factor:1.8,target:'physicalAttack',amount:28.8},stats:{...pre.stats,physicalAttack:128.8,maxMana:1e6}};
 const cfg={duration:8,specialAttributeAttackFactor:1.8};
 const off=run([],{...cfg,enableOwnBuffs:false},source),auto=off.skills.find(s=>s.nr==='auto');assert(Math.abs(auto.damage/auto.applications-128.8)<1e-8);
 const skills=JSON.parse(fs.readFileSync('data/skills.json')).filter(s=>[146,238].includes(s.nr));
 // Assassin's former Ambush bonus was removed; only Rogue's Guile contributes +15.
 const on=run(skills,cfg,source),buffed=on.skills.find(s=>s.nr==='auto');assert(Math.abs(buffed.damage/buffed.applications-155.8)<1e-8);
});
test('stored buffed comparison reconciles all 13 unbuffed control runs and separates buff costs',()=>{
 const report=JSON.parse(fs.readFileSync('data/balancing/all-class-buffed-timed-damage.json'));
 assert.equal(report.results.length,13);assert.equal(new Set(report.results.map(r=>r.key)).size,13);
 if(report.buffScope==='selfOnly'){
  const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
  for(const result of report.results)for(const nr of result.buffNumbers){const skill=catalog.find(s=>s.nr===nr);assert(skill.dmgType==='selfbuff'||nr===34,`Group buff ${nr} in self-only run`);}
  for(const nr of [75,74,107,147,150,158,166,191,192,193,197,223,224,225])assert(report.results.every(r=>!r.buffNumbers.includes(nr)));
 }
 if(report.baselineCalculation==='freshCurrentInputs'){
  assert.equal(report.unbuffedResults.length,13);
  for(const replay of report.replays){const control=report.unbuffedResults.find(r=>r.key===replay.key);assert(Math.abs(control.totalDamage-replay.damage)<1e-6);assert(Math.abs(control.manaSpent-replay.manaSpent)<1e-6);assert(Math.abs(replay.damage-replay.storedDamage-replay.damageDifference)<1e-6);}
 }else assert(report.replays.every(r=>r.identicalToStoredBaseline));
 for(const r of report.results){assert.equal(r.durationSeconds,600);assert(Math.abs(r.totalDamage-r.skills.reduce((n,s)=>n+s.damage,0))<1e-6);assert(Math.abs(r.manaSpent-r.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-6);assert(r.buffManaSpent<=r.manaSpent+1e-6);for(const nr of [79,151,155,159,170])assert(!r.buffNumbers.includes(nr));for(const p of r.buffPeriods)assert(p.end>=p.start&&p.end<=600);}
});

