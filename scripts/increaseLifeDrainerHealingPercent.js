import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:72});
 if(!before?.effects?.some(e=>e.key==='life-drainer-damage-heal'))throw Error('Missing effect');
 const set={effects:before.effects.map(e=>e.key==='life-drainer-damage-heal'?{...e,valueScaling:{type:'table',values:[0,0,0,0,0,0,0,0,0,0.02]}}:e),description_de:before.description_de.replace('zusätzlich 1 Prozent','zusätzlich 2 Prozent').replace('6000 Schaden heilt 410 HP; 10000 heilt 450 HP; 20000 heilt 550 HP; 100000 heilt 1350 HP.','6000 Schaden heilt 470 HP; 10000 heilt 550 HP; 20000 heilt 750 HP; 100000 heilt 2350 HP.'),description_eng:before.description_eng.replace('restores 1 percent','restores 2 percent').replace('6000 damage heals 410 HP; 10000 heals 450; 20000 heals 550; 100000 heals 1350.','6000 damage heals 470 HP; 10000 heals 550; 20000 heals 750; 100000 heals 2350.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/life-drainer-two-percent-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:72},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:72});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Life Drainer verified: 350 HP +2% actual damage at level10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
