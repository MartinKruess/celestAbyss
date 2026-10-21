import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={effects:[{key:'full-potential-max-mana',type:'statModifier',target:'self',stat:'maxMana',value:133,unit:'flat',valueScaling:{type:'linear',base:133,perLevel:133},durationSeconds:600}],cd:900,statScaling:{health:{type:'linear',base:500,perLevel:500},patk:{type:'linear',base:25,perLevel:25}},description_de:'Eigenbuff, der maximales Leben um 500 und physischen Angriff um 25 je gelerntem Skilllevel erhöht. Auf Stufe 3 sind das 1500 maximales Leben und 75 physischer Angriff. Cooldown 900 Sekunden, Dauer 600 Sekunden, Castzeit 0,6 Sekunden. Bisherige Mana-Kosten: 133 auf Stufe 1, plus 62 je weiterer Stufe auf 257. Zusätzlich erhöht der Buff maximales Mana um 133 je gelerntem Skilllevel, bis zu 399 auf Stufe 3. Dies ist ein Max-Mana-Bonus, keine direkte Mana-Wiederherstellung.',description_eng:'Self buff granting 500 maximum Health and 25 physical attack per learned skill level, reaching 1500 maximum Health and 75 physical attack at level 3. Cooldown is 900 seconds, duration is 600 seconds, cast time is 0.6 seconds. Existing Mana cost starts at 133 and increases by 62 per additional level to 257. Additionally increases maximum Mana by 133 per learned skill level, reaching 399 at level 3. This is a maximum Mana bonus, not direct Mana restoration.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:163});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/full-potential-max-mana-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Full Potential verified: maximum health 500 to 1500, attack 25 to 75, cooldown 900 seconds; maximum Mana bonus 133 to 399; existing activation costs preserved.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
