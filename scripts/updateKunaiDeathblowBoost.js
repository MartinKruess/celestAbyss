import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={patk:17,cd:0.5,castTimeSeconds:0,animationDurationSeconds:1,animationTimingStatus:'provisional',hasLingeringDamage:false,resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:0}}],statScaling:{patk:{type:'linear',base:17,perLevel:11}},description_de:'Greift den Gegner mit einem Kunai an. Der physische Grundschaden beträgt 17 auf Stufe 1 und steigt um 11 je weiterer Stufe auf 226 auf Stufe 20. Unter 5 Prozent Leben des Ziels verursacht der Angriff nach der bisherigen Regel dreifachen Schaden. Nicht gegen Bosse oder im PvP anwendbar. Keine Mana-Kosten auf jeder Stufe. Castzeit 0 Sekunden, Cooldown 0,5 Sekunden. Vorläufige Animation 1 Sekunde; keine anhaltende Wirkungsdauer.',description_eng:'Attacks the opponent with a kunai. Base physical damage starts at 17 at level 1 and increases by 11 per additional level to 226 at level 20. Under the existing rule, deals triple damage when the target is below 5 percent Health. Cannot be used against bosses or in PvP. No Mana cost at any level. Cast time is 0 seconds, cooldown is 0.5 seconds. Provisional animation is 1 second, with no lasting effect.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:70});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/kunai-deathblow-boost-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{dur:'',mana:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Kunai Deathblow verified: 17 plus 19 times 11 equals 226 at level 20; no Mana cost.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
