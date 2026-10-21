import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

const values=Array.from({length:20},(_,i)=>-(0.05+Math.floor((i+1)/5)*0.01)).map(v=>Number(v.toFixed(2)));
const durations=Array.from({length:20},(_,i)=>1+Math.floor((i+1)/5)*0.5);
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:15});if(!before)throw Error('Missing skill');
const effects=structuredClone(before.effects);const effect=effects.find(e=>e.key==='tremorSlow');if(!effect)throw Error('Missing slow');
Object.assign(effect,{durationStatus:'defined',durationSeconds:1,progressionStatus:'defined',valueScaling:{type:'table',values},durationScaling:{type:'table',values:durations}});
const description_de='Schmettert deine Waffe auf den Boden und erzeugt ein Beben, das getroffene Gegner schädigt und verlangsamt. Der physische Grundangriffswert steigt von 81 um 39 je weiterer Skillstufe auf 822. Die Mana-Kosten steigen von 20 um 11 je weiterer Stufe auf 229. Der Cooldown sinkt von 40 auf 30 Sekunden. Die Verlangsamung beginnt bei 5 Prozent für 1 Sekunde. Auf Skilllevel 5, 10, 15 und 20 steigt sie jeweils um 1 Prozentpunkt und ihre Dauer um 0,5 Sekunden, bis zu 9 Prozent für 3 Sekunden.';
const description_eng='Slams your weapon into the ground, causing a tremor that damages and slows affected enemies. Physical base attack increases from 81 by 39 per additional skill level to 822. Mana cost increases from 20 by 11 per additional level to 229. Cooldown decreases from 40 to 30 seconds. The slow starts at 5 percent for 1 second. At skill levels 5, 10, 15 and 20, it increases by 1 percentage point and lasts 0.5 seconds longer, reaching 9 percent for 3 seconds.';
await new SkillDataModel({...before,effects,description_de,description_eng}).validate();
await fs.writeFile('data/balancing/tremor-slow-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:{effects,description_de,description_eng}});
const after=await SkillDataModel.collection.findOne({_id:before._id});if(JSON.stringify(after.effects)!==JSON.stringify(effects))throw Error('Read-back mismatch');
console.log('Verified Tremor slow steps at levels 5/10/15/20: 5 to 9 percent, 1 to 3 seconds. Other values unchanged.');
}catch(e){console.error(`Tremor slow update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
