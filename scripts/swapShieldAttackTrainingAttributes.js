import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:93});if(!before||before.maxSkillLv!==5)throw Error('Unexpected skill');
 const set={str:2,vita:1,statScaling:{...before.statScaling,str:{type:'linear',base:2,perLevel:1},vita:{type:'linear',base:1,perLevel:0.5}},description_de:'Verbessert dauerhaft deine Fertigkeiten im Kampf mit dem Schild. Stärke und Vita wurden gegenüber der bisherigen Fassung getauscht: Auf Stufe 1 +2 Stärke und +1 Vita. Je weiterer Stufe +1 Stärke und +0,5 Vita. Auf Stufe 5 insgesamt +6 Stärke und +3 Vita. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanently improves shield combat. Swaps the previous Strength and Vitality progressions: grants 2 Strength and 1 Vitality at level 1, adding 1 Strength and 0.5 Vitality per additional level, reaching 6 Strength and 3 Vitality at level 5. No activation costs, cast time, cooldown or limited duration.'};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/shield-attack-training-swap-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:93},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:93});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Shield Attack Training verified: Strength 2–6, Vitality 1–3.');
}catch(e){console.error(`Shield training update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
