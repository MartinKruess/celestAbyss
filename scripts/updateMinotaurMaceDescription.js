import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
const set={
 description_de:"Ein gewaltiger Zweihandstreitkolben, in dem der unbändige Zorn des Minotaurus fortlebt. Seine Schläge fallen mit der Wucht einer Bestie und zerschmettern selbst standhafte Gegner. Man sagt, wer ihn führt, spüre vor jedem Hieb das ferne Beben donnernder Hufe – und einen Zorn, der sich niemals bezwingen lässt.",
 description_eng:"A mighty two-handed mace in which the untamed rage of the minotaur lives on. Its blows strike with the force of a rampaging beast, shattering even the most steadfast foes. It is said that those who wield it feel the distant tremor of thundering hooves before every strike—and a fury that can never be tamed.",
};
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=mongoose.connection.db.collection('items');
 const before=await collection.findOne({name:'Rage of the Minotaur'});assert.ok(before);
 await save('data/localization/history/minotaur-description-'+Date.now()+'.json',{before,set});
 await new ItemModel({...before,...set}).validate();
 await collection.updateOne({_id:before._id},{$set:set});
 assert.deepEqual(norm(await collection.findOne({_id:before._id})),norm({...before,...set}));
 const translations=await read('data/localization/item-missing-translations.json');
 Object.assign(translations['Rage of the Minotaur'],set);await save('data/localization/item-missing-translations.json',translations);
 const items=await collection.find({}).toArray();
 await save('data/localization/items.json',items);await save('tmp/weapon-review-items.json',items);
 const result=await read('data/localization/missing-language-result.json');
 Object.assign(result.changes.find(c=>c.collection==='items'&&c.id===String(before._id)).set,set);
 result.fieldsAdded=result.changes.reduce((n,c)=>n+Object.keys(c.set).length,0);
 result.pending=result.pending.filter(p=>p.name!=='Rage of the Minotaur');
 await save('data/localization/missing-language-result.json',result);
 console.log('Rage of the Minotaur: German and English descriptions saved and verified.');
}catch(e){console.error('Description update failed ('+e.name+').');process.exitCode=1;}
finally{await mongoose.disconnect();}
