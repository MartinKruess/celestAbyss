import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes=[
{nr:67,set:{str:5,agi:3,resourceCosts:[],statScaling:{str:{type:'linear',base:5,perLevel:2},agi:{type:'linear',base:3,perLevel:1}},statBonusUnits:{str:'flat',agi:'flat'},description_de:'Verbessert dauerhaft deine Körperbeherrschung und Beweglichkeit. Erhöht auf Skilllevel 1 deine Stärke um 5 und deine Agilität um 3. Je weiterer Stufe kommen 2 Stärke und 1 Agilität hinzu, bis zu 23 Stärke und 12 Agilität auf Level 10.',description_eng:'Permanently improves body control and agility. At skill level 1, increases Strength by 5 and Agility by 3. Each additional level adds 2 Strength and 1 Agility, reaching 23 Strength and 12 Agility at level 10.'},unset:{vita:'',cd:'',dur:''}},
{nr:75,set:{castTimeSeconds:0.3,mana:47,resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:47,perLevel:23}}],statBonusTargets:{str:'selfGroupAndCompanions',vita:'selfGroupAndCompanions'},description_de:'Verstärkt dich selbst, deine Gruppenmitglieder und Begleiter für 300 Sekunden. Erhöht Stärke und Vitalität jeweils um 2 je gelerntem Skilllevel, bis zu jeweils 20. Die Cast Time beträgt 0,3 Sekunden. Die Mana-Kosten steigen von 47 um 23 je weiterer Stufe auf 254. Der Cooldown beträgt 60 Sekunden.',description_eng:'Strengthens you, your group members and companions for 300 seconds. Increases Strength and Vitality by 2 each per learned skill level, up to 20 each. Cast time is 0.3 seconds. Mana cost increases from 47 by 23 per additional level to 254. Cooldown is 60 seconds.'}},
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:changes.map(x=>x.nr)}}).toArray();if(before.length!==2)throw Error('Missing skill');
for(const p of changes){const s={...before.find(x=>x.nr===p.nr),...p.set};for(const k of Object.keys(p.unset??{}))delete s[k];await new SkillDataModel(s).validate();}
await fs.writeFile('data/balancing/body-control-buff-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of changes)await SkillDataModel.collection.updateOne({_id:before.find(x=>x.nr===p.nr)._id},{$set:p.set,...(p.unset?{$unset:p.unset}:{})});
for(const p of changes){const after=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');if(p.nr===67&&after.vita!==undefined)throw Error('Legacy Vita retained');}
console.log('Body Control: 5 to 23 Strength, 3 to 12 Agility, no Vitality. Body Reinforcement: Mana 47 to 254, cast 0.3 s, self/group/companions. Shared class assignments preserved.');
}catch(e){console.error(`Body skill update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
