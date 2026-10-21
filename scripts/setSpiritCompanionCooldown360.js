import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:226});if(!s)throw Error('Missing skill');
 const set={cd:360,summonedCreatureSettings:{...s.summonedCreatureSettings,summonCooldownSeconds:360,cooldownStartsOn:'summon',deathRestartsCooldown:false,attackSpeed:1},description_de:s.description_de.replace('Cooldown 60 Sekunden','Cooldown 360 Sekunden').replace('Angriffsfrequenz, Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen.','Grund-Angriffstempo 100 Prozent wie bei Morrak; keine Übernahme von Agilität. Die absolute Grundfrequenz der Auto-Attacks, Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen.')+' Der Cooldown beginnt mit der Beschwörung. Bei vorzeitigem Tod verschwindet der Begleiter; erneutes Rufen ist erst nach Ablauf des noch laufenden Beschwörungs-Cooldowns möglich. Tod startet keine zusätzliche Wartezeit. Bei voller Laufzeit von 360 Sekunden kann er nach Ablauf erneut gerufen werden. Kein Wiederbeleben auf 1 HP und keine separate Todessperre.',description_eng:s.description_eng.replace('cooldown 60 seconds','cooldown 360 seconds').replace('Attack frequency, range and current-HP adjustment when maximum HP changes remain pending.','Base attack-speed multiplier is 100%, matching Morrak; no agility inheritance. Absolute base basic-attack frequency, range and current-HP adjustment when maximum HP changes remain pending.')+' Cooldown starts on summoning. If killed early, the companion disappears and can be summoned again once the remaining summon cooldown expires. Death does not restart the cooldown. After a full 360-second lifetime, it can be summoned again. No 1-HP revival or separate death lockout.'};
 await new SkillDataModel({...s,...set}).validate();
 await fs.writeFile('data/balancing/spirit-companion-cooldown360-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:226},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:226});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified: cooldown360 from summon, death preserves remaining cooldown, attackSpeed1.');
}catch(e){console.error(`Companion cooldown update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
