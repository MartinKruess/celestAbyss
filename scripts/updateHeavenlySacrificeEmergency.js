import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:207});
 if(!before)throw Error('Missing skill');
 const set={cd:900,castTimeSeconds:0,description_de:before.description_de.replace('Cooldown 99 Sekunden, Castzeit 1,2 Sekunden, vorläufige Animationsdauer ungefähr 2 Sekunden, keine fortlaufende Heilwirkung festgelegt.','Notfallheilung mit 900 Sekunden (15 Minuten) Cooldown und 0 Sekunden Castzeit: Die Wirkung erfolgt sofort. Die vorläufige Animation von ungefähr 2 Sekunden verzögert die Heilung nicht; ob sie andere Aktionen blockiert, ist noch offen. Keine fortlaufende Heilwirkung festgelegt. Der Skill bleibt vorerst erhalten; seine langfristige Notwendigkeit wird später geprüft.'),description_eng:before.description_eng.replace('Cooldown 99 seconds, cast time 1.2 seconds, provisional animation approximately 2 seconds. No ongoing healing effect defined.','Emergency heal with a 900-second (15-minute) cooldown and 0-second cast time: the effect resolves instantly. The provisional approximately 2-second animation does not delay healing; whether it blocks other actions remains pending. No ongoing healing effect defined. Retained provisionally; its long-term necessity will be reviewed later.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/heavenly-sacrifice-emergency-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:207},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:207});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Emergency sacrifice verified: cooldown 900s, cast 0s; retained.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
