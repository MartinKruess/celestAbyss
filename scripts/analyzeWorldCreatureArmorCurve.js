import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';

const paths=['data/creatures/base-creature.json','data/creatures/world-reference-level1.json','data/creatures/world-variant-templates.json'];
const sources=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [base,reference,world]=sources.map(s=>JSON.parse(s));
const byKey=new Map(world.templates.map(t=>[t.key,t]));
const levels=[1,5,10,20,60,63,100];
const divisor=25/6;
// Variant A from the discussion. Zero armor explicitly uses the limiting 10% floor.
const reduction=(armor,playerLevel)=>{
 const ratio=(armor/divisor)/playerLevel;
 return Math.min(1,ratio<=1?0.1+0.2*ratio:0.3+(ratio-1));
};
// Hypothetical starter transition only; not a saved game balance setting.
const starterBaseline=level=>level<=10?3*(level/10)**2:level<20?3+(level-10)*(20*divisor-3)/10:level*divisor;
const rows=world.templates.filter(t=>t.kind==='variant').map(variant=>{
 const family=byKey.get(variant.parentKey),growth=byKey.get(family.parentKey);
 const chain=[reference,growth,family,variant];
 const anchor=resolveCreatureTemplate(base,chain,60).stats;
 const points=levels.map(level=>{
  const stats=resolveCreatureTemplate(base,chain,level).stats;
  const defense={};
  for(const field of ['physicalDefense','magicalDefense']){
   const old=stats[field],profileMultiplier=anchor[field]/(60*divisor);
   const hypothetical=starterBaseline(level)*profileMultiplier;
   defense[field]={currentArmor:old,currentSweetspot:old/divisor,currentReduction:reduction(old,level),profileMultiplier,
    proposedArmor:hypothetical,proposedSweetspot:hypothetical/divisor,proposedReduction:reduction(hypothetical,level)};
   if(level===60)assert.ok(Math.abs(hypothetical-old)<1e-9);
   if(level>=20)assert.ok(Math.abs(hypothetical/(level*divisor)-profileMultiplier)<1e-9);
  }
  return {level,health:stats.maxHealth,physicalAttack:stats.physicalAttack,defense};
 });
 return {key:variant.key,name:variant.name_de,points};
});
assert.equal(rows.length,18);
const report={status:'readOnlyAnalysisNoGameChanges',monsterDivisor:divisor,curve:{variant:'A',ratio:'(monsterDefense / divisor) / playerLevel',below1:'10% + ratio * 20 percentage points',above1:'30% + (ratio - 1) * 100 percentage points',clamp:'10% through 100%',zeroArmor:'10% limiting floor used for this analysis; explicit game zero-armor exception not decided'},existing:{referenceLevel:world.referenceLevel,defenseGrowthPerLevel:1.04,earlyTest:'Level-60 players against HP-only level-63 placeholders; no enemy armor or attacks'},hypothesis:{anchor:60,preserveExistingLevel60Defense:true,normalCurve:'level * 25/6 from level 20',starterCurve:'Unapproved illustrative reference: 3*(level/10)^2 until 10, linearly from 3 at 10 to 83.333... at 20',variantProfile:'Each P/M defense independently uses existing level-60 armor / 250 as profile multiplier',limitations:['Preserving old level-60 armor preserves provisional protection strength, not validated balance.','Health and attack remain existing compound growth; this is not a two-way combat simulation.','No golem template exists in these world variants.']},inputHashes:Object.fromEntries(paths.map((p,i)=>[p,createHash('sha256').update(sources[i]).digest('hex')])),rows};
const f=n=>Number(n.toFixed(2)).toLocaleString('de-DE');
let md='# World-Monster: Abwehrprüfung mit neuer Monsterkurve\n\nNur Analyse, keine Spielwerte geändert. Aktuell 7 Wölfe und 11 Vögel, kein Golem. Bisherige Referenz Level 63; frühere Level-60-Spielerprobe verwendete nur Gegnerleben. Neue Prüfformel: Sweetspot = Monsterabwehr / (25/6); Verhältnis = Sweetspot / Spielerlevel; Variante A, 30 % bei 1, darunter 10 % + 20 % × Verhältnis, darüber 30 % + 100 % × (Verhältnis − 1), maximal 100 %. Geprüft gegen einen Spieler gleichen Levels.\n\n## Aktuelle Level-60-Werte\n\n| Variante | P-Abwehr | P-Sweetspot | P-Reduzierung | M-Abwehr | M-Sweetspot | M-Reduzierung |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const row of rows){const p=row.points.find(p=>p.level===60).defense;md+=`| ${row.name} | ${f(p.physicalDefense.currentArmor)} | ${f(p.physicalDefense.currentSweetspot)} | ${f(p.physicalDefense.currentReduction*100)} % | ${f(p.magicalDefense.currentArmor)} | ${f(p.magicalDefense.currentSweetspot)} | ${f(p.magicalDefense.currentReduction*100)} % |\n`;}
md+='\n## Physische Abwehr: alter Verlauf gegenüber hypothetischer neuer Kurve\n\nJe Zelle aktuell → Vorschlag. Vorschlag hält die Level-60-Stärke je Variante unverändert, verwendet ab Level 20 lineares Wachstum und darunter eine gesonderte Startkurve. Die neutrale Startkurve mit 3 Abwehr auf Level 10 ist nur ein Beispiel, keine beschlossene Einstellung.\n\n| Variante | Level 1 | Level 10 | Level 20 | Level 60 | Level 100 |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for(const row of rows)md+=`| ${row.name} | ${[1,10,20,60,100].map(level=>{const p=row.points.find(p=>p.level===level).defense.physicalDefense;return f(p.currentArmor)+' → '+f(p.proposedArmor);}).join(' | ')} |\n`;
md+='\nDie 30-%-Referenz bei Level 60 ist 250 Abwehr. Niedrigere Variantenwerte dürfen bewusst weniger schützen; sie sind nicht automatisch Fehler. Aktuelle exponentielle Abwehr und neue lineare Grundkurve passen jedoch nicht über alle Level zusammen. Ein Level-60-Anker allein bestimmt die Einsteigerkurve nicht. Bei beibehaltener Mindestresistenz bleiben auch bei nahezu keiner Abwehr mindestens rund 10 % Reduzierung.\n';
await fs.writeFile('data/balancing/world-creature-armor-curve-review.json',JSON.stringify(report,null,2)+'\n');
await fs.writeFile('docs/balancing/world-creature-armor-curve-review.md',md);
console.log(JSON.stringify({variants:rows.length,status:report.status,report:'docs/balancing/world-creature-armor-curve-review.md'},null,2));
