import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const statScaling={patk:{type:'linear',base:35,perLevel:5},pdef:{type:'linear',base:60,perLevel:5}};
const de='Erhöht auf Skilllevel 1 die physische Verteidigung um 60 und den physischen Angriff um 35 für 5 Minuten. Pro weiterem Skilllevel steigen beide Boni um 5, bis zu +105 physischer Verteidigung und +80 physischem Angriff auf Skilllevel 10.';
const en='At skill level 1, increases physical defense by 60 and physical attack by 35 for 5 minutes. Each additional skill level increases both bonuses by 5, reaching +105 physical defense and +80 physical attack at skill level 10.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:75,skillName_de:'Energie des Körpers'}).lean();if(!current||current.maxSkillLv!==10)throw new Error('Unexpected skill');
const changes={patk:35,pdef:60,statScaling,description_de:de,description_eng:en};await new SkillDataModel({...current,...changes}).validate();await SkillDataModel.updateOne({_id:current._id},{$set:changes},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.patk!==35||saved.pdef!==60||saved.statScaling.patk.perLevel!==5||saved.statScaling.pdef.perLevel!==5||saved.cd!==60||saved.dur!==300||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Energie des Körpers",');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_PAttack: [\d.]+/,'S_PAttack: 35').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('statScaling:'))b=b.replace('  S_Thumbnail:', '  statScaling: '+JSON.stringify(statScaling)+',\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(url,'utf8'));const issue=review.majorIssues.find(i=>i.nr===75);issue.status='partiallyResolved';issue.decision={statScaling,attackAtLevel10:80,defenseAtLevel10:105,cooldown:60,durationAtLevel1:300,durationAtLevel10:600,durationProgression:'pending',manaCosts:'pending',buffTarget:'pending self versus group',classAssignment:'unchanged; missing Berserker still pending',formula:'base + (skillLevel - 1) * perLevel'};await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Power of the Body: physical attack 35 to 80, defense 60 to 105, cooldown 60. Duration endpoint 600 recorded; progression and buff target pending.');
}catch(e){console.error('Power of the Body update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
