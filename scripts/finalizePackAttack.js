import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:249});if(!before?.packAttackSettings)throw Error('Missing Pack Attack');
 const costs=Array.from({length:20},(_,i)=>Math.round((273+154*i)*.25));
 const set={castTimeSeconds:.4,castTimeStatus:'defined',cd:70,cooldownScaling:{type:'linear',base:70,perLevel:-1},mana:costs[0],resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'table',base:costs[0],values:costs}}],manaPricing:{category:'normal',factor:.25,basis:'skillBaseDamagePerTarget',usesCharacterAttack:false,version:1},
 description_de:'Rudelangriff, 20 Stufen. Der Abenteurer springt zurück, gibt bis zu zwei verfügbaren Begleitern Zeit zur Positionierung und stürmt zum gemeinsamen Angriff vor. Der Rücksprung ist Animation und darf parallel zur Castzeit von 0,4 Sekunden laufen; keine zusätzliche festgelegte Animationssperre. Grundschaden 273 +154 je weiterer Stufe bis 3199, dazu einmal eigener aktueller P-Angriff und einmal die Angriffskraft jedes teilnehmenden Pets. Auch allein oder mit einem Pet nutzbar, eine gemeinsame Schadensanzeige. Cooldown 70 Sekunden, -1 je weiterer Stufe bis 51, beginnend nach Castende. Mana 25 % des Skill-Grundschadens, je Stufe auf ganze Mana gerundet: 68 bis 800; Spieler-/Pet-Angriff nicht Teil der Kostenbasis. Reichweite, genaue Animation/Trefferzeitpunkte und Verrechnung magischer Pet-Angriffe noch offen.',
 description_eng:'20 levels. Backstep, allow up to two companions to position, then charge. Backstep animation may overlap the 0.4-second cast; no additional specified animation lock. Base273 +154 per additional level to3199, plus current owner physical attack and each participating companion attack once. Usable solo. Cooldown70 -1 per additional level to51 after cast end. Mana is25% of skill base rounded per level:68 to800, excluding owner/companion attack. Range, exact animation/hit times and magical companion mapping pending.'};
 await new SkillDataModel({...before,...set}).validate();
 const dir='data/balancing/history/before-pack-attack-timing-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill249-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 await col.updateOne({nr:249},{$set:set});if(!isDeepStrictEqual(await col.findOne({nr:249}),{...before,...set}))throw Error('Read-back mismatch');console.log('Verified Pack Attack: cast0.4, cooldown70–51, mana68–800 (25% rounded skill base).');
}catch(e){console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
