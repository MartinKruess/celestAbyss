import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:239});
 if(before?.skillName_de!=='Frostschauer')throw Error('Unexpected skill');
 const set={effects:[...before.effects.filter(e=>e.key!=='frost-shower-movement-slow'),{key:'frost-shower-movement-slow',type:'statModifier',target:'enemy',stat:'movementSpeed',value:-0.5,unit:'fraction',minimumSkillLevel:10,valueAtMaxLevel:-0.5,progressionStatus:'pending',durationSeconds:3,applicationTrigger:'ownSkillHit',targetSkillNumber:239,maxStacksPerTarget:1,reapplicationPolicy:'refreshDuration'}],description_de:before.description_de+' Auf Maximalstufe senkt jeder erfolgreiche Frostschauer-Treffer die Bewegungsgeschwindigkeit des getroffenen Gegners um 50 Prozent für 3 Sekunden. Jeder weitere Treffer erneuert die Dauer auf 3 Sekunden; die Stärke stapelt sich nicht. Der Debuff bleibt bis zu 3 Sekunden nach dem letzten Treffer bestehen und endet nicht automatisch mit dem Feld. Startwert und Verteilung der Verlangsamung auf Stufen 1 bis 9 sind noch offen; technisch ist nur der bestätigte Effekt auf Stufe 10 freigeschaltet.',description_eng:before.description_eng+' At maximum level, every successful Frost Shower hit reduces the struck enemy’s movement speed by 50 percent for 3 seconds. Each subsequent hit refreshes the duration to 3 seconds without stacking magnitude. The debuff persists up to 3 seconds after the last hit and does not automatically end with the field. Starting strength and progression at levels 1–9 remain pending; only the confirmed level-10 effect is currently enabled in the definition.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/frost-shower-slow-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:239},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:239});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Frost Shower slow verified: level 10 -50% for 3s, refreshed per hit, no stacking; lower levels pending.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
