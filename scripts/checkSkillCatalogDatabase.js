import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try{
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const local=JSON.parse(await fs.readFile(new URL('../data/skills.json',import.meta.url),'utf8'));
const database=(await SkillDataModel.collection.find({}).sort({nr:1,_id:1}).toArray()).map(record=>{const copy=JSON.parse(JSON.stringify(record));delete copy.__v;return copy;});
if(!isDeepStrictEqual(local,database))throw new Error('Catalog differs');
console.log(`Verified all fields and IDs of ${local.length} skills against the database. No writes.`);
}catch(error){console.error(`Catalog verification failed (${error.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
