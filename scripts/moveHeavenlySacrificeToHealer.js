import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:207});
 if(!before)throw Error('Missing skill');
 const set={charClass:before.charClass.filter(c=>!['Luminet','Lightmage'].includes(c)),description_de:before.description_de.replace('Einordnung als reiner Heiler-Skill ist vorgemerkt; bisherige Klassenzuordnungen bleiben bis zur Entscheidung erhalten.','Nur dem Heiler zugeordnet; beim Luminet entfernt.'),description_eng:before.description_eng.replace('A healer-only assignment is under consideration; existing class assignments remain until decided.','Assigned only to the Healer; removed from the Luminet.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/heavenly-sacrifice-healer-only-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:207},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:207});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Heavenly Sacrifice is now Healer/Priest only.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
