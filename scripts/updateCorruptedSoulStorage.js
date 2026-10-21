import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:120});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={resourceCosts:[],soulStorageSettings:{resource:'soulFragments',capacityScaling:{type:'linear',base:10,perLevel:10},persistsOffline:true,decaysOverTime:false,bonusStat:'vic',fragmentsPerBonusStep:10,bonusPerFullStep:2,usesCurrentStoredAmount:true,onCapacityReached:'discardExcess'},description_de:'Permanenter passiver Skill. Erlaubt auf Stufe 1 einen Speicher von 10 Seelenfragmenten und je weiterer Stufe 10 zusätzliche Plätze, bis zu 100 auf Stufe 10. Je volle 10 aktuell gespeicherte Seelenfragmente erhältst du +2 Victim: Bonus = 2 × abrunden(aktueller Vorrat / 10). Bei 100 gespeicherten Fragmenten insgesamt +20 Victim; bei leerem Speicher kein Victim-Bonus. Der Bonus sinkt entsprechend, wenn Seelen ausgegeben werden. Seelenfragmente sind eine eigene Ressource, getrennt vom Attribut Victim. Vorrat bleibt dauerhaft auch offline erhalten, ohne zeitlichen Verfall. Überschüssige Gewinne oberhalb der Speicherkapazität werden nicht aufgenommen. Der Skill erzeugt selbst keine Seelen. Keine Aktivierungskosten, Castzeit oder Cooldown. Eine Umbenennung in Seelensammler oder Reaper ist nur vorgemerkt, noch nicht beschlossen. Dies sind Skilldefinitionen; die persistente Charakterressource ist später serverseitig anzubinden.',description_eng:'Permanent passive skill. Soul-fragment storage starts at 10 at level 1 and gains 10 capacity per additional level, reaching 100 at level 10. Every complete 10 currently stored fragments grants +2 Victim: bonus = 2 × floor(current storage / 10). At 100 stored fragments the bonus is +20 Victim; empty storage grants none. Spending souls reduces the bonus accordingly. Soul fragments are a separate resource from the Victim attribute. Storage persists offline with no time decay. Gains beyond storage capacity are discarded. This skill does not generate souls itself. No activation costs, cast time or cooldown. Soul Collector or Reaper is only a possible future rename. These are skill definitions; persistent character-resource behavior still requires server integration.'};
 const candidate={...before,...set};delete candidate.vic;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/corrupted-soul-storage-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:120},{$set:set,$unset:{vic:''}});
 const after=await SkillDataModel.collection.findOne({nr:120});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 if(after.vic!==undefined)throw Error('Unconditional Victim remains');
 console.log('Corrupted Soul storage verified: capacity10–100, +2Victim per full10 current fragments, persistent without decay.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
