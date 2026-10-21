import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:48});
 if(before?.maxSkillLv!==5)throw Error('Unexpected skill');
 const caps=[2,2,4,4,6];
 const set={attackArea:{...before.attackArea,center:'selectedTarget',radiusMeters:1.5,radiusScaling:{type:'table',values:[1.5,1.5,2.5,2.5,3.5]},maxTargets:2,maxTargetsScaling:{type:'table',values:caps},centerTracking:'pending'},soulGenerationSettings:{onSuccessfulHit:true,fragmentsPerUniqueEnemy:1,oncePerEnemyPerActivation:true,requiresKill:false,maximumUniqueEnemiesScaling:{type:'table',values:caps}},description_de:before.description_de.replace('mit 7 Metern Durchmesser (3,5 Meter Radius), maximale Feldlaufzeit 10 Sekunden.','um das anvisierte Ziel, maximale Feldlaufzeit 10 Sekunden. Fläche und Gegnerlimit steigen in Stufen: Stufe 1–2: 3 Meter Durchmesser und bis zu 2 Gegner; Stufe 3–4: 5 Meter Durchmesser und bis zu 4 Gegner; Stufe 5: 7 Meter Durchmesser und bis zu 6 Gegner. Jeder erstmals erfolgreich getroffene Gegner gibt pro Anwendung genau 1 Seelenfragment, unabhängig von späteren Schadensticks und ohne Tötungsvoraussetzung. Das Limit gilt für unterschiedliche Gegner über die gesamte Anwendung, damit durch Zielwechsel nicht mehr als 2/4/6 Seelen gewonnen werden. Weitere Treffer desselben Gegners geben keine zusätzliche Seele. Maximal 6 Seelen auf Stufe 5, begrenzt durch freie Plätze im Reaper-Speicher. Zielauswahl bei mehr Gegnern sowie Mitbewegung des Felds bleiben offen.'),description_eng:before.description_eng.replace('7 meters in diameter (3.5-meter radius), lasting at most 10 seconds.','around the selected target, lasting at most 10 seconds. Area and target limit increase in milestones: levels 1–2: 3-meter diameter, up to 2 enemies; levels 3–4: 5-meter diameter, up to 4 enemies; level 5: 7-meter diameter, up to 6 enemies. Each enemy successfully hit for the first time grants exactly 1 soul fragment per activation, regardless of subsequent damage ticks, with no kill requirement. The limit applies to unique enemies across the entire activation so switching targets cannot generate more than 2/4/6 souls. Further hits on the same enemy grant no extra souls. Maximum 6 souls at level 5, limited by remaining Reaper storage capacity. Target selection among excess enemies and field tracking remain pending.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/damned-fire-soul-generation-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:48},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:48});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Damned Fire verified: diameter3/5/7m, unique targets2/4/6, one soul per distinct hit enemy per activation.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
