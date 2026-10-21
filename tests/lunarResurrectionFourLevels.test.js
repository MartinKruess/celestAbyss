import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync('data/skills.json'));
test('Lunar resurrection restores level-specific HP and charges the healer while retaining target Mana',async()=>{
 const skill=catalog.find(s=>s.nr===206);assert.equal(skill.maxSkillLv,4);
 const doc=new SkillDataModel(skill);await doc.validate();
 assert.deepEqual(doc.toObject().resurrectionSettings.restoredHealthScaling,skill.resurrectionSettings.restoredHealthScaling);
 for(let level=1;level<=4;level++){
  const r=resolveSkillAtLevel(skill,level,{classKey:'healer'});
  assert.equal(r.health,[80,160,320,640][level-1]);assert.equal(r.resurrectionSettings.restoredHealth,r.health);
  assert.equal(r.mana,[120,180,240,300][level-1]);
  assert.equal(r.resurrectionSettings.requiresDeadAlly,true);assert.equal(r.resurrectionSettings.preservesTargetMana,true);
  assert.equal(r.cd,[100,90,80,70][level-1]);assert.equal(r.castTimeSeconds,1);assert.equal(r.animationDurationSeconds,1);assert.equal(r.dur,0);
 }
 assert.throws(()=>resolveSkillAtLevel(skill,5,{classKey:'healer'}),/exceeds/);
 const points=JSON.parse(fs.readFileSync('data/balancing/class-skill-points.json')).classes.find(c=>c.key==='healer');assert.equal(points.sp,280);assert.equal(points.skillCount,32);
});
