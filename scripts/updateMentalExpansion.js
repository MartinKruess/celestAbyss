import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={dmgType:'selfbuff',mana:37,castTimeSeconds:0.3,statScaling:{matk:{type:'linear',base:60,perLevel:10}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:37,perLevel:17}}],description_de:'Erhöht deinen magischen Angriff für 300 Sekunden um 60 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 10, bis zu 150 auf Stufe 10. Die Mana-Kosten steigen von 37 um 17 je weiterer Stufe auf 190. Die Castzeit beträgt 0,3 Sekunden. Cooldown 60 Sekunden.',description_eng:'Increases your magical attack for 300 seconds by 60 at skill level 1. Each additional level adds 10, reaching 150 at level 10. Mana cost increases from 37 by 17 per additional level to 190. Cast time is 0.3 seconds. Cooldown is 60 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:79});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/mental-expansion-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Mental Expansion verified: attack 60 to 150, mana 37 to 190, cast 0.3 s.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
