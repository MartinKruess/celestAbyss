import test from 'node:test';
import assert from 'node:assert/strict';
import {insertBuffComparisonSections} from '../services/buffComparisonSections.js';
const hashes={'data/skills.json':'skills','services/skillClassification.js':'classification','services/timedDamageSimulation.js':'simulation','data/balancing/class-comparison-level60.json':'stats'};
const row={key:'fixture',name:'Fixture',totalDamage:1000,dps:1000/600,activeSkillDamage:600,autoRelatedDamage:300,summonDamage:100,averageMinuteDamage:100,manaWaitEpisodeCount:0,manaBlockedSeconds:0,longestManaWaitSeconds:0,damageShares:{autoAttacksPercent:30,skillsPercent:60,summonsPercent:10}};
const baseline={inputHashes:hashes,results:[row]};
const report={durationSeconds:600,inputHashes:hashes,generatedAt:'2026-10-19T10:00:00Z',baselineTotals:[{key:'fixture',totalDamage:1000}],scenarios:{selfOnly:{results:[row]},selfAndGroups:{results:[row]}}};
const markdown='# Test\n\n## Gesamtvergleich: 600 Sekunden\n\n| Klasse | Schaden |\n| --- | ---: |\n| Fixture | 1.000 |\n\n## Details\n\nExisting details stay here.\n';
test('Both buff tables appear directly below baseline, preserve details, and replace cleanly on regeneration',()=>{
 const once=insertBuffComparisonSections(markdown,report,baseline),twice=insertBuffComparisonSections(once,report,baseline);
 assert.equal(once,twice);
 assert(once.indexOf('## Mit regulär')>once.indexOf('| Fixture | 1.000 |'));
 assert(once.indexOf('## Eigenbuffs plus')<once.indexOf('## Details'));
 assert.equal((once.match(/<!-- BUFF_COMPARISONS_START -->/g)??[]).length,1);
 assert.equal((once.match(/30.0 % \/ 60.0 % \/ 10.0 %/g)??[]).length,2);
 assert(once.endsWith('Existing details stay here.\n'));
});
test('Stale skill, simulation or stat inputs and different baseline totals cannot be displayed as current',()=>{
 for(const field of Object.keys(hashes)){
  const stale=structuredClone(report);stale.inputHashes[field]='old';
  assert.throws(()=>insertBuffComparisonSections(markdown,stale,baseline),{name:'AssertionError'});
 }
 const stale=structuredClone(report);stale.baselineTotals[0].totalDamage=999;
 assert.throws(()=>insertBuffComparisonSections(markdown,stale,baseline),{name:'AssertionError'});
});

test('Group buff gain uses self-buffed damage as denominator rather than unbuffed damage',()=>{
 const changed=structuredClone(report);changed.scenarios.selfOnly.results=[{...row,totalDamage:1100}];changed.scenarios.selfAndGroups.results=[{...row,totalDamage:2200}];
 const rendered=insertBuffComparisonSections(markdown,changed,baseline);
 const first=rendered.split('## Eigenbuffs plus')[0],last=rendered.split('## Eigenbuffs plus')[1];
 assert(first.includes('+100 (+10.0 %)'));assert(last.includes('+1.100 (+100.0 %)'));assert(last.includes('Änderung zum Eigenbuff-Test'));assert(!last.includes('+120.0 %'));
});
