import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({skillName_eng:'Favor of the Sylphs'});assert.ok(before);assert.equal(before.maxSkillLv,5);
 const effects=before.effects.filter(e=>e.type!=='castTimeReduction').map(e=>['damageBonus','resourceCostReduction'].includes(e.type)?{...e,value:0.005,valueScaling:{type:'linear',base:0.005,perLevel:0.005}}:e);
 for(const targetSkillNumber of [118,125,221])effects.push({key:'sylph-cast-'+targetSkillNumber,type:'castTimeReduction',target:'self',appliesTo:'specificSkill',targetSkillNumber,value:0,unit:'flat',durationSeconds:0,valueScaling:{type:'table',values:[0,0,0,0,0.1]}});
 const set={effects,description_de:'Die Gunst der Sylphen ermöglicht dir eine bessere und gezieltere Windkontrolle. Je Skillstufe verkürzt sich der Cooldown von Windschlitzer, Windfesseln und Vakuumimpuls um 1 Sekunde, ihr gesamter verursachter Schaden steigt um 0,5 Prozent und ihre Mana-Kosten sinken um 0,5 Prozent. Auf Stufe 5 sind dies 5 Sekunden weniger Cooldown, 2,5 Prozent mehr Schaden und 2,5 Prozent weniger Mana-Kosten. Ausschließlich auf Stufe 5 verkürzt sich zusätzlich die Castzeit dieser drei Skills um 0,1 Sekunden. Bei Vakuumimpuls gilt der Schadensbonus für Initialtreffer und Explosion einschließlich des jeweiligen Charakterangriffs. Ansaugdauer und Animation werden durch diesen Castzeitbonus nicht verkürzt. Keine Wirkung auf Naturgeist, Auto-Attacks oder andere Skills. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.',description_eng:'The favor of the sylphs enables more precise control of wind magic. Each level reduces Wind Slasher, Wind Shackles and Vacuum Impulse cooldowns by 1 second, increases their total damage by 0.5 percent and reduces Mana costs by 0.5 percent. At level 5: 5 seconds less cooldown, 2.5 percent more damage and 2.5 percent lower Mana cost. Only at level 5, their cast times are additionally reduced by 0.1 seconds. Vacuum Impulse damage bonuses apply to both initial hit and explosion including character attack. Pull duration and animation are unaffected by cast-time reduction. No effect on Nature Spirit, basic attacks or other skills. Permanent passive without activation cost, cast time or cooldown.'};
 const expected={...before,...set};await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-sylph-favor-refinement-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),expected);
 await fs.writeFile('data/balancing/sylph-favor-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:expected,simulationStatus:'Previous 600-second report predates this passive'},null,2)+'\n');
 console.log('Verified Gunst der Sylphen: -5s cooldown, +2.5% damage, -2.5% Mana; -0.1s cast only at level5.');
}catch(error){console.error('Sylph refinement failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
