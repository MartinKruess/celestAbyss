import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import assert from 'node:assert/strict';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
 const [model,local,baseline]=await Promise.all(['data/balancing/attribute-model.json','data/class-templates.json','data/balancing/class-baselines.json'].map(read));
 const fields=['offensiveAttributeEligibility','plannedSpecialAttributeUnlock'];
 for(const key of ['luminet','ritualist'])assert.deepEqual(model.offensiveAttributeEligibility.confirmedMatchingAttributes[key],['intelligence']);
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await ClassTemplateModel.find({}).lean();assert.equal(before.length,13);
 const backup=`data/balancing/history/before-approved-attack-rules-sync-${Date.now()}`;await fs.mkdir(backup,{recursive:true});
 for(const [name,obj]of [['database-classes.json',before],['class-templates.json',local],['class-baselines.json',baseline]])await fs.writeFile(`${backup}/${name}`,JSON.stringify(obj,null,2)+'\n');
 for(const saved of before){
  const entry=local.find(c=>c.key===saved.key);assert.ok(entry);
  assert.deepEqual(JSON.parse(JSON.stringify(saved.statConversions)),entry.statConversions);
  const expected=structuredClone(saved.statConversions);
  const filter={_id:saved._id},set={};
  for(const field of fields){
   filter[`statConversions.defaults.${field}`]=saved.statConversions.defaults[field];
   set[`statConversions.defaults.${field}`]=model[field];
   expected.defaults[field]=structuredClone(model[field]);
  }
  await new ClassTemplateModel({...saved,statConversions:expected}).validate();
  const result=await ClassTemplateModel.updateOne(filter,{$set:set},{runValidators:true});assert.equal(result.matchedCount,1);
  const after=await ClassTemplateModel.findById(saved._id).lean();assert.deepEqual(after.statConversions,expected);
  entry.statConversions=JSON.parse(JSON.stringify(after.statConversions));
  baseline.classes.find(c=>c.key===saved.key).statConversions=JSON.parse(JSON.stringify(after.statConversions));
 }
 await fs.writeFile('data/class-templates.json',JSON.stringify(local,null,2)+'\n');
 await fs.writeFile('data/balancing/class-baselines.json',JSON.stringify(baseline,null,2)+'\n');
 await fs.writeFile('data/balancing/approved-attack-rules-sync.json',JSON.stringify({status:'appliedAndVerified',backup,fields,classes:13,reason:'Synchronize previously approved comparison rules; no change to current comparison attack values.'},null,2)+'\n');
 console.log('Verified all 13 classes: database/local offensive rules match the already approved attribute model.');
}catch(e){console.error(`Attack-rule synchronization failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
