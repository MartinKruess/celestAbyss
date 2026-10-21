import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {summonedCreatureStats} from '../services/summonedCreatureStats.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:244});assert(b);const s=structuredClone(b);delete s._id;delete s.levelProgression;s.maxSkillLv=2;
 s.effects=[...(s.effects??[]).filter(e=>!e.key?.startsWith('nature-spirit-level-two-')),...['vita','int','wis'].map(stat=>({key:'nature-spirit-level-two-'+stat,type:'statModifier',target:'companion',stat,value:10,unit:'flat',durationSeconds:0,minimumSkillLevel:2,valueScaling:{type:'table',values:[0,10]}}))];
 s.description_de=s.description_de.replace('Eine lernbare Stufe,','Zwei lernbare Stufen. Auf Stufe 2 erhält ausschließlich der Naturgeist zusätzlich je 10 Vitalität, Intelligenz und Willenskraft, zusätzlich zu Vererbung und Bindung. Der Druide erhält diese Boni nicht. Unverändert auf beiden Stufen:');
 s.description_eng=s.description_eng.replace('One learnable level,','Two learnable levels. At level 2, the Nature Spirit itself gains an additional 10 Vitality, 10 Intelligence and 10 Wisdom on top of inheritance and Bond. These bonuses do not apply to the Druid. Unchanged at both levels:');
 s.levelProgression=buildSkillProgression(s);await new SkillDataModel(s).validate();
 const one=resolveSkillAtLevel(s,1),two=resolveSkillAtLevel(s,2),a=summonedCreatureStats(one),z=summonedCreatureStats(two);
 assert.equal(z.maxHealth-a.maxHealth,300);assert.equal(z.magicalAttack-a.magicalAttack,18);assert.equal(z.physicalDefense-a.physicalDefense,20);assert.equal(z.magicalDefense-a.magicalDefense,20);assert.equal(one.mana,two.mana);
 const backup='data/balancing/history/before-nature-spirit-second-level-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');await col.updateOne({_id:b._id},{$set:s});const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
 await fs.writeFile('data/balancing/nature-spirit-second-level-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:244,maximumLevel:2,creatureBonus:{vitality:10,intelligence:10,wisdom:10},manaAndTiming:'unchanged'},null,2)+'\n');console.log('Verified Nature Spirit second level: creature-only +10 VIT / INT / WIS.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}
