import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [catalog,comparison,model,rotations,baseline,buffs]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const catalogHash=createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex');
const candidate=structuredClone(catalog);
for(const s of candidate.filter(s=>[226,237,244].includes(s.nr))){const c=s.summonedCreatureSettings;c.baseStats = s.nr===237 ? {maxHealth:1000,magicalAttack:135,physicalDefense:90,magicalDefense:110} : s.nr===244 ? {maxHealth:500,magicalAttack:100,physicalDefense:45,magicalDefense:81} : {maxHealth:500,physicalAttack:100,physicalDefense:63,magicalDefense:52};
 if(c.inheritedAttributeFractions)for(const key of Object.keys(c.inheritedAttributeFractions))c.inheritedAttributeFractions[key]=.10;
 for(const key of ['healthFractionOfCaster','magicalAttackFractionOfCaster','physicalDefenseFractionOfCasterMagicalDefense','magicalDefenseFractionOfCasterMagicalDefense'])if(c[key]!==undefined)c[key]=.10;
}
const rows=[];
for(const key of ['ritualist','druid','hunter'])for(const [mode,list]of [['none',baseline.results],['self',buffs.scenarios.selfOnly.results],['groups',buffs.scenarios.selfAndGroups.results]]){
 const stored=list.find(r=>r.key===key),pre=comparison.passiveRows.find(r=>r.key===key&&(key!=='ritualist'||!r.includedSkills.includes(120))),attackNumbers=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr);
 const config={...stored.config,cacheCombatStats:true,recordActionTimeline:false};
 const control=simulateClass({pre,skills:catalog,model,attackNumbers,config});assert(Math.abs(control.totalDamage-stored.totalDamage)<1e-5);
 const result=simulateClass({pre,skills:candidate,model,attackNumbers,config});assert.equal(result.durationSeconds,600);assert(result.finalMana>=0);assert(!result.deathAt);
 assert(Math.abs(result.autoDamage-control.autoDamage)<1e-5);assert(Math.abs(result.skillDamage-control.skillDamage)<1e-5);
 const summonNr={ritualist:237,druid:244,hunter:226}[key];
 const oldSummon=control.skills.find(s=>s.nr===summonNr),newSummon=result.skills.find(s=>s.nr===summonNr);assert.equal(oldSummon.hits,newSummon.hits);
 const row={key,name:pre.name,companion:{ritualist:'Morrak',druid:'Naturgeist',hunter:'Seelenbegleiter'}[key],mode,oldSummonDamage:control.summonDamage,newSummonDamage:result.summonDamage,summonDamageChangePercent:100*(result.summonDamage/control.summonDamage-1),oldTotal:control.totalDamage,newTotal:result.totalDamage,totalChangePercent:100*(result.totalDamage/control.totalDamage-1),attacks:oldSummon.hits};rows.push(row);console.log(JSON.stringify({...row,oldSummonDamage:Math.round(row.oldSummonDamage),newSummonDamage:Math.round(row.newSummonDamage),summonDamageChangePercent:Number(row.summonDamageChangePercent.toFixed(1))}));
}
const selfBuffReview=baseline.results.map(r=>{const own=buffs.scenarios.selfOnly.results.find(s=>s.key===r.key),gain=100*(own.totalDamage/r.totalDamage-1);return {key:r.key,name:r.name,currentDamageGainPercent:gain,provisionalTargetGainPercent:gain>5?gain-3:gain<3?gain+2:gain,status:'discussionOnlyNotApplied'};});
assert.equal(createHash('sha256').update(await fs.readFile('data/skills.json')).digest('hex'),catalogHash);
const report={generatedAt:new Date().toISOString(),status:'hypotheticalNotApplied',durationSeconds:600,proposal:'Custom bases: Morrak 1000 HP / 135 MAtk / 90 PDef / 110 MDef; Nature 500 HP / 100 MAtk / 45 PDef / 81 MDef; Spirit 500 HP / 100 PAtk / 63 PDef / 52 MDef; caster inheritance reduced to exactly 10%, not one sixth. Companion frequencies, skills, Bindung and buffs unchanged.',scope:'Current level60/R6, fixed attack policy, same dummy. Companion survivability has no damage effect because the dummy never attacks.',rows,selfBuffReview,catalogUnchanged:true};
await fs.writeFile('data/balancing/companion-custom-inheritance-ten-scenario.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');let md='# Begleiter-Szenario: Individuelle Grundwerte, Vererbung 10 %\n\n**Nur simuliert, nicht in der Datenbank umgesetzt.** Grundwerte: Morrak 1000 HP, 135 M-Angriff, 90 P-Abwehr, 110 M-Abwehr; Naturgeist 500 HP, 100 M-Angriff, 45 P-Abwehr, 81 M-Abwehr; Seelenbegleiter 500 HP, 100 P-Angriff, 63 P-Abwehr, 52 M-Abwehr. Vererbung genau 10 %; ein Sechstel wären 16,67 %. Bindung, Skillstufenboni, Begleiterbuffs, Frequenz und Laufzeiten unverändert. Jeweils 600 Sekunden, Level 60/R6. Der Dummy greift nicht an; Überlebensvorteile werden dadurch nicht bewertet.\n\n| Begleiter | Buffzustand | Begleiterschaden bisher | Begleiterschaden im Vorschlag | Änderung | Gesamtschaden bisher | Gesamtschaden im Vorschlag |\n| --- | --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.companion} | ${r.mode} | ${f(r.oldSummonDamage)} | ${f(r.newSummonDamage)} | ${r.summonDamageChangePercent.toFixed(1)} % | ${f(r.oldTotal)} | ${f(r.newTotal)} |\n`;
md+='\n## Vorgemerkte Self-Buff-Prüfbereiche\n\nKeine Buffwerte geändert. Als Gesprächsgrundlage: über 5 % Schadensgewinn etwa drei Prozentpunkte senken, unter 3 % etwa zwei Prozentpunkte erhöhen; andere unverändert. Prozentpunkte sind keine relative prozentuale Senkung der Buffwerte. Überlebens-, Ressourcen- und Kontrollnutzen müssen getrennt bewertet werden.\n\n| Klasse | Derzeitiger Eigenbuff-Gewinn | Vorläufiger Prüfwert |\n| --- | ---: | ---: |\n';for(const r of selfBuffReview)md+=`| ${r.name} | ${r.currentDamageGainPercent.toFixed(1)} % | ${r.provisionalTargetGainPercent.toFixed(1)} % |\n`;
await fs.writeFile('docs/balancing/companion-custom-inheritance-ten-scenario.md',md);




