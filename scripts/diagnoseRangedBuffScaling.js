import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [skills,comparison,model,rotations,baseline,published]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const providers=published.providers.map(p=>{const skill=skillForClass(skills.find(s=>s.nr===p.nr),p.providerKey);return {...p,skill:{...skill,effectiveSkillLevel:skill.maxSkillLv}};});
function strip(s,keys){s=structuredClone(s);for(const k of keys){delete s[k];delete s.statScaling?.[k];delete s.statBonusUnits?.[k];delete s.statBonusTargets?.[k];}delete s.levelProgression;s.levelProgression=buildSkillProgression(s);return s;}
const variants=[
 {name:'none',mode:'none'},
 {name:'self',mode:'self'},
 {name:'full',mode:'groups'},
 {name:'oldAurora180',mode:'groups',map:s=>{if(s.nr!==197)return s;s=structuredClone(s);s.manaRegen=18;s.statScaling.manaRegen={type:'linear',base:18,perLevel:18};delete s.levelProgression;s.levelProgression=buildSkillProgression(s);return s;}},
 {name:'withoutDirectAttackBonuses',mode:'groups',map:s=>strip(s,['patk','matk'])},
 {name:'withoutDirectManaRegeneration',mode:'groups',map:s=>strip(s,['manaRegen'])},
 {name:'withoutGroupAttackSpeed',mode:'groups',map:s=>strip(s,['atkSpeed'])},
 {name:'withoutGroupDexterity',mode:'groups',map:s=>strip(s,['dex'])},
 {name:'withoutPowerOfFire',mode:'groups',omit:[224]},
 {name:'withoutPowerOfWater',mode:'groups',omit:[193]},
 {name:'withoutAurora',mode:'groups',omit:[197]},
 {name:'withoutCompanionBuff',mode:'groups',omit:[150]}
];
const rows=[];
for(const key of ['hunter','summoner']){
 const pre=comparison.passiveRows.find(r=>r.key===key),stored=baseline.results.find(r=>r.key===key),own=published.scenarios.selfOnly.results.find(r=>r.key===key).availableOwnBuffNumbers;
 const attackNumbers=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr);
 for(const variant of variants){
  const external=variant.mode==='groups'?providers.filter(p=>!variant.omit?.includes(p.nr)).map(p=>variant.map?variant.map(p.skill):p.skill):[];
  const groups=external.map(s=>s.nr);
  const r=simulateClass({pre,skills,model,attackNumbers,config:{...stored.config,cacheCombatStats:true,enableOwnBuffs:variant.mode!=='none',prebuffOwnBuffs:false,permanentPrebuffs:false,ownBuffNumbers:[...groups,...(variant.mode==='none'?[]:own)],preparedBuffNumbers:groups,permanentBuffNumbers:groups,externalBuffSkills:external,recordActionTimeline:false}});
  assert.equal(r.durationSeconds,600);assert(r.finalMana>=0);assert(!r.deathAt);assert(Math.abs(r.totalDamage-r.autoDamage-r.skillDamage-r.summonDamage)<1e-5);
  if(variant.name==='none')assert(Math.abs(r.totalDamage-stored.totalDamage)<1e-5);
  if(variant.name==='self')assert(Math.abs(r.totalDamage-published.scenarios.selfOnly.results.find(r=>r.key===key).totalDamage)<1e-5);
  if(variant.name==='oldAurora180')assert(Math.abs(r.totalDamage-published.scenarios.selfAndGroups.results.find(r=>r.key===key).totalDamage)<1e-5);
  const row={key,name:pre.name,variant:variant.name,total:r.totalDamage,skill:r.skillDamage,auto:r.autoDamage,summon:r.summonDamage,manaSpent:r.manaSpent,manaRegenerated:r.manaRegenerated,initialMana:r.initialMana,finalMana:r.finalMana,manaBlockedSeconds:r.manaBlockedSeconds,skills:r.skills.filter(s=>s.applications).map(s=>({nr:s.nr,name:s.name,applications:s.applications,damage:s.damage,manaSpent:s.manaSpent}))};rows.push(row);
  console.log(JSON.stringify({key,variant:row.variant,total:Math.round(row.total),skill:Math.round(row.skill),auto:Math.round(row.auto),summon:Math.round(row.summon),manaBlocked:row.manaBlockedSeconds,collectors:row.skills.find(s=>s.nr===186)?.applications??0}));
 }
}
const inputHashes=Object.fromEntries(await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','services/timedDamageSimulation.js','services/attackSpeed.js'].map(async p=>[p,createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
await fs.writeFile('data/balancing/ranged-buff-scaling-diagnosis.json',JSON.stringify({generatedAt:new Date().toISOString(),durationSeconds:600,status:'diagnosisOnlyNoBalanceChanges',inputHashes,notes:['Fixed current attack policy, identical equipment. Group buffs prepared and permanent. Current Aurora +20 MP/tick; historical +180 counterfactual reproduces published totals.','Isolated removals measure conditional marginal effects and are not additive. Dexterity changes also affect attack, accuracy and inherited companion attributes; no accuracy misses in this dummy.'],rows},null,2)+'\n');
const f=n=>Math.round(n).toLocaleString('de-DE');
let md='# Jäger und Nachtjäger – Ursache der Gruppenbuff-Skalierung\n\n600 Sekunden, aktuelle Skillwerte einschließlich Aurora-Segen +20 direkte MP-Regeneration je Tick. Unveränderte feste Angriffspriorität, identische Ausrüstung, keine Balanceänderungen. Gruppenbuffs vorbereitet und permanent. Die Werte sind Schaden über zehn Minuten, keine Angriffswerte.\n\n| Klasse | Variante | Gesamt | Skills | Auto-Attacks | Beschwörung | Mana-Wartezeit | Seelensammler-Anwendungen |\n| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
for(const row of rows)md+=`| ${row.name} | ${row.variant} | ${f(row.total)} | ${f(row.skill)} | ${f(row.auto)} | ${f(row.summon)} | ${row.manaBlockedSeconds.toFixed(2)} s | ${row.skills.find(s=>s.nr===186)?.applications??0} |\n`;
md+='\nEinzelne Buff-Entfernungen sind Sensitivitäten ausgehend vom vollständigen Paket. Ihre Unterschiede dürfen wegen Wechselwirkungen nicht addiert werden. Der historische Aurora-Lauf reproduziert die bisherigen Tabellenwerte und dient als Kontrolle. Seelenbegleiter ist aktuell dem Jäger zugeordnet; der Nachtjäger verursacht in diesem Lauf keinen Beschwörungsschaden.\n';
await fs.writeFile('docs/balancing/ranged-buff-scaling-diagnosis.md',md);
