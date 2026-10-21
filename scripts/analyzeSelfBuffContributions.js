import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {simulateClass,conversionDelta} from '../services/timedDamageSimulation.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {curveValue} from '../services/rotationDamage.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [report,baseline,catalog,comparison,model,rotations]=await Promise.all(['data/balancing/all-class-buff-scenarios.json','data/balancing/all-class-timed-damage.json','data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json'].map(read));
for(const [p,hash]of Object.entries(report.inputHashes))assert.equal(createHash('sha256').update(await fs.readFile(p)).digest('hex'),hash,'Stale input '+p);
const keys=['adventurer','butcher','shaman','hunter','summoner','knight','villian'];
const extras=new Set(catalog.filter(s=>s.effects?.some(e=>e.type==='triggeredAttack'&&e.applicationTrigger==='ownBasicAttackHit')).map(s=>s.nr));
const parts=r=>{const extra=r.skills.filter(s=>extras.has(s.nr)).reduce((n,s)=>n+s.damage,0);return{total:r.totalDamage,auto:r.autoDamage+extra,activeSkills:r.skillDamage-extra,summon:r.summonDamage,autoActions:r.skills.find(s=>s.nr==='auto')?.applications??0};};
const rows=[];
for(const key of keys){
 const stored=report.scenarios.selfOnly.results.find(r=>r.key===key),base=baseline.results.find(r=>r.key===key),pre=comparison.passiveRows.find(r=>r.key===key),attacks=rotations.classes.find(r=>r.key===key).rows.map(s=>s.nr);
 const run=(own=stored.availableOwnBuffNumbers,skills=catalog,attributeModel=model)=>simulateClass({pre,skills,model:attributeModel,attackNumbers:attacks,config:{...stored.config,ownBuffNumbers:own,cacheCombatStats:true,recordActionTimeline:false}});
 const control=run();assert(Math.abs(control.totalDamage-stored.totalDamage)<1e-5);
 const deltas={},p=parts(control),b=parts(base);for(const field of Object.keys(p))deltas[field]=p[field]-b[field];
 const buffs=[];
 for(const nr of stored.availableOwnBuffNumbers){
  const without=run(stored.availableOwnBuffNumbers.filter(n=>n!==nr)),s=skillForClass(catalog.find(s=>s.nr===nr),key),row=control.skills.find(s=>s.nr===nr),periods=control.buffPeriods.filter(p=>p.nr===nr),values=Object.fromEntries(Object.entries(s.statScaling??{}).map(([k,c])=>[k,curveValue(c,s.maxSkillLv)]));
  const converted={};for(const [short,long]of Object.entries({str:'strength',int:'intelligence',dex:'dexterity',agi:'agility'}))if(values[short])for(const [k,v]of Object.entries(conversionDelta(model,key,long,values[short])))converted[k]=(converted[k]??0)+v;
  buffs.push({nr,name:s.skillName_de,level:s.maxSkillLv,values,convertedAttributeBonuses:converted,effects:s.effects,duration:curveValue(s.durationScaling,s.maxSkillLv)??s.dur,cooldown:curveValue(s.cooldownScaling,s.maxSkillLv)??s.cd,activations:row?.applications??0,manaSpent:row?.manaSpent??0,uptime:periods.reduce((n,p)=>n+p.end-p.start,0),directTriggeredDamage:row?.damage??0,marginalGainAmongOtherBuffs:control.totalDamage-without.totalDamage,without:parts(without)});
 }
 // Counterfactual only: retain every buff and all its costs/effects except speed.
 // Baseline speed remains baked into pre.stats; only temporary Agility conversions change.
 const noSpeedCatalog=structuredClone(catalog);
 for(const s of noSpeedCatalog.filter(s=>stored.availableOwnBuffNumbers.includes(s.nr))){
  if(s.statScaling?.atkSpeed)s.statScaling.atkSpeed={type:'fixed',base:0};if(s.atkSpeed!==undefined)s.atkSpeed=0;
  for(const e of s.effects??[])if(e.type==='statModifier'&&['atkSpeed','attackSpeed'].includes(e.stat)){e.value=0;if(e.valueScaling)e.valueScaling={type:'fixed',base:0};}
  delete s.levelProgression;s.levelProgression=buildSkillProgression(s);
 }
 const noSpeedModel=structuredClone(model);for(const c of noSpeedModel.conversions)if(c.attribute==='agility'&&c.target==='attackSpeed')c.amountPerPoint=0;
 const noSpeed=run(stored.availableOwnBuffNumbers,noSpeedCatalog,noSpeedModel);
 const result={key,name:stored.name,base:b,buffed:p,deltas,gainPercent:100*(control.totalDamage/base.totalDamage-1),withoutTemporarySpeed:parts(noSpeed),temporarySpeedMarginal:control.totalDamage-noSpeed.totalDamage,buffs:buffs.sort((a,b)=>b.marginalGainAmongOtherBuffs-a.marginalGainAmongOtherBuffs)};
 rows.push(result);
 console.log(JSON.stringify({key,gain:Math.round(deltas.total),auto:Math.round(deltas.auto),skills:Math.round(deltas.activeSkills),pet:Math.round(deltas.summon),temporarySpeed:Math.round(result.temporarySpeedMarginal),buffs:result.buffs.map(b=>({nr:b.nr,delta:Math.round(b.marginalGainAmongOtherBuffs)}))}));
 await fs.writeFile('tmp/self-buff-contributions-progress.json',JSON.stringify(rows,null,2)+'\n');
}
await fs.writeFile('data/balancing/self-buff-contributions.json',JSON.stringify({generatedAt:new Date().toISOString(),inputHashes:report.inputHashes,scope:'Current 600s unbuffed versus normally activated self-only buffs, same fixed policy. Leave-one-buff-out marginal comparisons and a temporary-speed-only removal diagnostic. Marginal contributions interact and must not be added. Healing, defense and utility not scored. No skill/database/report changes.',rows},null,2)+'\n');
