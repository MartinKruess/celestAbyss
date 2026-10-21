import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;
 const before=await col.find({nr:{$in:[204,205]}}).toArray();assert.equal(before.length,2);
 const changes=before.map(skill=>{
  assert.equal(skill.maxSkillLv,5);assert.equal(skill.effects.length,2);
  const effects=skill.effects.map(effect=>{
   const value=effect.stat==='patk'?25:effect.stat==='matk'?50:null;assert.ok(value);
   return {...effect,value,valueScaling:{type:'linear',base:value,perLevel:value}};
  });
  return {...skill,effects,
   description_de:skill.description_de.replace('um 45 und ihr magischer Angriff um 120 pro Skilllevel','um 25 und ihr magischer Angriff um 50 pro Skilllevel').replace('+225 physischen und +600 magischen Angriff','+125 physischen und +250 magischen Angriff'),
   description_eng:skill.description_eng.replace('by 45 and magical attack by 120 per skill level','by 25 and magical attack by 50 per skill level').replace('+225 physical and +600 magical attack','+125 physical and +250 magical attack')};
 });
 for(const skill of changes){await new SkillDataModel(skill).validate();assert.notEqual(skill.description_de,before.find(s=>s.nr===skill.nr).description_de);assert.notEqual(skill.description_eng,before.find(s=>s.nr===skill.nr).description_eng);}
 const dir='data/balancing/history/before-catalyst-variant-b-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 await mongoose.connection.transaction(async session=>{
  for(const skill of changes)await col.updateOne({_id:skill._id},{$set:{effects:skill.effects,description_de:skill.description_de,description_eng:skill.description_eng}},{session});
 });
 for(const skill of changes)assert.deepEqual(await col.findOne({_id:skill._id}),skill);
 const self=await col.findOne({nr:194});assert.equal(self.dmgType,'selfbuff');assert.equal(self.statScaling.str.base,1);assert.equal(self.statScaling.str.perLevel,1);assert.deepEqual(self.statScaling.vita.values,[0,0,0,0,0,0,0,0,0,5]);assert.deepEqual(self.statScaling.wis.values,[0,0,0,0,0,0,0,0,0,5]);assert.equal(self.statScaling.int.base,2);assert.equal(self.statScaling.int.perLevel,2);assert.equal(self.faith,undefined);assert.equal(self.vic,undefined);
 await fs.writeFile('data/balancing/catalyst-field-decisions.json',JSON.stringify({status:'appliedAndVerified',variant:'B',backup:dir,skills:changes,druidSimulation:'Rerun 600 seconds after completion of Druid review'},null,2)+'\n');
 console.log('Verified both catalyst fields: +25/+50 per level, maximum +125/+250. Timings, Mana and recipients preserved. Druid self buff verified.');
}catch(error){console.error('Catalyst update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
