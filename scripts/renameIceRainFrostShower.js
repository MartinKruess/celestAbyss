import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:239});
 if(!before)throw Error('Missing skill');
 const set={skillName_de:'Frostschauer',skillName_eng:'Frost Shower',description_de:before.description_de.replace('Arbeitstitel Eisregen. Erzeugt um das anvisierte Ziel ein Eisregenfeld mit 5 Metern Radius. Jede Sekunde werden bis zu drei Gegner innerhalb der Fläche getroffen.','Erzeugt einen eisigen Regen um das anvisierte Ziel, der jede Sekunde bis zu drei Gegner innerhalb eines Radius von 5 Metern trifft.'),description_eng:before.description_eng.replace('Working title Ice Rain. Creates an ice-rain field with a 5-meter radius around the selected target. Each second hits up to three enemies within the area.','Creates an icy rain around the selected target, hitting up to three enemies each second within a 5-meter radius.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/frost-shower-rename-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:239},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:239});
 for(const[k,v]of Object.entries(set))if(after[k]!==v)throw Error('Read-back mismatch');
 console.log('Frostschauer renamed and descriptions verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
