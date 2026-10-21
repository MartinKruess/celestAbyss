import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const linear=v=>({type:'linear',base:v,perLevel:v});
const patches=[
{nr:139,set:{vita:1,wis:1,pdef:4,mdef:4,category:'passive',dmgType:'passive',resourceCosts:[],statScaling:{vita:linear(1),wis:linear(1),pdef:linear(4),mdef:linear(4)},description_de:'Verbessert dauerhaft deine Zähigkeit. Je gelerntem Skilllevel erhältst du 1 Vitalität, 1 Willenskraft sowie jeweils 4 physische und magische Verteidigung. Auf Level 20 sind das 20 Vitalität, 20 Willenskraft und jeweils 80 Verteidigung. Keine Aktivierungskosten oder Cooldown.',description_eng:'Permanently improves resilience. Each learned skill level grants 1 Vitality, 1 Wisdom, and 4 physical and magical defense each. At level 20, this grants 20 Vitality, 20 Wisdom, and 80 of each defense. No activation costs or cooldown.'},unset:{cd:'',dur:''}},
{nr:144,set:{pdef:6,mdef:6,resourceCosts:[],statScaling:{pdef:linear(6),mdef:linear(6)},description_de:'Verbessert dauerhaft deine Rüstungsbeherrschung. Je gelerntem Skilllevel erhältst du jeweils 6 physische und magische Verteidigung, bis zu jeweils 60 auf Level 10. Keine Vitalitätsboni, Aktivierungskosten oder Cooldown.',description_eng:'Permanently improves armor proficiency. Each learned skill level grants 6 physical and magical defense each, up to 60 each at level 10. No Vitality bonus, activation costs or cooldown.'},unset:{vita:'',cd:'',dur:''}},
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:[139,144]}}).toArray();if(before.length!==2)throw Error('Missing training');
for(const p of patches){const s={...before.find(x=>x.nr===p.nr),...p.set};for(const k of Object.keys(p.unset))delete s[k];await new SkillDataModel(s).validate();}
await fs.writeFile('data/balancing/defensive-training-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of patches)await SkillDataModel.collection.updateOne({_id:before.find(x=>x.nr===p.nr)._id},{$set:p.set,$unset:p.unset});
for(const p of patches){const after=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Endurance Training: 1 Vita/Wisdom +4 both defenses per learned level, max 20. Armor Training: +6 both defenses per learned level, max 10, no Vita.');
}catch(e){console.error(`Defensive training update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
