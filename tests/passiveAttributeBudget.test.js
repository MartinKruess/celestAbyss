import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const decision=read('data/balancing/passive-attribute-budget-decision.json');
const catalog=read('data/skills.json'),before=read(decision.backup+'/catalog.json');
const keys=['str','vita','int','wis','agi','dex'];
const changes=decision.maximumAttributeReplacements;
let durationChanges=new Set();
try{durationChanges=new Set(read('data/balancing/group-buff-durations-decision.json').changes.map(c=>c.nr));}catch(error){if(error.code!=='ENOENT')throw error;}
let castingChanges=new Set();
try{castingChanges=new Set(read('data/balancing/group-buff-casting-decision.json').skillNumbers);}catch(error){if(error.code!=='ENOENT')throw error;}
let rebalancedGroups=new Set();
try{rebalancedGroups=new Set(Object.keys(read('data/balancing/group-buff-bonuses-decision.json').maximumBonuses).map(Number));}catch(error){if(error.code!=='ENOENT')throw error;}
try{for(const nr of read('data/balancing/group-skill-damage-decision.json').skillNumbers)rebalancedGroups.add(nr);}catch(error){if(error.code!=='ENOENT')throw error;}

test('approved passive changes preserve active self buffs and unrelated definitions, allowing subsequent approved group durations',()=>{
 assert.equal(changes.length,18);assert.equal(catalog.length,before.length);
 const numbers=new Set(changes.map(s=>s.nr));
 for(const old of before){const s=catalog.find(s=>s.nr===old.nr);assert(s);
  if(!numbers.has(s.nr)){
   // The subsequent group-buff rebalance has its own complete snapshot/scope tests.
   if(rebalancedGroups.has(s.nr)){assert(castingChanges.has(s.nr));continue;}
   const actual=structuredClone(s),allowed=[];
   if(durationChanges.has(s.nr))allowed.push('dur','description_de','description_eng');
   if(castingChanges.has(s.nr))allowed.push('cd','castTimeSeconds','castTimeStatus','description_de','description_eng');
   for(const field of allowed){if(Object.hasOwn(old,field))actual[field]=old[field];else delete actual[field];}
   assert.deepEqual(actual,old,'Unapproved change to '+s.nr);continue;
  }
  assert.equal(s.type,'passive');
  for(const field of ['_id','maxSkillLv','maxUpgradeLv','charClass','effects','cooldownScaling','durationScaling','attributeConversionBonus','resourceCosts','learningLimits','learningRequirements'])assert.deepEqual(s[field],old[field],s.nr+' '+field);
 }
});

test('every learned rank grants the planned permanent attribute component with no stale attribute rules',()=>{
 for(const change of changes){const s=catalog.find(s=>s.nr===change.nr),old=before.find(s=>s.nr===change.nr);
  for(let level=1;level<=s.maxSkillLv;level++){
   const r=resolveSkillAtLevel(s,level),previous=resolveSkillAtLevel(old,level);
   for(const key of keys)assert.ok(Math.abs((r[key]??0)-(change.attributes[key]??0)*level/s.maxSkillLv)<1e-9,s.nr+' '+key+' '+level);
   for(const [key,value]of Object.entries(previous))if(typeof value==='number'&&!keys.includes(key)&&!(s.nr===145&&['pdef','mdef'].includes(key)))assert.equal(r[key],value,s.nr+' '+key+' '+level);
  }
 }
 const endurance=catalog.find(s=>s.nr===145);assert.equal(endurance.pdef,undefined);assert.equal(endurance.mdef,undefined);
});

test('all classes retain 32 skills and 280 points and reach their approved permanent attribute totals',()=>{
 const points=read('data/balancing/class-skill-points.json').classes,audit=read('data/balancing/passive-attribute-audit.json');
 assert.equal(points.length,13);assert.equal(audit.rows.length,13);
 for(const c of points){assert.equal(c.sp,280,c.key);assert.equal(c.skillCount,32,c.key);}
 for(const row of audit.rows){const expected=decision.expectedRows.find(r=>r.key===row.key);assert.deepEqual(row.totals,expected.attributes);assert.equal(row.total,row.key==='ritualist'?120:130);}
});

test('basic stats contain the new permanent components exactly once and isolate Knight vitality conversion',()=>{
 const comparison=read('data/balancing/class-comparison-level60.json'),audit=read('data/balancing/passive-attribute-audit.json');
 const map={str:'strength',vita:'vitality',int:'intelligence',wis:'wisdom',agi:'agility',dex:'dexterity'};
 for(const row of audit.rows){const pre=comparison.passiveRows.find(r=>r.key===row.key),base=comparison.rows.find(r=>r.key===row.key);
  for(const key of keys){const actual=(pre.knownAttributes[map[key]]??0)-(base.knownAttributes[map[key]]??0),expected=row.totals[key]+(row.key==='knight'&&key==='str'?pre.knownAttributes.vitality*.1:0);assert.ok(Math.abs(actual-expected)<1e-9,row.key+' '+key);}
 }
 for(const key of ['adventurer','gladiator'])assert(comparison.passiveRows.find(r=>r.key===key).includedSkills.includes(145));
 assert(comparison.passiveRows.find(r=>r.key==='butcher').includedSkills.includes(177));
});
