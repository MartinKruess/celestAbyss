import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:124});
 if(before?.maxSkillLv!==15)throw Error('Unexpected skill');
 const values=Array.from({length:15},(_,i)=>{const level=i+1;return level*(level+10);});
 const set={statScaling:{...before.statScaling,health:{type:'table',values}},description_de:'Heilt Verbündete über Zeit. Der Heilwert steigt kumulativ: Stufe 1 hat 11; jede weitere Stufe addiert den nächsten um 2 erhöhten Zuwachs, also +13, +15, +17 und so weiter bis +39 auf Stufe 15. Heilwerte je Stufe: '+values.join(', ')+'. Formel für Skillstufe L: L × (L + 10). Die bisherige Laufzeit beträgt 10 Sekunden. Noch festzulegen sind Tickintervall und ob der Heilwert je Tick oder insgesamt über die Laufzeit gilt. Mana-Kosten und Castzeit sind noch nicht festgelegt. Bestehender Cooldown 29 Sekunden.',description_eng:'Heals allies over time. Healing value grows cumulatively: level 1 starts at 11; each additional level adds the next increment increased by 2, namely +13, +15, +17 and so on to +39 at level 15. Healing values by level: '+values.join(', ')+'. Formula for skill level L: L × (L + 10). Existing duration is 10 seconds. Tick interval and whether the value applies per tick or over the full duration remain pending. Mana costs and cast time remain undefined. Existing cooldown 29 seconds.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/recovery-cumulative-scaling-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:124},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:124});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Recovery healing curve verified: '+values.join(', '));
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
