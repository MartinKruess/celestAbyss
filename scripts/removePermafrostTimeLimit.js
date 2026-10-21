import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:240});
 if(before?.skillName_de!=='Permafrost')throw Error('Unexpected skill');
 const set={toggleSettings:{durationMode:'whileEnabled',onInsufficientResource:'deactivate'},effects:before.effects.map(e=>({...e,durationSeconds:0})),description_de:'Sofort umschaltbarer Eigenbuff mit drei Stufen und ohne feste Laufzeit. Bleibt aktiv, bis er manuell ausgeschaltet wird oder das Mana für den nächsten Verbrauchstick nicht reicht. Bei jedem Mana-Regenerationstick kostet er auf Stufe 1/2/3 jeweils 3/9/27 Mana; kein zusätzlicher einmaliger Aktivierungspreis. Eiszauber haben bei aktivem Buff 2/4/6 Sekunden weniger Cooldown. Zusätzlich steigt die Einfrierchance von Eisangriffen auf allen drei Stufen um einen Prozentpunkt; Gefrierbrand erreicht damit auf Maximalstufe 11 statt 10 Prozent. Keine zusätzlichen Einfrierwürfe oder eigene Einfrierdauer. Castzeit 0 Sekunden. Beim Abschalten enden die Boni und der laufende Verbrauch. Umschalt-Cooldown, Mindest-Cooldown von Eiszaubern sowie Einfluss auf bereits laufende Cooldowns werden noch festgelegt.',description_eng:'Instant-toggle self buff with three levels and no fixed duration. Remains enabled until manually switched off or Mana is insufficient for the next drain tick. Costs 3/9/27 Mana per Mana regeneration tick at levels 1/2/3, with no additional upfront cost. Reduces ice spell cooldowns by 2/4/6 seconds while enabled. Adds one percentage point to ice-attack freeze chance at every level, raising maximum Frostburn chance from 10 to 11 percent. No separate freeze rolls or independent freeze duration. Cast time zero. Benefits and drain end on deactivation. Toggle cooldown, minimum ice-spell cooldown and handling of already running cooldowns remain pending.'};
 const candidate={...before,...set};delete candidate.dur;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/permafrost-no-time-limit-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:240},{$set:set,$unset:{dur:''}});
 const after=await SkillDataModel.collection.findOne({nr:240});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 if(after.dur!==undefined||after.toggleSettings.maxDurationSeconds!==undefined)throw Error('Time limit remains');
 console.log('Permafrost verified: indefinite toggle, ends on manual deactivation or insufficient Mana.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
