import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={category:'passive',dmgType:'passive',mana:100,resourceCosts:[],statScaling:{mana:{type:'linear',base:100,perLevel:85}},description_de:'Erhöht dauerhaft dein maximales Mana um 100 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 85, bis zu 865 auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Der Bonus erhöht den maximalen Manapool und stellt kein Mana unmittelbar wieder her.',description_eng:'Permanently increases maximum Mana by 100 at skill level 1. Each additional level adds 85, reaching 865 at level 10. Permanent passive skill with no trigger, activation costs, cast time, cooldown or limited duration. The bonus increases the maximum Mana pool and does not directly restore Mana.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:203});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/channeling-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{activation:'',triggerCondition:'',triggerConditionStatus:'',cd:'',dur:'',cooldownScaling:'',durationScaling:'',castTimeSeconds:'',castTimeScaling:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Channeling verified: permanent maximum Mana bonus 100 to 865, no trigger or activation costs.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
