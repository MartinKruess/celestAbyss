import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
const names={
 druid:{advancementName_de:'Erzdruide',advancementName_eng:'Archdruid'},
 villian:{displayName_de:'Schurke',displayName_eng:'Rogue',advancementName_de:'Schattenklinge',advancementName_eng:'Shadowreaper'},
 summoner:{displayName_de:'Schattenjäger',displayName_eng:'Shadow Hunter',advancementName_de:'Seelenjäger',advancementName_eng:'Soulseeker'},
};
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const db=mongoose.connection.db;
 const tasks=[{collection:'items',filter:{name:'Soulstealer'},set:{name_de:'Seelenräuber',name_eng:'Soulreaver'},model:ItemModel},...Object.entries(names).map(([key,set])=>({collection:'classTemplates',filter:{key},set,model:ClassTemplateModel}))];
 const changes=[];
 for(const t of tasks){const before=await db.collection(t.collection).findOne(t.filter);assert.ok(before);changes.push({...t,before});}
 const backup='data/localization/history/confirmed-names-'+Date.now()+'.json';
 await save(backup,changes.map(({collection,before,set})=>({collection,before,set})));
 await mongoose.connection.transaction(async session=>{
  for(const t of changes){
   const current=await db.collection(t.collection).findOne({_id:t.before._id},{session});assert.deepEqual(norm(current),norm(t.before));
   await new t.model({...current,...t.set}).validate();
   await db.collection(t.collection).updateOne({_id:current._id},{$set:t.set},{session});
  }
 });
 for(const t of changes)assert.deepEqual(norm(await db.collection(t.collection).findOne({_id:t.before._id})),norm({...t.before,...t.set}));
 const classes=await read('data/class-templates.json'),classTranslations=await read('data/localization/class-missing-translations.json');
 for(const c of classes)if(names[c.key])Object.assign(c,names[c.key]);
 Object.assign(classTranslations,names);
 await save('data/class-templates.json',classes);await save('data/localization/class-missing-translations.json',classTranslations);
 const translations=await read('data/localization/item-missing-translations.json');Object.assign(translations.Soulstealer,{name_de:'Seelenräuber',name_eng:'Soulreaver'});await save('data/localization/item-missing-translations.json',translations);
 const items=await db.collection('items').find({}).toArray();await save('data/localization/items.json',items);await save('tmp/weapon-review-items.json',items);
 const result=await read('data/localization/missing-language-result.json');
 for(const t of changes){
  const id=String(t.before._id),existing=result.changes.find(c=>c.id===id&&c.collection===t.collection);
  if(existing)Object.assign(existing.set,t.set);else result.changes.push({collection:t.collection,id,key:t.before.key??t.before.name,set:t.set});
 }
 result.fieldsAdded=result.changes.reduce((n,c)=>n+Object.keys(c.set).length,0);
 result.classesUpdated=result.changes.filter(c=>c.collection==='classTemplates').length;
 result.pending=result.pending.filter(p=>!(p.kind==='class'&&names[p.name]));
 result.confirmedNames={appliedAt:new Date().toISOString(),backup};await save('data/localization/missing-language-result.json',result);
 console.log('Verified localized names: Soulreaver; Rogue / Shadowreaper; Shadow Hunter / Soulseeker. Legacy keys and gameplay data preserved.');
}catch(e){console.error('Confirmed localization names failed ('+e.name+').');process.exitCode=1;}
finally{await mongoose.disconnect();}
