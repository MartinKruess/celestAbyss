import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={cd:75,castTimeSeconds:1.2,cooldownScaling:{type:'linear',base:75,perLevel:-1},resourceCosts:[{resource:'health',reference:'maxHealth',unit:'flat',scaling:{type:'linear',base:50,perLevel:50}}],effects:[{key:'mana-conversion-gain',type:'resourceGain',target:'self',resource:'mana',unit:'flat',value:35,valueScaling:{type:'linear',base:35,perLevel:35},durationSeconds:0}],description_de:'Wandelt eigenes Leben in Mana um. Je gelerntem Skilllevel opferst du 50 HP und erhältst 35 Mana, bis zu 500 HP für 350 Mana auf Stufe 10. Castzeit 1,2 Sekunden. Die Umwandlung erfolgt einmalig und hat keine anhaltende Wirkungsdauer. Der Cooldown beginnt bei 75 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 66 Sekunden. Bei unzureichendem Leben ist der Skill nicht aktivierbar.',description_eng:'Converts your own Health into Mana. Each learned skill level costs 50 HP and restores 35 Mana, reaching 500 HP for 350 Mana at level 10. Cast time is 1.2 seconds. Conversion occurs once with no lasting effect. Cooldown starts at 75 seconds and decreases by 1 second per additional level to 66 seconds. Cannot be activated with insufficient Health.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:200});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/mana-conversion-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{health:'',mana:'',dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Mana Conversion verified: health cost 50 to 500, mana gain 35 to 350, cooldown 75 to 66.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
