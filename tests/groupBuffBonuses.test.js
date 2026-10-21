import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {normalizedSpeedBonus,autoAttackInterval} from '../services/attackSpeed.js';
import {compareSelfBuffs} from '../services/selfBuffComparison.js';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const skills=read('data/skills.json'),decision=read('data/balancing/group-buff-bonuses-decision.json'),before=read(decision.backup+'/catalog.json');
const model=read('data/balancing/attribute-model.json');
const currentMaxima=structuredClone(decision.maximumBonuses);
let convertedGroupSkills=new Set();
try{convertedGroupSkills=new Set(read('data/balancing/group-skill-damage-decision.json').skillNumbers);}catch(error){if(error.code!=='ENOENT')throw error;}
try{currentMaxima[197].manaRegen=read('data/balancing/aurora-mana-twenty-decision.json').maximumDirectManaRegenerationPerTick;}catch(error){if(error.code!=='ENOENT')throw error;}

test('only approved eight group buffs change; self buffs, passives, costs, timing and levels stay identical',()=>{
 const numbers=new Set(Object.keys(decision.maximumBonuses).map(Number));assert.equal(numbers.size,8);
 for(const old of before){const s=skills.find(s=>s.nr===old.nr);
  if(convertedGroupSkills.has(s.nr))continue; // Independently checked by groupSkillDamage.test.js.
  if(!numbers.has(s.nr)){assert.deepEqual(s,old);continue;}
  for(const k of ['_id','charClass','maxSkillLv','dur','cd','castTimeSeconds','resourceCosts','effects'])assert.deepEqual(s[k],old[k],s.nr+' '+k);
 }
});

test('requested maxima resolve without removed combat bonuses or Wisdom leaking back through old progression',()=>{
 for(const [nr,expected]of Object.entries(currentMaxima)){if(convertedGroupSkills.has(Number(nr)))continue;const s=skills.find(s=>s.nr===Number(nr)),r=resolveSkillAtLevel(s,s.maxSkillLv);for(const[k,v]of Object.entries(expected))assert.ok(Math.abs(r[k]-v)<1e-9,nr+' '+k);}
 for(const [nr,removed]of [[166,['matk']],[197,['patk','matk','pdef','mdef']],[225,['wis']]]){
  const s=skills.find(s=>s.nr===nr);for(let level=1;level<=s.maxSkillLv;level++){const r=resolveSkillAtLevel(s,level);for(const k of removed)assert.equal(r[k],undefined,nr+' '+k+' '+level);}
 }
 for(let level=1;level<=10;level++){
  const body=resolveSkillAtLevel(skills.find(s=>s.nr===75),level),flow=resolveSkillAtLevel(skills.find(s=>s.nr===166),level),pet=resolveSkillAtLevel(skills.find(s=>s.nr===150),level);
  assert.equal(body.str,level);assert.equal(body.vita,level);assert.equal(flow.int,level);assert.equal(flow.wis,level);
  for(const k of ['dex','vita','wis'])assert.equal(pet[k],2*level);
  const aurora=resolveSkillAtLevel(skills.find(s=>s.nr===197),level);assert.equal(aurora.manaRegen,currentMaxima[197].manaRegen*level/10);
 }
});

test('speed points stack once before the attack curve, and the comparison never treats ten points as a tenfold bonus',()=>{
 const dox=skills.find(s=>s.nr===223),feet=skills.find(s=>s.nr===191);
 const r=resolveSkillAtLevel(dox,3),f=resolveSkillAtLevel(feet,3);
 assert.equal(r.statBonusUnits.atkSpeed,'ratingPoints');assert.equal(f.statBonusUnits.movementSpeed,'ratingPoints');
 assert.equal(normalizedSpeedBonus(r,'atkSpeed',r.atkSpeed),.1);assert.equal(normalizedSpeedBonus(r,'movementSpeed',r.movementSpeed),.05);
 assert.equal(normalizedSpeedBonus(f,'movementSpeed',f.movementSpeed),.1);
 assert(autoAttackInterval(1.1)>autoAttackInterval(1)/1.1);
 const pre={key:'shaman',name:'fixture',weapons:[],stats:{maxHealth:1000,maxMana:1000,physicalAttack:100,magicalAttack:100,physicalDefense:0,magicalDefense:0,attackSpeed:1,movementSpeed:1,healthRegen:0,manaRegen:0,criticalDamageBonus:.8},includedSkills:[],knownAttributes:{}};
 const compared=compareSelfBuffs({pre,skills:[dox,feet],model,assignedNumbers:[223,191]});
 assert.ok(Math.abs(compared.stats.attackSpeed-1.1)<1e-9);assert.ok(Math.abs(compared.stats.movementSpeed-1.15)<1e-9);
 const config={duration:30,targetHealth:1e9,enableOwnBuffs:true,ownBuffNumbers:[223,191],preparedBuffNumbers:[223,191],permanentBuffNumbers:[223,191],attackMode:'autoOnly'};
 const points=simulateClass({pre,skills:[dox,feet],model,attackNumbers:[],config});
 const fractions=[dox,feet].map(s=>{const t=structuredClone(s);for(const k of ['atkSpeed','movementSpeed'])if(t.statBonusUnits?.[k]==='ratingPoints'){t[k]/=100;const c=t.statScaling[k];if(c.values)c.values=c.values.map(v=>v/100);else{c.base/=100;c.perLevel/=100;}t.statBonusUnits[k]='fraction';}delete t.levelProgression;return t;});
 const normalized=simulateClass({pre,skills:fractions,model,attackNumbers:[],config});
 assert.equal(points.autoDamage,normalized.autoDamage);assert.equal(points.totalDamage,normalized.totalDamage);
});
