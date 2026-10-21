import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:[2,11]}}).toArray();if(before.length!==2)throw Error('Missing skill');
const strike=before.find(s=>s.nr===11);
const patches=[{nr:2,set:{resourceCosts:[],statScaling:{str:{type:'linear',base:1,perLevel:1},agi:{type:'linear',base:1,perLevel:1}},description_de:'Permanenter passiver Umbra-Grundskill. Erhöht Stärke und Agilität jeweils um 1 je gelerntem Skilllevel, bis zu jeweils 20 auf Level 20. Keine Aktivierungskosten oder Cooldown.',description_eng:'Permanent passive Umbra core skill. Increases Strength and Agility by 1 each per learned skill level, up to 20 each at level 20. No activation costs or cooldown.'}},{nr:11,set:{castTimeSeconds:0,hasLingeringDamage:false,description_de:strike.description_de.replace('Zusätzliche Cast Time und genauer Trefferzeitpunkt sind noch festzulegen.','Keine zusätzliche Cast Time vor der Animation. Der genaue Trefferzeitpunkt innerhalb der Animation wird im Spiel festgelegt.'),description_eng:strike.description_eng.replace('Additional cast time and exact hit timing are still to be defined.','No additional cast time before the animation. Exact hit timing within the animation will be defined in game.')}}];
for(const p of patches)await new SkillDataModel({...before.find(s=>s.nr===p.nr),...p.set}).validate();
await fs.writeFile('data/balancing/survive-charged-timing-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of patches)await SkillDataModel.collection.updateOne({_id:before.find(s=>s.nr===p.nr)._id},{$set:p.set});
for(const p of patches){const after=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Survive explicit scaling verified: +1 Strength/Agility per learned level. Charged Strike has 0 extra cast time, provisional 0.8 s animation and no lingering damage.');
}catch(e){console.error(`Core/timing completion failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
