import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:143});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={resourceCosts:[],statScaling:{wis:{type:'linear',base:3,perLevel:1},mdef:{type:'linear',base:6,perLevel:4}},effectsVersion:1,effects:[{key:'immunity-curse-resistance',type:'statusResistance',target:'self',resistedStatus:'curse',resistanceCheck:'onStatusApplication',value:0.01,unit:'fraction',valueScaling:{type:'linear',base:0.01,perLevel:0.01},durationSeconds:0}],description_de:'Permanenter passiver Skill. Je gelerntem Skilllevel 1 Prozent Chance, einen neu angewendeten Fluch abzuwehren, insgesamt 10 Prozent auf Stufe 10. Keine vollständige Fluchimmunität oder Entfernung bestehender Flüche. Bestehende Startboni +3 Wisdom und +6 direkte M-Defense; je weiterer Stufe +1 Wisdom und +4 direkte M-Defense, auf Stufe 10 insgesamt +12 Wisdom und +42 direkte M-Defense. Keine Aktivierungskosten, Castzeit oder Cooldown. Konkrete Flucharten und ihre Anwendung werden später definiert.',description_eng:'Permanent passive skill. Grants 1 percent curse resistance per learned skill level, totaling 10 percent at level 10, checked when a new curse is applied. Does not grant complete immunity or remove existing curses. Existing starting bonuses +3 Wisdom and +6 direct magical defense; each additional level adds +1 Wisdom and +4 direct magical defense, totaling +12 Wisdom and +42 direct magical defense at level 10. No activation costs, cast time or cooldown. Specific curse types and application rules will be defined later.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/immunity-curse-resistance-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:143},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:143});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Immunity verified: 1–10% curse resistance, Wisdom 3–12, direct M-Defense 6–42.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
