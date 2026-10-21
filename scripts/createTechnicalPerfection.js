import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 if(await SkillDataModel.collection.findOne({$or:[{nr:243},{skillName_de:'Technische Perfektion'}]}))throw Error('Skill exists');
 const doc=new SkillDataModel({nr:243,skillName_de:'Technische Perfektion',skillName_eng:'Technical Perfection',category:'passive',charClass:['Villian','Shadowwarrior'],dmgType:'passive',maxSkillLv:1,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,resourceCosts:[],attributeConversionBonus:{sourceStat:'dex',targetStat:'maxMana',amountPerPoint:2,usesCurrentAttributeValue:true},description_de:'Einstufiger permanenter passiver Skill. Jeder aktuelle Geschickpunkt gewährt zusätzlich 2 Max-Mana. Verwendet den aktuellen Gesamtwert einschließlich Geschick aus Ausrüstung, permanenten Passiven und aktiven Attributboni; spätere Änderungen wirken auf den Bonus. Mit derzeit 55 bekannten Geschickpunkten ohne aktive Buffs +110 Max-Mana, zuzüglich eines noch nicht festgelegten Geschick-Startwerts. Keine direkte Mana-Wiederherstellung, zusätzliche Regeneration oder weitere Manakostenreduktion. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. Aktuelles Mana bei Änderungen des Maximums wird nach der noch zentral festzulegenden Regel behandelt.',description_eng:'One-level permanent passive. Each current Dexterity point grants +2 maximum Mana. Uses current total Dexterity including equipment, permanent passives and active attribute bonuses; later changes affect the bonus. Currently known 55 Dexterity without active buffs grants +110 maximum Mana, plus any starting Dexterity still undefined. No instant Mana restoration, extra regeneration or further cost reduction. No activation costs, cast time, cooldown or limited duration. Current-Mana handling on maximum changes follows a central rule still pending.'});
 await doc.validate();await doc.save();
 const after=await SkillDataModel.collection.findOne({nr:243});if(after?.attributeConversionBonus?.amountPerPoint!==2)throw Error('Read-back mismatch');
 await fs.writeFile('data/balancing/technical-perfection-created.json',JSON.stringify(after,null,2)+'\n');
 console.log('Technical Perfection created: +2maxMana per current Dexterity, one passive level.');
}catch(e){console.error('Create failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
