import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={activation:'automatic',dur:30,cd:180,resourceCosts:[],statScaling:{str:{type:'linear',base:3,perLevel:2},vita:{type:'linear',base:3,perLevel:2}},triggerConditionStatus:'defined',triggerCondition:{type:'ownAttack',oncePerAttackAction:true,excludeCompanionAttacks:true,requiresCooldownReady:true,healthThresholds:[{belowFraction:0.15,chancePerCheck:0.8}],thresholdSelection:'lowestMatchingThreshold'},description_de:'Eigene Angriffe haben unter 15 Prozent Leben eine Chance von 80 Prozent, Ewiger Sieger auszulösen, wenn der Skill bereit ist. Erhöht für 30 Sekunden Stärke und Vitalität jeweils um 3 auf Level 1. Je weiterer Stufe steigen beide Boni um 2, bis zu jeweils 21 auf Level 10. Der Cooldown beträgt 180 Sekunden. Keine Aktivierungskosten. Der Vitalitätsbonus erhöht maximales Leben und physische Verteidigung, heilt dich aber nicht direkt. Ewiger Sieger belebt dich nicht wieder.',description_eng:'Your own attacks below 15 percent Health have an 80 percent chance to trigger Eternal Victor when ready. For 30 seconds, increases Strength and Vitality by 3 each at level 1. Each additional level adds 2 to both bonuses, reaching 21 each at level 10. Cooldown is 180 seconds. No activation costs. Vitality increases maximum Health and physical defense, but does not directly heal you. Eternal Victor does not revive you.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:176});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/eternal-victor-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Eternal Victor verified as own-attack low-HP proc: under 15%, 80% chance, duration 30 s, cooldown 180 s, Strength/Vitality 3 to 21. Not a permanent bonus or resurrection.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
