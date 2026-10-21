import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;assert.equal(await col.countDocuments({skillName_eng:'Favor of the Sylphs'}),0);
 const nr=(await col.find({}).sort({nr:-1}).limit(1).next()).nr+1;
 const effects=[118,125,221].flatMap(targetSkillNumber=>[
  {key:'sylph-cooldown-'+targetSkillNumber,type:'cooldownReduction',target:'self',appliesTo:'specificSkill',targetSkillNumber,value:1,unit:'flat',durationSeconds:0,valueScaling:{type:'linear',base:1,perLevel:1}},
  {key:'sylph-damage-'+targetSkillNumber,type:'damageBonus',target:'self',appliesTo:'specificSkill',targetSkillNumber,value:0.01,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:0.01,perLevel:0.01}},
  {key:'sylph-mana-'+targetSkillNumber,type:'resourceCostReduction',resource:'mana',target:'self',appliesTo:'specificSkill',targetSkillNumber,value:0.01,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:0.01,perLevel:0.01}},
 ]);
 const skill={_id:new mongoose.Types.ObjectId(),nr,skillName_de:'Gunst der Sylphen',skillName_eng:'Favor of the Sylphs',category:'passive',dmgType:'passive',charClass:['Druide','Alchemist'],maxSkillLv:5,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,resourceCosts:[],effectsVersion:1,effects,
 description_de:'Die Gunst der Sylphen ermöglicht dir eine bessere und gezieltere Windkontrolle. Je Skillstufe verkürzt sich der Cooldown von Windschlitzer, Windfesseln und Vakuumimpuls um 1 Sekunde, ihr gesamter verursachter Schaden steigt um 1 Prozent und ihre Mana-Kosten sinken um 1 Prozent. Auf Stufe 5 sind dies 5 Sekunden weniger Cooldown, 5 Prozent mehr Schaden und 5 Prozent weniger Mana-Kosten. Bei Vakuumimpuls gelten die Schadensboni für Initialtreffer und Explosion einschließlich des jeweiligen Charakterangriffs. Keine Wirkung auf Naturgeist, Auto-Attacks oder andere Skills. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.',
 description_eng:'The favor of the sylphs enables more precise control of wind magic. Each skill level reduces Wind Slasher, Wind Shackles and Vacuum Impulse cooldowns by 1 second, increases their total damage by 1 percent and reduces their Mana costs by 1 percent. At level 5: 5 seconds less cooldown, 5 percent more damage and 5 percent lower Mana cost. For Vacuum Impulse, damage bonuses apply to both initial hit and explosion including their respective character attack contributions. No effect on Nature Spirit, basic attacks or other skills. Permanent passive with no activation cost, cast time or cooldown.'};
 await new SkillDataModel(skill).validate();
 const dir='data/balancing/history/before-sylph-favor-'+Date.now();await fs.mkdir(dir,{recursive:true});
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8'));await fs.copyFile(path,dir+'/class-skill-counts.json');
 const count=report.counts.find(c=>c.name==='Druide / Alchemist');assert.equal(count.total,30);
 await col.insertOne(skill);assert.deepEqual(await col.findOne({nr}),skill);
 count.skillNumbers.push(nr);count.skillNumbers.sort((a,b)=>a-b);count.total++;count.passive++;report.catalogCount=await col.countDocuments({});
 report.classified.push({nr,id:String(skill._id),name:skill.skillName_de,classes:skill.charClass,category:'passive',activeDefensive:false});await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 const prePath='data/balancing/druid-precombat.json',pre=JSON.parse(await fs.readFile(prePath,'utf8'));await fs.copyFile(prePath,dir+'/druid-precombat.json');
 for(const variant of pre.variants)variant.includedSkills.push(nr);await fs.writeFile(prePath,JSON.stringify(pre,null,2)+'\n');
 await fs.writeFile('data/balancing/sylph-favor-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill,simulationStatus:'Previous 600-second report predates this passive'},null,2)+'\n');
 console.log('Verified Gunst der Sylphen, skill '+nr+': five levels, 1s cooldown / +1% damage / -1% Mana per level for skills118,125,221. Druid31: 18 active,13 passive.');
}catch(error){console.error('Sylph passive update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
