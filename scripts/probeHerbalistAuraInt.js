import fs from 'node:fs/promises';
import {simulateClass} from '../services/timedDamageSimulation.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [catalog,c,model,rot,b,report]=await Promise.all(['data/skills.json','data/balancing/class-comparison-level60.json','data/balancing/attribute-model.json','data/balancing/all-class-damage-rotations.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buff-scenarios.json'].map(read));
const stored=b.results.find(r=>r.key==='herbalist'),old=report.scenarios.selfOnly.results.find(r=>r.key==='herbalist');const results=[];
for(const mode of ['current','auraPlusTenInt','withoutProtectionWisdom']){
 const skills=structuredClone(catalog);
 if(mode==='auraPlusTenInt'){const s=skills.find(s=>s.nr===165);s.int=1;s.statScaling={...s.statScaling,int:{type:'linear',base:1,perLevel:1}};s.statBonusTargets={...s.statBonusTargets,int:'self'};delete s.levelProgression;s.levelProgression=buildSkillProgression(s);}
 if(mode==='withoutProtectionWisdom'){const s=skills.find(s=>s.nr===164);delete s.wis;delete s.statScaling.wis;delete s.levelProgression;s.levelProgression=buildSkillProgression(s);}
 const r=simulateClass({pre:c.passiveRows.find(r=>r.key==='herbalist'),skills,model,attackNumbers:rot.classes.find(r=>r.key==='herbalist').rows.map(s=>s.nr),config:{...stored.config,cacheCombatStats:true,enableOwnBuffs:true,prebuffOwnBuffs:false,permanentPrebuffs:false,ownBuffNumbers:old.availableOwnBuffNumbers,preparedBuffNumbers:[],permanentBuffNumbers:[],externalBuffSkills:[]}});
 const row={mode,damage:r.totalDamage,gainPercent:100*(r.totalDamage/stored.totalDamage-1),manaWaitSeconds:r.manaBlockedSeconds,manaSpent:r.manaSpent,manaRegenerated:r.manaRegenerated,finalMana:r.finalMana};results.push(row);console.log(JSON.stringify(row));
}
await fs.writeFile('data/balancing/herbalist-aura-int-probe.json',JSON.stringify({generatedAt:new Date().toISOString(),status:'simulationOnly',assumptions:'Aura +1 INT per level, +10 at level 10; all existing durations, Mana costs and effects retained. Third run isolates current protection Wisdom effect.',results},null,2)+'\n');
