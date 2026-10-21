import knightCooldownDecision from '../data/balancing/knight-cooldown-combination-decision.json' with {type:'json'};
import knightDecision from '../data/balancing/knight-iron-will-cast-decision.json' with {type:'json'};
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import source from '../data/localization/source-audit.json' with {type:'json'};
import result from '../data/localization/missing-language-result.json' with {type:'json'};
import items from '../data/localization/items.json' with {type:'json'};
import translations from '../data/localization/item-missing-translations.json' with {type:'json'};
import classes from '../data/class-templates.json' with {type:'json'};
import burnDecision from '../data/balancing/burn-ten-second-decision.json' with {type:'json'};
import shamanPackage from '../data/balancing/shaman-archdruid-package.json' with {type:'json'};
import {ItemModel} from '../models/itemSchema.js';
import {mapItem} from '../scripts/seedData.js';
test('localization adds only missing language fields and preserves all legacy item data',()=>{
 const allowed=new Set(['name_de','name_eng','description_de','description_eng']);
 assert.equal(items.length,source.items.length);
 for(const original of source.items){
  const actual=items.find(i=>i._id===original._id);assert.ok(actual);
  for(const [key,value]of Object.entries(original))assert.deepEqual(actual[key],value,original.name+' '+key);
  for(const key of Object.keys(actual).filter(k=>!(k in original)))assert.ok(allowed.has(key),key);
  assert.equal(new ItemModel(actual).validateSync(),undefined,original.name);
 }
 for(const change of result.changes)for(const key of Object.keys(change.set)){
  const before=(change.collection==='items'?source.items:source.classes).find(x=>x._id===change.id);
  assert.ok(typeof before[key]!=='string'||!before[key].trim(),change.key+' overwrote '+key);
 }
});
test('item seeding includes translations without overwriting supplied localized text',()=>{
 for(const [name,fields]of Object.entries(translations)){
  const actual=mapItem({name});
  for(const [key,value]of Object.entries(fields))assert.equal(actual[key],value,name+' '+key);
 }
 const preserved=mapItem({name:'Little Mace',name_de:'Vorhandener Name',description_eng:'Existing text'});
 assert.equal(preserved.name_de,'Vorhandener Name');assert.equal(preserved.description_eng,'Existing text');
});
test('skill catalog and class gameplay definitions remain unchanged',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
 const earth=catalog.find(s=>s.skillName_eng==='Earth Pillar');assert.ok(earth);
 assert.equal(catalog.length,source.skills.length+2);
 for(const original of source.skills){
  const shamanChange=[...knightCooldownDecision.changes,...knightDecision.changes,...shamanPackage.changes].find(c=>c.skill.nr===original.nr);if(shamanChange){const expected={...shamanChange.skill};delete expected.__v;assert.deepEqual(catalog.find(s=>s.nr===original.nr),expected);continue;}
  if(original.nr===202){const current=catalog.find(s=>s.nr===202);const expected={...burnDecision.skill};delete expected.__v;assert.deepEqual(current,expected);continue;}
  const expected={...original};delete expected.__v;
  const stored=catalog.find(s=>s.nr===original.nr),actual={...stored};delete actual.levelProgression;delete actual.skillLevelGrant;
  if(original.nr===222){actual.description_de=expected.description_de;actual.description_eng=expected.description_eng;}
  if(original.skillName_eng==='Wisdom of the Salamander'){
   assert.deepEqual(actual.effects.slice(0,expected.effects.length),expected.effects);
   assert.equal(actual.effects.at(-1).targetSkillNumber,earth.nr);
   const unchanged={...actual,effects:expected.effects,description_de:expected.description_de,description_eng:expected.description_eng};
   assert.deepEqual(unchanged,expected);
  }else assert.deepEqual(actual,expected);
 }
 for(const c of classes){
  const original=source.classes.find(x=>x.key===c.key);
  assert.equal(c.displayName,original.displayName);assert.equal(c.advancementName,original.advancementName);
  assert.deepEqual(c.baseStats,original.baseStats);
 }
 for(const name of ['Skeleton Guard','Oak Wood','Darkwood','Weidenbaum']){
  assert.ok(result.pending.some(p=>p.name===name));assert.equal(items.find(i=>i.name===name).description_de,undefined);
 }
});
