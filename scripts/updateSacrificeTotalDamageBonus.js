import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:83});
 if(!before?.attackSacrificeSettings)throw Error('Missing sacrifice definition');
 const settings={...before.attackSacrificeSettings,damageBonusBasis:'totalAttackSkillDamage',damageBonusFractionScaling:{type:'linear',base:0.001,perLevel:0.001},excludesBasicAttacks:true,basicAttackInteractionStatus:'defined'};
 delete settings.skillBaseDamageBonusFractionScaling;
 const set={attackSacrificeSettings:settings,description_de:'Permanenter passiver Skill. Bei jeder eigenen Angriffsskill-Anwendung werden je gelerntem Skilllevel 0,05 Prozent des maximalen Lebens geopfert und der gesamte Schaden dieses Angriffsskills um 0,1 Prozent erhöht. Auf Stufe 10: 0,5 Prozent Max-Leben Kosten pro Anwendung für 1 Prozent mehr gesamten Angriffsskill-Schaden, einschließlich Waffen-/Charakteranteil; nicht nur Skill-Grundschaden. Auto-Attacks sind ausgeschlossen. Lebenspreis einmal pro Anwendung, nicht je Mehrfachtreffer oder Feldtick. Jede wiederholte Seelenqual-Anwendung zählt separat. Beispiele auf Stufe 10: Bei 5000 Max-HP kostet jede Anwendung 25 HP; 15 Anwendungen kosten 375 HP vor Regeneration und Heilung. Ein Angriff mit 1000 Schaden gewinnt 10, mit 10000 Schaden 100 zusätzlichen Schaden, vor etwaigen noch offenen Verrechnungsregeln. Der bisherige feste Victim-Bonus entfällt. Nicht offensive Skills, tödlicher Lebenspreis, genaue Reihenfolge der Schadensmultiplikatoren sowie HP-Regeneration werden noch geprüft. Keine eigene aktive Nutzung, Castzeit oder Cooldown.',description_eng:'Permanent passive. Each own attack-skill activation sacrifices 0.05 percent of maximum health per learned level and increases that skill’s total damage by 0.1 percent per learned level. At level 10: 0.5 percent max-health cost per activation for 1 percent additional total attack-skill damage, including weapon/character contribution, not just skill base damage. Basic attacks are excluded. Health cost once per activation, not per multi-hit or field tick. Every repeated Soul Torment activation counts separately. Level-10 examples: at 5000 max HP each activation costs 25 HP; 15 activations cost 375 before regeneration or healing. An attack dealing 1000 gains 10 damage, one dealing 10000 gains 100, subject to damage-order rules still pending. Replaces the old fixed Victim bonus. Non-offensive skill interaction, lethal health costs, exact multiplier order and health regeneration remain pending. No manual activation, cast time or cooldown.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/sacrifice-total-damage-bonus-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:83},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:83});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Sacrifice verified: total attack-skill damage bonus up to1%, basic attacks excluded.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
