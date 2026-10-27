import test from 'node:test';
import assert from 'node:assert/strict';
import base from '../data/creatures/base-creature.json' with {type:'json'};
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';
import {creatureRegenerationTick, creatureManaAndCooldownCheck, incomingHitCanInterruptCreatureReturn} from '../services/creatureCombatRules.js';

const creature = () => resolveCreatureTemplate(base, [{key:'example', parentKey:base.key, statMultipliers:{maxHealth:1000, maxMana:100}}]);

test('Ten-percent Health recovery uses maximum Health and fills from half in five ticks / fifteen seconds', () => {
  const mob = creature();
  let health = 500;
  for (let tick = 1; tick <= 5; tick++) {
    const result = creatureRegenerationTick(mob, {health, mana:20});
    assert.equal(result.healthRestored, 100);
    assert.equal(result.health, 500 + tick * 100);
    health = result.health;
  }
  assert.equal(mob.regenerationRules.tickIntervalSeconds * 5, 15);
  assert.equal(creatureRegenerationTick(mob, {health:980, mana:20}).health, 1000);
});

test('Active combat gives no Health regeneration; return recovery persists despite the combat flag', () => {
  const mob = creature();
  assert.equal(creatureRegenerationTick(mob, {health:500, mana:20, inCombat:true}).health, 500);
  assert.equal(creatureRegenerationTick(mob, {health:500, mana:20, inCombat:true, returning:true}).health, 600);
  assert.equal(incomingHitCanInterruptCreatureReturn(mob), false);
});

test('Regeneration never revives dead creatures and preserves small fractional heals', () => {
  const mob = creature();
  assert.equal(creatureRegenerationTick(mob, {health:0, mana:20, returning:true}).health, 0);
  const tiny = resolveCreatureTemplate(base);
  assert.ok(Math.abs(creatureRegenerationTick(tiny, {health:0.1, mana:1}).health - 0.2) < 1e-10);
});

test('Cooldown-only creatures remain able to use costly abilities for an hour without spending Mana, while cooldown remains mandatory', () => {
  const mob = creature();
  for (let second = 0; second < 3600; second++) {
    const check = creatureManaAndCooldownCheck(mob, {mana:0, nominalManaCost:500, remainingCooldownSeconds:second % 3 === 0 ? 0 : 1});
    assert.equal(check.manaCost, 0);
    assert.equal(check.ready, second % 3 === 0);
  }
  const recovery = creatureRegenerationTick(mob, {health:500, mana:0});
  assert.equal(recovery.manaRestored, 0);
});

test('Resource and regeneration overrides inherit independently, including explicit false', () => {
  const mob = resolveCreatureTemplate(base, [{key:'mana-user', parentKey:base.key,
    resourceRules:{mana:{mode:'consumeMana'}}, enabledStats:{manaRegen:true},
    regenerationRules:{healthWhileReturning:false}}]);
  assert.equal(mob.regenerationRules.tickIntervalSeconds, 3);
  assert.equal(mob.resourceRules.stamina.mode, 'unused');
  assert.equal(creatureManaAndCooldownCheck(mob, {mana:5, nominalManaCost:6}).ready, false);
  assert.equal(creatureManaAndCooldownCheck(mob, {mana:6, nominalManaCost:6}).manaCost, 6);
  assert.equal(creatureRegenerationTick(mob, {health:0.5, mana:0, inCombat:true, returning:true}).health, 0.5);
});
