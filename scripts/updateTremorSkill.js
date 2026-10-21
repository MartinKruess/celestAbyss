import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={maxSkillLv:20,patk:81,mana:20,cd:40,statScaling:{patk:{type:'linear',base:81,perLevel:39}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:20,perLevel:11}}],cooldownScaling:{type:'linear',base:40,perLevel:-10/19},effectsVersion:1,effects:[{key:'tremorSlow',type:'statModifier',target:'enemy',stat:'movementSpeed',value:-0.05,unit:'fraction',reference:'targetStat',durationStatus:'pending',progressionStatus:'pending'}],description_de:'Schmettert deine Waffe auf den Boden und erzeugt ein Beben, das getroffene Gegner schädigt und ihre Bewegungsgeschwindigkeit um 5 Prozent reduziert. Der physische Grundangriffswert steigt von 81 um 39 je weiterer Skillstufe auf 822. Die Mana-Kosten steigen von 20 um 11 je weiterer Stufe auf 229. Der Cooldown sinkt von 40 auf 30 Sekunden. Die Dauer der Verlangsamung ist noch festzulegen.',description_eng:'Slams your weapon into the ground, causing a tremor that damages affected enemies and reduces their movement speed by 5 percent. The physical base attack value starts at 81 and increases by 39 per additional skill level to 822. Mana cost starts at 20 and increases by 11 per additional level to 229. Cooldown decreases from 40 to 30 seconds. Slow duration is still to be defined.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:15});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...changes}).validate();
await fs.writeFile('data/balancing/tremor-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await fs.writeFile('data/balancing/shared-starter-movement-notes.json',JSON.stringify({status:'deferredNotApplied',possibleUniversalStarterSkill:['Ausweichrolle','Dash'],choice:'Not decided which, or both',note:'No class assignment changes.'},null,2)+'\n');
console.log('Tremor verified: 81 to 822 physical value; 20 to 229 Mana; cooldown 40 to 30 seconds. Slow 5 percent, duration pending. Shared class assignments preserved.');
}catch(e){console.error(`Tremor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
