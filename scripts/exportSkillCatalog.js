import 'dotenv/config';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
async function writeExport(path,body){
 const existing=await fs.readFile(path,'utf8').catch(error=>{if(error.code==='ENOENT')return null;throw error;});
 if(existing!==body){const temporary=path+'.tmp';await fs.writeFile(temporary,body);await fs.rename(temporary,path);}
}
const compatibilitySource = `// Generated compatibility view. Edit data/skills.json or export the reviewed database catalog.\nimport catalog from '../data/skills.json' with { type: 'json' };\nconst numericFields = {patk:'PAttack',matk:'MAttack',cd:'CD',dur:'Duration',mana:'Mana',health:'Health',agi:'Agi',amb:'Amb',block:'Block',dex:'Dex',faith:'Faith',int:'Int',luck:'Luck',str:'Str',vic:'Vic',vita:'Vita',wis:'Wis',pdef:'PDefense',mdef:'MDefense',atkSpeed:'ATK_Speed',movementSpeed:'MovementSpeed',manaRegen:'ManaRegen'};\nexport const skills = catalog.map(record => ({\n  ...record, catalogRecord: record,\n  S_Name_de: record.skillName_de, S_Name_eng: record.skillName_eng,\n  CharClass: record.charClass, S_Max_Lv: record.maxSkillLv, S_DMG_Type: record.dmgType,\n  S_Description_de: record.description_de, S_Description_eng: record.description_eng,\n  ...Object.fromEntries(Object.entries(numericFields).map(([key,suffix]) => ['S_'+suffix,record[key] ?? 0])),\n}));\n`;
try {
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const records=await SkillDataModel.collection.find({}).sort({nr:1,_id:1}).toArray();
if(!records.length)throw new Error('Empty catalog');
const normalized=records.map(record=>{const copy={...record,_id:String(record._id)};delete copy.__v;return copy;});
for(const record of normalized)await new SkillDataModel(record).validate();
const review=JSON.parse(await fs.readFile('data/skill-review.json','utf8'));
const unresolved=review.reviews.filter(entry=>entry.match==='noNameCandidate');
if(unresolved.some(entry=>entry.match!=='noNameCandidate'))throw new Error('Invalid unresolved entry');
const body=JSON.stringify(normalized,null,2)+'\n';
await writeExport('data/skills.json',body);
const existingCompatibilitySource = await fs.readFile('scripts/skilldata.js','utf8').catch(error => {if(error.code === 'ENOENT')return null;throw error;});
if(existingCompatibilitySource !== compatibilitySource)await writeExport('scripts/skilldata.js',compatibilitySource);
await fs.writeFile('data/unresolved-source-skills.json',JSON.stringify({sourceFile:review.sourceFile,sourceSHA256:review.sourceSHA256,status:'Unresolved source entries, excluded from seed until reviewed',count:unresolved.length,entries:unresolved},null,2)+'\n');
await fs.writeFile('data/skills.manifest.json',JSON.stringify({exportedAt:new Date().toISOString(),database:process.env.MONGODB_DB_NAME,count:normalized.length,sha256:createHash('sha256').update(body).digest('hex'),skillIDs:'Preserved for stable references',scope:'Skill definitions only; not a backup of accounts, characters or other collections',unresolvedSourceEntries:unresolved.length},null,2)+'\n');
console.log(`Exported ${normalized.length} skill definitions with preserved IDs; separated ${unresolved.length} unresolved source entries. No database writes.`);
}catch(error){console.error(`Skill catalog export failed (${error.name}, code ${error.code ?? 'unavailable'}, syscall ${error.syscall ?? 'unavailable'}, file ${error.syscall === 'open' ? error.path : 'unavailable'}); credentials omitted.`);process.exitCode=1;}
finally{await mongoose.disconnect();}
