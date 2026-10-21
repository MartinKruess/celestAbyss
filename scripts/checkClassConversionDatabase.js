import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const local=JSON.parse(await fs.readFile('data/class-templates.json','utf8'));
 const model=JSON.parse(await fs.readFile('data/balancing/attribute-model.json','utf8'));
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const database=await ClassTemplateModel.find({key:{$in:local.map(c=>c.key)}}).lean();
 if(database.length!==13||local.length!==13)throw Error('Unexpected class count');
 for(const c of local){const saved=database.find(x=>x.key===c.key);if(!isDeepStrictEqual(JSON.parse(JSON.stringify(saved.statConversions)),c.statConversions))throw Error('Class conversion mismatch');
  for(const key of ['conversions','strengthAttackClassModifiers','intelligenceAttackClassModifiers','vitalityClassModifiers','wisdomClassModifiers','offensiveAttributeEligibility','specialAttributeProgression','plannedSpecialAttributeUnlock','weaponCalculationRules','criticalHitRules'])if(!isDeepStrictEqual(saved.statConversions.defaults[key],model[key]))throw Error('Attribute model mismatch');
 }
 console.log('Verified current attribute and class conversion definitions for all 13 classes against MongoDB and local attribute model. No writes.');
}catch(e){console.error(`Class conversion verification failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
