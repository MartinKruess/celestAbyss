import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,before=await collection.findOne({nr:141});
 const statScaling=structuredClone(before.statScaling);delete statScaling.str;
 const set={statScaling,attributeConversionBonus:{sourceStat:'vita',targetStat:'str',amountPerPoint:0.01,usesCurrentAttributeValue:true},
 description_de:'Permanenter passiver Skill mit 10 Stufen. Statt fester Stärke gewährt jede gelernte Stufe einen dynamischen Stärke-Bonus von 1 % der aktuellen gesamten Vitalität, einschließlich Ausrüstung, permanenten Passiven und aktiven Buffs. Der Faktor bleibt auf allen Stufen 1 %. Vitalität wird nicht verbraucht oder abgezogen. Intern wird ohne Rundung gerechnet; die Anzeige rundet auf ganze Punkte. Vita und Willenskraft: +2 auf Stufe 1 und 2, danach jeweils +2 bis +16 auf Stufe 9; Stufe 10 bleibt bei +16. Schildblock: +2 je Stufe bis +20. Block ist ein Punktewert. Keine Aktivierungskosten, Castzeit oder Cooldown.',
 description_eng:'Permanent passive with 10 levels. Replaces fixed Strength with a dynamic bonus equal to 1% of current total Vitality, including equipment, permanent passives and active buffs. The factor stays at 1% at every learned level. Vitality is not removed or consumed. Calculations retain precision; display rounds to whole points. Vitality and Wisdom: +2 at levels 1 and 2, then +2 per level through +16 at level 9; level 10 remains +16. Shield Block: +2 per level through +20 rating. No activation costs, cast time or cooldown.'};
 const candidate={...before,...set};delete candidate.str;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/iron-will-vitality-strength-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 await collection.updateOne({nr:141},{$set:set,$unset:{str:''}});
 const after=await collection.findOne({nr:141});
 if(!isDeepStrictEqual(after,candidate))throw Error('Read-back mismatch');
 console.log('Verified Iron Will: dynamic 1% current Vitality to bonus Strength, no Vitality loss; fixed Strength removed.');
}catch(error){console.error('Iron Will update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
