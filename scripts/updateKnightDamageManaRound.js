import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
const changes=[{nr:55,base:81,step:45},{nr:19,base:97,step:46},{nr:40,base:187,step:120},{nr:95,base:272,step:65},{nr:23,base:280,step:194}];
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,updates=[];
 for(const change of changes){
  const before=await collection.findOne({nr:change.nr});
  if(before.charClass.some(c=>!['Knife','Templar'].includes(c)))throw Error('Unexpected shared assignment');
  const max=change.base+(before.maxSkillLv-1)*change.step,manaBase=Math.round(change.base*.25),manaStep=Math.round(change.step*.25),manaMax=manaBase+(before.maxSkillLv-1)*manaStep;
  const resourceCosts=structuredClone(before.resourceCosts);resourceCosts.find(c=>c.resource==='mana').scaling={type:'linear',base:manaBase,perLevel:manaStep};
  const damageDE=`Physischer Skill-Grundschaden ${change.base} auf Stufe 1, +${change.step} je weiterer Stufe, maximal ${max} auf Stufe ${before.maxSkillLv}.`;
  const costDE=`Mana-Kosten ${manaBase} auf Stufe 1, +${manaStep} je weiterer Stufe, maximal ${manaMax} auf Stufe ${before.maxSkillLv}.`;
  const patterns={
   55:/einmalig physischen Grundschaden von 81 auf Stufe 1, steigend gemäß ganzzahliger Stufentabelle auf 372 auf Stufe 10\./,
   19:/Der physische Grundschaden startet bei 97 und steigt um 33 je weiterer Stufe auf 394 auf Stufe 10\./,
   40:/187 Skill-Grundschaden auf Stufe 1, plus 83 je weiterer Stufe, bis zu 934 auf Stufe 10\./,
   95:/einmalig physischen Grundschaden von 272 auf Stufe 1, steigend gemäß ganzzahliger Stufentabelle auf 1083 auf Stufe 15\./,
   23:/Der physische Grundschaden steigt von 280 auf Stufe 1 um 90 je weiterer Stufe auf 1540 auf Stufe 15\./};
  if(!patterns[change.nr].test(before.description_de))throw Error('Unexpected description');
  let description_de=before.description_de.replace(patterns[change.nr],change.nr===55||change.nr===95?`einmalig physischen Schaden. ${damageDE}`:change.nr===40?`einmaliger Treffer. ${damageDE}`:damageDE).replace(/Mana-Kosten[^.]*\./,costDE);
  // Preserve the full old English effect description while replacing its numeric damage and cost sentences.
  let description_eng=before.description_eng
   .replace(/187 base damage at level 1 plus 83 per additional level, reaching 934 at level 10/,'187 base damage at level 1 plus 120 per additional level, reaching 1267 at level 10')
   .replace(/[^.!?]*(?:physical (?:skill )?base damage|physical base attack|physical damage)[^.!?]*\./gi,'')
   .replace(/Mana cost[s]?[^.]*\./gi,'');
  description_eng+=` Physical skill base damage ${change.base} at level 1, +${change.step} per additional level, maximum ${max} at level ${before.maxSkillLv}. Mana cost ${manaBase} +${manaStep} per additional level, maximum ${manaMax}. Current physical attack is added once per target hit. Existing effects, cooldown and cast time unchanged.`;
  const set={patk:change.base,statScaling:{...before.statScaling,patk:{type:'linear',base:change.base,perLevel:change.step}},mana:manaBase,resourceCosts,description_de,description_eng};
  await new SkillDataModel({...before,...set}).validate();updates.push({before,set,max,manaMax});
 }
 const dir='data/balancing/history/before-knight-damage-mana-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});
 await fs.writeFile(dir+'/skills-before.json',JSON.stringify(updates.map(x=>x.before),null,2)+'\n',{flag:'wx'});
 for(const path of ['data/balancing/all-class-timed-damage.json','data/balancing/all-class-damage-rotations.json'])await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
 for(const {before,set,max,manaMax} of updates){await collection.updateOne({nr:before.nr},{$set:set});if(!isDeepStrictEqual(await collection.findOne({nr:before.nr}),{...before,...set}))throw Error('Read-back mismatch');console.log(`${before.skillName_de}: ${set.patk} +${set.statScaling.patk.perLevel} -> ${max}; Mana ${set.mana} +${set.resourceCosts.find(c=>c.resource==='mana').scaling.perLevel} -> ${manaMax}`);}
}catch(error){console.error('Knight update failed: '+error.name);if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
