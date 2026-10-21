import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const set={cooldownScaling:{type:'linear',base:47,perLevel:-1},attackArea:{shape:'circle',center:'caster',radiusMeters:2,target:'enemiesInArea',evaluation:'atImpact',timingStatus:'pending'},movement:{type:'verticalJump',forwardDistanceMeters:0,heightStatus:'provisional'},effects:[],description_de:'Springt senkrecht hoch und schlägt mit der Waffe auf den Boden. Trifft Gegner in einem kreisförmigen Bereich mit 2 Metern Radius um dich, ohne Vorwärtsbewegung oder zusätzlichen Debuff. Der physische Grundangriffswert steigt von 391 um 131 je weiterer Stufe auf 1570. Die Mana-Kosten steigen von 174 um 92 je weiterer Stufe auf 1002. Der Cooldown sinkt von 47 um 1 Sekunde je weiterer Stufe auf 38 Sekunden. Die Aktion beginnt ohne zusätzliche Cast Time; die Animation dauert vorläufig 0,5 Sekunden. Sprunghöhe und genauer Trefferzeitpunkt werden im Spiel geprüft.',description_eng:'Jumps vertically and slams the weapon into the ground. Hits enemies within a circular 2 meter radius around you, with no forward movement or additional debuff. Physical base attack increases from 391 by 131 per additional level to 1570. Mana cost increases from 174 by 92 per additional level to 1002. Cooldown decreases from 47 by 1 second per additional level to 38 seconds. The action begins without additional cast time; provisional animation duration is 0.5 seconds. Jump height and exact impact timing will be verified in game.'};
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.findOne({nr:106});if(!before)throw Error('Missing skill');
await new SkillDataModel({...before,...set}).validate();
await fs.writeFile('data/balancing/leap-strike-area-before.json',JSON.stringify(before,null,2)+'\n');
await SkillDataModel.collection.updateOne({_id:before._id},{$set:set});
const after=await SkillDataModel.collection.findOne({_id:before._id});for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
await fs.writeFile('data/balancing/cooldown-review-policy.json',JSON.stringify({default:'Cooldown decreases with learned skill level',exceptions:'Preserve explicitly agreed fixed cooldowns; decide unreviewed skills individually',automaticRewrite:false,leapStrikeAnimationNote:'Vertical jump visually comparable to double jump; no gameplay dependency on learning Double Jump. Height and animation timing pending in-game verification.'},null,2)+'\n');
console.log('Leap Strike verified: cooldown 47 to 38 s; 2 m radius at impact around caster; no forward displacement or extra effects. Animation timing remains pending.');
}catch(e){console.error(`Leap Strike area update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}
