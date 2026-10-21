import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {skillEffectFingerprint} from '../services/skillDescriptions.js';
const en='Slightly increases your defense.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Requires development DB');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.findOne({nr:28,skillName_de:'Eiserner Schild'}).lean();
if(!before||before.dmgType!=='passive')throw new Error('Unexpected skill');
await SkillDataModel.updateOne({_id:before._id,description_eng:before.description_eng},{$set:{description_eng:en}},{runValidators:true});
const saved=await SkillDataModel.findById(before._id).lean();
if(saved.description_eng!==en||saved.description_de!==before.description_de||skillEffectFingerprint(saved)!==skillEffectFingerprint(before)||JSON.stringify(saved.charClass)!==JSON.stringify(before.charClass))throw new Error('Read-back mismatch');
const sourceURL=new URL('./skilldata.js',import.meta.url);let source=await fs.readFile(sourceURL,'utf8');const start=source.indexOf('  S_Name_de: "Eiserner Schild",');const end=source.indexOf('  S_Name_de:',start+35);if(start<0||end<0)throw new Error('Missing source');const block=source.slice(start,end).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));await fs.writeFile(sourceURL,source.slice(0,start)+block+source.slice(end));
const url=new URL('../data/skill-description-review.json',import.meta.url);const review=JSON.parse(await fs.readFile(url,'utf8'));const issue=review.majorIssues.find(x=>x.nr===28);issue.status='resolved';issue.decision={effect:'passiveStatBonus',descriptionSource:'German',numericValues:'unchanged',blockUnit:'pending'};await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL=new URL('../data/skill-review.json',import.meta.url);const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Iron Shield: passive stat bonus; English description corrected. Numeric values and classes unchanged.');
}catch(e){console.error('Iron Shield update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
