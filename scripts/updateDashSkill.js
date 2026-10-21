import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const cooldown=[6,5,4,4,4,3,3,3,3,3];
const duration=[1,1,1,0.75,0.75,0.75,0.75,0.5,0.5,0.5];
const distance=[1,1,1,1,1.5,1.5,2,2,2,2];
const stamina=[0.5,0.45,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.2];
const changes={maxSkillLv:10,cd:6,dur:1,activation:'manual',cooldownScaling:{type:'table',values:cooldown},durationScaling:{type:'table',values:duration},movement:{type:'directionalSlide',distanceMeters:1,distanceScaling:{type:'table',values:distance}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:0}},{resource:'stamina',reference:'maxStamina',unit:'fraction',scaling:{type:'table',base:0.5,values:stamina}}],description_de:'Rutsche schnell in eine Richtung. Mit höheren Skillstufen sinken Ausdauerkosten, Cooldown und Bewegungsdauer, während die Reichweite steigt. Auf Level 1 bewegst du dich 1 Meter in 1 Sekunde bei 6 Sekunden Cooldown und 50 Prozent Ausdauerkosten. Auf Level 10 sind es 2 Meter in 0,5 Sekunden bei 3 Sekunden Cooldown und 20 Prozent Ausdauerkosten. Dash kostet kein Mana.',description_eng:'Slide quickly in a direction. Higher skill levels reduce stamina cost, cooldown and movement duration while increasing distance. At level 1, move 1 meter in 1 second with a 6 second cooldown and 50 percent stamina cost. At level 10, move 2 meters in 0.5 seconds with a 3 second cooldown and 20 percent stamina cost. Dash costs no mana.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:21});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...changes}).validate();
await fs.writeFile('data/balancing/dash-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await fs.writeFile('data/balancing/dash-level-proposal.json',JSON.stringify({status:'confirmedSaved',skillNumber:21,maxSkillLevel:10,cooldownSeconds:cooldown,movementDurationSeconds:duration,distanceMeters:distance,staminaCosts:stamina,manaCost:0,note:'Final cost decision replaces previous tentative values. Shared starter assignment remains deferred.'},null,2)+'\n');
console.log('Dash saved and verified across all ten levels. Cost: 0.50, 0.45, 0.40 through level 9, then 0.20. Class assignments unchanged.');
}catch(e){console.error(`Dash update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
