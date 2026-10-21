import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:64});
 if(before?.maxSkillLv!==20)throw Error('Unexpected skill');
 const values=Array.from({length:20},(_,i)=>{const l=i+1;return 20*l+3*l*(l-1);});
 const set={health:20,statScaling:{...before.statScaling,health:{type:'table',values}},description_de:'Heilt ein verbündetes Ziel. Der Heilwert wächst kumulativ mit Zuwächsen von 20, 26, 32, 38 und so weiter: Jeder nächste Zuwachs ist um 6 höher. Heilwerte von Stufe 1 bis 20: '+values.join(', ')+'. Formel für Stufe L: 20 × L + 3 × L × (L - 1). Auf Stufe 20 beträgt der Heilwert 1540 HP. Castzeit 0,1 Sekunden. Bestehender Cooldown 17 Sekunden. Mana-Kosten sind noch festzulegen.',description_eng:'Heals an allied target. Healing grows cumulatively with increments of 20, 26, 32, 38 and so on, increasing each successive increment by 6. Healing values at levels 1–20: '+values.join(', ')+'. Formula for level L: 20 × L + 3 × L × (L - 1). Level 20 healing is 1540 HP. Cast time 0.1 seconds. Existing cooldown 17 seconds. Mana costs remain undefined.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/small-healing-start-twenty-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:64},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:64});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Small Healing verified: 20, 46, 78, 116 ... 1540 HP.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
