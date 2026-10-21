import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:67});
 if(!before)throw Error('Missing skill');
 const set={effects:before.effects.map(e=>{if(e.key!=='body-control-mana-efficiency')return e;const v={...e,value:0.01,valueScaling:{type:'table',values:[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03]}};delete v.minimumSkillLevel;return v;}),description_de:before.description_de.replace('Auf Stufe 10 werden außerdem deine allgemeinen Mana-Kosten dauerhaft um 2 Prozent reduziert. Auf Stufe 1 bis 9 gibt es keine Manakostenreduktion.','Die allgemeinen Mana-Kosten werden dauerhaft reduziert: Stufen 1–4 um 1 Prozent, Stufen 5–9 um 2 Prozent, Stufe 10 um 3 Prozent.'),description_eng:before.description_eng};
 set.description_eng='Permanently increases Dexterity by 5 and Agility by 3 at level 1, adding 2 Dexterity and 1 Agility per additional level, reaching 23 Dexterity and 12 Agility at level 10. Shared passive for Adventurer, Rogue and Shadowwarrior. Reduces all Mana costs by 1 percent at levels 1–4, 2 percent at levels 5–9 and 3 percent at level 10. No activation costs. Attribute bonuses unchanged.';
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/body-control-mana-tiers-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:67},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:67});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Body Control verified: 1/2/3% Mana reduction at levels1/5/10, shared assignments unchanged.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
