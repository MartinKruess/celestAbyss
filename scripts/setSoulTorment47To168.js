import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:104});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={matk:47,statScaling:{...before.statScaling,matk:{type:'linear',base:47,perLevel:121/9}},description_de:before.description_de.replace('Grundschaden 97, +19 je weiterer Stufe, auf Stufe 10 268.','Grundschaden 47 auf Stufe 1, gleichmäßig steigend auf 168 auf Stufe 10. Zwischenwerte werden für die Anzeige gerundet.'),description_eng:before.description_eng.replace('Base damage starts at 97 and increases by 19 per additional level, reaching 268 at level 10.','Base damage starts at 47 at level 1 and increases evenly to 168 at level 10. Intermediate values are rounded for display.')};
 if(set.description_de===before.description_de||set.description_eng===before.description_eng)throw Error('Unexpected description');
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-torment-47-168-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:104},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:104});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Torment verified: 47 to168 base damage; Mana and timing unchanged.');
}catch(e){console.error(`Soul Torment range update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
