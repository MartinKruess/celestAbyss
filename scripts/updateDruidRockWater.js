import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const cost=[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:54,perLevel:16}}];
const common={mana:54,castTimeSeconds:0.6,resourceCosts:cost};
const changes=[{nr:192,set:{...common,statScaling:{pdef:{type:'linear',base:18,perLevel:18},vita:{type:'table',values:[0,0,0,0,0,0,0,0,0,5]}},description_de:'Erhöht die physische Verteidigung deiner Gruppe einschließlich dir selbst um 18 je gelerntem Skilllevel, bis zu 180 auf Stufe 10. Auf Stufe 10 kommen zusätzlich 5 Vitalität hinzu. Die Mana-Kosten steigen von 54 um 16 je weiterer Stufe auf 198. Castzeit 0,6 Sekunden, Dauer 1800 Sekunden, Cooldown 60 Sekunden.',description_eng:'Increases physical defense for your group, including yourself, by 18 per learned skill level, reaching 180 at level 10. Level 10 additionally grants 5 Vitality. Mana cost increases from 54 by 16 per additional level to 198. Cast time is 0.6 seconds, duration is 1800 seconds, cooldown is 60 seconds.'}},{nr:193,set:{...common,description_de:'Erhöht auf Skilllevel 1 die Mana-Regeneration deiner Gruppe um 15. Pro weiterem Skilllevel steigt der Bonus um 5 und es kommen 9 magischer Angriff hinzu. Auf Skilllevel 10 erhält die Gruppe +60 Mana-Regeneration und +81 magischen Angriff. Die Mana-Kosten steigen von 54 um 16 je weiterer Stufe auf 198. Castzeit 0,6 Sekunden, Dauer 1800 Sekunden, Cooldown 60 Sekunden.',description_eng:'At skill level 1, increases your group mana regeneration by 15. Each additional level adds 5 mana regeneration and 9 magical attack, reaching 60 mana regeneration and 81 magical attack at level 10. Mana cost increases from 54 by 16 per additional level to 198. Cast time is 0.6 seconds, duration is 1800 seconds, cooldown is 60 seconds.'}}];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const backups=[];for(const c of changes){const before=await SkillDataModel.collection.findOne({nr:c.nr});if(!before)throw Error('Missing skill');await new SkillDataModel({...before,...c.set}).validate();backups.push(before);}
await fs.writeFile('data/balancing/druid-rock-water-before.json',JSON.stringify(backups,null,2)+'\n');
for(const c of changes){await SkillDataModel.collection.updateOne({nr:c.nr},{$set:c.set,...(c.nr===192?{$unset:{vita:''}}:{})});const after=await SkillDataModel.collection.findOne({nr:c.nr});for(const[k,v]of Object.entries(c.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
console.log('Rock and Water buffs updated and verified.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
