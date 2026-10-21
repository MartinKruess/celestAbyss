import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:73,cd:54,castTimeSeconds:0.4,statScaling:{matk:{type:'linear',base:211,perLevel:67}},cooldownScaling:{type:'linear',base:54,perLevel:-1},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:73,perLevel:37}}],description_de:'Schneidet deine Feinde mit Klingen aus Wind. Der magische Grundschaden des Skills beträgt 211 auf Skilllevel 1 und steigt um 67 je weiterer Stufe auf 814 auf Stufe 10. Dieser Wert erhöht nicht dauerhaft deinen magischen Angriff. Die Mana-Kosten steigen von 73 um 37 je weiterer Stufe auf 406. Der Cooldown sinkt von 54 um 1 Sekunde je weiterer Stufe auf 45 Sekunden. Castzeit 0,4 Sekunden.',description_eng:'Cuts your enemies with blades of wind. The skill base magical damage starts at 211 at level 1 and increases by 67 per additional level to 814 at level 10. This value does not permanently increase your magical attack. Mana cost increases from 73 by 37 per additional level to 406. Cooldown decreases from 54 by 1 second per additional level to 45 seconds. Cast time is 0.4 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:221});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/wind-slasher-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Wind Slasher verified: damage 211 to 814, mana 73 to 406, cooldown 54 to 45, cast 0.4 seconds.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
