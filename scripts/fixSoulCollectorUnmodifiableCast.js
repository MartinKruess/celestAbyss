import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const s=await SkillDataModel.collection.findOne({nr:186});if(!s)throw Error('Missing skill');
 const de=s.description_de.replace('Castzeit 0,2 Sekunden, Cooldown 0,15 Sekunden.','Feste Castzeit 0,2 Sekunden, kein zusätzlicher Cooldown.').replace('Die genaue zeitliche Verrechnung von Castzeit und Cooldown ist noch offen.','Eine neue Anwendung beginnt frühestens nach Abschluss der vorherigen 0,2 Sekunden Castzeit. Angriffstempo, Cast-Speed-Boni und Cooldown-Reduktion verkürzen diese Zeit nicht. Im fünfsekündigen Sammelfenster sind daher höchstens 25 vollständige Anwendungen möglich.');
 const en=s.description_eng.replace('Cast time 0.2 seconds, cooldown 0.15 seconds.','Fixed cast time 0.2 seconds, no additional cooldown.').replace('Exact cast/cooldown scheduling remains pending.','A new application starts only after the previous 0.2-second cast completes. Attack speed, cast-speed bonuses and cooldown reduction cannot shorten this timing. The five-second collection window therefore permits at most 25 completed applications.');
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');
 const set={cd:0,castTimeSeconds:0.2,timingModifiers:{castTimeIsFixed:true,affectedByAttackSpeed:false,affectedByCastSpeed:false,affectedByCooldownReduction:false},description_de:de,description_eng:en};
 const candidate={...s,...set};delete candidate.cooldownScaling;delete candidate.castTimeScaling;await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/soul-collector-fixed-cast-no-cooldown-before.json',JSON.stringify(s,null,2)+'\n',{flag:'wx'});
 await SkillDataModel.collection.updateOne({nr:186},{$set:set,$unset:{cooldownScaling:'',castTimeScaling:''}});
 const saved=await SkillDataModel.collection.findOne({nr:186});for(const[k,v]of Object.entries(set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');if(saved.cooldownScaling||saved.castTimeScaling)throw Error('Unexpected scaling');
 console.log('Verified Soul Collector: cooldown0, fixed cast0.2 unaffected by attack/cast speed or CDR, max25 per5s.');
}catch(e){console.error(`Soul Collector timing update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
