import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:104});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:23,perLevel:9}}],description_de:before.description_de.replace('Mana 57 je Anwendung auf Stufe 1, +29 je weiterer Stufe, auf Stufe 10 318 je Anwendung.','Mana 23 je Anwendung auf Stufe 1, +9 je weiterer Stufe, auf Stufe 10 104 je Anwendung.').replace('15 Anwendungen kosten auf Stufe 10 4770 Mana.','15 Anwendungen kosten auf Stufe 10 1560 Mana; 16 Anwendungen kosten 1664 Mana.'),description_eng:before.description_eng.replace('Mana 57 per activation plus 29 per additional level, reaching 318.','Mana 23 per activation plus 9 per additional level, reaching 104.').replace('At level 10, 15 activations cost 4770 Mana.','At level 10, 15 activations cost 1560 Mana; 16 activations cost 1664 Mana.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/soul-torment-mana-second-reduction-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:104},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:104});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Torment verified: Mana23+9 per additional level=104 at level10.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
