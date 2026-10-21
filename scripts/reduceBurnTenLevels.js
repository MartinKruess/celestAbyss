import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:202});assert(b);const s=structuredClone(b);delete s._id;s.maxSkillLv=10;s.resourceCosts[0].scaling.values=s.resourceCosts[0].scaling.values.slice(0,10);
 s.description_de=s.description_de.replace('bis 156 auf Stufe 15','bis 106 auf Stufe 10').replace('160 bis 1560','160 bis 1060').replace('bis 234 auf Stufe 15','bis 159 auf Stufe 10');
 s.description_eng=s.description_eng.replace('to 156 at level 15','to 106 at level 10').replace('160 to 1560','160 to 1060').replace('from 24 to 234','from 24 to 159');
 await new SkillDataModel(s).validate();for(let l=1;l<=10;l++){const old=resolveSkillAtLevel(b,l),r=resolveSkillAtLevel(s,l);assert.equal(r.effects[0].value,old.effects[0].value);assert.equal(r.mana,old.mana);}const max=resolveSkillAtLevel(s,10);assert.equal(max.effects[0].value,106);assert.equal(max.mana,159);
 const backup='data/balancing/history/before-burn-ten-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/burn-ten-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:202,maxSkillLevel:10,maxTickDamage:106,maxMana:159,scope:'Remove levels 11–15; existing levels 1–10 and all timing unchanged.'},null,2)+'\n');console.log('Verified Burn capped at ten levels, 106 per tick and 159 Mana.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
