import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {monsterArmorReduction,defenseReferenceRules} from '../services/combatDefense.js';

const paths=['data/creatures/family-combat-design.json','data/creatures/world-variant-preview.json','data/creatures/world-variant-design.json'];
const sources=await Promise.all(paths.map(p=>fs.readFile(p,'utf8')));
const [design,preview,world]=sources.map(JSON.parse);
const level=60,factor=world.growthFactors.physicalAttack**(level-1);
assert.equal(world.growthFactors.physicalAttack,world.growthFactors.physicalDefense);
assert.equal(world.growthFactors.physicalAttack,world.growthFactors.magicalDefense);
const rows=[];
function append({name,family,habitat,role,attack,attackType='physical',pdef,mdef,source}){
 const channel=n=>n===null?null:{sweetspot:n/defenseReferenceRules.monsterDivisor,reductionAgainstLevel60:monsterArmorReduction(n,level)};
 rows.push({name,family,habitat,role,level,attack,attackType,physicalDefense:pdef,magicalDefense:mdef,physical:channel(pdef),magical:channel(mdef),source});
}
for(const key of ['world-gray-wolf','world-silverwing-crane','world-stone-golem']){
 const v=preview.variants.find(v=>v.key===key),s=v.levels.find(l=>l.level===level).stats;
 append({name:v.name,family:'Referenzen',attack:s.physicalAttack,pdef:s.physicalDefense,mdef:s.magicalDefense,source:'Existing level-60 preview, with original unrounded level-1 coefficients'});
}
const habitatNames={forest:'Wald',cave:'Höhlen',mountain:'Berg',frost:'Frost'};
for(const key of ['goblins','orcs','hobgoblins','ogres','trolls','cyclopes']){
 const family=design.families.find(f=>f.key===key);
 for(const habitat of ['forest','cave','mountain','frost']){
  const attacks=family.derivedLevelOneAttack?.[habitat];if(!attacks)continue;
  for(const [role,baseAttack]of Object.entries(attacks).sort((a,b)=>a[1]-b[1])){
   if(baseAttack===null)continue;
   const defenseRole=role==='shamanMagicalAttack'?'shaman':role;
   const def=family.derivedLevelOneDefense?.[habitat];
   const defense=role==='physicalAttack'?def:def?.[defenseRole];
   const roleNames={warrior:key==='hobgoblins'?'Kämpfer':'Krieger',archer:'Schütze',captain:key==='goblins'?'Haupt-Goblin':'Hauptmann',king:'König',commander:'Kommandant',fighter:'Kämpfer',chief:'Häuptling',shamanMagicalAttack:'Schamane'};
   const species={goblins:'Goblin',orcs:'Orc',hobgoblins:'Hobgoblin',ogres:'Oger'};
   const name=key==='trolls'?habitatNames[habitat]+'troll':key==='cyclopes'?'Bergzyklop':key==='goblins'?(role==='captain'?`${habitatNames[habitat]}-Haupt-Goblin`:`${habitatNames[habitat]}goblin-${roleNames[role]}`):`${habitatNames[habitat]}-${species[key]}-${roleNames[role]}`;
   append({name,family:family.name,habitat,role,attack:baseAttack*factor,attackType:role==='shamanMagicalAttack'?'magical':'physical',pdef:defense?defense.physicalDefense*factor:null,mdef:defense?defense.magicalDefense*factor:null,source:{baseLevel:1,attack:baseAttack,physicalDefense:defense?.physicalDefense??null,magicalDefense:defense?.magicalDefense??null,factor}});
  }
 }
}
for(const row of rows){
 assert.ok(Number.isFinite(row.attack));
 for(const ch of ['physical','magical'])if(row[ch])assert.ok(Math.abs(monsterArmorReduction(row[ch].sweetspot*defenseReferenceRules.monsterDivisor,row[ch].sweetspot)-.3)<1e-10);
}
assert.equal(rows.length,47);
const assumptions=[
 'Read-only level-60 scaling probe; no runtime templates or database values changed.',
 'Three requested combat values interpreted as attack plus physical and magical defense. P and M label attack type; shamans use magical attack.',
 'New profiles use their integer level-1 values and the existing provisional 1.04 compound growth: value(60) = value(1) × 1.04^59. This growth is a test assumption, not newly confirmed balance.',
 'Reference wolf/bird/golem use their actual existing level-60 previews, whose original level-1 coefficients were not rounded. No stealth rounding or recalibration of these references.',
 'Physical and magical sweetspots are independent: monster defense / (25/6). Sweetspot means the player level at which this monster blocks 30% of that damage type. Enemy level itself does not set outgoing player damage reduction.',
 'Health, fight duration, player survivability, party size and boss soloability are not evaluated. No buffs, debuffs, armor penetration, movement or skills applied.',
 'Family blocks remain together; within each family habitats follow forest/cave/mountain/frost and roles are sorted by attack. This is no overall difficulty ranking.',
 'Mountain Cyclops defense is still unassigned; no 10% troll-defense inheritance applied because its low magical-defense intent remains unresolved.',
 'Frosttroll uses the explicitly stated provisional mountain-troll reference, with already-rounded level-1 values 45 / 34 / 31.'
];
const inputHashes=Object.fromEntries(paths.map((p,i)=>[p,createHash('sha256').update(sources[i]).digest('hex')]));
const f=n=>n===null?'offen':Number(n.toFixed(1)).toLocaleString('de-DE');
let md='# Neue Monster: Level-60-Skalierung und Abwehr-Sweetspots\n\n'+assumptions.map(a=>'- '+a).join('\n')+`\n\nFaktor: ${factor}. Ein Sweetspot auf Level 60 benötigt **250 Abwehr**, für physischen und magischen Schaden jeweils separat.\n\n`;
for(const family of [...new Set(rows.map(r=>r.family))]){
 md+=`## ${family}\n\n| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |\n| --- | ---: | ---: | ---: | ---: | ---: |\n`;
 for(const r of rows.filter(r=>r.family===family))md+=`| ${r.name} | ${f(r.attack)} ${r.attackType==='physical'?'P':'M'} | ${f(r.physicalDefense)} | ${f(r.magicalDefense)} | ${f(r.physical?.sweetspot??null)} / ${f(r.magical?.sweetspot??null)} | ${f(r.physical?r.physical.reductionAgainstLevel60*100:null)} % / ${f(r.magical?r.magical.reductionAgainstLevel60*100:null)} % |\n`;
 md+='\n';
}
await fs.writeFile('data/balancing/new-monsters-level60-defense-review.json',JSON.stringify({status:'provisionalScalingNotCombatSimulation',level,factor,monsterDivisor:defenseReferenceRules.monsterDivisor,assumptions,inputHashes,rows},null,2)+'\n');
await fs.writeFile('docs/balancing/new-monsters-level60-defense-review.md',md);
console.log(md);
