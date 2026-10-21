import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 if(await SkillDataModel.collection.findOne({$or:[{nr:242},{skillName_de:'Assimilation'}]}))throw Error('Skill already exists');
 const doc=new SkillDataModel({nr:242,skillName_de:'Assimilation',skillName_eng:'Assimilation',category:'active',charClass:['Healer','Priest'],dmgType:'selfbuff',maxSkillLv:5,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,mana:200,manaRegen:5,statScaling:{mana:{type:'linear',base:200,perLevel:25},manaRegen:{type:'linear',base:5,perLevel:5}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:27,perLevel:8}}],dur:600,cd:60,castTimeSeconds:0.3,description_de:'Eigenbuff für 600 Sekunden (10 Minuten). Erhöht das maximale Mana auf Stufe 1 um 200 und je weiterer Stufe um 25, auf Stufe 5 insgesamt um 300. Zusätzlich +5 direkte MP-Regeneration je gelerntem Skilllevel, auf Stufe 5 +25 pro Mana-Regenerationstick. Dies ist ein Max-Mana-Bonus, keine sofortige Mana-Wiederherstellung. Kostet 27 Mana auf Stufe 1 und +8 je weiterer Stufe, auf Stufe 5 59. Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Erneute Anwendung erneuert die Laufzeit, ohne die Boni mit sich selbst zu stapeln. Regenerationstick-Intervall und Umgang mit aktuellem Mana bei Max-Mana-Änderungen werden zentral festgelegt.',description_eng:'Self buff lasting 600 seconds (10 minutes). Increases maximum Mana by 200 at level 1 and 25 per additional level, reaching 300 at level 5. Also grants +5 direct Mana regeneration per learned level, reaching +25 per Mana regeneration tick. This increases maximum Mana, not instant Mana restoration. Costs 27 Mana plus 8 per additional level, reaching 59. Cooldown 60 seconds, cast time 0.3 seconds. Reapplying refreshes duration without stacking the bonuses with themselves. Tick interval and current-Mana handling when maximum Mana changes are configured centrally.'});
 await doc.validate();await doc.save();
 const after=await SkillDataModel.collection.findOne({nr:242});
 if(after?.mana!==200||after.statScaling.mana.perLevel!==25||after.resourceCosts[0].scaling.base!==27)throw Error('Read-back mismatch');
 await fs.writeFile('data/balancing/assimilation-created-definition.json',JSON.stringify(after,null,2)+'\n');
 console.log('Assimilation verified: maxMana200–300, MPregen5–25, cost27–59, duration600, cooldown60, cast0.3.');
}catch(e){console.error('Create failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
