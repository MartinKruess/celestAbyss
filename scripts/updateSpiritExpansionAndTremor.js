import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={int:2,wis:2,faith:1,vic:1,statScaling:{int:{type:'table',values:[2,3,4,5,6,7,8,9,10,20]},wis:{type:'table',values:[2,3,4,5,6,7,8,9,10,20]},faith:{type:'table',values:[1,2,2,3,3,4,4,5,5,10]},vic:{type:'table',values:[1,2,2,3,3,4,4,5,5,10]}},description_de:'Erhöht dauerhaft Intelligenz und Wisdom auf Stufe 1 jeweils um 2 sowie Faith und Victim jeweils um 1. Bis Stufe 9 steigen Intelligenz und Wisdom je weiterer Stufe um 1; Faith und Victim steigen auf Stufe 2, 4, 6 und 8 jeweils um 1. Auf Stufe 10 werden die Stufe-9-Boni verdoppelt: 20 Intelligenz, 20 Wisdom, 10 Faith und 10 Victim. Keine Aktivierungskosten, Castzeit, Wirkungsdauer oder Cooldown. Kein direkter Mana-Bonus; Wisdom erhöht Mana über die Attributumrechnung.',description_eng:'Permanently grants 2 Intelligence and 2 Wisdom plus 1 Faith and 1 Victim at level 1. Up to level 9, Intelligence and Wisdom increase by 1 each additional level; Faith and Victim increase by 1 at levels 2, 4, 6 and 8. At level 10, the level 9 bonuses are doubled, granting 20 Intelligence, 20 Wisdom, 10 Faith and 10 Victim. No activation costs, cast time, duration or cooldown. No direct Mana bonus; Wisdom increases Mana through attribute conversion.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:44});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/spirit-expansion-revised-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await SkillDataModel.collection.updateOne({nr:15},{$set:{castTimeSeconds:0.2}});const tremor=await SkillDataModel.collection.findOne({nr:15});if(tremor.castTimeSeconds!==0.2)throw Error('Tremor read-back mismatch');console.log('Spirit Expansion endpoints verified; Tremor cast time verified at 0.2 seconds.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
