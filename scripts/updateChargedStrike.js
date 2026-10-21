import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:65,animationDurationSeconds:0.8,animationTimingStatus:'provisional',statScaling:{patk:{type:'linear',base:85,perLevel:55}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:65,perLevel:38}}]};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:11});if(!before)throw Error('Missing skill');
set.description_de='Führt einen aufgeladenen physischen Schlag aus. Der Grundangriffswert steigt von 85 um 55 je weiterer Stufe auf 855 auf Level 15. Die Mana-Kosten steigen von 65 um 38 je weiterer Stufe auf 597. Die gesamte Animation dauert vorläufig 0,8 Sekunden. Zusätzliche Cast Time und genauer Trefferzeitpunkt sind noch festzulegen. Der Cooldown bleibt zunächst bei 25 Sekunden.';
set.description_eng='Performs a charged physical strike. Base attack increases from 85 by 55 per additional level to 855 at level 15. Mana cost increases from 65 by 38 per additional level to 597. Total animation duration is provisionally 0.8 seconds. Additional cast time and exact hit timing are still to be defined. Cooldown remains provisionally 25 seconds.';
const candidate={...before,...set};delete candidate.dur;delete candidate.castTimeSeconds;
await new SkillDataModel(candidate).validate();await fs.writeFile('data/balancing/charged-strike-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{dur:'',castTimeSeconds:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Charged Strike verified: attack 85 to 855, Mana 65 to 597, provisional total animation 0.8 s. Additional cast time pending; old duration removed.');
}catch(e){console.error(`Charged Strike update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
