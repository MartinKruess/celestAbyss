import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {soulReserveAttackBonus} from '../services/soulReserveBonus.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[120,241].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual([...before.charClass].sort(),['Bloodmage','Ritualist']);return {before,after:structuredClone(before)};});
const reaper=changes[0].after;
for(const key of ['bonusStat','fragmentsPerBonusStep','bonusPerFullStep','usesCurrentStoredAmount'])delete reaper.soulStorageSettings[key];
reaper.description_de='Reaper: permanente Passive mit zehn Stufen, ausschließlich Seelenspeicher. Kapazität 10 Seelen auf Stufe 1, +10 je weiterer Stufe bis 100. Kein Intelligenz- oder sonstiger Attributbonus. Aktueller Vorrat bleibt auch offline erhalten, ohne zeitlichen Verfall. Gewinne oberhalb der Kapazität verfallen. Erzeugt selbst keine Seelen. Keine Aktivierungskosten, Castzeit oder Cooldown. Persistente Charakterressource ist später serverseitig anzubinden.';
reaper.description_eng='Reaper: permanent passive with ten levels, soul storage only. Capacity starts at 10 and increases by 10 per additional level to 100. No Intelligence or other attribute bonus. Storage persists offline without time decay; excess gains are discarded. Generates no souls. No activation costs, cast time or cooldown. Persistent character storage still requires server integration.';
const reserve=changes[1].after;delete reserve.soulReserveBonusSettings.bonusPerStoredFragment;Object.assign(reserve.soulReserveBonusSettings,{fragmentsPerBonusStep:10,bonusPerFullStep:5,maximumBonus:50});
reserve.description_de='Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +5 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +5, bis maximal +50 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.';
reserve.description_eng='Permanent passive reserve bonus with one learnable level. Each complete ten currently stored souls in the Reaper-managed reserve grants 5 direct magical attack: 0–9 souls grant 0, 10–19 grant 5, up to 50 at 100 souls. Spending souls reduces the bonus at ten-soul thresholds. Reaper itself grants no Intelligence. Generates no souls and uses no historical kill count or morality. No activation costs, cast time, cooldown or limited duration.';
for(const {before,after}of changes){await new SkillDataModel(after).validate();assert.equal(after.maxSkillLv,before.maxSkillLv);assert.deepEqual(after.resourceCosts,before.resourceCosts);}
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(reaper,level),b=resolveSkillAtLevel(changes[0].before,level);assert.deepEqual(a.soulStorageSettings.capacityScaling,b.soulStorageSettings.capacityScaling);assert.equal(a.soulStorageSettings.bonusStat,undefined);}
for(const souls of [0,1,9,10,19,20,99,100,101])assert.equal(soulReserveAttackBonus(reserve,souls),Math.min(50,Math.floor(souls/10)*5));
if(!process.argv.includes('--apply'))console.log('Validated storage-only Reaper and +5 magical attack per full ten souls, capped at +50.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-ritualist-soul-reserve-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:changes[i].after.nr===181?{wis:''}:{}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/ritualist-soul-reserve-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Reaper storage-only and stepped reserve attack saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


