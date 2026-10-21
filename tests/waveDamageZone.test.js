import test from 'node:test';
import assert from 'node:assert/strict';
import catalog from '../data/skills.json' with {type:'json'};
import {waveDamageMultiplier} from '../services/waveDamageZone.js';

test('Aurora splits four meters into 30/40/30 percent and evaluates one character reference point',()=>{
  const wave=catalog.find(s=>s.nr===211),profile=wave.waveDamageProfile;
  assert.equal(profile.targetPositionBasis,'characterReferencePoint');
  assert.deepEqual([profile.leftWidthFraction,profile.centerWidthFraction,profile.rightWidthFraction],[.3,.4,.3]);
  for(const position of [-.8,0,.8])assert.equal(waveDamageMultiplier(wave,position),1);
  for(const position of [-2,-.80001,.80001,2])assert.equal(waveDamageMultiplier(wave,position),.5);
  for(const position of [-2.001,2.001])assert.equal(waveDamageMultiplier(wave,position),0);
  assert.throws(()=>waveDamageMultiplier(wave,NaN));
});

test('Astral Body hits each target at most once per activation',()=>{
  const skill=catalog.find(s=>s.nr===8);
  assert.equal(skill.attackExecution.hitCount,1);
  assert.equal(skill.attackExecution.maxHitsPerTargetPerActivation,1);
});
