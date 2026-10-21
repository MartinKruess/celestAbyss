import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[228,231]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const mana=(base,perLevel)=>[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:perLevel===undefined?'fixed':'linear',base,...(perLevel===undefined?{}:{perLevel})}}];
 const updates=[{nr:228,set:{resourceCosts:mana(150),castTimeSeconds:0.3,dur:9,description_de:'Erschafft für 9 Sekunden eine schützende Barriere mit 4 Metern Radius um dich. Du und Verbündete innerhalb der Barriere erleiden 20 Prozent weniger magischen Schaden. Wer den Bereich verlässt, verliert den Schutz. Kostet 150 Mana, Castzeit 0,3 Sekunden. Bestehender Cooldown 300 Sekunden.',description_eng:'Creates a protective barrier with a 4-meter radius around you for 9 seconds. You and allies inside take 20 percent less magical damage. Leaving the area removes protection. Costs 150 Mana; cast time 0.3 seconds. Existing cooldown 300 seconds.'}},
 {nr:231,set:{statScaling:{matk:{type:'linear',base:17,perLevel:9}},resourceCosts:mana(21,6),cd:16,cooldownScaling:{type:'linear',base:16,perLevel:-1},castTimeSeconds:0,animationDurationSeconds:0.2,animationTimingStatus:'provisional',durationScaling:{type:'table',values:Array(10).fill(0)},description_de:'Schleudert einen schwach leuchtenden Energieball auf deinen Gegner; dieser kann ebenfalls als Lichtquelle dienen. Magischer Grundschaden 17 auf Stufe 1, +9 je weiterer Stufe, insgesamt 98 auf Stufe 10. Mana 21, +6 je weiterer Stufe, insgesamt 75. Cooldown 16 Sekunden, -1 je weiterer Stufe, auf Stufe 10 7 Sekunden. Castzeit 0 Sekunden. Vorläufige Flug-/Animationszeit ungefähr 0,2 Sekunden, keine anhaltende Schadenswirkung. Eine eigenständige Leuchtdauer ist noch nicht festgelegt.',description_eng:'Throws a faintly glowing energy ball at the enemy; it can also serve as a light source. Magical base damage 17 at level 1, +9 per additional level, reaching 98 at level 10. Mana 21 plus 6 per additional level, totaling 75. Cooldown 16 minus 1 per additional level, reaching 7 seconds. Cast time 0 seconds. Provisional flight/animation time approximately 0.2 seconds; no lingering damage. A separate illumination duration remains undefined.'}}];
 for(const u of updates)await new SkillDataModel({...before.find(s=>s.nr===u.nr),...u.set}).validate();
 await fs.writeFile('data/balancing/barrier-luminus-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Sanctified Barrier and Luminus saved and verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
