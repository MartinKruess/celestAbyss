import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const durationScaling={type:'linear',base:6,perLevel:1};
const de='Erzeuge einen Zyklon aus Höllenfeuer, der Feuer auf das Gebiet regnen lässt. Gegner im Feuerregen erleiden Schaden. Der Feuerregen hält auf Skilllevel 1 sechs Sekunden an. Pro weiterem Skilllevel steigt die Dauer um eine Sekunde, bis zu zehn Sekunden auf Skilllevel 5.';
const en='Create a cyclone of hellfire that rains fire over the area. Enemies in the fire rain take damage. The fire rain lasts six seconds at skill level 1. Each additional skill level increases its duration by one second, reaching ten seconds at skill level 5.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:62,skillName_de:'Internal Zyklon'}).lean();if(!current||current.maxSkillLv!==5)throw new Error('Unexpected skill');
const changes={dur:6,durationScaling,description_de:de,description_eng:en};await new SkillDataModel({...current,...changes}).validate();await SkillDataModel.updateOne({_id:current._id},{$set:changes},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.dur!==6||saved.durationScaling.base!==6||saved.durationScaling.perLevel!==1||saved.cd!==current.cd||saved.matk!==current.matk||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Internal Zyklon",');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_Duration: [\d.]+/,'S_Duration: 6').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('durationScaling:'))b=b.replace('  S_Thumbnail:', '  durationScaling: '+JSON.stringify(durationScaling)+',\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const r=JSON.parse(await fs.readFile(url,'utf8'));const issue=r.majorIssues.find(i=>i.nr===62);issue.status='resolved';issue.decision={durationScaling,durationAtLevel5:10,formula:'base + (skillLevel - 1) * perLevel',damageScaling:'pending',castTime:'pending',cooldown:'unchanged'};await fs.writeFile(url,JSON.stringify(r,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Internal Cyclone duration: level 1 six seconds, level 5 ten seconds. Damage and cooldown unchanged; cast time pending.');
}catch(e){console.error('Internal Cyclone update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
