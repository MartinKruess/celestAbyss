import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:62});if(!s)throw Error('Missing skill');
 const effect={key:'infernal-cyclone-periodic',type:'periodicDamage',target:'enemiesInArea',value:72,unit:'flat',valueScaling:{type:'linear',base:72,perLevel:28.5},durationSeconds:6,durationScaling:s.durationScaling,firstTickAfterSeconds:2,intervalSeconds:2,addsCasterMagicalAttack:false,damageTypes:['magical']};
 const de=s.description_de.replace('Der zusätzliche Schaden über Zeit, sein Tickintervall, der Trefferbereich und das Verhalten bei Bewegung des Ziels werden gesondert festgelegt. Besonders Kombinationen mit Fesseln und Stuns sind in der Balancingrunde zu prüfen; der DoT ist im genannten Grundschaden noch nicht eingerechnet.','Der genannte Grundschaden trifft einmal beim Auslösen. Danach verursacht der Zyklon alle 2 Sekunden zusätzlichen magischen Schaden: 72 auf Stufe 1, je weiterer Stufe +28,5 bis 186 auf Stufe 5, ohne erneuten Charakter-M-Angriff auf diese Ticks. Der erste zusätzliche Tick erfolgt nach 2 Sekunden. Bei voller Laufzeit trifft der DoT auf Stufe 1 dreimal (2/4/6 Sekunden) und auf Stufe 5 fünfmal (2/4/6/8/10 Sekunden). Trefferbereich und Verhalten bei Bewegung des Ziels bleiben offen.');
 const en=s.description_eng.replace('Additional damage over time, tick interval, hit area and behavior when the target moves will be defined separately. Combinations with roots and stuns require particular balancing review; DoT is not included in the stated base damage.','The stated base damage hits once on activation. Additional magical damage ticks every 2 seconds: 72 at level 1 plus 28.5 per additional level to 186 at level 5, without adding caster magical attack to the ticks. First tick after 2 seconds. Full duration gives three ticks at level 1 (2/4/6 seconds) and five at level 5 (2/4/6/8/10 seconds). Hit area and behavior when the target moves remain pending.');
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');
 const set={effects:[...(s.effects??[]).filter(e=>e.key!==effect.key),effect],description_de:de,description_eng:en};
 await new SkillDataModel({...s,...set}).validate();
 await fs.writeFile('data/balancing/infernal-cyclone-dot72-186-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:62},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:62});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified Infernal Cyclone: one initial hit, DoT72–186 every2s, first2s, duration6–10.');
}catch(e){console.error(`Cyclone update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
