import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:99});
 if(!before)throw Error('Missing skill');
 const execution={...before.attackExecution,energyGatherSeconds:1,energyHoldSeconds:1,explosionPhaseSeconds:1,hitTimingStatus:'pending'};delete execution.damageTiming;
 const set={attackExecution:execution,description_de:before.description_de.replace('Sammelt 3 Sekunden dunkle Energie um den Anwender; währenddessen','Der dreisekündige Ablauf besteht aus 1 Sekunde Energie sammeln, 1 Sekunde Energie halten und 1 Sekunde Explosion; während dieser drei Sekunden').replace('Am Ende wird die Energie mit einem Schrei kreisförmig','In der dritten Sekunde wird die Energie mit einem Schrei kreisförmig')+' Sichtbarer Aufbau soll Gegner zum Abstandhalten bewegen und dem Anwender kurz Raum zum Reagieren oder Entkommen verschaffen. Kein erzwungenes Zurückstoßen oder anderer zusätzlicher Kontrolleffekt festgelegt. Der exakte einzelne Trefferzeitpunkt innerhalb der Explosionssekunde wird an die Animation angepasst.',description_eng:before.description_eng.replace('Collects dark energy around the caster for 3 seconds, granting','The three-second sequence consists of 1 second gathering energy, 1 second holding it and 1 second exploding, granting').replace('At the end releases the energy','During the third second releases the energy')+' Visible buildup is intended to encourage opponents to move away, giving the caster space to react or escape. No forced knockback or additional control effect defined. Exact single-hit timing within the explosion second will be matched to the animation.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/underworld-scream-phases-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:99},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:99});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Underworld Scream phases verified: gather1s, hold1s, explosion1s.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
