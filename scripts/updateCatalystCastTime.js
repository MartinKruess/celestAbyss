import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:[204,205]}}).toArray();if(before.length!==2)throw Error('Missing catalyst');
const changes=before.filter(s=>s.castTimeSeconds===undefined).map(s=>({nr:s.nr,set:{castTimeSeconds:1.8,description_de:s.description_de+' Die Castzeit beträgt 1,8 Sekunden.',description_eng:s.description_eng+' Cast time is 1.8 seconds.'}}));
for(const c of changes)await new SkillDataModel({...before.find(s=>s.nr===c.nr),...c.set}).validate();
await fs.writeFile('data/balancing/catalyst-cast-before.json',JSON.stringify(before,null,2)+'\n');
for(const c of changes){await SkillDataModel.collection.updateOne({nr:c.nr},{$set:c.set});const after=await SkillDataModel.collection.findOne({nr:c.nr});for(const[k,v]of Object.entries(c.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Catalyst cast times verified: '+changes.length+' missing definitions set to 1.8 seconds.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
