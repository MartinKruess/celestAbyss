import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const definitions={43:{dex:1,agi:1},44:{int:1,wis:1,faith:1,vic:1},45:{health:50,vita:1,wis:1,agi:1}};
const labels={dex:'Dexterity',agi:'Agility',int:'Intelligence',wis:'Wisdom',faith:'Faith',vic:'Victim',health:'Health',vita:'Vitality'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:[43,44,45]}}).toArray();if(before.length!==3)throw Error('Missing skill');
await fs.writeFile('data/balancing/passive-expansions-before.json',JSON.stringify(before,null,2)+'\n');
const updates=[];
for(const original of before){
 const increments=definitions[original.nr];const statScaling={};
 for(const[k,increment]of Object.entries(increments)){if(!Number.isFinite(original[k]))throw Error('Missing base stat');const values=Array.from({length:9},(_,i)=>original[k]+i*increment);values.push(values[8]*2);statScaling[k]={type:'table',values};}
 const description_de='Permanenter passiver Bonus ohne Aktivierungskosten. Bis Skilllevel 9 steigt jeder Attributbonus je weiterer Stufe um 1'+(original.nr===45?', der direkte Lebensbonus zusätzlich um 50':'')+'. Auf Skilllevel 10 werden die Boni von Level 9 verdoppelt, ohne vorher einen weiteren normalen Zuwachs hinzuzufügen.';
 const description_eng='Permanent passive bonus with no activation cost. Up to skill level 9, each attribute bonus increases by 1 per additional level'+(original.nr===45?', and the direct Health bonus increases by 50':'')+'. At skill level 10, the level 9 bonuses are doubled without applying another normal increment first.';
 const set={category:'passive',dmgType:'passive',maxSkillLv:10,resourceCosts:[],statScaling,description_de,description_eng};
 const candidate={...original,...set};delete candidate.cd;delete candidate.dur;
 await new SkillDataModel(candidate).validate();updates.push({original,set});
}
for(const{original,set}of updates)await SkillDataModel.collection.updateOne({_id:original._id},{$set:set,$unset:{cd:'',dur:''}});
for(const{original,set}of updates){const after=await SkillDataModel.collection.findOne({_id:original._id});if(JSON.stringify(after.statScaling)!==JSON.stringify(set.statScaling))throw Error('Read-back mismatch');console.log(original.skillName_de+': '+Object.entries(set.statScaling).map(([k,v])=>`${labels[k]} ${v.values[0]}/${v.values[8]}/${v.values[9]}`).join(', '));}
}catch(e){console.error(`Expansion update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
