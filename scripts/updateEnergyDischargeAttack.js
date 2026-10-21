import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={castTimeSeconds:0.4,statScaling:{patk:{type:'linear',base:787,perLevel:134}},attackExecution:{hitCount:1,damageValueScope:'perHit',hitTimingStatus:'pending'},attackArea:{shape:'circle',center:'caster',radiusMeters:5,target:'enemiesInArea',evaluation:'atImpact',timingStatus:'pending'}};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:35});if(!before)throw Error('Missing skill');
set.description_de='Entlädt nach 0,4 Sekunden Cast Time Energie und trifft Gegner in einem kreisförmigen Bereich mit 5 Metern Radius um dich einmal physisch. Der Grundangriffswert steigt von 787 um 134 je weiterer Skillstufe auf 1993 auf Level 10. Die Lebens-Kosten sinken von 30 Prozent des maximalen Lebens um 1 Prozentpunkt je weiterer Stufe auf 21 Prozent. Bei unzureichendem Leben ist der Skill nicht aktivierbar. Der Cooldown bleibt bei 180 Sekunden. Keine anhaltende Effektdauer; der genaue Trefferzeitpunkt wird im Spiel festgelegt.';
set.description_eng='After a 0.4 second cast time, discharges energy and hits enemies once physically in a circular 5 meter radius around you. Base attack increases from 787 by 134 per additional skill level to 1993 at level 10. Health cost decreases from 30 percent of maximum Health by 1 percentage point per additional level to 21 percent. The skill cannot be activated with insufficient Health. Cooldown remains 180 seconds. No lingering effect duration; exact hit timing will be defined in game.';
const candidate={...before,...set};delete candidate.dur;await new SkillDataModel(candidate).validate();
await fs.writeFile('data/balancing/energy-discharge-attack-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
if(JSON.stringify(after.resourceCosts)!==JSON.stringify(before.resourceCosts))throw Error('Health cost changed');
console.log('Energy Discharge verified: attack 787 to 1993, cast 0.4 s, one hit in 5 m radius. Existing health costs and cooldown preserved.');
}catch(e){console.error(`Energy Discharge update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
