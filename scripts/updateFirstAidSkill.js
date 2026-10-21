import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={maxSkillLv:10,mana:20,cd:35,castTimeSeconds:0.2,cooldownScaling:{type:'linear',base:35,perLevel:-1},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:20,perLevel:16}}],effectsVersion:1,effects:[{key:'firstAidHeal',type:'heal',target:'self',unit:'flat',value:50,durationSeconds:0,valueScaling:{type:'linear',base:50,perLevel:25},progressionStatus:'defined'}],description_de:'Heilt dich nach einer Cast Time von 0,2 Sekunden sofort um 50 Lebenspunkte. Je weiterer Skillstufe steigt die Heilung um 25, bis zu 275 Lebenspunkten. Die Mana-Kosten steigen von 20 um 16 je weiterer Stufe auf 164. Der Cooldown sinkt von 35 um 1 Sekunde je weiterer Stufe auf 26 Sekunden.',description_eng:'Instantly heals you for 50 Health after a 0.2 second cast time. Healing increases by 25 per additional skill level, up to 275 Health. Mana cost increases from 20 by 16 per additional level to 164. Cooldown decreases from 35 by 1 second per additional level to 26 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:41});if(!before)throw Error('Missing skill');
const candidate={...before,...changes};delete candidate.health;delete candidate.matk;delete candidate.dur;
await new SkillDataModel(candidate).validate();
await fs.writeFile('data/balancing/first-aid-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes,$unset:{health:'',matk:'',dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
if(after.health!==undefined||after.matk!==undefined)throw Error('Duplicate legacy bonus');
console.log('First Aid saved: self heal 50 to 275, Mana 20 to 164, cooldown 35 to 26 seconds, cast 0.2 seconds. Legacy magic attack removed.');
}catch(e){console.error(`First Aid update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
