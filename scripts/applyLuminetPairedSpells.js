import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {skillForClass} from '../services/skillLearningLevel.js';
import {skillValue,curveValue} from '../services/rotationDamage.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[36,231]}}).toArray();assert.equal(before.length,2);
 const energy=before.find(s=>s.nr===36),luminus=before.find(s=>s.nr===231);
 const variant={maxSkillLv:5,matk:63,mana:16,cd:12,castTimeSeconds:.1,statScaling:{matk:{type:'table',values:[63,179,324,469,614]}},cooldownScaling:{type:'table',values:[12,10,8,6,4]},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'table',base:16,values:[16,44,79,114,149]}}],description_de:'Luminet-Spezialisierung von Energieschlag. Einmaliger magischer Schaden: Grundschaden 63/179/324/469/614 zuzüglich M-Angriff. Mana 16/44/79/114/149, Cooldown 12/10/8/6/4 Sekunden. Castzeit 0,1 Sekunden. Fünf lernbare Stufen; entsprechen den Feuerball-Stufen 1, 5, 10, 15 und 20.',description_eng:'Luminet specialization of Energy Strike. Deals magical damage once: base damage 63/179/324/469/614 plus magical attack. Mana 16/44/79/114/149; cooldown 12/10/8/6/4 seconds. Cast time 0.1 seconds. Five learnable levels correspond to Fireball levels 1, 5, 10, 15 and 20.'};
 variant.levelProgression=buildSkillProgression({...energy,...variant,classCombatOverrides:undefined,levelProgression:undefined});
 const newEnergy={...energy,classCombatOverrides:{...energy.classCombatOverrides,luminet:variant}};
 const newLuminus={...luminus,charClass:['Luminet','Lightmage'],matk:42,mana:11,cd:14,castTimeSeconds:.1,maxSkillLv:10,cooldownScaling:{type:'linear',base:14,perLevel:-1},statScaling:{matk:{type:'linear',base:42,perLevel:23}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:11,perLevel:6}}],description_de:'Sendet einen Lichtimpuls auf das Ziel und verursacht einmalig magischen Schaden. Grundschaden 42 auf Stufe 1, +23 je weiterer Stufe, bis 249 auf Stufe 10; zusätzlich M-Angriff. Mana 11 auf Stufe 1, +6 je weiterer Stufe, bis 65. Cooldown 14 Sekunden auf Stufe 1, -1 je weiterer Stufe, bis 5 Sekunden. Castzeit 0,1 Sekunden. Kein Schaden über Zeit.',description_eng:'Sends a pulse of light at the target, dealing magical damage once. Base damage starts at 42 and increases by 23 per additional level to 249 at level 10, plus magical attack. Mana starts at 11 and increases by 6 per additional level to 65. Cooldown starts at 14 seconds and decreases by 1 per additional level to 5 seconds. Cast time 0.1 seconds. No damage over time.'};
 delete newLuminus.levelProgression;newLuminus.levelProgression=buildSkillProgression(newLuminus);
 for(const s of [newEnergy,newLuminus,{...newEnergy,...variant}])await new SkillDataModel(s).validate();
 assert.equal(skillValue(skillForClass(newEnergy,'luminet'),'matk'),614);
 assert.equal(curveValue(skillForClass(newEnergy,'luminet').cooldownScaling,5),4);
 for(const key of ['healer','druid'])assert.deepEqual(skillForClass(newEnergy,key).cooldownScaling,skillForClass(energy,key).cooldownScaling);
 const backup='data/balancing/history/before-luminet-paired-spells-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 const changes=[{before:energy,skill:newEnergy},{before:luminus,skill:newLuminus}];
 for(const {skill}of changes){const {_id,...set}=skill;await col.updateOne({_id},{$set:set});assert.deepEqual(await col.findOne({_id}),skill);}
 await fs.writeFile('data/balancing/luminet-paired-spells-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,lowerLevelMapping:'Luminet Energy Strike levels 1-5 map to Fireball levels 1,5,10,15,20. Other classes keep their existing Energy Strike.',reservedSlot:'Light Flash remains unassigned; self buff not designed yet.'},null,2)+'\n');
 console.log('Verified Luminet paired spells; Healer/Druid Energy Strike unchanged.');
}catch(error){console.error('Paired spell update failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
