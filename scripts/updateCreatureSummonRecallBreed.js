import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const manaCost=[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:5}}];
const patches=[
{nr:136,set:{mana:5,cd:5,castTimeSeconds:1,resourceCosts:manaCost,description_de:'Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer.',description_eng:'Summons your companion after a 1 second cast time. Costs 5 Mana and has a 5 second cooldown. There is no subsequent effect duration.'},unset:{dur:''}},
{nr:137,set:{mana:5,cd:5,castTimeSeconds:0,resourceCosts:manaCost,description_de:'Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer.',description_eng:'Recalls your companion instantly. Costs 5 Mana and has a 5 second cooldown. No cast time or subsequent effect duration.'},unset:{dur:''}},
{nr:138,set:{maxSkillLv:3,resourceCosts:[],learningLimits:{defaultMaxLevel:1,classOverrides:{Abenteuer:3},status:'secondSpecialistPending'},effectsVersion:1,effects:[{key:'breedExperience',type:'experienceBonus',target:'companion',experienceSource:'playerExperience',value:0.1,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:0.1,perLevel:0.1},progressionStatus:'defined'}],description_de:'Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.',description_eng:'Allows your companion to gain experience and level up. It receives the same experience as you, plus 10 percent per learned skill level: 110 percent at level 1, 120 percent at level 2 and 130 percent at level 3. Permanently passive with no costs or cooldown. Standard classes can learn level 1, the Adventurer level 3; the second specialist class is still to be defined.'},unset:{cd:'',dur:''}},
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:patches.map(p=>p.nr)}}).toArray();if(before.length!==3)throw Error('Missing skills');
for(const p of patches){const s={...before.find(s=>s.nr===p.nr),...p.set};for(const k of Object.keys(p.unset))delete s[k];await new SkillDataModel(s).validate();}
await fs.writeFile('data/balancing/summon-recall-breed-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of patches)await SkillDataModel.collection.updateOne({_id:before.find(s=>s.nr===p.nr)._id},{$set:p.set,$unset:p.unset});
for(const p of patches){const s=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(s[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Summon/Recall verified: Mana 5, cooldown 5 s, cast 1/0 s. Breed grants companion 110/120/130 percent player XP with learning caps 1 and Adventurer 3.');
}catch(e){console.error(`Creature skills update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
