import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={dmgType:'selfbuff',activation:'manual',patk:160,str:20,health:80,mana:167,dur:15,cd:130,castTimeSeconds:0.8,statScaling:{str:{type:'linear',base:20,perLevel:2},health:{type:'linear',base:80,perLevel:40},patk:{type:'linear',base:160,perLevel:40}},statBonusTargets:{str:'self',health:'self',patk:'self'},statBonusUnits:{str:'flat',health:'flat',patk:'flat'},cooldownScaling:{type:'linear',base:130,perLevel:-2},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:167,perLevel:55}}],description_de:'Lädt dich 0,8 Sekunden auf und verstärkt dich selbst für 15 Sekunden. Auf Skilllevel 1 erhältst du 20 Stärke, 80 zusätzliche maximale Lebenspunkte und 160 physischen Angriff. Je weiterer Stufe kommen 2 Stärke, 40 Lebenspunkte und 40 physischer Angriff hinzu, bis zu 28 Stärke, 240 Lebenspunkten und 320 physischem Angriff auf Level 5. Die Mana-Kosten steigen von 167 um 55 je weiterer Stufe auf 387. Der Cooldown sinkt von 130 um 2 Sekunden je weiterer Stufe auf 122 Sekunden. Der Lebensbonus ist keine direkte Heilung.',description_eng:'Charges you for 0.8 seconds and strengthens you for 15 seconds. At skill level 1, gain 20 Strength, 80 additional maximum Health and 160 physical attack. Each additional level adds 2 Strength, 40 Health and 40 physical attack, reaching 28 Strength, 240 Health and 320 physical attack at level 5. Mana cost increases from 167 by 55 per additional level to 387. Cooldown decreases from 130 by 2 seconds per additional level to 122 seconds. The Health bonus is not direct healing.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:12});if(!before)throw Error('Missing skill');
const candidate={...before,...set};delete candidate.matk;await new SkillDataModel(candidate).validate();
await fs.writeFile('data/balancing/charge-self-buff-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{matk:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');if(after.matk!==undefined)throw Error('Old magic bonus');
console.log('Charge verified as self buff: Strength 20 to 28, max-HP bonus 80 to 240, physical attack 160 to 320; Mana 167 to 387; cooldown 130 to 122; cast 0.8, duration 15 s.');
}catch(e){console.error(`Charge self buff update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
