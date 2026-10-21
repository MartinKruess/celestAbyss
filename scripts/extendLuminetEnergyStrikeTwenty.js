import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {curveValue,skillValue} from '../services/rotationDamage.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:36}),fire=await col.findOne({nr:49});assert(before&&fire);
 const variant={...before.classCombatOverrides.luminet,maxSkillLv:20,matk:fire.matk,mana:fire.mana??16,cd:fire.cd,castTimeSeconds:fire.castTimeSeconds,statScaling:structuredClone(fire.statScaling),cooldownScaling:structuredClone(fire.cooldownScaling),resourceCosts:structuredClone(fire.resourceCosts),description_de:'Luminet-Spezialisierung von Energieschlag mit 20 lernbaren Stufen. Einmaliger magischer Schaden: 63 Grundschaden auf Stufe 1 und +29 je weiterer Stufe, bis 614 auf Stufe 20, zuzüglich M-Angriff. Mana 16 auf Stufe 1 und +7 je weiterer Stufe, bis 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Heiler und Druide behalten ihre eigene Variante und maximal Stufe 5.',description_eng:'Luminet specialization of Energy Strike with 20 learnable levels. Deals magical damage once: 63 base damage at level 1 plus 29 per additional level, reaching 614 at level 20, plus magical attack. Mana starts at 16 and increases by 7 per additional level to 149. Cooldown is 12 seconds at levels 1–4, 10 at levels 5–9, 8 at levels 10–14, 6 at levels 15–19 and 4 at level 20. Cast time 0.1 seconds. Healer and Druid retain their own version capped at level 5.'};
 delete variant.levelProgression;variant.levelProgression=buildSkillProgression({...before,...variant,classCombatOverrides:undefined,levelProgression:undefined});
 const skill={...before,maxSkillLv:20,learningLimits:{...before.learningLimits,defaultMaxLevel:5,classOverrides:{...before.learningLimits.classOverrides,Luminet:20,Lightmage:20}},classCombatOverrides:{...before.classCombatOverrides,luminet:variant}};
 skill.description_de=before.description_de.replace(/Heiler, Priester, Druide, Alchemist, Luminet[\s\S]*?freigegeben\./,'Heiler, Priester, Druide und Alchemist können maximal Stufe 5 lernen. Luminet und Lichtmagier verwenden eine eigene Spezialisierung bis Stufe 20 mit gesondertem Schaden, Mana, Cooldown und Castzeit.');
 skill.description_eng=before.description_eng.replace(/Healer, Priest, Druid, Alchemist, Luminet[\s\S]*?assigned class\./,'Healer, Priest, Druid and Alchemist can learn up to level 5. Luminet and Lightmage use a separate specialization with 20 levels and its own damage, Mana, cooldown and cast time.');
 await new SkillDataModel(skill).validate();await new SkillDataModel({...skill,...variant}).validate();
 const max=skillForClass(skill,'luminet');assert.equal(max.maxSkillLv,20);assert.equal(skillValue(max,'matk'),614);assert.equal(curveValue(max.cooldownScaling,20),4);assert.equal(curveValue(max.resourceCosts[0].scaling,20),149);
 for(const key of ['healer','druid'])for(let level=1;level<=5;level++){
  const old=resolveSkillAtLevel(before,level,{classKey:key}),now=resolveSkillAtLevel(skill,level,{classKey:key});
  for(const field of ['statScaling','cooldownScaling','resourceCosts','castTimeSeconds'])assert.deepEqual(now[field],old[field]);
 }
 const backup='data/balancing/history/before-luminet-energy-twenty-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const {_id,...set}=skill;await col.updateOne({_id},{$set:set});assert.deepEqual(await col.findOne({_id}),skill);
 await fs.writeFile('data/balancing/luminet-energy-twenty-decision.json',JSON.stringify({status:'appliedAndVerified',backup,skill,scope:'Luminet/Lightmage learn 20 levels with Fireball progression. All Healer/Druid combat values and caps unchanged. Same maximum combat output as the previous five-level Luminet specialization; 15 additional skill points.'},null,2)+'\n');
 console.log('Verified Luminet Energy Strike 20 levels; same maximum damage/Mana/cooldown; Healer and Druid unchanged.');
}catch(error){console.error('Energy level update failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
