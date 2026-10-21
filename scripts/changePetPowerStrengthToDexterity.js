import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:150});if(!s)throw Error('Missing skill');
 const {str:oldStrength,...scaling}=s.statScaling;
 const {str:oldTarget,...targets}=s.statBonusTargets;
 const set={dex:5,statScaling:{...scaling,dex:oldStrength},statBonusTargets:{...targets,dex:oldTarget},description_de:s.description_de.replace('+5 Stärke','+5 Geschick')+' Geschick verbessert die Genauigkeit der Begleiter; beim Seelenbegleiter erhöht es zusätzlich den physischen Fernkampfangriff mit 1,8 P-Angriff je Punkt. Die normale Stärke-Verwertung regulärer Pets wird dadurch nicht geändert.',description_eng:s.description_eng.replace('+5 strength','+5 dexterity')+' Dexterity improves companion accuracy; for the spirit companion it also grants 1.8 physical ranged attack per point. Normal strength conversion for regular pets is unchanged.'};
 const candidate={...s,...set};delete candidate.str;await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/pet-power-dexterity-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:150},{$set:set,$unset:{str:''}});
 const saved=await SkillDataModel.collection.findOne({nr:150});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');if(saved.str!==undefined)throw Error('Strength still set');
 console.log('Verified Power of the Pet: DEX/VIT/WIS5–50; no STR grant.');
}catch(e){console.error(`Pet buff update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
