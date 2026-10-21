import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[216,217]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const updates=before.map(s=>{const base=s.nr===216?67:137,max=s.nr===216?298:712,old=s.nr===216?'Mana 67, +29 je weiterer Stufe, auf Stufe 10 328 pro Anwendung, nicht pro Speer.':'Mana 137, +75 je weiterer Stufe, auf Stufe 10 812.',oldEn=s.nr===216?'Mana 67 plus 29 per additional level, totaling 328 per activation, not per spear.':'Mana 137 plus 75 per additional level, totaling 812.';return{nr:s.nr,set:{resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base,perLevel:(max-base)/9}}],description_de:s.description_de.replace(old,`Mana ${base} auf Stufe 1, gleichmäßig steigend auf ${max} auf Stufe 10; Kosten einmal pro Anwendung.`),description_eng:s.description_eng.replace(oldEn,`Mana ${base} at level 1, increasing linearly to ${max} at level 10; charged once per activation.`)}};});
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/luminet-attack-mana-reduction-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Maximum Mana costs verified: Holy Destruction 298, Divine Nova 712.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
