import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {ItemModel} from '../models/itemSchema.js';
const set={
 description_de:'Eine legendäre Armbrust, geführt von einer schwer zu fassenden, tödlichen Jägerin, die durch die Schatten streift. Aus feinstem Ebenholz gefertigt und mit dunkler Magie durchdrungen, versetzt sie ihre Beute in Angst und Schrecken.',
 description_eng:'A legendary crossbow wielded by the elusive and deadly huntress who stalks the shadows. Crafted from the finest ebony wood and imbued with dark magic, it strikes fear into the hearts of her prey.',
};
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const save=async(p,v)=>fs.writeFile(p,JSON.stringify(v,null,2)+'\n');
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=mongoose.connection.db.collection('items');
 const before=await collection.findOne({name:'The Huntress of the Shaddow'});assert.ok(before);
 await save('data/localization/history/huntress-description-'+Date.now()+'.json',{before,set});
 await new ItemModel({...before,...set}).validate();
 await collection.updateOne({_id:before._id},{$set:set});
 assert.deepEqual(norm(await collection.findOne({_id:before._id})),norm({...before,...set}));
 const translations=await read('data/localization/item-missing-translations.json');
 Object.assign(translations['The Huntress of the Shaddow'],set);await save('data/localization/item-missing-translations.json',translations);
 const items=await collection.find({}).toArray();
 await save('data/localization/items.json',items);await save('tmp/weapon-review-items.json',items);
 const result=await read('data/localization/missing-language-result.json');
 Object.assign(result.changes.find(c=>c.collection==='items'&&c.id===String(before._id)).set,set);
 result.fieldsAdded=result.changes.reduce((n,c)=>n+Object.keys(c.set).length,0);
 result.pending=result.pending.filter(p=>p.name!=='The Huntress of the Shaddow');
 await save('data/localization/missing-language-result.json',result);
 console.log('The Huntress of the Shaddow: German and English descriptions saved and verified.');
}catch(e){console.error('Description update failed ('+e.name+').');process.exitCode=1;}
finally{await mongoose.disconnect();}
