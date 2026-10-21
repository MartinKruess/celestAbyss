import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const decisions=[
{nr:43,name:'Erweiterung der Sinne',classes:['Archer','Hunter','Summoner','Soulseeker','Villian','Shadowwarrior'],set:{dex:3,agi:4,description_de:'Erweiterung der Sinne erhöht deine Geschicklichkeit um 3 und deine Agilität um 4.',description_eng:'Expansion of the Senses increases your Dexterity by 3 and your Agility by 4.'},unset:['str','amb'],sourceStats:{Dex:3,Agi:4,Str:0,Amb:0}},
{nr:44,name:'Erweiterung des Geistes',classes:['Herbalist','Witcher','Ritualist','Bloodmage','Druide','Alchemist','Healer','Priest','Shamane','High Elves','Luminet','Lightmage'],set:{},unset:[],sourceStats:{}},
{nr:45,name:'Erweiterung des Körpers',classes:['Knife','Templar','Gladiator','Berserker','Abenteuer','Butcher','Destroyer'],set:{},unset:[],sourceStats:{}}
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=[];
await mongoose.connection.transaction(async session=>{
before.length=0;
for(const d of decisions){const s=await SkillDataModel.findOne({nr:d.nr,skillName_de:d.name}).session(session).lean();if(!s)throw new Error('Missing skill');before.push(s);await SkillDataModel.updateOne({_id:s._id},{$set:{...d.set,charClass:d.classes},...(d.unset.length?{$unset:Object.fromEntries(d.unset.map(k=>[k,1]))}:{})},{session,runValidators:true});}
});
const saved=[];
for(const d of decisions){const s=await SkillDataModel.findOne({nr:d.nr}).lean();if(JSON.stringify(s.charClass)!==JSON.stringify(d.classes)||Object.entries(d.set).some(([k,v])=>s[k]!==v)||d.unset.some(k=>s[k]!==undefined))throw new Error('Read-back mismatch');saved.push(s);}
let source=await fs.readFile('scripts/skilldata.js','utf8');for(const d of decisions){const start=source.indexOf('  S_Name_de: '+JSON.stringify(d.name)+',');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Missing source');let b=source.slice(start,end).replace(/CharClass:\s*"[^"]*"/,'CharClass: '+JSON.stringify(d.classes.join(', ')));for(const[k,v]of Object.entries(d.sourceStats))b=b.replace(new RegExp('S_'+k+': [\\d.]+'),'S_'+k+': '+v);if(d.set.description_de)b=b.replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(d.set.description_de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(d.set.description_eng));source=source.slice(0,start)+b+source.slice(end);}await fs.writeFile('scripts/skilldata.js',source);
await fs.writeFile('data/expansion-decisions.json',JSON.stringify({decisions:decisions.map((d,i)=>({...d,before:before[i],after:saved[i]})),scaling:'pending',legacyClassLabels:'Retained until coordinated class-name migration'},null,2)+'\n');
const url='data/skill-description-review.json';const review=JSON.parse(await fs.readFile(url,'utf8'));for(const d of decisions){const issue=review.majorIssues.find(i=>i.nr===d.nr);issue.expansionDecision={charClass:d.classes,stats:d.sourceStats,levelScaling:'pending'};if(d.nr===43){issue.status='partiallyResolved';issue.issue='Zuordnung und Werte bestätigt: Jäger, Nachtjäger/Seelenjäger, Schurke/Schattenkrieger; Dexterity +3 und Agility +4. Levelskalierung noch offen.';}}await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
const auditURL='data/skill-review.json';const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));for(const entry of audit.reviews){const s=saved.find(s=>String(s._id)===entry.database?._id);if(s){entry.database=s;entry.classDecision=s.charClass;}}await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
console.log('Verified all three expansion assignments. Senses: Dexterity +3, Agility +4, removed Strength/Ambush. Body and Spirit numeric values unchanged.');
}catch(e){console.error('Expansion update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
