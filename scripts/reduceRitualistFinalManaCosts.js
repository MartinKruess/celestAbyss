import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const targets=[{nr:48,base:167,max:469},{nr:49,base:31,max:266},{nr:72,base:67,max:354},{nr:104,base:23,max:98},{nr:105,base:178,max:490}];
 const before=await SkillDataModel.collection.find({nr:{$in:targets.map(t=>t.nr)}}).toArray();
 if(before.length!==targets.length)throw Error('Missing skills');
 const updates=targets.map(t=>{const s=before.find(s=>s.nr===t.nr);const old=s.resourceCosts.find(c=>c.resource==='mana');const oldMax=old.scaling.type==='table'?old.scaling.values[s.maxSkillLv-1]:old.scaling.base+(s.maxSkillLv-1)*old.scaling.perLevel;let de=s.description_de,en=s.description_eng;
 if(t.nr===48){de=de.replace('Mana 167 und +83 je weiterer Stufe, auf Stufe 5 499.','Mana 167 auf Stufe 1, gleichmäßig steigend auf 469 auf Stufe 5.');en=en.replace('Mana 167 plus 83 per additional level, reaching 499.','Mana 167 at level 1, increasing linearly to 469 at level 5.');}
 if(t.nr===49){de=de.replace('Mana 31 auf Stufe 1, +15 je weiterer Stufe, auf Stufe 20 316.','Mana 31 auf Stufe 1, gleichmäßig steigend auf 266 auf Stufe 20.');en=en.replace('Mana 31 plus 15 per additional level, reaching 316.','Mana 31 at level 1, increasing linearly to 266 at level 20.');}
 if(t.nr===72){de=de.replace('Mana 67 und +43 je weiterer Stufe, auf Stufe 10 454.','Mana 67 auf Stufe 1, gleichmäßig steigend auf 354 auf Stufe 10.');en=en.replace('Mana 67 plus 43 per additional level, reaching 454.','Mana 67 at level 1, increasing linearly to 354 at level 10.');}
 if(t.nr===104){de=de.replace('Mana 23 je Anwendung auf Stufe 1, +9 je weiterer Stufe, auf Stufe 10 104 je Anwendung.','Mana 23 je Anwendung auf Stufe 1, gleichmäßig steigend auf 98 je Anwendung auf Stufe 10.').replace('15 Anwendungen kosten auf Stufe 10 1560 Mana; 16 Anwendungen kosten 1664 Mana.','15 Anwendungen kosten auf Stufe 10 1470 Mana; 16 Anwendungen kosten 1568 Mana.');en=en.replace('Mana 23 per activation plus 9 per additional level, reaching 104.','Mana 23 per activation at level 1, increasing linearly to 98 at level 10.').replace('At level 10, 15 activations cost 1560 Mana; 16 activations cost 1664 Mana.','At level 10, 15 activations cost 1470 Mana; 16 activations cost 1568 Mana.');}
 if(t.nr===105){de=de.replace('Mana-Kosten 178 auf Stufe 1, +83 je weiterer Stufe, auf Stufe 5 510.','Mana-Kosten 178 auf Stufe 1, gleichmäßig steigend auf 490 auf Stufe 5.');en=en.replace('Mana cost 178 at level 1 plus 83 per additional level, reaching 510 at level 5.','Mana cost 178 at level 1, increasing linearly to 490 at level 5.');}
 if(de===s.description_de||en===s.description_eng)throw Error('Description replacement mismatch');
 return{nr:t.nr,oldMax,newMax:t.max,set:{resourceCosts:s.resourceCosts.map(c=>c.resource==='mana'?{...c,scaling:{type:'linear',base:t.base,perLevel:(t.max-t.base)/(s.maxSkillLv-1)}}:c),description_de:de,description_eng:en}};});
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/ritualist-mana-reductions-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log(JSON.stringify(updates.map(({nr,oldMax,newMax})=>({nr,oldMax,newMax}))));
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
