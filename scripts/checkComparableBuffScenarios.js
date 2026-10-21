import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue} from '../services/rotationDamage.js';
import {insertBuffComparisonSections} from '../services/buffComparisonSections.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const report=await read('data/balancing/all-class-buff-scenarios.json'),baseline=await read('data/balancing/all-class-timed-damage.json'),catalog=await read('data/skills.json');
for(const [p,hash]of Object.entries(report.inputHashes))assert.equal(createHash('sha256').update(await fs.readFile(p)).digest('hex'),hash,'Stale input '+p);
assert.equal(report.controls.length,13);assert(report.controls.every(r=>r.identicalToBaseline));
const groupNumbers=report.providers.map(p=>p.nr);assert.equal(new Set(groupNumbers).size,groupNumbers.length);
let count=0;
for(const [mode,scenario]of Object.entries(report.scenarios)){
 assert.equal(scenario.results.length,13);
 for(const r of scenario.results){
  count++;const original=baseline.results.find(b=>b.key===r.key);
  assert.equal(r.durationSeconds,600);assert.equal(r.config.targetHealth,original.config.targetHealth);
  assert.equal(r.config.prebuffOwnBuffs,false);assert.equal(r.config.permanentPrebuffs,false);
  assert.equal(r.config.attackMode,original.config.attackMode);
  assert.equal(r.config.skillPriorityScores,original.config.skillPriorityScores);
  assert(!r.availableOwnBuffNumbers.includes(158));
  const sums=r.autoRelatedDamage+r.activeSkillDamage+r.summonDamage;
  assert(Math.abs(sums-r.totalDamage)<1e-5);
  assert(Math.abs(r.skills.reduce((n,s)=>n+s.manaSpent,0)-r.manaSpent)<1e-5);
  assert(Math.abs(r.damageShares.autoAttacksPercent+r.damageShares.skillsPercent+r.damageShares.summonsPercent-100)<1e-7);
  // Expiring max-Mana bonuses can discard Mana above the reduced cap. They
  // cannot create additional Mana; regeneration already excludes full-pool waste.
  const discardedAtReducedCap=r.initialMana+r.manaRegenerated+(r.manaFromBuffAttacks??0)-r.manaSpent-r.finalMana;
  assert(discardedAtReducedCap>=-1e-5,'Unexplained Mana creation '+r.key);
  if(discardedAtReducedCap>1e-5)console.log(`${mode}/${r.key}: ${discardedAtReducedCap.toFixed(2)} Mana discarded by reduced maximum.`);
  const expectedGroups=mode==='selfAndGroups'?groupNumbers:[];
  assert.deepEqual(r.config.preparedBuffNumbers,expectedGroups);assert.deepEqual(r.config.permanentBuffNumbers,expectedGroups);
  for(const nr of r.availableOwnBuffNumbers){
   const s=skillForClass(catalog.find(s=>s.nr===nr),r.key),uses=r.skills.find(s=>s.nr===nr)?.useTimes??[],cd=curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd??0;
   for(let i=1;i<uses.length;i++)assert(uses[i]-uses[i-1]>=cd-1e-6,'Buff cooldown '+nr);
   assert(s.dmgType==='selfbuff'||nr===34);
   for(const p of r.buffPeriods.filter(p=>p.nr===nr))assert(uses.some(t=>t<=p.start+1e-7),'Self buff without paid activation');
  }
  for(const nr of expectedGroups){const periods=r.buffPeriods.filter(p=>p.nr===nr);assert.equal(periods.length,1);assert.equal(periods[0].start,0);assert.equal(periods[0].end,600);assert(!r.skills.some(s=>s.nr===nr&&s.applications));}
 }
}
const p='docs/balancing/all-class-timed-damage.md',markdown=await fs.readFile(p,'utf8');
// Normalize once, then prove regeneration cannot duplicate or move these sections.
const normalized=insertBuffComparisonSections(markdown,report,baseline);
assert.equal(insertBuffComparisonSections(normalized,report,baseline),normalized);
await fs.writeFile(p,normalized);
assert.equal((normalized.match(/<!-- BUFF_COMPARISONS_START -->/g)??[]).length,1);
console.log(`Verified ${count} fresh buff scenarios, 13 controls, costs/cooldowns, permanent groups and damage/Mana ledgers; baseline table unchanged.`);
