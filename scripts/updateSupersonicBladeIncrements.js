import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:115});if(!before)throw Error('Missing skill');
const resourceCosts=structuredClone(before.resourceCosts);const mana=resourceCosts.find(c=>c.resource==='mana');if(!mana)throw Error('Missing Mana cost');mana.scaling.perLevel=74;
const set={statScaling:{...before.statScaling,patk:{type:'linear',base:636,perLevel:186}},resourceCosts,
description_de:before.description_de.replace('von 636 um 93 je weiterer Stufe auf 1008','von 636 um 186 je weiterer Stufe auf 1380').replace('von 231 um 37 je weiterer Stufe auf 379','von 231 um 74 je weiterer Stufe auf 527'),
description_eng:before.description_eng.replace('from 636 by 93 per additional level to 1008','from 636 by 186 per additional level to 1380').replace('from 231 by 37 per additional level to 379','from 231 by 74 per additional level to 527')};
await new SkillDataModel({...before,...set}).validate();
await fs.writeFile('data/balancing/supersonic-increments-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Supersonic Blade increments verified: +186 attack and +74 Mana per additional level; final 1380 attack and 527 Mana. Other values unchanged.');
}catch(e){console.error(`Supersonic increment update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
