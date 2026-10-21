import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
const audit=JSON.parse(await fs.readFile('data/reports/adventurer-assignment-audit.json','utf8'));
const selected=audit.assignments.filter(a=>a.status==='nameMatched'&&a.mongoSkillID);
// This abbreviation is now known: Passion Extension was renamed Passion Awakening.
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const passion=await SkillDataModel.findOne({nr:147,skillName_de:'Erweckung der Leidenschaft'}).lean();if(!passion)throw new Error('Missing renamed skill');
selected.push({skillName:'Erw. der Leidenschaft',mongoSkillID:String(passion._id),status:'confirmedHistoricalRename'});
const ids=[...new Set(selected.map(a=>a.mongoSkillID))];const before=await SkillDataModel.find({_id:{$in:ids}}).lean();if(before.length!==ids.length)throw new Error('Missing skill');
await mongoose.connection.transaction(async session=>{await SkillDataModel.updateMany({_id:{$in:ids}},{$addToSet:{charClass:'Abenteuer'}},{session,runValidators:true});});
const after=await SkillDataModel.find({_id:{$in:ids}}).lean();
for(const s of after){const old=before.find(b=>String(b._id)===String(s._id));if(!s.charClass.includes('Abenteuer')||old.charClass.some(c=>!s.charClass.includes(c)))throw new Error('Class verification failed');const a={...s},b={...old};delete a.charClass;delete b.charClass;if(!isDeepStrictEqual(a,b))throw new Error('Unexpected non-class change');}
const changed=after.filter(s=>!before.find(b=>String(b._id)===String(s._id)).charClass.includes('Abenteuer'));
audit.appliedAssignments=after.map(s=>({id:String(s._id),name:s.skillName_de,classes:s.charClass}));audit.addedAssignments=changed.map(s=>s.skillName_de);audit.remainingUnresolved=audit.assignments.filter(a=>!a.mongoSkillID&&a.skillName!=='Erw. der Leidenschaft').map(a=>a.skillName);audit.changesApplied=true;audit.historicalRename='Erw. der Leidenschaft -> Erweckung der Leidenschaft, confirmed same existing skill';
await fs.writeFile('data/reports/adventurer-assignment-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify({added:changed.length,names:changed.map(s=>s.skillName_de),unresolved:audit.remainingUnresolved}));
}catch(e){console.error('Adventurer assignment failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
