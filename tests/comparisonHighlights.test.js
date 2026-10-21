import test from 'node:test';
import assert from 'node:assert/strict';
import {comparisonHighlights,comparisonMarker,highlightedComparisonFields} from '../services/comparisonHighlights.js';
test('comparison middle weights each class once and includes band boundaries',()=>{
  const row=(key,value)=>({key,stats:Object.fromEntries(highlightedComparisonFields.map(k=>[k,value]))});
  const result=comparisonHighlights([row('a',100),row('a',300),row('b',500),row('c',900)]);
  assert.equal(result.maxHealth.median,500);assert.equal(result.maxHealth.mean,1600/3);assert.equal(result.maxHealth.classCount,3);
  assert.equal(result.maxHealth.tolerance,500);assert.equal(result.physicalAttack.tolerance,50);
  assert.equal(comparisonMarker(449,result.physicalAttack),'🔴');assert.equal(comparisonMarker(450,result.physicalAttack),'🟡');assert.equal(comparisonMarker(550,result.physicalAttack),'🟡');assert.equal(comparisonMarker(551,result.physicalAttack),'🟢');
});
