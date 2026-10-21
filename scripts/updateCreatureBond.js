import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const effects=['str','vita','int','wis'].map(stat=>({key:'bond_'+stat,type:'statModifier',target:'companion',stat,value:10,unit:'flat',durationSeconds:0,valueScaling:{type:'linear',base:10,perLevel:5},progressionStatus:'defined'}));
const set={maxSkillLv:3,category:'creature',dmgType:'passive',resourceCosts:[],effectsVersion:1,effects,learningLimits:{defaultMaxLevel:1,classOverrides:{Abenteuer:3},status:'secondSpecialistPending'},description_de:'Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.',description_eng:'The bond permanently strengthens your companion. At skill level 1 it gains 10 Strength, Vitality, Intelligence and Wisdom each. Each additional level adds 5 to each attribute, reaching 20 each at level 3. The player does not receive these bonuses. Standard classes can learn level 1; the Adventurer can learn level 3. The second specialist class is still to be defined. Bond has no activation costs or cooldown.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:134});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();
await fs.writeFile('data/balancing/bond-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await fs.writeFile('data/balancing/creature-specialization-review.json',JSON.stringify({bond:{defaultCap:1,adventurerCap:3,secondSpecialist:'pending; Hunter candidate'},taming:{intendedDefaultCap:1,adventurerCap:'3 or 5 pending',secondSpecialist:'pending; Hunter candidate',note:'Taming class-specific limits have not been changed yet'},runtime:'Declarative limits and bonuses only; Dedicated Server enforcement pending'},null,2)+'\n');
console.log('Bond verified: companion-only four attribute bonuses 10/15/20. Default learning cap 1, Adventurer 3, second specialist pending.');
}catch(e){console.error(`Bond update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
