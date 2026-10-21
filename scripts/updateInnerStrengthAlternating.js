import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const levels=Array.from({length:15},(_,i)=>i+1);
const set={str:2,vita:3,statBonusUnits:{penetration:'flat'},statScaling:{str:{type:'table',values:levels.map(l=>2+Math.floor(l/2))},vita:{type:'table',values:levels.map(l=>3+Math.floor(l/2))},penetration:{type:'table',values:levels.map(l=>5*Math.floor((l-1)/2))}},description_de:'Eigenbuff mit 15 Skillstufen. Auf Stufe 1 erhältst du 2 Stärke und 3 Vitalität. Auf jeder geraden Stufe steigen Stärke und Vitalität jeweils um 1. Auf den dazwischenliegenden ungeraden Stufen ab Stufe 3 kommen jeweils 5 Penetration hinzu. Auf Stufe 15 erhältst du insgesamt 9 Stärke, 10 Vitalität und 35 Penetration. Penetration ist ein fixer Wert, keine Prozentangabe. Bisherige Dauer 600 Sekunden, Cooldown 60 Sekunden. Mana-Kosten und Castzeit werden noch festgelegt.',description_eng:'Self buff with 15 skill levels. At level 1 grants 2 Strength and 3 Vitality. Each even level adds 1 Strength and 1 Vitality. Each intervening odd level from level 3 adds 5 Penetration. Level 15 grants a total of 9 Strength, 10 Vitality and 35 Penetration. Penetration is a flat rating, not a percentage. Existing duration is 600 seconds and cooldown is 60 seconds. Mana cost and cast time remain pending.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:162});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/inner-strength-alternating-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Inner Strength verified: level 15 grants 9 Strength, 10 Vitality and 35 Penetration.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
