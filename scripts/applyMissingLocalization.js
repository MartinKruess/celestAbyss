import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const normalize=v=>JSON.parse(JSON.stringify(v));
const blank=v=>typeof v!=='string'||!v.trim();
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const [plan,source]=await Promise.all(['data/localization/missing-language-plan.json','data/localization/source-audit.json'].map(read));
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const db=mongoose.connection.db,models={items:ItemModel,classTemplates:ClassTemplateModel};
 const dir='data/localization/history/before-missing-language-fill-'+Date.now();await fs.mkdir(dir,{recursive:true});await save(dir+'/source.json',source);
 const applied=[];
 await mongoose.connection.transaction(async session=>{
  applied.length=0;
  for(const patch of plan.patches){
   const col=db.collection(patch.collection),id=new mongoose.Types.ObjectId(patch.id),current=await col.findOne({_id:id},{session});assert.ok(current);
   const original=(patch.collection==='items'?source.items:source.classes).find(x=>x._id===patch.id);assert.ok(original);
   // Translation was prepared against this exact original; don't translate a changed source silently.
   for(const key of patch.collection==='items'?['name','description']:['displayName','advancementName'])assert.deepEqual(current[key],original[key]);
   const set=Object.fromEntries(Object.entries(patch.set).filter(([key])=>blank(current[key])));
   if(!Object.keys(set).length)continue;
   const expected={...current,...set};await new models[patch.collection](expected).validate();
   await col.updateOne({_id:id},{$set:set},{session});
   applied.push({collection:patch.collection,id:patch.id,key:patch.key,set,before:normalize(current),expected:normalize(expected)});
  }
 });
 for(const entry of applied){const actual=normalize(await db.collection(entry.collection).findOne({_id:new mongoose.Types.ObjectId(entry.id)}));assert.deepEqual(actual,entry.expected);}
 const afterSkills=normalize(await db.collection('skills').find({}).toArray());
 assert.equal(afterSkills.length,source.skills.length);
 for(const skill of source.skills){const after=afterSkills.find(s=>s._id===skill._id);assert.deepEqual(after,skill);}
 // Keep localized fields in the source used for class seeding; preserve every existing source field.
 const classTranslations=await read('data/localization/class-missing-translations.json'),localClasses=await read('data/class-templates.json');
 for(const c of localClasses)for(const [key,value]of Object.entries(classTranslations[c.key]??{}))if(blank(c[key]))c[key]=value;
 await save('data/class-templates.json',localClasses);
 await save('tmp/weapon-review-items.json',await db.collection('items').find({}).toArray());
 await save('data/localization/items.json',await db.collection('items').find({}).toArray());
 const summary={status:'appliedAndVerified',appliedAt:new Date().toISOString(),backup:dir,itemsUpdated:applied.filter(p=>p.collection==='items').length,classesUpdated:applied.filter(p=>p.collection==='classTemplates').length,fieldsAdded:applied.reduce((sum,p)=>sum+Object.keys(p.set).length,0),skillsCheckedUnchanged:afterSkills.length,pending:plan.pending,changes:applied.map(({collection,id,key,set})=>({collection,id,key,set}))};
 await save('data/localization/missing-language-result.json',summary);
 console.log(JSON.stringify({status:summary.status,items:summary.itemsUpdated,classes:summary.classesUpdated,fields:summary.fieldsAdded,skillsUnchanged:summary.skillsCheckedUnchanged,pending:summary.pending.length}));
}catch(error){console.error('Missing language fill failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(Object.values(error.errors).map(e=>({path:e.path,kind:e.kind})));process.exitCode=1;}
finally{await mongoose.disconnect();}
