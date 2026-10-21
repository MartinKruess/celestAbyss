import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:75,castTimeSeconds:0.3,castTimeStatus:'provisional',resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:75,perLevel:25}}],description_de:'Erweckt die Leidenschaft und erhöht deine Geschicklichkeit und Agilität sowie die deiner Verbündeten jeweils um 2 je gelerntem Skilllevel, bis zu jeweils 10 auf Level 5. Der Buff hält 300 Sekunden und hat 60 Sekunden Cooldown. Die Mana-Kosten steigen von 75 um 25 je weiterer Stufe auf 175. Die Cast Time beträgt vorläufig 0,3 Sekunden.',description_eng:'Awakens passion, increasing your Dexterity and Agility and those of your allies by 2 each per learned skill level, up to 10 each at level 5. The buff lasts 300 seconds and has a 60 second cooldown. Mana cost increases from 75 by 25 per additional level to 175. Cast time is provisionally 0.3 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:147});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/passion-awakening-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
const p='data/balancing/endurance-proc-proposal.json';const draft=JSON.parse(await fs.readFile(p,'utf8'));draft.triggerEvent='ownAttack';draft.triggerEventStatus='provisional';draft.possibleLaterTrigger='receivedAttack';draft.status='cooldownPendingNotSavedToDatabase';await fs.writeFile(p,JSON.stringify(draft,null,2)+'\n');
console.log('Passion Awakening verified: Mana 75 to 175, provisional cast 0.3 s. Existing bonuses, name, duration and cooldown unchanged. Endurance draft notes own-attack trigger; cooldown pending.');
}catch(e){console.error(`Passion update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
