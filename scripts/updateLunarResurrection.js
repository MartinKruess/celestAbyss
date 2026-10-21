import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:206});
 if(!before)throw Error('Missing skill');
 const set={castTimeSeconds:1,animationDurationSeconds:1,animationTimingStatus:'provisional',durationScaling:{type:'table',values:[0]},resurrectionSettings:{requiresDeadAlly:true,restoredHealth:2500,preservesTargetMana:true},description_de:'Belebt einen verstorbenen Verbündeten mit 2500 HP wieder. Das vorhandene Mana des Ziels bleibt erhalten; kein zusätzlicher Mana-Wiederherstellungsbonus. Castzeit 1 Sekunde, Animation ungefähr 1 Sekunde; dies ist kein zusätzlicher Wirkungszeitraum. Die Wiederbelebung erfolgt einmalig ohne anschließende Wirkungsdauer. Bestehender Cooldown 100 Sekunden. Aktivierungs-Manakosten des Heilers sind noch nicht festgelegt.',description_eng:'Resurrects a dead ally with 2500 HP. The target retains its existing Mana; no additional Mana restoration bonus. Cast time 1 second, animation approximately 1 second; this is not an additional effect duration. Resurrection occurs once with no lingering duration. Existing cooldown 100 seconds. The healer’s activation Mana cost remains undefined.'};
 const candidate={...before,...set};delete candidate.mana;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/lunar-resurrection-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:206},{$set:set,$unset:{mana:''}});
 const after=await SkillDataModel.collection.findOne({nr:206});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 if(after.mana!==undefined)throw Error('Mana bonus remains');
 console.log('Lunar resurrection verified: 2500 HP, target Mana preserved, cast 1s.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
