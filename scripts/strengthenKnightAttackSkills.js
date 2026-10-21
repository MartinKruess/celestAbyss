import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[19,23,40,55,77,95]}}).toArray();if(before.length!==6)throw Error('Missing attack');
 const plans=before.map(s=>{
  const set={};
  if(s.nr===77){set.statScaling={...s.statScaling,patk:{type:'linear',base:73,perLevel:(479-73)/9}};set.description_de=s.description_de.replace('steigt von 73 um 34 je weiterer Stufe auf 379 auf Stufe 10','steigt gleichmäßig von 73 auf Stufe 1 auf 479 auf Stufe 10');set.description_eng=s.description_eng.replace('increases from 73 by 34 per additional level to 379 at level 10','increases evenly from 73 at level 1 to 479 at level 10');}
  if(s.nr===95){set.patk=272;set.statScaling={...s.statScaling,patk:{...s.statScaling.patk,base:272}};set.description_de=s.description_de.replace('von 222 auf Stufe 1, plus 57 je weiterer Stufe auf 1020 auf Stufe 15','von 272 auf Stufe 1, plus 57 je weiterer Stufe auf 1070 auf Stufe 15');set.description_eng=s.description_eng.replace('starting at 222 and increasing by 57 per additional level to 1020 at level 15','starting at 272 and increasing by 57 per additional level to 1070 at level 15');}
  if(s.nr===23){set.patk=280;set.statScaling={...s.statScaling,patk:{...s.statScaling.patk,base:280}};set.description_de=s.description_de.replace('von 160 um 40 je weiterer Stufe auf 720 auf Stufe 15','von 280 um 40 je weiterer Stufe auf 840 auf Stufe 15');set.description_eng=s.description_eng.replace('from 160 by 40 per additional level to 720 at level 15','from 280 by 40 per additional level to 840 at level 15');}
  if([19,55].includes(s.nr)){
   set.effects=[...(s.effects??[]).filter(e=>e.key!=='breaker-flat-threat'),{key:'breaker-flat-threat',type:'threatGain',target:'enemy',value:500,unit:'flat',durationSeconds:0,applicationTiming:'onActivation',affectedByThreatMultiplier:false}];
   const de=' Bei Anwendung werden zusätzlich einmalig 500 feste Aggropunkte gegen das Ziel erzeugt, nach dem schadensbezogenen Aggro-Multiplikator; dieser feste Bonus wird nicht erneut multipliziert.';
   const en=' On activation adds 500 flat threat toward the target once, after damage-based threat multiplication; this fixed bonus is not multiplied again.';
   set.description_de=s.description_de.replace(de,'')+de;set.description_eng=s.description_eng.replace(en,'')+en;
  }
  if(s.nr===40){set.patk=187;set.statScaling={...s.statScaling,patk:{type:'linear',base:187,perLevel:83}};set.attackExecution={...s.attackExecution,hitCount:1,damageValueScope:'perHit'};set.hasLingeringDamage=false;
   set.description_de=s.description_de.replace('Dieser Wert ist ein Buff und kein eigener Schadensimpuls des Feldes.','Dieser Gruppenbonus ist vom Initialtreffer getrennt.').replace(/^Erschafft ein heiliges Feld, das deine Aggro auf Gegner erhöht\./,'Erschafft ein heiliges Feld, das deine Aggro auf Gegner erhöht. Beim Setzen trifft es betroffene Gegner einmal physisch: 187 Skill-Grundschaden auf Stufe 1, plus 83 je weiterer Stufe, bis zu 934 auf Stufe 10. Kein zusätzlicher Schaden über Zeit.');
   set.description_eng=s.description_eng.replace('This is a buff, not a direct damage pulse from the field.','This group bonus is separate from the initial hit.').replace('Creates a sacred field that increases your threat toward enemies;','Creates a sacred field with a single physical hit on placement: 187 base damage at level 1 plus 83 per additional level, reaching 934 at level 10. No damage over time. Increases threat toward enemies;');
  }
  return {s,set};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 try{await fs.writeFile('data/balancing/knight-attack-increase-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified six attack changes: Mighty Strike max479 (shared), Shield Storm max1070, Thundering Lance max840, field physical187+83/level, both breakers +500 flat threat.');
}catch(e){console.error(`Knight attack update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
