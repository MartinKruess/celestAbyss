import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:236});
 if(before?.maxSkillLv!==3)throw Error('Unexpected skill');
 const set={skillName_de:'Teufelspakt',dmgType:'selfbuff',dur:600,cd:60,castTimeSeconds:0.3,statScaling:Object.fromEntries(['vic','wis','int','vita'].map(k=>[k,{type:'linear',base:5,perLevel:5}])),resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:61,perLevel:25}}],description_de:'Schließt einen Teufelspakt und verstärkt sich selbst für 600 Sekunden (10 Minuten). Je gelerntem Skilllevel +5 Victim, +5 Wisdom, +5 Intelligenz und +5 Vitalität, auf Stufe 3 jeweils +15. Kein zufälliger Buff und kein zusätzlicher Risikoeffekt im aktuellen Entwurf. Mana 61 auf Stufe 1, +25 je weiterer Stufe, auf Stufe 3 111. Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Erneute Anwendung erneuert den Eigenbuff, ohne seine Stärke mit sich selbst zu stapeln.',description_eng:'Makes a devil’s pact to enhance the caster for 600 seconds (10 minutes). Each learned skill level grants +5 Victim, +5 Wisdom, +5 Intelligence and +5 Vitality, reaching +15 each at level 3. No random buff or extra risk effect in the current design. Mana 61 plus 25 per additional level, reaching 111 at level 3. Cooldown 60 seconds, cast time 0.3 seconds. Reapplying refreshes the self buff without stacking its magnitude with itself.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/devils-pact-buff-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:236},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:236});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Teufelspakt verified: self buff, three levels, +5–15 four attributes, Mana61–111, duration600, cooldown60, cast0.3.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
