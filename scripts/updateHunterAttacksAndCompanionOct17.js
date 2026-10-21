import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={37:{base:101,perLevel:42},53:{base:37,perLevel:18},63:{base:52,perLevel:23},121:{base:257,perLevel:72}};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[37,53,63,121,226]}}).toArray();if(before.length!==5)throw Error('Missing skill');
 const plans=before.map(s=>{
  if(s.nr===226){
   const de=' Zusätzlich besitzt der Begleiter 120 feste P-Abwehr und 120 feste M-Abwehr. Zusätzlich zu seinen eigenen Angriffswerten erhält er live 2 % des aktuellen P-Angriffs und 2 % der aktuellen P-Abwehr seines Meisters sowie 1 % des aktuellen M-Angriffs und 1 % der aktuellen M-Abwehr seines Meisters. Buffs und Debuffs des Meisters verändern diese Anteile unmittelbar.';
   const en=' The companion additionally has 120 flat physical defense and 120 flat magical defense. In addition to its own attack values, it inherits live 2% of its master\'s current physical attack and physical defense, and 1% of current magical attack and magical defense. Master buffs and debuffs immediately affect these contributions.';
   return {s,set:{pdef:120,mdef:120,statScaling:{...s.statScaling,pdef:{type:'linear',base:120,perLevel:0},mdef:{type:'linear',base:120,perLevel:0}},summonedCreatureSettings:{...s.summonedCreatureSettings,physicalAttackFractionOfCaster:0.02,physicalDefenseFractionOfCasterPhysicalDefense:0.02,magicalAttackFractionOfCaster:0.01,magicalDefenseFractionOfCasterMagicalDefense:0.01,statSampling:'liveBeforeSummonHealthPenalty',defenseScalingStatus:'defined'},description_de:s.description_de+de,description_eng:s.description_eng+en}};
  }
  const c=changes[s.nr],old=s.statScaling.patk,oldEnd=old.base+old.perLevel*(s.maxSkillLv-1),end=c.base+c.perLevel*(s.maxSkillLv-1);
  let de=s.description_de,en=s.description_eng;
  if(s.nr===37){de=de.replace('37 Grundschaden','42 Grundschaden').replaceAll('434','479');en=en.replace('37 base damage','42 base damage').replaceAll('434','479');}
  if(s.nr===53){de=de.replace('plus 11 je','plus 18 je').replace('136 insgesamt','199 insgesamt');en=en.replace('by 11 per','by 18 per').replace('to 136 total','to 199 total');}
  if(s.nr===63){de=de.replace('plus 13 je','plus 23 je').replace('bis zu 104.','bis zu 144.');en=en.replace('plus 13 per','plus 23 per').replace('to 104.','to 144.');}
  if(s.nr===121){de=de.replace('111 auf Stufe 1','257 auf Stufe 1').replace('1479','1625');en=en.replace('111 at level 1','257 at level 1').replace('1479','1625');}
  if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');
  return {s,set:{patk:c.base,statScaling:{...s.statScaling,patk:{type:'linear',...c}},description_de:de,description_eng:en}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/hunter-attack-companion-oct17-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified five skill updates: arrow curves and live companion attack/defense inheritance.');
}catch(e){console.error(`Hunter update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}

