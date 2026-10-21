import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:72});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={statScaling:{matk:{type:'linear',base:112,perLevel:43}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:67,perLevel:43}}],cd:45,cooldownScaling:{type:'linear',base:45,perLevel:-5/9},castTimeSeconds:0.1,animationDurationSeconds:0.5,animationTimingStatus:'provisional',durationScaling:{type:'table',values:Array(10).fill(0)},description_de:'Greift einen Gegner einmalig magisch an und heilt den Anwender. Magischer Skill-Grundschaden 112 auf Stufe 1 und +43 je weiterer Stufe, auf Stufe 10 499. Mana 67 und +43 je weiterer Stufe, auf Stufe 10 454. Cooldown gleichmäßig von 45 auf 40 Sekunden über zehn Stufen. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden, kein Schaden über Zeit. Heilformel noch in Auswahl: Variante A startet bei 1 Prozent des verursachten Schadens und steigt um 0,5 Prozentpunkte je weiterer Stufe auf 5,5 Prozent. Variante B heilt 85 HP je gelerntem Skilllevel und erst auf Stufe 10 zusätzlich 1 Prozent des verursachten Schadens. Noch keine Variante bestätigt; der alte 10-Prozent-Heilwert gilt nicht mehr.',description_eng:'Attacks one enemy once with magic and heals the caster. Magical skill base damage 112 plus 43 per additional level, reaching 499 at level 10. Mana 67 plus 43 per additional level, reaching 454. Cooldown decreases linearly from 45 to 40 seconds across ten levels. Cast time 0.1 seconds, provisional animation 0.5 seconds, no damage over time. Healing formula pending selection: option A starts at 1 percent of damage dealt and adds 0.5 percentage points per additional level, reaching 5.5 percent. Option B heals 85 HP per learned skill level and at level 10 adds 1 percent of damage dealt. Neither option is confirmed yet; old 10-percent healing is superseded.'};
 const candidate={...before,...set};delete candidate.health;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/life-drainer-attack-values-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:72},{$set:set,$unset:{health:''}});
 const after=await SkillDataModel.collection.findOne({nr:72});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Life Drainer attack values verified; healing alternatives left pending.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
