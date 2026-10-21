import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:83});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={resourceCosts:[],attackSacrificeSettings:{healthReference:'maxHealth',healthCostFractionScaling:{type:'linear',base:0.0005,perLevel:0.0005},skillBaseDamageBonusFractionScaling:{type:'linear',base:0.001,perLevel:0.001},oncePerAttackSkillActivation:true,costsPerHit:false,basicAttackInteractionStatus:'pending',nonAttackSkillInteractionStatus:'pending',lethalCostPolicyStatus:'pending'},description_de:'Permanenter passiver Skill mit Lebensopfer bei Angriffsskill-Anwendungen, kein fortlaufender Verbrauch pro Regenerationstick. Je gelerntem Skilllevel werden 0,05 Prozent des maximalen Lebens geopfert und der Skill-Grundschaden um 0,1 Prozent erhöht. Auf Stufe 10: 0,5 Prozent Max-Leben Kosten pro Angriffsskill-Anwendung für 1 Prozent mehr Skill-Grundschaden. Charakter-/Waffenangriff wird nicht durch diesen Bonus erhöht. Lebenspreis einmal pro Anwendung, nicht je Mehrfachtreffer oder Feldtick. Jede wiederholte Seelenqual-Anwendung zählt separat. Der bisherige feste Victim-Bonus entfällt zugunsten dieser Wirkung. Wechselwirkung mit Auto-Attacks, nicht offensiven Skills, tödlichem Lebenspreis und HP-Regeneration bleibt noch zu prüfen. Keine eigene aktive Nutzung, keine Castzeit, kein Cooldown.',description_eng:'Permanent passive with health sacrifice on attack-skill activations, not continuous regeneration-tick drain. Each learned level sacrifices 0.05 percent of maximum health and increases skill base damage by 0.1 percent. At level 10: 0.5 percent max-health cost per attack-skill activation for 1 percent additional skill base damage. Does not increase character/weapon attack. Health is charged once per activation, not per multi-hit or field tick. Every repeated Soul Torment activation counts separately. Replaces the old fixed Victim bonus. Interaction with basic attacks, non-offensive skills, potentially lethal health costs and health regeneration remains pending. No manual activation, cast time or cooldown.'};
 const candidate={...before,...set};delete candidate.vic;
 await new SkillDataModel(candidate).validate();
 await fs.writeFile('data/balancing/sacrifice-per-attack-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:83},{$set:set,$unset:{vic:''}});
 const after=await SkillDataModel.collection.findOne({nr:83});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Sacrifice verified: at level10 0.5% max HP per attack skill, +1% skill base damage.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
