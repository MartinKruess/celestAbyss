import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildCharacterStatProfile, canonicalStatClass } from '../services/characterStats.js';
import { normalizePlayState } from '../services/play.js';
const templates = JSON.parse(fs.readFileSync(new URL('../data/class-templates.json', import.meta.url)));
const get = key => structuredClone(templates.find(t => t.key === key));
test('current class profiles retain operative baselines and only confirmed conversions', () => {
  for (const template of templates) {
    const p = buildCharacterStatProfile(template, 1);
    assert.equal(p.version, 2);
    assert.equal(p.baseValues.find(s => s.key === 'maxHealth').value, template.baseStats.maxHealth);
    assert.equal(p.baseAttributes.find(s => s.key === 'strength').known, true);
    assert.equal(p.baseAttributes.find(s => s.key === 'strength').value, 0);
    assert.equal(p.conversions.some(c => ['faith','ambush','victim'].includes(c.attribute)), false);
    assert.equal(p.conversions.some(c => c.attribute === 'intelligence' && c.target === 'maxMana'), false);
    assert.equal(p.conversions.find(c => c.attribute === 'agility' && c.target === 'attackSpeed').factor, 0.0006);
    assert.ok(p.neededExperience > 0);
  }
  assert.equal(buildCharacterStatProfile(get('hunter'), 60).conversions.some(c => c.attribute === 'strength' && c.target === 'physicalAttack'), false);
  assert.equal(buildCharacterStatProfile(get('hunter'), 60).conversions.find(c => c.attribute === 'wisdom' && c.target === 'magicalDefense').factor, 1.32);
  assert.equal(buildCharacterStatProfile(get('knight'), 1).conversions.find(c => c.attribute === 'vitality' && c.target === 'physicalDefense').factor, 1.26);
});

test('confirmed zero rating bases, attack attributes and three-second regeneration reach all profiles',()=>{
 for(const t of templates){
  const p=buildCharacterStatProfile(t,65);
  assert.equal(p.regenerationIntervalSeconds,3);
  for(const key of ['accuracy','dodge','critChanceRating','block','penetration']){
   const v=p.baseValues.find(s=>s.key===key);assert.equal(v.known,true);assert.equal(v.value,0);
  }
  assert(!p.notices.some(n=>n.includes('Offensive')));
 }
 const p=buildCharacterStatProfile(get('knight'),65);
 assert.equal(p.conversions.find(c=>c.attribute==='strength'&&c.target==='physicalAttack').factor,1.8);
 assert.equal(p.conversions.find(c=>c.attribute==='intelligence'&&c.target==='magicalAttack').factor,1.8);
 const value=key=>p.baseValues.find(s=>s.key===key).value+p.conversions.filter(c=>c.target===key).reduce((sum,c)=>sum+64*c.factor,0);
 assert.equal(value('maxHealth'),2343);assert.equal(value('maxMana'),2053);
 assert.equal(value('physicalAttack'),120.2);assert.equal(value('penetration'),96);
 assert.equal(value('magicalAttack'),119.2);
});

test('all classes gain intelligence attack while ranged physical attack excludes strength and melee excludes dexterity',()=>{
 for(const t of templates){
  const p=buildCharacterStatProfile(t,65),ranged=['hunter','summoner'].includes(t.key);
  const offense=p.conversions.filter(c=>['physicalAttack','magicalAttack'].includes(c.target));
  assert.deepEqual(offense.filter(c=>c.target==='physicalAttack').map(c=>c.attribute),[ranged?'dexterity':'strength'],t.key);
  assert.deepEqual(offense.filter(c=>c.target==='magicalAttack').map(c=>c.attribute),['intelligence'],t.key);
  assert.equal(p.conversions.find(c=>c.attribute==='strength'&&c.target==='penetration').factor,1.5,'Other Strength effects remain active');
  assert.equal(p.conversions.find(c=>c.attribute==='dexterity'&&c.target==='accuracy').factor,1.6,'Other Dexterity effects remain active');
 }
 assert.equal(buildCharacterStatProfile(get('healer'),65).conversions.find(c=>c.attribute==='strength'&&c.target==='physicalAttack').factor,1.8);
 assert(Math.abs(buildCharacterStatProfile(get('herbalist'),65).conversions.find(c=>c.attribute==='intelligence'&&c.target==='magicalAttack').factor-1.89)<1e-12);
});
test('legacy Knife characters resolve to the confirmed Knight profile; invalid profiles still fail', () => {
  assert.equal(canonicalStatClass('Druide'), 'druid'); assert.equal(canonicalStatClass('Shamane'), 'shaman');
  for (const name of ['Knife', 'knife', 'Knight', 'knight']) {
    assert.equal(canonicalStatClass(name), 'knight');
    assert.equal(buildCharacterStatProfile(get(canonicalStatClass(name)), 1).classKey, 'knight');
  }
  for (const value of [undefined, {}, { ...get('hunter'), statFoundation: undefined },
    { ...get('hunter'), statFoundation: { ...get('hunter').statFoundation, directStats: {} } }]) assert.throws(() => buildCharacterStatProfile(value, 1));
  for (const level of [0, 1.5, 201]) assert.throws(() => buildCharacterStatProfile(get('hunter'), level));
});

test('database separates primary bases, direct values and per-level growth', () => {
  for (const vitality of [0, 5]) {
    const template = get('hunter');
    template.statFoundation.attributes.vitality = vitality;
    const p = buildCharacterStatProfile(template, 2);
    const vita = p.baseAttributes.filter(s => s.key === 'vitality');
    assert.equal(vita.length, 1);
    assert.equal(vita[0].value, vitality);
    assert.equal(vita[0].known, true);
    assert.equal(p.baseValues.find(s => s.key === 'maxHealth').value, template.baseStats.maxHealth);
    assert.equal(p.growth.find(s => s.key === 'vitality').perLevel, 1);
    assert.equal(p.conversions.find(c => c.attribute === 'vitality' && c.target === 'maxHealth').factor, 30);
  }
  const template = get('hunter');
  assert.equal(buildCharacterStatProfile(template, 1).notices.length, 0);
  template.statFoundation.attributes.vitality = -1;
  assert.throws(() => buildCharacterStatProfile(template, 1));
});

test('updated database conversion reaches admission profile without changing character or HP baselines', () => {
  const template = get('hunter');
  const before = buildCharacterStatProfile(template, 2);
  template.statConversions.defaults.conversions.find(c => c.attribute === 'vitality' && c.target === 'maxHealth').amountPerPoint = 35;
  const after = buildCharacterStatProfile(template, 2);
  const hp = p => p.baseValues.find(s => s.key === 'maxHealth').value;
  const factor = p => p.conversions.find(c => c.attribute === 'vitality' && c.target === 'maxHealth').factor;
  assert.equal(factor(before), 30);
  assert.equal(factor(after), 35);
  assert.equal(hp(before), hp(after));
  assert.deepEqual(before.growth, after.growth);
});
test('vitals save together, retain fractions and cannot smuggle derived stats', () => {
  const base = { position: [0,0,0], level: 1, experience: 0, skillpoints: 0, moral: 0 };
  assert.equal(normalizePlayState({ ...base, currentHealth: 12.5, currentMana: 0 }).currentHealth, 12.5);
  for (const extra of [{ currentHealth: 1 }, { currentHealth: -1, currentMana: 0 }, { currentHealth: NaN, currentMana: 0 }, { currentHealth: 1, currentMana: Infinity }, { stats: {} }]) assert.throws(() => normalizePlayState({ ...base, ...extra }));
});
