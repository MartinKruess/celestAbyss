import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:194});assert.equal(before.dmgType,'selfbuff');
 const capstone={type:'table',values:[0,0,0,0,0,0,0,0,0,5]};
 const set={str:1,statScaling:{...before.statScaling,str:{type:'linear',base:1,perLevel:1},vita:capstone,wis:structuredClone(capstone)},
 description_de:'Erhöht ausschließlich deine eigenen Attribute für 600 Sekunden. Je Skillstufe erhältst du 1 Stärke, von 1 auf Stufe 1 bis 10 auf Stufe 10. Intelligenz beginnt bei 2 und steigt je weiterer Stufe um 2 auf 20. Vitalität und Willenskraft geben auf Stufe 1 bis 9 keinen Bonus; erst auf Stufe 10 erhältst du zusätzlich jeweils 5. Keine Faith- oder Victim-Boni. Mana-Kosten unverändert 127 auf Stufe 1, plus 56 je weiterer Stufe bis 631. Castzeit 0,6 Sekunden, Cooldown 60 Sekunden.',
 description_eng:'Increases only your own attributes for 600 seconds. Gain 1 Strength per skill level, from 1 at level 1 to 10 at level 10. Intelligence starts at 2 and increases by 2 per additional level to 20. Vitality and Wisdom grant no bonus at levels 1 through 9; level 10 additionally grants 5 each. No Faith or Victim bonuses. Mana cost remains 127 at level 1, plus 56 per additional level to 631. Cast time 0.6 seconds, cooldown 60 seconds.'};
 const expected={...before,...set};delete expected.vita;delete expected.wis;
 await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-master-elements-rebalance-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set,$unset:{vita:'',wis:''}});
 assert.deepEqual(await col.findOne({_id:before._id}),expected);
 await fs.writeFile('data/balancing/master-elements-selfbuff-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:expected},null,2)+'\n');
 console.log('Verified self buff: Strength 1–10; Vitality/Wisdom 0 until level 10, then 5 each; Intelligence and costs unchanged.');
}catch(error){console.error('Self buff rebalance failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
