import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const names=['Erweiterung des Körpers','Erweiterung des Geistes','Erweiterung der Sinne'];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.find({skillName_de:{$in:names}}).lean();if(before.length!==3)throw new Error('Missing skills');
await mongoose.connection.transaction(async session=>{for(const s of before)await SkillDataModel.updateOne({_id:s._id},{$set:{category:'passive',dmgType:'passive'},$unset:{dur:1,cd:1,activation:1,durationScaling:1,cooldownScaling:1}},{session,runValidators:true});});
const saved=await SkillDataModel.find({skillName_de:{$in:names}}).lean();
for(const s of saved){const old=before.find(b=>String(b._id)===String(s._id));if(s.category!=='passive'||s.dmgType!=='passive'||s.dur!==undefined||s.cd!==undefined||JSON.stringify(s.charClass)!==JSON.stringify(old.charClass))throw new Error('Read-back mismatch');for(const k of ['int','wis','faith','vic','vita','agi','dex','amb','str','health'])if(s[k]!==old[k])throw new Error('Numeric change');}
let source=await fs.readFile('scripts/skilldata.js','utf8');for(const name of names){const start=source.indexOf('  S_Name_de: '+JSON.stringify(name)+',');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_Duration: [\d.]+/,'S_Duration: 0').replace(/S_CD: [\d.]+/,'S_CD: 0').replace(/S_DMG_Type: "[^"]*"/,'S_DMG_Type: "passive"');if(!b.includes('category:'))b=b.replace('  S_Thumbnail:', '  category: "passive",\n  S_Thumbnail:');else b=b.replace(/category: "[^"]*"/,'category: "passive"');source=source.slice(0,start)+b+source.slice(end);}await fs.writeFile('scripts/skilldata.js',source);
const reviewURL='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(reviewURL,'utf8'));for(const i of review.majorIssues)if([43,44,45].includes(i.nr)){i.activationDecision={type:'permanentPassive',duration:'none',cooldown:'none',supersedes:'Earlier tentative active/group buff and duration proposals',numericScaling:'pending balancing round'};}
await fs.writeFile(reviewURL,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews){const s=saved.find(s=>String(s._id)===entry.database?._id);if(s){entry.database=s;entry.activationDecision='permanentPassive';}}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified all three expansions: permanent passive, no duration or cooldown; attribute values and classes unchanged.');
}catch(e){console.error('Passive expansion update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
