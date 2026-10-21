import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[197,198,199]}}).toArray();
 if(before.length!==3)throw Error('Missing skills');
 const attributes=['str','vita','int','wis'],combat=['patk','matk','pdef','mdef','manaRegen'];
 const stats=Object.fromEntries([...attributes.map(k=>[k,2]),...combat.map(k=>[k,18])]);
 const statScaling=Object.fromEntries(Object.entries(stats).map(([k,v])=>[k,{type:'linear',base:v,perLevel:v}]));
 const merged={...stats,skillName_de:'Aurora-Segen',skillName_eng:"Aurora's Blessing",statScaling,statBonusUnits:Object.fromEntries(Object.keys(stats).map(k=>[k,'flat'])),description_de:'Vereint die bisherigen Segen des Angriffes, der Mentalität und der Verteidigung in einem langfristigen Gruppenbuff. Je gelerntem Skilllevel erhalten alle Mitglieder der eigenen Gruppe +2 Stärke, +2 Vitalität, +2 Intelligenz, +2 Wisdom, +18 P-Angriff, +18 M-Angriff, +18 P-Defense, +18 M-Defense und +18 direkte MP-Regeneration je Regenerationstick. Auf Stufe 10 jeweils +20 Attribute und +180 der direkten Kampf- und Regenerationswerte. Dauer 1800 Sekunden, Cooldown 60 Sekunden. Zehn lernbare Stufen, ein SP je Stufe. Mana-Kosten und Castzeit sind noch festzulegen. Die bisherigen separaten Mentalitäts- und Verteidigungssegen sind dem Heiler nicht mehr zugeordnet und werden nicht zusätzlich gestapelt.',description_eng:'Combines the former Blessings of Attack, Mentality and Defense into one long-duration group buff. Each learned skill level grants own group members +2 Strength, Vitality, Intelligence and Wisdom, plus +18 physical attack, magical attack, physical defense, magical defense and direct Mana regeneration per regeneration tick. At level 10: +20 to each listed attribute and +180 to each direct combat/regeneration value. Duration 1800 seconds, cooldown 60 seconds. Ten learnable levels, one SP per level. Mana costs and cast time remain undefined. Former separate Mentality and Defense blessings are no longer assigned to the Healer and do not stack in addition.'};
 const updates=[{nr:197,set:merged},...[198,199].map(nr=>({nr,set:{charClass:before.find(s=>s.nr===nr).charClass.filter(c=>!['Healer','Priest'].includes(c))}}))];
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/aurora-blessings-merge-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Aurora-Segen saved at nr 197; nr 198/199 retained without Healer assignment.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
