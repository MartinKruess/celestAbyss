import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {curveValue} from '../services/rotationDamage.js';
import {manaProposalForSkill,proposeIntegerManaCurve,skillBaseDamageByLevel} from '../services/manaCostProposal.js';
const report=JSON.parse(fs.readFileSync(new URL('../data/balancing/attack-mana-curve-proposal.json',import.meta.url)));
let text=fs.readFileSync(new URL('../data/skills.json',import.meta.url),'utf8');
if(createHash('sha256').update(text).digest('hex')!==report.sourceCatalogSHA256){
 const application=JSON.parse(fs.readFileSync(new URL('../data/balancing/three-tier-mana-application.json',import.meta.url)));
 text=fs.readFileSync(new URL('../'+application.sourceCatalogSnapshot,import.meta.url),'utf8');
}
const catalog=JSON.parse(text),get=nr=>catalog.find(s=>s.nr===nr);

test('linear reference has integer start and step, without mutating the damage definition',()=>{
 const s=get(106),snapshot=JSON.stringify(s),r=manaProposalForSkill(s);
 assert.deepEqual(r.proposedManaCurve,{type:'linear',base:156,perLevel:54});
 assert.equal(r.proposedManaByLevel.at(-1),642);
 assert.equal(JSON.stringify(s),snapshot);
 assert.deepEqual(r.damageChanges,[]);
});
test('doubling mana follows doubling damage, and visual meteor count adds no multiplier',()=>{
 const demon=manaProposalForSkill(get(227)),meteor=manaProposalForSkill(get(235));
 assert.deepEqual(demon.proposedManaCurve.values,[112,224,448]);
 assert.deepEqual(meteor.damageByLevel,[1629,3258,6516]);
 assert.deepEqual(meteor.proposedManaCurve.values,[652,1304,2608]);
});
test('field duration jumps and one-time Mana payment use a full integer level table',()=>{
 const r=manaProposalForSkill(get(9));
 assert.equal(r.damageByLevel[0],900);
 assert.equal(r.damageByLevel[9],3828);
 assert.equal(r.proposedManaCurve.type,'table');
 assert.equal(r.proposedManaByLevel[9],1531);
 assert(r.proposedManaByLevel.every(Number.isInteger));
});
test('explicit Energy Strike and zero-Mana combo exceptions retain current costs',()=>{
 for(const nr of [36,70,186,229]){
  const r=manaProposalForSkill(get(nr));
  assert.equal(r.proposedManaCurve,null);
  assert.deepEqual(r.proposedManaByLevel,r.currentManaByLevel);
 }
 assert.equal(manaProposalForSkill(get(219)).status,'percentageCost');
 assert.equal(manaProposalForSkill(get(180)).status,'separateResource');
});
test('report covers current definitions once and every proposed level has whole Mana',()=>{
 assert.equal(report.status,'proposalOnlyNotApplied');
 assert.equal(report.sourceCatalogSHA256,createHash('sha256').update(text).digest('hex'));
 assert.equal(new Set(report.rows.map(r=>r.nr)).size,report.rows.length);
 assert(!report.rows.some(r=>[85,130].includes(r.nr)));
 assert(report.reserved.some(r=>r.nr===130));
 for(const r of report.rows.filter(r=>r.proposedManaCurve)){
  assert(r.proposedManaByLevel.every(x=>Number.isInteger(x)&&x>0),r.name);
  assert.equal(r.proposedManaByLevel.length,r.levels,r.name);
  for(let level=1;level<=r.levels;level++)assert.equal(curveValue(r.proposedManaCurve,level),r.proposedManaByLevel[level-1]);
  assert.deepEqual(skillBaseDamageByLevel(get(r.nr)),r.damageByLevel);
 }
});
test('nonlinear curve handles fractional source damage without fractional Mana',()=>{
 const c=proposeIntegerManaCurve([32,58.5555555556,85.1111111111]);
 assert(Number.isInteger(c.base));assert(Number.isInteger(c.perLevel));
});
