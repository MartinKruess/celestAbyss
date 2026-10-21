import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import assert from 'node:assert/strict';
import {isDeepStrictEqual} from 'node:util';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
let stage='environment';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 stage='local files';
 const [model,local,baseline]=await Promise.all(['data/balancing/attribute-model.json','data/class-templates.json','data/balancing/class-baselines.json'].map(read));
 assert.equal(local.length,13);
 const updated=structuredClone(model.conversions);
 for(const [attribute,target]of [['vitality','physicalDefense'],['wisdom','magicalDefense']]){
  const rule=updated.find(c=>c.attribute===attribute&&c.target===target);
  assert.ok(rule&&[2,1.2].includes(rule.amountPerPoint));
  rule.amountPerPoint=1.2;
 }
 stage='database connection';
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await ClassTemplateModel.find({key:{$in:local.map(c=>c.key)}}).lean();
 stage='database coverage';assert.equal(before.length,13);
 // Preserve a pre-existing, non-operative movement placeholder absent from the comparison model.
 const databaseConversions=before[0].statConversions.defaults.conversions;
 for(const rule of model.conversions)assert.deepEqual(databaseConversions.find(r=>r.attribute===rule.attribute&&r.target===rule.target),rule);
 for(const rule of databaseConversions)if(!model.conversions.some(r=>r.attribute===rule.attribute&&r.target===rule.target)){
  assert.equal(rule.attribute,'agility');assert.equal(rule.target,'movementSpeed');assert.equal(rule.status,'pendingSmallContribution');assert.equal(rule.amountPerPoint,undefined);
  updated.push(structuredClone(rule));
 }
 for(const saved of before){
  stage=`local consistency ${saved.key}`;
  const entry=local.find(c=>c.key===saved.key);
  assert.ok(isDeepStrictEqual(JSON.parse(JSON.stringify(saved.statConversions)),entry.statConversions),'Local/database conversion drift');
  stage=`model consistency ${saved.key}`;
  assert.deepEqual(saved.statConversions.defaults.conversions,databaseConversions);
  const draft=structuredClone(saved.statConversions);
  draft.defaults.conversions=updated;
  stage=`schema validation ${saved.key}`;await new ClassTemplateModel({...saved,statConversions:draft}).validate();
 }
 const apply=process.argv.includes('--apply');
 if(apply){
  const backup=`data/balancing/history/before-defense-conversion12-${Date.now()}`;
  await fs.mkdir(backup,{recursive:true});
  for(const [name,obj]of [['attribute-model.json',model],['class-templates.json',local],['class-baselines.json',baseline],['database-classes.json',before]])await fs.writeFile(`${backup}/${name}`,JSON.stringify(obj,null,2)+'\n');
  for(const saved of before){
   stage=`update ${saved.key}`;
   if(!isDeepStrictEqual(saved.statConversions.defaults.conversions,updated)){
    const result=await ClassTemplateModel.updateOne({_id:saved._id,'statConversions.defaults.conversions':saved.statConversions.defaults.conversions},{$set:{'statConversions.defaults.conversions':updated}},{runValidators:true});
    assert.equal(result.matchedCount,1);
   }
   const after=await ClassTemplateModel.findById(saved._id).lean();
   const expected=structuredClone(saved.statConversions);expected.defaults.conversions=updated;
   assert.deepEqual(after.statConversions,expected);
   local.find(c=>c.key===saved.key).statConversions=JSON.parse(JSON.stringify(after.statConversions));
   baseline.classes.find(c=>c.key===saved.key).statConversions=JSON.parse(JSON.stringify(after.statConversions));
  }
  model.conversions=updated;
  for(const [path,obj]of [['data/balancing/attribute-model.json',model],['data/class-templates.json',local],['data/balancing/class-baselines.json',baseline]])await fs.writeFile(path,JSON.stringify(obj,null,2)+'\n');
  await fs.writeFile('data/balancing/defense-conversion12-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,factors:{vitalityPhysicalDefense:1.2,wisdomMagicalDefense:1.2},classes:13,unchanged:'All other conversions and class-specific multipliers'},null,2)+'\n');
  console.log('Applied and read-back verified: 13 database classes and local catalogs; both defense conversion factors 1.2, class modifiers retained.');
 }else console.log('Validated 13 database/local classes; ready to apply 1.2 to the two defense conversions only.');
}catch(error){console.error(`Defense conversion update failed at ${stage} (${error.name}); credentials omitted.`);process.exitCode=1;}
finally{await mongoose.disconnect();}
