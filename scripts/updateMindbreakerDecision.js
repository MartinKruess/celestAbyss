import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const effect={key:'enemy-magic-defense',type:'statModifier',target:'enemy',stat:'mdef',value:-0.1,unit:'fraction',reference:'targetStat',durationSeconds:21,durationScaling:{type:'linear',base:21,perLevel:1}};
const cooldownScaling={type:'linear',base:43,perLevel:-1};
const de='Ein mächtiger Schildstoß verursacht physischen Schaden und senkt die magische Verteidigung des Gegners um 10 %. Auf Skilllevel 1 hält der Effekt 21 Sekunden und der Cooldown beträgt 43 Sekunden. Pro weiterem Skilllevel steigt die Effektdauer um eine Sekunde und der Cooldown sinkt um eine Sekunde.';
const en='A powerful shield bash deals physical damage and reduces the enemy\'s magical defense by 10%. At skill level 1, the effect lasts 21 seconds and the cooldown is 43 seconds. Each additional skill level increases the effect duration by one second and reduces the cooldown by one second.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:55,skillName_de:'Brecher des Geistes'}).lean();if(!current||current.maxSkillLv!==10)throw new Error('Unexpected skill');
const changes={cd:43,dur:21,cooldownScaling,effectsVersion:1,effects:[effect],description_de:de,description_eng:en};await new SkillDataModel({...current,...changes}).validate();
await SkillDataModel.updateOne({_id:current._id},{$set:changes},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.cd!==43||saved.dur!==21||saved.patk!==current.patk||saved.effects[0].value!==-0.1||saved.effects[0].durationScaling.perLevel!==1||saved.cooldownScaling.perLevel!==-1||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Brecher des Geistes",');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_CD: [\d.]+/,'S_CD: 43').replace(/S_Duration: [\d.]+/,'S_Duration: 21').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('effectsVersion:'))b=b.replace('  S_Thumbnail:', '  effectsVersion: 1,\n  effects: '+JSON.stringify([effect])+',\n  cooldownScaling: '+JSON.stringify(cooldownScaling)+',\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const r=JSON.parse(await fs.readFile(url,'utf8'));const issue=r.majorIssues.find(i=>i.nr===55);issue.status='resolved';issue.decision={effects:[effect],cooldownScaling,scalingFormula:'base + (skillLevel - 1) * perLevel',durationAtLevel10:30,cooldownAtLevel10:34,physicalAttack:'unchanged',damageScaling:'pending balancing round'};await fs.writeFile(url,JSON.stringify(r,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Mindbreaker: enemy magic defense -10%, duration 21 to 30 seconds, cooldown 43 to 34 seconds across levels 1 to 10. Physical attack unchanged.');
}catch(e){console.error('Mindbreaker update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
