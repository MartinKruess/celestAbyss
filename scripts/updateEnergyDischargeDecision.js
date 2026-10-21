import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const costs=[{resource:'health',reference:'maxHealth',unit:'fraction',scaling:{type:'linear',base:0.3,perLevel:-0.01}}];
const de='Du opferst auf Skilllevel 1 30 % deines maximalen Lebens für eine Explosion, die Gegner im Bereich physisch schädigt. Die Lebenskosten sinken pro weiterem Skilllevel um einen Prozentpunkt.';
const en='At skill level 1, sacrifice 30% of your maximum health to cause an explosion that deals physical damage to nearby enemies. The health cost decreases by one percentage point per additional skill level.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.findOne({nr:35,skillName_de:'Energieentladung'}).lean();if(!before||before.maxSkillLv!==10)throw new Error('Unexpected skill');
const next=new SkillDataModel({...before,health:undefined,resourceCosts:costs,description_de:de,description_eng:en});await next.validate();
await SkillDataModel.updateOne({_id:before._id},{$set:{resourceCosts:costs,description_de:de,description_eng:en},$unset:{health:1}},{runValidators:true});
const saved=await SkillDataModel.findById(before._id).lean();if(saved.resourceCosts[0].scaling.base!==0.3||saved.resourceCosts[0].scaling.perLevel!==-0.01||saved.health!==undefined||saved.patk!==before.patk||saved.cd!==before.cd||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Energieentladung",');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let block=source.slice(start,end).replace(/S_Health: -?[\d.]+/,'S_Health: 0').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!block.includes('resourceCosts:'))block=block.replace('  S_Thumbnail:', '  resourceCosts: '+JSON.stringify(costs)+',\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+block+source.slice(end));
const url='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(url,'utf8'));const issue=review.majorIssues.find(x=>x.nr===35);issue.status='partiallyResolved';issue.decision={resourceCosts:costs,costAtLevel10:0.21,damageScaling:'pending',baseDamage:'707 vs 787 pending; existing value retained',cooldown:'unchanged'};await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Energy Discharge: explicit max-health cost, 30% at level 1, minus one percentage point per additional level, 21% at level 10. Damage and cooldown unchanged.');
}catch(e){console.error('Energy Discharge update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
