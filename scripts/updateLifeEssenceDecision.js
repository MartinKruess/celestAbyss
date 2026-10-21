import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const effect={key:'life-essence-heal',type:'heal',target:'allyOrCompanion',reference:'targetMaxHealth',value:0.03,unit:'fraction',valueScaling:{type:'linear',base:0.03,perLevel:0.005},durationSeconds:0};
const cooldownScaling={type:'linear',base:55,perLevel:-3};
const de='Erwecke die Lebensessenz eines Verbündeten oder Begleiters und heile ihn auf Skilllevel 1 um 3 % seines maximalen Lebens. Pro weiterem Skilllevel steigt die Heilung um 0,5 Prozentpunkte, bis zu 5 % auf Skilllevel 5. Der Cooldown beträgt anfangs 55 Sekunden und sinkt pro weiterem Skilllevel um 3 Sekunden, bis auf 43 Sekunden.';
const en='Awaken the life essence of an ally or companion, healing them for 3% of their maximum health at skill level 1. Each additional skill level increases the healing by 0.5 percentage points, reaching 5% at skill level 5. The cooldown starts at 55 seconds and decreases by 3 seconds per additional skill level, reaching 43 seconds.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:71,skillName_de:'Lebensessenz'}).lean();if(!current||current.maxSkillLv!==5)throw new Error('Unexpected skill');
const changes={effectsVersion:1,effects:[effect],cooldownScaling,cd:55,activation:'manual',description_de:de,description_eng:en};const next={...current,...changes};delete next.health;await new SkillDataModel(next).validate();
await SkillDataModel.updateOne({_id:current._id},{$set:changes,$unset:{health:1}},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.health!==undefined||saved.cd!==55||saved.effects[0].value!==0.03||saved.effects[0].valueScaling.perLevel!==0.005||saved.cooldownScaling.perLevel!==-3||saved.description_eng!==en)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Lebensessenz",');const end=source.indexOf('  S_Name_de:',start+35);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_Health: [\d.]+/,'S_Health: 0').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('effectsVersion:'))b=b.replace('  S_Thumbnail:', '  effectsVersion: 1,\n  effects: '+JSON.stringify([effect])+',\n  cooldownScaling: '+JSON.stringify(cooldownScaling)+',\n  activation: "manual",\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(url,'utf8'));const issue=review.majorIssues.find(i=>i.nr===71);issue.status='resolved';issue.decision={effects:[effect],cooldownScaling,healingAtLevel5:0.05,cooldownAtLevel5:43,formula:'base + (skillLevel - 1) * perLevel'};await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Life Essence: target max-health healing 3% to 5%, cooldown 55 to 43 seconds across five levels. Legacy health bonus removed.');
}catch(e){console.error('Life Essence update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
