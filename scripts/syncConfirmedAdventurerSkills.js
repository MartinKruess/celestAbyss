import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';

const patches=[
  {nr:6,set:{category:'passive',dmgType:'passive',activation:'automatic',maxSkillLv:5,str:0.01,int:0.01,cd:120,dur:30,statBonusUnits:{str:'fraction',int:'fraction'},statScaling:{str:{type:'linear',base:0.01,perLevel:0.01},int:{type:'linear',base:0.01,perLevel:0.01}},triggerConditionStatus:'pending',triggerCondition:{type:'sustainedCombat',combatDurationSeconds:15,comparison:'greaterThan',chancePerCheck:null},description_de:'Nach mehr als 15 Sekunden im Kampf kann Adrenalin ausgelöst werden. Es erhöht deine Stärke und Intelligenz für 30 Sekunden um 1 Prozent je Skillstufe, bis zu 5 Prozent. Der Cooldown beträgt 120 Sekunden. Die Auslösewahrscheinlichkeit ist noch festzulegen.',description_eng:'After more than 15 seconds in combat, Adrenaline can trigger. It increases Strength and Intelligence for 30 seconds by 1 percent per skill level, up to 5 percent. The cooldown is 120 seconds. The trigger probability is still to be defined.'}},
  {nr:45,set:{description_de:'Erhöht dauerhaft deine Lebenspunkte um 150, deine Vitalität um 3, deine Willenskraft um 2 und deine Agilität um 2.',description_eng:'Permanently increases Health by 150, Vitality by 3, Wisdom by 2 and Agility by 2.'}},
  {nr:139,set:{category:'passive',description_de:'Erhöht deine Vitalität und Willenskraft jeweils um 2 sowie deine physische und magische Verteidigung jeweils um 8.',description_eng:'Increases Vitality and Wisdom by 2 each, and physical and magical defense by 8 each.'}},
];
try{
  if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Requires development database');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const before=await SkillDataModel.collection.find({nr:{$in:patches.map(x=>x.nr)}}).toArray();
  if(before.length!==patches.length)throw new Error('Unexpected target count');
  for(const patch of patches){const original=before.find(x=>x.nr===patch.nr);await new SkillDataModel({...original,...patch.set}).validate();}
  await fs.mkdir('data/balancing',{recursive:true});
  const path='data/balancing/confirmed-adventurer-skills-before.json';
  try{await fs.writeFile(path,JSON.stringify(before,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
  // Raw updates preserve unrelated existing fields and stable skill IDs.
  for(const patch of patches){const original=before.find(x=>x.nr===patch.nr);await SkillDataModel.collection.updateOne({_id:original._id},{$set:patch.set});}
  for(const patch of patches){const after=await SkillDataModel.collection.findOne({nr:patch.nr});for(const[k,v]of Object.entries(patch.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw new Error('Read-back mismatch');}
  const training=await SkillDataModel.collection.findOne({nr:201});
  if(training.statScaling?.patk?.perLevel!==5||training.statScaling?.matk?.perLevel!==5||training.statScaling?.atkSpeed?.perLevel!==0.01)throw new Error('Existing training differs');
  const review=JSON.parse(await fs.readFile('data/skill-description-review.json','utf8'));
  const adr=review.majorIssues.find(x=>x.nr===6);adr.status='partiallyResolved';adr.issue='Werte, Dauer, Cooldown und Levelskalierung gespeichert. Kampfbedingung über 15 Sekunden gespeichert; Proc-Chance und Auswertungstakt offen.';adr.decision={...adr.decision,...patches[0].set,scaling:'defined',balancingReview:true};
  const expansion=review.majorIssues.find(x=>x.nr===45);expansion.status='partiallyResolved';expansion.issue='Permanente Grundwirkung und passende Beschreibung gespeichert; endgültige Levelskalierung bleibt offen.';
  await fs.writeFile('data/skill-description-review.json',JSON.stringify(review,null,2)+'\n');
  console.log('Verified updates to Adrenaline, Expansion of the Body description, and Endurance Training category/description. Existing Weapon Training scaling verified. No equipment changes, unknown proc chance remains null.');
}catch(e){console.error(`Confirmed skill sync failed (${e.name}); credentials omitted.`);process.exitCode=1;}
finally{await mongoose.disconnect();}
