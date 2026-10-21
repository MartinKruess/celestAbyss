import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:215});
 if(before?.maxSkillLv!==10||before.matk!==237)throw Error('Unexpected skill');
 const values=Array.from({length:10},(_,i)=>237+Math.min(i,4)*101+Math.max(0,i-4)*92);
 const set={statScaling:{matk:{type:'table',values}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:77,perLevel:43}}],castTimeSeconds:0.2,animationDurationSeconds:1,animationTimingStatus:'provisional',durationScaling:{type:'table',values:Array(10).fill(0)},description_de:'Erschafft ein heiliges Kreuz, schleudert es nach vorne und lässt es explodieren. Magischer Grundschaden 237 auf Stufe 1. Bis einschließlich Stufe 5 steigt er je weiterer Stufe um 101 auf 641; ab Stufe 6 jeweils um 92 auf insgesamt 1101 auf Stufe 10. Mana 77 auf Stufe 1 und +43 je weiterer Stufe, insgesamt 464 auf Stufe 10. Castzeit 0,2 Sekunden. Vorläufige Animationsdauer 1 Sekunde, keine anhaltende Wirkung. Bestehender Cooldown 43 Sekunden.',description_eng:'Creates a holy cross, hurls it forward and makes it explode. Magical base damage starts at 237. Each additional level through level 5 adds 101, reaching 641; levels 6 through 10 each add 92, reaching 1101. Mana starts at 77 and increases by 43 per additional level to 464. Cast time 0.2 seconds. Provisional animation duration 1 second; no lingering effect. Existing cooldown remains 43 seconds.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/holy-cross-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:215},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:215});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Holy Cross saved and verified: damage 237 / 641 / 1101, Mana 77–464.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
