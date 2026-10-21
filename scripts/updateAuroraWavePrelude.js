import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:211});
 if(!before?.waveDamageProfile)throw Error('Missing wave definition');
 const set={waveDamageProfile:{...before.waveDamageProfile,visualPreludeSeconds:1.5,damageStartsAfterVisualPrelude:true},description_de:before.description_de+' Ablauf: Zunächst etwa 1,5 Sekunden visuelles Spektakel am Himmel ohne Schaden; anschließend entlädt es sich als schadensverursachende Lichtwelle über die Fläche. Diese Vorphase ist keine zusätzliche Castzeit und legt die Gesamtlänge der Animation nicht fest. Die genaue zeitliche Einordnung zur Castzeit bleibt zu prüfen.',description_eng:before.description_eng+' Sequence: approximately 1.5 seconds of visual spectacle in the sky without damage, followed by discharge as a damaging light wave across the area. This visual prelude is not an additional cast time and does not define total animation length. Its exact timing relative to the cast remains to be reviewed.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/aurora-wave-prelude-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:211},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:211});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Aurora visual prelude saved and verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
