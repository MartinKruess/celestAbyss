import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:235});
 if(!before)throw Error('Missing skill');
 const set={attackExecution:{...before.attackExecution,meteorWaveSequence:[1,1.5,3,3.5,5,5.5].map((offsetSeconds,i)=>({offsetSeconds,damageFraction:i%2?0.6:0.4,meteorCount:6})),meteorDamageDistributionStatus:'pending'},description_de:before.description_de.replace('Genauer Paarrhythmus und ob die Prozentanteile je gesamter Welle oder je Meteorit gelten, werden gerade geklärt.','Bestätigter Rhythmus: bei Sekunde 1/3/5 jeweils eine 40-Prozent-Welle, bei Sekunde 1,5/3,5/5,5 jeweils eine 60-Prozent-Welle. Sechs Wellen mit jeweils sechs Meteoriten, insgesamt 36 Meteoriten. Die genaue Schadensverteilung des Wellenanteils auf die einzelnen Einschläge bleibt offen; daraus wird noch kein garantierter Gesamtschaden je Gegner abgeleitet.'),description_eng:before.description_eng.replace('Exact pair cadence and whether portions apply per full wave or per meteor await clarification.','Confirmed timing: 40-percent waves at seconds 1/3/5, 60-percent waves at 1.5/3.5/5.5. Six waves of six meteors each, totaling 36 meteors. Exact distribution of wave damage across individual impacts remains pending; no guaranteed total per enemy is derived yet.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/meteor-shower-wave-timing-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:235},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:235});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Meteor Shower six-wave timing verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
