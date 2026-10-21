import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={amb:2,atkSpeed:0.03,mana:110,castTimeSeconds:0,animationDurationRangeSeconds:{min:0.2,max:0.3},animationTimingStatus:'provisional',statBonusUnits:{amb:'flat',atkSpeed:'fraction'},statScaling:{amb:{type:'linear',base:2,perLevel:1},atkSpeed:{type:'linear',base:0.03,perLevel:0.02}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:110,perLevel:23}}],description_de:'Schärft sofort deine Instinkte und erhöht Ambush auf Skilllevel 1 um 2 sowie Attack Speed um 3 Prozent. Je weiterer Stufe kommen 1 Ambush und 2 Prozentpunkte Attack Speed hinzu, bis zu 11 Ambush und 21 Prozent Attack Speed auf Level 10. Die Mana-Kosten steigen von 110 um 23 je weiterer Stufe auf 317. Keine Cast Time; eine kurze Animation dauert vorläufig 0,2 bis 0,3 Sekunden. Der Buff hält 300 Sekunden und hat 60 Sekunden Cooldown.',description_eng:'Instantly sharpens your instincts, increasing Ambush by 2 and Attack Speed by 3 percent at skill level 1. Each additional level adds 1 Ambush and 2 percentage points of Attack Speed, reaching 11 Ambush and 21 percent Attack Speed at level 10. Mana cost increases from 110 by 23 per additional level to 317. No cast time; a brief animation provisionally lasts 0.2 to 0.3 seconds. The buff lasts 300 seconds with a 60 second cooldown.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:148});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/sharp-instinct-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Sharp Instinct verified: Ambush 2 to 11, Attack Speed fraction 0.03 to 0.21, Mana 110 to 317. Instant activation, provisional mini-animation; duration and cooldown preserved.');
}catch(e){console.error(`Sharp Instinct update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
