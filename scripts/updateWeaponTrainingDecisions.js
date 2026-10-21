import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
import { skillEffectFingerprint } from '../services/skillDescriptions.js';
const decisions = [
{nr:7,en:'Crossbow Training',stats:{dex:1,agi:2},de:'Verbessert deine Fertigkeiten mit der Armbrust. +1 Geschicklichkeit und +2 Agilität pro Skilllevel.',eng:'Improves your crossbow skills. +1 Dexterity and +2 Agility per skill level.'},
{nr:18,en:'Bow Training',stats:{dex:2,agi:1},de:'Verbessert deine Fertigkeiten mit dem Bogen. +2 Geschicklichkeit und +1 Agilität pro Skilllevel.',eng:'Improves your bow skills. +2 Dexterity and +1 Agility per skill level.'},
{nr:26,en:'Dual Axe Training',stats:{str:2,agi:1},de:'Verbessert deine Fertigkeiten im Kampf mit zwei Äxten. +2 Stärke und +1 Agilität pro Skilllevel.',eng:'Improves your skills with dual axes. +2 Strength and +1 Agility per skill level.'},
{nr:102,en:'Sword Training',maxSkillLv:5,stats:{str:2,wis:1,agi:0,vita:0},de:'Verbessert deine Fertigkeiten mit dem Schwert. +2 Stärke und +1 Weisheit pro Skilllevel.',eng:'Improves your sword skills. +2 Strength and +1 Wisdom per skill level.'},
{nr:93,en:'Shield Attack Training',maxSkillLv:5,stats:{vita:2,str:1},de:'Verbessert deine Fertigkeiten im Kampf mit dem Schild. +2 Vitalität und +1 Stärke pro Skilllevel.',eng:'Improves your skills in combat with a shield. +2 Vitality and +1 Strength per skill level.'}
];
try {
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev') throw new Error('Requires development DB');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=[];
await mongoose.connection.transaction(async session=>{
before.length=0;
for(const d of decisions){
const s=await SkillDataModel.findOne({nr:d.nr,skillName_eng:d.en}).session(session).lean();
if(!s||![10,d.maxSkillLv ?? 10].includes(s.maxSkillLv)) throw new Error('Unexpected skill');
before.push(s);
const set={maxSkillLv:d.maxSkillLv ?? 10,description_de:d.de,description_eng:d.eng};const unset={};
for(const [k,v]of Object.entries(d.stats)) if(v) set[k]=v;else unset[k]=1;
await SkillDataModel.updateOne({_id:s._id},{$set:set,...(Object.keys(unset).length?{$unset:unset}:{})},{session,runValidators:true});
}
});
const saved=[];
for(const d of decisions){const s=await SkillDataModel.findOne({nr:d.nr,skillName_eng:d.en}).lean();for(const[k,v]of Object.entries(d.stats))if((s[k]??0)!==v)throw new Error('Read-back mismatch');if(s.maxSkillLv!==(d.maxSkillLv ?? 10))throw new Error('Read-back mismatch');if(s.description_de!==d.de||s.description_eng!==d.eng)throw new Error('Description mismatch');saved.push(s);}
let source=await fs.readFile(new URL('./skilldata.js',import.meta.url),'utf8');
const suffix={str:'Str',agi:'Agi',dex:'Dex',vita:'Vita',wis:'Wis'};
for(const d of decisions){const start=source.indexOf('  S_Name_eng: '+JSON.stringify(d.en)+',');const end=source.indexOf('S_Name_eng:',start+20);if(start<0||end<0)throw new Error('Missing source');let block=source.slice(start,end).replace(/S_Max_Lv: \d+/,'S_Max_Lv: '+(d.maxSkillLv ?? 10));for(const[k,v]of Object.entries(d.stats))block=block.replace(new RegExp('S_'+suffix[k]+': [\\d.]+'),'S_'+suffix[k]+': '+v);block=block.replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(d.eng)).replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(d.de));source=source.slice(0,start)+block+source.slice(end);}
await fs.writeFile(new URL('./skilldata.js',import.meta.url),source);
const url=new URL('../data/weapon-training-decisions.json',import.meta.url);
await fs.writeFile(url,JSON.stringify({scaling:'perSkillLevel',unchanged:['Two-handed Axe Training','Dagger and Sword Training'],decisions:decisions.map((d,i)=>({...d,before:before[i],after:saved[i]}))},null,2)+'\n');
const reviewURL=new URL('../data/skill-description-review.json',import.meta.url);const review=JSON.parse(await fs.readFile(reviewURL,'utf8'));const issue=review.majorIssues.find(x=>x.nr===7);issue.status='resolved';issue.decision={dex:1,agi:2,scaling:'perSkillLevel'};await fs.writeFile(reviewURL,JSON.stringify(review,null,2)+'\n');
const overridesURL=new URL('../data/skill-description-overrides.json',import.meta.url);const overrides=JSON.parse(await fs.readFile(overridesURL,'utf8'));for(const d of decisions){const i=overrides.findIndex(x=>x.germanName===saved.find(s=>s.nr===d.nr).skillName_de);if(i>=0){ overrides[i].effectFingerprint=skillEffectFingerprint(saved.find(s=>s.nr===d.nr)); overrides[i].de=d.de; overrides[i].en=d.eng; } const patch=review.patches.find(p=>p.nr===d.nr); if(patch)patch.after={de:d.de,en:d.eng};}await fs.writeFile(overridesURL,JSON.stringify(overrides,null,2)+'\n');
await fs.writeFile(reviewURL,JSON.stringify(review,null,2)+'\n');
const auditURL=new URL('../data/skill-review.json',import.meta.url);const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews){const i=saved.findIndex(s=>String(s._id)===entry.database?._id);if(i>=0){entry.database=saved[i];entry.effectDecision={...decisions[i].stats,scaling:'perSkillLevel'};}}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified five weapon training updates. Sword and shield cap at level 5; class assignments unchanged.');
}catch(e){console.error('Weapon training update failed ('+e.name+'); credentials omitted.');if(['Unexpected skill','Read-back mismatch','Description mismatch','Missing source'].includes(e.message)) console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}



