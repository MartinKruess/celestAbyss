import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={cd:360,castTimeSeconds:1.2,hasLingeringDamage:false,statScaling:{matk:{type:'table',values:[383,383,383,383,383,383,383,383,383,383]}},damageFromResourceCost:{resource:'mana',basis:'actualAmountSpent',multiplier:0.3,damageType:'magical'},resourceCosts:[{resource:'mana',reference:'currentMana',unit:'fraction',scaling:{type:'fixed',base:1}}],description_de:'Opfert dein gesamtes aktuell verfügbares Mana für eine gewaltige einmalige Explosion. Die Kosten betragen 100 Prozent des aktuellen Manas. Der magische Grundschaden beträgt auf allen Skillstufen 383. Zusätzlich verursacht die Explosion Schaden in Höhe von 30 Prozent des tatsächlich geopferten Manas. Bei 10000 geopfertem Mana ergibt das 3383 Schaden vor weiteren Angriffs- und Verteidigungsberechnungen. Castzeit 1,2 Sekunden, Cooldown 360 Sekunden. Kein Schaden über Zeit und keine anhaltende Wirkungsdauer. Animationsdauer und Trefferbereich werden später festgelegt.',description_eng:'Sacrifices all currently available Mana for a powerful single explosion. Costs 100 percent of current Mana. Base magical damage is 383 at every skill level. The explosion additionally deals damage equal to 30 percent of the Mana actually sacrificed. Spending 10000 Mana gives 3383 damage before other attack and defense calculations. Cast time is 1.2 seconds, cooldown is 360 seconds. No damage over time or lasting effect. Animation duration and hit area will be defined later.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:219});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();await fs.writeFile('data/balancing/mana-explosion-resource-scaling-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set,$unset:{mana:'',dur:''}});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
console.log('Mana Explosion verified: constant 383 base damage plus 30 percent of actual mana spent, all current mana, cast 1.2 s, cooldown 360 s.');
}catch(e){console.error(`Eternal Victor update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
