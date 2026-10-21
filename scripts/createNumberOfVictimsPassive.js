import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 if(await SkillDataModel.collection.findOne({$or:[{nr:241},{skillName_de:'Zahl der Opfer'}]}))throw Error('Skill exists');
 const doc=new SkillDataModel({nr:241,skillName_de:'Zahl der Opfer',skillName_eng:'Number of Victims',category:'passive',charClass:['Bloodmage','Ritualist'],dmgType:'passive',maxSkillLv:10,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,resourceCosts:[],soulReserveBonusSettings:{stat:'matk',bonusPerStoredFragment:1,maximumBonus:100,usesCurrentStoredAmount:true,levelProgressionStatus:'pending'},description_de:'Permanenter passiver Vorratsbonus. Jede aktuell gespeicherte Seele im durch Reaper verwalteten Seelenspeicher gewährt +1 direkten M-Angriff, maximal +100 bei 100 gespeicherten Seelen. Beim Sammeln steigt und beim Ausgeben sinkt der Bonus entsprechend. Gilt ausdrücklich zusätzlich zum Victim-Bonus von Reaper. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit oder begrenzte Dauer. Die zehn Lernstufen aus der Quelle sind vorläufig beibehalten; ihre konkrete Funktion beziehungsweise Skalierung ist noch festzulegen.',description_eng:'Permanent passive reserve bonus. Each currently stored soul in the Reaper-managed soul reserve grants +1 direct magical attack, capped at +100 with 100 stored souls. Collecting increases and spending decreases the bonus. Explicitly additional to Reaper’s Victim bonus. Generates no souls and uses neither historical kill counts nor morality. No activation cost, cast time or limited duration. Ten source learning levels are provisionally retained; their exact function/progression remains pending.'});
 await doc.validate();await doc.save();
 const after=await SkillDataModel.collection.findOne({nr:241});if(after?.soulReserveBonusSettings?.bonusPerStoredFragment!==1)throw Error('Read-back mismatch');
 await fs.writeFile('data/balancing/number-of-victims-created.json',JSON.stringify(after,null,2)+'\n');
 console.log('Zahl der Opfer created as nr241: +1 direct magical attack per current soul, cap100; learning progression pending.');
}catch(e){console.error('Create failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
