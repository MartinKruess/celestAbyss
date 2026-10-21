import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;assert.equal(await col.countDocuments({skillName_eng:'Rock Fangs'}),0);
 const nr=(await col.find({}).sort({nr:-1}).limit(1).next()).nr+1;
 const mana=Array.from({length:20},(_,i)=>Math.round((73+46*i)*0.25));
 const skill={_id:new mongoose.Types.ObjectId(),nr,skillName_de:'Felszähne',skillName_eng:'Rock Fangs',category:'active',dmgType:'physical',charClass:['Shamane','High Elves'],maxSkillLv:20,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,patk:73,statScaling:{patk:{type:'linear',base:73,perLevel:46}},mana:mana[0],resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'table',base:mana[0],values:mana}}],manaPricing:{category:'normal',factor:0.25,basis:'skillBaseDamagePerTarget',usesCharacterAttack:false,version:1},castTimeSeconds:0.2,cd:33,cooldownScaling:{type:'linear',base:33,perLevel:-1},hasLingeringDamage:false,attackExecution:{hitCount:1,damageValueScope:'perHit',hitTimingStatus:'defined'},attackArea:{shape:'circle',center:'selectedTarget',geometryStatus:'pending',target:'enemiesInArea',evaluation:'atImpact'},
 description_de:'Lässt große, überkreuzte Felsspitzen um das anvisierte Ziel aus dem Boden schießen. Verursacht einmalig physischen Schaden an Gegnern in einem kleinen kreisförmigen Bereich um das Ziel; eng beieinanderstehende Gegner können gemeinsam getroffen werden. Grundschaden 73 auf Stufe 1, +46 je weiterer Stufe bis 947 auf Stufe 20, zuzüglich einmal des aktuellen P-Angriffs je getroffenem Gegner. Keine Verlangsamung, kein DoT und kein zusätzlicher Kontroll- oder Mehrfachtreffereffekt. Castzeit 0,2 Sekunden. Cooldown 33 Sekunden auf Stufe 1, −1 je weiterer Stufe bis 14 auf Stufe 20. Mana-Kosten entsprechen je Stufe gerundet 25 Prozent des Skill-Grundschadens, ohne Charakterangriff oder Gegnerzahl: 18 bis 237 Mana. Genauer Flächenradius, Reichweite und Animation noch offen. Der physische Schadensbonus von Weisheit des Salamanders gilt; deren Mana-Rabatt für Feuerangriffe gilt nicht.',
 description_eng:'Crossing rock spikes erupt around the selected target, dealing one physical hit to enemies in a small circular area. Closely grouped enemies can be hit together. Base damage 73 at level 1 plus 46 per additional level to 947 at level 20, plus full current physical attack once per target. No slow, damage over time, additional control or multi-hit effect. Cast time 0.2 seconds. Cooldown 33 seconds minus 1 per additional level to 14. Mana per level is rounded from 25 percent of skill base damage, excluding character attack and target count: 18 to 237. Exact area radius, range and animation remain undefined. Wisdom of the Salamander physical damage bonus applies; its fire Mana discount does not.'};
 const passive=await col.findOne({skillName_eng:'Wisdom of the Salamander'});assert.ok(passive);
 const effect={key:`salamander-damageBonus-${nr}-physical`,type:'damageBonus',target:'self',appliesTo:'specificSkill',targetSkillNumber:nr,value:0.003,unit:'fraction',durationSeconds:0,damageTypes:['physical'],valueScaling:{type:'linear',base:0.003,perLevel:0.003}};
 const passiveSet={effects:[...passive.effects,effect],description_de:passive.description_de.replace('Rotierschlag und Sprungschlag','Rotierschlag, Sprungschlag und Felszähne'),description_eng:passive.description_eng.replace('Rotating Strike and Jump Strike','Rotating Strike, Jump Strike and Rock Fangs')};
 for(const record of [skill,{...passive,...passiveSet}])await new SkillDataModel(record).validate();
 const dir='data/balancing/history/before-rock-fangs-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/salamander.json',JSON.stringify(passive,null,2)+'\n');
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8'));await fs.copyFile(path,dir+'/class-skill-counts.json');
 const row=report.counts.find(c=>c.name==='Schamane / Hochelfe');assert.equal(row.total,27);
 await mongoose.connection.transaction(async session=>{await col.insertOne(skill,{session});await col.updateOne({_id:passive._id},{$set:passiveSet},{session});});
 assert.deepEqual(await col.findOne({nr}),skill);assert.deepEqual(await col.findOne({_id:passive._id}),{...passive,...passiveSet});
 row.skillNumbers.push(nr);row.skillNumbers.sort((a,b)=>a-b);row.total++;row.offensive++;report.catalogCount=await col.countDocuments({});
 report.classified.push({nr,id:String(skill._id),name:skill.skillName_de,classes:skill.charClass,category:'offensive',activeDefensive:false});await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/rock-fangs-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill},null,2)+'\n');
 console.log('Verified Rock Fangs skill'+nr+':20 levels,73–947 physical base, Mana18–237, cooldown33–14, cast0.2. Shaman28 skills. Radius pending.');
}catch(error){console.error('Rock Fangs creation failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
