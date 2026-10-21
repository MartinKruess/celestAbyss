import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[226,237]}}).toArray();
 if(before.length!==2)throw Error('Missing summons');
 const updates=before.map(s=>({nr:s.nr,set:{summonedCreatureSettings:{...s.summonedCreatureSettings,occupiesPermanentPetSlot:false,canCoexistWithPermanentPet:true},description_de:s.description_de+' Diese zeitlich begrenzte Skill-Beschwörung belegt keinen regulären dauerhaften Pet-Platz und darf gleichzeitig mit dem normalen Pet aktiv sein. Zwei dauerhafte Pets bleiben dem Abenteurer vorbehalten.',description_eng:s.description_eng+' This temporary skill summon does not occupy a regular permanent-pet slot and can coexist with the normal pet. Two permanent pets remain exclusive to the Adventurer.'}}));
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/temporary-summons-pet-slots-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Temporary summons verified: separate from regular permanent pet slots.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
