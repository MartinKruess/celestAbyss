import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.findOne({nr:237});
 const set={summonedCreatureSettings:{...before.summonedCreatureSettings,baseAttacksPerSecond:1.1},description_de:before.description_de+' Grundfrequenz seiner Auto-Attacks: 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo; keine Übernahme des Meister-Angriffstempos.',description_eng:before.description_eng+' Basic attack frequency: 1.1 attacks per second at 100% own attack speed; does not inherit caster attack speed.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/morrak-attack-frequency11-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 await c.updateOne({nr:237},{$set:set});
 if(!isDeepStrictEqual(await c.findOne({nr:237}),{...before,...set}))throw Error('Read-back mismatch');
 console.log('Verified Morrak 1.1 basic attacks/second; own speed multiplier remains 1. Spirit companion unchanged.');
}catch(e){console.error('Morrak update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
