import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {simulateClassFrames} from '../services/timedDamageSimulation.js';
const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
function actors(party,definitions,{duration=1,enemy={physicalAttack:0,physicalDefense:0,magicalDefense:0}}={}){
 const entries=new Map();
 for(const definition of definitions){
  const pre={key:definition.key,name:definition.key,weapons:[],includedSkills:[],stats:{maxHealth:100,maxMana:100,physicalAttack:100,magicalAttack:100,physicalDefense:100,magicalDefense:100,healthRegen:0,manaRegen:0,attackSpeed:1,criticalDamageBonus:0.8}};
  const iterator=simulateClassFrames({pre,skills:definition.skills??[],model,attackNumbers:definition.attacks??[],config:{duration,targetHealth:party.targetHealth,attackMode:definition.mode??'autoOnly',party,reactionSeconds:0,autoToSkillSeconds:0,skillToAutoSeconds:0,encounter:{playerLevel:100,enemyLevel:100,enemyAttackInterval:1,enemy}}});
  const frame=iterator.next();assert.ok(!frame.done);entries.set(definition.key,{iterator,frame:frame.value});
 }
 return entries;
}
function context(health=1e6){return {targetHealth:health,stopped:false,healingNumbers:{},supportNumbers:{},damage({amount}){this.targetHealth=Math.max(0,this.targetHealth-amount);},applyDebuffs(){},debuffActive(){return false;},healingTarget(){return null;}};}
function advance(entries,ticks){
 for(let i=0;i<ticks;i++)for(const entry of entries.values())if(!entry.done){const next=entry.iterator.next();entry.done=next.done;if(next.done)entry.result=next.value;else entry.frame=next.value;}
}

test('Party actors share one target pool; overkill cannot create a second kill or later damage',()=>{
 const party=context(150),entries=actors(party,[{key:'adventurer'},{key:'knight'}]);
 advance(entries,1);assert.equal(party.targetHealth,0);
 party.stopped=true;advance(entries,1);
 assert.equal(entries.get('adventurer').result.totalDamage,90);
 assert.equal(entries.get('knight').result.totalDamage,90);
 assert.equal(entries.get('knight').result.targetDeathAt,0);
 assert.equal(entries.get('adventurer').result.skills[0].hits,1);
});

test('An armor debuff changes another actor damage on the shared clock',()=>{
 const party=context(),hits=[];let weakened=false;
 party.supportNumbers={adventurer:[990001]};party.debuffActive=()=>weakened;
 party.applyDebuffs=({skill})=>{if(skill.nr===990001)weakened=true;};
 party.damage=({key,amount})=>{party.targetHealth-=amount;if(key==='healer'&&amount>0)hits.push(amount);};
 const enemy={physicalAttack:0,physicalDefense:0,get magicalDefense(){return weakened?250:500;}};
 const debuff={nr:990001,skillName_de:'Fixture debuff',maxSkillLv:1,cd:10,castTimeSeconds:0.1,resourceCosts:[],effects:[]};
 const entries=actors(party,[{key:'adventurer',skills:[debuff],mode:'skillsOnly'},{key:'healer'}],{enemy});
 advance(entries,101);
 assert.equal(hits.length,2);assert.ok(Math.abs(hits[0]-50)<1e-9);assert.ok(Math.abs(hits[1]-78)<1e-9);
});

test('Healer spends Mana and cast time to heal an ally rather than adding that healing to itself',()=>{
 const party=context();party.healingNumbers={healer:[990002]};
 const heal={nr:990002,skillName_de:'Fixture ally heal',maxSkillLv:1,cd:10,castTimeSeconds:0.1,resourceCosts:[{resource:'mana',unit:'flat',scaling:{type:'fixed',base:10}}],effects:[{type:'heal',target:'allyOrCompanion',value:40,unit:'flat'}]};
 const entries=actors(party,[{key:'healer',skills:[heal],mode:'skillsOnly'},{key:'knight',mode:'skillsOnly'}]);
 entries.get('knight').frame.state.health=50;
 party.healingTarget=key=>key==='healer'&&entries.get('knight').frame.state.health<65?'knight':null;
 party.healRecipients=()=>['knight'];party.maxHealth=()=>100;
 party.heal=({targetKey,amount})=>{const state=entries.get(targetKey).frame.state;const accepted=Math.min(amount,100-state.health);state.health+=accepted;return accepted;};
 advance(entries,10);assert.equal(entries.get('knight').frame.state.health,50);
 advance(entries,2);assert.equal(entries.get('knight').frame.state.health,90);assert.equal(entries.get('healer').frame.state.health,100);assert.equal(entries.get('healer').frame.state.mana,90);
});
