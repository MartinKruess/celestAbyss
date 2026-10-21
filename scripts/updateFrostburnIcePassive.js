import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:54});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const chance=[0.0125,0.025,0.0375,0.05,0.05,0.0625,0.075,0.0875,0.1,0.1];
 const set={resourceCosts:[],effectsVersion:1,effects:[{key:'frostburn-ice-spell-bonus',type:'damageBonus',target:'self',appliesTo:'allSkills',damageSchool:'ice',value:0,unit:'fraction',valueScaling:{type:'table',values:[0,0,0,0,0.01,0.01,0.01,0.01,0.01,0.02]},durationSeconds:0},{key:'frostburn-freeze',type:'control',target:'enemy',controlKind:'freeze',applicationTrigger:'ownIceAttackHit',hitChance:chance[0],valueScaling:{type:'table',values:chance},durationSeconds:2},{key:'frostburn-periodic-damage',type:'periodicDamage',target:'enemy',damageTypes:['magical'],damageSchool:'ice',value:11,unit:'flat',valueScaling:{type:'linear',base:11,perLevel:120/9},intervalSeconds:1,firstTickAfterSeconds:1,durationSeconds:2,endWith:'frostburn-freeze',addsCasterMagicalAttack:false}],description_de:'Permanenter passiver Skill ohne direkten M-Angriffsbonus. Eiszauber verursachen ab Stufe 5 insgesamt 1 Prozent und ab Stufe 10 insgesamt 2 Prozent mehr Schaden. Auf den übrigen Stufen steigt die Chance, dass ein eigener treffender Eisangriff das Ziel für 2 Sekunden einfriert: Stufe 1/2/3/4/5/6/7/8/9/10 jeweils 1,25/2,5/3,75/5/5/6,25/7,5/8,75/10/10 Prozent. Löst dieses Einfrieren aus, erleidet das Ziel bei Sekunde 1 und 2 zusätzlich Gefrierbrand-Schaden. Grundschaden je Tick steigt gleichmäßig von 11 auf 131 über zehn Stufen, ohne Charakter- oder Waffen-M-Angriff je Tick. Auf Stufe 10 zwei Ticks zu je 131, insgesamt 262 Grundschaden. Der DoT ist an das durch diesen Skill ausgelöste Einfrieren gebunden und endet mit ihm. Keine Aktivierungskosten, Castzeit oder Cooldown festgelegt. Erneute Anwendung, Bossresistenzen, Einfrieren durch andere Skills und die Wechselwirkung des Eisbonus mit dem eigenen DoT werden später geprüft.',description_eng:'Permanent passive with no direct magical attack bonus. Ice spells gain a total of 1 percent increased damage at level 5 and 2 percent at level 10. Other levels increase the chance for an own successful ice attack to freeze the target for 2 seconds: levels 1–10 grant 1.25/2.5/3.75/5/5/6.25/7.5/8.75/10/10 percent. When this freeze procs, Frostburn deals additional damage at seconds 1 and 2. Base damage per tick increases linearly from 11 to 131 across ten levels, without character or weapon magical attack added per tick. Level 10 totals two ticks of 131, or 262 base damage. The DoT is linked to this passive’s freeze and ends with it. No activation costs, cast time or cooldown defined. Reapplication, boss resistances, freezes from other skills and interaction of the ice bonus with its own DoT remain pending.'};
 const candidate={...before,...set};delete candidate.matk;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/frostburn-ice-passive-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:54},{$set:set,$unset:{matk:''}});
 const after=await SkillDataModel.collection.findOne({nr:54});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 if(after.matk!==undefined)throw Error('Old attack bonus remains');
 console.log('Frostburn saved: ice bonus 0–2%, freeze chance 1.25–10%, two ticks 11–131.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
