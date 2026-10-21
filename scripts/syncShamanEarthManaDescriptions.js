import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,records=await col.find({nr:{$in:[255,256,258]}}).toArray();assert.equal(records.length,3);
 const path='data/balancing/shaman-archdruid-package.json',report=JSON.parse(await fs.readFile(path,'utf8'));
 await fs.writeFile(report.backup+'/earth-description-skills.json',JSON.stringify(records,null,2)+'\n');
 for(const before of records){
  const de=before.description_de.replace('Der physische Schadensbonus von Weisheit des Salamanders gilt; deren Mana-Rabatt für Feuerangriffe gilt nicht.','Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten.').replace('Weisheit des Salamanders erhöht den physischen Schaden, gibt diesem Erdangriff aber keinen Mana-Rabatt.','Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten.').replace('Weisheit des Salamanders erhöht beide physischen Schadensphasen, gewährt aber keinen Feuer-Mana-Rabatt.','Weisheit des Salamanders erhöht beide physischen Schadensphasen und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten.');
  const en=before.description_eng.replace('Wisdom of the Salamander physical damage bonus applies; its fire Mana discount does not.','Wisdom of the Salamander boosts physical damage and its general skill Mana discount applies.').replace('Wisdom of the Salamander boosts physical damage but does not discount Mana for this earth skill.','Wisdom of the Salamander boosts physical damage and its general skill Mana discount applies.').replace('Wisdom of the Salamander boosts both physical phases but grants no fire Mana discount.','Wisdom of the Salamander boosts both physical phases and its general skill Mana discount applies.');
  const set={description_de:de,description_eng:en};await new SkillDataModel({...before,...set}).validate();await col.updateOne({_id:before._id},{$set:set});const skill=norm(await col.findOne({_id:before._id}));assert.deepEqual(skill,{...norm(before),...set});report.changes.push({before:norm(before),skill});
 }
 await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');console.log('Updated three earth skill descriptions to reflect general Mana discount.');
}catch(e){console.error('Earth description sync failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}
