import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[1,2,5]}}).toArray();
 if(before.length!==3||before.some(s=>s.maxSkillLv!==20))throw Error('Unexpected core skills');
 const updates=before.map(s=>{const aurora=s.nr===1;const regen=aurora?{manaRegen:{type:'linear',base:1,perLevel:1}}:{manaRegen:{type:'linear',base:0.5,perLevel:0.5},healthRegen:{type:'linear',base:0.5,perLevel:0.5}};return{nr:s.nr,set:{manaRegen:aurora?1:0.5,...(aurora?{}:{healthRegen:0.5}),statScaling:{...s.statScaling,...regen},description_de:s.description_de+(aurora?' Zusätzlich +1 direkte MP-Regeneration je gelerntem Skilllevel, auf Stufe 20 +20 MP je Regenerationstick.':' Zusätzlich je gelerntem Skilllevel +0,5 direkte HP-Regeneration und +0,5 direkte MP-Regeneration, auf Stufe 20 jeweils +10 HP und +10 MP je zugehörigem Regenerationstick.')+' Diese Boni werden zur Grundregeneration und anderen Boni addiert. Tickintervalle werden zentral später festgelegt.',description_eng:s.description_eng+(aurora?' Additionally grants +1 direct Mana regeneration per learned skill level, totaling +20 MP per regeneration tick at level 20.':' Additionally grants +0.5 direct Health and +0.5 direct Mana regeneration per learned skill level, totaling +10 HP and +10 MP per respective regeneration tick at level 20.')+' These bonuses add to base regeneration and other bonuses. Tick intervals will be configured centrally later.'}};});
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/race-core-regeneration-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Race cores verified: Aurora +20 MP regeneration; Human/Umbra +10 HP and +10 MP regeneration at level 20.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
