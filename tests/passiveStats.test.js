import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildPassiveStatColumns} from '../services/passiveStats.js';
import {skillClassVariant} from '../services/skillClassVariant.js';
const skills=JSON.parse(fs.readFileSync(new URL('../data/skills.json',import.meta.url)));
const columns=(nr,key='knight')=>buildPassiveStatColumns(skillClassVariant(skills.find(s=>s.nr===nr),key),key);
test('permanent learned rank values are exact, retain fractions and include block',()=>{
 assert.deepEqual(columns(201).find(c=>c.key==='physicalAttack').values,Array.from({length:20},(_,i)=>i+1));
 assert.equal(columns(144).find(c=>c.key==='physicalDefense').values.at(-1),30);
 assert.equal(columns(28).find(c=>c.key==='block').values.at(-1),10);
 assert.equal(columns(141).find(c=>c.key==='block').values.at(-1),20);
 assert(Math.abs(columns(141).find(c=>c.key==='strength'&&c.sourceAttribute==='vitality').values.at(-1)-0.1)<1e-12);
 assert.equal(columns(5).find(c=>c.key==='vitality').values[0],0.5);
});
test('active buffs, conditional procs and companion bonuses never become permanent player stats',()=>{
 for(const nr of [75,42,114,134])assert.deepEqual(columns(nr),[],String(nr));
 const perfection=columns(243,'villian');
 assert.equal(perfection.find(c=>c.key==='strength').values.at(-1),13);
 assert.equal(perfection.find(c=>c.key==='maxMana'&&c.sourceAttribute==='dexterity').values.at(-1),4);
 assert.equal(columns(259,'shaman').find(c=>c.key==='manaRegen').fraction,true);
});
