import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===194),skill=structuredClone(before);
assert.equal(before.maxSkillLv,10);
const values=[1,1,2,2,3,3,4,4,5,5];
for(const key of ['str','vita','wis']){skill[key]=1;skill.statScaling[key]={type:'table',base:1,values:[...values]};}
skill.int=1;skill.statScaling.int={type:'linear',base:1,perLevel:1};
skill.description_de='Eigenbuff mit zehn Stufen für 600 Sekunden. Stärke, Vitalität und Willenskraft steigen jeweils gemäß Stufentabelle 1/1/2/2/3/3/4/4/5/5. Intelligenz steigt um 1 je Skillstufe von 1 auf 10. Wirkt ausschließlich auf dich selbst; keine Faith- oder Victim-Boni. Aktivierungskosten unverändert: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist von der Castzeit getrennt. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.';
skill.description_eng='Self buff with ten levels lasting 600 seconds. Strength, Vitality and Wisdom each follow the level table 1/1/2/2/3/3/4/4/5/5. Intelligence increases by one per skill level from 1 to 10. Affects only the caster; no Faith or Victim bonuses. Activation costs unchanged: 50 Mana at level 1 plus 13 per additional level, up to 167 Mana before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds at all levels, unaffected by attack or cast speed. Animation duration is separate. Ongoing Mana drain is calculated separately.';
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=10;level++){
 const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
 for(const key of ['str','vita','wis'])assert.equal(r[key],values[level-1]);assert.equal(r.int,level);
 for(const key of ['mana','dur','cd','castTimeSeconds','resourceCosts','timingModifiers','statBonusTargets'])assert.deepEqual(r[key],old[key]);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Strength/Vitality/Wisdom 1 to 5, Intelligence 1 to 10, all Mana costs and timing unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:194});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-master-elements-attributes-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=Object.fromEntries(['str','vita','wis','int','statScaling','description_de','description_eng','levelProgression'].map(k=>[k,skill[k]]));
 const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/master-elements-attributes-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:194,strengthVitalityWisdomByLevel:values,intelligenceByLevel:[1,2,3,4,5,6,7,8,9,10],manaAndTimingUnchanged:true,maxSkillLevel:10},null,2)+'\n');
 console.log('Verified Master of Elements database update.');
}catch(error){console.error('Master of Elements update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}
