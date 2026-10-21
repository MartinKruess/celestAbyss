import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={castTimeSeconds:0.3,description_de:'Stürmt auf den Gegner zu und stößt ihn zurück. Verursacht einmalig physischen Grundschaden von 84 auf Skilllevel 1, plus 36 je weiterer Stufe, bis zu 408 auf Stufe 10. Mana-Kosten steigen von 44 um 29 je weiterer Stufe auf 305. Castzeit 0,3 Sekunden, bisheriger Cooldown 71 Sekunden. Anschließend ist ein kurzer Attack-Speed-Buff vorgesehen; seine Dauer- und Geschwindigkeitsendwerte werden noch bestätigt. Ansturmdistanz und Rückstoß werden später genauer festgelegt.',description_eng:'Charges at the enemy and pushes them back. Deals base physical damage once, starting at 84 at skill level 1 and increasing by 36 per additional level to 408 at level 10. Mana cost increases from 44 by 29 per additional level to 305. Cast time is 0.3 seconds; existing cooldown is 71 seconds. A short attack-speed buff follows; its duration and speed endpoints remain to be confirmed. Charge distance and knockback details will be defined later.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:233});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/warrior-charge-cast-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Warrior Charge cast time verified at 0.3 seconds.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
