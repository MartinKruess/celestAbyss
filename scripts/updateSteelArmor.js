import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={pdef:400,mdef:250,mana:92,castTimeSeconds:0.6,resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:92}}],description_de:'Verstärkt die physische Verteidigung verbündeter Spieler in der Nähe um 400 und die magische Verteidigung um 250. Der Buff hält 25 Minuten. Einmalige Mana-Kosten 92, Castzeit 0,6 Sekunden, bisheriger Cooldown 45 Sekunden. Eine Skillstufe, keine Levelskalierung.',description_eng:'Increases nearby allied players physical defense by 400 and magical defense by 250. The buff lasts 25 minutes. One-time Mana cost is 92, cast time is 0.6 seconds, existing cooldown is 45 seconds. One skill level, no level scaling.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:107});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/steel-armor-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Steel Armor verified: physical defense 400, magical defense 250, one-time mana cost 92, cast 0.6 seconds.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
