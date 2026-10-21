import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const plans=[
 {nr:244,baseStats:{maxHealth:125,magicalAttack:37,physicalDefense:22,magicalDefense:31},rate:1.1,bond:true},
 {nr:226,baseStats:{maxHealth:125,physicalAttack:39,physicalDefense:25,magicalDefense:24},rate:1.5,bond:true},
 {nr:237,baseStats:{maxHealth:250,magicalAttack:74,physicalDefense:24,magicalDefense:50},rate:1.1,bond:false},
];
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:plans.map(p=>p.nr)}}).toArray();assert.equal(before.length,3);
 const changes=before.map(s=>{
  const p=plans.find(p=>p.nr===s.nr);
  const de=` Zusätzliche eigene Grundwerte: ${p.baseStats.maxHealth} Max-Leben, ${p.baseStats.physicalAttack??0} P-Angriff, ${p.baseStats.magicalAttack??0} M-Angriff, ${p.baseStats.physicalDefense} P-Verteidigung und ${p.baseStats.magicalDefense} M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz ${p.rate.toLocaleString('de-DE')} Angriffe pro Sekunde. ${p.bond?'Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten.':'Keine direkten Bindungsboni.'}`;
  const en=` Additional fixed base stats: ${p.baseStats.maxHealth} maximum HP, ${p.baseStats.physicalAttack??0} physical attack, ${p.baseStats.magicalAttack??0} magical attack, ${p.baseStats.physicalDefense} physical defense and ${p.baseStats.magicalDefense} magical defense, added to existing inheritance. Base frequency ${p.rate} attacks per second. ${p.bond?'Bond applies directly to creature attributes in addition to inheritance, at the master class learning cap.':'No direct Bond bonuses.'}`;
  let description_de=s.description_de.replace('Keine zusätzlichen festen HP-, Angriffs- oder Abwehrwerte und keine direkte Übernahme von Waffenangriff oder fertigen Kampfwerten des Meisters.','Keine direkte Übernahme von Waffenangriff oder fertigen Kampfwerten des Meisters.').replace('Die absolute Grundfrequenz der Auto-Attacks, Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen.','Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen.').replace('Grundfrequenz 1,5 Angriffe pro Sekunde','Grundfrequenz 1,1 Angriffe pro Sekunde');
  let description_eng=s.description_eng.replace('No additional fixed HP, attack or defense and no direct inheritance of weapon attack or derived master combat stats.','No direct inheritance of weapon attack or derived master combat stats.').replace('Absolute base basic-attack frequency, range and current-HP adjustment when maximum HP changes remain pending.','Range and current-HP adjustment when maximum HP changes remain pending.').replace('Base frequency 1.5 attacks per second','Base frequency 1.1 attacks per second');
  return {...s,summonedCreatureSettings:{...s.summonedCreatureSettings,baseStats:p.baseStats,baseAttacksPerSecond:p.rate,receivesBond:p.bond},description_de:description_de+de,description_eng:description_eng+en};
 });
 for(const s of changes)await new SkillDataModel(s).validate();
 const dir='data/balancing/history/before-summon-base-stats-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 await mongoose.connection.transaction(async session=>{for(const s of changes)await col.updateOne({_id:s._id},{$set:{summonedCreatureSettings:s.summonedCreatureSettings,description_de:s.description_de,description_eng:s.description_eng}},{session});});
 for(const s of changes)assert.deepEqual(await col.findOne({_id:s._id}),s);
 await fs.writeFile('data/balancing/summon-base-stats-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skills:changes},null,2)+'\n');
 console.log('Verified base stats for Nature Spirit, Spirit Companion and Morrak; Bond for first two; rates1.1/1.5/1.1.');
}catch(error){console.error('Summon base update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
