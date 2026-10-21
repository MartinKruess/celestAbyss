import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:109});if(!s)throw Error('Missing skill');
 const set={effects:(s.effects??[]).filter(e=>e.key!=='wrath-storm-rage-gain'),description_de:s.description_de.replace('Bei Anwendung erhältst du einmalig 5 Prozent deiner maximalen Wut zurück, unabhängig von der Anzahl getroffener Gegner. ','').replace('Kostet vor Anwendung 5 Wutpunkte und kein Mana; die bestehende Rückgabe von 5 Wutpunkten erfolgt anschließend, netto 0 Wut bei erfolgreicher Anwendung.','Kostet 5 Wutpunkte und kein Mana. Gibt keine Wut zurück. Zusammen mit Ausbruch der Wut (55), Wutexplosion (35) und Wutklinge (5) werden genau 100 Wutpunkte verbraucht.'),description_eng:s.description_eng.replace('On use, restores 5 percent of maximum Rage once, independent of the number of enemies hit. ','').replace('Requires and consumes 5 Rage points before use, no Mana; existing 5-Rage gain is applied afterwards, net 0 Rage on successful use.','Costs 5 Rage points and no Mana. Does not restore Rage. Together with Outburst of Anger (55), Rage Explosion (35) and Berserk Slash (5), the four attacks consume exactly 100 Rage points.')};
 await new SkillDataModel({...s,...set}).validate();
 await fs.writeFile('data/balancing/storm-of-wrath-no-refund-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:109},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:109});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified Storm of Wrath: costs5 Rage, no refund; four-attack total100.');
}catch(e){console.error(`Rage refund removal failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
