import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const patches=[
{nr:77,set:{castTimeSeconds:0.6,hasLingeringDamage:false},unset:{dur:''}},
{nr:87,set:{hasLingeringDamage:false},unset:{dur:''}},
{nr:89,set:{mana:210,castTimeSeconds:0.3,hasLingeringDamage:false,statScaling:{patk:{type:'linear',base:387,perLevel:163}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:210,perLevel:87}}],attackExecution:{hitCount:1,damageValueScope:'perHit',targetMode:'singleEnemy',hitTimingStatus:'pending'},effectsVersion:1,effects:[{key:'skullsplitterDaze',type:'control',target:'enemy',controlKind:'dazed',actionRestrictionsStatus:'pending',durationSeconds:1,durationStatus:'defined',durationScaling:{type:'table',values:[1,1,1,1,2,2,2,2,2,3]},progressionStatus:'defined'}],description_de:'Trifft einen einzelnen Gegner physisch und macht ihn kurz benommen. Der Grundangriffswert steigt von 387 um 163 je weiterer Skillstufe auf 1854 auf Level 10. Die Mana-Kosten steigen von 210 um 87 je weiterer Stufe auf 993. Die Cast Time beträgt 0,3 Sekunden, der Cooldown bleibt zunächst bei 60 Sekunden. Die Benommenheit dauert auf Level 1 bis 4 1 Sekunde, auf Level 5 bis 9 2 Sekunden und auf Level 10 3 Sekunden. Der Schaden hat keine anhaltende Dauer; die genaue Einschränkung durch Benommenheit ist noch festzulegen.',description_eng:'Hits a single enemy physically and briefly dazes it. Base attack increases from 387 by 163 per additional skill level to 1854 at level 10. Mana cost increases from 210 by 87 per additional level to 993. Cast time is 0.3 seconds and cooldown remains provisionally 60 seconds. Daze lasts 1 second at levels 1 to 4, 2 seconds at levels 5 to 9, and 3 seconds at level 10. Damage has no lingering duration; exact action restrictions from daze remain to be defined.'},unset:{dur:''}},
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:patches.map(p=>p.nr)}}).toArray();if(before.length!==3)throw Error('Missing skill');
const hieb=before.find(s=>s.nr===77);patches[0].set.description_de=hieb.description_de+' Lädt den Hieb 0,6 Sekunden auf und schlägt dann zu. Keine anhaltende Schadensdauer.';patches[0].set.description_eng=hieb.description_eng+' Charges the strike for 0.6 seconds, then hits. No lingering damage duration.';
for(const p of patches){const s={...before.find(s=>s.nr===p.nr),...p.set};delete s.dur;await new SkillDataModel(s).validate();}
await fs.writeFile('data/balancing/skullsplitter-strike-timing-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of patches)await SkillDataModel.collection.updateOne({_id:before.find(s=>s.nr===p.nr)._id},{$set:p.set,$unset:p.unset});
for(const p of patches){const after=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Skullsplitter verified: single enemy, attack 387 to 1854, Mana 210 to 993, cast 0.3 s, daze 1/2/3 s. Mighty Strike cast 0.6 s; no lingering damage for either strike.');
}catch(e){console.error(`Skullsplitter update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
