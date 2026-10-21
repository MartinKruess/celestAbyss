import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel,resolveCharacterSkillLevels} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
const decision=JSON.parse(fs.readFileSync('data/balancing/druid-wind-280-decision.json'));
const before=JSON.parse(fs.readFileSync(decision.backup+'/skills.json'));
test('Wind Slasher extends Druid only and keeps Herbalist values and limits identical',()=>{
 const s=catalog.find(s=>s.nr===221),old=before.find(s=>s.nr===221);
 for(let level=1;level<=10;level++){
  const a=resolveSkillAtLevel(s,level,{classKey:'herbalist'}),b=resolveSkillAtLevel(old,level,{classKey:'herbalist'});
  for(const k of ['matk','mana','cd','castTimeSeconds'])assert.equal(a[k],b[k]);
 }
 assert.throws(()=>resolveSkillAtLevel(s,11,{classKey:'herbalist'}),/exceeds/);
 const end=resolveSkillAtLevel(s,20,{classKey:'druid'});assert.equal(end.matk,921);assert.equal(end.mana,233);assert.equal(end.cd,45);
 const start=resolveSkillAtLevel(s,1,{classKey:'druid'});assert.equal(start.matk,211);assert.equal(start.mana,53);assert.equal(start.cd,54);
 assert.throws(()=>resolveSkillAtLevel(s,21,{classKey:'druid'}),/exceeds/);
});
test('Wind Shackles retains all endpoint values over fifteen levels',()=>{
 const s=catalog.find(s=>s.nr===125),old=before.find(s=>s.nr===125);assert.equal(s.maxSkillLv,15);
 for(const [level,oldLevel]of [[1,1],[15,10]]){
  const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(old,oldLevel);
  for(const k of ['matk','mana','cd','dur','castTimeSeconds'])assert.equal(a[k],b[k]);
  assert(Math.abs(a.effects[0].value-b.effects[0].value)<1e-12);assert.equal(a.effects[0].durationSeconds,b.effects[0].durationSeconds);
 }
});
test('Forgotten Spell rank two reduces costs to fifteen and always grants one target one level',async()=>{
 const s=catalog.find(s=>s.nr===222),target=catalog.find(s=>s.nr===132);assert.equal(s.maxSkillLv,2);
 const doc=new SkillDataModel(s);await doc.validate();assert.deepEqual(doc.toObject().skillLevelGrant.attributeCostScaling,s.skillLevelGrant.attributeCostScaling);
 for(const [level,cost]of [[1,20],[2,15]]){
  const r=resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:s._id,level},{skillId:target._id,level:target.maxSkillLv}],forgottenSpellTargetId:target._id});
  assert.equal(r.attributeCostSource,222);
  for(const key of ['str','vita','int','wis','agi','dex']){
   assert.equal(r.attributeModifiers[key],-cost);assert.equal(r.skills.find(s=>s.nr===222)[key],-cost);assert.equal(r.skills.find(s=>s.nr===222).skillLevelGrant.attributeCost[key],cost);
  }
  const boosted=r.skills.find(s=>s.nr===132);assert.equal(boosted.learnedLevel,target.maxSkillLv);assert.equal(boosted.effectiveSkillLevel,target.maxSkillLv+1);
 }
 assert.throws(()=>resolveSkillAtLevel(s,3),/exceeds/);
 assert.throws(()=>resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:s._id,level:2}],forgottenSpellTargetId:s._id}),/Invalid/);
 assert.throws(()=>resolveCharacterSkillLevels({catalog,classKey:'druid',learnedSkills:[{skillId:s._id,level:3},{skillId:target._id,level:1}],forgottenSpellTargetId:target._id}),/exceeds/);
});
test('all thirteen classes now have thirty-two skills and exactly 280 points; Energy Strike stays capped',()=>{
 const p=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json'));assert.equal(p.classes.length,13);
 for(const c of p.classes){assert.equal(c.sp,280,c.name);assert.equal(c.skillCount,32,c.name);}
 assert.equal(catalog.find(s=>s.nr===36).learningLimits.classOverrides.Druide,5);
});
