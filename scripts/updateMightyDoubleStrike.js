import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={maxSkillLv:15,patk:166,mana:83,cd:37,castTimeSeconds:0,animationDurationSeconds:0.5,animationTimingStatus:'provisional',attackExecution:{hitCount:2,damageValueScope:'perHit',hitTimingStatus:'pending'},statScaling:{patk:{type:'linear',base:166,perLevel:32}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:83,perLevel:41}}],description_de:'Führt zwei physische Schläge aus. Jeder Treffer hat auf Skilllevel 1 einen Grundangriffswert von 166, der je weiterer Stufe um 32 auf 614 steigt. Die Mana-Kosten steigen von 83 um 41 je weiterer Stufe auf 657. Der Angriff beginnt ohne Cast Time und hat 37 Sekunden Cooldown. Die Animation dauert vorläufig 0,5 Sekunden; die genauen Trefferzeitpunkte werden im Spiel festgelegt.',description_eng:'Performs two physical strikes. Each hit has a base attack value of 166 at skill level 1, increasing by 32 per additional level to 614. Mana cost increases from 83 by 41 per additional level to 657. The attack begins with no cast time and has a 37 second cooldown. Animation duration is provisionally 0.5 seconds; exact hit timings will be defined in game.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:76});if(!before)throw Error('Missing skill');
const candidate={...before,...changes};delete candidate.dur;
await new SkillDataModel(candidate).validate();
await fs.writeFile('data/balancing/mighty-double-strike-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes,$unset:{dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Double Strike verified: two hits, 166 to 614 each; Mana 83 to 657; cooldown unchanged at 37 s; cast 0; animation provisional 0.5 s.');
}catch(e){console.error(`Double Strike update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
