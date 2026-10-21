import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {ItemModel} from '../models/itemSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const write=(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const numbers=[60,101,116,120,208,236,237,241];
export function migrateMageSkill(original){
 const s=JSON.parse(JSON.stringify(original));s._id=original._id;
 if([60,208,236].includes(s.nr))for(const k of ['faith','vic']){delete s[k];if(s.statScaling)delete s.statScaling[k];if(s.statBonusUnits)delete s.statBonusUnits[k];}
 if(s.nr===116){s.statScaling.int=s.statScaling.faith;delete s.statScaling.faith;}
 if(s.nr===120)s.soulStorageSettings.bonusStat='int';
 if([101,237].includes(s.nr))for(const e of s.effects??[])if(['faith','vic'].includes(e.stat)){e.stat='int';e.key=e.key.replace('faith','intelligence').replace('-vic','-int');}
 for(const lang of ['de','eng']){
  const k='description_'+lang;let d=s[k];
  if([60,208,236].includes(s.nr))d=d.replace(/\+\d+ (Faith|Victim),? (und |and )?/g,'').replace(/Faith bleibt konstant\. /g,'').replace(/Faith remains fixed\. /g,'');
  else d=d.replaceAll('Victim',lang==='de'?'Intelligenz':'Intelligence').replaceAll('Faith',lang==='de'?'Intelligenz':'Intelligence');
  s[k]=d;
 }
 delete s.levelProgression;s.levelProgression=buildSkillProgression(s);return s;
}
if(process.argv[1]?.endsWith('applySingleIntelligenceMages.js')){
 try{
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
  const beforeSkills=await SkillDataModel.collection.find({nr:{$in:numbers}}).toArray();assert.equal(beforeSkills.length,8);
  const beforeItems=await ItemModel.collection.find({category:'weapon',$or:[{'attributes.faith':{$gt:0}},{'attributes.victim':{$gt:0}}]}).toArray();assert.equal(beforeItems.length,6);
  const directory='data/balancing/history/before-single-intelligence-mages-'+Date.now();await fs.mkdir(directory,{recursive:true});
  await write(directory+'/database.json',{skills:beforeSkills,items:beforeItems});
  for(const p of ['attribute-model.json','ranked-equipment.json','weapon-attribute-rank-overrides.json','class-comparison-level60.json'])await fs.copyFile('data/balancing/'+p,directory+'/'+p);
  const afterSkills=beforeSkills.map(migrateMageSkill);
  const afterItems=beforeItems.map(item=>{const x={...item,attributes:{...item.attributes}};x.attributes.int=(x.attributes.int??0)+(x.attributes.faith??0)+(x.attributes.victim??0);delete x.attributes.faith;delete x.attributes.victim;return x;});
  for(const s of afterSkills)await new SkillDataModel(s).validate();
  for(const i of afterItems)await new ItemModel(i).validate();
  for(const s of afterSkills){const {_id,...set}=s;await SkillDataModel.collection.updateOne({_id},{$set:set,$unset:Object.fromEntries(['faith','vic'].filter(k=>!(k in s)).map(k=>[k,'']))});}
  for(const i of afterItems)await ItemModel.collection.updateOne({_id:i._id},{$set:{attributes:i.attributes}});
  for(const s of afterSkills)assert.deepEqual(await SkillDataModel.collection.findOne({_id:s._id}),s);
  for(const i of afterItems)assert.deepEqual(await ItemModel.collection.findOne({_id:i._id}),i);
  const model=await read('data/balancing/attribute-model.json');
  for(const key of ['luminet','ritualist']){delete model.offensiveAttributeEligibility.classAttackOverrides[key];for(const name of ['classAttributes','classAmountsPerPoint','classTargets'])delete model.plannedSpecialAttributeUnlock[name][key];}
  model.plannedSpecialAttributeUnlock.stacking='Rogue Ambush adds physical attack to Strength after unlock. Luminet and Ritualist use Intelligence only, at 1.8 magical attack per point.';
  await write('data/balancing/attribute-model.json',model);
  const equipment=await read('data/balancing/ranked-equipment.json');
  for(const w of equipment.weapons??[])for(const bonus of w.raw??[])if(['Faith','Vic'].includes(bonus.label))bonus.label='Intelligence';
  await write('data/balancing/ranked-equipment.json',equipment);
  const overrides=await read('data/balancing/weapon-attribute-rank-overrides.json');
  for(const w of Object.values(overrides))for(const k of ['faith','victim'])if(w.attributes?.[k]!==undefined){w.attributes.int=(w.attributes.int??0)+w.attributes[k];delete w.attributes[k];}
  await write('data/balancing/weapon-attribute-rank-overrides.json',overrides);
  await write('tmp/weapon-review-items.json',await ItemModel.collection.find({category:'weapon'}).toArray());
  await write('data/balancing/single-intelligence-mages-decision.json',{backup:directory,rule:'Remove Faith/Victim where INT already exists; otherwise replace with INT. Weapons convert one to one. Luminet/Ritualist INT factor 1.8, no Faith/Victim attack conversion.',beforeSkills,afterSkills,beforeItems,afterItems});
  console.log('Verified database migration: 8 skills, 6 weapons. Backup: '+directory);
 }catch(e){console.error('Migration failed: '+e.name+': '+(e.name==='ValidationError'?e.message:'See migration assertions; credentials omitted'));process.exitCode=1;}finally{await mongoose.disconnect();}
}
