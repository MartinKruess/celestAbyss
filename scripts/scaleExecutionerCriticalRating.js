import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:234});if(!s)throw Error('Missing skill');
 const effects=s.effects.map(e=>e.key==='executioner-crit-rating'?{...e,value:20,valueScaling:{type:'linear',base:20,perLevel:20}}:e);
 if(!effects.some(e=>e.key==='executioner-crit-rating'&&e.value===20))throw Error('Missing critical effect');
 const set={effects,description_de:s.description_de.replace('Nur für diesen Angriff wird der aktuelle Krit-Wert um 100 Punkte erhöht.','Nur für diesen Angriff wird der aktuelle Krit-Wert um 20 Punkte je gelerntem Skilllevel erhöht: 20 / 40 / 60 / 80 / 100 auf Stufe 1 bis 5.'),description_eng:s.description_eng.replace('Only this attack adds 100 points to current critical rating.','Only this attack adds 20 critical rating points per learned level: 20 / 40 / 60 / 80 / 100 at levels 1 through 5.')};
 await new SkillDataModel({...s,...set}).validate();
 await fs.writeFile('data/balancing/executioner-critical-rating-levels-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:234},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:234});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Verified Executioner critical rating20/40/60/80/100, this attack only.');
}catch(e){console.error(`Executioner critical update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
