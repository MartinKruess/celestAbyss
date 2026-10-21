import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[204,205]}}).toArray();assert.equal(before.length,2);
 const durationScaling={type:'linear',base:24,perLevel:2};
 const plans=before.map(skill=>{
  const deGroup=skill.nr===204?'Aurora':'Menschen und Umbra';
  const enGroup=skill.nr===204?'Aurora':'Human and Umbra';
  const set={dur:24,durationScaling,cd:180,cooldownScaling:{type:'linear',base:180,perLevel:-2},effects:skill.effects.map(e=>({...e,durationSeconds:24,durationScaling})),
   description_de:`Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker ${deGroup}. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5.`,
   description_eng:`Creates an enhancement field for ${enGroup} group members. Within the field, physical attack increases by 25 and magical attack by 50 per skill level, reaching +125 physical and +250 magical attack at level 5. Field duration starts at 24 seconds and increases by 2 per additional level to 32 seconds. Cooldown starts at 180 seconds and decreases by 2 per additional level to 172 seconds. Another catalyst cannot be placed in an area already occupied by a catalyst. Cast time is 1.8 seconds. Mana cost remains 198 at level 1, plus 87 per additional level to 546 at level 5.`};
  return {skill,set};
 });
 for(const p of plans)await new SkillDataModel({...p.skill,...p.set}).validate();
 const dir='data/balancing/history/before-catalyst-timing-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 await mongoose.connection.transaction(async session=>{for(const p of plans)await col.updateOne({_id:p.skill._id},{$set:p.set},{session});});
 const saved=[];for(const p of plans){const after=await col.findOne({_id:p.skill._id});assert.deepEqual(after,{...p.skill,...p.set});saved.push(after);}
 await fs.writeFile('data/balancing/catalyst-field-decisions.json',JSON.stringify({status:'appliedAndVerified',variant:'B',backup:dir,skills:saved},null,2)+'\n');
 console.log('Verified both catalysts: duration24–32 seconds, cooldown180–172 seconds. Damage bonuses, recipients, Mana and cast unchanged.');
}catch(error){console.error('Catalyst timing update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
