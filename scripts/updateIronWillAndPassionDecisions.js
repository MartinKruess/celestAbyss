import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const statScaling={vita:{type:'linear',base:3,perLevel:3},block:{type:'linear',base:2,perLevel:2},wis:{type:'linear',base:2,perLevel:2}};
const de='Eiserner Wille erhöht dauerhaft deine Vitalität um 3, deinen Blockwert mit Schilden um 2 und deine Weisheit um 2 pro gelerntem Skilllevel. Auf Skilllevel 10 erhältst du +30 Vitalität, +20 Blockwert und +20 Weisheit. Der Blockwert ist ein fixer Wert und keine direkte Prozentangabe.';
const en='Iron Will permanently increases your Vitality by 3, your shield Block rating by 2 and your Wisdom by 2 per learned skill level. At skill level 10, gain +30 Vitality, +20 Block rating and +20 Wisdom. Block rating is a flat value, not a direct percentage.';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
await mongoose.connection.transaction(async session=>{
const iron=await SkillDataModel.findOne({nr:141,skillName_de:'Eiserner Wille'}).session(session);const passion=await SkillDataModel.findOne({nr:147,skillName_de:'Erweiterung der Leidenschaft'}).session(session);if(!iron||iron.maxSkillLv!==10||!passion)throw new Error('Unexpected skill');
await SkillDataModel.updateOne({_id:iron._id},{$set:{vita:3,block:2,wis:2,statScaling,statBonusUnits:{vita:'flat',block:'flat',wis:'flat'},description_de:de,description_eng:en}},{session,runValidators:true});
await SkillDataModel.updateOne({_id:passion._id},{$set:{agi:2}},{session,runValidators:true});
});
const iron=await SkillDataModel.findOne({nr:141}).lean();const passion=await SkillDataModel.findOne({nr:147}).lean();if(iron.vita!==3||iron.block!==2||iron.wis!==2||iron.statScaling.block.perLevel!==2||iron.description_eng!==en||passion.agi!==2)throw new Error('Read-back mismatch');
let source=await fs.readFile('scripts/skilldata.js','utf8');for(const[name,fields]of [['Eiserner Wille',{Wis:2}],['Erweiterung der Leidenschaft',{Agi:2}]]){const start=source.indexOf('  S_Name_de: '+JSON.stringify(name)+',');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end);for(const[k,v]of Object.entries(fields))b=b.replace(new RegExp('S_'+k+': [\\d.]+'),'S_'+k+': '+v);if(name==='Eiserner Wille'){b=b.replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(en));if(!b.includes('statScaling:'))b=b.replace('  S_Thumbnail:', '  statScaling: '+JSON.stringify(statScaling)+',\n  statBonusUnits: { vita: "flat", block: "flat", wis: "flat" },\n  S_Thumbnail:');}source=source.slice(0,start)+b+source.slice(end);}await fs.writeFile('scripts/skilldata.js',source);
const url='data/skill-description-review.json';const r=JSON.parse(await fs.readFile(url,'utf8'));const i=r.majorIssues.find(i=>i.nr===141);i.status='resolved';i.decision={statScaling,blockUnit:'flat rating',blockFormula:'pending versus penetration, chance caps and unblockable attacks',passive:'permanent while learned'};const p=r.majorIssues.find(i=>i.nr===147);p.status='partiallyResolved';p.decision={dex:3,agi:2,duration:1800,durationDecision:'pending comparison with other expansions',levelScaling:'pending'};await fs.writeFile(url,JSON.stringify(r,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews){const s=[iron,passion].find(s=>String(s._id)===entry.database?._id);if(s)entry.database=s;}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
for(const s of await SkillDataModel.find({skillName_de:/erweiterung/i}).sort({nr:1}).lean())console.log(JSON.stringify({name:s.skillName_de,max:s.maxSkillLv,duration:s.dur,cooldown:s.cd,type:s.dmgType,classes:s.charClass}));
console.log('Verified Iron Will bonuses and scaling; Passion Extension Agility +2. Durations unchanged.');
}catch(e){console.error('Iron Will and Passion update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
