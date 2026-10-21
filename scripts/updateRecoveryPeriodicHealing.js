import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:124});
 if(before?.maxSkillLv!==15||!before.statScaling?.health)throw Error('Unexpected skill');
 const durations=[...Array(14).fill(3),4];
 const set={resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:22,perLevel:8}}],castTimeSeconds:0.2,dur:3,durationScaling:{type:'table',values:durations},effectsVersion:1,effects:[{key:'recovery-periodic-heal',type:'heal',target:'allyOrCompanion',value:11,unit:'flat',valueScaling:before.statScaling.health,intervalSeconds:1,firstTickAfterSeconds:1,durationSeconds:3,durationScaling:{type:'table',values:durations}}],description_de:'Heilt ein einzelnes anvisiertes verbündetes Ziel über Zeit. Jede Sekunde wird der Heilwert der aktuellen Skillstufe geheilt; erster Tick nach 1 Sekunde, kein zusätzlicher Sofort-Tick. Kumulative Heilwerte pro Tick von Stufe 1 bis 15: 11, 24, 39, 56, 75, 96, 119, 144, 171, 200, 231, 264, 299, 336, 375. Dauer auf Stufen 1 bis 14 jeweils 3 Sekunden (3 Ticks), erst auf Stufe 15 4 Sekunden (4 Ticks). Gesamt auf Stufe 1: 33 HP; auf Stufe 15: 1500 HP. Mana 22 auf Stufe 1 und +8 je weiterer Stufe, insgesamt 134 auf Stufe 15. Castzeit 0,2 Sekunden. Neuer Start-Cooldown und Senkung um 1 Sekunde je weiterer Stufe werden nach Bestätigung des gesprochenen Startwerts eingetragen; bisheriger Cooldown vorerst unverändert.',description_eng:'Heals a single selected allied target over time. Heals the current skill-level value once per second; first tick after 1 second, no additional instant tick. Cumulative healing per tick at levels 1–15: 11, 24, 39, 56, 75, 96, 119, 144, 171, 200, 231, 264, 299, 336, 375. Duration is 3 seconds (3 ticks) at levels 1–14, increasing only at level 15 to 4 seconds (4 ticks). Total healing: 33 HP at level 1, 1500 HP at level 15. Mana 22 plus 8 per additional level, totaling 134. Cast time 0.2 seconds. New starting cooldown and reduction by 1 second per additional level await clarification of the spoken starting value; existing cooldown temporarily retained.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/recovery-periodic-healing-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:124},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:124});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Recovery verified: Mana 22–134; 3 ticks, 4 only at level 15; 1500 HP maximum total. Cooldown clarification pending.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
