import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:58});
 if(!before)throw Error('Missing skill');
 const set={maxSkillLv:4,health:550,statScaling:{health:{type:'linear',base:550,perLevel:330}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:283,perLevel:185}}],cd:80,cooldownScaling:{type:'linear',base:80,perLevel:-2},castTimeSeconds:0.6,durationScaling:{type:'table',values:[0,0,0,0]},effectsVersion:1,effects:[{key:'divine-healing-single-target',type:'heal',target:'allyOrCompanion',value:550,unit:'flat',valueScaling:{type:'linear',base:550,perLevel:330},durationSeconds:0}],description_de:'Nutzt die Macht Auroras, um ein einzelnes verbündetes Ziel einmalig zu heilen. Vier Skillstufen. Heilung 550 HP auf Stufe 1 und +330 je weiterer Stufe: 550, 880, 1210, 1540 HP. Mana 283 auf Stufe 1 und +185 je weiterer Stufe: 283, 468, 653, 838. Cooldown 80 Sekunden und je weiterer Stufe 2 Sekunden weniger, auf Stufe 4 74 Sekunden. Castzeit 0,6 Sekunden. Die Heilung wirkt einmalig nach der Castzeit; keine anschließende Wirkungsdauer oder wiederholten Heilticks.',description_eng:'Uses the power of Aurora to heal one allied target once. Four skill levels. Healing starts at 550 HP and increases by 330 per additional level: 550, 880, 1210, 1540 HP. Mana starts at 283 and increases by 185 per additional level: 283, 468, 653, 838. Cooldown starts at 80 seconds and decreases by 2 per additional level, reaching 74 seconds at level 4. Cast time 0.6 seconds. Healing resolves once after casting; no lingering effect or repeated healing ticks.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/divine-healing-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:58},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:58});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Divine Healing verified: four levels, 550–1540 HP, 283–838 Mana, 80–74 seconds cooldown.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
