import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={resourceCosts:[],statScaling:{patk:{type:'linear',base:3,perLevel:3},matk:{type:'linear',base:2,perLevel:2}},description_de:'Erhöht dauerhaft deinen physischen Angriff um 3 und deinen magischen Angriff um 2 je gelerntem Skilllevel, bis zu 30 physischem und 20 magischem Angriff auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.',description_eng:'Permanently increases physical attack by 3 and magical attack by 2 per learned skill level, reaching 30 physical and 20 magical attack at level 10. Permanent passive skill with no trigger, activation costs, cast time, cooldown or limited duration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:33});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/energy-converter-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Energy Converter verified: permanent physical attack 3 to 30 and magical attack 2 to 20.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
