import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.findOne({nr:158}),effects=structuredClone(before.effects);
 const threat=effects.find(x=>x.type==='threatMultiplier'),drain=effects.find(x=>x.type==='resourceDrain');
 threat.value=2;threat.valueScaling={type:'linear',base:2,perLevel:1};
 drain.value=25;drain.valueScaling={type:'linear',base:25,perLevel:20};
 const set={maxSkillLv:2,effects,learningLimits:{...before.learningLimits,defaultMaxLevel:2,classOverrides:{Gladiator:1,Berserker:1,Knife:2,Templar:2,Ritter:2,Tempelritter:2}},
 description_de:'Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden.',
 description_eng:'Toggle with two learnable levels. Gladiator/Berserker learn level 1: damage-generated threat times 2, draining 25 Mana per Mana regeneration tick. Knight/Templar learn level 2: damage-generated threat times 3, draining 45 Mana per regeneration tick. Previous maximum effects and ongoing costs are preserved; only learning levels are compressed. Flat additional threat is not multiplied. No fixed duration; deactivates on insufficient Mana provisionally. Toggle cooldown 20 seconds, cast time 0 seconds.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/provoke-two-learning-levels-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 await c.updateOne({nr:158},{$set:set});
 if(!isDeepStrictEqual(await c.findOne({nr:158}),{...before,...set}))throw Error('Read-back mismatch');
 console.log('Verified Provoke two levels: Gladiator cap1/threat2/drain25; Knight cap2/threat3/drain45.');
}catch(e){console.error('Provoke compression failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
