import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={cd:360,castTimeSeconds:1.2,hasLingeringDamage:false,statScaling:{matk:{type:'linear',base:383,perLevel:383}},resourceCosts:[{resource:'mana',reference:'currentMana',unit:'fraction',scaling:{type:'fixed',base:1}}],description_de:'Opfert dein gesamtes aktuell verfügbares Mana für eine gewaltige einmalige Explosion. Die Kosten betragen 100 Prozent des aktuellen Manas. Der magische Grundangriff beträgt 383 je gelerntem Skilllevel, bis zu 3830 auf Stufe 10. Castzeit 1,2 Sekunden, Cooldown 360 Sekunden. Kein Schaden über Zeit und keine anhaltende Wirkungsdauer. Eine zusätzliche Schadensabhängigkeit von der geopferten Manamenge aus der bisherigen Beschreibung ist noch nicht berechnet. Animationsdauer und Trefferbereich werden später festgelegt.',description_eng:'Sacrifices all currently available Mana for a powerful single explosion. Costs 100 percent of current Mana. Base magical attack is 383 per learned skill level, reaching 3830 at level 10. Cast time is 1.2 seconds, cooldown is 360 seconds. No damage over time or lasting effect. Additional damage scaling with the sacrificed Mana amount from the previous description has not yet been calculated. Animation duration and hit area will be defined later.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:219});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/mana-explosion-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{mana:'',dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Mana Explosion verified: 383 to 3830 damage, all current mana, cast 1.2 s, cooldown 360 s.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
