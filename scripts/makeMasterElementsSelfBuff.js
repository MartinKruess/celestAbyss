import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:194});assert.ok(before);
 const statScaling=Object.fromEntries(Object.entries(before.statScaling).filter(([key])=>!['faith','vic'].includes(key)));
 const set={dmgType:'selfbuff',statScaling,statBonusTargets:Object.fromEntries(['str','vita','wis','int'].map(key=>[key,'self'])),
 description_de:'Erhöht ausschließlich deine eigenen Attribute für 600 Sekunden. Auf Skilllevel 1 erhältst du 3 Stärke, 3 Vitalität, 2 Willenskraft und 2 Intelligenz. Je weiterer Stufe steigen alle vier Boni um 2, bis zu 21 Stärke, 21 Vitalität, 20 Willenskraft und 20 Intelligenz auf Stufe 10. Keine Faith- oder Victim-Boni. Mana-Kosten 127 auf Stufe 1, plus 56 je weiterer Stufe bis 631. Castzeit 0,6 Sekunden, Cooldown 60 Sekunden.',
 description_eng:'Increases only your own attributes for 600 seconds. Level 1 grants 3 Strength, 3 Vitality, 2 Wisdom and 2 Intelligence. Each additional level adds 2 to all four bonuses, reaching 21 Strength, 21 Vitality, 20 Wisdom and 20 Intelligence at level 10. No Faith or Victim bonuses. Mana cost starts at 127 and increases by 56 per additional level to 631. Cast time 0.6 seconds, cooldown 60 seconds.'};
 const expected={...before,...set};delete expected.faith;delete expected.vic;
 await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-master-elements-selfbuff-'+Date.now();await fs.mkdir(dir,{recursive:true});
 await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const path='data/reports/class-skill-counts.json';await fs.copyFile(path,dir+'/class-skill-counts.json');
 await col.updateOne({_id:before._id},{$set:set,$unset:{faith:'',vic:''}});
 assert.deepEqual(await col.findOne({_id:before._id}),expected);
 const report=JSON.parse(await fs.readFile(path,'utf8')),entry=report.classified.find(s=>s.nr===194),old=entry.category;entry.category='self';
 if(old!=='self')for(const row of report.counts.filter(c=>c.skillNumbers.includes(194))){row[old]--;row.self++;}
 await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/master-elements-selfbuff-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:expected},null,2)+'\n');
 console.log('Verified Master of the Elements: self buff; Faith and Victim removed; four remaining attribute curves and costs preserved.');
}catch(error){console.error('Self buff update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
