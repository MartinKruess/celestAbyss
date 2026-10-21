import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:218});
 if(before?.maxSkillLv!==3)throw Error('Unexpected skill');
 const set={statScaling:{matk:{type:'linear',base:291,perLevel:109}},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:115,perLevel:47}}],cd:130,cooldownScaling:{type:'linear',base:130,perLevel:-5},castTimeSeconds:0.5,dur:1,durationScaling:{type:'table',values:[1,2,4]},prisonSettings:{preventsMovement:true,preventsLeaving:true,blocksMagicalAttacks:true,magicalAttackBlockingScopeStatus:'pending',physicalAttackInteractionStatus:'pending',bossInteractionStatus:'pending'},effectsVersion:1,effects:[{key:'light-crystal-prison-root',type:'control',target:'enemy',controlKind:'root',durationSeconds:1,durationScaling:{type:'table',values:[1,2,4]}}],description_de:'Erschafft ein kristallenes Gefängnis aus Licht. Der Gegner kann sich darin nicht bewegen und das Gefängnis nicht verlassen. Dauer auf Stufe 1/2/3: 1/2/4 Sekunden. Magische Angriffe werden blockiert; ob dies eingehende, ausgehende oder beide Richtungen betrifft, ist noch zu klären. Verhalten physischer Angriffe und Sonderregeln für große Gegner oder Bosse sind noch offen. Magischer Grundschaden 291 auf Stufe 1, +109 je weiterer Stufe, insgesamt 509 auf Stufe 3. Kein wiederholter Schaden festgelegt. Mana 115, +47 je weiterer Stufe, insgesamt 209. Cooldown 130 Sekunden, -5 je weiterer Stufe, auf Stufe 3 120 Sekunden. Castzeit 0,5 Sekunden.',description_eng:'Creates a crystalline prison of light. The enemy cannot move inside or leave it. Duration at levels 1/2/3: 1/2/4 seconds. Magical attacks are blocked; whether this applies to incoming attacks, outgoing attacks or both remains pending. Physical attack interactions and special rules for large enemies or bosses remain pending. Magical base damage 291 plus 109 per additional level, totaling 509 at level 3. No repeated damage defined. Mana 115 plus 47 per additional level, totaling 209. Cooldown 130 minus 5 per additional level, reaching 120 seconds at level 3. Cast time 0.5 seconds.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/light-crystal-prison-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:218},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:218});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Light Crystal Prison saved and verified, durations 1/2/4 seconds.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
