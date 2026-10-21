import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[195,196,197]}}).toArray();
 if(before.length!==3)throw Error('Missing skills');
 const blessing=before.find(s=>s.nr===197);
 const updates=[{nr:197,set:{resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:35,perLevel:21}}],castTimeSeconds:0.5,description_de:blessing.description_de.replace('Mana-Kosten und Castzeit sind noch festzulegen.','Mana-Kosten 35 auf Stufe 1 und +21 je weiterer Stufe, auf Stufe 10 224. Castzeit 0,5 Sekunden.'),description_eng:blessing.description_eng.replace('Mana costs and cast time remain undefined.','Mana cost 35 at level 1 and +21 per additional level, reaching 224 at level 10. Cast time 0.5 seconds.')}},...[195,196].map(nr=>({nr,set:{charClass:before.find(s=>s.nr===nr).charClass.filter(c=>!['Healer','Priest'].includes(c))}}))];
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/aurora-blessing-redundant-buffs-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Aurora-Segen verified: Mana 35–224, cast 0.5s; Light Weapon/Radiant Armor removed from Healer assignments.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
