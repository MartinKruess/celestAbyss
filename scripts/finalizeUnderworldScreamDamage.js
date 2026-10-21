import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:99});
 if(!before)throw Error('Missing skill');
 const set={statScaling:{matk:{type:'table',values:[666,666,666]}},attackExecution:{...before.attackExecution,additionalDamageFromSacrificedHealth:{type:'table',values:[0,0.5,1.25]}},description_de:before.description_de.replace('Schadensentwurf: Stufe 1 666, Stufe 2 50 Prozent und Stufe 3 125 Prozent des tatsächlich geopferten Lebens; ob diese Anteile die 666 ersetzen oder zusätzlich dazu kommen, wird gerade geklärt.','Magischer Skill-Schaden: auf allen Stufen 666 Grundschaden, auf Stufe 2 zusätzlich 50 Prozent und auf Stufe 3 zusätzlich 125 Prozent des tatsächlich für diesen Skill geopferten Lebens. Die Lebensanteile ersetzen die 666 nicht. Bei 8000 Max-HP werden 2000 HP geopfert; Skill-Schaden auf Stufe 1/2/3: 666/1666/3166 vor zusätzlichen Charakter- und Schadensberechnungen.'),description_eng:before.description_eng.replace('Damage proposal: level 1 666; level 2 50 percent and level 3 125 percent of actual health sacrificed; whether these replace or add to 666 is awaiting clarification.','Magical skill damage: 666 base damage at all levels, plus 50 percent of actual health sacrificed for this skill at level 2 or 125 percent at level 3. Health-based damage adds to, rather than replaces, 666. At 8000 maximum HP, sacrifices 2000 HP and yields 666/1666/3166 skill damage at levels 1/2/3 before additional character and damage calculations.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/underworld-scream-damage-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:99},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:99});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Underworld Scream damage verified: 666 plus0/50/125% health sacrificed.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
