import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:91});
 if(before?.statScaling?.patk?.base!==171||before.maxSkillLv!==10)throw Error('Unexpected baseline');
 const set={'statScaling.patk':{type:'linear',base:171,perLevel:53},description_de:before.description_de.replace('plus 66 je weiterer Stufe, bis zu 765','plus 53 je weiterer Stufe, bis zu 648'),description_eng:before.description_eng.replace('by 66 per additional level to 765','by 53 per additional level to 648')};
 await new SkillDataModel({...before,statScaling:{...before.statScaling,patk:set['statScaling.patk']},description_de:set.description_de,description_eng:set.description_eng}).validate();
 await fs.writeFile('data/balancing/shadow-trap-damage-adjustment-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:91},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:91});
 if(after.statScaling.patk.perLevel!==53||!after.description_de.includes('bis zu 648')||!after.description_eng.includes('to 648'))throw Error('Read-back mismatch');
 console.log('Shadow Trap verified: 171 + 9 * 53 = 648.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
