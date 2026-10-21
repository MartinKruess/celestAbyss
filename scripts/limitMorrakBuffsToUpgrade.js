import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:237});
 if(!before?.summonedCreatureSettings)throw Error('Missing definition');
 const set={summonedCreatureSettings:{...before.summonedCreatureSettings,baseSummonGrantsAttributeBuffs:false,attributeBuffsRequireLearnedUpgrade:true},description_de:before.description_de.replace('Nur solange Morrak beschworen ist, erhält der Anwender +5 Victim, +5 Wisdom und -500 Max-HP. Diese Effekte gelten nicht allein durch das Lernen der Passiven.','Die ursprüngliche questgebundene Nahkampf-Version gibt dem Anwender keine Attributboni. Erst mit gelernter Verbesserung Morraks Meister erhält der Anwender +5 Victim und +5 Wisdom, und nur solange der verbesserte Fernkampf-Morrak beschworen ist. Lernen allein gewährt keine dauerhaften Attributboni. Der Beschwörungspreis von -500 Max-HP gilt während der Beschwörung weiterhin auch für die Grundversion.'),description_eng:before.description_eng.replace('Only while summoned the caster gains +5 Victim, +5 Wisdom and -500 max HP, not merely for learning this passive.','The original quest-granted melee version grants no caster attribute buffs. Only after learning Morrak’s Master does the caster gain +5 Victim and +5 Wisdom while the upgraded ranged Morrak is summoned; merely learning the passive grants no permanent attribute bonuses. The -500 max-HP summon penalty continues to apply while summoned, including the base version.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/morrak-upgrade-only-buffs-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:237},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:237});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Morrak buffs verified: base grants none, learned upgrade grants Victim/Wisdom only while summoned.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}
