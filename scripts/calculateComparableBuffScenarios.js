import {isGroupBuff,isSelfBuff} from '../services/skillClassification.js';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {insertBuffComparisonSections} from '../services/buffComparisonSections.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const paths=['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','services/timedDamageSimulation.js','services/attackSpeed.js','services/skillClassification.js','services/rotationDamage.js','services/groupSkillDamageBonus.js','services/soulReserveBonus.js'];
const [skills,comparison,model,rotations,baseline]=await Promise.all([...paths.slice(0,4),'data/balancing/all-class-timed-damage.json'].map(read));
const inputHashes=Object.fromEntries(await Promise.all(paths.map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
for(const p of ['data/skills.json','data/balancing/class-comparison-level60.json','services/timedDamageSimulation.js','services/skillClassification.js'])assert.equal(inputHashes[p],baseline.inputHashes[p],'Baseline is stale: '+p);
const reviews=await Promise.all(baseline.results.map(r=>read(`data/balancing/${r.key==='villian'?'rogue':r.key}-skill-review.json`)));
const assignments=new Map(baseline.results.map((r,i)=>[r.key,reviews[i].skillNumbers??reviews[i].skills.map(s=>s.nr)]));
const providers=[];
for(const s of skills.filter(isGroupBuff)){
 const eligible=baseline.results.filter(r=>assignments.get(r.key).includes(s.nr)).map(r=>({key:r.key,name:r.name,skill:skillForClass(s,r.key)})).sort((a,b)=>b.skill.maxSkillLv-a.skill.maxSkillLv);
 if(!eligible.length)continue;const p=eligible[0];
 providers.push({nr:s.nr,name:s.skillName_de,providerKey:p.key,provider:p.name,level:p.skill.maxSkillLv,skill:{...p.skill,effectiveSkillLevel:p.skill.maxSkillLv}});
}
const groupNumbers=providers.map(p=>p.nr),externalBuffSkills=providers.map(p=>p.skill);
const exclusions={158:'Provozieren bleibt für Aggro-/Tanktests reserviert.',152:'Zufälliger Gift-Proc nicht simuliert.',167:'Entgiftung ohne Gegnerangriffe nicht bewertet.',169:'Zufälliger Effekt ausgeschlossen.'};
const scenarios={selfOnly:{results:[]},selfAndGroups:{results:[]}},controls=[];
const autoExtras=new Set(skills.filter(s=>s.effects?.some(e=>e.type==='triggeredAttack'&&e.applicationTrigger==='ownBasicAttackHit')).map(s=>s.nr));
for(const stored of baseline.results){
 const key=stored.key,pre=comparison.passiveRows.find(r=>r.key===key&&(key!=='ritualist'||!r.includedSkills.includes(120))),attackNumbers=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr);
 const assigned=skills.filter(s=>assignments.get(key).includes(s.nr));
 const own=assigned.filter(s=>s.category!=='creature'&&isSelfBuff(s)&&![161,188].includes(s.nr)&&!exclusions[s.nr]).map(s=>s.nr);
 const run=config=>simulateClass({pre,skills,model,attackNumbers,config:{...stored.config,cacheCombatStats:true,...config}});
 const control=run({});
 for(const field of ['totalDamage','manaSpent','manaBlockedSeconds'])assert(Math.abs(control[field]-stored[field])<1e-5,'Control mismatch '+key+' '+field);
 controls.push({key,totalDamage:control.totalDamage,manaSpent:control.manaSpent,identicalToBaseline:true});
 for(const [mode,scenario]of Object.entries(scenarios)){
  const groups=mode==='selfAndGroups'?groupNumbers:[];
  const r=run({duration:600,targetHealth:stored.config.targetHealth,enableOwnBuffs:true,prebuffOwnBuffs:false,permanentPrebuffs:false,ownBuffNumbers:[...groups,...own],preparedBuffNumbers:groups,permanentBuffNumbers:groups,externalBuffSkills:groups.length?externalBuffSkills:[],recordActionTimeline:true});
  assert.equal(r.durationSeconds,600);assert(!r.deathAt);assert(r.finalMana>=0);
  assert(Math.abs(r.totalDamage-r.autoDamage-r.skillDamage-r.summonDamage)<1e-5);
  assert(Math.abs(r.manaSpent-r.skills.reduce((n,s)=>n+s.manaSpent,0))<1e-5);
  for(const nr of groups){const periods=r.buffPeriods.filter(p=>p.nr===nr);assert.equal(periods.length,1);assert.equal(periods[0].start,0);assert.equal(periods[0].end,600);assert(!r.skills.some(s=>s.nr===nr&&s.applications));}
  for(const p of r.buffPeriods.filter(p=>own.includes(p.nr)))assert(r.skills.some(s=>s.nr===p.nr&&s.useTimes.some(t=>t<=p.start+1e-7)),'Unpaid self buff');
  const extras=r.skills.filter(s=>autoExtras.has(s.nr)).reduce((n,s)=>n+s.damage,0);
  r.name=stored.name;r.autoRelatedDamage=r.autoDamage+extras;r.activeSkillDamage=r.skillDamage-extras;
  r.damageShares={autoAttacksPercent:100*r.autoRelatedDamage/r.totalDamage,skillsPercent:100*r.activeSkillDamage/r.totalDamage,summonsPercent:100*r.summonDamage/r.totalDamage,denominator:'totalDamageIncludingSummons'};
  r.availableOwnBuffNumbers=own;r.permanentGroupBuffNumbers=groups;
  r.excludedSelfBuffs=assigned.filter(s=>exclusions[s.nr]).map(s=>({nr:s.nr,name:s.skillName_de,reason:exclusions[s.nr]}));
  r.usedOwnBuffNumbers=own.filter(n=>r.skills.some(s=>s.nr===n&&s.applications));
  scenario.results.push(r);
 }
 console.log(JSON.stringify({class:stored.name,base:Math.round(stored.totalDamage),self:Math.round(scenarios.selfOnly.results.at(-1).totalDamage),groups:Math.round(scenarios.selfAndGroups.results.at(-1).totalDamage)}));
}
const report={generatedAt:new Date().toISOString(),durationSeconds:600,targetHealth:10000000,baselineGeneratedAt:baseline.generatedAt,baselineTotals:baseline.results.map(r=>({key:r.key,totalDamage:r.totalDamage})),inputHashes,controls,providers,scenarios,scope:'Same fixed attack policy and current inputs in all three scenarios, no fresh rotation optimization. Optional deterministic self buffs are activated/paid normally from inactive start. Public groups only in selfAndGroups, permanent/prepared at highest provider level. Mandatory baseline combo setups retained. No Provoke, regular pets, random procs or incoming damage.'};
const mdPath='docs/balancing/all-class-timed-damage.md',original=await fs.readFile(mdPath,'utf8');
const backup='data/balancing/history/before-comparable-buff-tables-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/report.md',original);
try{await fs.copyFile('data/balancing/all-class-buff-scenarios.json',backup+'/buff-scenarios.json');}catch(e){if(e.code!=='ENOENT')throw e;}
await fs.writeFile('data/balancing/all-class-buff-scenarios.json',JSON.stringify(report,null,2)+'\n');
let merged=insertBuffComparisonSections(original,report,baseline).replace('[Separater Buff-Vergleich](all-class-ten-minute-party-buff-final.md).','Die beiden aktuellen Buff-Vergleiche stehen direkt unter der Haupttabelle.');
await fs.writeFile(mdPath,merged);
// Existing entry points remain navigable without retaining contradictory old tables.
await fs.writeFile('docs/balancing/all-class-buffed-timed-damage.md','# Selbstbuff-Vergleich\n\nDer aktuelle Vergleich steht zusammen mit dem ungebufften Lauf und dem Gruppenbuff-Test in [All Class Timed Damage](all-class-timed-damage.md#mit-regulär-aktivierten-eigenbuffs). Eigenbuffs werden innerhalb des Tests regulär aktiviert und bezahlt. Die frühere separate Auswertung ist historisch.\n');
await fs.writeFile('docs/balancing/all-class-ten-minute-party-buff-final.md','# Eigenbuffs und permanente Gruppenbuffs\n\nDie aktuellen Tabellen stehen gemeinsam in [All Class Timed Damage](all-class-timed-damage.md#eigenbuffs-plus-permanente-gruppenbuffs). Gleiche feste Angriffspriorität wie im Basislauf; keine neue Rotationsoptimierung. Frühere separate Suchläufe in den alten JSON-Dateien sind historische Vergleichsszenarien.\n');
console.log('Verified 13 unchanged controls and 26 fresh buff runs. Main report now contains all three scenario tables.');

