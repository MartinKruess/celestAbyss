import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:72});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={effectsVersion:1,effects:[{key:'life-drainer-flat-heal',type:'heal',target:'self',value:35,unit:'flat',valueScaling:{type:'linear',base:35,perLevel:35},durationSeconds:0},{key:'life-drainer-damage-heal',type:'heal',target:'self',value:0,unit:'fraction',reference:'damageDealt',damageBasis:'actualHealthDamage',damageSource:'caster',targetSkillNumber:72,appliesTo:'specificSkill',valueScaling:{type:'table',values:[0,0,0,0,0,0,0,0,0,0.01]},minimumSkillLevel:10,durationSeconds:0}],description_de:'Greift einen Gegner einmalig magisch an und heilt den Anwender. Magischer Skill-Grundschaden 112 auf Stufe 1 und +43 je weiterer Stufe, auf Stufe 10 499. Mana 67 und +43 je weiterer Stufe, auf Stufe 10 454. Cooldown gleichmäßig von 45 auf 40 Sekunden über zehn Stufen. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden, kein Schaden über Zeit. Einmalige Selbstheilung: 35 HP je gelerntem Skilllevel, insgesamt 350 HP auf Stufe 10. Erst auf Stufe 10 zusätzlich 1 Prozent des tatsächlich durch diese Anwendung verursachten Lebensschadens. Beide Komponenten gehören zu derselben Heilung. Beispiele auf Stufe 10: 6000 Schaden heilt 410 HP; 10000 heilt 450 HP; 20000 heilt 550 HP; 100000 heilt 1350 HP. Kein höherer prozentualer Lebensraub und keine automatische prozentuale Steigerung über die Skillstufen. Heil-Auslösung bei verfehltem oder vollständig abgewehrtem Angriff wird noch geklärt.',description_eng:'Attacks one enemy once with magic and heals the caster. Magical skill base damage 112 plus 43 per additional level, reaching 499 at level 10. Mana 67 plus 43 per additional level, reaching 454. Cooldown decreases linearly from 45 to 40 seconds across ten levels. Cast time 0.1 seconds, provisional animation 0.5 seconds, no damage over time. One self-heal: 35 HP per learned skill level, totaling 350 at level 10. Only at level 10 additionally restores 1 percent of actual health damage dealt by this activation. Both components form the same heal. Level-10 examples: 6000 damage heals 410 HP; 10000 heals 450; 20000 heals 550; 100000 heals 1350. No higher percentage lifesteal or automatic percentage growth across skill levels. Healing on missed or fully blocked attacks remains pending.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/life-drainer-healing-final-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:72},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:72});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Life Drainer healing verified: 35 HP per level; at level10 350 HP +1% actual damage.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
