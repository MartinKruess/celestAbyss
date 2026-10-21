import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:48});
 if(!before?.soulGenerationSettings)throw Error('Missing soul generation');
 const set={soulGenerationSettings:{...before.soulGenerationSettings,allowsPvpTargets:true},description_de:before.description_de+' Seelengewinn funktioniert auch gegen Spieler im PvP nach denselben Regeln: eine Seele je unterschiedlichem erfolgreich getroffenem Gegner pro Anwendung, begrenzt durch Gegnerlimit und freien Speicher.',description_eng:before.description_eng+' Soul generation also works against players in PvP under the same rules: one soul per distinct successfully hit opponent per activation, limited by target cap and available storage.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/damned-fire-pvp-soul-gain-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:48},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:48});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('PvP soul generation verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
