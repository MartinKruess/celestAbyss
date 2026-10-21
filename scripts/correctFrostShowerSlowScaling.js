import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:239});
 if(before?.skillName_de!=='Frostschauer')throw Error('Unexpected skill');
 const effects=before.effects.map(e=>{
  if(e.key!=='frost-shower-movement-slow')return e;
  const corrected={...e,value:-0.01,valueAtMaxLevel:-0.1,valueScaling:{type:'linear',base:-0.01,perLevel:-0.01},progressionStatus:'defined'};
  delete corrected.minimumSkillLevel;
  return corrected;
 });
 const set={effects,description_de:before.description_de.replace(/ Auf Maximalstufe senkt jeder erfolgreiche Frostschauer-Treffer[\s\S]*$/,' Jeder erfolgreiche Frostschauer-Treffer senkt die Bewegungsgeschwindigkeit auf Stufe 1 um 1 Prozent und je weiterer Stufe um einen zusätzlichen Prozentpunkt, auf Stufe 10 insgesamt um 10 Prozent. Dauer jeweils 3 Sekunden. Jeder weitere Treffer erneuert die Dauer auf 3 Sekunden; die Stärke stapelt sich nicht. Der Debuff bleibt bis zu 3 Sekunden nach dem letzten Treffer bestehen und endet nicht automatisch mit dem Feld.'),description_eng:before.description_eng.replace(/ At maximum level, every successful Frost Shower hit[\s\S]*$/,' Each successful Frost Shower hit reduces movement speed by 1 percent at level 1, increasing by one percentage point per additional level to 10 percent at level 10. Duration is 3 seconds at every level. Each subsequent hit refreshes the duration to 3 seconds without stacking magnitude. The debuff persists up to 3 seconds after the last hit and does not automatically end with the field.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/frost-shower-slow-correction-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:239},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:239});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Frost Shower corrected: movement speed -1% to -10%, 3s refreshed per hit on all levels.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
