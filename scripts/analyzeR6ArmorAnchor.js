import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [scenario,armor]=await Promise.all(['data/balancing/defense-factor-12.json','data/balancing/armor-parts.json'].map(read));
assert.equal(scenario.factor,1.2);
assert.equal(scenario.armorReduction,0);
const aliases={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const original=armor.sets.find(s=>s.name==='Gladiator'&&s.rank===6).raw.physicalDefense;
assert.equal(original,554);
const target=354,multiplier=target/original;
function distribute(total){
 const values=armor.allocation.map(s=>Math.floor(total*s.percent/100));
 const order=armor.allocation.map((s,i)=>({i,remainder:total*s.percent%100})).sort((a,b)=>b.remainder-a.remainder||a.i-b.i);
 const missing=total-values.reduce((a,b)=>a+b,0);
 for(let i=0;i<missing;i++)values[order[i].i]++;
 assert.equal(values.reduce((a,b)=>a+b,0),total);
 return values;
}
const rows=scenario.rows.map(row=>{
 const raw=armor.sets.find(s=>s.name===aliases[row.key]&&s.rank===6).raw;
 const result={key:row.key,name:row.name,physicalAttack:row.physicalAttack,magicalAttack:row.magicalAttack,magicalAttackWithFullSouls:row.magicalAttackWithFullSouls};
 for(const field of ['physicalDefense','magicalDefense']){
  const proposedArmor=Math.round(raw[field]*multiplier);
  const withoutArmor=row[field]-raw[field];
  const final=withoutArmor+proposedArmor;
  result[field]={currentArmor:raw[field],proposedArmor,withoutArmor,currentFinal:row[field],proposedFinal:final,
   proposedParts:distribute(proposedArmor),armorSharePercent:proposedArmor/final*100};
 }
 return result;
});
const rank5Conflicts=[];
for(const r of rows){
 const previous=armor.sets.find(s=>s.name===aliases[r.key]&&s.rank===5);
 for(const field of ['physicalDefense','magicalDefense'])if(previous.raw[field]>r[field].proposedArmor)
  rank5Conflicts.push({key:r.key,name:r.name,field,rank5:previous.raw[field],proposedRank6:r[field].proposedArmor});
}
const report={generatedAt:new Date().toISOString(),status:'hypotheticalOnly',baseScenario:'defense-factor-12.json',anchor:{class:'gladiator',rank:6,original,target,multiplier,reductionPercent:100*(1-multiplier)},scope:'Only R6 direct armor P/M defense, same multiplicative reduction across all classes, rounded aggregate totals then largest-remainder slot distribution. R1-R5 unchanged. Weapons and shield unchanged; no active buffs, cloak values or future bonuses. All class attribute modifiers retained in the 1.2 scenario.',rows,rank5Conflicts};
await fs.writeFile('data/balancing/r6-armor-anchor-scenario.json',JSON.stringify(report,null,2)+'\n');
const f=n=>Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# R6-Rüstungen – hypothetischer Gladiator-Anker 354\n\nKeine Spielwerte geändert. Grundlage: Level 60, +0-Ausrüstung und permanente Passive, keine aktiven Buffs, Vita/Willenskraft → Abwehr mit Grundfaktor 1,2 und bestehenden Klassenboni. R6-Gladiator-P-Abwehr der fünf Rüstungsteile: 554 → 354. Daraus folgt der gemeinsame Faktor **354 / 554 = '+f(multiplier*100)+' %**, also etwa '+f(100*(1-multiplier))+' % weniger direkte Rüstungsabwehr. Derselbe Faktor gilt für beide Abwehrseiten aller R6-Klassenrüstungen. R1–R5 sowie Waffen und Schild bleiben unverändert.\n\n| Klasse | Rüstung P bisher → Vorschlag | Rüstung M bisher → Vorschlag | P-Angriff | P-Abwehr gesamt | M-Angriff | M-Abwehr gesamt |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const r of rows)md+=`| ${r.name} | ${r.physicalDefense.currentArmor} → ${r.physicalDefense.proposedArmor} | ${r.magicalDefense.currentArmor} → ${r.magicalDefense.proposedArmor} | ${f(r.physicalAttack)} | ${f(r.physicalDefense.proposedFinal)} | ${f(r.magicalAttack)}${r.magicalAttackWithFullSouls!==undefined?'–'+f(r.magicalAttackWithFullSouls):''} | ${f(r.magicalDefense.proposedFinal)} |\n`;
md+='\nDie fünf Teilwerte werden aus den neuen ganzzahligen Summen erneut mit 30/26/16/16/12 % verteilt; Rundungsreste werden nach größtem Rest zugewiesen. Rechnerisch bleiben Summen und Klassenprofile so erhalten. Gleiche prozentuale Rüstungskürzung bedeutet aber keine gleiche prozentuale Kürzung der Endwerte. Die Wirkung auf erlittenen Schaden ist damit noch nicht geprüft.\n\n## Rangfolge muss anschließend angepasst werden\n\nBei allen 13 Klassen würde mindestens eine neue R6-Abwehrsumme unter dem unveränderten R5-Wert liegen. Beispiel Gladiator: R5 bleibt bei 396 P-Abwehr, neues R6 hätte nur 354. Der Zielanker darf daher nicht isoliert als fertige Rangkurve übernommen werden. R1–R5 müssten anschließend ebenfalls vom R6-Ziel abgeleitet werden. Eine proportionale Skalierung aller bisherigen Rangsummen erhält deren bisherige Progression bis auf Rundung.\n';
await fs.writeFile('docs/balancing/r6-armor-anchor-scenario.md',md);
console.log(JSON.stringify({multiplier,rows:rows.map(r=>({name:r.name,armorP:r.physicalDefense.proposedArmor,armorM:r.magicalDefense.proposedArmor,p:r.physicalAttack,pd:r.physicalDefense.proposedFinal,m:r.magicalAttack,md:r.magicalDefense.proposedFinal}))},null,2));
