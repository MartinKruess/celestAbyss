import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const statScaling={patk:{type:'linear',base:5,perLevel:5},matk:{type:'linear',base:5,perLevel:5},atkSpeed:{type:'linear',base:0.01,perLevel:0.01}};
const de='Waffentraining verbessert deine allgemeinen Waffenfertigkeiten. Mit jeder Skillstufe steigen dein physischer und magischer Angriff sowie deine Angriffsgeschwindigkeit.';
const en='Weapon Training improves your general weapon proficiency. Each skill level increases your physical and magical attack and your attack speed.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const current=await SkillDataModel.findOne({nr:201,skillName_de:'Waffentraining'}).lean();if(!current||current.maxSkillLv!==20)throw new Error('Unexpected skill');
const changes={patk:5,matk:5,atkSpeed:0.01,statScaling,statBonusUnits:{patk:'flat',matk:'flat',atkSpeed:'fraction'},description_de:de,description_eng:en};await new SkillDataModel({...current,...changes}).validate();await SkillDataModel.updateOne({_id:current._id},{$set:changes},{runValidators:true});
const saved=await SkillDataModel.findById(current._id).lean();if(saved.atkSpeed!==0.01||saved.statScaling.atkSpeed.perLevel!==0.01||saved.description_de!==de)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');const start=source.indexOf('  S_Name_de: "Waffentraining",');const end=source.indexOf('  S_Name_de:',start+35);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/S_ATK_Speed: [\d.]+/,'S_ATK_Speed: 0.01').replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('statScaling:'))b=b.replace('  S_Thumbnail:', '  statScaling: '+JSON.stringify(statScaling)+',\n  statBonusUnits: { patk: "flat", matk: "flat", atkSpeed: "fraction" },\n  S_Thumbnail:');await fs.writeFile('scripts/skilldata.js',source.slice(0,start)+b+source.slice(end));
const url='data/skill-description-review.json';const r=JSON.parse(await fs.readFile(url,'utf8'));const i=r.majorIssues.find(i=>i.nr===201);i.status='resolved';i.decision={statScaling,description:'General narrative; numeric bonuses stored separately',maxSkillLv:20};await fs.writeFile(url,JSON.stringify(r,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews)if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=i.decision;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified Weapon Training: +5 physical attack, +5 magical attack, +1% attack speed per level.');
for(const s of await SkillDataModel.find({$or:[{skillName_de:/segen/i},{skillName_eng:/blessing/i}]}).sort({nr:1}).lean())console.log(JSON.stringify({nr:s.nr,name:s.skillName_de,en:s.skillName_eng,classes:s.charClass,type:s.dmgType,max:s.maxSkillLv,duration:s.dur,cooldown:s.cd,stats:Object.fromEntries(['patk','matk','pdef','mdef','str','int','vita','wis','faith','vic','agi','dex','health','mana','atkSpeed'].filter(k=>s[k]).map(k=>[k,s[k]])),descriptionDE:s.description_de,descriptionEN:s.description_eng}));
}catch(e){console.error('Weapon Training update or blessings read failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
