import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
  if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const before=await SkillDataModel.collection.findOne({nr:22});
  if(!before||before.skillName_de!=='Dolchtraining')throw Error('Unexpected skill');
  const scaling={...before.statScaling};
  scaling.str=scaling.amb??scaling.str;
  if(!scaling.str||scaling.str.base!==2||scaling.str.perLevel!==1)throw Error('Unexpected scaling');
  delete scaling.amb;
  const set={str:2,statScaling:scaling,
    description_de:'Verbessert dauerhaft deinen Umgang mit Dolchen. Auf Stufe 1 erhältst du 1 Agilität und 2 Stärke. Je weiterer Stufe kommen jeweils 1 hinzu, bis zu 10 Agilität und 11 Stärke auf Stufe 10. Der bisherige Ambush-Bonus wird durch Stärke ersetzt. Kein Schwerttraining. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.',
    description_eng:'Permanently improves dagger handling. Grants 1 Agility and 2 Strength at level 1, adding 1 to each per additional level, reaching 10 Agility and 11 Strength at level 10. Replaces the previous Ambush bonus with Strength. Does not train swords. No activation costs, cast time or cooldown.'};
  if(before.statBonusUnits){set.statBonusUnits={...before.statBonusUnits,str:before.statBonusUnits.amb??'flat'};delete set.statBonusUnits.amb;}
  const candidate={...before,...set};delete candidate.amb;
  await new SkillDataModel(candidate).validate();
  try{await fs.writeFile('data/balancing/dagger-training-strength-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
  await SkillDataModel.collection.updateOne({nr:22},{$set:set,$unset:{amb:''}});
  const saved=await SkillDataModel.collection.findOne({nr:22});
  if(saved.amb!==undefined||saved.statScaling.amb!==undefined)throw Error('Legacy Ambush retained');
  for(const [k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
  console.log('Dagger Training verified: Agility 1–10, Strength 2–11; Ambush removed. Other skills unchanged.');
}catch(e){console.error(`Dagger update failed (${e.name}); credentials omitted.`);process.exitCode=1;}
finally{await mongoose.disconnect();}
