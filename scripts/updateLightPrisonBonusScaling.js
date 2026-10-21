import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:218});
 if(!before?.effects?.some(e=>e.key==='light-prison-incoming-light-bonus'))throw Error('Missing effect');
 const set={effects:before.effects.map(e=>e.key==='light-prison-incoming-light-bonus'?{...e,value:0.01,valueScaling:{type:'linear',base:0.01,perLevel:0.01}}:e),description_de:before.description_de.replace('Währenddessen erleidet der eingesperrte Gegner 3 Prozent mehr Schaden durch eingehende Lichtangriffe; dieser Bonus bleibt auf allen drei Skillstufen gleich und gilt nicht für ausgehende Angriffe des Ziels.','Währenddessen erleidet der eingesperrte Gegner auf Stufe 1/2/3 jeweils 1/2/3 Prozent mehr Schaden durch eingehende Lichtangriffe. Der Bonus gilt nicht für ausgehende Angriffe des Ziels.'),description_eng:before.description_eng.replace('While imprisoned, the target takes 3 percent more damage from incoming light attacks, fixed across all three skill levels; outgoing attacks by the target are unaffected.','While imprisoned, the target takes 1/2/3 percent more damage from incoming light attacks at skill levels 1/2/3 respectively; outgoing attacks by the target are unaffected.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/light-prison-bonus-scaling-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:218},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:218});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Light Prison incoming light bonus verified: 1/2/3 percent.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
