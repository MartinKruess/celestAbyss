import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[253,203]}}).toArray();assert.equal(before.length,2);
 const changes=before.map(b=>{const s=structuredClone(b);delete s._id;
 if(s.nr===203){s.skillName_de='Kanalisierung';return {before:b,skill:s};}
 delete s.levelProgression;s.maxSkillLv=10;
 for(const e of s.effects){if(e.type==='cooldownReduction'){e.value=.5;e.valueScaling={type:'linear',base:.5,perLevel:.5};}else if(e.type==='castTimeReduction'){e.value=0;e.valueScaling={type:'table',values:[0,0,0,0,0,0,0,0,0,.1]};}}
 s.description_de='Die Gunst der Sylphen verbessert deine Windkontrolle. Zehn Stufen. Wirkt ausschließlich auf Windschlitzer, Windfesseln und Vakuumimpuls: je Stufe 0,5 Sekunden weniger Cooldown, 0,5 Prozent mehr gesamter verursachter Schaden und 0,5 Prozent weniger Mana-Kosten. Auf Stufe 10: 5 Sekunden weniger Cooldown, 5 Prozent mehr Schaden und 5 Prozent weniger Mana-Kosten; zusätzlich erst auf Stufe 10 0,1 Sekunden weniger Castzeit. Der Schadensbonus umfasst den jeweiligen Charakterangriff und bei Vakuumimpuls beide Schadensphasen. Keine Wirkung auf andere Skills, Naturgeist oder Auto-Attacks. Keine zusätzliche MP-Regeneration. Ansaugdauer und Animation bleiben unverändert. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.';
 s.description_eng='Permanent passive with ten levels, affecting only Wind Slasher, Wind Shackles and Vacuum Impulse. Each level reduces cooldown by 0.5 seconds, increases their total damage by 0.5% and reduces Mana cost by 0.5%. At level 10: 5 seconds less cooldown, 5% more damage and 5% lower Mana cost. Only at level 10, cast time is also reduced by 0.1 seconds. Includes character attack contributions and both Vacuum Impulse damage phases. Does not affect other skills, Nature Spirit or basic attacks. Grants no MP regeneration. Pull duration and animation are unchanged. No activation costs, cast time or cooldown.';
 s.levelProgression=buildSkillProgression(s);return {before:b,skill:s};});
 for(const{skill:s}of changes){await new SkillDataModel(s).validate();if(s.nr===253){for(let l=1;l<=10;l++){const r=resolveSkillAtLevel(s,l);for(const e of r.effects){const expected=e.type==='cooldownReduction'?l*.5:e.type==='castTimeReduction'?(l===10?.1:0):l*.005;assert(Math.abs(e.value-expected)<1e-9);}}}}
 const backup='data/balancing/history/before-sylph-ten-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const{before:b,skill:s}of changes){await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);}
 await fs.writeFile('data/balancing/sylph-ten-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Verified Sylph Favor ten levels and Kanalisierung name correction.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
