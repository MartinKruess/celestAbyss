import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
const set={
 description_de:'Ein Zeichen der Hoffnung in den dunkelsten Zeiten. Sein Licht durchdringt die Verzweiflung und geleitet verlorene Seelen in Sicherheit. Von Heilern und Hütern des Lichts getragen, spendet er Bedürftigen Trost und Schutz.',
 description_eng:'A symbol of hope in the darkest of times. Its light pierces through despair and guides lost souls to safety. Carried by healers and guardians of the light, it offers comfort and protection to those in need.',
};
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=mongoose.connection.db.collection('items');
 const before=await collection.findOne({name:'Glimmer of Hope'});assert.ok(before);
 await save('data/localization/history/glimmer-description-'+Date.now()+'.json',{before,set});
 await new ItemModel({...before,...set}).validate();
 await collection.updateOne({_id:before._id},{$set:set});
 assert.deepEqual(norm(await collection.findOne({_id:before._id})),norm({...before,...set}));
 const translations=await read('data/localization/item-missing-translations.json');
 Object.assign(translations['Glimmer of Hope'],set);await save('data/localization/item-missing-translations.json',translations);
 const items=await collection.find({}).toArray();
 await save('data/localization/items.json',items);await save('tmp/weapon-review-items.json',items);
 const result=await read('data/localization/missing-language-result.json');
 Object.assign(result.changes.find(c=>c.collection==='items'&&c.id===String(before._id)).set,set);
 result.fieldsAdded=result.changes.reduce((n,c)=>n+Object.keys(c.set).length,0);
 result.pending=result.pending.filter(p=>p.name!=='Glimmer of Hope');
 await save('data/localization/missing-language-result.json',result);
 console.log('Glimmer of Hope: German and English descriptions saved and verified.');
}catch(e){console.error('Description update failed ('+e.name+').');process.exitCode=1;}
finally{await mongoose.disconnect();}
