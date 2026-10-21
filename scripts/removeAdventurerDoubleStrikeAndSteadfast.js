import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,updates=[];
 for(const nr of [76,140]){const before=await collection.findOne({nr});if(!before?.charClass.includes('Abenteuer'))throw Error('Unexpected assignment');const set={charClass:before.charClass.filter(c=>!['Abenteuer','Adventure','Adventurer','Scout'].includes(c))};await new SkillDataModel({...before,...set}).validate();updates.push({before,set});}
 const dir='data/balancing/history/before-adventurer-double-strike-steadfast-removals-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills-before.json',JSON.stringify(updates.map(u=>u.before),null,2)+'\n',{flag:'wx'});await fs.copyFile('data/reports/class-skill-counts.json',dir+'/class-skill-counts-before.json');
 for(const u of updates){await collection.updateOne({nr:u.before.nr},{$set:u.set});if(!isDeepStrictEqual(await collection.findOne({nr:u.before.nr}),{...u.before,...u.set}))throw Error('Read-back mismatch');}
 const path='data/reports/class-skill-counts.json',r=JSON.parse(await fs.readFile(path,'utf8')),c=r.counts.find(c=>c.name==='Abenteurer / Scout');
 for(const u of updates){if(!c.skillNumbers.includes(u.before.nr))throw Error('Missing count entry');c.skillNumbers=c.skillNumbers.filter(n=>n!==u.before.nr);const cl=r.classified.find(s=>s.nr===u.before.nr);if(typeof c[cl.category]==='number')c[cl.category]--;if(cl.activeDefensive)c.defensive--;cl.classes=u.set.charClass;}
 c.total=c.skillNumbers.length;await fs.writeFile(path,JSON.stringify(r,null,2)+'\n');console.log('Verified Adventurer-only removal of Mighty Double Strike and Steadfast; '+c.total+' assigned skills remain. Endurance retained without invented level scaling.');
}catch(e){console.error('Adventurer update failed: '+e.name);process.exitCode=1;}finally{await mongoose.disconnect();}

