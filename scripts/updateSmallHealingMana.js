import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:64});
 if(before?.maxSkillLv!==20||!before.statScaling?.health)throw Error('Unexpected skill');
 const set={resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:16,perLevel:6}}],durationScaling:{type:'table',values:Array(20).fill(0)},effectsVersion:1,effects:[{key:'small-healing-single-target',type:'heal',target:'allyOrCompanion',value:20,unit:'flat',valueScaling:before.statScaling.health,durationSeconds:0}],description_de:before.description_de.replace('Mana-Kosten sind noch festzulegen.','Mana-Kosten 16 auf Stufe 1 und +6 je weiterer Stufe, insgesamt 130 auf Stufe 20. Einmalige Heilung nach der Castzeit, Wirkungsdauer 0 Sekunden, keine Heilticks.'),description_eng:before.description_eng.replace('Mana costs remain undefined.','Mana cost 16 at level 1 and +6 per additional level, totaling 130 at level 20. Heals once after casting, effect duration 0 seconds, no healing ticks.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/small-healing-mana-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:64},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:64});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Small Healing verified: Mana 16–130; single heal, duration zero.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
