import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 const patches=await read('data/localization/confirmed-item-texts.json');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=mongoose.connection.db.collection('items'),changes=[];
 for(const [name,set] of Object.entries(patches)){const before=await col.findOne({name});assert.ok(before);await new ItemModel({...before,...set}).validate();changes.push({name,before,set});}
 await save('data/localization/history/confirmed-item-texts-'+Date.now()+'.json',changes);
 await mongoose.connection.transaction(async session=>{
  for(const {before,set}of changes){assert.deepEqual(norm(await col.findOne({_id:before._id},{session})),norm(before));await col.updateOne({_id:before._id},{$set:set},{session});}
 });
 for(const {before,set}of changes)assert.deepEqual(norm(await col.findOne({_id:before._id})),norm({...before,...set}));
 const translations=await read('data/localization/item-missing-translations.json'),result=await read('data/localization/missing-language-result.json');
 for(const {name,before,set}of changes){Object.assign(translations[name]??={},set);const change=result.changes.find(c=>c.collection==='items'&&c.id===String(before._id));if(change)Object.assign(change.set,set);else result.changes.push({collection:'items',id:String(before._id),key:name,set});}
 result.pending=result.pending.map(p=>({...p,fields:p.fields.filter(field=>!(field in (patches[p.name]??{})))})).filter(p=>p.fields.length);result.fieldsAdded=result.changes.reduce((n,c)=>n+Object.keys(c.set).length,0);
 await save('data/localization/item-missing-translations.json',translations);await save('data/localization/missing-language-result.json',result);
 const items=await col.find({}).toArray();await save('data/localization/items.json',items);await save('tmp/weapon-review-items.json',items);
 console.log(JSON.stringify({verified:changes.map(c=>c.name),pending:result.pending.map(p=>p.name)}));
}catch(e){console.error('Confirmed item text update failed ('+e.name+').');process.exitCode=1;}
finally{await mongoose.disconnect();}
