import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {skillForClass} from '../services/skillLearningLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=new Map();
function edit(nr){if(!changes.has(nr)){const before=catalog.find(s=>s.nr===nr);changes.set(nr,{before,after:structuredClone(before)});}return changes.get(nr).after;}
function curve(c,f){if(!c)return;for(const k of ['base','perLevel'])if(typeof c[k]==='number')c[k]*=f;for(const k of ['values','steps'])if(c[k])c[k]=c[k].map(v=>v*f);if(c.rule)curve(c.rule,f);}
function stat(s,k,max){const f=max/resolveSkillAtLevel(s,s.maxSkillLv)[k];s[k]*=f;curve(s.statScaling[k],f);for(const r of s.levelProgression.rules)if(r.path.join('.')==='statScaling.'+k)curve(r.rule,f);assert(Math.abs(resolveSkillAtLevel(s,s.maxSkillLv)[k]-max)<1e-7);}
const pact=edit(236);stat(pact,'int',6);stat(pact,'wis',9);
pact.description_de='Aktiver Eigenbuff für 600 Sekunden. Je Skillstufe +2 Intelligenz, +3 Willenskraft und +5 Vitalität; auf Stufe 3 +6 Intelligenz, +9 Willenskraft und +15 Vitalität. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50/63/76 vor Rabatten. Erneute Anwendung erneuert die Wirkung ohne Selbststapelung. Kein zusätzlicher Risikoeffekt.';
pact.description_eng='Active self buff for 600 seconds. Each level grants 2 Intelligence, 3 Wisdom and 5 Vitality; level 3 grants 6 Intelligence, 9 Wisdom and 15 Vitality. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana 50/63/76 before discounts. Reapplication refreshes without stacking. No additional risk effect.';
const fire=edit(178);stat(fire,'int',5);for(const e of fire.effects)if(e.type==='damageBonus'){e.value*=.5;curve(e.valueScaling,.5);}for(const r of fire.levelProgression.rules)if(r.path.join('.')==='effects.0.valueScaling')curve(r.rule,.5);
fire.description_de='Aktiver Eigenbuff mit zehn Stufen für 300 Sekunden. Gewährt +0,5 Intelligenz und +1 flachen Feuerangriffsbonus je Skillstufe, maximal +5 Intelligenz und +10 Feuerbonus auf Stufe 10. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. Kein Bonus für normale Auto-Attacks. Einheitliche Element-Zuordnung und genaue Anwendung bei Mehrfachtreffern und DoTs bleiben abzustimmen.';
fire.description_eng='Active self buff with ten levels for 300 seconds. Grants 0.5 Intelligence and 1 flat fire attack bonus per level, up to 5 Intelligence and 10 fire bonus. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts. No normal basic attack bonus. Unified element tags and exact multi-hit/DoT application remain pending.';
const mercy=edit(190);stat(mercy,'patk',40);stat(mercy,'dex',8);
mercy.description_de='Aktiver Eigenbuff für 600 Sekunden mit zehn Stufen. Gewährt 0,8 Geschick je Skillstufe, maximal +8. Der direkte P-Angriff steigt proportional zur bisherigen Stufenkurve von 15 × 40/69 auf maximal +40. Kein direkter Angriffstempobonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.';
mercy.description_eng='Active self buff for 600 seconds with ten levels. Grants 0.8 Dexterity per level, up to 8. Direct physical attack follows the former level curve scaled by 40/69, from 15 × 40/69 to 40. No direct attack-speed bonus. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts.';
const elements=edit(194);stat(elements,'int',20);
elements.description_de=elements.description_de.replace('Intelligenz steigt um 1 je Skillstufe von 1 auf 10.','Intelligenz steigt um 2 je Skillstufe von 2 auf 20.');
elements.description_eng=elements.description_eng.replace(/Intelligence[^.]*\./,'Intelligence increases by 2 per skill level, from 2 to 20.');
// Preserve the shared Shaman definition; specialize only the Adventurer.
const wild=edit(149),variant=structuredClone(wild);stat(variant,'patk',40);
const de='Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte.';
const en='Adventurer variant: physical attack 20/30/40 instead of 30/45/60; Strength remains 3/4/5. Duration 1200 seconds, cooldown 60 seconds, fixed 0.1-second cast. Mana 50/63/76 before discounts. Shaman keeps its existing values.';
wild.classCombatOverrides={...wild.classCombatOverrides,adventurer:{patk:variant.patk,statScaling:variant.statScaling,levelProgression:variant.levelProgression,description_de:de,description_eng:en}};
wild.description_de+=' '+de;wild.description_eng+=' '+en;
for(let level=1;level<=3;level++){const a=resolveSkillAtLevel(skillForClass(wild,'adventurer'),level),s=resolveSkillAtLevel(skillForClass(wild,'shaman'),level),old=resolveSkillAtLevel(skillForClass(changes.get(149).before,'shaman'),level);assert(Math.abs(a.patk-[20,30,40][level-1])<1e-7);assert.equal(s.patk,old.patk);assert.equal(s.str,old.str);}
for(const {before,after}of changes.values()){await new SkillDataModel(after).validate();assert.equal(after.maxSkillLv,before.maxSkillLv);assert.deepEqual(after.resourceCosts,before.resourceCosts);assert.equal(after.cd,before.cd);assert.equal(after.dur,before.dur);}
if(!process.argv.includes('--apply'))console.log('Validated five approved skill records; Shaman unchanged. Dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes.values()){const live=await col.findOne({nr:before.nr}),normal=JSON.parse(JSON.stringify(live));delete normal.__v;assert.deepEqual(normal,before);stored.push(live);}
 const backup='data/balancing/history/before-approved-self-buffs-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 let i=0;for(const {after}of changes.values()){const live=stored[i++],fields=structuredClone(after);delete fields._id;assert.equal((await col.updateOne(live,{$set:fields})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,after);}
 await fs.writeFile('data/balancing/approved-self-buff-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,deferredClasses:['luminet','butcher','gladiator','shaman'],changes:[...changes.values()]},null,2)+'\n');console.log('Five approved skill records saved and verified; deferred class buffs preserved.');
}catch(error){console.error('Self-buff update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
