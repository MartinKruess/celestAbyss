import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createEnemyPack} from '../services/enemyPack.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const enemies=()=>[true,false,false].map((leader,i)=>({id:String(i),leader,stats:{maxHealth:100,physicalAttack:100,physicalDefense:0,magicalDefense:0},attackInterval:1}));
test('Single-target overkill does not damage another wolf; focus orders select distinct targets',()=>{
 for(const focus of ['addsFirst','leaderFirst']){
  const pack=createEnemyPack(enemies(),{focus});
  const hit=pack.resolveHit({raw:1000,physicalShare:1,kind:'auto',time:0});
  assert.equal(hit.amount,100);assert.equal(pack.health,200);assert.equal(pack.deaths.length,1);
  assert.equal(pack.deaths[0].id,focus==='addsFirst'?'1':'0');
  assert.equal(hit.rawDamage,hit.amount+hit.prevented+hit.overkill);
 }
});
test('Damage areas respect target caps; a single-target attack with a support field stays single-target',()=>{
 const pack=createEnemyPack(enemies());
 pack.resolveHit({raw:1000,physicalShare:0,kind:'skill',time:0,skill:{nr:1,attackArea:{target:'enemiesInArea',maxTargets:2}}});
 assert.equal(pack.deaths.length,2);
 const single=createEnemyPack(enemies());
 single.resolveHit({raw:1000,physicalShare:0,kind:'skill',time:0,skill:{nr:101,attackExecution:{targetMode:'singleEnemy'},attackArea:{radiusMeters:7.5}}});
 assert.equal(single.deaths.length,1);
 const soloField=createEnemyPack(enemies());
 soloField.resolveHit({raw:1000,physicalShare:0,kind:'skill',time:0,skill:{nr:9,attackArea:{target:'enemiesInArea',maxTargetsFrom:'ownGroupMembersCurrentlyInAreaIncludingCaster'}}});
 assert.equal(soloField.deaths.length,1);
});
test('All living pack members attack on schedule; killed members never attack again',()=>{
 const pack=createEnemyPack(enemies());
 assert.equal(pack.dueAttackers(.99).length,0);assert.equal(pack.dueAttackers(1).length,3);
 pack.resolveHit({raw:1000,physicalShare:1,kind:'auto',time:1.5});
 assert.equal(pack.dueAttackers(2).length,2);assert.equal(pack.dueAttackers(2).length,0);
});
test('The combat engine fights all three health pools and takes only living wolves attacks',()=>{
 const model=JSON.parse(fs.readFileSync(new URL('../data/balancing/attribute-model.json',import.meta.url)));
 const pre={key:'adventurer',name:'Fixture',weapons:[],includedSkills:[],stats:{maxHealth:10000,maxMana:100,physicalAttack:1000,magicalAttack:0,physicalDefense:326.8,magicalDefense:324.8,healthRegen:9999,manaRegen:0,attackSpeed:1,criticalDamageBonus:.8}};
 const pack=createEnemyPack(enemies(),{playerLevel:100});
 const r=simulateClass({pre,skills:[],model,attackNumbers:[],config:{duration:5,targetHealth:pack.health,baseAttacksPerSecond:1,attackMode:'autoOnly',encounter:{pack,playerLevel:100,enemyLevel:100,enemyAttackInterval:1,enemy:enemies()[0].stats}}});
 assert.equal(r.targetDeathAt,2);assert.equal(r.totalDamage,300);assert.equal(r.enemyHits,3);assert.ok(Math.abs(r.incomingDamage-150)<1e-8);
 assert.equal(r.healthRegenerated,0);assert.equal(pack.health,0);
 assert.equal(r.rawOutgoingDamage,r.totalDamage+r.preventedOutgoingDamage+r.overkillDamage);
});
