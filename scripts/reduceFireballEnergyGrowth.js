import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {skillValue} from '../services/rotationDamage.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[36,49]}}).toArray();assert.equal(before.length,2);
 const changes=before.map(original=>{
  const skill={...original};
  const target=skill.nr===36?structuredClone(skill.classCombatOverrides.luminet):skill;
  assert.equal(target.statScaling.matk.base,63);assert.equal(target.statScaling.matk.perLevel,29);
  target.statScaling={...target.statScaling,matk:{type:'linear',base:63,perLevel:24}};
  target.description_de=target.description_de.replaceAll('+29','+24').replaceAll('614','519');
  target.description_eng=target.description_eng.replace(/by 29/g,'by 24').replaceAll('plus 29','plus 24').replaceAll('614','519');
  delete target.levelProgression;
  if(skill.nr===36){target.levelProgression=buildSkillProgression({...skill,...target,classCombatOverrides:undefined,levelProgression:undefined});skill.classCombatOverrides={...skill.classCombatOverrides,luminet:target};}
  else target.levelProgression=buildSkillProgression(target);
  return {before:original,skill};
 });
 for(const {before:old,skill}of changes){
  await new SkillDataModel(skill).validate();
  const key=skill.nr===36?'luminet':'ritualist';
  assert.equal(skillValue(resolveSkillAtLevel(skill,20,{classKey:key}),'matk'),519);
  for(let level=1;level<=20;level++){
   const a=resolveSkillAtLevel(old,level,{classKey:key}),b=resolveSkillAtLevel(skill,level,{classKey:key});
   assert(Number.isInteger(skillValue(b,'matk')));
   for(const field of ['resourceCosts','cooldownScaling','castTimeSeconds'])assert.deepEqual(b[field],a[field]);
  }
  if(skill.nr===36)for(const key of ['healer','druid'])for(let level=1;level<=5;level++)assert.deepEqual(resolveSkillAtLevel(skill,level,{classKey:key}).statScaling,resolveSkillAtLevel(old,level,{classKey:key}).statScaling);
 }
 const backup='data/balancing/history/before-fireball-energy-growth-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {skill}of changes){const {_id,...set}=skill;await col.updateOne({_id},{$set:set});assert.deepEqual(await col.findOne({_id}),skill);}
 await fs.writeFile('data/balancing/fireball-energy-growth-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,rule:'Base 63 unchanged; growth 29 to 24 per additional level; level 20 now 519 instead of 614 (-95). Mana/cooldowns/casts and Healer/Druid Energy Strike unchanged.'},null,2)+'\n');
 console.log('Verified both max-level base damages 519; all 20 levels integer; costs/timing and other Energy Strike variants unchanged.');
}catch(error){console.error('Damage growth update failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
