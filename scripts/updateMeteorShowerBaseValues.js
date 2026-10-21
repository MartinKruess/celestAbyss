import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:235});
 if(before?.maxSkillLv!==3||before.patk!==543)throw Error('Unexpected skill');
 const set={statScaling:{patk:{type:'table',values:[543,1086,2172]}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:255,perLevel:107}}],cd:468,cooldownScaling:{type:'linear',base:468,perLevel:-40},castTimeSeconds:0.8,dur:6,attackArea:{shape:'circle',center:'skillCenter',radiusMeters:6,geometryStatus:'defined',target:'enemiesInArea'},description_de:'Vorläufig beibehaltener Flächenangriff: Meteoritenschauer über einer Fläche mit 12 Metern Durchmesser (6 Meter Radius). Drei Skillstufen. Der bisher gespeicherte physische Skill-Grundschaden 543 verdoppelt sich je weiterer Stufe: 543/1086/2172. Schadensart bleibt vorerst entsprechend dem vorhandenen P-Angriff physisch. Mana 255/362/469. Cooldown 468/428/388 Sekunden, auf Stufe 3 also 6 Minuten 28 Sekunden. Castzeit 0,8 Sekunden. Letztgenannte Gesamtlaufzeit 6 Sekunden. Meteoriteneinschläge erfolgen versetzt in kleinen und etwas größeren Wellen mit je sechs Meteoriten; erste Teilwelle 40 Prozent, zweite 60 Prozent, Abstand innerhalb eines Paars 0,5 Sekunden. Genauer Paarrhythmus und ob die Prozentanteile je gesamter Welle oder je Meteorit gelten, werden gerade geklärt. Einschlagspositionen und lokale Trefferflächen müssen später definiert werden; nicht jeder Meteorit trifft jeden Gegner. Entscheidung über langfristigen Verbleib des Skills noch offen.',description_eng:'Provisionally retained area attack: meteor shower over a 12-meter-diameter area (6-meter radius). Three skill levels. Existing physical skill base damage 543 doubles per additional level: 543/1086/2172. Damage type provisionally remains physical according to the existing physical-attack field. Mana 255/362/469. Cooldown 468/428/388 seconds, reaching 6 minutes 28 seconds at level 3. Cast time 0.8 seconds. Latest stated duration 6 seconds. Staggered waves of six smaller then six slightly larger meteors, with 40 percent then 60 percent portions separated by 0.5 seconds. Exact pair cadence and whether portions apply per full wave or per meteor await clarification. Impact positions and local hit areas remain undefined; not every meteor hits every enemy. Long-term inclusion remains open.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/meteor-shower-base-values-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:235},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:235});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Meteor Shower base values verified: damage543/1086/2172; cooldown468/428/388; wave clarification pending.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
