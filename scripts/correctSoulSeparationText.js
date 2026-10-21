import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const en='After Soul Torment has been applied, tear away part of the enemy\'s soul, dealing heavy damage and restoring some of your own health.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const s=await SkillDataModel.findOne({nr:105,skillName_de:'Seelentrennung'}).lean();if(!s)throw new Error('Missing skill');
await SkillDataModel.updateOne({_id:s._id,description_eng:s.description_eng},{$set:{description_eng:en}},{runValidators:true});
const saved=await SkillDataModel.findById(s._id).lean();if(saved.description_eng!==en||saved.description_de!==s.description_de)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Seelentrennung",');const end=source.indexOf('  S_Name_de:',start+35);if(start<0||end<0)throw new Error('Missing source');const b=source.slice(start,end).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const r=JSON.parse(await fs.readFile(url,'utf8'));const i=r.majorIssues.find(i=>i.nr===105);i.status='resolved';i.decision.prerequisite='Soul Torment must have been applied; sequence Soul Shackle -> Soul Torment -> Soul Separation';i.decision.descriptionSource='German confirmed; English corrected';await fs.writeFile(url,JSON.stringify(r,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=i.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Soul Separation English prerequisite corrected to Soul Torment; numeric effects unchanged.');
}catch(e){console.error('Soul prerequisite correction failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
