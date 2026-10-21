import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:141});if(!before||before.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={str:2,vita:2,wis:2,statScaling:{...before.statScaling,str:{type:'table',values:[2,4,4,4,4,4,4,4,4,4]},vita:{type:'table',values:[2,2,4,6,8,10,12,14,16,16]},wis:{type:'table',values:[2,2,4,6,8,10,12,14,16,16]}},description_de:'Permanenter passiver Skill mit 10 Stufen. Stufe 1 gewährt jeweils +2 Stärke, Vita, Willenskraft und Schildblock. Auf Stufe 2 steigt ausschließlich Stärke auf +4 und bleibt danach konstant. Vita und Willenskraft bleiben auf Stufe 2 bei +2, steigen von Stufe 3 bis 9 jeweils um +2 auf +16 und bleiben auf Stufe 10 bei +16. Der Schildblock steigt unverändert um +2 je gelerntem Skilllevel bis +20 auf Stufe 10. Endboni: +4 Stärke, +16 Vita, +16 Willenskraft, +20 Schildblock. Block ist ein Punktewert, keine Prozentangabe. Keine Aktivierungskosten, Castzeit oder Cooldown.',description_eng:'Permanent passive with 10 levels. Level 1 grants 2 Strength, Vitality, Wisdom and shield Block rating. Level 2 raises Strength alone to 4, remaining constant afterwards. Vitality and Wisdom stay at 2 on level 2, increase by 2 on each level from 3 through 9 to 16, and remain at 16 on level 10. Shield Block continues to increase by 2 per learned level, reaching 20. Final bonuses: 4 Strength, 16 Vitality, 16 Wisdom and 20 shield Block. No activation costs, cast time or cooldown.'};
 await new SkillDataModel({...before,...set}).validate();
 try{await fs.writeFile('data/balancing/iron-will-strength-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 await SkillDataModel.collection.updateOne({nr:141},{$set:set});const saved=await SkillDataModel.collection.findOne({nr:141});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Iron Will verified: final Strength 4, Vitality 16, Wisdom 16, shield Block 20; confirmed table progression preserved.');
}catch(e){console.error(`Iron Will update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
