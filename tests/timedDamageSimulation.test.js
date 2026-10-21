import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';

const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
function run(skills,config={},overrides={}){
 const stats={maxHealth:1000,maxMana:100,physicalAttack:100,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0,criticalDamageBonus:0.8,...overrides};
 return simulateClass({pre:{key:'adventurer',name:'Fixture',weapons:[],stats,includedSkills:[]},skills,model,attackNumbers:skills.map(s=>s.nr),config:{duration:10,targetHealth:1e9,reactionSeconds:0,skillToAutoSeconds:0,autoToSkillSeconds:0,...config}});
}
const attack=(nr,base,cd,cast=0,mana=0)=>({nr,skillName_de:'Fixture '+nr,maxSkillLv:1,patk:base,cd,castTimeSeconds:cast,resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:mana}}]});
test('Sylph favor modifies only its assigned wind attacks at the learned passive level',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const favor=catalog.find(s=>s.skillName_eng==='Favor of the Sylphs');
 const wind={...attack(221,100,10,0,20)};
 const stats={maxHealth:1000,maxMana:100,physicalAttack:100,magicalAttack:0,attackSpeed:1,manaRegen:0,healthRegen:0,criticalDamageBonus:0.8};
 const simulate=level=>simulateClass({pre:{key:'adventurer',name:'Fixture',weapons:[],stats,includedSkills:level?[favor.nr]:[]},skills:[wind,{...favor,maxSkillLv:level||5}],model,attackNumbers:[221],config:{duration:6,targetHealth:1e9,reactionSeconds:0,skillToAutoSeconds:0,autoToSkillSeconds:0}}).skills.find(s=>s.nr===221);
 const normal=simulate(0),first=simulate(1),max=simulate(10);
 assert.equal(normal.applications,1);assert.equal(normal.manaSpent,20);assert.equal(normal.damage,200);
 assert.equal(first.applications,1);assert.equal(first.manaSpent,19.9);assert.ok(Math.abs(first.damage-201)<1e-8);
 assert.equal(max.applications,2);assert.equal(max.manaSpent,38);assert.ok(Math.abs(max.damage-420)<1e-8);
 const unaffected=run([attack(999,100,10,0,20),favor],{duration:1}).skills.find(s=>s.nr===999);
 assert.equal(unaffected.damage,200);assert.equal(unaffected.manaSpent,20);
});
test('Sylph cast reduction unlocks only at level ten and does not shorten the pull',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const favor=catalog.find(s=>s.skillName_eng==='Favor of the Sylphs');
 const wind={...attack(221,100,10,0.4,0)};
 const stats={maxHealth:1000,maxMana:100,physicalAttack:100,magicalAttack:0,attackSpeed:1,manaRegen:0,healthRegen:0,criticalDamageBonus:0.8};
 const simulate=level=>simulateClass({pre:{key:'adventurer',name:'Fixture',weapons:[],stats,includedSkills:[favor.nr]},skills:[wind,{...favor,maxSkillLv:level}],model,attackNumbers:[221],config:{duration:0.31,targetHealth:1e9}}).skills.find(s=>s.nr===221);
 assert.equal(simulate(9).damage,0);
 assert.ok(Math.abs(simulate(10).damage-210)<1e-8);
 const vacuum=catalog.find(s=>s.nr===118);
 assert.equal(vacuum.durationScaling.base+4*vacuum.durationScaling.perLevel,4);
});
test('Vacuum Impulse separates physical cast-completion damage from the delayed magical explosion',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const skill={...catalog.find(s=>s.nr===118),resourceCosts:[]};
 const before=run([skill],{duration:4.39});
 assert.equal(before.skills.find(s=>s.nr===118).damage,1080);
 assert.equal(before.skills.find(s=>s.nr===118).hits,1);
 const after=run([skill],{duration:4.4});
 assert.equal(after.skills.find(s=>s.nr===118).damage,3140);
 assert.equal(after.skills.find(s=>s.nr===118).hits,2);
 assert.deepEqual(skill.attackExecution.damagePhases.map(p=>p.target),['enemy','enemiesInArea']);
});
test('split-base attack grants five rage per damaging application, not per phase',()=>{
 const s={...attack(930,60,4),attackExecution:{sequenceScalesSkillBaseOnly:true,hitSequence:[{offsetSeconds:0,damageMultiplier:1/6},{offsetSeconds:1,damageMultiplier:1/3},{offsetSeconds:2,damageMultiplier:1/2}]},effects:[{type:'resourceGain',resource:'rage',gainTrigger:'ownSkillDamage',oncePerSkillApplication:true,value:5}]};
 const r=run([s],{duration:7});
 assert.equal(r.skills.find(x=>x.nr===930).hits,6);
 assert.equal(r.skills.find(x=>x.nr===930).damage,720);
 assert.equal(r.finalRage,10);
 const boundary=run([s],{duration:1.5});
 assert.equal(boundary.skills.find(x=>x.nr===930).damage,230);
 assert.equal(boundary.finalRage,5);
 const noDamage=run([{...s,patk:0}],{duration:3},{physicalAttack:0});
 assert.equal(noDamage.finalRage,0);
});

test('Morrak uses its stored 1.1 frequency while spirit companion stays at 1.5',()=>{
 const morrak={...attack(237,0,360),summonedCreatureSettings:{baseAttacksPerSecond:1.1,damageType:'magical',magicalAttackFractionOfCaster:1/3}};
 const spirit={...attack(226,0,360),summonedCreatureSettings:{baseAttacksPerSecond:1.5,damageType:'physical',inheritedAttributeFractions:{dexterity:0.3}}};
 const pre={key:'hunter',name:'Fixture',weapons:[],includedSkills:[],knownAttributes:{dexterity:100},stats:{maxHealth:1000,maxMana:100,physicalAttack:100,magicalAttack:300,attackSpeed:1,healthRegen:0,manaRegen:0}};
 const simulate=s=>simulateClass({pre,skills:[s],model,attackNumbers:[s.nr],config:{duration:10.5,targetHealth:1e9}});
 assert.equal(simulate(morrak).skills.find(s=>s.nr===237).hits,11);
 assert.equal(simulate(spirit).skills.find(s=>s.nr===226).hits,15);
});

test('Druid summons its separate Intelligence-based magical Nature Spirit',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const nature=catalog.find(s=>s.nr===244),hunter=catalog.find(s=>s.nr===226);
 assert.deepEqual(nature.charClass,['Druide','Alchemist']);
 assert(!hunter.charClass.includes('Druide'));
 assert.equal(nature.summonedCreatureSettings.damageType,'magical');
 assert.equal(nature.summonedCreatureSettings.damageElement,'wind');
 const pre={key:'druid',name:'Fixture',weapons:[],includedSkills:[],knownAttributes:{intelligence:100,dexterity:0},stats:{maxHealth:1000,maxMana:1000,physicalAttack:100,magicalAttack:900,attackSpeed:1,healthRegen:0,manaRegen:0}};
 const result=simulateClass({pre,skills:[nature,hunter],model,attackNumbers:[],config:{duration:10.5,targetHealth:1e9}});
 const summon=result.skills.find(s=>s.nr===244);
 assert.equal(summon.applications,1);
 assert.equal(summon.hits,11);
  assert(Math.abs(summon.damage-11*(100+(100*.1+10)*1.8))<1e-8);
 assert(!result.skills.some(s=>s.nr===226));
});

test('ready high-damage attacks interrupt spam selection at next action boundary',()=>{
 const r=run([attack(900,1000,4,0.1),attack(901,1,0.2,0.1)]);
 const strong=r.skills.find(s=>s.nr===900);
 assert.equal(strong.applications,3);
 assert(strong.useTimes[1]>=4.1&&strong.useTimes[1]<4.4);
 assert(strong.useTimes[2]>=8.2&&strong.useTimes[2]<8.6);
});

test('cast completion exactly at test boundary counts, later hits do not',()=>{
 const r=run([attack(900,100,20,1)],{duration:1});
 assert.equal(r.skillDamage,200);
 const later=run([attack(900,100,20,1.01)],{duration:1});
 assert.equal(later.skillDamage,0);
});

test('mana affordability blocks repeat until exact regeneration tick',()=>{
 const r=run([attack(900,100,0.1,0,100)],{duration:5},{manaRegen:100});
 assert.deepEqual(r.skills.find(s=>s.nr===900).useTimes,[0,2,4]);
 assert.equal(r.manaSpent,300);
 assert.equal(r.manaRegenerated,200);
 assert.equal(r.finalMana,0);
 assert(r.autoDamage>0);
});

test('unaffordable health-cost action cannot kill actor or borrow future regeneration',()=>{
 const s=attack(900,100,0.1);
 s.resourceCosts=[{resource:'health',reference:'maxHealth',unit:'fraction',scaling:{type:'fixed',base:0.6}}];
 const r=run([s],{duration:1});
 assert.equal(r.skills.find(s=>s.nr===900).applications,1);
 assert.equal(r.finalHealth,400);
 assert.equal(r.healthCosts,600);
});

test('stored output reconciles damage ledgers and respects all cooldowns',()=>{
 const report=JSON.parse(fs.readFileSync(new URL('../data/balancing/all-class-timed-damage.json',import.meta.url)));
 const catalog=JSON.parse(fs.readFileSync(new URL(`../data/balancing/simulation-inputs/${report.inputHashes['data/skills.json']}.skills.json`,import.meta.url)));
 const comparison=JSON.parse(fs.readFileSync(new URL('../data/balancing/class-comparison-level60.json',import.meta.url)));
 for(const r of report.results){
  assert(Math.abs(r.totalDamage-r.skills.reduce((a,s)=>a+s.damage,0))<0.001,r.name);
  assert(Math.abs(r.totalDamage-r.minutes.reduce((a,m)=>a+m.damage,0))<0.001,r.name);
  assert(r.finalMana>=0&&r.finalHealth>0,r.name);
  for(const row of r.skills){
   if(row.nr==='auto')continue;
   const s=skillForClass(catalog.find(s=>s.nr===row.nr),r.key);
   const pre=comparison.passiveRows.find(p=>p.key===r.key&&JSON.stringify(p.weapons)===JSON.stringify(r.weapons));
   const modifiers=targetedSkillModifiers(catalog,pre?.includedSkills??[],row.nr);
   const c=s.cooldownScaling;
   let cd=row.nr===237?360:c?.type==='table'?c.values[s.maxSkillLv-1]:c?c.base+(c.type==='fixed'?0:(s.maxSkillLv-1)*c.perLevel):s.cd??0;
   if(r.key==='herbalist')cd=Math.max(0,cd-15);
   cd=Math.max(0,cd-modifiers.cooldownReduction);
   if(r.config.cooldownStart==='castEnd'){const cast=row.nr===237?0.4:s.castTimeSeconds??0;cd+=Math.max(0,cast-modifiers.castTimeReduction);}
   for(let i=1;i<row.useTimes.length;i++)assert(row.useTimes[i]-row.useTimes[i-1]>=cd-1e-6,r.name+' '+row.name);
  }
 }
});


test('100 attack speed points deliver 78 combined melee actions per minute without cumulative frame drift',()=>{
 const r=run([],{duration:60});
 assert.equal(r.skills.find(s=>s.nr==='auto').applications,78);
 assert.equal(r.autoDamage,7800);
});

test('repeated field attacks add character magical attack per scheduled tick',()=>{
 const s={nr:239,skillName_de:'Field fixture',maxSkillLv:1,matk:10,cd:60,castTimeSeconds:0.1,resourceCosts:[],effects:[{type:'periodicDamage',value:10,intervalSeconds:1.5,firstTickAfterSeconds:1.5,durationSeconds:3,addsCasterMagicalAttack:true}]};
 const r=run([s],{duration:4});
 assert.equal(r.skills.find(s=>s.nr===239).hits,2);
 assert.equal(r.skillDamage,220);
});

test('resource-limited soul windows never exceed 25 casts and harvest follows 15 torments',()=>{
 const report=JSON.parse(fs.readFileSync(new URL('../data/balancing/all-class-timed-damage.json',import.meta.url)));
 const soul=report.results.find(r=>r.key==='summoner');
 const collect=soul.skills.find(s=>s.nr===186),mark=soul.skills.find(s=>s.nr===185);
 assert(collect.applications<=mark.applications*25);
 assert.equal(collect.useTimes.filter(x=>x>=mark.useTimes[0]-1e-7&&x<mark.useTimes[0]+5-1e-7).length,25);
 for(const t of mark.useTimes){const casts=collect.useTimes.filter(x=>x>=t-1e-7&&x<t+5-1e-7);assert(casts.length<=25);for(let i=1;i<casts.length;i++)assert(casts[i]-casts[i-1]>=.2-1e-7);}
 const ritual=report.results.find(r=>r.key==='ritualist');
 const torments=ritual.skills.find(s=>s.nr===104),harvest=ritual.skills.find(s=>s.nr===105),shackle=ritual.skills.find(s=>s.nr===103);
 for(const t of harvest?.useTimes??[]){const start=shackle.useTimes.filter(x=>x<t).at(-1);assert.equal(torments.useTimes.filter(x=>x>start&&x<t).length,15);}
});

test('funded soul combo fits 25 prepaid casts and separately paid finisher',()=>{
 const skills=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url))).filter(s=>[185,186,229].includes(s.nr));
 const pre={key:'summoner',name:'Fixture',weapons:[],includedSkills:[],knownAttributes:{dexterity:100},stats:{maxHealth:1000,maxMana:1000000,physicalAttack:100,magicalAttack:0,attackSpeed:1,healthRegen:0,manaRegen:0}};
 const r=simulateClass({pre,skills,model,attackNumbers:[186,229],config:{duration:6,targetHealth:1e9}});
 assert.equal(r.skills.find(s=>s.nr===186).applications,25);
 assert.equal(r.skills.find(s=>s.nr===229).applications,1);
 assert.equal(r.manaSpent,1399);
});


test('Herbalist permanent recharge reduces Storm cooldown from91 to76 seconds',()=>{
 const skills=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url))).filter(s=>[112,123].includes(s.nr));
 const pre={key:'herbalist',name:'Funded cooldown fixture',weapons:[],includedSkills:[123],knownAttributes:{},stats:{maxHealth:1000,maxMana:1e9,physicalAttack:100,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0}};
 const report=simulateClass({pre,skills,model,attackNumbers:[112],config:{duration:600,targetHealth:1e12}});
 const storm=report.skills.find(s=>s.nr===112);
 assert(storm.applications>=7);
 for(let i=1;i<storm.useTimes.length;i++){assert(storm.useTimes[i]-storm.useTimes[i-1]>=76-1e-6);assert(storm.useTimes[i]-storm.useTimes[i-1]<78);}
});

 test('all mage bases are 1.1 while melee bases remain 1.3',()=>{
 const simulate=(key,speed)=>simulateClass({pre:{key,name:key,weapons:[],includedSkills:[],knownAttributes:{},stats:{maxHealth:100000,maxMana:100,physicalAttack:100,magicalAttack:100,attackSpeed:speed,healthRegen:0,manaRegen:0}},skills:[],model,attackNumbers:[],config:{duration:60,targetHealth:1e9}});
 for(const key of ['healer','luminet','ritualist'])assert.equal(simulate(key,1).skills.find(s=>s.nr==='auto').applications,66);
 assert.equal(simulate('herbalist',1).skills.find(s=>s.nr==='auto').applications,66);
 for(const key of ['hunter','summoner'])assert.equal(simulate(key,1).skills.find(s=>s.nr==='auto').applications,66);
 assert.equal(simulate('villian',1).skills.find(s=>s.nr==='auto').applications,78);
 assert.equal(simulate('villian',1.2).skills.find(s=>s.nr==='auto').applications,92);
 });

test('mages and ranged classes receive diminishing returns and the universal two-auto limit',()=>{
 for(const key of ['healer','luminet','ritualist','herbalist','hunter','summoner']){
  const run=speed=>simulateClass({pre:{key,name:key,weapons:[],includedSkills:[],stats:{maxHealth:10000,maxMana:100,physicalAttack:100,magicalAttack:100,attackSpeed:speed,healthRegen:0,manaRegen:0}},skills:[],model,attackNumbers:[],config:{duration:60,targetHealth:1e9,attackMode:'autoOnly'}}).skills.find(s=>s.nr==='auto');
  assert(run(1.5).applications<Math.ceil(60*1.1*1.5),key+' must use the curve');
  const capped=run(100);assert(capped.applications<=120,key+' must not exceed two autos per second');
  for(let i=1;i<capped.useTimes.length;i++)assert(capped.useTimes[i]-capped.useTimes[i-1]>=.5-1e-7);
 }
});


test('reaction delay blocks auto-attacks between consecutive casts',()=>{
 const r=run([attack(900,1,0,0.2)],{duration:1,reactionSeconds:0.1});
 assert.deepEqual(r.skills.find(s=>s.nr===900).useTimes,[0,0.3,0.6,0.9]);
 assert.equal(r.autoDamage,0);
});

test('auto-attack waits half a second after skill completion',()=>{
 const r=run([attack(900,1,10,0.2)],{duration:2,reactionSeconds:0.1,skillToAutoSeconds:0.5});
 const auto=r.skills.find(s=>s.nr==='auto');
 assert.equal(auto.hits,2);
 assert.equal(r.minutes[0].autoDamage,200);
});

test('legacy Faith attack configuration cannot reintroduce a second Luminet attack attribute',()=>{
 const pre={key:'luminet',name:'Unlock fixture',weapons:[],knownAttributes:{faith:5},includedSkills:[],stats:{maxHealth:10000,maxMana:100,physicalAttack:100,magicalAttack:100,attackSpeed:1,healthRegen:0,manaRegen:0}};
 const skills=[attack(900,0,10,0)];skills[0].matk=10;
 const simulate=factor=>simulateClass({pre,skills,model,attackNumbers:[900],config:{duration:0.1,targetHealth:1e9,specialAttributeAttackFactor:factor}});
 assert.equal(simulate(0).skillDamage,110);
 assert.equal(simulate(2).skillDamage,110);
});

test('cooldown begins after cast completion, including when cooldown is shorter than cast',()=>{
 const r=run([attack(900,1,0.6,0.15)],{duration:2});
 assert.deepEqual(r.skills.find(s=>s.nr===900).useTimes,[0,0.75,1.5]);
 const long=run([attack(900,1,0.1,0.5)],{duration:1.3});
 assert.deepEqual(long.skills.find(s=>s.nr===900).useTimes,[0,0.6,1.2]);
});

test('skill to auto waits a complete current attack interval',()=>{
 const r=run([attack(900,1,10,0.2)],{duration:2,skillToAutoSeconds:'attackInterval'});
 const auto=r.skills.find(s=>s.nr==='auto');
 assert.equal(auto.useTimes[0],0.97);
 const slow=run([attack(900,1,10,0.2)],{duration:3,skillToAutoSeconds:'attackInterval'},{attackSpeed:0.5});
 assert.equal(slow.skills.find(s=>s.nr==='auto').useTimes[0],1.74);
});
test('auto to skill transition waits half a second without resetting attack cadence',()=>{
 const r=run([attack(900,1,0.3)],{duration:1,autoToSkillSeconds:0.5});
 const auto=r.skills.find(s=>s.nr==='auto');const skill=r.skills.find(s=>s.nr===900);
 for(const t of skill.useTimes)for(const a of auto.useTimes)assert(t<a||t>=a+0.5-1e-8);
 assert(auto.applications>0);
});
