import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={maxSkillLv:10,activation:'manual',cd:8,dur:2.5,cooldownScaling:{type:'linear',base:8,perLevel:-4/9},durationScaling:{type:'linear',base:2.5,perLevel:-0.5/9},movement:{type:'doubleJump',heightMeters:1.5,heightStatus:'provisional',heightScaling:{type:'linear',base:1.5,perLevel:0.5/9}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:0}},{resource:'stamina',reference:'maxStamina',unit:'fraction',scaling:{type:'linear',base:0.6,perLevel:-0.35/9}}],description_de:'Ein zusätzlicher Sprung lässt dich höher springen und erhöhte Stellen erreichen. Die vorläufige Sprunghöhe steigt von 1,50 auf 2,00 Meter. Die Ausdauerkosten sinken von 60 auf 25 Prozent, der Cooldown von 8 auf 4 Sekunden und die Bewegungsdauer von 2,5 auf 2 Sekunden. Die Bewegung wird später im Spiel geprüft.',description_eng:'An additional jump lets you jump higher and reach elevated locations. Provisional jump height increases from 1.50 to 2.00 meters. Stamina cost decreases from 60 to 25 percent, cooldown from 8 to 4 seconds, and movement duration from 2.5 to 2 seconds. Movement will be verified in game.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:25});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...changes}).validate();
await fs.writeFile('data/balancing/double-jump-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:changes});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(changes))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await fs.writeFile('data/balancing/jump-movement-notes.json',JSON.stringify({normalJump:{allClasses:true,approximateHeightMeters:1,status:'provisionalGameplayNote'},doubleJump:{classes:after.charClass,heightAtMaxLevelMeters:2,alternativeHeightMeters:2.2,status:'heightAndDurationRequireInGameVerification',heightInterpretation:'Target overall jump height; exact vertical trajectory pending'},levelInterpolation:'Linear provisional distribution across nine improvements'},null,2)+'\n');
console.log('Double Jump saved and verified; Hunter, Archer and Adventure assignments unchanged. Heights and movement timing remain provisional.');
}catch(e){console.error(`Double Jump update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
