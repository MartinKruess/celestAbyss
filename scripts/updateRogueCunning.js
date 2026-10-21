import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const linear=(base,perLevel)=>({type:'linear',base,perLevel});
const set={mana:44,castTimeSeconds:0.4,statScaling:{luck:linear(1,0.5),amb:linear(3,1)},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:linear(44,17)}],description_de:'Erhöht für 300 Sekunden dein Glück und Ambush. Auf Stufe 1 erhältst du 1 Glück und 3 Ambush. Jede weitere Stufe gewährt zusätzlich 0,5 Glück und 1 Ambush, bis zu 5,5 Glück und 12 Ambush auf Stufe 10. Die Mana-Kosten beginnen bei 44 und steigen um 17 je weiterer Stufe auf 197. Castzeit 0,4 Sekunden, Cooldown 60 Sekunden.',description_eng:'Increases your Luck and Ambush for 300 seconds. Level 1 grants 1 Luck and 3 Ambush. Each additional level adds 0.5 Luck and 1 Ambush, reaching 5.5 Luck and 12 Ambush at level 10. Mana cost starts at 44 and increases by 17 per additional level to 197. Cast time is 0.4 seconds and cooldown is 60 seconds.'};
try {
  if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const before=await SkillDataModel.collection.findOne({nr:146});
  if(!before)throw Error('Skill missing');
  await new SkillDataModel({...before,...set}).validate();
  await fs.writeFile('data/balancing/rogue-cunning-before.json',JSON.stringify(before,null,2)+'\n');
  await SkillDataModel.collection.updateOne({nr:146},{$set:set});
  const after=await SkillDataModel.collection.findOne({nr:146});
  for(const [k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
  console.log('List des Schurken saved and verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
