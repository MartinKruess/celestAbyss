import assert from 'node:assert/strict';
const start='<!-- BUFF_COMPARISONS_START -->',end='<!-- BUFF_COMPARISONS_END -->';
const f=n=>Math.round(n).toLocaleString('de-DE');
const time=n=>n===undefined||n===null?'—':`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
export function renderBuffComparisonSections(report,baseline){
 assert.equal(report.durationSeconds,600);
 for(const path of ['services/rotationDamage.js','services/groupSkillDamageBonus.js','services/attackSpeed.js'])if(report.inputHashes[path]||baseline.inputHashes[path])assert.equal(report.inputHashes[path],baseline.inputHashes[path],'Buff comparison uses different damage rules: '+path);
 if(report.inputHashes['services/skillClassification.js']||baseline.inputHashes['services/skillClassification.js'])assert.equal(report.inputHashes['services/skillClassification.js'],baseline.inputHashes['services/skillClassification.js'],'Buff comparison uses different skill classification');
 assert.equal(report.inputHashes['data/skills.json'],baseline.inputHashes['data/skills.json'],'Buff comparison uses a different skill catalog');
 assert.equal(report.inputHashes['services/timedDamageSimulation.js'],baseline.inputHashes['services/timedDamageSimulation.js'],'Buff comparison uses different simulation rules');
 assert.equal(report.inputHashes['data/balancing/class-comparison-level60.json'],baseline.inputHashes['data/balancing/class-comparison-level60.json'],'Buff comparison uses different class stats');
 assert.equal(report.baselineTotals.length,baseline.results.length);
 for(const r of baseline.results)assert(Math.abs(report.baselineTotals.find(b=>b.key===r.key).totalDamage-r.totalDamage)<1e-5,'Buff baseline differs: '+r.key);
 let md=start+'\n\n## Mit regulär aktivierten Eigenbuffs\n\nGleiche 600 Sekunden, Ausrüstung und feste Angriffspriorität wie oben. Eigenbuffs starten inaktiv, werden gewirkt und bezahlt und gelten nur für ihre normale Laufzeit. Keine Gruppenbuffs oder Provokation; keine neue Rotationsoptimierung.\n\n';
 for(const mode of ['selfOnly','selfAndGroups']){
  if(mode==='selfAndGroups')md+='## Eigenbuffs plus permanente Gruppenbuffs\n\nEigenbuffs wie im vorigen Test; zusätzlich alle aktuell zugeordneten öffentlichen Gruppenbuffs ab Beginn dauerhaft aktiv, jeweils einmal auf höchster Anbieter-Stufe. Vorbereitungskosten der Gruppenbuffs liegen außerhalb des Tests. Die Änderung vergleicht diese Tabelle mit dem vorherigen Eigenbuff-Test. Macht des Wassers und Macht des Feuers verstärken ausschließlich passende Skilltreffer, einschließlich Mehrfachtreffern und periodischen Treffern mit Angriffsanteil. Kein Bonus auf normale Auto-Attacks oder Beschwörungsangriffe; Attribute und sonstige Buffs wirken nach ihren normalen Regeln.\n\n';
  md+='| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Anteile AA / Skills / Beschw. | '+(mode==='selfOnly'?'Änderung zum Basislauf':'Änderung zum Eigenbuff-Test')+' |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- | ---: |\n';
  for(const r of [...report.scenarios[mode].results].sort((a,b)=>b.totalDamage-a.totalDamage)){
   const reference=mode==='selfOnly'?baseline.results:report.scenarios.selfOnly.results;
   const base=reference.find(b=>b.key===r.key),delta=r.totalDamage-base.totalDamage,pct=(r.totalDamage/base.totalDamage-1)*100;
   md+=`| ${r.name} | **${f(r.totalDamage)}** | ${f(r.dps)} | ${f(r.activeSkillDamage)} | ${f(r.autoRelatedDamage)} | ${f(r.summonDamage)} | ${f(r.averageMinuteDamage)} | ${time(r.firstManaShortageAt)} | ${time(r.firstEmptyManaAt)} | ${r.manaWaitEpisodeCount} | ${f(r.manaBlockedSeconds)} s | ${r.longestManaWaitSeconds.toFixed(2)} s | ${r.damageShares.autoAttacksPercent.toFixed(1)} % / ${r.damageShares.skillsPercent.toFixed(1)} % / ${r.damageShares.summonsPercent.toFixed(1)} % | ${delta>=0?'+':''}${f(delta)} (${pct>=0?'+':''}${pct.toFixed(1)} %) |\n`;
  }
  md+='\n';
 }
 md+='Gesamtschaden = Skills + Auto-Attacks + Beschwörungen. Automatische Zusatzpfeile zählen wie oben zur Auto-Attack-Seite; Explosionspfeil bleibt Skill-Schaden. Detailprotokolle und verwendete Buffs stehen in den [Rechendaten](../../data/balancing/all-class-buff-scenarios.json). Stand: '+new Date(report.generatedAt).toLocaleString('de-DE',{timeZone:'Europe/Berlin'})+'.\n\n'+end+'\n\n';
 return md;
}
export function insertBuffComparisonSections(markdown,report,baseline){
 if(markdown.includes(start)){
  const from=markdown.indexOf(start),to=markdown.indexOf(end,from);if(to<0)throw Error('Unclosed buff comparison section');
  markdown=markdown.slice(0,from).trimEnd()+'\n\n'+markdown.slice(to+end.length).trimStart();
 }
 const heading='## Gesamtvergleich:',from=markdown.indexOf(heading);assert(from>=0,'Missing baseline table');
 const next=markdown.indexOf('\n## ',from+heading.length);assert(next>=0,'Missing baseline table end');
 return markdown.slice(0,next).trimEnd()+'\n\n'+renderBuffComparisonSections(report,baseline)+markdown.slice(next).trimStart();
}
