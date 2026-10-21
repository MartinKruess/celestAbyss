import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:17,dur:3,castTimeSeconds:0.2,castTimeStatus:'provisional',hasLingeringDamage:false,statScaling:{matk:{type:'linear',base:37,perLevel:13}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:17,perLevel:11}}],durationScaling:{type:'table',values:[3,3,3,3,3,3,3,3,3,4]},effects:[{key:'magic-ban-suppression',type:'control',controlKind:'spellSuppression',target:'enemy',affectsBosses:true,actionRestrictionsStatus:'defined',durationSeconds:3,durationScaling:{type:'table',values:[3,3,3,3,3,3,3,3,3,4]}}],description_de:'Belegt den Gegner mit einem Bann, der das Wirken von Spells für 3 Sekunden unterdrückt. Wirkt auch auf Bosse. Auf Skilllevel 10 steigt die Banndauer auf 4 Sekunden. Verursacht zusätzlich einmalig magischen Grundschaden von 37 auf Stufe 1, plus 13 je weiterer Stufe, bis zu 154. Mana-Kosten steigen von 17 um 11 je weiterer Stufe auf 116. Vorläufige Castzeit 0,2 Sekunden. Der bisherige Cooldown beträgt 540 Sekunden. Verhalten bei bereits laufenden Casts wird noch geklärt.',description_eng:'Applies a ban that suppresses the target spellcasting for 3 seconds. Also affects bosses. At skill level 10, suppression lasts 4 seconds. Additionally deals magical base damage once, starting at 37 and increasing by 13 per additional level to 154. Mana cost increases from 17 by 11 per additional level to 116. Provisional cast time is 0.2 seconds. Existing cooldown is 540 seconds. Interaction with casts already in progress remains to be clarified.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:220});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/magic-ban-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Magic Ban verified: boss spell suppression 3 to 4 seconds, damage 37 to 154, mana 17 to 116.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
