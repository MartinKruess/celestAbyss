import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:180});
 if(before?.maxSkillLv!==10)throw Error('Unexpected skill');
 const set={statScaling:{matk:{type:'linear',base:171,perLevel:58}},resourceCosts:[{resource:'soulFragments',reference:'currentSoulFragments',unit:'flat',scaling:{type:'linear',base:3,perLevel:3}}],cd:85,cooldownScaling:{type:'linear',base:85,perLevel:-1},castTimeSeconds:0.3,animationDurationSeconds:4,animationTimingStatus:'provisional',durationScaling:{type:'table',values:Array(10).fill(0)},hasLingeringDamage:false,attackExecution:{hitCount:1,damageValueScope:'perHit'},attackArea:{shape:'rectangle',center:'caster',maxTargets:6,target:'enemiesInArea',evaluation:'atImpact',geometryStatus:'pending'},description_de:'Unabhängiger einmaliger magischer Flächenangriff in einem rechteckigen Bereich vor dem Anwender, trifft bis zu sechs Gegner. Kein anhaltendes Feld, keine Keim-Markierungen und keine Voraussetzung durch Seelenfessel, Seelenqual oder Seelenernte. Verbraucht 3 Seelenfragmente auf Stufe 1 und +3 je weiterer Stufe, auf Stufe 10 30; kostet kein Mana. Der benötigte Seelenvorrat muss vorhanden und der Cooldown bereit sein. Magischer Grundschaden je getroffenem Gegner 171, +58 je weiterer Stufe, auf Stufe 10 693. Cooldown 85 Sekunden, -1 je weiterer Stufe, auf Stufe 10 76 Sekunden. Castzeit 0,3 Sekunden, vorläufige Animation 4 Sekunden auf allen Stufen. Genau ein Treffer je Gegner, kein Schaden über Zeit. Länge und Breite des Rechtecks, genauer Trefferzeitpunkt und Blockieren anderer Aktionen während der Animation bleiben offen.',description_eng:'Independent one-time magical area attack in a rectangle in front of the caster, hitting up to six enemies. No persistent field, seed marks or Soul Shackle/Torment/Harvest requirement. Consumes 3 soul fragments at level 1 plus 3 per additional level, reaching 30 at level 10; no Mana cost. Requires sufficient fragments and ready cooldown. Magical base damage per hit enemy 171 plus 58 per additional level, reaching 693. Cooldown 85 minus 1 per additional level, reaching 76 seconds. Cast time 0.3 seconds, provisional animation 4 seconds at every level. Exactly one hit per enemy, no damage over time. Rectangle length/width, hit timing and action blocking during animation remain pending.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/soul-plague-area-attack-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:180},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:180});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Soul Plague verified: 3–30 souls, damage171–693, max6 targets, cooldown85–76.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
