import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const areaSettings={center:'caster',movesWithCaster:true,membership:'whileInside',includeCaster:true,radiusMeters:4};
const de='Erschafft für 9 Sekunden eine schützende Barriere mit 4 Metern Radius um dich. Du und Verbündete innerhalb der Barriere erleiden 20 % weniger magischen Schaden. Wer den Bereich verlässt, verliert den Schutz.';
const en='Creates a protective barrier with a 4-meter radius around you for 9 seconds. You and allies inside the barrier take 20% less magical damage. Leaving the area removes the protection.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:228,skillName_de:'Geheiligte Barriere'}).lean();if(!current||current.effects?.[0]?.value!==0.2)throw new Error('Unexpected skill');
await SkillDataModel.updateOne({_id:current._id},{$set:{areaSettings,description_de:de,description_eng:en}},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.areaSettings.radiusMeters!==4||!saved.areaSettings.includeCaster||saved.areaSettings.membership!=='whileInside'||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Geheiligte Barriere",');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('areaSettings:'))b=b.replace('  S_Thumbnail:', '  areaSettings: '+JSON.stringify(areaSettings)+',\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(url,'utf8'));const i=review.majorIssues.find(i=>i.nr===228);i.decision.areaSettings=areaSettings;i.decision.spatialRules='Caster-centered moving bubble, provisional radius 4 meters; caster and allies protected only while inside. Detailed geometry/runtime pending.';await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=i.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Sanctified Barrier bubble: caster-centered, provisional 4m radius, caster included, protection only while inside.');
}catch(e){console.error('Barrier bubble update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

