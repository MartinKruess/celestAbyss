import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:235});assert(before);
 const skill={...before,attackExecution:{...before.attackExecution,physicalDamageAttackSource:'magicalAttack'},description_de:before.description_de.replace('Schadensart bleibt vorerst entsprechend dem vorhandenen P-Angriff physisch.','Der Schaden bleibt physisch, sein zusätzlicher Charakterangriffsanteil skaliert jedoch mit dem aktuellen M-Angriff des Anwenders statt mit dessen P-Angriff. Physische Schadensboni und gegnerische physische Abwehr gehören weiterhin zum physischen Schadenskanal.'),description_eng:before.description_eng.replace('Damage type provisionally remains physical according to the existing physical-attack field.','Damage remains physical, but its additional caster-attack contribution uses the caster’s current magical attack instead of physical attack. Physical damage modifiers and enemy physical defense still belong to the physical damage channel.')};
 assert.notEqual(skill.description_de,before.description_de);assert.notEqual(skill.description_eng,before.description_eng);
 await new SkillDataModel(skill).validate();
 for(const k of ['statScaling','resourceCosts','manaPricing','patk','matk','cd','cooldownScaling','castTimeSeconds','levelProgression'])assert.deepEqual(skill[k],before[k]);
 const backup='data/balancing/history/before-meteor-magic-scaling-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:{attackExecution:skill.attackExecution,description_de:skill.description_de,description_eng:skill.description_eng}});assert.deepEqual(await col.findOne({_id:before._id}),skill);
 await fs.writeFile('data/balancing/meteor-magical-attack-source-decision.json',JSON.stringify({status:'appliedAndVerified',backup,skill,scope:'Only Meteor Shower caster attack source changed from physicalAttack to magicalAttack. Physical damage channel retained; no changes to skill base damage, Mana, cooldown, cast time or waves. Burn remains unchanged pending definition of its scaling.'},null,2)+'\n');
 console.log('Verified Meteor Shower: magical-attack scaling, physical damage. Burn unchanged.');
}catch(error){console.error('Meteor update failed ('+error.name+'); credentials omitted.');if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}
