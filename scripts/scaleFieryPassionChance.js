import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({skillName_eng:'Fiery Passion'});assert.ok(before);assert.equal(before.maxSkillLv,10);
 const set={triggerCondition:{...before.triggerCondition,chancePerCheck:0.005,chancePerCheckScaling:{type:'linear',base:0.005,perLevel:0.005}},description_de:before.description_de.replace('mit 5 Prozent Wahrscheinlichkeit Feurige Leidenschaft entfesseln','mit 0,5 Prozent Wahrscheinlichkeit je gelernter Skillstufe Feurige Leidenschaft entfesseln (0,5 Prozent auf Stufe 1, +0,5 Prozentpunkte je weiterer Stufe, maximal 5 Prozent auf Stufe 10)'),description_eng:before.description_eng.replace('have a5 percent chance per attack action','have a chance of 0.5 percent per learned skill level per attack action (0.5 percent at level 1, increasing by 0.5 percentage points per additional level to 5 percent at level 10)')};
 assert.notEqual(set.description_de,before.description_de);assert.notEqual(set.description_eng,before.description_eng);
 const after={...before,...set};await new SkillDataModel(after).validate();
 const dir='data/balancing/history/before-fiery-passion-chance-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),after);
 await fs.writeFile('data/balancing/fiery-passion-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:after,simulationStatus:'Random procs remain excluded from deterministic 600-second comparison'},null,2)+'\n');
 console.log('Verified Fiery Passion trigger chance0.5–5 percent over10 levels; other rules preserved.');
}catch(error){console.error('Fiery Passion chance update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
