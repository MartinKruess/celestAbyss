import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:232});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={statScaling:{matk:{type:'linear',base:42,perLevel:23}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:18,perLevel:10}}],cd:13,cooldownScaling:{type:'linear',base:13,perLevel:-1},castTimeSeconds:0,durationScaling:{type:'table',values:Array(10).fill(0)},hasLingeringDamage:false,description_de:'Sendet einen Impuls der Dunkelheit aus und verursacht einmalig magischen Schaden. Skill-Grundschaden 42 auf Stufe 1 und +23 je weiterer Stufe, auf Stufe 10 249. Mana 18 auf Stufe 1 und +10 je weiterer Stufe, auf Stufe 10 108. Cooldown 13 Sekunden und -1 je weiterer Stufe, auf Stufe 10 4 Sekunden. Castzeit 0 Sekunden, Wirkungsdauer 0 Sekunden, kein Schaden über Zeit. Genaue Zielwahl beziehungsweise Trefferfläche bleibt noch zu definieren.',description_eng:'Sends out a dark pulse, dealing magical damage once. Skill base damage 42 plus 23 per additional level, reaching 249 at level 10. Mana 18 plus 10 per additional level, reaching 108. Cooldown 13 minus 1 per additional level, reaching 4 seconds. Cast time zero, effect duration zero, no damage over time. Exact targeting or hit area remains pending.'};
 const candidate={...before,...set};delete candidate.dur;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/dark-pulse-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:232},{$set:set,$unset:{dur:''}});
 const after=await SkillDataModel.collection.findOne({nr:232});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Dark Pulse verified: damage42–249, Mana18–108, cooldown13–4, cast/duration0.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
