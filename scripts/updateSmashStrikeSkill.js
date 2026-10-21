import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={mana:54,castTimeSeconds:0.4,hasLingeringDamage:false,statScaling:{patk:{type:'linear',base:111,perLevel:73}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:54,perLevel:43}}]};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:96});if(!before)throw Error('Missing skill');
set.description_de=before.description_de+' Der physische Grundangriffswert steigt von 111 um 73 je weiterer Stufe auf 768 auf Level 10. Die Mana-Kosten steigen von 54 um 43 je weiterer Stufe auf 441. Die Cast Time beträgt 0,4 Sekunden. Keine anhaltende Schadensdauer. Genaue Zielwahl und Trefferfläche sind noch zu prüfen.';
set.description_eng=before.description_eng+' Physical base attack increases from 111 by 73 per additional level to 768 at level 10. Mana cost increases from 54 by 43 per additional level to 441. Cast time is 0.4 seconds. No lingering damage duration. Exact targeting and hit area remain to be reviewed.';
const candidate={...before,...set};delete candidate.dur;await new SkillDataModel(candidate).validate();
await fs.writeFile('data/balancing/smash-strike-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Smash Strike verified: 111 to 768, Mana 54 to 441, cast 0.4 s, no lingering damage. Geometry remains undecided.');
}catch(e){console.error(`Smash Strike update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
