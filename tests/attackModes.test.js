import test from 'node:test';
import assert from 'node:assert/strict';
import {simulateClass} from '../services/timedDamageSimulation.js';
import model from '../data/balancing/attribute-model.json' with {type:'json'};
const pre={key:'knight',name:'Mode fixture',weapons:[],knownAttributes:{},includedSkills:[],stats:{physicalAttack:100,magicalAttack:0,maxHealth:1000,maxMana:1000,manaRegen:0,healthRegen:0,attackSpeed:1}};
const attack={nr:900,skillName_de:'Hit',dmgType:'physical',maxSkillLv:1,patk:500,cd:5,castTimeSeconds:.2,resourceCosts:[]};
const buff={nr:901,skillName_de:'Power',dmgType:'selfbuff',maxSkillLv:1,patk:50,dur:20,cd:5,castTimeSeconds:1,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:100}}]};
const run=config=>simulateClass({pre,skills:[attack,buff],model,attackNumbers:[900],config:{duration:10,targetHealth:1e9,...config}});

test('public buffs start prepared and permanent while self buffs are paid, cast and renewed',()=>{
 const publicBuff={...buff,nr:901,dmgType:'buff',dur:1};
 const own={...buff,nr:902,dur:2,cd:3,castTimeSeconds:.2};
 const input={pre,skills:[publicBuff,own],model,attackNumbers:[]};
 const config={duration:8,targetHealth:1e9,attackMode:'autoOnly',enableOwnBuffs:true,ownBuffNumbers:[901,902],preparedBuffNumbers:[901],permanentBuffNumbers:[901],recordActionTimeline:true};
 const result=simulateClass({...input,config});
 assert.equal(result.buffPeriods.find(b=>b.nr===901).start,0);
 assert.equal(result.buffPeriods.find(b=>b.nr===901).end,8);
 assert(!result.skills.some(s=>s.nr===901&&s.applications>0));
 assert.equal(result.actionTimeline[0].nr,902);
 assert.equal(result.actionTimeline[0].time,0);
 assert.equal(result.buffPeriods.find(b=>b.nr===902).start,.2);
 assert.equal(result.skills.find(s=>s.nr===902).applications,3);
 assert.equal(result.buffManaSpent,300);
 const cached=simulateClass({...input,config:{...config,cacheCombatStats:true}});
 delete result.config;delete cached.config;
 assert.deepEqual(cached,result);
});

test('skill-preferred filler autos do not displace ready skills or delay the next cooldown',()=>{
 const skill={...attack,castTimeSeconds:0,cd:2};
 const result=simulateClass({pre,skills:[skill],model,attackNumbers:[900],config:{duration:6,targetHealth:1e9,attackMode:'skillsPreferred',recordActionTimeline:true}});
 assert.deepEqual(result.skills.find(s=>s.nr===900).useTimes,[0,2,4]);
 const autos=result.skills.find(s=>s.nr==='auto');assert(autos.applications>0);
 for(const a of result.actionTimeline.filter(a=>a.nr==='auto')){
  assert.equal(a.readyAffordableSelectedSkillCount,0);
  for(const t of result.skills.find(s=>s.nr===900).useTimes)assert(t<a.time||t>=a.recoveryUntil-1e-8);
 }
});

test('fast filler attacks cannot keep restarting recovery and starve skills',()=>{
 const source={...pre,key:'luminet',stats:{...pre.stats,attackSpeed:4}};
 const skill={...attack,castTimeSeconds:0,cd:3};
 const result=simulateClass({pre:source,skills:[skill],model,attackNumbers:[900],config:{duration:10,targetHealth:1e9,attackMode:'skillsPreferred'}});
 assert.deepEqual(result.skills.find(s=>s.nr===900).useTimes,[0,3,6,9]);
 assert(result.skills.find(s=>s.nr==='auto').applications>0);
});

test('filler auto yields to a regeneration tick that funds a waiting skill',()=>{
 const skill={...attack,cd:1,castTimeSeconds:0,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:100}}]};
 const source={...pre,stats:{...pre.stats,maxMana:100,manaRegen:100}};
 const result=simulateClass({pre:source,skills:[skill],model,attackNumbers:[900],config:{duration:5,targetHealth:1e9,attackMode:'skillsPreferred',manaRegenInterval:2.5}});
 assert.deepEqual(result.skills.find(s=>s.nr===900).useTimes,[0,2.5]);
 for(const t of result.skills.find(s=>s.nr==='auto').useTimes)assert(t<2||t>=2.5);
});

test('a ready selected filler skill is used before an auto-attack',()=>{
 const large={...attack,nr:910,patk:1000,cd:10,castTimeSeconds:0};
 const small={...attack,nr:911,patk:100,cd:2,castTimeSeconds:0};
 const result=simulateClass({pre,skills:[large,small],model,attackNumbers:[910,911],config:{duration:5,targetHealth:1e9,attackMode:'skillsPreferred',recordActionTimeline:true}});
 assert.deepEqual(result.actionTimeline.slice(0,2).map(a=>a.nr),[910,911]);
 assert(result.skills.some(s=>s.nr==='auto'&&s.applications>0));
});

test('lookahead can reserve Mana for a stronger skill three seconds away and fill with autos',()=>{
 const strong={...attack,nr:910,patk:1000,cd:3,castTimeSeconds:0,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:600}}]};
 const small={...attack,nr:911,patk:100,cd:1,castTimeSeconds:0,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:300}}]};
 const source={...pre,stats:{...pre.stats,manaRegen:300}};
 const input={pre:source,skills:[strong,small],model,attackNumbers:[910,911]};
 const config={duration:4,targetHealth:1e9,attackMode:'skillsPreferred',manaRegenInterval:3,skillPriorityScores:{910:1000,911:100},recordActionTimeline:true};
 const eager=simulateClass({...input,config});assert.deepEqual(eager.skills.find(s=>s.nr===910).useTimes,[0]);
 const reserved=simulateClass({...input,config:{...config,skillWaitLookaheadSeconds:3,skillWaitPriorityRatio:2}});
 assert.deepEqual(reserved.skills.find(s=>s.nr===910).useTimes,[0,3]);
 assert(reserved.autoDamage>0);
 assert(reserved.autoOnlyPeriods.some(p=>p.reason==='waitingForPrioritySkill'));
});

test('permanent prepared buffs never expire, consume upkeep or require recasting',()=>{
 const permanent={...buff,dur:1,effects:[{type:'resourceDrain',resource:'mana',unit:'flat',value:500,intervalSource:'manaRegenerationTick'}]};
 const result=simulateClass({pre,skills:[permanent],model,attackNumbers:[],config:{duration:10,targetHealth:1e9,attackMode:'autoOnly',enableOwnBuffs:true,prebuffOwnBuffs:true,permanentPrebuffs:true,ownBuffNumbers:[901],manaRegenInterval:3}});
 assert.equal(result.manaSpent,0);
 assert.equal(result.buffPeriods.length,1);
 assert.equal(result.buffPeriods[0].end,10);
 assert.equal(result.autoDamage,150*result.skills.find(s=>s.nr==='auto').applications);
});

test('foreign prepared buffs use provider levels and do not alter recipient passive stats',()=>{
 const foreign={...buff,maxSkillLv:10,effectiveSkillLevel:10,patk:undefined,statScaling:{patk:{type:'linear',base:5,perLevel:5}},learningLimits:{defaultMaxLevel:1}};
 const result=simulateClass({pre,skills:[buff],model,attackNumbers:[],config:{duration:10,targetHealth:1e9,attackMode:'autoOnly',enableOwnBuffs:true,prebuffOwnBuffs:true,permanentPrebuffs:true,ownBuffNumbers:[901],externalBuffSkills:[foreign]}});
 assert.equal(result.autoDamage,150*result.skills.find(s=>s.nr==='auto').applications);
 assert.equal(pre.stats.physicalAttack,100);
});

test('explicit search priorities change skill order without bypassing Mana affordability',()=>{
 const cost=[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:600}}];
 const high={...attack,nr:910,patk:1000,resourceCosts:cost};
 const low={...attack,nr:911,patk:500,resourceCosts:cost};
 const input={pre,skills:[high,low],model,attackNumbers:[910,911]};
 const config={duration:1,targetHealth:1e9,attackMode:'skillsOnly',recordActionTimeline:true};
 const standard=simulateClass({...input,config});
 assert.equal(standard.actionTimeline[0].nr,910);
 const chosen=simulateClass({...input,config:{...config,skillPriorityScores:{910:1,911:10}}});
 assert.equal(chosen.actionTimeline[0].nr,911);
 assert.equal(chosen.manaSpent,600);
 assert.equal(chosen.actionTimeline.length,1);
 assert.equal(chosen.finalMana,400);
});

test('skills-only does not spend Mana on Explosive Arrow charges requiring basic attacks',()=>{
 const explosive={...attack,nr:47,patk:1000,cd:30,castTimeSeconds:0,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:500}}]};
 const input={pre,skills:[attack,explosive],model,attackNumbers:[47,900]};
 const skills=simulateClass({...input,config:{duration:10,targetHealth:1e9,attackMode:'skillsOnly'}});
 assert(!skills.skills.some(s=>s.nr===47));
 assert.equal(skills.manaSpent,0);
 assert(skills.skillDamage>0);
 const mixed=simulateClass({...input,config:{duration:10,targetHealth:1e9}});
 assert(mixed.skills.some(s=>s.nr===47&&s.applications>0));
});
test('attack modes isolate player attacks while mixed mode remains the default',()=>{
 const mixed=run({}),autos=run({attackMode:'autoOnly'}),skills=run({attackMode:'skillsOnly'});
 assert(mixed.autoDamage>0&&mixed.skillDamage>0);assert(autos.autoDamage>0);assert(!autos.skills.some(s=>s.nr===900));assert(skills.skillDamage>0);assert(!skills.skills.some(s=>s.nr==='auto'));
 assert.throws(()=>run({attackMode:'invalid'}),/Unknown attack mode/);
});
test('prebuffing starts active without preparation costs but renewals still consume time and Mana',()=>{
 const result=run({attackMode:'autoOnly',enableOwnBuffs:true,ownBuffNumbers:[901],prebuffOwnBuffs:true});
 assert.equal(result.manaSpent,0);assert.equal(result.buffPeriods[0].start,0);assert.equal(result.autoDamage,150*result.skills.find(s=>s.nr==='auto').applications);
 const renewed=simulateClass({pre,skills:[{...buff,dur:2}],model,attackNumbers:[],config:{duration:10,targetHealth:1e9,attackMode:'autoOnly',enableOwnBuffs:true,ownBuffNumbers:[901],prebuffOwnBuffs:true}});
 assert(renewed.skills.find(s=>s.nr===901).applications>0);assert(renewed.manaSpent>=100);assert(renewed.buffPeriods.length>1);
});

test('prebuffed resource bonuses start filled while normal activation grants no free refill',()=>{
 const capacity={...buff,patk:undefined,health:300,effects:[{type:'statModifier',target:'self',stat:'maxMana',value:200,unit:'flat'}]};
 const result=simulateClass({pre,skills:[capacity],model,attackNumbers:[],config:{duration:1,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[901],prebuffOwnBuffs:true}});
 assert.equal(result.initialMana,1200);assert.equal(result.initialHealth,1300);assert.equal(result.manaSpent,0);
});
