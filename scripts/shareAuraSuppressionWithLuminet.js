import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===165);
assert(before);
const skill=structuredClone(before);
skill.charClass=[...new Set([...skill.charClass,'Luminet','Lightmage'])];
const threat=skill.effects.find(e=>e.key==='aura-suppression-threat');
assert.equal(threat.type,'threatMultiplier');
threat.value=0.995;
threat.valueScaling={type:'linear',base:0.995,perLevel:-0.005};
skill.description_de='Eigenbuff für Kräuterkundler und Luminet, Dauer 180 Sekunden. Reduziert die durch Schaden neu erzeugte Aggro um 0,5 Prozent je gelerntem Skilllevel, bis zu 5 Prozent auf Stufe 10. Der Aggro-Multiplikator sinkt von 0,995 auf 0,95; der tatsächlich verursachte Schaden bleibt unverändert. Bei 1000 Schaden entstehen auf Stufe 10 950 Schadens-Aggro. Bereits angesammelte Aggro wird nicht rückwirkend gelöscht. Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Cooldown 60 Sekunden. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.';
skill.description_eng='Self buff shared by Herbalist and Luminet, lasting 180 seconds. Reduces newly generated damage threat by 0.5 percent per learned skill level, reaching 5 percent at level 10. Threat multiplier decreases from 0.995 to 0.95; actual damage is unchanged. At level 10, 1000 damage generates 950 damage threat. Does not retroactively erase accumulated threat. Also grants 1.2 Intelligence per skill level, up to 12 Intelligence at level 10. Fixed cast time 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Cooldown 60 seconds. Activation costs 50 Mana at level 1 plus 13 per additional level, reaching 167 Mana at level 10, before discounts. Ongoing Mana drain is calculated separately.';
delete skill.levelProgression;
skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(const classKey of ['herbalist','luminet'])for(let level=1;level<=10;level++){
 const resolved=resolveSkillAtLevel(skill,level,{classKey});
 assert(Math.abs(resolved.effects.find(e=>e.type==='threatMultiplier').value-(1-level*.005))<1e-12);
 assert(Math.abs(resolved.int-level*1.2)<1e-12);
 assert.equal(resolved.mana,50+(level-1)*13);
 assert.equal(resolved.type,'selfBuff');
}
for(const key of Object.keys(before).filter(k=>!['charClass','effects','description_de','description_eng','levelProgression'].includes(k)))assert.deepEqual(skill[key],before[key]);
if(!process.argv.includes('--apply')){
 console.log('Validated preview: same skill ID, shared with Luminet, 0.5% threat reduction per level to 5%, Intelligence and activation rules preserved. No writes.');
}else{
 try{
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const col=SkillDataModel.collection;
  const stored=await col.findOne({nr:165});
  const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;
  assert.deepEqual(normalized,before,'Live skill changed since catalog export');
  const backup='data/balancing/history/before-shared-aura-suppression-'+Date.now();
  await fs.mkdir(backup,{recursive:true});
  await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
  const fields=Object.fromEntries(['charClass','effects','description_de','description_eng','levelProgression'].map(k=>[k,skill[k]]));
  const result=await col.updateOne(stored,{$set:fields});
  assert.equal(result.matchedCount,1,'Concurrent modification prevented update');
  const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;
  assert.deepEqual(actual,skill);
  await fs.writeFile('data/balancing/shared-aura-suppression-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:165,rule:'Same shared active self buff for Herbalist/Witcher and Luminet/Lightmage; 0.5% damage threat reduction per level, 5% at level 10; Intelligence bonus, costs, duration and cooldown preserved.'},null,2)+'\n');
  console.log('Database update verified: shared Aura Suppression, 5% maximum threat reduction.');
 }catch(error){console.error('Aura update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
 finally{await mongoose.disconnect();}
}
