import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[87,89,227,234]}}).toArray();if(before.length!==4)throw Error('Missing skill');
 const plans=before.filter(s=>[87,89].includes(s.nr)).map(s=>{const old=s.statScaling.patk,c={...old,perLevel:s.nr===87?62:241},oldEnd=old.base+old.perLevel*9,end=c.base+c.perLevel*9;
 const de=s.description_de.replace(`um ${old.perLevel} je weiterer`,`um ${c.perLevel} je weiterer`).replace(`auf ${oldEnd}`,`auf ${end}`);
 const en=s.description_eng.replace(`by ${old.perLevel} per additional`,`by ${c.perLevel} per additional`).replace(`to ${oldEnd}`,`to ${end}`);
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');return {s,set:{statScaling:{...s.statScaling,patk:c},description_de:de,description_eng:en}};});
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/butcher-rotating-skull-endpoints-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log(JSON.stringify({updated:[{nr:87,start:36,perLevel:62,max:594},{nr:89,start:387,perLevel:241,max:2556}],databaseMissing:before.filter(s=>[227,234].includes(s.nr)).map(s=>({nr:s.nr,name:s.skillName_de,missing:['statScaling','resourceCosts','mana','castTimeSeconds'].filter(k=>s[k]===undefined)}))}));
}catch(e){console.error(`Butcher update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
