import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:104});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={matk:97,mana:23,statScaling:{...before.statScaling,matk:{type:'linear',base:97,perLevel:19}},resourceCosts:before.resourceCosts.map(c=>c.resource==='mana'?{...c,scaling:{type:'linear',base:23,perLevel:6}}:c),description_de:before.description_de.replace('Grundschaden 127, +22 je weiterer Stufe, auf Stufe 10 325.','Grundschaden 97, +19 je weiterer Stufe, auf Stufe 10 268.').replace('Mana 23 je Anwendung auf Stufe 1, gleichmäßig steigend auf 98 je Anwendung auf Stufe 10.','Mana 23 je Anwendung auf Stufe 1, plus 6 je weiterer Stufe, auf Stufe 10 77 je Anwendung.').replace('15 Anwendungen kosten auf Stufe 10 1470 Mana; 16 Anwendungen kosten 1568 Mana.','15 Anwendungen kosten auf Stufe 10 1155 Mana; 16 Anwendungen kosten 1232 Mana.'),description_eng:'Deals one magical hit only while Soul Shackle affects the target. Base damage starts at 97 and increases by 19 per additional level, reaching 268 at level 10. Mana cost starts at 23 and increases by 6 per additional level to 77. Fifteen uses cost 1155 Mana; sixteen cost 1232. No health sacrifice, no damage over time, zero cast time, cooldown 0.19 seconds. Up to 16 immediate uses theoretically fit into a full 3-second shackle; the comparison uses 15. Harvest yields 0 fragments for 0–4 hits, 1 for 5–11 and 2 for 12 or more, capped at 2. Each shackle costs 1 fragment. Exact server timing and manual finisher implementation remain pending.'};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/soul-torment-97-268-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:104},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:104});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Torment verified: damage97+19/level to268; Mana23+6/level to77. Timing unchanged.');
}catch(e){console.error(`Soul Torment update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
