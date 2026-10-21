import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={maxSkillLv:10,vita:2,wis:1,resourceCosts:[],statScaling:{vita:{type:'linear',base:2,perLevel:2},wis:{type:'linear',base:1,perLevel:1}},description_de:'Erhöht dauerhaft deine Vitalität um 2 und deine Willenskraft um 1 je gelerntem Skilllevel, bis zu 20 Vitalität und 10 Willenskraft auf Level 10. Keine Aktivierungskosten oder Cooldown.',description_eng:'Permanently increases Vitality by 2 and Wisdom by 1 per learned skill level, up to 20 Vitality and 10 Wisdom at level 10. No activation costs or cooldown.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:140});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/steadfast-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{cd:'',dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Steadfast verified: +2 Vitality and +1 Wisdom per learned level, max 10. Existing class assignments unchanged.');
}catch(e){console.error(`Steadfast update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
