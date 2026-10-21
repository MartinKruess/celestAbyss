import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {soulReserveAttackBonus} from '../services/soulReserveBonus.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===241),s=structuredClone(before);s.soulReserveBonusSettings.bonusPerFullStep=3;s.soulReserveBonusSettings.maximumBonus=30;
s.description_de='Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +3 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +3, 20–29 geben +6, bis maximal +30 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.';
s.description_eng='Permanent passive reserve bonus with one learnable level. Each complete ten currently stored souls in the Reaper-managed reserve grants 3 direct magical attack: 0–9 souls grant 0, 10–19 grant 3, 20–29 grant 6, up to 30 at 100 souls. Spending souls reduces the bonus at ten-soul thresholds. Reaper itself grants no Intelligence. Generates no souls and uses no historical kill count or morality. No activation costs, cast time, cooldown or limited duration.';
const changes=[{before,after:s}];await new SkillDataModel(s).validate();
for(const souls of [0,9,10,19,20,99,100,101])assert.equal(soulReserveAttackBonus(s,souls),Math.min(30,Math.floor(souls/10)*3));
assert.equal(s.maxSkillLv,before.maxSkillLv);assert.deepEqual(s.resourceCosts,before.resourceCosts);
if(!process.argv.includes('--apply'))console.log('Validated +3 magical attack per full ten souls, capped at +30.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-soul-reserve-three-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:changes[i].after.nr===181?{wis:''}:{}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/soul-reserve-three-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Number of Victims +3 per ten souls saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}



