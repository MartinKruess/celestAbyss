import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {ItemModel} from '../models/itemSchema.js';
const rates=[.77,.75,.73,.71,.69];
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=mongoose.connection.db.collection('items'),before=await col.find({category:'weapon'}).toArray();
 const families=JSON.parse(await fs.readFile('data/balancing/weapon-attribute-rank-overrides.json','utf8'));
 const groups=new Map();for(const x of before){const f=families[x.name]?.family;if(!f)throw Error('Unknown family');if(!groups.has(f))groups.set(f,[]);groups.get(f).push(x);}
 const changes=[];
 for(const [family,series]of groups){series.sort((a,b)=>a.rang-b.rang);if(series.length!==6||series.some((x,i)=>x.rang!==i+1))throw Error('Incomplete ranks');const start=series[0];for(const stat of ['pang','mang','pdeff']){if(start.attributes[stat]===undefined)continue;let value=family==='Axe'&&stat==='pang'?13:family==='Crossbow'&&stat==='pang'?26:family==='Shield'&&stat==='pdeff'?8:start.attributes[stat];for(let i=0;i<6;i++){if(i)value*=1+rates[i-1];changes.push({name:series[i].name,id:series[i]._id,family,rank:i+1,stat,before:series[i].attributes[stat],after:Math.round(value),unrounded:value});}}}
 if(before.length!==78||changes.length!==72)throw Error('Unexpected coverage');
 for(const x of before){const attributes={...x.attributes};for(const c of changes.filter(c=>c.name===x.name))attributes[c.stat]=c.after;await new ItemModel({...x,attributes}).validate();}
 await fs.writeFile('data/balancing/weapon-growth-77-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 const operations=before.map(x=>{const set=Object.fromEntries(changes.filter(c=>c.name===x.name).map(c=>['attributes.'+c.stat,c.after]));return Object.keys(set).length?{updateOne:{filter:{_id:x._id},update:{$set:set}}}:null;}).filter(Boolean);await col.bulkWrite(operations);
 const after=await col.find({category:'weapon'}).toArray();for(const x of before){const expected={...x,attributes:{...x.attributes}};for(const c of changes.filter(c=>c.name===x.name))expected.attributes[c.stat]=c.after;const actual=after.find(y=>String(y._id)===String(x._id));if(JSON.stringify(expected)!==JSON.stringify(actual))throw Error('Read-back mismatch');}
 await fs.writeFile('tmp/weapon-review-items.json',JSON.stringify(await col.find({}).toArray(),null,2));
 await fs.writeFile('data/balancing/weapon-combat-value-overrides.json',JSON.stringify(Object.fromEntries(after.map(x=>[x.name,Object.fromEntries(['pang','mang','pdeff'].filter(k=>x.attributes[k]!==undefined).map(k=>[k,x.attributes[k]]))])),null,2)+'\n');
 await fs.writeFile('data/balancing/weapon-growth-77-applied.json',JSON.stringify({status:'appliedAndVerified',rates,starts:{Axe:13,Crossbow:26,Shield:8},changes},null,2)+'\n');
 console.log('Verified 72 combat values across 66 weapons; 12 weapons without combat values remain unchanged. All other fields preserved.');
}catch(e){console.error('Weapon growth update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
