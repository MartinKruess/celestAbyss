import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:115});assert(before);assert.equal(before.castTimeSeconds,1);
 const set={castTimeSeconds:.1,
 description_de:'Führt nach 0,1 Sekunden Castzeit einen einzelnen physischen Treffer aus. Die Animationsdauer ist separat noch festzulegen. Der getroffene Gegner wird für 0,5 Sekunden paralysiert; genaue Aktionseinschränkungen bleiben offen. Physischer Skill-Grundschaden: 636 auf Stufe 1, +230 je weiterer Stufe bis 1556 auf Stufe 5. Mana-Kosten je Stufe: 159/217/274/332/389, exakt gerundete 25 Prozent des Skill-Grundschadens ohne Charakterangriff, vor Rabatten. Cooldown: 120 Sekunden auf Stufe 1, -3 je weiterer Stufe bis 108 Sekunden auf Stufe 5.',
 description_eng:'Performs a single physical hit after a 0.1-second cast time. Animation duration remains to be defined separately. The target is paralyzed for 0.5 seconds; exact action restrictions remain pending. Physical skill base damage starts at 636 and increases by 230 per additional level to 1556 at level 5. Mana costs by level: 159/217/274/332/389, exactly rounded 25 percent of skill base damage excluding character attack, before discounts. Cooldown starts at 120 seconds and decreases by 3 per additional level to 108 seconds at level 5.'};
 await new SkillDataModel({...before,...set}).validate();
 const backup='data/balancing/history/before-supersonic-cast-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),{...before,...set});
 await fs.writeFile('data/balancing/supersonic-blade-cast-decision.json',JSON.stringify({status:'appliedAndVerified',backup,before,changes:set,animationDuration:'Pending: old one-second value was not confirmed as animation duration.'},null,2)+'\n');
 console.log('Verified Supersonic Blade cast time 0.1 seconds; damage, Mana and cooldown unchanged.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
