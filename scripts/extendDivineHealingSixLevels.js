import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:58});
 if(!before)throw Error('Missing skill');
 const set={maxSkillLv:6,durationScaling:{type:'table',values:Array(6).fill(0)},effects:[...before.effects.filter(e=>e.key!=='divine-healing-target-max-health'),{key:'divine-healing-target-max-health',type:'heal',target:'allyOrCompanion',value:0,unit:'fraction',reference:'targetMaxHealth',valueScaling:{type:'table',values:[0,0,0,0,0.03,0.05]},durationSeconds:0}],description_de:'Nutzt die Macht Auroras, um ein einzelnes verbündetes Ziel einmalig zu heilen. Sechs Skillstufen. Grundheilung 550 HP auf Stufe 1 und +430 je weiterer Stufe: 550, 980, 1410, 1840, 2270, 2700 HP. Auf Stufe 5 zusätzlich 3 Prozent des Maximal-Lebens desselben Ziels, auf Stufe 6 stattdessen insgesamt 5 Prozent. Dieser prozentuale Anteil wird zur Grundheilung derselben Anwendung addiert, nicht als separater Cast ausgeführt. Mana 283 auf Stufe 1 und +185 je weiterer Stufe, auf Stufe 5 1023 und auf Stufe 6 1208. Cooldown 80 Sekunden und je weiterer Stufe 2 Sekunden weniger, auf Stufe 5 72 und auf Stufe 6 70 Sekunden. Castzeit 0,6 Sekunden. Einmalige Heilung nach der Castzeit, keine anschließende Wirkungsdauer oder Heilticks.',description_eng:'Uses the power of Aurora to heal one allied target once. Six skill levels. Base healing 550 HP plus 430 per additional level: 550, 980, 1410, 1840, 2270, 2700 HP. Level 5 adds 3 percent of that same target’s maximum health; level 6 instead adds a total of 5 percent. The percentage component is added to base healing within the same activation, not cast separately. Mana 283 plus 185 per additional level: 1023 at level 5, 1208 at level 6. Cooldown 80 seconds minus 2 per additional level: 72 at level 5, 70 at level 6. Cast time 0.6 seconds. One healing application after casting, no lingering duration or healing ticks.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/divine-healing-six-levels-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:58},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:58});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Divine Healing verified: level 5 2270 +3% target max HP; level 6 2700 +5%, 1208 Mana, 70s cooldown.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
