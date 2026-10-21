import {withSkillClassification} from '../services/skillClassification.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import unresolved from '../data/unresolved-source-skills.json' with {type:'json'};
import {SkillDataModel} from '../models/skillSchema.js';
import {prepareSeed,insertOperations} from '../scripts/seedData.js';
import {skillForClass} from '../services/skillLearningLevel.js';
const normalize=value=>JSON.parse(JSON.stringify(value));
test('mace trainings use the dual axe progression once per character with mirrored attributes',()=>{
 const axe=catalog.find(s=>s.nr===26);
 const druid=catalog.find(s=>s.nr===132);
 const shaman=catalog.find(s=>s.skillName_eng==='Dual Mace Training');
 assert.deepEqual(druid.charClass,['Druide','Alchemist']);
 assert.deepEqual(shaman.charClass,['Shamane','High Elves']);
 assert.equal(druid.maxSkillLv,10);assert.equal(shaman.maxSkillLv,10);
 assert.deepEqual(shaman.statScaling.str,axe.statScaling.str);
 assert.deepEqual(shaman.statScaling.int,axe.statScaling.agi);
 assert.deepEqual(druid.statScaling.str,shaman.statScaling.int);
 assert.deepEqual(druid.statScaling.int,shaman.statScaling.str);
 for(let i=0;i<10;i++){
  assert.equal(shaman.statScaling.str.values[i]+shaman.statScaling.int.values[i],3+i);
  assert.equal(druid.statScaling.str.values[i]+druid.statScaling.int.values[i],3+i);
 }
 assert.equal(shaman.statScaling.str.values[9],7);
 assert.equal(shaman.statScaling.int.values[9],5);
});
test('Healer trades five Energy Strike levels for five Recovery levels without affecting other casters',()=>{
 const energy=catalog.find(s=>s.nr===36),recovery=catalog.find(s=>s.nr===124);
 assert.equal(skillForClass(energy,'healer').maxSkillLv,5);
 assert.equal(skillForClass(energy,'druid').maxSkillLv,5);
 for(const key of ['luminet','shaman'])assert.equal(skillForClass(energy,key).maxSkillLv,10);
 assert.equal(energy.maxSkillLv,10);
 assert.equal(recovery.maxSkillLv,20);
 assert.equal(recovery.statScaling.health.values.length,20);
 assert.equal(recovery.statScaling.health.values[19],600);
 assert.equal(recovery.effects[0].valueScaling.values[19],600);
 assert.equal(recovery.durationScaling.values[19],4);
});
test('every exported skill survives seed mapping with its ID and complete definition',()=>{
const {groups,errors}=prepareSeed();assert.deepEqual(errors,[]);const group=groups.find(g=>g.model===SkillDataModel);assert.equal(group.documents.length,catalog.length);
for(let i=0;i<catalog.length;i++){
const expected=normalize(new SkillDataModel(withSkillClassification(catalog[i])).toObject());const actual=normalize(group.documents[i].toObject());assert.deepEqual(actual,expected,catalog[i].skillName_de);
// Compare fields after the model intentionally normalizes legacy zero values.
for(const key of Object.keys(expected))assert.ok(key in actual,`Export field dropped: ${key}`);
}
const operations=insertOperations(group);
for(let i=0;i<operations.length;i++)assert.equal(String(operations[i].updateOne.update.$setOnInsert._id),catalog[i]._id);
assert.equal(new Set(catalog.map(s=>s._id)).size,catalog.length);
});
test('unresolved source entries remain separate from the import catalog',()=>{
assert.equal(unresolved.count,13);assert.equal(unresolved.entries.length,13);assert.ok(unresolved.entries.every(e=>e.match==='noNameCandidate'));
assert.ok(!unresolved.entries.some(e=>[199,204,206,219,237].includes(e.sourceID)));
assert.ok(catalog.some(s=>s.skillName_eng==='Assassin'&&s.charClass.includes('Villian')));
});
