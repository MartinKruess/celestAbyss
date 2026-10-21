import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={attackArea:{shape:'circle',center:'caster',radiusMeters:5,target:'enemiesInArea',evaluation:'atImpact',timingStatus:'pending'},effectsVersion:1,effects:[{key:'earthquakeSlow',type:'statModifier',target:'enemy',stat:'movementSpeed',value:-0.07,unit:'fraction',reference:'targetStat',durationSeconds:5,durationStatus:'defined',valueScaling:{type:'linear',base:-0.07,perLevel:-0.01},progressionStatus:'defined'}],description_de:'Erzeugt ein Erdbeben in einem kreisförmigen Bereich mit 5 Metern Radius um dich und trifft Gegner physisch und magisch. Verlangsamt getroffene Gegner für die bisher gespeicherte Dauer von 5 Sekunden: auf Level 1 um 7 Prozent, je weiterer Stufe um 1 Prozentpunkt mehr, bis zu 16 Prozent auf Level 10. Der physische Grundangriffswert steigt von 167 um 53 je weiterer Stufe auf 644, der magische von 35 um 25 auf 260. Die Mana-Kosten steigen von 87 um 42 je weiterer Stufe auf 465. Die Cast Time beträgt 0,1 Sekunden, der Cooldown bleibt zunächst bei 55 Sekunden.',description_eng:'Causes an earthquake in a circular 5 meter radius around you, dealing physical and magical damage to enemies. Slows affected enemies for the previously stored 5 second duration: 7 percent at level 1, increasing by 1 percentage point per additional level to 16 percent at level 10. Physical base attack increases from 167 by 53 per additional level to 644; magical base attack increases from 35 by 25 to 260. Mana cost increases from 87 by 42 per additional level to 465. Cast time is 0.1 seconds and cooldown remains provisionally 55 seconds.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:38});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/earthquake-slow-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Earthquake area and slow verified: 5 m radius, 7 to 16 percent slow, existing 5 second duration retained. Earthbreaker unchanged.');
}catch(e){console.error(`Earthquake slow update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
