import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[99,100]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const updates=before.map(s=>({nr:s.nr,set:{castTimeSeconds:0.1,description_de:s.nr===99?s.description_de.replace('Zusätzliche Castzeit, freiwillige Bewegung während des Sammelns und Charakter-M-Angriffsbeitrag sind noch offen.','Castzeit 0,1 Sekunden vor dem dreisekündigen Energieablauf. Freiwillige Bewegung während des Sammelns und Charakter-M-Angriffsbeitrag sind noch offen.'):s.description_de.replace('Castzeit und Verhalten bei unzureichenden HP sind noch offen.','Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen.'),description_eng:s.nr===99?s.description_eng.replace('Additional cast time, voluntary movement while gathering energy and character magical attack contribution remain pending.','Cast time 0.1 seconds before the three-second energy sequence. Voluntary movement while gathering energy and character magical attack contribution remain pending.'):s.description_eng.replace('Cast time and insufficient-health behavior remain pending.','Cast time 0.1 seconds. Insufficient-health behavior remains pending.')}}));
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/scream-weakness-cast-times-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Both cast times verified: 0.1 seconds.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
