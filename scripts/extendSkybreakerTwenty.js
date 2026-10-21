import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:212});assert(b);const s=structuredClone(b);delete s._id;s.maxSkillLv=20;
 const levels=Array.from({length:20},(_,i)=>resolveSkillAtLevel(s,i+1));
 s.statScaling.patk.values=levels.map(r=>r.patk);s.statScaling.matk.values=levels.map(r=>r.matk);s.resourceCosts.find(c=>c.resource==='mana').scaling.values=levels.map(r=>r.mana);
 const last=levels.at(-1);
 s.description_de=`Trifft zweimal mit kombiniertem physischem und magischem Schaden. 20 Skillstufen. Der erste Treffer verursacht 344 bis ${last.patk} physischen und 592 bis ${last.matk} magischen Grundschaden, jeweils zuzüglich des vollen aktuellen P- beziehungsweise M-Angriffs. Der zweite Treffer nach vorläufig 2,5 Sekunden verursacht 80 Prozent dieses gesamten kombinierten Schadens. Die gespeicherten ganzzahligen Wachstumsregeln werden über Stufe 10 hinaus fortgeführt; die bisherigen Stufen 1 bis 10 bleiben unverändert. Kein DoT. Castzeit 0,6 Sekunden. Cooldown 137 Sekunden auf Stufe 1, minus 1 je weiterer Stufe bis ${last.cd} auf Stufe 20. Mana nach der 25-Prozent-Regel aus dem gesamten Skill-Grundschaden beider Treffer, ohne Charakterangriff oder Gegnerzahl: 421 bis ${last.mana}. Trefferbereich bleibt offen.`;
 s.description_eng=`Two hits dealing combined physical and magical damage over 20 skill levels. First hit: 344 to ${last.patk} physical and 592 to ${last.matk} magical base damage, plus full current physical and magical attack respectively. Second hit after a provisional 2.5 seconds deals 80% of that total. Existing integer progression rules extend beyond level 10; levels 1–10 are unchanged. No damage over time. Cast time 0.6 seconds. Cooldown 137 seconds, minus 1 per additional level to ${last.cd}. Mana follows the 25% rule for total base damage of both hits, excluding character attack and target count: 421 to ${last.mana}. Hit area remains undefined.`;
 await new SkillDataModel(s).validate();for(let l=1;l<=10;l++){const old=resolveSkillAtLevel({...b,maxSkillLv:10},l),now=resolveSkillAtLevel(s,l);for(const field of ['patk','matk','mana','cd'])assert.equal(now[field],old[field]);}
 const backup='data/balancing/history/before-skybreaker-twenty-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/skybreaker-twenty-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:212,level20:{physicalBase:last.patk,magicalBase:last.matk,mana:last.mana,cooldown:last.cd},scope:'Extend existing saved progression; preserve levels 1–10.'},null,2)+'\n');console.log(JSON.stringify({level:20,physical:last.patk,magical:last.matk,mana:last.mana,cooldown:last.cd}));
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
