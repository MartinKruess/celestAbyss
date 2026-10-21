import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={maxSkillLv:5,patk:636,mana:231,cd:120,castTimeSeconds:1,statScaling:{patk:{type:'linear',base:636,perLevel:93}},cooldownScaling:{type:'linear',base:120,perLevel:-3},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:231,perLevel:37}}],attackExecution:{hitCount:1,damageValueScope:'perHit',hitTimingStatus:'pending'},effectsVersion:1,effects:[{key:'supersonicParalysis',type:'control',target:'enemy',controlKind:'paralysis',actionRestrictionsStatus:'pending',durationSeconds:0.5,durationStatus:'defined',progressionStatus:'defined'}],description_de:'Lädt die Klinge 1 Sekunde auf und führt einen einzelnen physischen Treffer aus. Der getroffene Gegner wird für 0,5 Sekunden kurz paralysiert. Der physische Grundangriffswert steigt von 636 um 93 je weiterer Stufe auf 1008. Die Mana-Kosten steigen von 231 um 37 je weiterer Stufe auf 379. Der Cooldown sinkt von 120 um 3 Sekunden je weiterer Stufe auf 108 Sekunden. Die Paralyse dauert auf allen Stufen gleich lang; ihre genaue Einschränkung von Aktionen ist noch festzulegen.',description_eng:'Charges the blade for 1 second and performs one physical hit. The affected enemy is briefly paralyzed for 0.5 seconds. Physical base attack increases from 636 by 93 per additional level to 1008. Mana cost increases from 231 by 37 per additional level to 379. Cooldown decreases from 120 by 3 seconds per additional level to 108 seconds. Paralysis duration is unchanged across levels; exact action restrictions are still to be defined.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:115});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...changes}).validate();
await fs.writeFile('data/balancing/supersonic-blade-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Supersonic Blade verified: 636 to 1008, Mana 231 to 379, cooldown 120 to 108 s, cast 1 s, one hit, paralysis 0.5 s with action restrictions pending.');
}catch(e){console.error(`Supersonic Blade update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
