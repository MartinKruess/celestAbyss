import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildSkillTooltip } from '../services/skillTooltip.js';
import { buildCharacterSkills } from '../services/characterSkills.js';
import { skillClassVariant } from '../services/skillClassVariant.js';
import { resolveSkillAtLevel } from '../services/skillLevel.js';
const catalog=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
const get=nr=>structuredClone(catalog.find(s=>s.nr===nr));
const column=(t,key)=>t.tooltipRows.find(r=>r.key===key)?.values;

test('all 263 definitions have short player descriptions and bounded rank columns without mutating rules',()=>{
 const before=structuredClone(catalog), names=new Map(catalog.map(s=>[s.nr,s.skillName_de]));
 assert.equal(catalog.length,263);
 for(const s of catalog){
  const t=buildSkillTooltip(s,undefined,names);
  assert(t.description.length>=25&&t.description.length<=320,`${s.nr}: concise description`);
  assert(!/\d|vorläufig|bisher|Mana-Gruppe|Berechnungsgrundlage|Klassenmaximum|Definitionsstufen|Reserve-/i.test(t.description),`${s.nr}: player text`);
  if(s.charClass.length)assert(t.tooltipRows.length>0,`${s.nr}: assigned skill has values`);
  assert(t.tooltipRows.length<=96);
  assert.equal(new Set(t.tooltipRows.map(r=>r.key)).size,t.tooltipRows.length);
  for(const r of t.tooltipRows){assert(r.label.length<=256);assert(r.key.length<=96);assert.equal(r.values.length,t.tooltipRows[0]?.values.length);assert(r.values.every(v=>typeof v==='string'&&v.length<=512&&!/NaN|Infinity|undefined|\[object/.test(v)));}
 }
 assert.deepEqual(catalog,before);
});

test('Aurora rank zero preview, rank seven and maximum use exact existing values',()=>{
 const t=buildSkillTooltip(get(1),'healer');
 assert.equal(column(t,'stat.int')[0],'+0,5');
 assert.equal(column(t,'stat.int')[6],'+3,5');
 assert.equal(column(t,'stat.int')[19],'+10');
 assert.equal(column(t,'stat.manaRegen')[6],'+7 MP/Tick');
 assert.equal(column(t,'stat.manaRegen')[19],'+20 MP/Tick');
});

test('damage display floors fractions while formulas, attributes and times retain their precision',()=>{
 const skill=get(77), original=structuredClone(skill);
 const precise=resolveSkillAtLevel(skill,2,{classKey:'knight'}).patk;
 assert(precise>146&&precise<147);
 assert.equal(column(buildSkillTooltip(skill,'knight'),'stat.patk')[1],'146');
 assert.equal(resolveSkillAtLevel(skill,2,{classKey:'knight'}).patk,precise);
 assert.deepEqual(skill,original);
 assert.equal(column(buildSkillTooltip(get(1),'healer'),'stat.int')[0],'+0,5');
 assert.equal(column(buildSkillTooltip(get(164),'herbalist'),'cast')[0],'0,1 Sekunden');
 const awakening=buildSkillTooltip(get(42),'knight');
 assert.equal(column(awakening,'trigger.health.0')[0],'Eigener Angriff unter 30 % Leben');
 assert(awakening.description.includes('physischen und magischen Schaden'));
});

test('race aliases cannot grant two foundations and existing personal ranks remain unchanged',()=>{
 const definitions=[get(1),get(5),get(77)];
 const values=buildCharacterSkills(definitions,'knight',[{number:77,level:1}],'Human');
 assert.deepEqual(values.filter(s=>s.raceCore).map(s=>s.number),[5]);
 assert.equal(values.find(s=>s.number===77).learnedLevel,1);
 assert.deepEqual(buildCharacterSkills(definitions,'knight',[],'Aurora').filter(s=>s.raceCore).map(s=>s.number),[1]);
});

test('nonlinear stat steps, class caps and class combat overrides remain exact',()=>{
 const spirit=buildSkillTooltip(get(44),'herbalist');
 assert.equal(column(spirit,'stat.int')[8],'+5');assert.equal(column(spirit,'stat.int')[9],'+10');
 const bond=buildSkillTooltip(get(134),'hunter'), specialist=buildSkillTooltip(get(134),'adventurer');
 assert.deepEqual(column(bond,'effect.0'),['10']);assert.deepEqual(column(specialist,'effect.0'),['10','15','20']);
 const shared=get(77);shared.classCombatOverrides={gladiator:{patk:321,statScaling:{patk:{type:'linear',base:321,perLevel:7}},levelProgression:undefined}};
 const variant=skillClassVariant(shared,'gladiator');assert.equal(column(buildSkillTooltip(variant,'gladiator'),'stat.patk')[0],'321');
});

test('active skills show exact cost, cooldown and conditional mechanics rather than internal pricing notes',()=>{
 const t=buildSkillTooltip(get(70),'villian');
 assert.deepEqual(column(t,'stat.patk'),['17','25','34','42','50']);
 assert.equal(column(t,'damage.multiplier')[1],'×1,5');assert.equal(column(t,'armor.ignore')[4],'100 %');
 assert.equal(column(t,'burst.uses')[3],'3');
 const natural=buildSkillTooltip(get(164),'herbalist');assert.equal(column(natural,'cost.mana')[0],'50 MP');assert.equal(column(natural,'stat.wis')[4],'+6');
 const toggle=buildSkillTooltip(get(158),'knight');assert.deepEqual(column(toggle,'effect.1'),['25 / MP-Tick','45 / MP-Tick']);
});

test('all class catalog transports include rank columns and remain bounded; personal ranks are independent',()=>{
 const fixtures=JSON.parse(fs.readFileSync(new URL('./fixtures/skill-tree-classes.json',import.meta.url)));
 fixtures.knight=catalog.filter(s=>s.charClass.some(c=>['Knight','Templar','Ritter','Tempelritter'].includes(c))).map(s=>({number:s.nr}));
 for(const [key,previous]of Object.entries(fixtures)){
  const definitions=previous.map(s=>get(s.number));
  const values=buildCharacterSkills(definitions,key);
  assert(JSON.stringify(values).length<256000,`${key}: bounded admission payload`);
  for(const s of values){assert.equal(s.learnedLevel,0);for(const row of s.tooltipRows)assert.equal(row.values.length,s.maximumLevel);}
 }
 const learned=buildCharacterSkills([get(1)],'healer',[{number:1,level:7}])[0];
 assert.equal(learned.learnedLevel,7);assert.equal(column(learned,'stat.int')[6],'+3,5');
});
