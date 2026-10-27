import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {armorRanksFromAnchor,sumArmorDefense} from '../services/armorRankProgression.js';

test('Backwards curve preserves R6 and rounds half up in integer hundredths',()=>{
 const series=armorRanksFromAnchor({physicalDefense:196,magicalDefense:144});
 assert.deepEqual(series[5],{physicalDefense:196,magicalDefense:144});
 assert.deepEqual(series[0],{physicalDefense:12.66,magicalDefense:9.3});
 assert.equal(armorRanksFromAnchor({physicalDefense:1.01,magicalDefense:0},[100,100,100,100,100])[4].physicalDefense,.51);
 assert.throws(()=>armorRanksFromAnchor({physicalDefense:-1,magicalDefense:1}),RangeError);
 assert.throws(()=>armorRanksFromAnchor({physicalDefense:1.001,magicalDefense:1}),RangeError);
});

test('Applied curve matches every approved preview part and preserves weapon and R6 snapshots',()=>{
 const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
 const armor=read('data/balancing/armor-parts.json'),model=read('data/balancing/armor-defense-model.json');
 const preview=read('data/balancing/armor-weapon-curve-preview.json');
 const ranked=read('data/balancing/ranked-equipment.json');
 const before=read(model.rankProgression.backup+'/ranked-equipment.json');
 assert.equal(armor.parts.length,390);
 assert.deepEqual(ranked.weapons,before.weapons);
 assert.deepEqual(ranked.armor.filter(a=>a.rank===6),before.armor.filter(a=>a.rank===6));
 for(const part of armor.parts)assert.deepEqual(part.raw,preview.parts.find(p=>p.id===part.id).proposed);
 for(const set of armor.sets)for(const field of ['physicalDefense','magicalDefense'])assert.equal(sumArmorDefense(armor.parts.filter(p=>set.partIds.includes(p.id)),field),set.raw[field]);
});
