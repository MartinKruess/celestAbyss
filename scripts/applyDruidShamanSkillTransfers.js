import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

const druid=['Druide','Alchemist'], shaman=['Shamane','High Elves'];
const decisions=[
 {nr:15,remove:druid,add:[]},
 ...[30,118,125,212,225].map(nr=>({nr,remove:shaman,add:druid})),
 {nr:38,remove:druid,add:[]},
 ...[106,192,202].map(nr=>({nr,remove:druid,add:shaman})),
 ...[41,200].map(nr=>({nr,remove:druid,add:[]})),
];
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;
 const before=await col.find({nr:{$in:decisions.map(d=>d.nr)}}).toArray();
 assert.equal(before.length,decisions.length);
 const changes=before.map(skill=>{
  const d=decisions.find(d=>d.nr===skill.nr);
  return {...skill,charClass:[...new Set([...skill.charClass.filter(c=>!d.remove.includes(c)),...d.add])]};
 });
 for(const skill of changes)await new SkillDataModel(skill).validate();
 const dir='data/balancing/history/before-druid-shaman-transfers-'+Date.now();
 await fs.mkdir(dir,{recursive:true});
 await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 const reportPath='data/reports/class-skill-counts.json';
 await fs.copyFile(reportPath,dir+'/class-skill-counts.json');
 await mongoose.connection.transaction(async session=>{
  for(const skill of changes)await col.updateOne({_id:skill._id},{$set:{charClass:skill.charClass}},{session});
 });
 for(const skill of changes)assert.deepEqual(await col.findOne({_id:skill._id}),skill);
 const catalog=await col.find({}).toArray();
 const report=JSON.parse(await fs.readFile(reportPath,'utf8'));
 for(const entry of report.classified){const skill=changes.find(s=>s.nr===entry.nr);if(skill)entry.classes=skill.charClass;}
 for(const [name,classes,expected]of [['Druide / Alchemist',druid,30],['Schamane / Hochelfe',shaman,29]]){
  const row=report.counts.find(c=>c.name===name);
  const skills=catalog.filter(s=>s.charClass.some(c=>classes.includes(c)));
  row.skillNumbers=skills.map(s=>s.nr).sort((a,b)=>a-b);
  row.total=skills.length;
  assert.equal(row.total,expected);
  for(const category of ['offensive','self','group','healing','passive','utility','unclear'])row[category]=report.classified.filter(s=>row.skillNumbers.includes(s.nr)&&s.category===category).length;
  row.defensive=report.classified.filter(s=>row.skillNumbers.includes(s.nr)&&s.activeDefensive).length;
  row.taming=skills.filter(s=>s.nr>=133&&s.nr<=138).length;
  assert.equal(row.passive,name.startsWith('Druide')?12:11);
 }
 await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/druid-shaman-skill-transfers.json',JSON.stringify({status:'appliedAndVerified',backup:dir,decisions,changes,unassignedRetainedSkills:changes.filter(s=>!s.charClass.length).map(s=>s.nr),simulationStatus:'Previous results; not rerun'},null,2)+'\n');
 console.log('Verified 12 assignment changes. Druid: 30 skills (18 active, 12 passive). Shaman: 29 (18 active, 11 passive). Skill effects and other class assignments preserved.');
}catch(error){console.error('Skill transfer failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
